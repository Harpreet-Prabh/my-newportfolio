"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo2.png"
            alt="HK Logo"
            width={50} // perfect size for navbar
            height={50}
            className="rounded-md object-contain hover:opacity-80 transition"
            priority
          />
        </Link>

        {/* Center Navigation */}
        <div className="hidden md:flex space-x-6 lg:space-x-10">
          <Link
            href="/"
            className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 
                       font-medium transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 
                       font-medium transition-colors"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 
                       font-medium transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/skills"
            className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 
                       font-medium transition-colors"
          >
            Skills
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 
                       font-medium transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Mobile menu placeholder (expandable) */}
        <div className="md:hidden">
          <button aria-label="Open menu" className="p-2 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700 dark:text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Theme Switcher */}
        <div className="hidden md:flex items-center">
          <AnimatedThemeToggler />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
