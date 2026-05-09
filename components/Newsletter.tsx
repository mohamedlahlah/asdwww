import React, { useState } from 'react';
import { Send, Sparkles, ChevronLeft, Users, ShieldCheck, Zap } from 'lucide-react';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate a premium interaction
        setTimeout(() => {
            setIsSubmitting(false);
            alert('تم فتح الخزنة! ترقب وصول خطط الحرب قريباً.');
            setEmail('');
        }, 1500);
    };

    return (
        <section className="relative py-16 md:py-16 md:py-24 px-6 md:px-12 bg-white dark:bg-black overflow-hidden transition-colors duration-500">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 dark:bg-blue-600/5 blur-[120px] rounded-full animate-pulse"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/10 dark:bg-purple-600/5 blur-[120px] rounded-full"></div>
            </div>

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center bg-gray-50/50 dark:bg-white/5 p-8 md:p-16 rounded-[3rem] md:rounded-[4rem] border border-black/5 dark:border-white/10 shadow-xl">
                    
                    {/* Right Column: Text Content */}
                    <div className="text-start order-1">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter leading-[1.2] text-gray-900 dark:text-white transition-all duration-500">
                            لا نرسل إيميلات، <br />
                            <span className="text-blue-600 dark:text-blue-500">نرسل خطط حرب.</span>
                        </h2>

                        <p className="text-base md:text-xl text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed font-bold">
                            استراتيجيات نمو "خلف الكواليس" تصلك أسبوعياً لتعلّمك كيف ينمو الكبار فعلياً.
                        </p>
                    </div>

                    {/* Left Column: Form & Badges */}
                    <div className="flex flex-col items-start lg:items-end w-full order-2">
                        {/* Floating Social Proof Chip */}
                        <div className="inline-flex items-center gap-3 bg-black dark:bg-white text-white dark:text-black px-5 py-2.5 rounded-full text-xs font-black mb-8 shadow-2xl animate-bounce-slow">
                            <Users size={16} />
                            <span>انضم للقائمة البريدية للتجار</span>
                        </div>

                        {/* Premium Input Group */}
                        <div className="w-full">
                            <form
                                onSubmit={handleSubmit}
                                className="group relative p-1.5 bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-[2.5rem] shadow-2xl transition-all duration-500 focus-within:ring-4 focus-within:ring-blue-500/10"
                            >
                                <div className="flex flex-col sm:flex-row items-center gap-3">
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="بريدك لفتح الخزنة..."
                                        className="w-full bg-transparent border-none outline-none px-6 py-4 text-lg md:text-xl font-black text-gray-900 dark:text-white text-start placeholder-gray-400 dark:placeholder-gray-700 transition-all font-sans"
                                    />
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full sm:w-auto bg-black dark:bg-white text-white dark:text-black px-10 py-4 rounded-[2rem] font-black text-lg hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all flex items-center justify-center gap-4 shrink-0 shadow-2xl disabled:opacity-50"
                                    >
                                        {isSubmitting ? 'جاري...' : 'الاشتراك'}
                                        {!isSubmitting && <ChevronLeft size={20} />}
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-8 flex flex-wrap justify-start lg:justify-end gap-6 w-full">
                            {[
                                { icon: <ShieldCheck className="text-green-500" size={18} />, text: "خصوصية مطلقة" },
                                { icon: <Zap className="text-yellow-500" size={18} />, text: "لا يوجد سبام" },
                                { icon: <Sparkles className="text-blue-500" size={18} />, text: "محتوى حصري" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2 text-gray-500 dark:text-gray-400 font-bold text-sm">
                                    {item.icon}
                                    <span>{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                </div>
            </div>

            {/* Custom Animation Styles */}
            <style>{`
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 4s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default Newsletter;
