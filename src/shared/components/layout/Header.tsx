import {Sun, Moon, Monitor, Code} from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

export default function Header() {
    const { theme, toggleTheme, applySystemTheme } = useTheme();

    return (
        <header className="sticky top-0 bg-section backdrop-blur-sm border-b border-[var(--border)] z-50">
            <div className="flex justify-between items-center p-4 max-w-6xl mx-auto">
                <div className="flex items-center gap-2 text-xl font-bold text-[var(--text)]">
                    <Code size={22} className="text-[var(--primary)]" /> <span>Muhammad Faiyaj Z.</span>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-xl border border-[var(--border)] bg-white hover:shadow-md transition"
                    >
                        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                    </button>

                    <button
                        onClick={applySystemTheme}
                        className="p-2 rounded-xl border border-[var(--border)] bg-white hover:shadow-md transition text-xs flex items-center gap-1 text-[var(--text-light)]"
                    >
                        <Monitor size={12} /> AUTO
                    </button>
                </div>
            </div>
        </header>
    );
}
