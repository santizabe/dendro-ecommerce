import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import ProductDetails from "../pages/ProductDetails";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ForgotPassword from "../pages/ForgotPassword";
import ProtectedRoute from "./ProtectedRoute";

import AddProducts from "../admin/AddProducts";
import AllProducts from "../admin/AllProducts";
import Dashboard from "../admin/Dashboard";
import Users from "../admin/Users";

import Nosotros from "../pages/Nosotros";
import ProyectosRealizados from "../pages/ProyectosRealizados";
import Consultorias from "../pages/Consultorias";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="inicio " />} />
      <Route path="inicio" element={<Home />} />
      <Route path="Tienda" element={<Shop />} />
      <Route path="Tienda/:id" element={<ProductDetails />} />
      <Route path="Carrito" element={<Cart />} />
      <Route path="nosotros" element={<Nosotros/>}/>
      <Route path="proyectos" element={<ProyectosRealizados/>}/>
      <Route path="consultorias" element={<Consultorias/>}/>

      <Route path="/*" element={<ProtectedRoute />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dashboard/all-products" element={<AllProducts />} />
        <Route path="dashboard/add-product" element={<AddProducts />} />
        <Route path="dashboard/users" element={<Users />} />
      </Route>

      <Route path="checkout" element={<Checkout />} />
      <Route path="login" element={<Login />} />
      <Route path="password-reset" element={<ForgotPassword />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
};

export default Routers;
