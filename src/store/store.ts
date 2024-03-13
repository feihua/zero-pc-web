import {actionLog} from "./middlewares/actionLog";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./user/slice";
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {categoriesSlice} from "./categories/slice";
import {addressSlice} from "./address/slice";
import {brandSlice} from "./brand/slice";
import {cartSlice} from "./cart/slice";
import {collectionSlice} from "./collection/slice";
import {couponSlice} from "./coupon/slice";
import {focusSlice} from "./focus/slice";
import {historySlice} from "./history/slice";
import {homeSlice} from "./home/slice";
import {orderSlice} from "./order/slice";
import {productSlice} from "./product/slice";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user", "category", "home"]
}

const rootReducer = combineReducers({
    address: addressSlice.reducer,
    brand: brandSlice.reducer,
    cart: cartSlice.reducer,
    category: categoriesSlice.reducer,
    collection: collectionSlice.reducer,
    coupon: couponSlice.reducer,
    focus: focusSlice.reducer,
    history: historySlice.reducer,
    home: homeSlice.reducer,
    order: orderSlice.reducer,
    product: productSlice.reducer,
    user: userSlice.reducer,


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

