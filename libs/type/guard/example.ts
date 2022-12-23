import { ExampleA, ExampleB, ExampleC } from "../../model/Example";

export function isExampleA(example: any): example is ExampleA {
    return example && "id" in example
}

export function isExampleB(example: any): example is ExampleB {
    return example && "username" in example
}

export function isExampleC(example: any): example is ExampleC {
    return example && ['id', 'username']
        .map((key) => key in example)
        .includes(false) === false
} 