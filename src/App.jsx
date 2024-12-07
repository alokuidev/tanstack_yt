import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./Component/UI/MainLayout";
import { Home } from "./Component/Pages/Home";
import { FetchOld } from "./Component/Pages/FetchOld";
import { FetchRQ } from "./Component/Pages/FetchRQ";
import './App.css';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
        path: "/rq",
        element: <FetchRQ />,
      },
    ],
  },
]);
const App = () => {

  const queryClient= new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
    
  )
};

export default App;
