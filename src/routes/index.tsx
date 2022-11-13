import {createBrowserRouter} from 'react-router-dom'
import Characters from '@/pages/characters'
import EachCharacterEpisode from '@/pages/characters/[id]'
import HomePage from '@/pages/home'
import ErrorPage from '@/pages/error'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },

  {
    path: '/characters',
    element: <Characters />,
    errorElement: <ErrorPage />,
  },
  {
    path: `/characters/:id`,
    element: <EachCharacterEpisode />,
    errorElement: <ErrorPage />,
  },
  {
    path: `/error`,
    element: <ErrorPage />,
  },
])
