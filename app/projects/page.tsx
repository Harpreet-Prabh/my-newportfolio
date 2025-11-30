import { ExternalLink } from "lucide-react";

// Projects Section
const Projects = () => {
  const projects = [
    {
      title: "TalkThroughMe",
      description:
        "Real-time chat platform with instant messaging and clean, responsive UI",
      tech: ["React", "Firebase", "Tailwind CSS"],
      link: "https://talkthroughme.netlify.app/",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "YouTec",
      description:
        "Tech product showcase site with modern animations and responsive design",
      tech: ["React", "Tailwind CSS", "Animations"],
      link: "https://youtec.netlify.app/",
      gradient: "from-pink-500 to-orange-500",
    },
    {
      title: "Quiz App",
      description:
        "Dynamic quiz application with real-time scoring and persistent sessions",
      tech: ["React", "Local Storage", "Vercel"],
      link: "https://quizapp-theta-lilac.vercel.app/",
      gradient: "from-purple-600 to-purple-400",
    },
    {
      title: "Todo App",
      description:
        "Task management with CRUD functionality using React Query and API integration",
      tech: ["React", "React Query", "API"],
      link: "https://todoapp-theta-henna-78.vercel.app/",
      gradient: "from-orange-500 to-pink-500",
    },
    {
      title: "Onboarding App",
      description:
        "Multi-step onboarding flow with Context API for state management",
      tech: ["React", "Context API", "Hooks"],
      link: "https://onboarding-eight-pi.vercel.app/",
      gradient: "from-pink-600 to-purple-600",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio built with Next.js, optimized for SEO and performance",
      tech: ["Next.js", "Tailwind CSS", "SEO"],
      link: "https://harpreet-d.vercel.app/",
      gradient: "from-purple-500 to-orange-500",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          A selection of my recent work and side projects
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all"></div>
                <h3 className="text-3xl font-bold text-white z-10">
                  {project.title}
                </h3>
              </div>

              <div className="p-6">
                <p className="text-gray-700 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:gap-3 transition-all"
                >
                  View Project <ExternalLink size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
