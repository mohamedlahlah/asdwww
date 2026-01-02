import React, { useState } from 'react';
import { Lock, Sparkles, Send, Box, ChevronRight, Fingerprint, ScanEye, Code2 } from 'lucide-react';

const ProductsPage = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'success'>('idle');

    const handleJoin = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setStatus('success');
            setTimeout(() => setStatus('idle'), 3000);
            setEmail('');
        }
    };

    return (
        <main className="min-h-screen pt-32 pb-32 bg-white dark:bg-black text-gray-900 dark:text-white relative overflow-hidden flex flex-col items-center justify-center transition-colors duration-500">

            {/* Ambient Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/10 dark:bg-orange-600/5 rounded-full blur-[100px]"></div>

                {/* Abstract Grid */}
                <div className="absolute inset-0 opacity-5 dark:opacity-10"
                    style={{ backgroundImage: 'linear-gradient(#888 1px, transparent 1px), linear-gradient(90deg, #888 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
                </div>
            </div>

            <section className="relative z-10 px-6 max-w-5xl mx-auto w-full text-center">

                {/* Mysterious Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-100 dark:bg-white/5 backdrop-blur-md rounded-full border border-black/5 dark:border-white/10 text-gray-500 dark:text-gray-400 text-xs font-black tracking-[0.2em] uppercase mb-12 animate-fade-in">
                    <Fingerprint size={14} className="text-gray-900 dark:text-white" />
                    <span>Top Secret Access</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9] bg-clip-text text-transparent bg-gradient-to-br from-gray-900 via-gray-600 to-black dark:from-white dark:via-gray-400 dark:to-gray-800 animate-slide-up">
                    شيء ضخم <br />
                    <span className="text-gray-900 dark:text-white drop-shadow-xl dark:drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">يُطبخ في الخفاء.</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed mb-16 animate-slide-up delay-100">
                    نحن لا نبني مجرد "منتجات". نحن نطور ترسانة رقمية ستغير قواعد اللعبة للتجار الرقميين.
                    <br />
                    <span className="text-gray-900 dark:text-white font-bold opacity-80 mt-2 block">كن مستعداً للانتقال إلى المستوى التالي.</span>
                </p>

                {/* The "Box" Graphic - CSS Only */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mb-20 group perspective-1000">
                    <div className="w-full h-full relative transform-style-3d animate-[float_6s_ease-in-out_infinite]">
                        {/* Glow */}
                        <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-3xl transform scale-110"></div>

                        {/* The Cube Face - Locked */}
                        <div className="absolute inset-0 bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-black rounded-3xl border border-black/5 dark:border-white/10 flex items-center justify-center backdrop-blur-xl shadow-2xl">
                            <div className="relative">
                                <Lock size={64} className="text-gray-300 dark:text-white/50 mb-4 mx-auto" strokeWidth={1} />
                                <div className="flex gap-1 justify-center">
                                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse delay-100"></div>
                                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse delay-200"></div>
                                </div>
                            </div>

                            {/* Corner Accents */}
                            <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-black/10 dark:border-white/30"></div>
                            <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-black/10 dark:border-white/30"></div>
                            <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-black/10 dark:border-white/30"></div>
                            <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-black/10 dark:border-white/30"></div>
                        </div>
                    </div>
                </div>

                {/* Waitlist Form */}
                <div className="max-w-md mx-auto relative animate-fade-in-up delay-300">
                    {status === 'success' ? (
                        <div className="p-4 bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 rounded-2xl text-green-600 dark:text-green-400 font-bold flex items-center justify-center gap-2">
                            <Sparkles size={20} />
                            <span>تم تسجيل اهتمامك. الصمت لن يطول!</span>
                        </div>
                    ) : (
                        <form onSubmit={handleJoin} className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                            <div className="relative flex items-center bg-white dark:bg-[#0a0a0a] border border-black/5 dark:border-white/10 rounded-2xl p-1.5 pr-6 transition-all hover:border-blue-500/30 dark:hover:border-white/20 shadow-lg dark:shadow-none">
                                <ScanEye className="text-gray-400 dark:text-gray-500 ml-3" size={20} />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="بريدك الإلكتروني (للسبّاقين فقط)"
                                    className="flex-grow bg-transparent border-none focus:ring-0 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 py-3 font-medium text-lg"
                                    required
                                />
                                <button type="submit" className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-xl font-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex items-center gap-2">
                                    <span>انضم</span>
                                    <ChevronRight size={16} />
                                </button>
                            </div>
                        </form>
                    )}
                    <p className="mt-4 text-xs text-gray-500 dark:text-gray-600 font-medium tracking-wide">
                        * سيتم إخطار عدد محدود فقط عند الإطلاق الأولي.
                    </p>
                </div>

            </section>
        </main>
    );
};

export default ProductsPage;
