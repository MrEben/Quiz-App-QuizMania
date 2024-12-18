import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();

  // Check if the current route is part of the dashboard
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <>
      {/* Conditionally render Header and Footer */}
      {!isDashboard && <Header />}
      <main>
        <Outlet />
      </main>
      {!isDashboard && <Footer />}
    </>
  );
};

export default Layout;
