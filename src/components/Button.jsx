import { motion } from "framer-motion"

const Button = ({ className = "", size = "default", children, ...props }) => {
    const baseClasses = "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black bg-white text-black hover:bg-gray-200 shadow-lg shadow-white/10 transition-colors ";
    const sizeClasses ={
        sm: "px-4 py-2 text-sm",
        default: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };
    const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;
    
    return(
        <motion.button
            className={classes}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            {...props}
        >
            <span className="relative flex items-center justify-center gap-2 ">{children}</span>
        </motion.button>
    );
};

export default Button;
