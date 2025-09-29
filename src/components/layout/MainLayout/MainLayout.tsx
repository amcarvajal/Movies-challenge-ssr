import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import "./mainLayout.scss";
import Footer from "../Footer/Footer";

export default function MainLayout() {
  return (
    <div>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
