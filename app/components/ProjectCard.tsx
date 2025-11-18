export default function ProjectCard({ title, desc, tech, demo, github }: any) {
  return (
    <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold text-blue-700">{title}</h3>
        <p className="text-gray-600 text-sm mt-2">{desc}</p>
        <p className="text-sm text-gray-500 mt-1">🛠 {tech}</p>
      </div>
      <div className="flex gap-3 mt-4">
        <a
          href={demo}
          target="_blank"
          className="text-blue-600 font-medium hover:underline"
        >
          Live Demo
        </a>
        <a
          href={github}
          target="_blank"
          className="text-gray-700 font-medium hover:underline"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
