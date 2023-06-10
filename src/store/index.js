import {configureStore} from "@reduxjs/toolkit";
import {keysReducer, setJwtToken, setLinkToken} from "./slices/KeysSlice";
import {accountsReducer, setAccounts, addAccount, addAccounts} from "./slices/AccountsSlice";
import {setupListeners} from "@reduxjs/toolkit/query";
import {budgetsApi} from "./apis/budgetsApi";
import {categoriesApi} from "./apis/categoriesApi";
import {bucketsApi} from "./apis/bucketsApi";
import {transactionsApi} from "./apis/transactionsApi";

const store = configureStore({
    reducer: {
        keys: keysReducer,
        accounts: accountsReducer,
        [budgetsApi.reducerPath]: budgetsApi.reducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer,
        [bucketsApi.reducerPath]: bucketsApi.reducer,
        [transactionsApi.reducerPath]: transactionsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(budgetsApi.middleware)
            .concat(categoriesApi.middleware)
            .concat(bucketsApi.middleware)
            .concat(transactionsApi.middleware)
        ;
    },
});

setupListeners(store.dispatch);

export {
    store,
    setJwtToken,
    setLinkToken,
    setAccounts,
    addAccount,
    addAccounts
};

export {
    useFetchCurrentBudgetQuery
} from './apis/budgetsApi';

export {
    useFetchCategoriesQuery,
    useAddCategoryMutation,
    useEditCategoryMutation,
    useDeleteCategoryMutation,
} from './apis/categoriesApi';

export {
    useFetchBucketsByCategoryQuery,
    useAddBucketMutation,
    useEditBucketMutation,
    useDeleteBucketMutation,
} from './apis/bucketsApi';

export {

} from './apis/transactionsApi';