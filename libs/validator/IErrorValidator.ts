import { z } from "zod"

export abstract class IErrorValidator<D> {

	private errors: z.ZodIssue[] = []

    public abstract validate(...arg: any): void

    protected validateMessage(schema: z.ZodSchema, data: D): z.ZodIssue[] | D {
    	try {
    		schema.parse(data)
			return data
    	} catch (e: any) {
    		const error: z.ZodError = e
    		this.errors.push(...error.errors)
    		return this.errors
    	}
    }

    public get hasError(): boolean {
    	return this.errors.length > 0
    }

    public get first(): z.ZodIssue | null {
    	if (this.hasError) {
    		return this.errors[0]
    	}
    	return null
    }

    public get formated(): { field: string, message: string } | null {
    	if (this.hasError) {
    		const e = this.errors[0]
    		const field = e.path[0]?.toString()
    		return {
    			field: field ?? "Client error occured",
    			message: e.message,
    		}
    	}
    	return null
    }

    public clear(): void {
    	this.errors = []
    }


}