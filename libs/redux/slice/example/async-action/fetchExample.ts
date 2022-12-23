import { createAsyncAction } from "../../../../type/redux/create-async-action";
import exampleSlice from "../exampleSlice";

export const fetchExample = createAsyncAction({
	name: "Example",
	slice: exampleSlice,
	async runner(state, dispatch, arg)  {
		// Do async action
	},
	onError(e, dispatch) {
		// Do anything when throw
	},
})
