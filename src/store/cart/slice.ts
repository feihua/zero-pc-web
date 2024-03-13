import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {queryCartList} from "../../api";

interface CartState {
    loading: boolean;
    error: string | null;
    data: any;
}

const initialState: CartState = {
    loading: false,
    error: null,
    data: null,
};

export const queryCart = createAsyncThunk(
    "cart/queryCart",
    async (thunkAPI) => {
        const {data} = await queryCartList();
        if (data.code !== 0) {
            throw new Error(data.message)
        }
        return data.data;
    }
);

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: {
        [queryCart.pending.type]: (state) => {
            state.loading = true;
        },
        [queryCart.fulfilled.type]: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        [queryCart.rejected.type]: (state, action: PayloadAction<string | null>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});
