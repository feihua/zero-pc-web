import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {queryCollectionList} from "../../api";

interface CollectionState {
    loading: boolean;
    error: string | null;
    data: any;
}

const initialState: CollectionState = {
    loading: false,
    error: null,
    data: null,
};

export const queryCollection = createAsyncThunk(
    "collection/queryCollection",
    async (thunkAPI) => {
        const {data} = await queryCollectionList();
        if (data.code !== 0) {
            throw new Error(data.message)
        }
        return data.data;
    }
);

export const collectionSlice = createSlice({
    name: "collection",
    initialState,
    reducers: {},
    extraReducers: {
        [queryCollection.pending.type]: (state) => {
            state.loading = true;
        },
        [queryCollection.fulfilled.type]: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        [queryCollection.rejected.type]: (state, action: PayloadAction<string | null>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});
