export default function SkillCard({ name, icon }) {
  return (
    <div className="flex flex-col">
      <div className="text-4xl mb-2 ">{icon}</div>
      <p className="text-sm font-medium">{name}</p>
    </div>
  );
}
