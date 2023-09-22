import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {get} from "../../network/axiosServices";


const initialState = {
    loading: false,
    posts: [],
    error: '',

}

export const fetchContact = createAsyncThunk("fetchData", (params) => {
    return get(params);
});



const userSlice = createSlice({
    name: 'contact',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchContact.pending, (state) => {
            state.loading = true
            state.posts = []
            state.error = ''
        })
        builder.addCase(fetchContact.fulfilled, (state, action) => {
            state.loading = false
            state.posts = action.payload
            state.error = ''
        })
        builder.addCase(fetchContact.rejected, (state, action) => {
            state.loading = false
            state.posts = []
            state.error = action.error
        })


    }
})


export default userSlice.reducer
