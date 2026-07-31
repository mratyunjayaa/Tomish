import { TopBar } from "./TopBar";
import { MainNavbar } from "./MainNavbar";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full font-sans">
      <TopBar />
      <MainNavbar />
    </header>
  );
}