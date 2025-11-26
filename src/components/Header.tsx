"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full shadow-sm transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo - Left */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-black">
              <Image src="/NDSlogo.png" alt="logo" width={120} height={40} />
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-8">
              <Link
                href="#"
                className="text-black hover:text-gray-700 transition-colors"
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-black hover:text-gray-700 transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="#"
                className="text-black hover:text-gray-700 transition-colors"
              >
                Service
              </Link>
              <Link
                href="#"
                className="text-black hover:text-gray-700 transition-colors"
              >
                About
              </Link>
              <Link
                href="#"
                className="text-black hover:text-gray-700 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Pricing Button - Right */}
          <div className="hidden md:flex">
            <button className="rounded-lg bg-black px-6 py-2 text-white hover:bg-gray-800 transition-colors">
              Pricing
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 text-gray-700 hover:text-black"
          >
            <svg
              className={`h-6 w-6 transition-transform ${
                isMenuOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="space-y-2">
              <Link
                href="#"
                className="block px-3 py-2 rounded-lg text-black hover:bg-gray-100 transition-colors"
              >
                Home
              </Link>
              <Link
                href="#"
                className="block px-3 py-2 rounded-lg text-black hover:bg-gray-100 transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="#"
                className="block px-3 py-2 rounded-lg text-black hover:bg-gray-100 transition-colors"
              >
                Service
              </Link>
              <Link
                href="#"
                className="block px-3 py-2 rounded-lg text-black hover:bg-gray-100 transition-colors"
              >
                About
              </Link>
              <Link
                href="#"
                className="block px-3 py-2 rounded-lg text-black hover:bg-gray-100 transition-colors"
              >
                Contact
              </Link>
              <button className="w-full mt-4 rounded-lg bg-black px-6 py-2 text-white hover:bg-gray-800 transition-colors">
                Pricing
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
