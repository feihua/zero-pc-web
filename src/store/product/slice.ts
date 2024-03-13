import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {queryAddressList, queryCategoryList, queryProductList} from "../../api";

interface ProductState {
    loading: boolean;
    error: string | null;
    data: any;
}

const initialState: ProductState = {
    loading: false,
    error: null,
    data: null,
};

export const queryProduct = createAsyncThunk(
    "product/queryProduct",
    async (thunkAPI) => {
        const {data} = await queryProductList();
        if (data.code !== 0) {
            throw new Error(data.message)
        }
        return data.data;
    }
);

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
    },
    extraReducers: {
        [queryProduct.pending.type]: (state) => {
            state.loading = true;
        },
        [queryProduct.fulfilled.type]: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        [queryProduct.rejected.type]: (state, action: PayloadAction<string | null>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});
