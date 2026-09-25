import { ArrowUpRight, CloudSun, Code2, HeartPulse } from "lucide-react";
import { LuGithub } from "react-icons/lu";
import { openExternal } from "../lib/links";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const projects = [
  {
    title: "Medicine App",
    icon: HeartPulse,
    gradient: "from-white/25 via-gray-500/10 to-transparent",
    description:
      "A Flutter-based healthcare application with medicine information, search functionality, AI-based help and home remedies - all wrapped in a clean, modern UI.",
    tags: ["Flutter", "Dart", "Firebase"],
    languages: [
      { name: "Dart", pct: 96, color: "#ffffff" },
      { name: "C++", pct: 2, color: "#888888" },
      { name: "Other", pct: 2, color: "#666666" },
    ],
    github: "https://github.com/aryanp685/medicare-app-flutter",
    updated: "Apr 2026",
  },
  {
    title: "Urban Heat Island Analyzer",
    icon: CloudSun,
    gradient: "from-white/25 via-gray-400/10 to-transparent",
    description:
      "A web tool that analyzes the microclimate of cities - enter a location to get temperature, humidity, green cover and UHI index, plus eco-friendly suggestions to cool the city down.",
    tags: ["JavaScript", "CSS", "HTML"],
    languages: [
      { name: "JavaScript", pct: 44, color: "#ffffff" },
      { name: "CSS", pct: 35, color: "#aaaaaa" },
      { name: "HTML", pct: 21, color: "#888888" },
    ],
    github: "https://github.com/aryanp685/climate",
    updated: "Apr 2025",
  },
  {
    title: "Personal Portfolio",
    icon: Code2,
    gradient: "from-white/25 via-gray-300/10 to-transparent",
    description:
      "The site you are looking at right now - built with React, Vite and Tailwind CSS v4, featuring a working contact form, smooth animations and a fully responsive layout.",
    tags: ["React", "Vite", "Tailwind CSS"],
    languages: [
      { name: "JavaScript", pct: 89, color: "#ffffff" },
      { name: "CSS", pct: 10, color: "#aaaaaa" },
      { name: "HTML", pct: 1, color: "#888888" },
    ],
    github: "https://github.com/aryanp685/portfolio",
    updated: "Sep 2026",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-transparent">
      <motion.div 
        className="absolute top-1/4 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div 
        className="container mx-auto px-6 relative z-10"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="text-center mx-auto max-w-3xl mb-16">
          <motion.span 
            className="text-white text-sm font-medium tracking-wider uppercase"
            variants={fadeInUp}
          >
            Featured Work
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6"
            variants={fadeInUp}
          >
            Projects That
            <span className="font-serif italic font-normal text-gray-300">{" "} make an Impact.</span>
          </motion.h2>
          <motion.p 
            className="text-gray-400"
            variants={fadeInUp}
          >
            Real projects, straight from my GitHub - every card links to the actual code.
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.a
              key={idx}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                openExternal(project.github);
              }}
              className="group glass rounded-2xl overflow-hidden flex flex-col border border-white/20 hover:border-white/40 transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={`relative h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <project.icon className="w-14 h-14 text-white/80 group-hover:scale-110 transition-transform duration-300" />
                <motion.div 
                  className="absolute top-4 right-4 p-2 rounded-full glass opacity-0 border border-white/20"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </motion.div>
                <div className="absolute bottom-0 left-0 right-0 h-2 flex">
                  {project.languages.map((lang) => (
                    <div
                      key={lang.name}
                      title={`${lang.name} ${lang.pct}%`}
                      style={{ width: `${lang.pct}%`, backgroundColor: lang.color }}
                    />
                  ))}
                </div>
              </div>
              <div className="p-6 space-y-4 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-semibold text-white group-hover:text-gray-200 transition-colors">{project.title}</h3>
                  <LuGithub className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors shrink-0" />
                </div>
                <p className="text-gray-400 text-sm flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium border border-white/20 text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-white/20 text-xs text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-white" />
                    {project.languages[0].name}
                  </span>
                  <span>Updated {project.updated}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
        <motion.div 
          className="text-center mt-12"
          variants={fadeInUp}
        >
          <motion.a
            href="https://github.com/aryanp685?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              openExternal("https://github.com/aryanp685?tab=repositories");
            }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white font-medium hover:border-white hover:bg-white/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View all on GitHub <ArrowUpRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Projects
