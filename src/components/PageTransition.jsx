import { motion } from "framer-motion";

const variants = {
    initial: {
        opacity: 0,
        y: 30
    },
    animate: {
        opacity: 1,
        y: 0
    }
};

function PageTransition({ children }) {
    return (
        <motion.div
            variants={variants}
            initial="initial"
            whileInView="animate" // Viewport scroll control me aate hi lazy transition chalegi
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.6,
                ease: "easeInOut"
            }}
            className="w-full"
        >
            {children}
        </motion.div>
    );
}

export default PageTransition;