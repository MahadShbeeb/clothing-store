import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import Products from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage";
import FavoritesPage from "./pages/FavoritesPage";
import OrdersPage from "./pages/OrdersPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import AboutPage from "./pages/AboutPage";
import FAQPage from "./pages/FAQPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/products", element: <Products /> },
      { path: "/products/:id", element: <ProductDetailsPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/favorites", element: <FavoritesPage /> },
      { path: "/orders", element: <OrdersPage /> },
      { path: "/orders/:id", element: <OrderDetailsPage /> },
      { path: "/login", element: <SignInPage /> },
      { path: "/signup", element: <SignUpPage /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/faq", element: <FAQPage /> },
    ],
  },
]);

export default router;
