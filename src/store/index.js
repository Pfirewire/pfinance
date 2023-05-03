import {configureStore} from "@reduxjs/toolkit";
import {jwtReducer, setToken} from "./slices/JwtSlice";
import {setupListeners} from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer: {
        jwt: jwtReducer,
    },
});

setupListeners(store.dispatch);

export {
    store,
    setToken
};