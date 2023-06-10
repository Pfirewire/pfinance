import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const transactionsApi = createApi({
    reducerPath: 'transactions',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/api',
        prepareHeaders: (headers, { getState }) => {
            const jwtToken = getState().keys.jwtToken;
            if(jwtToken) {
                headers.set('Authorization', `Bearer ${jwtToken}`);
                return headers;
            }
        },
    }),
    endpoints(builder) {

    },
});

export const {

} = transactionsApi;
export {transactionsApi};