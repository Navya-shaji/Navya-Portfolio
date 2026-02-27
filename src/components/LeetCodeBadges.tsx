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
        <section id="leetcode" className="py-32 relative overflow-hidden bg-transparent">
            {/* Decorative Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center gap-6"
                >
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/50 backdrop-blur-md border border-primary/10 text-primary text-[11px] font-black tracking-[0.25em] uppercase shadow-sm">
                        <Star className="w-3.5 h-3.5 fill-primary/20" />
                        Milestones Captured
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900 uppercase font-heading">
                        LeetCode <span className="text-primary/40">Achievements</span>
                    </h2>
                    <motion.a
                        href="https://leetcode.com/u/Navyacs/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-2xl bg-gray-900 shadow-xl shadow-gray-900/10 text-white font-bold uppercase text-[11px] tracking-widest hover:bg-primary transition-all duration-300"
                    >
                        Explore My Journey <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </motion.a>
                </motion.div>
            </div>

            {/* Premium Badge Grid */}
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {badgeData.map((badge, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -12 }}
                            className="group relative"
                        >
                            {/* Animated Outer Glow */}
                            <div
                                className="absolute -inset-1 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none"
                                style={{ background: `radial-gradient(circle, ${badge.glow} 0%, transparent 70%)` }}
                            />

                            {/* Main Glass Card */}
                            <div className="relative flex flex-col items-center bg-white/60 backdrop-blur-2xl border border-white/80 p-10 md:p-12 rounded-[3.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-all duration-500 overflow-hidden">
                                {/* Subtle Inner Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent pointer-events-none" />

                                {/* Badge Image Container */}
                                <div className="relative w-36 h-36 flex items-center justify-center mb-8">
                                    <div
                                        className="absolute inset-0 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"
                                        style={{ background: badge.glow }}
                                    />
                                    <img
                                        src={badge.image}
                                        alt={badge.label}
                                        className="w-full h-full object-contain relative z-10 drop-shadow-[0_10px_20px_rgba(0,0,0,0.1)] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"
                                    />
                                </div>

                                {/* Content */}
                                <div className="text-center relative z-10">
                                    <div className="inline-block px-4 py-1 rounded-full bg-gray-50/50 border border-gray-100/50 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">
                                        {badge.year}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 uppercase tracking-tighter leading-tight font-heading">
                                        {badge.label}
                                    </h3>
                                </div>

                                {/* Interactive Corner Accent */}
                                <div className="absolute top-6 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <Star className="w-5 h-5 text-primary/20 fill-primary/10" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
