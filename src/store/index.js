import {configureStore} from "@reduxjs/toolkit";
import {keysReducer, setJwtToken, setLinkToken} from "./slices/KeysSlice";
import {setupListeners} from "@reduxjs/toolkit/query";
import {budgetsApi} from "./apis/budgetsApi";
import {categoriesApi} from "./apis/categoriesApi";
import {bucketsApi} from "./apis/bucketsApi";

const store = configureStore({
    reducer: {
        keys: keysReducer,
        [budgetsApi.reducerPath]: budgetsApi.reducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer,
        [bucketsApi.reducerPath]: bucketsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(budgetsApi.middleware)
            .concat(categoriesApi.middleware)
            .concat(bucketsApi.middleware)
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