const Skills = () => {
  type Color = "purple" | "pink" | "orange";

  const skillCategories: { title: string; skills: string[]; color: Color }[] = [
    {
      title: "Languages",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "JSON"],
      color: "purple",
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React.js", "Next.js", "Tailwind CSS", "React Query"],
      color: "pink",
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Vercel",
        "Netlify",
        "Postman",
        "Figma",
      ],
      color: "orange",
    },
    {
      title: "Concepts",
      skills: [
        "API Integration",
        "Responsive Design",
        "SSR/SSG",
        "State Management",
        "Performance Optimization",
      ],
      color: "purple",
    },
  ];

  const colorMap: Record<Color, string> = {
    purple: "from-purple-500 to-purple-600",
    pink: "from-pink-500 to-pink-600",
    orange: "from-orange-500 to-orange-600",
  };

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Technologies I use to bring ideas to life
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl hover:shadow-lg transition-shadow"
            >
              <h3
                className={`text-2xl font-bold mb-6 bg-gradient-to-r ${
                  colorMap[category.color]
                } bg-clip-text text-transparent`}
              >
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-white px-4 py-2 rounded-lg text-gray-700 font-medium shadow-sm hover:shadow-md transition-shadow"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
