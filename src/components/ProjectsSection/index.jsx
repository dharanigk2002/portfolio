import { useState } from "react";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

const projectTypes = [
  "All",
  ...new Set(projects.map((project) => project.type)),
];

export default function ProjectsSection() {
  const [selectedType, setSelectedType] = useState("All");

  function filterType(type) {
    setSelectedType(type);
  }

  const filteredProjects =
    selectedType === "All"
      ? projects
      : projects.filter((project) => project.type === selectedType);

  return (
    <section className="min-h-screen py-20 bg-white dark:bg-gray-900 dark:text-white">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
          My Work
        </h2>
        <h3 className="text-4xl font-bold mb-8 text-blue-600 dark:text-blue-400">
          Featured Projects
        </h3>
      </div>
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {projectTypes.map((type) => (
          <button
            className={`px-4 py-2 rounded-full border transition text-sm font-medium cursor-pointer hover:bg-blue-300 ${selectedType === type ? "bg-blue-600 text-white" : ""}`}
            key={type}
            onClick={() => filterType(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl w-10/12 mx-auto gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
