import { Mail, Phone } from "lucide-react";
import React from "react";

export default function ContactSection() {
  const labelClasses = [
    "block",
    "mb-2",
    "text-sm",
    "font-medium",
    "text-gray-800",
    "dark:text-gray-200",
  ].join(" ");

  const inputClasses = [
    "w-full",
    "px-4 py-2",
    "border",
    "rounded-lg",
    "bg-white",
    "dark:bg-gray-800",
    "border-gray-300",
    "dark:border-gray-700",
    "text-gray-800",
    "dark:text-white",
    "outline-none",
    "focus:ring-2",
    "focus:ring-blue-500",
    "focus:border-blue-500",
  ].join(" ");

  return (
    <section className="min-h-screen py-20 px-4 text-center bg-white dark:bg-gray-900">
      <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-12">
        Contact Me
      </h3>
      {/* Contact Info */}
      <div className="space-y-2">
        <p className="text-lg">
          <Phone
            className="inline-block dark:text-gray-100 text-gray-900"
            size={16}
          />{" "}
          +1 (555) 123-4567
        </p>
        <p className="text-lg">
          <Mail
            size={16}
            className="inline-block dark:text-gray-100 text-gray-900"
          />{" "}
          dharanigk2018@gmail.com
        </p>
      </div>
      {/* Contact form */}
      <form
        autoComplete="off"
        className="max-w-3xl mx-auto text-left space-y-4"
      >
        <div>
          <label htmlFor="name" className={labelClasses}>
            Name
          </label>
          <input
            type="text"
            className={inputClasses}
            id="name"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <input
            type="email"
            className={inputClasses}
            id="email"
            placeholder="abc@gmail.com"
          />
        </div>
        <div>
          <label htmlFor="message" className={labelClasses}>
            Message
          </label>
          <textarea
            className={inputClasses}
            id="message"
            placeholder="Your message..."
            rows={5}
          />
        </div>
        <button className="border cursor-pointer rounded-lg py-2 px-6 text-blue-500 hover:bg-blue-500 hover:text-white border-blue-500 sm:w-fit w-full">
          Send Message
        </button>
      </form>
    </section>
  );
}
