import {
    AnyAction,
    createAsyncThunk,
    Slice,
    SliceCaseReducers,
    ThunkDispatch
} from "@reduxjs/toolkit"

export function createAsyncAction<
    State,
    CaseReducers extends SliceCaseReducers<State>,
    SliceName extends string,
    ThunkArg
>({
    name,
    slice,
    runner,
    onError
}: {
    name: string
    slice: Slice<State, CaseReducers, SliceName>
    runner: (
        state: State,
        dispatch: ThunkDispatch<{ [n in SliceName]: State }, unknown, AnyAction>,
        arg: ThunkArg
    ) => Promise<void>
    onError: (
        e: unknown,
        dispatch: ThunkDispatch<{ [n in SliceName]: State }, unknown, AnyAction>
    ) => void
}) {
    return createAsyncThunk<void, ThunkArg, { state: { [n in SliceName]: State } }>(
        name,
        async (arg, { getState, dispatch }) => {
            try {
                const currentState = getState()[slice.name]
                await runner(currentState, dispatch, arg)
            } catch (e) {
                onError(e, dispatch)
            }
        }
    )
}