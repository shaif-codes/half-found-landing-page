import { Shield, Zap, Lock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AppWalkthrough from '../components/AppWalkthrough';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div className="min-h-screen bg-bg-primary">
            <Navbar />

            <main>
                <Hero />
                <AppWalkthrough />

                {/* About & Mission Section */}
                <section id="about" className="py-24 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div id="mission" className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="text-4xl font-display font-extrabold text-white mb-8">
                                    Born from the idea that <br />
                                    <span className="text-primary italic">Authenticity</span> matters.
                                </h2>
                                <p className="text-lg text-text-secondary mb-6">
                                    In a world of curated lives, Half Found provides a safe haven for real conversations. We believe that sometimes, the best connections happen when there are no masks to wear.
                                </p>
                                <div className="p-6 glass-panel rounded-2xl border-l-4 border-primary">
                                    <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
                                    <p className="text-text-secondary">
                                        To combat loneliness by providing a platform for authentic, anonymous human connection where people can talk freely and feel understood.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative"
                            >
                                <div className="aspect-square glass-panel rounded-[3rem] p-8 flex items-center justify-center relative z-10">
                                    <div className="text-center">
                                        <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow-pink">
                                            <Shield className="text-primary w-10 h-10" />
                                        </div>
                                        <h4 className="text-2xl font-bold text-white mb-4">Privacy First</h4>
                                        <p className="text-text-secondary">
                                            Your conversations are private, your identity is yours to control, and your safety is our top priority.
                                        </p>
                                    </div>
                                </div>
                                {/* Decoration */}
                                <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="py-24 bg-bg-secondary/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-display font-extrabold text-white mb-4">Why choose Half Found?</h2>
                            <p className="text-text-secondary text-lg">Designed for real humans, by real humans.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <Lock className="w-8 h-8 text-primary" />,
                                    title: "Anonymity",
                                    description: "Talk freely without fear of judgment. You decide how much of yourself to reveal."
                                },
                                {
                                    icon: <Zap className="w-8 h-8 text-accent-secondary" />,
                                    title: "Real-time",
                                    description: "Experience the thrill of live, spontaneous conversations with people from all walks of life."
                                },
                                {
                                    icon: <Shield className="w-8 h-8 text-accent-emerald" />,
                                    title: "Safe & Managed",
                                    description: "A friendly environment maintained by smart moderation to ensure a positive experience."
                                }
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className="p-8 glass-panel rounded-3xl border border-white/5 hover:border-white/20 transition-all hover:scale-[1.02]"
                                >
                                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                                    <p className="text-text-secondary leading-relaxed">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to Action Section */}
                <section className="py-24 relative overflow-hidden">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <div className="p-12 md:p-20 glass-panel rounded-[3rem] border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent relative z-10">
                            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-8">
                                Ready to start your first conversation?
                            </h2>
                            <p className="text-lg text-text-secondary mb-10">
                                Join thousands of people who are finding connections on Half Found.
                            </p>
                            <a
                                href="https://firebasestorage.googleapis.com/v0/b/vibetalk-aa16c.firebasestorage.app/o/android_apk%2Fapp-release.apk?alt=media&token=31c3aece-4949-487c-8f1f-7a3e8fd39df9"
                                className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-full text-xl font-bold shadow-glow-pink transition-all hover:scale-105 active:scale-95 inline-block"
                            >
                                Download Now
                            </a>
                            <p className="mt-4 text-xs text-text-secondary italic">Currently available for Android (APK). iOS version arriving soon.</p>
                        </div>
                        {/* Background Blobs */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Home;
