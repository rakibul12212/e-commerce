"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsCart3 } from "react-icons/bs";

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/cart", label: "Cart", icon: true },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between px-10 py-4 shadow-lg sticky top-0 bg-white z-50">
      <Link href="/" className="font-semibold text-2xl">
        E-Commerce
      </Link>
      <div className="flex items-center gap-4">
        <nav className="font-semibold">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`hover:text-red-500 hover:border-b-2 hover:border-red-500 transition-colors flex items-center gap-2 ${
                    pathname === link.href
                      ? "text-gray-600 border-b-2 border-red-500"
                      : "text-gray-700"
                  }`}
                >
                  {link.icon && <BsCart3 />}
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
