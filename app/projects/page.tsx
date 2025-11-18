import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Talk Through Me",
      desc: "A real-time chat app using HTML, CSS, and JavaScript.",
      tech: "HTML, CSS, JS",
      demo: "https://talkthroughme.netlify.app/",
      github: "https://github.com/harpreetkaur/talkthroughme",
    },
    {
      title: "Quiz App",
      desc: "Interactive quiz app with timer and local storage.",
      tech: "React, Tailwind CSS",
      demo: "https://quizapp-theta-lilac.vercel.app/",
      github: "https://github.com/harpreetkaur/quizapp",
    },
    {
      title: "Shopping Cart App",
      desc: "Cart system built with React Context API.",
      tech: "React, Context API",
      demo: "https://shoppingcart.vercel.app/",
      github: "https://github.com/harpreetkaur/shoppingcart",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-blue-700">Projects</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
