import { PayloadAction } from "@reduxjs/toolkit"
import { customSlice } from "../customSlice"

type ErrorState = {
	code: string | null
	message: string | null
	isVisible: boolean
}

const initialState: ErrorState = {
	code: null,
	message: null,
	isVisible: false
}

const errorSlice = customSlice({
	name: 'error',
	initialState,
	reducers: {
		error: (state, action: PayloadAction<{ code: string | null, message: string }>) => {
			state.code = action.payload.code
			state.message = action.payload.message
			state.isVisible = true
		},
		clear: (state) => {
			state.code = null
			state.message = null
			state.isVisible = false
		}
	},
})

export default errorSlice