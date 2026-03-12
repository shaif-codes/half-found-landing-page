import { Share2, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="contact" className="bg-bg-tertiary border-t border-glass-border pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                <Share2 className="text-white w-5 h-5" />
                            </div>
                            <span className="text-xl font-display font-bold text-white tracking-tight">Half Found</span>
                        </div>
                        <p className="text-text-secondary max-w-sm mb-6">
                            Our mission is to combat loneliness by providing a platform for authentic, anonymous human connection.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="https://www.instagram.com/half.found" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-bg-secondary flex items-center justify-center text-text-secondary hover:text-primary border border-glass-border transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="mailto:halffoundunicorn@gmail.com" className="w-10 h-10 rounded-full bg-bg-secondary flex items-center justify-center text-text-secondary hover:text-primary border border-glass-border transition-colors">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Support</h4>
                        <ul className="space-y-4">
                            <li><a href="mailto:halffoundunicorn@gmail.com" className="text-text-secondary hover:text-white transition-colors">Contact Support</a></li>
                            <li><Link to="/privacy" className="text-text-secondary hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="text-text-secondary hover:text-white transition-colors">Terms of Service</Link></li>
                            <li><Link to="/refund" className="text-text-secondary hover:text-white transition-colors">Refund Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><a href="#about" className="text-text-secondary hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#mission" className="text-text-secondary hover:text-white transition-colors">Mission</a></li>
                        </ul>
                        <div className="mt-8 p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
                            <p className="text-xs text-orange-400 font-medium">Refund Notice</p>
                            <p className="text-[10px] text-orange-400/80 mt-1">We currently operate on a no-refund policy for digital services.</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-glass-border pt-10 text-center">
                    <p className="text-text-secondary text-sm">
                        © {new Date().getFullYear()} Half Found. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
