import React from "react";
import Header from "../Components/SharedComponents/Header";
import { Outlet } from "react-router";
import Footer from "../Components/SharedComponents/Footer";

const Layout = () => {
  return (
    <div className="">
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
