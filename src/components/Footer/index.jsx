import { navLinks } from "../Navbar";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-6 py-8 text-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-xl font-bold text-gray-800 dark:text-white">
          DHAR<span className="text-blue-500">ANI</span>
        </div>
        <div className="flex gap-6 flex-wrap justify-center text-sm">
          {navLinks.map(({ label, target }) => (
            <a
              key={target}
              className="hover:text-blue-500 transition"
              href={`#${target}`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
      <hr className="my-6 border-gray-300 dark:border-gray-700" />
      <p className="text-sm text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} All rights reserved
      </p>
    </footer>
  );
}
