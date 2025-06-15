"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

function NavItem({
  text,
  href,
  onClick,
}: {
  text: string;
  href: string;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      className="relative px-3 py-2 group transition-colors duration-300"
      onClick={onClick}
    >
      <span className="relative z-10 text-brand-dark opacity-75 group-hover:opacity-100 transition-opacity duration-300">
        {text}
      </span>
      <div className="absolute inset-0 h-full w-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-bottom">
        <div className="h-[2px] w-full bg-brand-color/75 absolute bottom-0"></div>
      </div>
    </Link>
  );
}

function LogoButton() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3 hover:opacity-90 transition-opacity duration-300"
    >
      <div className="relative w-[32px] h-[32px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40"
          fill="none"
          className="w-full h-full"
        >
          <path
            d="M19.9999 36.6667C29.2047 36.6667 36.6666 29.2048 36.6666 20C36.6666 10.7953 29.2047 3.33337 19.9999 3.33337C10.7952 3.33337 3.33325 10.7953 3.33325 20C3.33325 29.2048 10.7952 36.6667 19.9999 36.6667Z"
            stroke="#4D88B8"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 29C24.9706 29 29 24.9706 29 20C29 15.0294 24.9706 11 20 11C15.0295 11 11 15.0294 11 20C11 24.9706 15.0295 29 20 29Z"
            stroke="#4D88B8"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className="text-xl font-semibold text-brand-dark">Sentennial.</span>
    </Link>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  // Here be dragons: /herebedragons
  useEffect(() => {
    console.log(sessionStorage.getItem("hasVisited"));
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      sessionStorage.setItem("hasVisited", "true");
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show navbar when at the top of the page
      if (currentScrollY <= 20) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setHasScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const navItems = [
    { href: "/articles", text: "Articles" },
    { href: "/musings", text: "Musings" },
    { href: "/alexandria", text: "Alexandria [α]" },
    { href: "/about", text: "About" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 transform ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        hasScrolled || isOpen
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container max-w-[1200px] mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <LogoButton />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                text={item.text}
                onClick={handleLinkClick}
              />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-background-secondary transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-[2px] bg-brand-dark transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`w-full h-[2px] bg-brand-dark transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-full h-[2px] bg-brand-dark transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[300px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-md rounded-lg shadow-md border border-gray-100 p-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className={`block py-2 px-3 text-brand-dark rounded-md transition-colors duration-200 ${
                  pathname === item.href
                    ? "bg-brand-color/10 text-brand-color font-medium"
                    : "hover:bg-gray-100"
                }`}
              >
                {item.text}
              </Link>
            ))}
            <div className="h-[1px] w-full bg-gray-100 my-1"></div>
            <div className="flex items-center justify-center py-1">
              <div className="text-sm text-brand-dark opacity-20 self-center md:self-end">
                v0.1.4
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
