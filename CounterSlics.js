import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count : 700
}

let reducersAction = {
    increment: (state) => {
        state.count += 1
    }

}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: reducersAction
})

export const { increment } = counterSlice.actions
export default counterSlice.reducer;