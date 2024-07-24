import Details from "./pages/details";
import Home from "./pages/home";
import ListProducts from "./pages/list-products";
import NotFound from "./pages/not-found";
import SearchProducts from "./pages/search-result";
import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import QuemSomos from "./pages/quem-somos";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/products",
      element: <ListProducts />,
    },
    {
      path: "/products/details",
      element: <Details />,
    },
    {
      path: "/products/search",
      element: <SearchProducts />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/quemsomos",
      element: <QuemSomos />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
