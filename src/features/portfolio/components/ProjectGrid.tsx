import {motion} from "framer-motion";
import type {Project} from "../types";
import { Card } from "../../../shared/components/Card";


export interface ProjectGridProps {
    projects: Project[];
    loading: boolean;
    error: string | null;
}

export const ProjectGrid = ({projects, loading, error}: ProjectGridProps) => {
    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="text-center text-red-500">{error}</div>;

    return (
        <section className="grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
                <motion.div key={p.name} initial={{opacity: 0, y: 8}} whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.3}}>
                    <Card>
                        <h4 className="font-bold text-xl text-gray-900 mb-1">{p.name}</h4>
                        <p className="text-xs text-gray-500 mb-3">{p.timeline}</p>
                        <p className="text-sm text-gray-600 mb-4 leading-relaxed">{p.description}</p>

                        {p.impact && (
                            <span
                                className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs border border-green-200 block w-fit mb-4">
          ⚡ {p.impact}
        </span>
                        )}

                        <div className="flex flex-wrap gap-2">
                            {p.tech.map((t) => (
                                <span key={t}
                                      className="px-2 py-1 bg-blue-50 text-blue-500 border border-blue-200 rounded-full text-xs font-medium">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </Card>
                </motion.div>
            ))}
        </section>
    );
};
