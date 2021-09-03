import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between bg-gray-100 px-4 py-4">
      <h1 className="text-4xl">TokoLapak</h1>
      <ul className="flex gap-4">
        <li>
          <NavLink activeClassName="font-bold" to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="font-bold" to="/akun">
            Akun
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="font-bold" to="/promo">
            Promo
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
