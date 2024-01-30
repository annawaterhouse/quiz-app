import api from "../../store/api";

const quizApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCards: builder.query({
      query: () => "/cards",
      transformResponse: (response) => response.data,
      providesTags: ["Cards"],
    }),
  }),
});

export const { useGetCardsQuery } = quizApi;
