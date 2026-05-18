import { motion } from "framer-motion";

function PageTransition({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{
                once: true,
                amount: 0.15,
            }}
            transition={{
                duration: 0.8,
                ease: "easeOut",
            }}
            className="w-full"
        >
            {children}
        </motion.div>
    );
}

export default PageTransition;