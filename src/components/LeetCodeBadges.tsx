import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";

import badge200 from "../assets/leetcode/200.gif";
import badge365 from "../assets/leetcode/365_new.gif";
import badge2025 from "../assets/leetcode/2025.gif";

const badgeData = [
    { label: "200-Day Streak", year: "2024", image: badge200, glow: "rgba(251, 113, 133, 0.3)" },
    { label: "365-Day Streak", year: "2024", image: badge365, glow: "rgba(96, 165, 250, 0.3)" },
    { label: "Annual Master", year: "2025", image: badge2025, glow: "rgba(167, 139, 250, 0.3)" },
];

export const LeetCodeBadges = () => {
    return (
        <section id="leetcode" className="py-32 relative overflow-hidden bg-white">
            {/* Technical Grid Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

            {/* Decorative Side Accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.05] pointer-events-none border-l border-dashed border-gray-900" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-end justify-between gap-8 mb-20 border-b border-gray-100 pb-12">
                    <div className="space-y-4 text-left">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-primary text-[10px] font-black tracking-[0.4em] uppercase block"
                        >
                            Log // 03. Achievements
                        </motion.span>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-gray-900 uppercase leading-[0.8] font-heading">
                            Skill <br />
                            <span className="text-gray-200" style={{ WebkitTextStroke: '1px #1a1a1a' }}>Validation</span>
                        </h2>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-gray-400 font-bold max-w-xs md:text-right text-[10px] leading-relaxed uppercase tracking-widest"
                    >
                        Extracted milestones from competitive programming platforms. Data points representing consistency and problem-solving mastery.
                    </motion.p>
                </div>

                {/* Technical Showcase Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 bg-gray-50/30 border border-gray-100">
                    {badgeData.map((badge, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-white p-12 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r last:border-0 border-gray-100 hover:z-20 transition-all duration-500 cursor-default"
                        >
                            {/* Hover Reveal Glow Background */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Technical Corner Markers */}
                            <div className="absolute top-6 left-6 w-3 h-3 border-t-2 border-l-2 border-gray-100 group-hover:border-primary/30 transition-colors" />
                            <div className="absolute bottom-6 right-6 w-3 h-3 border-b-2 border-r-2 border-gray-100 group-hover:border-primary/30 transition-colors" />

                            {/* Badge Container */}
                            <div className="relative mb-8 w-24 h-24 transform transition-all duration-700 group-hover:scale-110">
                                <div className="absolute inset-0 bg-primary/5 rounded-full blur-2xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <img
                                    src={badge.image}
                                    alt={badge.label}
                                    className="w-full h-full object-contain relative z-10 grayscale-[0.8] group-hover:grayscale-0 group-hover:rotate-[360deg] transition-all duration-1000 ease-in-out drop-shadow-sm"
                                />
                            </div>

                            {/* Label Section */}
                            <div className="text-center space-y-2 relative z-10">
                                <span className="text-[9px] font-mono text-gray-400 block tracking-[0.3em] uppercase">
                                    NODE_{badge.year}
                                </span>
                                <h3 className="text-lg font-black text-gray-900 uppercase tracking-tight font-heading">
                                    {badge.label}
                                </h3>

                                <div className="pt-4 flex items-center justify-center gap-3">
                                    <div className="h-[1px] w-6 bg-gray-100 group-hover:w-10 group-hover:bg-primary/40 transition-all duration-500" />
                                    <Star className="w-2.5 h-2.5 text-gray-200 group-hover:text-primary group-hover:rotate-180 transition-all duration-500" />
                                    <div className="h-[1px] w-6 bg-gray-100 group-hover:w-10 group-hover:bg-primary/40 transition-all duration-500" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* External Link */}
                <div className="mt-16 flex flex-col items-center gap-4">
                    <div className="w-px h-12 bg-gradient-to-b from-gray-100 to-transparent" />
                    <a
                        href="https://leetcode.com/u/Navyacs/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 hover:text-primary transition-all flex items-center gap-3"
                    >
                        Access Remote Database <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
};
