// src/features/portfolio/components/ProjectGrid.tsx
import { motion } from "framer-motion";
import type { Project } from "../types";
import {Terminal} from "lucide-react";

export interface ProjectGridProps {
    projects: Project[];
    loading: boolean;
    error: string | null;
}

export const ProjectGrid = ({ projects, loading, error }: ProjectGridProps) => {
    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="text-center text-red-500">{error}</div>;

    return (
        <section className="grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
                <motion.div
                    key={p.name}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                    className="border border-[var(--border)] bg-white rounded-3xl shadow-sm hover:shadow-lg p-6 transition-all"
                >
                    <h4 className="font-bold text-xl text-[var(--text)] mb-1">{p.name}</h4>
                    <p className="text-xs text-[var(--text-light)] mb-3">{p.timeline}</p>
                    <p className="text-sm text-[var(--text-light)] mb-4 leading-relaxed">{p.description}</p>

                    {p.impact && (
                        <span className="text-[var(--success)] bg-[var(--success-bg)] px-3 py-1 rounded-xl border border-green-200 text-xs w-fit block mb-4">
        ⚡ {p.impact}
      </span>
                    )}

                    <div className="flex flex-wrap gap-2 mb-4">
                        {p.tech.map((t) => (
                            <span
                                key={t}
                                className="px-2 py-1 bg-[var(--primary-light)] text-[var(--primary)] border border-blue-200 rounded-xl text-xs font-medium hover:shadow-sm transition"
                            >
          {t}
        </span>
                        ))}
                    </div>

                    {p.link && (
                        <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-xs flex items-center gap-1 text-[var(--text-light)] hover:text-[var(--text)] transition">
                            <Terminal size={12}/> View Code
                        </a>
                    )}
                </motion.div>
            ))}

        </section>
    );
};
