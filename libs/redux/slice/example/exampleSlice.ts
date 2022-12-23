import { LoadingState } from "../../../type/redux/loading-state"
import { customSlice } from "../../customSlice"


const initialState: LoadingState = "pending"

const exampleSlice = customSlice({
	name: 'example',
	initialState,
	reducers: {},
})

export default exampleSlice