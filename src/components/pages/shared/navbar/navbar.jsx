"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/addProduct", label: "Add Product" },
  { href: "/cart", label: "Cart", icon: true },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-[1920px] mx-auto">
      
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4">
         
          <Link href="/" className="font-semibold text-xl sm:text-2xl">
            E-Commerce
          </Link>

    
          <div className="hidden md:flex items-center gap-4">
            <nav className="font-semibold">
              <ul className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`hover:text-red-500 hover:border-b-2 hover:border-red-500 transition-colors flex items-center gap-2 pb-1 ${
                        pathname === link.href
                          ? "text-gray-600 border-b-2 border-red-500"
                          : "text-gray-700"
                      }`}
                    >
                      {link.icon && <BsCart3 className="text-lg" />}
                      {!link.icon && link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Mobile Menu*/}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenuAlt3 className="w-6 h-6" />
            )}
          </button>
        </div>

       
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-64 opacity-100 border-t border-gray-200"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <nav className="px-4 sm:px-6 py-4">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                      pathname === link.href
                        ? "text-red-500 bg-red-50"
                        : "text-gray-700 hover:text-red-500 hover:bg-gray-50"
                    }`}
                  >
                    {link.icon && <BsCart3 className="text-lg" />}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
