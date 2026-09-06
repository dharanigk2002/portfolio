import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ArrowNavigation({ prev, next }) {
  return (
    <div className="flex justify-center gap-6 mb-16">
      <ArrowButton onClick={prev}>
        <ChevronLeft size={20} />
      </ArrowButton>
      <ArrowButton onClick={next}>
        <ChevronRight size={20} />
      </ArrowButton>
    </div>
  );
}

function ArrowButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="p-2 border cursor-pointer border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 transition hover:text-white"
    >
      {children}
    </button>
  );
}
