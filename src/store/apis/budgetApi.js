import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const budgetApi = createApi({
    reducerPath: 'budget',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/api',
    }),
    endpoints(builder) {
        return {
            fetchBudget: builder.query({

            })
        }
    }
});