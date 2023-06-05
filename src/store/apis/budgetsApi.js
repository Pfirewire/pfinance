import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";




const budgetsApi = createApi({
    reducerPath: 'budgets',
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
            fetchCurrentBudget: builder.query({
                query() {
                    return {
                        url: "/budget/current",
                    };
                },
            }),
        };
    }
});

export const {
    useFetchCurrentBudgetQuery
} = budgetsApi;
export {budgetsApi};