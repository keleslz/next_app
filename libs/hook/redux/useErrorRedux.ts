import errorSlice from "../../redux/slice/errorSlice"
import { useAppDispatch, useAppSelector } from "./useRedux"


export function useErrorRedux() {
	const error = useAppSelector((state) => state.error)
	const dispatch = useAppDispatch()

	return {
		error,
		errorActions: {
			error: (code: string | null, message: string) => dispatch(errorSlice.actions.error({ code, message })),
			clear: () => dispatch(errorSlice.actions.clear())
		}
	}
} 