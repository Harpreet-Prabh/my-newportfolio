export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center rounded-lg shadow-lg">
      <p>&copy; 2023 Your Name. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a
          href="#"
          className="hover:text-green-400 transition duration-300 ease-in-out"
        >
          Facebook
        </a>
        <a
          href="#"
          className="hover:text-green-400 transition duration-300 ease-in-out"
        >
          Twitter
        </a>
        <a
          href="#"
          className="hover:text-green-400 transition duration-300 ease-in-out"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
