import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";




const categoriesApi = createApi({
    reducerPath: 'categories',
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
            fetchCategories: builder.query({
                providesTags: (result, error, arg) => {
                    const tags = result.map(category => {
                        return { type: 'Category', id: category.id };
                    });
                    tags.push( {type: 'AllCategories' });
                    return tags;
                },
                query() {
                    return {
                        url: "/categories",
                    };
                },
            }),
            addCategory: builder.mutation({
                invalidatesTags: (result, error, arg) => {
                    return [{ type: 'AllCategories' }];
                },
                query: name => {
                    return {
                        url: "/categories",
                        method: 'POST',
                        body: {
                            name: name,
                        },
                    };
                },
            }),
            editCategory: builder.mutation({
                invalidatesTags:(result, error, arg) => {
                    return [{ type: 'Category', id: arg.id }];
                },
                query: category => {
                    return {
                        url: `/category/${category.id}`,
                        method: 'PUT',
                        body: {
                            name: category.name
                        },
                    };
                },
            }),
            deleteCategory: builder.mutation({
                invalidatesTags: (result, error, arg) => {
                    return [{ type: 'Category', id: arg.id }];
                },
                query: category => {
                    return {
                        url: `/category/${category.id}`,
                        method: 'DELETE',
                    };
                },
            }),
        };
    },
});

export const {
    useFetchCategoriesQuery,
    useAddCategoryMutation,
    useEditCategoryMutation,
    useDeleteCategoryMutation,
} = categoriesApi;
export {categoriesApi};