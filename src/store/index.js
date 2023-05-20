import {configureStore} from "@reduxjs/toolkit";
import {keysReducer, setJwtToken, setLinkToken} from "./slices/KeysSlice";
import {setupListeners} from "@reduxjs/toolkit/query";
import {groupsApi} from "./apis/groupsApi";
import {bucketsApi} from "./apis/bucketsApi";

const store = configureStore({
    reducer: {
        keys: keysReducer,
        [groupsApi.reducerPath]: groupsApi.reducer,
        [bucketsApi.reducerPath]: bucketsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(groupsApi.middleware)
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
    useFetchGroupsQuery,
    useAddGroupMutation,
    useEditGroupMutation,
    useDeleteGroupMutation,
} from './apis/groupsApi';

export {
    useFetchBucketsByGroupQuery,
    useAddBucketMutation,
    useEditBucketMutation,
} from './apis/bucketsApi';