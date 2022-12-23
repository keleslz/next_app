import { ReactNode } from "react"

type Props = {
    p1?: string
}

export const Example  = (props: Props) : ReactNode => {
    return <div>{props.p1}</div>
}