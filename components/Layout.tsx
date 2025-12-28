import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Sun, Moon, ArrowUpRight, ChevronLeft, Instagram, Twitter, Linkedin, Github, Sparkles, Send } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Layout = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'عن التاجر', path: '/about' },
        { name: 'خدماتنا', path: '/services' },
        { name: 'منتجاتنا (قريبا)', path: '/products' },
        { name: 'أعمالنا', path: '/portfolio' },
        { name: 'المجتمع (قريبا)', path: '#' },
        { name: 'اتصل بنا', path: '/contact' },
    ];

    return (
        <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
            <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 border-b ${scrolled ? 'apple-blur bg-black/60 py-4 border-white/10' : 'bg-transparent py-8 border-transparent'}`}>
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3 group relative z-[120]">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-white border border-black/5 rounded-lg md:rounded-xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                            <div className="w-3 h-3 md:w-4 md:h-4 bg-black rounded-full"></div>
                        </div>
                        <span className="font-black text-xl md:text-2xl tracking-tighter text-white transition-colors">التاجر الرقمي</span>
                    </Link>

                    <div className="hidden lg:flex items-center gap-10 font-bold text-sm tracking-widest uppercase">
                        {navItems.map((item, idx) => (
                            <Link key={idx} to={item.path} className={`hover:text-blue-500 transition-colors ${pathname === item.path ? 'text-blue-500' : 'text-gray-400'} ${item.name.includes('قريبا') ? 'opacity-60 cursor-default hover:text-gray-400' : ''}`}>
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 md:gap-8 relative z-[120]">
                        <ThemeToggle />
                        <button className="lg:hidden p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                        <Link to="/contact" className="hidden lg:block bg-white text-black px-8 py-3 rounded-full text-sm font-black hover:bg-blue-600 hover:text-white transition-all shadow-2xl">
                            ابدأ رحلتك
                        </Link>
                    </div>
                </div>
            </nav>

            <div className={`lg:hidden fixed inset-0 top-0 z-[110] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? 'apple-blur' : 'bg-[#f5f5f7] dark:bg-black/95'} ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
                <div className="flex flex-col p-10 md:p-16 gap-6 md:gap-10 text-3xl md:text-5xl font-black pt-32 text-gray-900 dark:text-white text-start">
                    <button className="absolute top-8 start-8 md:top-12 md:start-12 p-3 bg-black/5 dark:bg-white/5 rounded-full text-gray-900 dark:text-white" onClick={() => setIsOpen(false)} aria-label="Close Menu">
                        <X size={28} className="md:w-8 md:h-8" />
                    </button>
                    {navItems.map((item, idx) => (
                        <Link key={idx} to={item.path} onClick={() => !item.name.includes('قريبا') && setIsOpen(false)} className={`hover:text-blue-500 transition-colors inline-block ${pathname === item.path ? 'text-blue-500' : ''} ${item.name.includes('قريبا') ? 'opacity-40 cursor-default' : ''}`}>{item.name}</Link>
                    ))}
                    <div className="mt-12">
                        <Link to="/contact" onClick={() => setIsOpen(false)} className="w-full bg-gray-900 dark:bg-white text-white dark:text-black py-5 rounded-3xl text-xl font-black shadow-2xl flex items-center justify-center">
                            ابدأ رحلتك الآن
                        </Link>
                    </div>
                </div>
            </div>

            {children}

            {/* GLOBAL NEWSLETTER SECTION */}
            <section className="py-24 md:py-32 px-6 md:px-12 bg-black relative overflow-hidden flex items-center justify-center border-t border-white/5">
                <div className="max-w-[1200px] w-full relative z-10">
                    <div className="flex flex-col items-center text-center reveal active">
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tighter leading-[1] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-600">
                            لا نرسل إيميلات، <br /> <span className="text-blue-600">نرسل خطط حرب.</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mb-12 leading-relaxed font-bold">
                            انضم لـ <span className="text-blue-500">12,400+</span> تاجر يتلقون أسبوعياً استراتيجيات نمو "خلف الكواليس" لا يتم نشرها في أي مكان آخر.
                        </p>

                        <div className="relative w-full max-w-3xl">
                            <form
                                className="relative bg-[#0a0a0b] border border-white/10 rounded-[3rem] p-3 shadow-3xl overflow-hidden flex flex-col md:flex-row-reverse items-center gap-3"
                                onSubmit={(e) => e.preventDefault()}
                            >
                                <input
                                    type="email"
                                    placeholder="ضع بريدك لفتح الخزنة الرقمية..."
                                    className="w-full bg-transparent border-none outline-none px-8 py-5 text-xl font-bold text-white text-start placeholder-gray-700 focus:placeholder-gray-500 transition-all"
                                />
                                <button type="submit" className="w-full md:w-auto bg-white text-black px-12 py-5 rounded-[2rem] font-black text-xl hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-4 shrink-0 shadow-2xl">
                                    فتح الخزنة
                                    <ChevronLeft size={24} />
                                </button>
                            </form>
                        </div>
                        <p className="mt-8 text-gray-600 font-bold text-sm">لا تقلق، نحن نكره البرامج المزعجة (Spam) بقدر ما تكرهها أنت.</p>
                    </div>
                </div>
            </section>

            <footer className="section-padding bg-black px-6 md:px-12 border-t border-white/5">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-20 md:mb-24">
                    <div className="lg:col-span-6 text-start">
                        <div className="flex items-center justify-end md:justify-start gap-3 md:gap-4 mb-6 md:mb-8">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-white border border-black/5 rounded-lg md:rounded-xl flex items-center justify-center shadow-xl">
                                <div className="w-3 h-3 md:w-4 md:h-4 bg-black rounded-full"></div>
                            </div>
                            <span className="font-black text-xl md:text-3xl tracking-tighter text-white">التاجر الرقمي</span>
                        </div>
                        <p className="text-gray-500 text-base md:text-xl leading-relaxed mb-8 md:mb-10 max-w-lg ml-auto mr-0 font-medium text-start">
                            المنصة رقم #1 في الشرق الأوسط لدعم وتمكين رواد الأعمال الرقميين من خلال منظومة خدمات عالمية متكاملة.
                        </p>
                        <div className="flex gap-6 mt-8">
                            <Instagram className="text-gray-500 hover:text-white cursor-pointer transition-colors" />
                            <Twitter className="text-gray-500 hover:text-white cursor-pointer transition-colors" />
                            <Linkedin className="text-gray-500 hover:text-white cursor-pointer transition-colors" />
                        </div>
                    </div>

                    <div className="lg:col-span-3 text-start">
                        <h4 className="font-black text-white/50 mb-6 md:mb-8 text-sm md:text-base tracking-widest uppercase">الشركة</h4>
                        <ul className="space-y-3 md:space-y-4 text-base md:text-lg font-bold text-gray-500">
                            <li><Link to="/about" className="hover:text-blue-500 transition-colors">عن التاجر</Link></li>
                            <li><Link to="/services" className="hover:text-blue-500 transition-colors">خدماتنا</Link></li>
                            <li><Link to="/products" className="hover:text-blue-500 transition-colors">منتجاتنا (قريبا)</Link></li>
                            <li><Link to="/portfolio" className="hover:text-blue-500 transition-colors">أعمالنا</Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-3 text-start">
                        <h4 className="font-black text-white/50 mb-6 md:mb-8 text-sm md:text-base tracking-widest uppercase">تواصل معنا</h4>
                        <p className="text-gray-500 text-base md:text-lg font-medium mb-6 md:mb-8 leading-relaxed">فريقنا متاح دائماً للرد على استفساراتك.</p>
                        <Link to="/contact" className="inline-flex items-center gap-3 text-white font-black hover:text-blue-500 transition-colors">
                            <span>اتصل بنا</span>
                            <ChevronLeft size={20} />
                        </Link>
                    </div>
                </div>

                <div className="max-w-[1400px] mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-600 font-bold text-sm">
                    <p>© {new Date().getFullYear()} Digital Merchant Team. All rights reserved.</p>
                    <div className="flex gap-8">
                        <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
                        <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
