import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./Component/UI/MainLayout";
import { Home } from "./Component/Pages/Home";
import { FetchOld } from "./Component/Pages/FetchOld";
import { FetchRQ } from "./Component/Pages/FetchRQ";
import './App.css';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import FetchRQInd from "./Component/UI/FetchRQInd";
import Flex from "./Component/UI/Flex";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "trad",
        element: <FetchOld />,
      },
      {
        path: "flex",
        element: <Flex />,
      },
      {
        path: "/rq",
        element: <FetchRQ />,
      },
      {
        path: "/rq/:id",
        element: <FetchRQInd />,
      },
    ],
  },
]);
const App = () => {

  const queryClient= new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    
  )
};

export default App;
