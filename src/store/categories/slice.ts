import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

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
    "categories/queryCategories",
    async (paramaters: {

    }, thunkAPI) => {
        const {data} = await axios.get(
            `http://110.41.179.89/app/api/category/queryProductCateList`
        );

        console.log('categories_data', data)
        return data;
    }
);

export const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        logOut: (state) => {
            state.data = null;
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
