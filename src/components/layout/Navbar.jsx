import React from "react";
import Topbar from "./Topbar";
import MainNavbar from "./MainNavbar";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full font-sans">
      <Topbar />
      <MainNavbar />
    </header>
  );
}