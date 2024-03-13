import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {queryAddressList, queryCategoryList, queryHistoryList} from "../../api";

interface HistoryState {
    loading: boolean;
    error: string | null;
    data: any;
}

const initialState: HistoryState = {
    loading: false,
    error: null,
    data: null,
};

export const queryHistory = createAsyncThunk(
    "history/queryHistory",
    async (thunkAPI) => {
        const {data} = await queryHistoryList();
        if (data.code !== 0) {
            throw new Error(data.message)
        }
        return data.data;
    }
);

export const historySlice = createSlice({
    name: "history",
    initialState,
    reducers: {
    },
    extraReducers: {
        [queryHistory.pending.type]: (state) => {
            state.loading = true;
        },
        [queryHistory.fulfilled.type]: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        [queryHistory.rejected.type]: (state, action: PayloadAction<string | null>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});
