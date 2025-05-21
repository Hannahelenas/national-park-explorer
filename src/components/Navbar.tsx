import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LoginButton from "./buttons/LoginButton";
import CloseButton from "./buttons/CloseButton";

//import MenuIcon from "@mui/icons-material/Menu";
import MenuButton from "./buttons/MenuButton";

const links = [
  { name: "Home", to: "/" },
  { name: "Parks", to: "/parks" },
  { name: "About", to: "/about" },
];

// Function to style active navigation link
const getLinkClass = (isActive: boolean) =>
  `pb-1 transition ${
    isActive
      ? "text-[var(--color-primary)] border-b-2 border-[var(--color-primary)]"
      : "text-black hover:border-b-2 hover:border-black"
  }`;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full bg-white z-100">
      {" "}
      {/* Relative justerad */}
      {/* Desktop Menu */}
      <section
        className="max-w-7xl mx-auto w-full py-4 flex items-center justify-between
       font-extrabold px-4 md:px-6 lg:px-4 xl:px-0"
      >
        <Link to="/" className="text-2xl font-display tracking-tight">
          Park Explorer
        </Link>
        <ul className="hidden md:flex gap-6">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/parks"}
                className={({ isActive }) => getLinkClass(isActive)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Log in button (desktop and larger screens) */}
        <LoginButton className="hidden md:inline-block" />

        {/* Hamburger menu (mobil) */}
        <MenuButton
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(true)}
        />
      </section>
      {/* Mobile menu */}
      <section
        className={`fixed top-0 right-0 h-screen w-3/4 max-w-sm bg-white z-50 transform 
        transition-transform duration-500 ease-in-out px-4
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close menu button */}
        <CloseButton onClick={() => setMenuOpen(false)} />

        <ul className="flex flex-col items-start px-6 pt-20 gap-6">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) => getLinkClass(isActive)}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Log in button (mobile only) */}
        <LoginButton className="block md:hidden mt-6" />
      </section>
    </nav>
  );
}
