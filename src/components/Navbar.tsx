import { Link, NavLink } from "react-router-dom";

const links = [
  { name: "Home", to: "/" },
  { name: "Parks", to: "/parks" },
  { name: "About", to: "/about" },
];

export default function Navbar() {
  const getLinkClass = (isActive: boolean) =>
    ` ${
      isActive
        ? "text-[var(--color-primary)] border-b-2 border[var(--color-primary)] pb-1"
        : "text-black hover:border-b-2 hover:border-black pb-1"
    }`;
  return (
    <nav
      className="flex items-center justify-between px-10 py-4 font-extrabold max-w-8xl mx-auto w-full"
      aria-label="Main navigation"
    >
      <Link to="/" className="text-2xl font-black font-display tracking-tight">
        Park Explorer
      </Link>
      <ul className="flex gap-6">
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className={({ isActive }) => getLinkClass(isActive)}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <button
        className="bg-[var(--color-primary)] border-2 border-[var(--color-primary)]
         text-white px-6 py-2 rounded-full transition-all duration-300 ease-in-out 
         hover:cursor-pointer hover:bg-white hover:text-black hover:border-[var(--color-primary)]"
      >
        Log in
      </button>
    </nav>
  );
}
