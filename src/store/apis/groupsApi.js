import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";




const groupsApi = createApi({
    reducerPath: 'groups',
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
            fetchGroups: builder.query({
                query() {
                    return {
                        url: "/groups",
                    };
                },
            }),
            addGroup: builder.mutation({
                query: (name) => {
                    return {
                        url: "/groups",
                        method: 'POST',
                        body: {
                            name: name,
                        },
                    };
                },
            }),
        };
    }
});

export const {
    useFetchGroupsQuery
} = groupsApi;
export {groupsApi};