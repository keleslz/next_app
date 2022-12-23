import { useState } from "react"

export const useError = () => {
    const [error, setError] = useState<string | null>(null)

    const clear = () => setError(null)

    return {error, setError, clear}
}