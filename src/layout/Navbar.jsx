import { Menu, X } from "lucide-react"
import Button from "../components/Button"
import { useEffect, useState } from "react"
import { openContactForm } from "../lib/contact"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
    {href: "#about" , label: "About"},
    {href: "#projects" , label: "Projects"},
    {href: "#experience" , label: "Experience"},
    {href: "#testimonials" , label: "Testimonials"},
]


const Navbar = () => {
    const [isMobileMenuOpen , setIsMobileMenuOpen] = useState(false);
    const [isScrolled , setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () =>{
            setIsScrolled(window.scrollY > 50 );
        };


        window.addEventListener("scroll",handleScroll );

        return () => window.removeEventListener("scroll", handleScroll );
    },[]);
  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3 border-b border-white/10" : "bg-transparent py-5"} z-50`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
          <motion.a 
            href="#" 
            className="text-xl font-bold tracking-light hover:text-white font-sans text-white"
            whileHover={{ scale: 1.05 }}
          >
              <span className="glow-text gradient-text">Aryan Patil</span>
          </motion.a>

        <div className="hidden md:flex items-center gap-1">
            <div className="glass rounded-full px-2 py-1 flex items-center gap-1 border border-white/20">
                {navLinks.map((link , index)=>(
                    <motion.a
                    href={link.href} key={index}
                    className="px-4 py-2 text-sm text-gray-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
                    aria-label={`Navigate to ${link.label} section`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    >{link.label}</motion.a>
                ))}
            </div>
        </div>
        <div className="hidden md:block">
            <Button size="default" className="cursor-pointer" onClick={openContactForm}>Contact Me</Button>
        </div>

        <motion.button 
          onClick={()=>setIsMobileMenuOpen((prev)=> !prev)} 
          className="md:hidden p-2 text-white cursor-pointer" 
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"} 
          aria-expanded={isMobileMenuOpen}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
            {isMobileMenuOpen ? <X size={24}/> : <Menu size={24} />}
        </motion.button>
        </nav>

        <AnimatePresence>
          { isMobileMenuOpen && (
            <motion.div 
              className="md:hidden glass-strong border-t border-white/10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
                <div className="mx-auto px-6 py-6 container gap-4 flex flex-col">
                    {navLinks.map((link , index)=>(
                        <motion.a
                        href={link.href} key={index}
                        onClick={()=>setIsMobileMenuOpen(false)}
                        className="text-lg text-gray-400 hover:text-white py-2"
                        aria-label={`Navigate to ${link.label} section`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 5 }}
                        >{link.label}</motion.a>
                    ))}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Button onClick={()=>{ setIsMobileMenuOpen(false); openContactForm(); }} >Contact Me</Button>
                    </motion.div>
                </div>
            </motion.div>
          )}
        </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
