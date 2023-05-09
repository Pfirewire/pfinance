import {configureStore} from "@reduxjs/toolkit";
import {keysReducer, setJwtToken, setLinkToken} from "./slices/KeysSlice";
import {setupListeners} from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer: {
        keys: keysReducer,
    },
});

setupListeners(store.dispatch);

export {
    store,
    setJwtToken,
    setLinkToken
};