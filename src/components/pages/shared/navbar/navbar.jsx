"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BsCart3, BsHeart } from "react-icons/bs";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useCard } from "@/hooks/usecard";
import SearchInputs from "@/components/UI/Inputs/SearchInputs";
import { useAuth } from "@/hooks/useAuth";

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact Us" },
  { href: "/about", label: "About Us" },
  { href: "/wishlist", label: "Wishlist", icon: "wishlist" },
  { href: "/cart", label: "Cart", icon: "cart" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const { cartItems, wishlistItems } = useCard();
  const { user, isAuthenticated, status, login, logout } = useAuth();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleUserIconClick = () => {
    setIsUserDropdownOpen((prev) => !prev);
  };

  const renderIcon = (icon) => {
    if (icon === "cart") return <BsCart3 className="text-lg" />;
    if (icon === "wishlist") return <BsHeart className="text-lg" />;

    return null;
  };

  const renderBadge = (icon) => {
    if (icon === "cart" && cartItems.length > 0)
      return (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
          {cartItems.length}
        </span>
      );
    if (icon === "wishlist" && wishlistItems.length > 0)
      return (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
          {wishlistItems.length}
        </span>
      );
    return null;
  };
  console.log(user?.image);
  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex items-center justify-between px-2 md:px-10 py-4">
          <Link href="/" className="font-semibold text-xl sm:text-2xl">
            E-Commerce
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            <SearchInputs />
            <nav className="font-semibold">
              <ul className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <li key={link.href} className="relative">
                    <Link
                      href={link.href}
                      className={`hover:text-red-500 hover:border-b-2 hover:border-red-500 transition-colors flex items-center gap-2 pb-1 ${
                        pathname === link.href
                          ? "text-gray-600 border-b-2 border-red-500"
                          : "text-gray-700"
                      }`}
                    >
                      {link.icon && (
                        <div className="relative">
                          {renderIcon(link.icon)}
                          {renderBadge(link.icon)}
                        </div>
                      )}
                      {!link.icon && link.label}
                    </Link>
                  </li>
                ))}
                <li className="relative">
                  
                    <div>
                      <button
                        type="button"
                        onClick={handleUserIconClick}
                        className="focus:outline-none flex items-center"
                      >
                        <img
                          src={
                            user?.image ||
                            "https://tanzolymp.com/images/default-non-user-no-photo-1.jpg"
                          }
                          alt="user"
                          className="w-8 h-8 rounded-full"
                        />
                      </button>
                      {isUserDropdownOpen && (
                        <div className="absolute right-0 mt-6 w-48 bg-white shadow-lg border border-gray-300 rounded z-50 py-3">
                          <div className="flex flex-col items-center gap-2 px-4">
                            <img
                              src={
                                user?.image ||
                                "https://tanzolymp.com/images/default-non-user-no-photo-1.jpg"
                              }
                              alt="user"
                              className="w-12 h-12 rounded-full"
                            />
                            <span className="font-semibold">
                              {user?.name || "Guest"}
                            </span>
                            <Link
                              href="/"
                              className="text-blue-600 hover:underline text-sm"
                              onClick={() => setIsUserDropdownOpen(false)}
                            >
                              Account
                            </Link>
                            {isAuthenticated ? (
                              <button
                                onClick={() => {
                                  logout();
                                  setIsUserDropdownOpen(false);
                                }}
                                className="mt-2 px-3 py-1 rounded bg-red-500 text-white w-full"
                              >
                                Sign out
                              </button>
                            ) : (
                              <button
                                onClick={() => {
                                  login("google");
                                  setIsUserDropdownOpen(false);
                                }}
                                className="mt-2 px-3 py-1 rounded bg-blue-600 text-white w-full"
                              >
                                Sign in
                              </button>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  
                </li>
              </ul>
            </nav>
          </div>

          {/* Mobile Menu Toggle */}
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

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "h-screen w-full opacity-100 border-t border-gray-200 absolute bg-white/70 font-semibold backdrop-blur-sm"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <nav className="px-4 sm:px-6 py-4">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                      pathname === link.href
                        ? "text-red-500"
                        : "text-gray-700 hover:text-red-500"
                    }`}
                  >
                    {link.icon && (
                      <div className="relative">
                        {renderIcon(link.icon)}
                        {renderBadge(link.icon)}
                      </div>
                    )}
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
