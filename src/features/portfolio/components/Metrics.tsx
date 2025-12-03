import type { PortfolioMetrics } from "../types";
import { Rocket, Users, Globe, Zap } from "lucide-react";

export const Metrics = ({ metrics }: { metrics: PortfolioMetrics | null }) => {
    const m = metrics ?? { performance: "N/A", team: "N/A", cloud: "N/A" };

    const metricItems = [
        { label: "Performance", value: m.performance, icon: <Zap size={20} /> },
        { label: "Team Leadership", value: m.team, icon: <Users size={20} /> },
        { label: "Cloud Experience", value: m.cloud, icon: <Globe size={20} /> },
        { label: "Shipping Systems", value: "5+ delivered", icon: <Rocket size={20} /> },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-28 px-5">
            {metricItems.map((item) => (
                <div key={item.label} className="p-5 bg-white border border-[var(--border)] rounded-3xl shadow-sm hover:shadow transition text-center">
                    <div className="flex justify-center text-[var(--primary)] opacity-80 mb-3">
                        {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-[var(--text)] mb-1">{item.label}</h3>
                    <p className="text-xs text-[var(--text-light)]">{item.value}</p>
                </div>
            ))}
        </div>
    );
};
