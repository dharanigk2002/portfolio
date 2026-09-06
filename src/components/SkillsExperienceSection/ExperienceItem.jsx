export default function ExperienceItem({ title, company, years }) {
  return (
    <div className="relative pl-4">
      <div className="h-3 w-3 bg-blue-600 rounded-full absolute -left-3 top-2 dark:bg-blue-400"></div>
      <div>
        <h5 className="font-semibold text-lg">{title}</h5>
        <p className="text-sm text-gray-600 dark:text-gray-400">{company}</p>
        <p className="text-xs text-gray-500">{years}</p>
      </div>
    </div>
  );
}
