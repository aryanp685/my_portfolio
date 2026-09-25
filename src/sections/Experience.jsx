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

const experiences = [
  {
    period: "2024 — Present",
    role: "Freelance Web Developer",
    company: "Self-Employed",
    description:
      "Designing and building small business websites and landing pages with React, Tailwind CSS and AI-assisted workflows. Handling everything myself - client requirements, design, code and deployment.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Git & GitHub", "AI Tools"],
    current: true,
  },
];


const Experience = () => {
  return (
    <section id="experience" className="relative py-32 overflow-hidden bg-transparent">
      <motion.div 
        className="absolute top-1/2 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2"
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
        className="container mx-auto px-6 relative z-10"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-3xl mb-16">
          <motion.span 
            className="text-white uppercase text-sm font-medium tracking-wider"
            variants={fadeInUp}
          >
            Career Journey
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl text-white font-bold mt-4 mb-6"
            variants={fadeInUp}
          >
            Experience that <span className="font-normal font-serif italic text-gray-300"> speaks volumes.</span>
          </motion.h2>
          <motion.p 
            className="text-gray-400"
            variants={fadeInUp}
          >
            From my first freelance projects to where I am today - building real things for real clients.
          </motion.p>
        </div>
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-white/70 via-white/30 to-transparent md:-translate-x-1/2" />
          <div className="space-y-24">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx} 
                className="grid grid-cols-1 md:grid-cols-2 relative gap-12 md:gap-24"
                variants={fadeInUp}
              >
                <motion.div 
                  className="absolute left-0 md:left-1/2 top-0 w-5 h-5 bg-white rounded-full -translate-x-1/2 ring-4 ring-black z-10 shadow-[0_0_25px_rgba(255,255,255,0.5)]"
                  animate={exp.current ? {
                    scale: [1, 1.2, 1],
                  } : {}}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {exp.current && (
                    <motion.span 
                      className="absolute inset-0 rounded-full bg-white"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  )}
                </motion.div>

                <div className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                  <motion.div 
                    className="glass rounded-3xl p-8 md:p-10 border border-white/30 hover:border-white/50 transition-all duration-500"
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    <span className="text-sm text-white font-medium">{exp.period}</span>
                    <h3 className="text-3xl font-bold mt-2 text-white">{exp.role}</h3>
                    <p className="text-white font-medium mt-1">{exp.company}</p>
                    <p className="text-gray-400 text-base leading-7 mt-5">{exp.description}</p>
                    <div className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "justify-end" : ""}`}>
                      {exp.technologies.map((tech, techidx) => (
                        <span 
                          className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-gray-300 hover:bg-white/20 transition-all" 
                          key={techidx}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
