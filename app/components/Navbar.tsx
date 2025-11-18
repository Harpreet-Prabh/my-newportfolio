import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/" className="text-xl font-bold text-blue-700">
          Harpreet Kaur
        </Link>
        <div className="space-x-6 text-gray-700 font-medium">
          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link href="/skills" className="hover:text-blue-600">
            Skills
          </Link>
          <Link href="/projects" className="hover:text-blue-600">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-blue-600">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
