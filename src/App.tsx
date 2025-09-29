import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import FilmDetailPage from "./pages/FilmDetailPage/FilmDetailPage";
import MainLayout from "./components/layout/MainLayout/MainLayout";
import WishlistPage from "./pages/WishListPage/WishlistPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="film/:id" element={<FilmDetailPage />} />
        <Route path="wishlist" element={<WishlistPage />} />
      </Route>
    </Routes>
  );
}
