import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {queryAddressList, queryCategoryList, queryFocusList} from "../../api";

interface FocusState {
    loading: boolean;
    error: string | null;
    data: any;
}

const initialState: FocusState = {
    loading: false,
    error: null,
    data: null,
};

export const queryFocus = createAsyncThunk(
    "focus/queryFocus",
    async (thunkAPI) => {
        const {data} = await queryFocusList();
        if (data.code !== 0) {
            throw new Error(data.message)
        }
        return data.data;
    }
);

export const focusSlice = createSlice({
    name: "focus",
    initialState,
    reducers: {
    },
    extraReducers: {
        [queryFocus.pending.type]: (state) => {
            state.loading = true;
        },
        [queryFocus.fulfilled.type]: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        [queryFocus.rejected.type]: (state, action: PayloadAction<string | null>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});
