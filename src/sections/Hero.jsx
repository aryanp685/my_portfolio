import { ArrowRight, ChevronDown, Download } from "lucide-react"
import Button from "../components/Button"
import { LuGithub, LuLinkedin } from "react-icons/lu"
import { openContactForm } from "../lib/contact"
import { openExternal } from "../lib/links"
import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"

const skills = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "HTML & CSS",
  "Git & GitHub",
  "Vite",
  "Flutter",
  "Firebase",
  "Responsive Design",
  "AI-Assisted Development"
];

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

const useTypewriter = (phrases, speed = 100, delay = 2000) => {
  const [displayText, setDisplayText] = useState('');
  const timeoutRef = useRef(null);
  const isMountedRef = useRef(true);
  const phraseIndexRef = useRef(0);
  const phrasesRef = useRef(phrases);
  const speedRef = useRef(speed);
  const delayRef = useRef(delay);

  useEffect(() => {
    phrasesRef.current = phrases;
    speedRef.current = speed;
    delayRef.current = delay;
  }, [phrases, speed, delay]);

  useEffect(() => {
    isMountedRef.current = true;
    let currentIndex = 0;
    let isDeleting = false;

    const typeNextChar = () => {
      if (!isMountedRef.current) return;

      const currentPhrase = phrasesRef.current[phraseIndexRef.current];
      const currentSpeed = speedRef.current;
      const currentDelay = delayRef.current;
      
      if (isDeleting) {
        if (currentIndex > 0) {
          setDisplayText(currentPhrase.slice(0, currentIndex - 1));
          currentIndex--;
          timeoutRef.current = setTimeout(typeNextChar, currentSpeed / 2);
        } else {
          isDeleting = false;
          phraseIndexRef.current = (phraseIndexRef.current + 1) % phrasesRef.current.length;
          timeoutRef.current = setTimeout(typeNextChar, 500);
        }
      } else {
        if (currentIndex < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, currentIndex + 1));
          currentIndex++;
          timeoutRef.current = setTimeout(typeNextChar, currentSpeed);
        } else {
          timeoutRef.current = setTimeout(() => {
            isDeleting = true;
            typeNextChar();
          }, currentDelay);
        }
      }
    };

    timeoutRef.current = setTimeout(typeNextChar, 2000);

    return () => {
      isMountedRef.current = false;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return { displayText };
};

const Hero = () => {
  const { displayText: typingText } = useTypewriter(
    ['Crafting Digital Experiences', 'Building Modern Websites', 'Creating User-Centric Designs'],
    80,
    2000
  );

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img src="/bg.jpg" alt="hero img" decoding="async" className="w-full h-full object-cover opacity-15 grayscale" />
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/20 via-black/50 to-black" />

      <motion.div 
        className="container mx-auto px-6 pt-32 pb-20 relative z-10"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-white border border-white/20">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Frontend Developer | React & Tailwind
              </span>
            </motion.div>
            <div className="space-y-4">
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white"
                variants={fadeInUp}
              >
                <span className="text-white glow-text">{typingText}</span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-2 h-12 bg-white ml-1 align-middle"
                />
                <br />
                with
                <br />
                <span className="font-serif italic font-medium text-gray-300">Precision.</span>
              </motion.h1>

              <motion.p 
                className="text-gray-400 text-lg max-w-lg"
                variants={fadeInUp}
              >
                Hi, I'm Aryan Patil - a frontend developer from Nagpur specializing in React and Tailwind CSS. For the past year I've been freelancing, building fast and responsive websites that users love.
              </motion.p>
            </div>
            <motion.div className="flex flex-wrap gap-4" variants={fadeInUp}>
              <Button size="lg" onClick={openContactForm} className="cursor-pointer">Contact Me <ArrowRight className="w-5 h-5" /> </Button>
              <motion.a
                href="/cv.pdf"
                download="Aryan_Patil_CV.pdf"
                className="relative bg-transparent rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-medium overflow-visible border border-white/30 text-white hover:border-white transition-all duration-100 hover:bg-white/10 w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" /> Download CV
                </span>
              </motion.a>
            </motion.div>
            <motion.div className="flex items-center gap-4" variants={fadeInUp}>
              <span className="text-sm text-gray-400 font-bold">Follow Me:</span>
              {[
                { icon: LuGithub, href: "https://github.com/aryanp685", label: "GitHub Profile" },
                { icon: LuLinkedin, href: "https://www.linkedin.com/in/aryan-patil-44a839336/", label: "LinkedIn Profile" }
              ].map((social, idx) => (
                <motion.a 
                  key={idx} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={social.label} 
                  onClick={(e) => { e.preventDefault(); openExternal(social.href); }} 
                  className="p-2 rounded-full glass hover:bg-white/10 text-gray-400 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {<social.icon className="w-5 h-5" />}
                </motion.a>
              ))}
            </motion.div>
          </div>
          <motion.div className="relative" variants={fadeInUp}>
            <div className="max-w-md mx-auto">
              <motion.div 
                className="inset-0 absolute rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-white/5 blur-2xl"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative rounded-3xl glass p-2 glow-border border border-white/20">
                <img src="/img.jpeg" alt="Aryan Patil" className="w-full aspect-[4/5] object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500" />
                <motion.div 
                  className="absolute -bottom-4 -right-4 rounded-xl glass px-4 py-3 border border-white/20"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                    <span className="text-sm font-semibold text-white">Available for Work</span>
                  </div>
                </motion.div>
                <motion.div 
                  className="absolute -top-4 -left-4 rounded-xl glass px-4 py-3 border border-white/20"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                >
                  <div className="text-2xl font-bold text-white">1+</div>
                  <div className="text-xs font-semibold text-gray-300">Year Exp.</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div className="mt-20" variants={fadeInUp}>
          <p className="text-sm text-gray-400 mb-6 text-center">Technologies I work with.</p>
          <div className="relative overflow-hidden">
            <motion.div 
              className="flex"
              animate={{
                x: [0, -1000, 0],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-gray-500 hover:text-white cursor-pointer transition-colors">{skill}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <a className="flex flex-col items-center gap-2 text-gray-400 hover:text-white cursor-pointer" href="#about" aria-label="Scroll to About section">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}
export default Hero
