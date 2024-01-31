import api from "../store/api";
import { createSlice } from "@reduxjs/toolkit";

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

const categorySlice = createSlice({
    name: "category",
    initialState: {
      name: "",
      id: null,
    },
    reducers: {
        update: (state, action) => {
          const { name, id } = action.payload;
          return {...state, name, id};
        },
    },
});

export const { update } = categorySlice.actions;
export default categorySlice.reducer;
