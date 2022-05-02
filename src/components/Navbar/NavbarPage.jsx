import React from "react";
import Navbaruser from "./NavbarUser";
import NavbarAdmin from "./NanbarAdmin";
import typeStore from "store/type";
import { useSelector } from "react-redux";

function NavbarPage() {
  const email = useSelector((state: typeStore) => state.user);

  return email.role === "admin" ? <NavbarAdmin /> : <Navbaruser />;
}

export default NavbarPage;
