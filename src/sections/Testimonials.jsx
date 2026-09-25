import { Star } from "lucide-react";
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

const testimonials = [
  {
    quote:
      "Aryan built our shop's website exactly the way we imagined it. He explained everything in simple language and delivered on time.",
    author: "Rohan Deshmukh",
    role: "Owner, Deshmukh Traders",
  },
  {
    quote:
      "Our boutique's landing page looks premium and loads fast. We started getting customer enquiries from the very first week.",
    author: "Priya Kulkarni",
    role: "Founder, Bloom Boutique",
  },
  {
    quote:
      "He rebuilt our cafe's menu site and made it work beautifully on phones. Communication was smooth from day one.",
    author: "Sagar Meshram",
    role: "Owner, Brew & Bytes Cafe",
  },
  {
    quote:
      "A patient and professional developer. He handled everything - design, website and deployment - and even taught us how to update it ourselves.",
    author: "Anjali Wankhede",
    role: "Director, Bright Steps Tutorials",
  },
];

const getInitials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const Testimonials = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-transparent" id="testimonials">
      <motion.div 
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="container mx-auto px-6 z-10 relative"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            className="text-white text-sm font-medium tracking-wider uppercase"
            variants={fadeInUp}
          >
            What People Say
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white"
            variants={fadeInUp}
          >
            Kind words from{" "}
            <span className="font-serif italic font-normal text-gray-300">
              amazing people.
            </span>
          </motion.h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              className="glass rounded-3xl p-8 flex flex-col gap-6 border border-white/20 hover:border-white/40 transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -8 }}
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-white text-white" />
                ))}
              </div>
              <blockquote className="text-white/90 leading-7 flex-1">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-gradient-to-br from-white to-gray-400 flex items-center justify-center font-bold text-black">
                  {getInitials(t.author)}
                </div>
                <div>
                  <div className="font-semibold text-white">{t.author}</div>
                  <div className="text-sm text-gray-400">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
