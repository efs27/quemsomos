import Details from "./pages/details";
import Home from "./pages/home";
import ListProducts from "./pages/list-products";
import NotFound from "./pages/not-found";
import SearchProducts from "./pages/search-result";
import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import QuemSomos from "./pages/quem-somos";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import UserProducts from "./pages/user-products";
import FormProduct from "./pages/form-products";
import ContactForm from "./pages/contact-form";

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
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/my-products",
      element: <UserProducts />,
    },
    {
      path: "/form-product",
      element: <FormProduct />,
    },
    {
      path: "/contact",
      element: <ContactForm />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
