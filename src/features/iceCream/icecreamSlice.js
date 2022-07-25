import { createSlice } from '@reduxjs/toolkit'

const  initialState = {
    numberOfIcecream: 10
}

const  iceCreamSlice  =  createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: ( state) => {
            state.numberOfIcecream --
        },
        restocked: (state, action) => {
             state.numberOfIcecream += action.payload
        }
    }
})

export default  iceCreamSlice.reducer
export const { ordered, restocked } = iceCreamSlice.actions 