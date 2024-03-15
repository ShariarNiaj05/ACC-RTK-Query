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
        }),
        setPost: builder.mutation({
            query: (post) => ({
                url: `/posts`,
                method: "POST",
                body: post
            })
        })
    })
})

export const { useGetPostsQuery, useGetPostByIdQuery, useGetUsersQuery, useSetPostMutation } = baseApi;
export default baseApi;