import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {get} from "../../network/axiosServices";


const initialState = {
    loading: false,
    posts: [],
    error: '',
    detail: [],
    detailLoading: false,
    detailError: ''
}

export const fetchUser = createAsyncThunk("fetchData", (params) => {
    return get(params);
});


export const fetchUserDetail = createAsyncThunk("fetchDataDetail", (params) => {
    return get(params);
});

const userSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchUser.pending, (state) => {
            state.loading = true
            state.posts = []
            state.error = ''
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = false
            state.posts = action.payload
            state.error = ''
        })
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.loading = false
            state.posts = []
            state.error = action.error
        })

        builder.addCase(fetchUserDetail.pending, (state, action) => {
            state.detailLoading = true
            state.detail = []
            state.detailError = ''
        })
        builder.addCase(fetchUserDetail.fulfilled, (state, action) => {
            state.detailLoading = false
            state.detail = action.payload
            state.detailError = ''
        })
        builder.addCase(fetchUserDetail.rejected, (state, action) => {
            state.detailLoading = false
            state.detail = []
            state.detailError = action.error
        })

    }
})


export default userSlice.reducer
