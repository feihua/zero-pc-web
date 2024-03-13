import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {queryAddressList, queryCategoryList, queryCouponList} from "../../api";

interface CouponState {
    loading: boolean;
    error: string | null;
    data: any;
}

const initialState: CouponState = {
    loading: false,
    error: null,
    data: null,
};

export const queryCoupon = createAsyncThunk(
    "coupon/queryCoupon",
    async (thunkAPI) => {
        const {data} = await queryCouponList();
        if (data.code !== 0) {
            throw new Error(data.message)
        }
        return data.data;
    }
);

export const couponSlice = createSlice({
    name: "coupon",
    initialState,
    reducers: {
    },
    extraReducers: {
        [queryCoupon.pending.type]: (state) => {
            state.loading = true;
        },
        [queryCoupon.fulfilled.type]: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        [queryCoupon.rejected.type]: (state, action: PayloadAction<string | null>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});
