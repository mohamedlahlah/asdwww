import React from 'react';
import {
    Search,
    TrendingUp,
    Settings,
    Monitor,
    BrainCircuit,
    Sparkles,
    Battery,
    Globe,
    Zap,
    ArrowUpRight,
    ChevronLeft,
    Crown,
    ShieldAlert,
    Target,
    Users2,
    BarChart3,
    Cpu,
    Palette,
    Layout
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <main className="flex-grow">
            {/* HERO SECTION */}
            <section className="relative pt-48 md:pt-64 lg:pt-80 pb-32 md:pb-64 px-6 md:px-12 bg-black overflow-hidden flex flex-col items-center min-h-screen">
                <div className="max-w-[1400px] mx-auto relative z-10 w-full text-center">
                    <h1 className="hero-title-apple mb-12 md:mb-20 reveal active">
                        مستقبلك الرقمي <br /> يبدأ من هنا.
                    </h1>

                    <div className="flex flex-col items-center gap-8 md:gap-10 mb-16 md:mb-24 reveal active">
                        <label className="text-gray-400 text-lg md:text-xl font-medium">
                            أين تقف تجارتك اليوم؟
                        </label>
                        <div className="relative w-full max-w-xl">
                            <select className="w-full bg-[#1c1c1e] text-white border border-white/10 px-8 py-5 rounded-full text-lg md:text-xl font-bold outline-none focus:border-white/30 transition-all text-center appearance-none cursor-pointer shadow-xl">
                                <option>فكرة قيد التأسيس</option>
                                <option>متجر قائم يحتاج للتوسع</option>
                                <option>براند عالمي يبحث عن التميز</option>
                            </select>
                        </div>
                    </div>

                    {/* Integrated Growth Team Value Prop */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-32 text-start">
                        {[
                            {
                                icon: <Users2 className="text-blue-500" />,
                                title: "فريق مدمج بالكامل",
                                desc: "لسنا مجرد مقدمي خدمات، نحن فريقك التقني والتسويقي الذي يعمل من داخل كواليس متجرك."
                            },
                            {
                                icon: <Target className="text-orange-500" />,
                                title: "نمو قائم على البيانات",
                                desc: "قراراتنا لا تعتمد على التخمين، بل على تحليلات دقيقة لسلوك عملائك واتجاهات السوق."
                            },
                            {
                                icon: <Cpu className="text-purple-500" />,
                                title: "تقنيات Apple-Standard",
                                desc: "نستخدم أحدث معايير التصميم والأتمتة العالمية لضمان تفوقك التقني على جميع المنافسين."
                            }
                        ].map((item, i) => (
                            <div key={i} className="reveal active">
                                <div className="mb-6">{React.cloneElement(item.icon, { size: 40 })}</div>
                                <h3 className="text-2xl font-black text-white mb-4">{item.title}</h3>
                                <p className="text-gray-500 text-lg leading-relaxed font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Featured Sections Breakdown */}
                    <div className="w-full mt-48 text-start">
                        <div className="inline-flex items-center gap-4 bg-white/5 text-blue-500 px-8 py-3 rounded-full text-sm font-black mb-12 border border-blue-500/20 backdrop-blur-xl reveal">
                            <Sparkles size={20} />
                            <span>منظومة الخدمات المتكاملة</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-24 tracking-tight leading-[1.1] reveal">
                            نغير قواعد اللعبة <br /> <span className="text-gray-500">في كل مرحلة.</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 reveal">
                            {/* AI Sales Engine */}
                            <div className="lg:col-span-8 bento-card p-12 md:p-20 flex flex-col justify-between min-h-[600px] relative group overflow-hidden">
                                <div className="absolute top-0 inset-inline-start-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,_rgba(37,99,235,0.15)_0%,_transparent_50%)]"></div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-6 mb-12">
                                        <div className="p-6 bg-blue-600 rounded-[2rem] shadow-[0_0_50px_rgba(37,99,235,0.4)]">
                                            <BrainCircuit size={48} className="text-white" />
                                        </div>
                                        <div className="text-start">
                                            <h3 className="text-3xl md:text-4xl font-black text-white mb-2">محرك مبيعات AI المتقدم</h3>
                                            <p className="text-blue-400 font-bold text-lg">تحليل السلوك اللحظي</p>
                                        </div>
                                    </div>
                                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed font-medium">
                                        نظامنا يتنبأ بخطوة العميل القادمة قبل أن يقوم بها، مما يتيح لك تقديم العرض المثالي في الوقت المثالي، <span className="text-white">رافعاً معدلات التحويل بنسبة قياسية.</span>
                                    </p>
                                </div>
                                <div className="relative z-10 mt-20 flex flex-wrap gap-8 justify-start">
                                    <div className="bg-white/5 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/5 text-start">
                                        <span className="text-gray-500 text-xs font-bold block mb-1">دقة معالجة البيانات</span>
                                        <span className="text-white text-3xl font-black tracking-tighter">99.8%</span>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/5 text-start">
                                        <span className="text-gray-500 text-xs font-bold block mb-1">الزيادة المتوقعة في العائد</span>
                                        <span className="text-white text-3xl font-black tracking-tighter">+86%</span>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Links / Sub Services */}
                            <div className="lg:col-span-4 grid grid-rows-2 gap-8">
                                <Link to="/web-dev" className="bento-card p-10 flex flex-col justify-between hover:border-blue-500/30 transition-all group">
                                    <div className="flex justify-between items-start">
                                        <ArrowUpRight className="text-gray-600 group-hover:text-white transition-colors" size={32} />
                                        <Monitor className="text-blue-500" size={40} />
                                    </div>
                                    <div className="text-start">
                                        <h4 className="text-2xl font-black text-white mb-2">بناء المتاجر</h4>
                                        <p className="text-gray-500 font-medium">تجربة تسوق بلا احتكاك.</p>
                                    </div>
                                </Link>
                                <Link to="/design" className="bento-card p-10 flex flex-col justify-between hover:border-purple-500/30 transition-all group">
                                    <div className="flex justify-between items-start">
                                        <ArrowUpRight className="text-gray-600 group-hover:text-white transition-colors" size={32} />
                                        <Palette className="text-purple-500" size={40} />
                                    </div>
                                    <div className="text-start">
                                        <h4 className="text-2xl font-black text-white mb-2">تصميم UI/UX</h4>
                                        <p className="text-gray-500 font-medium">واجهات ساحرة وتجربة مستخدم.</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MISSION STATEMENT (REFINED) */}
            <section className="py-24 md:py-48 px-6 text-center bg-black overflow-hidden relative">
                <div className="max-w-[1000px] mx-auto reveal">
                    <blockquote className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.2] mb-12 tracking-tighter text-white italic">
                        "نحن لا نعمل كوكالة خارجية، <br /> بل كفريق نمو مدمج داخل متجرك."
                    </blockquote>
                    <div className="flex items-center justify-center gap-6">
                        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 shadow-2xl">
                            <Zap className="text-blue-400" size={32} />
                        </div>
                        <div className="text-start">
                            <div className="font-black text-2xl md:text-3xl text-white">فريق التاجر الرقمي</div>
                            <div className="text-gray-500 font-bold text-lg mt-1">نصنع المستقبل الرقمي معاً</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BENCHMARKS / WHY US */}
            <section className="py-32 md:py-64 px-6 md:px-12 bg-black">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="text-start">
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tighter leading-[1.1]">لماذا يختارنا <br /> كبار التجار؟</h2>
                            <p className="text-xl text-gray-500 leading-relaxed font-medium mb-12 max-w-xl ml-0 mr-auto">لأننا نتجاوز مجرد التنفيذ التقني إلى الشراكة الاستراتيجية. نحن نتحمل مسؤولية النمو معك، ونقدم حلولاً مبتكرة تضمن لك الصدارة الدائمة.</p>
                            <div className="space-y-8">
                                {[
                                    { t: "شفافية مطلقة", d: "تقارير لحظية تظهر لك أين يذهب كل ريال وكيف يتحول إلى أرباح." },
                                    { t: "سرعة استجابة فائقة", d: "فريقنا متاح لدعمك في أي وقت، لأننا نؤمن أن الثانية تساوي الكثير في التجارة." },
                                    { t: "حلول تقنية حصرية", d: "أدوات وأنظمة نطورها خصيصاً لعملائنا لا تتوفر في أي مكان آخر." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 items-start">
                                        <div className="w-3 h-3 bg-blue-600 rounded-full mt-3 shrink-0 shadow-[0_0_15px_rgba(37,99,235,0.8)]"></div>
                                        <div className="text-start">
                                            <h4 className="text-2xl font-black text-white mb-2">{item.t}</h4>
                                            <p className="text-gray-500 text-lg font-medium">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                            <div className="relative bento-card p-12 md:p-20 bg-black min-h-[500px] flex items-center justify-center">
                                <div className="text-center">
                                    <BarChart3 size={120} className="text-blue-500 mb-8 mx-auto opacity-20" />
                                    <div className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">$450M+</div>
                                    <p className="text-xl text-gray-500 font-bold uppercase tracking-widest">إجمالي المبيعات المدارة</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
