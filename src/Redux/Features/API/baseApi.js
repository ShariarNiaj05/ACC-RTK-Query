import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => "/posts"
        }),
        getPostById: builder.query({
            query: (id) => `/posts/${id}`
        }),
        getUsers: builder.query({
            query: () => "/users"
        })
    })
})

export const { useGetPostsQuery, useGetPostByIdQuery, useGetUsersQuery } = baseApi;
export default baseApi;