import { configureStore } from "@reduxjs/toolkit";
import baseApi from "./Features/API/baseApi";

const store = configureStore({
    reducer: { [baseApi.reducerPath]: baseApi.reducer, },

    middleware: (getDefaultMiddleware) => {
        getDefaultMiddleware().concat(baseApi.middleware)
    }
})

export default store;