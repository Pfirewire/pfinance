import {configureStore} from "@reduxjs/toolkit";
import {keysReducer, setJwtToken, setLinkToken} from "./slices/KeysSlice";
import {setupListeners} from "@reduxjs/toolkit/query";
import {categoriesApi} from "./apis/categoriesApi";
import {bucketsApi} from "./apis/bucketsApi";

const store = configureStore({
    reducer: {
        keys: keysReducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer,
        [bucketsApi.reducerPath]: bucketsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
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