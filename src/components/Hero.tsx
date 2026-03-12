import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-secondary/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight text-white mb-6">
                            Half Found: Talk to someone. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-secondary">
                                Feel less alone.
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto mb-10"
                    >
                        A safe, privacy-first space for friendly conversations with strangers. Connect authentically and anonymously.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a
                            href="https://firebasestorage.googleapis.com/v0/b/vibetalk-aa16c.firebasestorage.app/o/android_apk%2Fapp-release.apk?alt=media&token=31c3aece-4949-487c-8f1f-7a3e8fd39df9"
                            className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-bold shadow-glow-pink transition-all hover:scale-105"
                        >
                            <Download size={24} />
                            Download for Android (APK)
                        </a>
                        <a href="#experience" className="flex items-center gap-2 glass-panel hover:bg-white/10 text-white px-8 py-4 rounded-full text-lg font-bold transition-all">
                            View Experience
                        </a>
                    </motion.div>
                </div>

                {/* Hero Mockup */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-20 relative max-w-4xl mx-auto flex justify-center"
                >
                    <div className="relative z-10 w-full max-w-[300px] aspect-[9/19] bg-gradient-to-b from-primary/10 to-accent-secondary/10 rounded-[3rem] p-4 shadow-[0_0_50px_rgba(238,43,140,0.1)] border border-white/5">
                        <img
                            src="/assets/step1.png"
                            alt="Half Found App"
                            className="w-full h-full object-cover rounded-2xl shadow-2xl"
                        />
                    </div>

                    {/* Decoration */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl invisible md:visible" />
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent-secondary/20 rounded-full blur-3xl invisible md:visible" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
