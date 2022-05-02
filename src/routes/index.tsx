import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//PageLists
import AdminOutlet from "./AdminOutlet";
import UserOutlet from "./UserOutlet";
import PrivateOutlet from "./PrivateOutlet";
import IndexPage from "pages/index";
import NotFoundPage from "pages/notfound";
import Login from "pages/Login";
import UserPage from "pages/UserPage";
import AdminPage from "pages/AdminPage";
import Dashboard from "pages/Dashboard";
import Member from "pages/Member";

function Routess() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    window.addEventListener("resize", setupScreen);
    return () => window.removeEventListener("resize", setupScreen);
  }, []);

  const setupScreen = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<IndexPage />} />
        <Route path="/Login" element={<Login />} />

        <Route path="/" element={<PrivateOutlet />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/" element={<AdminOutlet />}>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/member" element={<Member />} />
        </Route>
        <Route path="/" element={<UserOutlet />}>
          <Route path="/user" element={<UserPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routess;
