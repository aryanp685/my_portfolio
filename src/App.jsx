import Navbar from "./layout/Navbar"
import ContactModal from "./components/ContactModal"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Experience from "./sections/Experience"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import Testimonials from "./sections/Testimonials"
import { motion } from "framer-motion"

// Generate galaxy particles with varying sizes and properties
const generateGalaxyParticles = (count) => {
  return Array.from({ length: count }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5, // 0.5-2.5px - smaller for more stars
    opacity: Math.random() * 0.6 + 0.1, // 0.1-0.7 - more variation
    duration: Math.random() * 30 + 15, // 15-45s - slower for continuous movement
    delay: Math.random() * 10,
    scale: Math.random() * 0.3 + 0.7, // 0.7-1.0
    moveX: Math.random() * 200 - 100, // -100 to 100 - more movement
    moveY: Math.random() * 200 - 100, // -100 to 100
    rotation: Math.random() * 360, // random initial rotation
  }));
};

const galaxyParticles = generateGalaxyParticles(300); // Increased for more stars

// Generate shooting stars (occasional fast-moving stars)
const generateShootingStars = (count) => {
  return Array.from({ length: count }, () => ({
    startX: Math.random() * 100,
    startY: Math.random() * 50, // Start in upper half
    duration: Math.random() * 2 + 1, // 1-3s - fast movement
    delay: Math.random() * 20, // Random delay up to 20s
    size: Math.random() * 1.5 + 0.5, // 0.5-2px
    repeatDelay: Math.random() * 15 + 10, // 10-25s between appearances
  }));
};

const shootingStars = generateShootingStars(5); // 5 shooting stars

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
        x: [0, 300], // Move right
        y: [0, 150], // Move down diagonally
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
        times: [0, 0.25, 0.75, 1], // More complex timing for smoother movement
      }}
    />
  );
};

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden relative bg-black">
      {/* Galaxy Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50" />
        
        {/* Galaxy particles */}
        {galaxyParticles.map((particle, i) => (
          <GalaxyParticle key={`galaxy-${i}`} particle={particle} />
        ))}
        
        {/* Shooting stars */}
        {shootingStars.map((star, i) => (
          <ShootingStar key={`shooting-${i}`} star={star} />
        ))}
        
        {/* Additional ambient glow */}
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
