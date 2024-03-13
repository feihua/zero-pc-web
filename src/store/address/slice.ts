import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {queryAddressList} from "../../api";

interface AddressState {
    loading: boolean;
    error: string | null;
    data: any;
}

const initialState: AddressState = {
    loading: false,
    error: null,
    data: null,
};

export const queryAddress = createAsyncThunk(
    "address/queryAddress",
    async (thunkAPI) => {
        const {data} = await queryAddressList();
        if (data.code !== 0) {
            throw new Error(data.message)
        }
        return data.data;
    }
);

export const addressSlice = createSlice({
    name: "address",
    initialState,
    reducers: {},
    extraReducers: {
        [queryAddress.pending.type]: (state) => {
            state.loading = true;
        },
        [queryAddress.fulfilled.type]: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        [queryAddress.rejected.type]: (state, action: PayloadAction<string | null>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});
