import { createSlice, CreateSliceOptions, Draft, Slice, SliceCaseReducers } from "@reduxjs/toolkit"

export const customSlice = <State, CaseReducers extends SliceCaseReducers<State>, Name extends string = string>(params: CreateSliceOptions<State, CaseReducers, Name>) => {
    return createSlice<State, CaseReducers   & { reinitState: (state: Draft<State>) => void }, Name>({
        name: params.name,
        initialState: params.initialState,
        reducers: {
            ...params.reducers,
            reinitState: (state) => {
                for (const key in state) {
                    const initState = params.initialState
                    if (Object.prototype.hasOwnProperty.call(state, key) &&  typeof initState === 'object'  &&  Object.prototype.hasOwnProperty.call(initState, key)) {
                        //@ts-ignore TODO s'en occuper non ?
                        state[key] = initState[key]
                    }
                }
            }
        }
    })
}