import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Authen from "components/hoc/Authen";

function PrivateOutlet() {
  console.log("ผ่านหน้า Outlet");
  const useAuth = () => {
    return true;
  };
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default Authen(PrivateOutlet);
