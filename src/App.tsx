import Details from "./pages/details";
import Home from "./pages/home";
import ListRecentsProducts from "./pages/list-recents-products";
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
import FormProduct from "./pages/form-product";
import ContactForm from "./pages/contact-form";
import ListAllProducts from "./pages/list-all-products";
import { ToastContainer } from "react-toastify";
import FormProductEdit from "./pages/form-product-edit";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/all-recents-products",
      element: <ListRecentsProducts />,
    },
    {
      path: "/all-products",
      element: <ListAllProducts />,
    },
    {
      path: "/products/details/:id",
      element: <Details />,
    },
    {
      path: "/products/search/:product",
      element: <SearchProducts />,
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
      path: "/form-product-edit/:id",
      element: <FormProductEdit />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <div>
      <ToastContainer />
      <RouterProvider router={router} />
    </div>
  );
}
