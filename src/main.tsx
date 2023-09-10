import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '@@routes/Home'
import ErrorPage from '@@routes/ErrorPage'
import RoomBrowser from '@@routes/RoomBrowser'
import Root from '@@components/Root'
import Room from '@@routes/Room'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/rooms',
        element: <RoomBrowser />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/room/:id',
        element: <Room />,
        errorElement: <ErrorPage />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
