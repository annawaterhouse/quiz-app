import api from "../store/api";

const quizApi = api.injectEndpoints({
  endpoints: (builder) => ({
    //list view
    getCards: builder.query({
      query: () => "/cards",
      transformResponse: (response) => response.data,
      providesTags: ["Cards"],
    }),
    //navigation
    getCategories: builder.query({
      query: () => "/cards/categories",
      transformResponse: (response) => response.data,
      providesTags: ["Categories"],
    }),
    //category view
    getByCategory: builder.query({
      query: (id) => `/cards/byCategory/${id}`,
        transformResponse: (response) => response.data,
    }),
    getSaved: builder.query({
      query: () => "/cards/saved",
        transformResponse: (response) => response.data,
    }),
    createCard: builder.mutation({
      query: (card) => ({
        url: "/cards/create/card",
        method: "POST",
        body: card,
      }),
      invalidatesTags: ["Cards"],
    }),
    deleteCard: builder.mutation({
      query: (id) => ({
        url: `/cards/delete/card/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cards"],
    }),
    createCategory: builder.mutation({
      query: (name) => ({
        url: "/cards/create/category",
        method: "POST",
        body: name,
      }),
      invalidatesTags: ["Categories"],
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/cards/delete/category/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Categories"],
    }),
  }),
});

export const {
  useGetCardsQuery,
  useGetCategoriesQuery,
  useGetByCategoryQuery,
  useGetSavedQuery,
  useGetQuizQuery,
  useCreateCardMutation,
  useDeleteCardMutation,
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
} = quizApi;

