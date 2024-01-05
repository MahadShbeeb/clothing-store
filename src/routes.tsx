import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import Products from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage";


const router = createBrowserRouter([
    { path:'/', element:<Layout/>,
    children:[
        { path : '' , element : <HomePage/> },
        { path : '/products' , element : <Products/> },
        { path : '/products/:id' , element : <ProductDetailsPage/> },
        { path : '/cart' , element : <CartPage/> },
        { path : '/login' , element : <SignInPage/> },
        { path : '/signup' , element : <SignUpPage/> },
        { path : '/profile' , element : <ProfilePage/> },

    ]
}
])
export default router;