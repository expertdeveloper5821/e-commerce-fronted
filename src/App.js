import React from 'react';
import './App.css';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Home from './pages/Home';
import ProductListPage from './pages/ProductListPage';
import CartPage from './pages/CartPage';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <BannerPage></BannerPage>,
  // },
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/productlist",
    element: <ProductListPage></ProductListPage>,
  },
  {
    path: "/cart",
    element: <CartPage></CartPage>
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>
  },
 
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />

    </div>
  )
};
export default App;

