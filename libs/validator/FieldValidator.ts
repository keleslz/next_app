import { z } from "zod";

export class FieldValidator {

    public static reaction() {
        return z.string({ invalid_type_error: "Must be text" })
            .min(3, 'Min characters length (3)')
            .max(4, 'Max characters length (4)')
            .regex(/^[a-z]{3,4}$/i, 'Only Characters A-Z expected')
    }

    public static notice() {
        return z.string()
            .min(4, 'Min characters length (4)')
            .max(15, 'Max characters length (15)')
    }

    public static username() {
        return z.string()
            .min(3, 'Min characters length (3)')
            .max(50, 'Max characters length (50)')
            .regex(/^[a-z0-9_-]*$/i, 'Only Characters [A-Z0-9_-] expected')
    }

    public static country() {
        return z.string()
            .min(3, 'Min characters length (3)')
            .max(50, 'Max characters length (50)')
            .regex(/^[a-z0-9-']*$/i)
    }

    public static website() {
        return z.string()
            .min(3, 'Min characters length (3)')
            .max(1000, 'Max characters length (1000)')
            .regex(/^https:\/\//i, 'Must provide secure URL')
    }

    public static description() {
        return z.string()
            .min(3, 'Min characters length (3)')
            .max(150, 'Max characters length (150)')
    }

    public static mail() {
        return z.string()
            .min(3, 'Min characters length (3)')
            .max(50, 'Max characters length (50)')
            .email('Mail format expected')
    }

    public static password() {
        return z.string()
            .min(8, 'Min characters length (8)')
            .max(50, 'Max characters length (50)')
            .regex(/[a-z]/, 'Minimum 1 lowercase character expected')
            .regex(/[A-Z]/, 'Minimum 1 uppercase character expected')
            .regex(/[0-9]/, 'Minimum 1 number expected')
            .regex(/\W+/, 'Minimum 1 special character expected')
    }

    public static pictureExtension() {
        const values = ['jpeg', 'jpg', 'gif', 'png'] as const
        return z.enum(values, {
            errorMap: () => ({message: `Extension expected ${values.toString()}`})
        })
    }
}