import React from "react";
import Header from "../Components/SharedComponents/Header";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      <Header />
      <main className="px-4 md:px-10">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
