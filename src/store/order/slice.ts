import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {queryOrderList} from "../../api";

interface OrderState {
    loading: boolean;
    error: string | null;
    data: any;
}

const initialState: OrderState = {
    loading: false,
    error: null,
    data: null,
};

export const queryOrder = createAsyncThunk(
    "order/queryOrder",
    async (thunkAPI) => {
        const {data} = await queryOrderList();
        if (data.code !== 0) {
            throw new Error(data.message)
        }
        return data.data;
    }
);

export const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        logOut: (state) => {
            state.data = null;
            state.error = null;
            state.loading = false;
        },
    },
    extraReducers: {
        [queryOrder.pending.type]: (state) => {
            state.loading = true;
        },
        [queryOrder.fulfilled.type]: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        [queryOrder.rejected.type]: (state, action: PayloadAction<string | null>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});
