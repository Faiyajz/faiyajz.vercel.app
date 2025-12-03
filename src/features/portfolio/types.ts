export interface Project {
    name: string;
    timeline: string;
    description: string;
    impact?: string;
    tech: string[];
    link?: string;
}

export interface SkillsWallProps {
    skills: string[];
}

export interface PortfolioMetrics {
    performance: string;
    team: string;
    cloud: string;
}

