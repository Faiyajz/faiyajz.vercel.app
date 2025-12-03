import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Globe } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-[var(--border)] py-10 mt-20">
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}
                        viewport={{ once: true }} className="max-w-3xl mx-auto text-center px-4">

                <h2 className="text-xl font-bold mb-6 text-[var(--text)]">Let’s Build Something Great</h2>

                <div className="flex justify-center gap-6 mb-6">
                    <a href={"https://github.com/faiyajz"} target="_blank"><Github size={22} /></a>
                    <a href={"https://linkedin.com/in/faiyajz"} target="_blank"><Linkedin size={22} /></a>
                    <a href={"mailto:faiyajz007@gmail.com"}><Mail size={22} /></a>
                    <a href="#"><Phone size={22} /></a>
                    <a href="#"><Globe size={22} /></a>
                </div>

                <p className="text-xs text-[var(--text-light)] opacity-60">Dhaka, Bangladesh</p>

                <button className="mt-6 px-5 py-2 bg-[var(--primary)] text-[var(--primary)] rounded-xl text-sm font-semibold shadow-sm hover:shadow-lg transition">
                    Open to Interview
                </button>
            </motion.div>
        </footer>
    );
}
