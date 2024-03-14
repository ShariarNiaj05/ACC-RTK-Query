import { configureStore } from "@reduxjs/toolkit";
import baseApi from "./Features/API/baseApi";

const store = configureStore({
    reducer: { [baseApi.reducerPath]: baseApi.reducer, },

    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(baseApi.middleware)
    }
})

export default store;