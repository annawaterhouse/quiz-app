import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Root from './layout/Root'
import Category from './layout/Category'
import Home from './layout/Home'
import Form from './components/common/Form'
import Saved from './layout/Saved'
import Decks from './layout/Decks'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/:id", element: <Category /> },
      { path: "/saved", element: <Saved /> },
      { path: "/create", element: <Form />}
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

