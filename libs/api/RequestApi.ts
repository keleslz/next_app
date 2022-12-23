export class RequestApi<ModelInput = unknown, ModelOutput = unknown, E = any> {
    private domain: string = ''
    private headers: HeadersInit = {}

    async get(uri: string): Promise<ModelOutput | E | Error> {
        try {
            const res = await fetch(`${this.domain}/${uri}`, {
                method: 'GET',
                headers: this.headers,
            })

            return await res.json() as ModelOutput
        } catch (error: unknown) {

            if (error instanceof Error && error.message === 'Failed to fetch') {
                return error
            }

            return error as E
        }
    }

    async post(uri: string, data: ModelInput): Promise<ModelOutput | E> {

        try {
            const res = await fetch(`${this.domain}/${uri}`, {
                method: 'post',
                headers: this.headers,
                body: JSON.stringify(data)
            })

            return await res.json() as ModelOutput
        } catch (error: unknown) {
            return error as E
        }
    }

    async delete(uri: string, data: ModelInput): Promise<ModelOutput | E> {

        try {
            const res = await fetch(`${this.domain}/${uri}`, {
                method: 'delete',
                headers: this.headers,
                body: JSON.stringify(data)
            })

            return await res.json() as ModelOutput
        } catch (error: unknown) {
            return error as E
        }
    }


    async file(uri: string, data: FormData): Promise<ModelOutput | E> {
        
        try {
            const res = await fetch(`${this.domain}/${uri}`, {
                method: 'post',
                headers: this.headers,
                body: data
            })

            return await res.json() as ModelOutput
        } catch (error: unknown) {
            return error as E
        }
    }

    async put(uri: string, data: ModelInput): Promise<ModelOutput | E> {
        try {
            const res = await fetch(`${this.domain}/${uri}`, {
                method: 'put',
                headers: this.headers,
                body: JSON.stringify(data)
            })

            return await res.json() as ModelOutput
        } catch (error: unknown) {
            return error as E
        }
    }

    public set setDomain(domain: string) {
        this.domain = domain
    }

    public set setHeaders(headers: HeadersInit) {
        this.headers = headers
    }

    public set setXApiToken(token: string) {
        this.headers = {
            ...this.headers,
            'x-api-token': token
        }
    }
}