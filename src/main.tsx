import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '@@routes/Home'
import ErrorPage from '@@routes/ErrorPage'
import Rooms from '@@routes/Rooms'
import Root from '@@components/Root'

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
        element: <Rooms />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/room/:id',
        element: <p>This is the room page</p>,
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
