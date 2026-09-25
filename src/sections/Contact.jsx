import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import Button from "../components/Button";
import { CONTACT_EMAIL, openContactForm } from "../lib/contact";
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

const Contact = () => {
  return (
    <section id="contact" className="py-32 overflow-hidden relative bg-transparent">
      <motion.div 
        className="container mx-auto px-6 relative z-10"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <motion.span 
            className="text-white text-sm font-medium tracking-wider uppercase"
            variants={fadeInUp}
          >
            Contact
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold leading-tight text-white"
            variants={fadeInUp}
          >
            Let&apos;s build something
            <span className="font-serif italic font-normal text-gray-300">
              {" "}
              amazing together.
            </span>
          </motion.h2>
          <motion.p 
            className="text-gray-400"
            variants={fadeInUp}
          >
            Have a project in mind, a role to discuss, or just want to say hi?
            Hit the button below and your message will land straight in my
            inbox.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <motion.a
            href={`mailto:${CONTACT_EMAIL}`}
            className="glass rounded-2xl p-6 group hover:bg-white/10 transition-colors border border-white/20"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
          >
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-lg mb-1 text-white">
              Email
            </h3>
            <p className="text-sm text-gray-400 break-all">
              {CONTACT_EMAIL}
            </p>
          </motion.a>

          <motion.div 
            className="glass rounded-2xl p-6 border border-white/20"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
          >
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-lg mb-1 text-white">
              Location
            </h3>
            <p className="text-sm text-gray-400">
              Nagpur, Maharashtra, India
            </p>
          </motion.div>

          <motion.a
            href="tel:+918928832287"
            className="glass rounded-2xl p-6 group hover:bg-white/10 transition-colors border border-white/20"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
          >
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-lg mb-1 text-white">
              Phone
            </h3>
            <p className="text-sm text-gray-400">+91 89288 32287</p>
          </motion.a>

          <motion.div 
            className="glass rounded-2xl p-6 border border-white/20"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
          >
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
              <LuGithub className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-lg mb-1 text-white">
              Socials
            </h3>
            <div className="flex items-center gap-3 mt-2">
              <motion.a
                href="https://github.com/aryanp685"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                onClick={(e) => {
                  e.preventDefault();
                  openExternal("https://github.com/aryanp685");
                }}
                className="p-2 rounded-full glass hover:bg-white/10 text-gray-400 hover:text-white transition-colors border border-white/20"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <LuGithub className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/aryan-patil-44a839336/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                onClick={(e) => {
                  e.preventDefault();
                  openExternal("https://www.linkedin.com/in/aryan-patil-44a839336/");
                }}
                className="p-2 rounded-full glass hover:bg-white/10 text-gray-400 hover:text-white transition-colors border border-white/20"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <LuLinkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="text-center mt-14"
          variants={fadeInUp}
        >
          <Button size="lg" onClick={openContactForm} className="cursor-pointer">
            Contact Me <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
