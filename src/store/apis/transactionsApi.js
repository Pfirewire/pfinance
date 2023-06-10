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
        return {
            fetchTransactionsByAccountAndDays: builder.query({
                providesTags: (result, error, arg) => {
                    const tags = result.map(transaction => {
                        return { type: 'Transaction', id: transaction.id };
                    });
                    tags.push({ type: 'AccountTransaction', id: arg.account.id })
                },
                query(arg) {
                    return {
                        url: `/transactions/${arg.account.id}/${arg.days}`,
                    };
                },
            }),
        };
    },
});

export const {
    useFetchTransactionsByAccountAndDaysQuery,
} = transactionsApi;
export {transactionsApi};