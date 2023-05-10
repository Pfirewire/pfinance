import {configureStore} from "@reduxjs/toolkit";
import {keysReducer, setJwtToken, setLinkToken} from "./slices/KeysSlice";
import {setupListeners} from "@reduxjs/toolkit/query";
import {budgetApi} from "./apis/budgetApi";

const store = configureStore({
    reducer: {
        keys: keysReducer,
        [budgetApi.reducerPath]: budgetApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(budgetApi.middleware)
        ;
    },
});

setupListeners(store.dispatch);

export {
    store,
    setJwtToken,
    setLinkToken
};

export {
    useFetchBudgetQuery,
} from './apis/budgetApi';