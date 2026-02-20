import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";

import badge50 from "../assets/leetcode/50.gif";
import badge200 from "../assets/leetcode/200.gif";
import badge365 from "../assets/leetcode/365_new.gif";
import badge2025 from "../assets/leetcode/2025.gif";
import badge2550 from "../assets/leetcode/2550.gif";
import badge25100 from "../assets/leetcode/25100.gif";

const badgeData = [
    { label: "50-Day Streak 2026", year: "2026", image: badge50, glow: "rgba(251, 191, 36, 0.3)" },
    { label: "200-Day Streak", year: "2024", image: badge200, glow: "rgba(251, 113, 133, 0.3)" },
    { label: "365-Day Streak", year: "2024", image: badge365, glow: "rgba(96, 165, 250, 0.3)" },
    { label: "Annual Master", year: "2025", image: badge2025, glow: "rgba(167, 139, 250, 0.3)" },
    { label: "Consistency Combo", year: "2025", image: badge2550, glow: "rgba(52, 211, 153, 0.3)" },
    { label: "Elite Streak", year: "2025", image: badge25100, glow: "rgba(251, 146, 60, 0.3)" },
];

export const LeetCodeBadges = () => {
    return (
        <section id="leetcode" className="py-20 relative overflow-hidden bg-transparent">
            <div className="container mx-auto px-6 relative z-10 mb-10">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row items-center justify-between gap-4"
                >
                    <div className="flex items-center gap-3">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black tracking-[0.25em] uppercase">
                            <Star className="w-3 h-3 fill-primary/20" />
                            Platform Achievements
                        </div>
                        <h2 className="text-2xl font-bold tracking-tighter text-gray-900 uppercase font-heading">
                            LeetCode Badges
                        </h2>
                    </div>
                    <motion.a
                        href="https://leetcode.com/u/Navyacs/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-white shadow-md shadow-gray-200/50 text-gray-900 font-bold uppercase text-[10px] tracking-widest hover:bg-gray-900 hover:text-white transition-all duration-300"
                    >
                        View Profile <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </motion.a>
                </motion.div>
            </div>

            {/* Horizontally scrollable badge row */}
            <div className="px-6 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent pb-4">
                <div className="flex gap-6 w-max mx-auto">
                    {badgeData.map((badge, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.07 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10, scale: 1.05 }}
                            className="group relative flex flex-col items-center bg-white border border-gray-100 px-8 py-8 rounded-[2.5rem] shadow-[0_8px_32px_rgba(0,0,0,0.06)] w-56 flex-shrink-0 transition-all duration-300 cursor-default"
                        >
                            {/* Glow */}
                            <div
                                className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-300"
                                style={{ background: badge.glow }}
                            />

                            {/* Badge image */}
                            <div className="relative w-28 h-28 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                                <img src={badge.image} alt={badge.label} className="w-full h-full object-contain drop-shadow-lg" />
                            </div>

                            <h5 className="text-[11px] font-black text-gray-900 uppercase tracking-widest leading-tight font-heading mb-2 text-center">
                                {badge.label}
                            </h5>
                            <div className="px-3 py-1 rounded-full bg-gray-50 border border-gray-100 text-[9px] font-black text-primary/40 uppercase tracking-tighter">
                                {badge.year}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
