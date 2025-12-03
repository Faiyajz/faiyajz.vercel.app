import { motion } from "framer-motion";
import { Code, Zap } from "lucide-react";

export const Hero = () => {
    return (
        <section className="bg-[var(--bg-section)] py-20 mb-24">
            <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center px-6"
            >
                <Code size={60} className="mx-auto mb-6 text-[var(--primary)] opacity-90" />

                <h1 className="text-6xl font-extrabold text-[var(--text)] tracking-tight leading-[1.1] mb-6">
                    Crafting Scalable <span className="text-[var(--primary)]">Systems</span>
                    <span className="text-[var(--primary)]">.</span>
                </h1>

                <p className="text-lg text-[var(--text-light)] max-w-2xl mx-auto mb-10 leading-relaxed">
                    Senior Full-Stack Engineer | System Designer | Team Leader
                </p>

                <div className="flex justify-center gap-2 text-sm text-[var(--success)] font-medium items-center">
                    <Zap size={15} /> Performance-focused. Security-aware. Recruiter-ready.
                </div>

                <button className="mt-10 px-8 py-3 bg-[var(--primary)] text-[var(--primary)] text-base font-semibold rounded-2xl shadow hover:shadow-lg transition">
                    View Projects
                </button>
            </motion.div>
        </section>
    );
};
