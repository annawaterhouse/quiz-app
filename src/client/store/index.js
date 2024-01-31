import { configureStore } from "@reduxjs/toolkit"
import api from "./api";
import categoryReducer from "../layout/quizSlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    category: categoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
