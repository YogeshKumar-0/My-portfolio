import { motion } from "framer-motion";

function Reveal({
    children,
    delay = 0,
    y = 40,
    duration = 0.6,
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: false,
                amount: 0.05,
                margin: "0px 0px -120px 0px",
            }}
            transition={{
                duration,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {children}
        </motion.div>
    );
}

export default Reveal;