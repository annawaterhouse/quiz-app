import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Root from './layout/Root'
import Category from './layout/Category'
import Decks from './layout/Decks'
import './styles.scss'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Decks /> },
      { path: "/:id", element: <Category /> },
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

