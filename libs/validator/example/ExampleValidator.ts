import { FieldValidator } from "../FieldValidator";
import { IErrorValidator } from "../IErrorValidator";
import { z } from "zod"
import { ExampleB } from "../../model/Example";

type T = ExampleB

export class ExampleValidator extends IErrorValidator<T> {
    public validate(arg: T) {
        const schema = z.object({
            username: FieldValidator.username(),
        })

        this.validateMessage(schema, arg)
    }
}