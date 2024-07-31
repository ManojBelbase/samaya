import React from "react";
import Header from "../Components/SharedComponents/Header";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="">
      <Header />
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
