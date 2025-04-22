import { Outlet, NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav className="flex justify-center">
        <NavLink to="/" className=" hover:underline p-4">
          Home
        </NavLink>
        <NavLink to="/about" className="hover:underline p-4">
          About
        </NavLink>
        <NavLink to="/parks" className="hover:underline p-4">
          Parks
        </NavLink>
      </nav>
      <main className="p-4">
        <Outlet />
      </main>
    </>
  );
}
