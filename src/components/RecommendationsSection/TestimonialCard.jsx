export default function TestimonialCard({ testimonial }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 max-w-4xl w-10/12 mx-auto bg-white dark:bg-gray-800 rounded-xl items-center shadow-md p-6 text-left mb-16 transition">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-20 aspect-square rounded-full object-cover border-2 border-blue-600 dark:border-blue-400"
      />
      <div className="space-y-4">
        <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
          {testimonial.text}
        </p>
        <p className="font-semibold text-lg text-gray-900 dark:text-white">
          {testimonial.name}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {testimonial.position} at {testimonial.company}
        </p>
      </div>
    </div>
  );
}
