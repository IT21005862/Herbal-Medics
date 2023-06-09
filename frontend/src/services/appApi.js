import{createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

//craete the api

export const appApi = createApi({
    reducerPath: "appApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9001" }),
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (user) => ({
                url: "/user/signup",
                method: "POST",
                body: user,
            }),
        }),

        sellersignup: builder.mutation({ //sellermutation(It21013300)
            query: (user) => ({
                url: "/seller/signup",
                method: "POST",
                body: user,
            }),
        }),
        

        login: builder.mutation({
            query: (user) => ({
                url: "/user/login",
                method: "POST",
                body: user,
               
            }),
        }),

}),

});

export const {
    useSignupMutation,
    useSellersignupMutation, //sellermutation(It21013300)
    useLoginMutation,
} = appApi;

export default appApi;