import React, { useState, useEffect, useRef } from 'react';
import WhatsAppButton from './WhatsAppButton';
import { Menu, X, Sun, Moon, ArrowUpRight, ChevronLeft, Instagram, Twitter, Linkedin, Github, Sparkles, Send, ChevronDown, Rocket, Search, Globe, Code, Palette, Zap, Briefcase, Info, LayoutGrid, ShoppingBag, LayoutDashboard, Building2, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import Newsletter from './Newsletter';

const Layout = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [sectionsOpen, setSectionsOpen] = useState(false);
    const { pathname } = useLocation();
    const servicesRef = useRef<HTMLDivElement>(null);
    const sectionsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);

        const handleClickOutside = (event: MouseEvent) => {
            if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
                setServicesOpen(false);
            }
            if (sectionsRef.current && !sectionsRef.current.contains(event.target as Node)) {
                setSectionsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const services = [
        { name: 'بناء المتاجر الإلكترونية', path: '/ecommerce', icon: <ShoppingBag size={18} /> },
        { name: 'مواقع الشركات المؤسسية', path: '/corporate-web', icon: <Building2 size={18} /> },
        { name: 'تحسين محركات البحث SEO', path: '/seo', icon: <Search size={18} /> },
        { name: 'إعلانات الأداء الممولة', path: '/ads', icon: <Rocket size={18} /> },
        { name: 'تصميم تجربة المستخدم', path: '/design', icon: <Palette size={18} /> },
        { name: 'أتمتة العمليات الرقمية', path: '/automation', icon: <Zap size={18} /> },
    ];

    const sections = [
        { name: 'عن التاجر الرقمي', path: '/about', icon: <Info size={18} /> },
        { name: 'معرض الأعمال', path: '/portfolio', icon: <LayoutGrid size={18} /> },
        { name: 'منتجات التاجر الرقمي', path: '/products', icon: <ShoppingBag size={18} />, badge: 'قريباً' },
    ];

    // Helper to determine if link is active
    const isActive = (path: string) => pathname === path || pathname.startsWith(path + '/');
    const isServiceActive = services.some(s => isActive(s.path));
    const isSectionActive = sections.some(s => isActive(s.path));

    return (
        <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white selection:bg-blue-500/30 transition-colors duration-500 font-sans">

            {/* Distinctive Floating Navbar */}
            <nav
                className={`fixed z-[100] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-between
                ${scrolled
                        ? 'top-4 md:top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-[70%] max-w-5xl rounded-full bg-white/70 dark:bg-[#151516]/70 backdrop-blur-xl border border-black/5 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] py-2 px-2 md:px-3'
                        : 'top-0 w-full bg-transparent border-transparent py-8 px-6 md:px-12'}`}
            >
                {/* Logo Section */}
                <Link to="/" className={`flex items-center gap-3 group px-4 ${scrolled ? 'scale-90' : ''} transition-transform duration-500`}>
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-black dark:bg-white rounded-lg md:rounded-xl flex items-center justify-center shadow-2xl text-white dark:text-black font-black text-xs md:text-sm">
                        DM
                    </div>
                    {!scrolled && <span className="font-black text-xl md:text-2xl tracking-tighter text-gray-900 dark:text-white transition-opacity duration-300">التاجر الرقمي</span>}
                </Link>

                {/* Desktop Navigation Links - Centered when scrolled */}
                <div className="hidden lg:flex items-center gap-2 bg-transparent">
                    <Link
                        to="/"
                        className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2
                        ${pathname === '/' ? 'bg-black/5 dark:bg-white/10 text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'}`}
                    >
                        الرئيسية
                    </Link>

                    {/* Services Dropdown Trigger */}
                    <div className="relative group/nav" ref={servicesRef}>
                        <button
                            onClick={() => { setServicesOpen(!servicesOpen); setSectionsOpen(false); }}
                            className={`relative px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2
                            ${isServiceActive || servicesOpen ? 'bg-black/5 dark:bg-white/10 text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'}`}
                        >
                            الخدمات
                            <ChevronDown size={14} className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Services Dropdown Menu */}
                        <div className={`absolute top-full right-0 mt-4 w-[320px] bg-white dark:bg-[#0c0c0d] border border-black/5 dark:border-white/10 rounded-3xl shadow-2xl p-4 grid gap-1 transition-all duration-300 origin-top-right overflow-hidden ${servicesOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'}`}>
                            {services.map((s) => (
                                <Link
                                    key={s.path}
                                    to={s.path}
                                    onClick={() => setServicesOpen(false)}
                                    className="flex items-center gap-4 p-3 rounded-2xl hover:bg-gray-100 dark:hover:bg-white/5 transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 text-gray-400 group-hover:text-blue-500">
                                        {s.icon}
                                    </div>
                                    <div className="flex flex-col text-start">
                                        <span className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">{s.name}</span>
                                    </div>
                                </Link>
                            ))}
                            <div className="pt-2 mt-2 border-t border-gray-100 dark:border-white/5">
                                <Link to="/services" className="flex items-center justify-center text-xs font-black text-gray-400 hover:text-blue-500 py-2 uppercase tracking-widest transition-colors">عرض الكل</Link>
                            </div>
                        </div>
                    </div>

                    {/* Sections Dropdown Trigger */}
                    <div className="relative group/nav" ref={sectionsRef}>
                        <button
                            onClick={() => { setSectionsOpen(!sectionsOpen); setServicesOpen(false); }}
                            className={`relative px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2
                            ${isSectionActive || sectionsOpen ? 'bg-black/5 dark:bg-white/10 text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'}`}
                        >
                            الأقسام
                            <ChevronDown size={14} className={`transition-transform duration-300 ${sectionsOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Sections Dropdown Menu */}
                        <div className={`absolute top-full right-0 mt-4 w-[280px] bg-white dark:bg-[#0c0c0d] border border-black/5 dark:border-white/10 rounded-3xl shadow-2xl p-4 grid gap-1 transition-all duration-300 origin-top-right overflow-hidden ${sectionsOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'}`}>
                            {sections.map((s) => (
                                <Link
                                    key={s.path}
                                    to={s.path}
                                    onClick={() => setSectionsOpen(false)}
                                    className="flex items-center gap-4 p-3 rounded-2xl hover:bg-gray-100 dark:hover:bg-white/5 transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 text-gray-400 group-hover:text-blue-500">
                                        {s.icon}
                                    </div>
                                    <div className="flex flex-col text-start">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">{s.name}</span>
                                            {(s as any).badge && <span className="text-[10px] bg-blue-500/10 text-blue-500 px-2 py-0.5 rounded-full font-black animate-pulse">{(s as any).badge}</span>}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Actions Section */}
                <div className="flex items-center gap-2 md:gap-4 px-2">
                    <ThemeToggle />

                    <Link
                        to="/contact"
                        className={`hidden lg:flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-6 py-2.5 rounded-full text-sm font-black hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-xl
                        ${scrolled ? '' : ''}`}
                    >
                        <span>تواصل معنا</span>
                        <ArrowUpRight size={16} />
                    </Link>

                    <button className="lg:hidden p-3 bg-black/5 dark:bg-white/5 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-gray-900 dark:text-white" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`lg:hidden fixed inset-0 z-[99] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                <div className="absolute inset-0 bg-white/95 dark:bg-black/95 backdrop-blur-3xl transition-colors duration-500"></div>
                <div className={`relative h-full flex flex-col p-8 font-black pt-32 text-gray-900 dark:text-white text-start overflow-y-auto transition-transform duration-700 ${isOpen ? 'translate-y-0' : 'translate-y-10'}`}>

                    <div className="space-y-8">
                        <div>
                            <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-6">الخدمات</h4>
                            <div className="grid gap-4">
                                {services.map((s) => (
                                    <Link key={s.path} to={s.path} onClick={() => setIsOpen(false)} className="group flex items-center justify-between text-2xl hover:text-blue-500 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <span className="text-gray-300 dark:text-gray-700 group-hover:text-blue-500 transition-colors">{s.icon}</span>
                                            <span>{s.name}</span>
                                        </div>
                                        <ArrowUpRight size={20} className="text-gray-300 dark:text-white/20 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="h-px bg-gray-100 dark:bg-white/5"></div>

                        <div>
                            <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-6">الأقسام</h4>
                            <div className="grid gap-4">
                                {sections.map((s) => (
                                    <Link key={s.path} to={s.path} onClick={() => setIsOpen(false)} className="group flex items-center justify-between text-2xl hover:text-blue-500 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <span className="text-gray-300 dark:text-gray-700 group-hover:text-blue-500 transition-colors">{s.icon}</span>
                                            <div className="flex items-center gap-2">
                                                <span>{s.name}</span>
                                                {(s as any).badge && <span className="text-xs bg-blue-500 text-white px-2 py-0.5 rounded-full font-black">{(s as any).badge}</span>}
                                            </div>
                                        </div>
                                        <ArrowUpRight size={20} className="text-gray-300 dark:text-white/20 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto pt-10">
                        <Link to="/contact" onClick={() => setIsOpen(false)} className="w-full bg-blue-600 text-white py-5 rounded-[2rem] text-xl font-black shadow-2xl shadow-blue-600/20 flex items-center justify-center gap-3 active:scale-95 transition-transform">
                            ابدأ رحلتك
                            <Rocket size={20} />
                        </Link>
                    </div>
                </div>
            </div>

            {children}

            <WhatsAppButton />
            {/* GLOBAL PREMIUM NEWSLETTER SECTION */}
            <Newsletter />

            <footer className="section-padding bg-gray-50 dark:bg-black border-t border-black/5 dark:border-white/5 transition-colors duration-500 font-sans">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-20 md:mb-24">
                    <div className="lg:col-span-4 text-start">
                        <div className="flex items-center justify-end md:justify-start gap-4 mb-8">
                            <div className="w-10 h-10 bg-black dark:bg-white rounded-xl flex items-center justify-center shadow-xl">
                                <div className="text-white dark:text-black font-black text-xs">DM</div>
                            </div>
                            <span className="font-black text-2xl md:text-3xl tracking-tighter text-gray-900 dark:text-white">التاجر الرقمي</span>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-lg font-medium">
                            نحن منصة ناشئة تهدف إلى تمكين التجار العرب، عبر توفير أدوات وخدمات رقمية تساعدهم على بناء أعمال مستدامة وقابلة للنمو.
                        </p>
                        <div className="flex gap-6">
                            {[Instagram, Twitter, Linkedin, Github].map((Icon, i) => (
                                <Icon key={i} size={24} className="text-gray-400 hover:text-blue-500 cursor-pointer transition-all hover:scale-110" />
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-2 text-start">
                        <h4 className="font-black text-gray-900/40 dark:text-white/30 mb-8 text-sm tracking-widest uppercase">الخدمات</h4>
                        <ul className="space-y-4 text-lg font-bold text-gray-500 dark:text-gray-400">
                            {services.map((s) => (
                                <li key={s.path}><Link to={s.path} className="hover:text-blue-500 transition-all"> {s.name} </Link></li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-3 text-start">
                        <h4 className="font-black text-gray-900/40 dark:text-white/30 mb-8 text-sm tracking-widest uppercase">الشركة والمنتجات</h4>
                        <div className="grid grid-cols-1 gap-4 text-lg font-bold text-gray-500 dark:text-gray-400">
                            <Link to="/about" className="hover:text-blue-500 transition-all">عن التاجر</Link>
                            <Link to="/portfolio" className="hover:text-blue-500 transition-all">معرض الأعمال</Link>
                            <Link to="/products" className="hover:text-blue-500 transition-all flex items-center gap-2">
                                منتجات التاجر الرقمي
                                <span className="text-[10px] bg-blue-500/10 text-blue-500 px-2 py-0.5 rounded-full font-black">قريباً</span>
                            </Link>
                            <Link to="/services" className="hover:text-blue-500 transition-all">كل الخدمات</Link>
                            <Link to="#" className="opacity-40 flex items-center gap-2">المجتمع <span className="text-[10px] bg-black/5 dark:bg-white/10 px-2 py-0.5 rounded-full">قريباً</span></Link>
                        </div>
                    </div>

                    <div className="lg:col-span-3 text-start">
                        <h4 className="font-black text-gray-900/40 dark:text-white/30 mb-8 text-sm tracking-widest uppercase">تواصل معنا</h4>
                        <p className="text-gray-400 dark:text-gray-500 text-lg font-medium mb-8 leading-relaxed">فريقنا متاح دائماً للرد على استفساراتك ومناقشة مشروعك القادم.</p>
                        <Link to="/contact" className="inline-flex items-center gap-3 text-gray-900 dark:text-white font-black hover:text-blue-500 transition-all group">
                            <span className="text-xl">ابدأ محادثة الآن</span>
                            <ChevronLeft size={24} className="group-hover:-translate-x-2 transition-transform" />
                        </Link>
                    </div>
                </div>

                <div className="max-w-[1400px] mx-auto pt-10 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 dark:text-gray-600 font-bold text-sm">
                    <p>© {new Date().getFullYear()} فريق التاجر الرقمي. جميع الحقوق محفوظة.</p>
                    <div className="flex gap-8">
                        <Link to="/privacy-policy" className="hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors">سياسة الخصوصية</Link>
                        <Link to="/terms" className="hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors">شروط الخدمة</Link>
                        <Link to="/cookies" className="hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors">ملفات الارتباط</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
