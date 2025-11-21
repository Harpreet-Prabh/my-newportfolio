import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <Link
          href="/"
          className="text-xl font-bold text-white dark:text-gray-200"
        >
          Harpreet Kaur
        </Link>
        <div className="space-x-6 text-gray-300 font-medium dark:text-gray-400">
          <Link
            href="/about"
            className="hover:text-green-400 dark:hover:text-green-300 transition duration-300"
          >
            About
          </Link>
          <Link
            href="/skills"
            className="hover:text-green-400 dark:hover:text-green-300 transition duration-300"
          >
            Skills
          </Link>
          <Link
            href="/projects"
            className="hover:text-green-400 dark:hover:text-green-300 transition duration-300"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="hover:text-green-400 dark:hover:text-green-300 transition duration-300"
          >
            Contact
          </Link>
          <div className=" inline-block align-middle">
            <AnimatedThemeToggler />
          </div>
        </div>
      </div>
    </nav>
  );
}
