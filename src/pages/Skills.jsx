import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiPython,
  SiFastapi,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiGit,
  SiGithub,
  SiCplusplus,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", icon: SiReact, color: "text-cyan-400" },
        { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
        { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
        { name: "TailwindCSS", icon: SiTailwindcss, color: "text-sky-400" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Python", icon: SiPython, color: "text-yellow-400" },
        { name: "FastAPI", icon: SiFastapi, color: "text-emerald-400" },
        { name: "WebSocket", icon: SiFastapi, color: "text-purple-400" },
      ],
    },
    {
      category: "Database",
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", icon: SiGit, color: "text-red-500" },
        { name: "GitHub", icon: SiGithub, color: "text-gray-300" },
        { name: "C++", icon: SiCplusplus, color: "text-blue-600" },
      ],
    },
  ];

  return (
    <section
    id="skills"
      className="min-h-screen snap-start overflow-hidden py-20 flex justify-center "
      style={{
        position: "relative",
        width: "100vw",
        zIndex: 1,
        backgroundImage: "linear-gradient(315deg, #003153 0%, #1B1B1B 74%)",
      }}
    >
      <div className="border border-white mx-auto px-8 md:px-16 w-full flex flex-col items-center justify-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          style={{ marginBottom: "4rem" }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white">Skills</h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "96px" }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1.5 bg-gradient-to-r from-white to-white/30 rounded-full mx-auto"
          ></motion.div>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              style={{ marginBottom: "2rem" }}
            >
              {/* Category Title */}
              <h3
                className="text-2xl md:text-3xl font-semibold text-white mb-6 text-center md:text-left"
                style={{ marginBottom: "1rem" }}
              >
                {category.category}
              </h3>

              {/* Skills Grid */}
              <div className="flex flex-wrap justify-center md:justify-start gap-10">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: false }}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="flex items-center gap-3 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 cursor-default"
                      style={{
                        paddingLeft: "2rem",
                        paddingRight: "2rem",
                        paddingTop: "1.2rem",
                        paddingBottom: "1.2rem",
                        background: "rgba(255, 255, 255, 0.05)",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                      }}
                    >
                      <Icon className={`text-5xl ${skill.color}`} />

                      <span className="text-white/90 font-medium text-4xl">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
};

export default Skills;
