import React from 'react';
import { Share2, Instagram } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
        if (isHomePage) {
            return (
                <a href={href} className="text-sm font-medium text-text-secondary hover:text-white transition-colors">
                    {children}
                </a>
            );
        }
        return (
            <Link to={`/${href}`} className="text-sm font-medium text-text-secondary hover:text-white transition-colors">
                {children}
            </Link>
        );
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-lg border-b border-glass-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-glow-pink">
                            <Share2 className="text-white w-5 h-5" />
                        </div>
                        <span className="text-xl font-display font-bold text-white tracking-tight">Half Found</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        <NavLink href="#experience">Experience</NavLink>
                        <NavLink href="#about">About</NavLink>
                        <NavLink href="#mission">Mission</NavLink>
                        <NavLink href="#features">Features</NavLink>
                        <NavLink href="#contact">Contact</NavLink>
                    </div>

                    <div className="flex items-center gap-4">
                        <a href="https://www.instagram.com/half.found" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors">
                            <Instagram size={20} />
                        </a>
                        <a
                            href="https://firebasestorage.googleapis.com/v0/b/vibetalk-aa16c.firebasestorage.app/o/android_apk%2Fapp-release.apk?alt=media&token=31c3aece-4949-487c-8f1f-7a3e8fd39df9"
                            className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-full text-sm font-bold shadow-glow-pink transition-all hover:scale-105 inline-block"
                        >
                            Download APK
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
