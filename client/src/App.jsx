import {  createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Index from "./componets/Index";
import Shop from "./componets/shoppingpage/Shop";
// import CheckoutDetails from "./componets/shoppingCart/CheckoutDetails";
// import ShoppingCart from "./componets/shoppingCart/ShoppingCart";
// import OrderCompleted from "./componets/shoppingCart/OrderCompleted";
import AdminDashboard from "./componets/admin/AdminDashboard";
import AdminProductStock from "./componets/admin/AdminProductStock";
// import AdminProducts from "./componets/admin/adminProducts/AdminProducts";
import ProductPage from "./componets/products/ProductPage";
// import UserProfile from "./componets/user/userProfile";
import Contact from "./componets/Contact";
import EditProduct from "./componets/admin/adminProducts/EditProduct";
import AddNewProduct from "./componets/admin/adminProducts/AddNewProduct";
import Layout from "./componets/Layout";

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
    path: "admin",
    element: <AdminDashboard />,
    children: [
      {
        path: "index",
        element: <AdminDashboard />,
      },
      {
        path: "edit-product",
        element: <EditProduct />,
      },
      {
        path: "addnew-product",
        element: <AddNewProduct />,
      },
      {
        path: "product-stock",
        element: <AdminProductStock />,
      },
      {

      }]
  },
  {
    path: "*",
    element: <div className="">
      <h1>404 not found</h1>
    </div>
  }, {
    path: "/signup",
    element: <Signup />,
  }, {
    path: "/signin",
    element: <Signin />,
  }

])
const App = () => {

  return (
    <RouterProvider router={router} />
    //     <BrowserRouter>
    //       <Routes>

    //         <Route path="/" element={<Layout />}>
    //           <Route index element={<Index />} />
    //           <Route path="shop" element={<Shop />} />
    //           <Route path="contact" element={<Contact />} />
    //           <Route path="product-details" element={<ProductPage />} />

    //           <Route path="shopping-cart" element={<ShoppingCart />} />
    //           <Route path="checkout" element={<CheckoutDetails />} />
    //           <Route path="order-completed" element={<OrderCompleted />} />

    //           <Route path="user-profile" element={<UserProfile />} />


    //         </Route>

    //         <Route path="/signup" element={<Signup />} />
    //         <Route path="/signin" element={<Signin />} />
    // {/* 
    //         <Route path="admin">
    //           <Route index element={<Navigate to="index" />} />
    //           <Route path="index" element={<AdminDashboard />} />
    //           <Route path="edit-product" element={<EditProduct />} />
    //           <Route path="addnew-product" element={<AddNewProduct />} />
    //           <Route path="product-stock" element={<AdminProductStock />} />
    //           <Route path="products" element={<AdminProducts />} />
    //         </Route> */}

    //           <Route path="/admin" element={<AdminDashboard />} />
    //           <Route path="/admin-edit-product" element={<EditProduct />} />
    //           <Route path="/admin-addnew-product" element={<AddNewProduct />} />
    //           <Route path="/admin-product-stock" element={<AdminProductStock />} />
    //           <Route path="/admin-products" element={<AdminProducts />} />

    //       </Routes>
    //     </BrowserRouter>
  );
};

export default App;
