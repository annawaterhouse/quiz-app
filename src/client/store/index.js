import { configureStore } from "@reduxjs/toolkit"
import api from "./api";
import modeReducer from "../layout/navigation/modeSlice";


const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    mode: modeReducer,
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
