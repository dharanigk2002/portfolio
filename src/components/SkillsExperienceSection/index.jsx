import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { SiFlutter, SiMongodb, SiTailwindcss } from "react-icons/si";
import SkillCard from "./SkillCard";
import { experiences } from "../../data/experiences";
import ExperienceItem from "./ExperienceItem";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-500" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Python", icon: <FaPython className="text-yellow-500" /> },
  { name: "Flutter", icon: <SiFlutter className="text-blue-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
];

export default function SkillsExperienceSection() {
  return (
    <section className="min-h-screen pt-20">
      <h2 className="text-3xl text-center font-semibold">
        Skills & Experience
      </h2>
      <h3 className="text-4xl font-bold text-center mb-16 capitalize text-blue-600 dark:text-blue-400">
        What I do and where I&apos;ve been
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-0 gap-7 max-w-6xl w-10/12 mx-auto">
        <div>
          <h4 className="text-2xl font-semibold mb-4">Skills</h4>
          <div className="grid grid-cols-3 gap-6">
            {skills.map(({ name, icon }) => (
              <SkillCard key={name} name={name} icon={icon} />
            ))}
          </div>
        </div>
        <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-6">
          <h4 className="text-2xl font-semibold mb-4">Experience</h4>
          <div className="space-y-4">
            {experiences.map((experience) => (
              <ExperienceItem key={experience.company} {...experience} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
