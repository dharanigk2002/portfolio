export default function Hero() {
  return (
    <section className="min-h-screen px-6 py-20 md:px-20 flex md:flex-row flex-col items-center justify-between dark:bg-gray-800">
      <div className="max-w-lg space-y-4">
        <p className="text-lg">👋 Hello, I am</p>
        <h1 className="text-4xl md:text-6xl font-bold text-blue-600 dark:text-blue-400">
          Dharani Eswar
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-xl">
          Web developer / Freelancer
        </p>
        <div className="space-x-4">
          <a
            href="#contact"
            className="bg-blue-500 px-4 py-2 text-white rounded p-2 transition hover:bg-blue-600"
          >
            Let&apos;s connect
          </a>
          <a
            href="#cv"
            className="px-4 py-2 text-blue-500 border hover:text-white hover:bg-blue-500 transition rounded"
          >
            Download CV
          </a>
        </div>
      </div>
      <div className="mt-10 md:mt-0 relative w-75 h-75">
        <img
          src="https://res.cloudinary.com/db8p1prf2/image/upload/v1788707002/sjcjjxe2k6vkdgyq47es.jpg"
          alt="profile"
          className="rounded-full shadow-lg w-full aspect-square object-cover"
        />
        <div className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-md grid place-content-center w-10 h-10">
          <img
            src="images/logo_dark.svg"
            alt="react-icon"
            className="animate-[spin_3s_linear_infinite]"
          />
        </div>
        <div className="p-2 rounded-full absolute w-10 h-10 top-0 right-0 bg-white dark:bg-gray-700 shadow-md animate-[bounce_3s_linear_infinite]">
          <img src="images/Java.png" alt="java-icon" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
