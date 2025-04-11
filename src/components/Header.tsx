"use client";
import { useState, useRef, useEffect } from "react";
import {
  FiMenu,
  FiX,
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingBag,
  FiMapPin,
  FiCalendar,
  FiGlobe,
} from "react-icons/fi";
import Link from "next/link";
import Container from "./Container";

const navigationLinks = [
  {
    label: "Destinations",
    href: "/destinations",
    icon: <FiMapPin className="h-5 w-5" />,
  },
  { label: "Flights", href: "/flights", icon: <FiGlobe className="h-5 w-5" /> },
  { label: "Hotels", href: "/hotels", icon: <FiMapPin className="h-5 w-5" /> },
  {
    label: "Packages",
    href: "/packages",
    icon: <FiShoppingBag className="h-5 w-5" />,
  },
  { label: "Deals", href: "/deals", icon: <FiCalendar className="h-5 w-5" /> },
];

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top navigation bar */}
      <Container className="">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <FiGlobe className="h-6 w-6 text-teal-600" />
            <span className="text-xl font-bold text-teal-600">Find House</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-gray-700 hover:text-teal-600 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-700 hover:text-teal-600 focus:outline-none"
            >
              <FiSearch className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-700 hover:text-teal-600 focus:outline-none">
              <FiHeart className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-700 hover:text-teal-600 focus:outline-none">
              <FiUser className="h-5 w-5" />
            </button>
            <button className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 text-gray-700 hover:text-teal-600 focus:outline-none"
          >
            <FiMenu className="h-6 w-6" />
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div
            ref={mobileMenuRef}
            className="absolute right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out"
          >
            <div className="p-4 flex justify-between items-center border-b">
              <span className="font-bold text-lg">Menu</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-700 hover:text-teal-600 focus:outline-none"
              >
                <FiX className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-col space-y-6 p-6">
              {navigationLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="flex items-center space-x-2 text-gray-700 hover:text-teal-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              ))}
              <div className="pt-6 border-t">
                <button className="w-full px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
