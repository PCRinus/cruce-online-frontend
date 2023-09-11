import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '@@routes/Home'
import ErrorPage from '@@routes/ErrorPage'
import Lobby from '@@routes/Lobby'
import Root from '@@components/Root'
import Room from '@@routes/Room'
import { SWRConfig } from 'swr'
import fetcher from './fetcher'

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
        path: '/lobby',
        element: <Lobby />,
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
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <RouterProvider router={router} />
    </SWRConfig>
  </React.StrictMode>
)
