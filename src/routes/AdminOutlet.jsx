import React from "react";
import Authen from "components/hoc/Authen";
import typeStore from "store/type";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function AdminOutlet() {
  const { role } = useSelector((state: typeStore) => state.user);
  const useAuth = () => {
    if (role === "admin") {
      return true;
    } else {
      alert("ระดับผู้ใช้ไม่ถูกต้อง");
      return false;
    }
  };
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default Authen(AdminOutlet);
