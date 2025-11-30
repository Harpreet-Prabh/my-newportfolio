"use client";

import Link from "next/link";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600
                     bg-clip-text text-transparent tracking-wide hover:opacity-80 transition"
        >
          HK
        </Link>

        {/* Center Navigation */}
        <div className="hidden md:flex space-x-10">
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

        {/* Theme Switcher */}
        <div className="flex items-center">
          <AnimatedThemeToggler />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
