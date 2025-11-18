export default function Skills() {
  const skills = [
    { title: "Languages", list: ["HTML", "CSS", "JavaScript"] },
    { title: "Frameworks", list: ["React", "Next.js"] },
    { title: "Styling", list: ["Tailwind CSS", "Bootstrap"] },
    { title: "Tools", list: ["Git", "GitHub", "VS Code"] },
    { title: "Others", list: ["APIs", "Responsive Design"] },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-blue-700">My Skills</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((cat) => (
          <div key={cat.title} className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              {cat.title}
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              {cat.list.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
