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
                providesTags: (result, error, arg) => {
                    const tags = result.map(group => {
                        return { type: 'Group', id: group.id };
                    });
                    tags.push( {type: 'AllGroups' });
                    return tags;
                },
                query() {
                    return {
                        url: "/groups",
                    };
                },
            }),
            addGroup: builder.mutation({
                invalidatesTags: (result, error, arg) => {
                    return [{ type: 'AllGroups' }];
                },
                query: name => {
                    return {
                        url: "/groups",
                        method: 'POST',
                        body: {
                            name: name,
                        },
                    };
                },
            }),
            editGroup: builder.mutation({
                invalidatesTags:(result, error, arg) => {
                    return [{ type: 'Group', id: arg.id }];
                },
                query: group => {
                    return {
                        url: `/group/${group.id}`,
                        method: 'POST',
                        body: {
                            name: group.name
                        },
                    };
                },
            }),
        };
    }
});

export const {
    useFetchGroupsQuery,
    useAddGroupMutation,
    useEditGroupMutation,
} = groupsApi;
export {groupsApi};