import api from "../store/api";

const quizApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCards: builder.query({
      query: () => "/cards",
      transformResponse: (response) => response.data,
      providesTags: ["Cards"],
    }),
    getCategories: builder.query({
      query: () => "/cards/categories",
      transformResponse: (response) => response.data,
      providesTags: ["Categories"],
    }),
    getByCategory: builder.query({
      query: (id) => `/cards/byCategory/${id}`,
        transformResponse: (response) => response.data,
    }),
    createCard: builder.mutation({
      query: (card) => ({
        url: "/cards/create/card",
        method: "POST",
        body: card,
      }),
      invalidatesTags: ["Cards", "Categories"],
    }),
    createCategory: builder.mutation({
      query: (name) => ({
        url: "/cards/create/category",
        method: "POST",
        body: name,
      }),
      invalidatesTags: ["Cards", "Categories"],
    }),
  }),
});

export const {
  useGetCardsQuery,
  useGetCategoriesQuery,
  useGetByCategoryQuery,
} = quizApi;