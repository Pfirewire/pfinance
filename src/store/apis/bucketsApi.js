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
            fetchBucketsByCategory: builder.query({
                providesTags: (result, error, arg) => {
                    const tags = result.map(bucket => {
                        return { type: 'Bucket', id: bucket.id };
                    });
                    tags.push( {type: 'CategoryBuckets', id: arg.id });
                    return tags;
                },
                query(category) {
                    return {
                        url: `/buckets/${category.id}`,
                    };
                },
            }),
            addBucket: builder.mutation({
                invalidatesTags: (result, error, arg) => {
                  return [{type:"CategoryBuckets", id:arg.category.id}]
                },
                query: bucket => {
                    return {
                        url: `/buckets/${bucket.category.id}`,
                        method: 'POST',
                        body: {
                            name: bucket.name,
                            recurringAmount: bucket.recurringAmount,
                            maximumAmount: bucket.maximumAmount
                        }
                    }
                }
            }),
            editBucket: builder.mutation({
                invalidatesTags: (result, error, arg) => {
                    return [{ type: 'Bucket', id: arg.id }];
                },
                query: bucket => {
                    return {
                        url: `/bucket/${bucket.id}`,
                        method: 'PUT',
                        body: {
                            name: bucket.name,
                            recurringAmount: bucket.recurringAmount,
                            maximumAmount: bucket.maximumAmount,
                        },
                    };
                },
            }),
            deleteBucket: builder.mutation({
                invalidatesTags: (result, error, arg) => {
                    return [{ type: 'Bucket', id: arg.id }];
                },
                query: bucket => {
                    return {
                        url: `/bucket/${bucket.id}`,
                        method: 'DELETE',
                    };
                },
            }),
        };
    },
});

export const {
    useFetchBucketsByCategoryQuery,
    useAddBucketMutation,
    useEditBucketMutation,
    useDeleteBucketMutation,
} = bucketsApi;
export {bucketsApi};