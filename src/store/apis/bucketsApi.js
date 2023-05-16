import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const bucketsApi = createApi({
    reducerPath: 'buckets',
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
    endpoints(builder){
        return {
            fetchBucketsByGroup: builder.query({
                providesTags: (result, error, arg) => {
                    const tags = result.map(bucket => {
                        return { type: 'Bucket', id: bucket.id };
                    });
                    tags.push( {type: 'GroupBuckets', id: arg.id });
                    return tags;
                },
                query(group) {
                    return {
                        url: `/buckets/${group.id}`,
                    };
                },
            }),
        };
    },
});

export const {
    useFetchBucketsByGroupQuery,
} = bucketsApi;
export {bucketsApi};