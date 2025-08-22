import React from 'react'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Login from './components/AuthForm/Login'
import Register from './components/AuthForm/Register'
import Layout from './components/Layout/Layout.jsx'
import ForgotPassword from './components/AuthForm/ForgotPassword'
import Index from './components/Homepage/index.jsx'
import Shop from './components/Shop/Shop.jsx'
import Profile from './components/UserProfile/Profile.jsx'
import EditProfile from './components/UserProfile/EditProfile.jsx'
import ProductPage from './components/ProductList/ProductPage.jsx'
import About from './components/About/About.jsx'
import CartLayout from './components/Cart/CartLayout.jsx'
import ShoppingCart from './components/Cart/ShoppingCart.jsx'
import CheckoutDetails from './components/Cart/CheckoutDetails.jsx'
import OrderCompleted from './components/Cart/OrderCompleted.jsx'

// ================Admin================
import LayoutAdmin from './components/Admin/LayoutAdmin.jsx'
import Admin from './components/Admin/Admin.jsx'
import Dashboard from './components/Admin/Dashboard/Dashboard.jsx'
import ProductAdmin from './components/Admin/Product/ProductAdmin.jsx'
import AddNewProduct from './components/Admin/Product/AddNewProduct.jsx'
import Order from './components/Admin/Order/Order.jsx'
import EditExistingProduct from './components/Admin/Product/EditExistingProduct.jsx'
import Payment from './components/payment/Payment.jsx'
import Chat from './components/Admin/Inbox/Chat.jsx'

import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchProducts } from './redux/ProductSlice'



const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Register />
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />
  },
  {
    path: '/home',
    element: <Layout />,
    children: [
      {
        path: '/home',
        element: <Index />
      },
      {
        path: 'shop',
        element: <Shop />
      },

      {
        path: 'edit-profile',
        element: <EditProfile />
      },

      {
        path: 'about',
        element: <About />
      }

    ]

  },
  //product routes
  {
    path: '/',
    element: <Layout />,
    children: [

      {
        path: 'product/:id',
        element: <ProductPage />
      }
    ]
  },

  //profile routes 
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/profile',
        element: <Profile />
      },
    ]
  },

  {
    path: '/cart',
    element: <CartLayout />,
    children: [
      {
        path: '/cart',
        element: <ShoppingCart />
      }
      , {
        path: 'checkout',
        element: <CheckoutDetails />
      }
      , {
        path: 'order-completed',
        element: <OrderCompleted />
      }
    ]
  },
  {
    path: '/admin',
    element: <LayoutAdmin />,
    children: [
      {
        index: true,
        element: <Admin />
      },
      {
        path: 'admin-dashboard',
        element: <Dashboard />
      },
      {
        path: 'admin-product',
        element: <ProductAdmin />,
      },
      {
        path: 'addnew-product',
        element: <AddNewProduct />
      },
      {
        path: 'edit-product/:id',
        element: <EditExistingProduct />
      },
      {
        path: 'admin-order',
        element: <Order />
      },
      {
        path: 'admin-chat',
        element: <Chat />
      }
    ]
  },
  {
    path: '/payment',
    element: <Payment />
  }


])

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
