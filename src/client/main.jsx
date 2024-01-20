import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Root from './layout/Root'
import Quiz from './features/quiz/Quiz'
import Home from './layout/Home'
import Learn from './features/learn/Learn'
import DataStr from './features/quiz/category/DataStr'
import JavaScr from './features/quiz/category/JavaScr'
import Rct from './features/quiz/category/Rct'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/quiz", element: <Quiz /> },
      { path: "/learn", element: <Learn /> },
      { path: "/ds", element: <DataStr /> },
      { path: "/js", element: <JavaScr /> },
      { path: "/react", element: <Rct /> },
    ],
  },
]);
//fix provider and redux store once setup complete
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

