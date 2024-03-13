import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userLogin} from "../../api";

interface UserState {
    loading: boolean;
    error: string | null;
    token: string | null;
}

const initialState: UserState = {
    loading: false,
    error: null,
    token: null,
};

export const login = createAsyncThunk(
    "user/signIn",
    async (paramaters: {
        mobile: string,
        password: string,
    }, thunkAPI) => {
        const {data} = await userLogin(paramaters)
        if (data.code !== 0) {
            throw new Error(data.message)
        }
        return data.data;
    }
);

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logOut: (state) => {
            state.token = null;
            state.error = null;
            state.loading = false;
        },
    },
    extraReducers: {
        [login.pending.type]: (state) => {
            state.loading = true;
        },
        [login.fulfilled.type]: (state, action) => {
            state.token = action.payload.token;
            state.loading = false;
            state.error = null;
        },
        [login.rejected.type]: (state, action) => {
            state.loading = false;
            console.log('action', action)
            state.error = action.error.message;
        },
    },
});
