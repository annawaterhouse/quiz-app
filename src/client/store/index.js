import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
  reducer: {
  },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(api.middleware),
});

export default store;
