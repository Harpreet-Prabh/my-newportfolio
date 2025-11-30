import { Code, Rocket, Sparkles, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              I'm a creative and detail-oriented Frontend Developer with{" "}
              <strong>5+ years of experience</strong> building responsive and
              scalable web applications. I specialize in React.js, Next.js, and
              modern JavaScript practices.
            </p>
            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              My passion lies in creating clean, accessible, and user-focused
              interfaces that not only look great but perform exceptionally. I
              love integrating APIs, optimizing performance, and bringing
              designs to life.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Currently working at <strong>PixelCraft Solutions Inc.</strong>{" "}
              where I develop Next.js applications with SSR/SSG, integrate
              RESTful APIs, and build reusable component libraries.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: <Code className="text-purple-600" size={32} />,
                title: "5+ Years",
                desc: "Experience",
              },
              {
                icon: <Rocket className="text-pink-600" size={32} />,
                title: "15+ Projects",
                desc: "Completed",
              },
              {
                icon: <Zap className="text-orange-500" size={32} />,
                title: "Clean Code",
                desc: "Philosophy",
              },
              {
                icon: <Sparkles className="text-purple-600" size={32} />,
                title: "Modern Tech",
                desc: "Stack",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl hover:shadow-lg transition-shadow"
              >
                {item.icon}
                <h3 className="text-xl font-bold mt-3 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
