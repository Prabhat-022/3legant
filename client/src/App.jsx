import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Index from "./componets/Index";
import Shop from "./componets/shoppingpage/Shop";
import CheckoutDetails from "./componets/shoppingCart/CheckoutDetails";
import ShoppingCart from "./componets/shoppingCart/ShoppingCart";
import OrderCompleted from "./componets/shoppingCart/OrderCompleted";
import AdminDashboard from "./componets/admin/AdminDashboard";
import AdminProductStock from "./componets/admin/AdminProductStock";
import AdminProducts from "./componets/admin/adminProducts/AdminProducts";
import ProductPage from "./componets/products/ProductPage";
// import UserProfile from "./componets/user/userProfile";
import Contact from "./componets/Contact";
import EditProduct from "./componets/admin/adminProducts/EditProduct";
import AddNewProduct from "./componets/admin/adminProducts/AddNewProduct";
import Layout from "./componets/Layout";
import CartIndex from "./componets/shoppingCart/CartIndex";




const router = createBrowserRouter([

  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "contact",
        element: <Contact />,
      }, {
        path: "product-details",
        element: <ProductPage />,
      }

    ],
  },

  {
    path: "/admin-dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "edit-product",
    element: <EditProduct />,
  },
  {
    path: "/addnew-product",
    element: <AddNewProduct />,
  },
  {
    path: "/product-stock",
    element: <AdminProductStock />,
  },
  {
    path: '/product',
    element: <AdminProducts />
  },


  {
    path: "cart",
    element: <CartIndex />,
    children: [
      {
        path: 'ShoppingCart',
        element: <ShoppingCart />
      },
      {
        path: 'CheckoutDetails',
        element: <CheckoutDetails />

      },
      {
        path: 'OrderCompleted',
        element: <OrderCompleted />

      },
    ]
  },

  {
    path: "*",
    element: <div className="">
      <h1>404 not found</h1>
    </div>
  },

  {
    path: "/signup",
    element: <Signup />,
  },

  {
    path: "/signin",
    element: <Signin />,
  }

])

const App = () => {

  return (
    <RouterProvider router={router} />
  );
};

export default App;
