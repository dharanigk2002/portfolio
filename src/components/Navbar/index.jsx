import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "../../context/ThemeProvider";
import { useState } from "react";

export const navLinks = [
  {
    label: "Home",
    target: "hero",
  },
  {
    label: "Work",
    target: "projects",
  },
  {
    label: "Skills",
    target: "skills",
  },
  {
    label: "Testimonials",
    target: "recommendations",
  },
  {
    label: "Contact",
    target: "contact",
  },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 dark:text-white shadow-md fixed top-0 left-0 right-0 z-10">
      <div className="flex justify-between items-centermax-w-7xl mx-auto p-4 md:p-6">
        <h1 className="text-xl font-bold uppercase">
          &lt;Dhar<span className="text-blue-500">ani</span> /&gt;
        </h1>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={`#${link.target}`}
              className="transition hover:text-blue-500"
            >
              {link.label}
            </a>
          ))}
          {/* Light/dark mode toggle button */}
          <button onClick={toggleTheme} className="cursor-pointer">
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
        <button
          className="md:hidden grid place-content-center"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden flex flex-col items-start px-4 pb-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={`#${link.target}`}
              className="transition hover:text-blue-500"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          {/* Light/dark mode toggle button */}
          <button
            onClick={() => {
              toggleTheme();
              setMenuOpen(false);
            }}
            className="cursor-pointer"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      )}
    </nav>
  );
}
