import { Github, Linkedin, Mail, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <div className="absolute top-14 left-8 w-44 h-44 md:w-72 md:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-28 right-8 w-44 h-44 md:w-72 md:h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-14 left-20 w-44 h-44 md:w-72 md:h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6 text-sm font-medium">
          <Sparkles size={16} />
          <span>Available for opportunities</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
            Harpreet Kaur
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
          Frontend Developer & React Specialist
        </p>

        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Crafting beautiful, responsive web experiences with React, Next.js,
          and modern JavaScript
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="#contact"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-all"
          >
            View Work
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/Harpreet-Prabh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-purple-600 transition-colors"
          >
            <Github size={28} />
          </a>
          <a
            href="https://linkedin.com/in/harpreet-frontend-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-purple-600 transition-colors"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:Harpreetrandhawwa@gmail.com"
            className="text-gray-600 hover:text-purple-600 transition-colors"
          >
            <Mail size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};
export default Hero;
