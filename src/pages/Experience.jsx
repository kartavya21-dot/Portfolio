import React from "react";
import { motion } from "framer-motion";

const ExperienceCard = ({ exp, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative group max-w-4xl"
      style={{ width: "90dvw" }}
    >
      {/* Glow effect on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-white via-gray-200 to-white rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />

      <div
        className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-10 border border-white/20 hover:border-white/50 transition-all duration-300 h-full"
        style={{ padding: "20px" }}
      >
        {/* Duration Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 lg:py-2.5 bg-gradient-to-r from-white/20 to-gray-300/20 border border-white/30 rounded-full mb-4 sm:mb-6 lg:mb-8">
          <span
            className="text-xs sm:text-sm lg:text-base text-white font-semibold"
            style={{ padding: "0.3rem 0.7rem" }}
          >
            {exp.duration}
          </span>
        </div>

        {/* Role */}
        <h3
          className="text-xl sm:text-2xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 lg:mb-4 leading-tight"
          style={{ marginTop: "1rem" }}
        >
          {exp.role}
        </h3>

        {/* Company */}
        <div className="flex items-center gap-2 lg:gap-3 mb-4 sm:mb-6 lg:mb-8">
          <div className="w-1 h-4 sm:h-6 lg:h-8 bg-white rounded-full" />
          <p className="text-base sm:text-lg lg:text-2xl text-gray-200 font-semibold">
            {exp.company}
          </p>
        </div>

        {/* Description */}
        <p
          className="text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 lg:mb-8"
          style={{ marginTop: "1rem" }}
        >
          {exp.description}
        </p>

        {/* Tech Stack */}
        <div
          className="flex flex-wrap gap-1.5 sm:gap-2 lg:gap-3"
          style={{ marginTop: "1rem" }}
        >
          {exp.tech.map((t, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 lg:py-2.5 bg-white/10 hover:bg-white/20 border border-white/30 rounded-4xl sm:rounded-2xl text-xs sm:text-sm lg:text-base text-white font-medium transition-all duration-200 hover:scale-105 cursor-default"
              style={{ padding: "0.4rem 0.7rem" }}
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const experiences = [
    {
      role: "Software Development Engineer",
      company: "Codenscious.ai",
      duration: "Oct 2025 - Present",
      description:
        "Built reusable React components and connected frontend views with backend REST APIs. Developed scalable web applications with modern frameworks.",
      tech: ["React", "FastAPI", "TailwindCSS"],
    },
    // Add more experiences here
  ];

  return (
    <section
      id="experience"
      className="min-h-screen snap-start relative flex items-center py-12 sm:py-16 lg:py-20 overflow-hidden"
      style={{
        width: "100vw",
        backgroundColor: "#003153",
        backgroundImage: "linear-gradient(315deg, #003153 0%, #1B1B1B 74%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="relative flex flex-col justify-center items-center w-90 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 xl:px-20 z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 lg:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 leading-none">
            Experience
          </h2>

          <div className="flex items-center gap-3 sm:gap-4 lg:gap-5 mb-3 sm:mb-4 lg:mb-6">
            <div className="h-0.5 sm:h-1 w-16 sm:w-20 lg:w-28 bg-gradient-to-r from-white to-gray-300 rounded-full" />
            <div className="h-0.5 sm:h-1 w-8 sm:w-12 lg:w-16 bg-gradient-to-r from-gray-300 to-transparent rounded-full" />
          </div>

          <p className="text-white/60 text-sm sm:text-base lg:text-xl max-w-3xl">
            A timeline of my professional journey and the technologies I've
            mastered
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/50 to-transparent ml-3 lg:ml-5" />

          {/* Experience Cards */}
          <div
            className="space-y-6 sm:space-y-8 lg:space-y-20 xl:space-y-24 md:pl-12 lg:pl-20"
            style={{ marginTop: "30px" }}
          >
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>

        {/* Call to action or additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 sm:mt-16 lg:mt-24 text-center"
          style={{ marginTop: "2rem" }}
        >
          <p className="text-white/50 text-xs sm:text-sm lg:text-base px-4">
            Want to know more about my work?{" "}
            <span className="text-white hover:text-gray-300 transition-colors cursor-pointer font-semibold">
              Let's connect
            </span>
          </p>
        </motion.div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Experience;
