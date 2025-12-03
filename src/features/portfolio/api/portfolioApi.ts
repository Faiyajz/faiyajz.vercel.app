import { apiClient } from "../../../api/client";
import type { Project, PortfolioMetrics } from "../types";

export const getProjects = () =>
    apiClient<{ projects: Project[] }>("/data/projects.json");

export const getSkills = () =>
    apiClient<{ skills: string[] }>("/data/skills.json");

export const getMetrics = async () =>
    apiClient<{ metrics: PortfolioMetrics }>("/data/metrics.json");
