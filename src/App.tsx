import Header from "./shared/components/layout/Header";
import Footer from "./shared/components/layout/Footer";
import { Hero } from "./features/portfolio/components/Hero";
import { ProjectGrid } from "./features/portfolio/components/ProjectGrid";
import { Metrics } from "./features/portfolio/components/Metrics";
import { SkillsWall } from "./features/portfolio/components/SkillsWall";
import { usePortfolio } from "./features/portfolio/hooks/usePortfolio";
import { motion } from "framer-motion";


function App() {
    const { projects, skills, metrics, loading, error } = usePortfolio();

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <Hero />
            <ProjectGrid projects={projects} loading={loading} error={error} />
            <SkillsWall skills={skills} />
            <Metrics metrics={metrics} />


            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="fixed bottom-5 left-5 bg-white border border-gray-200 shadow-md px-4 py-2 rounded-full text-xs flex items-center gap-2 opacity-80 hover:opacity-100 transition cursor-pointer"
            >
                🛡 Built Secure
            </motion.div>

            <Footer />
        </div>
    );
}

export default App;
