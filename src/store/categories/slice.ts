import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {queryCategoryList} from "../../api";

interface CategoriesState {
    loading: boolean;
    error: string | null;
    data: any;
}

const initialState: CategoriesState = {
    loading: false,
    error: null,
    data: null,
};

export const queryCategories = createAsyncThunk(
    "category/queryCategories",
    async (thunkAPI) => {
        const {data} = await queryCategoryList()
        if (data.code !== 0) {
            throw new Error(data.message)
        }
        return data.data;
    }
);

export const categoriesSlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        logOut: (state) => {
            state.data = {};
            state.error = null;
            state.loading = false;
        },
    },
    extraReducers: {
        [queryCategories.pending.type]: (state) => {
            state.loading = true;
        },
        [queryCategories.fulfilled.type]: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        [queryCategories.rejected.type]: (state, action: PayloadAction<string | null>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});
