import { useEffect, useState } from "react";

const sections = ["hero", "projects", "skills", "recommendations", "contact"];

export default function ScrollDots() {
  const [hash, setHash] = useState(
    () => window.location.hash.slice(1) || "hero",
  );

  useEffect(() => {
    const elements = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);

        if (!visibleSection) return;

        const id = visibleSection.target.id;

        setHash(id);
        history.replaceState(null, "", `#${id}`);
      },
      {
        threshold: 0.5,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="fixed right-4 top-1/2 transform -translate-x-1/2 space-y-3 z-10">
      {sections.map((section) => (
        <a
          key={section}
          href={`#${section}`}
          className={`${hash === section ? "bg-blue-500" : "bg-gray-400 hover:bg-blue-500"} block p-3 transition rounded-full`}
        />
      ))}
    </aside>
  );
}
