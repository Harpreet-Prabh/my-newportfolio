import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              Harpreet Kaur
            </h3>
            <p className="text-gray-400">
              Frontend Developer | React Specialist
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/Harpreet-Prabh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/harpreet-frontend-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:Harpreetrandhawwa@gmail.com"
              className="hover:text-purple-400 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Harpreet Kaur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
