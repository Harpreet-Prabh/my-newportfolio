export default function Footer() {
  return (
    <footer className="mt-16 py-6 text-center text-gray-600 border-t">
      <p>© {new Date().getFullYear()} Harpreet Kaur. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a
          href="https://github.com/harpreetkaur"
          className="hover:text-blue-600"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/harpreetkaur"
          className="hover:text-blue-600"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
