import {
  createBrowserRouter,
} from "react-router-dom";
import Characters from '@/pages/characters'
import EachCharacterEpisode from "@/pages/characters/[id]";
import HomePage from "@/pages/home";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/characters",
    element: <Characters />
  },
  {
    path: `/characters/:id`,
    element: <EachCharacterEpisode />
  },
]);