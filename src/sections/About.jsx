import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
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

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable and scalable code that stands the test of time."
  },

  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-32 overflow-hidden relative bg-transparent">
      <motion.div 
        className="container mx-auto relative px-6 z-10"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <motion.div variants={fadeInUp}>
              <span className="text-white text-sm font-medium tracking-wider uppercase">About me </span>
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold leading-tight text-white"
              variants={fadeInUp}
            >
              Building the future,
              <span className="font-serif italic font-normal text-gray-300">{" "} one component at a time.</span>
            </motion.h2>

            <motion.div className="text-gray-400 space-y-4" variants={fadeInUp}>
              <p>
                I'm a frontend developer from Nagpur with 1+ year of freelancing experience.
                My journey started during my BCA with a simple curiosity for how things work
                on the web, and it quickly turned into building real websites for real clients.
              </p>
              <p>
                I specialize in React, JavaScript and Tailwind CSS, using AI-assisted
                workflows to move fast without cutting corners - from clean landing pages to
                fully responsive business websites.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new tools and technologies,
                pushing my work on GitHub, or polishing my craft one project at a time.
              </p>
            </motion.div>
            <motion.div 
              className="glass rounded-2xl p-6 glow-border border border-white/20"
              variants={fadeInUp}
            >
              <p className="text-lg font-medium italic text-white">
                "My mission is to create digital experiences that are not just
                functional, but truly delightful - products that users love to use and
                developers love to maintain."
              </p>
            </motion.div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <motion.div 
                key={idx} 
                className="glass p-6 rounded-2xl border border-white/20 hover:border-white/40 transition-all"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 hover:bg-white/20 transition-colors">
                  <item.icon className="w-6 h-6 text-white"/>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
