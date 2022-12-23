import { RequiredOnly } from "../type/helper/error"

export class Example {
    id?: string
    username?: string
}

export type ExampleA = RequiredOnly<Example, 'id'>
export type ExampleB = RequiredOnly<Example, 'username'>
export type ExampleC = RequiredOnly<Example, 'id' | 'username'>