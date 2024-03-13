import {actionLog} from "./middlewares/actionLog";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./user/slice";
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {categoriesSlice} from "./categories/slice";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user", "category"]
}

const rootReducer = combineReducers({
    user: userSlice.reducer,
    category: categoriesSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({
        serializableCheck: false
    }), actionLog],
    devTools: true,
});

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

