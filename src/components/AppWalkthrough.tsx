import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserPlus, Search, MessageSquare, Star } from 'lucide-react';

const steps = [
    {
        id: 'onboarding',
        title: 'Seamless Onboarding',
        description: 'Start your journey anonymously. No complicated profiles, just your vibe.',
        icon: <UserPlus className="w-6 h-6" />,
        image: '/assets/step1.png',
        color: 'text-primary',
        bgColor: 'bg-primary/10'
    },
    {
        id: 'discovery',
        title: 'Find Your Vibe',
        description: 'Explore and discover people who share your interests in real-time.',
        icon: <Search className="w-6 h-6" />,
        image: '/assets/step2.png',
        color: 'text-accent-secondary',
        bgColor: 'bg-accent-secondary/10'
    },
    {
        id: 'chatting',
        title: 'Real-time Connection',
        description: 'Dive into authentic conversations with our premium chat interface.',
        icon: <MessageSquare className="w-6 h-6" />,
        image: '/assets/step3.png',
        color: 'text-accent-emerald',
        bgColor: 'bg-accent-emerald/10'
    },
    {
        id: 'feedback',
        title: 'Meaningful Feedback',
        description: 'End your session with a summary and provide feedback to improve the community.',
        icon: <Star className="w-6 h-6" />,
        image: '/assets/step4.png',
        color: 'text-orange-400',
        bgColor: 'bg-orange-400/10'
    }
];

const AppWalkthrough = () => {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section id="experience" className="py-24 bg-bg-secondary/30 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-4">
                        The Half Found Experience
                    </h2>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        See how Half Found turns strangers into meaningful connections through a simple, anonymous, and safe journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left: Interactive Steps */}
                    <div className="lg:col-span-5 space-y-4">
                        {steps.map((step, index) => (
                            <button
                                key={step.id}
                                onClick={() => setActiveStep(index)}
                                className={`w-full text-left p-6 rounded-3xl transition-all duration-300 border ${activeStep === index
                                    ? 'glass-panel border-primary/30 shadow-[0_0_30px_rgba(238,43,140,0.1)]'
                                    : 'border-transparent opacity-60 hover:opacity-100'
                                    }`}
                            >
                                <div className="flex gap-4">
                                    <div className={`flex-shrink-0 w-12 h-12 ${step.bgColor} ${step.color} rounded-2xl flex items-center justify-center`}>
                                        {step.icon}
                                    </div>
                                    <div>
                                        <h3 className={`text-xl font-bold mb-2 ${activeStep === index ? 'text-white' : 'text-text-secondary'}`}>
                                            {step.title}
                                        </h3>
                                        {activeStep === index && (
                                            <motion.p
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                className="text-text-secondary leading-relaxed"
                                            >
                                                {step.description}
                                            </motion.p>
                                        )}
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Right: Phone Display */}
                    <div className="lg:col-span-7 flex justify-center lg:justify-end">
                        <div className="relative">
                            {/* Phone Mockup Frame */}
                            <div className="relative z-10 w-full max-w-[340px] aspect-[9/19] bg-bg-primary rounded-[3.5rem] p-3 shadow-2xl border-[8px] border-bg-tertiary">
                                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-bg-secondary">
                                    <AnimatePresence mode="wait">
                                        <motion.img
                                            key={activeStep}
                                            src={steps[activeStep].image}
                                            alt={steps[activeStep].title}
                                            initial={{ opacity: 0, scale: 1.1, x: 20 }}
                                            animate={{ opacity: 1, scale: 1, x: 0 }}
                                            exit={{ opacity: 0, scale: 0.9, x: -20 }}
                                            transition={{ duration: 0.5, ease: "easeOut" }}
                                            className="w-full h-full object-cover"
                                        />
                                    </AnimatePresence>

                                    {/* Glass Overlay for depth */}
                                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 to-transparent opacity-30" />
                                </div>

                                {/* Dynamic Floating Badge on the phone */}
                                <motion.div
                                    key={`badge-${activeStep}`}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="absolute -right-6 top-1/2 -translate-y-1/2 glass-panel p-4 rounded-2xl border border-white/10 hidden md:block"
                                >
                                    <div className="flex items-center gap-2">
                                        <div className={`w-2 h-2 rounded-full ${steps[activeStep].color.replace('text-', 'bg-')}`} />
                                        <span className="text-white text-xs font-bold uppercase tracking-wider">Step {activeStep + 1}</span>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Decorative Background Elements */}
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
                            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent-secondary/20 rounded-full blur-[100px] pointer-events-none" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppWalkthrough;
