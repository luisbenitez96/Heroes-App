import React from "react";
import { Navbar } from "../../ui";
import { Navigate, Route, Routes } from "react-router";
import { DcPage, HeroPages, MarvelPage, SearchPage } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />

          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:id" element={<HeroPages />} />

          {/* Search */}

          <Route path="/" element={<Navigate to="/dc" />} />
        </Routes>
      </div>
    </>
  );
};
