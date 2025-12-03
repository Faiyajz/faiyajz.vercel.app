import { motion } from "framer-motion";
import { Cpu } from "lucide-react";
import type { SkillsWallProps } from "../types";

export const SkillsWall = ({ skills }: SkillsWallProps) => {
    return (
        <section className="bg-[var(--bg-section)] py-12 mb-32 rounded-3xl px-6">
            <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-6 flex justify-center items-center gap-2 text-[var(--text)]"
            >
                <Cpu size={22} className="text-[var(--primary)]" /> Tech Stack
            </motion.h2>

            <div className="flex justify-center flex-wrap gap-3 max-w-4xl mx-auto">
                {skills.map((skill: string) => (
                    <span
                        key={skill}
                        className="px-4 py-2 bg-white border border-[var(--border)] rounded-2xl text-xs font-semibold text-[var(--text-light)] hover:shadow-md transition"
                    >
            {skill}
          </span>
                ))}
            </div>
        </section>
    );
};
