import {configureStore} from "@reduxjs/toolkit";
import {keysReducer, setJwtToken, setLinkToken} from "./slices/KeysSlice";
import {setupListeners} from "@reduxjs/toolkit/query";
import {groupsApi} from "./apis/groupsApi";

const store = configureStore({
    reducer: {
        keys: keysReducer,
        [groupsApi.reducerPath]: groupsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(groupsApi.middleware)
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