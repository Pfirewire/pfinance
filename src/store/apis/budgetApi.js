import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";




const budgetApi = createApi({
    reducerPath: 'budget',
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
        return {
            fetchBudget: builder.query({
                query() {
                    return {
                        url: "/groups",
                    };
                }
            })
        }
    }
});

export const {
    getFetchBudgetQuery
} = budgetApi;