import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ILogin, IRegister, userLogin, userRegister} from "../../api";

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

//用户注册
export const register = createAsyncThunk(
    "user/register",
    async (param: IRegister, thunkAPI) => {
        const {data} = await userRegister(param)
        if (data.code !== 0) {
            throw new Error(data.message)
        }
        return data.data;
    }
);

// 用户登录
export const login = createAsyncThunk(
    "user/signIn",
    async (param: ILogin, thunkAPI) => {
        const {data} = await userLogin(param)
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
        [register.pending.type]: (state) => {
            state.loading = true;
        },
        [register.fulfilled.type]: (state, action) => {
            state.token = action.payload.token;
            state.loading = false;
            state.error = null;
        },
        [register.rejected.type]: (state, action) => {
            state.loading = false;
            console.log('action', action)
            state.error = action.error.message;
        },
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
