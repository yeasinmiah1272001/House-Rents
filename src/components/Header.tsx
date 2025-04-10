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

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu when clicking outside
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
  // Prevent scrolling when mobile menu is open
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
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <FiGlobe className="h-6 w-6 text-teal-600" />
            <span className="text-xl font-bold text-teal-600">TravelWorld</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/destinations"
              className="text-gray-700 hover:text-teal-600 font-medium"
            >
              Destinations
            </Link>
            <Link
              href="/flights"
              className="text-gray-700 hover:text-teal-600 font-medium"
            >
              Flights
            </Link>
            <Link
              href="/hotels"
              className="text-gray-700 hover:text-teal-600 font-medium"
            >
              Hotels
            </Link>
            <Link
              href="/packages"
              className="text-gray-700 hover:text-teal-600 font-medium"
            >
              Packages
            </Link>
            <Link
              href="/deals"
              className="text-gray-700 hover:text-teal-600 font-medium"
            >
              Deals
            </Link>
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
      </div>

      {/* Search bar - conditionally rendered on desktop */}
      {isSearchOpen && (
        <div className="hidden md:block border-t py-4 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center">
              <div className="flex-1 flex space-x-4">
                <div className="flex-1 relative">
                  <FiMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Where to?"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div className="flex-1 relative">
                  <FiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Check in - Check out"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div className="w-32 relative">
                  <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Guests"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <button className="flex items-center px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors">
                  <FiSearch className="h-4 w-4 mr-2" />
                  Search
                </button>
              </div>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="ml-4 p-2 text-gray-700 hover:text-teal-600 focus:outline-none"
              >
                <FiX className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Search - always visible on mobile */}
      <div className="md:hidden border-t py-3 px-4 bg-gray-50">
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
          <input
            type="text"
            placeholder="Search destinations, hotels..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Mobile Menu - Slide-in from right */}
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
              <Link
                href="/destinations"
                className="flex items-center space-x-2 text-gray-700 hover:text-teal-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FiMapPin className="h-5 w-5" />
                <span>Destinations</span>
              </Link>
              <Link
                href="/flights"
                className="flex items-center space-x-2 text-gray-700 hover:text-teal-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FiGlobe className="h-5 w-5" />
                <span>Flights</span>
              </Link>
              <Link
                href="/hotels"
                className="flex items-center space-x-2 text-gray-700 hover:text-teal-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FiMapPin className="h-5 w-5" />
                <span>Hotels</span>
              </Link>
              <Link
                href="/packages"
                className="flex items-center space-x-2 text-gray-700 hover:text-teal-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FiShoppingBag className="h-5 w-5" />
                <span>Packages</span>
              </Link>
              <Link
                href="/deals"
                className="flex items-center space-x-2 text-gray-700 hover:text-teal-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FiCalendar className="h-5 w-5" />
                <span>Deals</span>
              </Link>
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
