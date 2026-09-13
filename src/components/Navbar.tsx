import { useState } from "react";
import Logo from "../assets/logo-text.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const links: string[] = [
    "Home",
    "Technologies",
    "Projects",
    "About",
    "Contact",
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="container mx-auto flex items-center justify-between px-5 py-5 md:px-10">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl text-slate-800 md:hidden"
        >
          ☰
        </button>

        <img
          src={Logo}
          alt="Dev Stack Logo"
          className="w-34 md:w-43"
        />

        <ul className="hidden items-center gap-10 text-base font-semibold text-slate-600 md:flex">
          {links.map((link: string) => (
            <li
              key={link}
              className="cursor-pointer transition hover:text-pink-500"
            >
              {link}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 text-sm md:text-base">
          <button className="text-slate-700 transition hover:text-pink-500">
            Sign In
          </button>

          <button className="brand-gradient rounded-full px-5 py-2.5 text-white transition hover:scale-105">
            Sign Up
          </button>
        </div>
      </div>

      {menuOpen && (
        <ul className="border-t border-gray-200 px-7 py-5 md:hidden">
          {links.map((link: string) => (
            <li
              key={link}
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer py-2.5 text-base font-medium text-slate-700 transition hover:text-pink-500"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;