import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {queryHomeInfo} from "../../api";

interface HomeState {
    loading: boolean;
    error: string | null;
    data: HomeData;
}

interface HomeData {
    advertiseList: any[];
    brandList: any[];
    homeFlashPromotion: any[];
    hotProductList: any[];
    newProductList: any[];
    subjectList: any[];
}

const initialState: HomeState = {
    loading: false,
    error: null,
    data: {
        advertiseList: [],
        brandList: [],
        homeFlashPromotion: [],
        hotProductList: [],
        newProductList: [],
        subjectList: []

    },
};

export const queryHome = createAsyncThunk(
    "home/queryHome",
    async (thunkAPI) => {
        const {data} = await queryHomeInfo();
        if (data.code !== 0) {
            throw new Error(data.message)
        }
        return data.data;
    }
);

export const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {},
    extraReducers: {
        [queryHome.pending.type]: (state) => {
            state.loading = true;
        },
        [queryHome.fulfilled.type]: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        [queryHome.rejected.type]: (state, action: PayloadAction<string | null>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});
