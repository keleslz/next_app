export type RequiredOnly<Type, K extends keyof Type> = Required<Pick<Type, K>>

export type ErrorField = {
    message: null
    fieldName: null
} | {
    message: string
    fieldName: string
}