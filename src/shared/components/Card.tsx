import { motion } from "framer-motion";

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export const Card = ({ children, className }: CardProps) => (
    <motion.div
        whileHover={{ y: -3, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 180, damping: 18 }}
        className={`border border-gray-200 rounded-2xl shadow-sm hover:shadow-md p-5 bg-white transition-all ${className}`}
    >
        {children}
    </motion.div>
);
