import Navbar from "./layout/Navbar"
import ContactModal from "./components/ContactModal"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Experience from "./sections/Experience"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import Testimonials from "./sections/Testimonials"
import { motion } from "framer-motion"

const generateGalaxyParticles = (count) => {
  return Array.from({ length: count }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    opacity: Math.random() * 0.6 + 0.1,
    duration: Math.random() * 30 + 15,
    delay: Math.random() * 10,
    scale: Math.random() * 0.3 + 0.7,
    moveX: Math.random() * 200 - 100,
    moveY: Math.random() * 200 - 100,
    rotation: Math.random() * 360,
  }));
};

const galaxyParticles = generateGalaxyParticles(60);

const generateShootingStars = (count) => {
  return Array.from({ length: count }, () => ({
    startX: Math.random() * 100,
    startY: Math.random() * 50,
    duration: Math.random() * 2 + 1,
    delay: Math.random() * 20,
    size: Math.random() * 1.5 + 0.5,
    repeatDelay: Math.random() * 15 + 10,
  }));
};

const shootingStars = generateShootingStars(3);

const ShootingStar = ({ star }) => {
  return (
    <motion.div
      className="absolute rounded-full bg-white"
      style={{
        left: `${star.startX}%`,
        top: `${star.startY}%`,
        width: star.size,
        height: star.size,
      }}
      animate={{
        x: [0, 300],
        y: [0, 150],
        opacity: [0, 1, 1, 0],
        scale: [0, 1, 1, 0],
      }}
      transition={{
        duration: star.duration,
        delay: star.delay,
        repeat: Infinity,
        repeatDelay: star.repeatDelay,
        ease: "easeOut",
      }}
    />
  );
};

const GalaxyParticle = ({ particle }) => {
  return (
    <motion.div
      className="absolute rounded-full bg-white"
      style={{
        left: `${particle.x}%`,
        top: `${particle.y}%`,
        width: particle.size,
        height: particle.size,
        opacity: particle.opacity,
      }}
      animate={{
        x: [0, particle.moveX, -particle.moveX, 0],
        y: [0, particle.moveY, -particle.moveY, 0],
        scale: [particle.scale, particle.scale * 1.3, particle.scale * 0.7, particle.scale],
        opacity: [particle.opacity, particle.opacity * 0.4, particle.opacity * 0.8, particle.opacity],
      }}
      transition={{
        duration: particle.duration,
        delay: particle.delay,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.25, 0.75, 1],
      }}
    />
  );
};

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden relative bg-black">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50" />

        {galaxyParticles.map((particle, i) => (
          <GalaxyParticle key={`galaxy-${i}`} particle={particle} />
        ))}

        {shootingStars.map((star, i) => (
          <ShootingStar key={`shooting-${i}`} star={star} />
        ))}

        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <Navbar/>
      <main className="relative z-10">
        <Hero/>
        <About/>
        <Projects/>
        <Experience/>
        <Testimonials/>
        <Contact/>

      </main>
      <ContactModal />
    </div>
  )
}

export default App
