import Header from "./shared/components/layout/Header";
import Footer from "./shared/components/layout/Footer";
import { Hero } from "./features/portfolio/components/Hero";
import { ProjectGrid } from "./features/portfolio/components/ProjectGrid";
import { Metrics } from "./features/portfolio/components/Metrics";
import { SkillsWall } from "./features/portfolio/components/SkillsWall";
import { usePortfolio } from "./features/portfolio/hooks/usePortfolio";

function App() {
    const { projects, skills, metrics, loading, error } = usePortfolio();

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <Hero />
            <ProjectGrid projects={projects} loading={loading} error={error} />
            <SkillsWall skills={skills} />
            <Metrics metrics={metrics} />
            <Footer />
        </div>
    );
}

export default App;
