import { useState } from "react";
import { testimonials } from "../../data/testimonials";
import TestimonialCard from "./TestimonialCard";
import ArrowNavigation from "./ArrowNavigation";

export default function RecommendationsSection() {
  const n = testimonials.length;
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonial = testimonials[currentTestimonial];
  const prev = () => setCurrentTestimonial((prev) => (n + prev - 1) % n);
  const next = () => setCurrentTestimonial((prev) => (prev + 1) % n);

  return (
    <section className="min-h-screen py-20 text-center bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
        Testimonials
      </h2>
      <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-16">
        What People Say
      </h3>
      <TestimonialCard testimonial={testimonial} />
      <ArrowNavigation prev={prev} next={next} />
    </section>
  );
}
