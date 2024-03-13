import {actionLog} from "./middlewares/actionLog";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./user/slice";
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {categoriesSlice} from "./categories/slice";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user", "categories"]
}

const rootReducer = combineReducers({
    user: userSlice.reducer,
    categories: categoriesSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), actionLog],
    devTools: true,
});

const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export default {store, persistor};
