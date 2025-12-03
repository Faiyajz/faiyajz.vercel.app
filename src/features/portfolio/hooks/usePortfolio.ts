import { useEffect, useState } from "react";
import { getProjects, getSkills, getMetrics } from "../api/portfolioApi";
import type { Project, PortfolioMetrics } from "../types";

export const usePortfolio = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [skills, setSkills] = useState<string[]>([]);
    const [metrics, setMetrics] = useState<PortfolioMetrics | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const load = async () => {
            try {
                const [p, s, m] = await Promise.all([
                    getProjects(),
                    getSkills(),
                    getMetrics(),
                ]);

                setProjects(p.projects);
                setSkills(s.skills);
                setMetrics(m.metrics);
            } catch (err: any) {
                setError(err.message ?? "Unknown error");
            } finally {
                setLoading(false);
            }
        };

        load();
    }, []);

    return { projects, skills, metrics, loading, error };
};
