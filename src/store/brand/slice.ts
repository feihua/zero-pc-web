import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {queryAddressList, queryBrandList} from "../../api";

interface BrandState {
    loading: boolean;
    error: string | null;
    data: any;
}

const initialState: BrandState = {
    loading: false,
    error: null,
    data: null,
};

export const queryBrand = createAsyncThunk(
    "brand/queryBrand",
    async (thunkAPI) => {
        const {data} = await queryBrandList();
        if (data.code !== 0) {
            throw new Error(data.message)
        }
        return data.data;
    }
);

export const brandSlice = createSlice({
    name: "brand",
    initialState,
    reducers: {},
    extraReducers: {
        [queryBrand.pending.type]: (state) => {
            state.loading = true;
        },
        [queryBrand.fulfilled.type]: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        [queryBrand.rejected.type]: (state, action: PayloadAction<string | null>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});
