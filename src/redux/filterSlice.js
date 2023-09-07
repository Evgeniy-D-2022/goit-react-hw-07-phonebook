import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        filter: '',
    },
    reducers: {
        setStatusFilter(state, action) {
            state.filter = action.payload;
        } 
    }
})

export const { setStatusFilter } = filterSlice.actions;
export default filterSlice.reducer;