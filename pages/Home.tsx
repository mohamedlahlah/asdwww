import React from 'react';
import {
    Search,
    LayoutGrid,
    Rocket,
    Code,
    TrendingUp,

    Zap,
    ArrowUpRight,
    Users,
    BarChart3,
    Cpu,
    Palette,
    Layout,
    ShoppingBag,
    Building2,
    Layers,
    Target,
    ShieldCheck,
    Globe,
    CheckCircle2,
    XCircle,

    BrainCircuit,
    Code2,
    Sparkles,
    MousePointerClick
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <main className="flex-grow overflow-hidden">
            {/* HERO SECTION */}
            <section className="relative pt-32 md:pt-48 lg:pt-64 pb-20 md:pb-32 lg:pb-40 px-6 md:px-10 lg:px-16 bg-white dark:bg-black overflow-hidden flex flex-col items-center min-h-screen transition-colors duration-500">
                <div className="max-w-[1400px] mx-auto relative z-10 w-full text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 dark:bg-blue-900/10 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20 rounded-full text-sm font-black mb-8 animate-fade-in-up">
                        <Sparkles size={16} />
                        <span>التاجر الرقمي</span>
                    </div>

                    <h1 className="hero-title-apple mb-12 md:mb-16 reveal active leading-tight">
                        لسنا مجرد وكالة... <br />
                        <span className="text-gray-400 dark:text-gray-600">نحن شريكك في كواليس النمو.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed font-medium mb-16 reveal active">
                        في عالم رقمي سريع، لا يكفي أن "تجرّب أدوات" أو "تشغّل حملات". <br className="hidden md:block" />
                        النجاح اليوم يحتاج منظومة متكاملة تعمل بانسجام: تقنية، تسويق، تجربة مستخدم، وأتمتة.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 reveal active">
                        <Link to="/contact" className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-xl font-bold transition-all hover:scale-105 shadow-[0_0_40px_rgba(37,99,235,0.3)] flex items-center gap-3">
                            ابدأ بتحليل نمو شامل
                            <ArrowUpRight size={24} />
                        </Link>
                        <Link to="/services" className="px-10 py-5 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-900 dark:text-white rounded-full text-xl font-bold transition-all border border-black/5 dark:border-white/10">
                            استكشف خدماتنا
                        </Link>
                    </div>

                    {/* Value Prop Badge */}
                    <div className="mt-20 flex justify-center reveal active">
                        <div className="px-6 py-3 bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-2xl text-gray-500 dark:text-gray-400 text-sm font-bold">
                            "نجاحك ليس مشروعًا لدينا… بل معيار شراكتنا."
                        </div>
                    </div>
                </div>
            </section>

            {/* THE PROBLEM SECTION */}
            <section className="py-16 md:py-24 lg:py-32 px-6 md:px-10 lg:px-16 bg-gray-50/50 dark:bg-[#050505]">
                <div className="max-w-[1400px] mx-auto">
                    {/* Header Row: Title + Visual */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-end mb-16 md:mb-24">
                        <SectionHeader
                            tag="المشكلة التي نحلّها"
                            title="لماذا يفشل النمو <br/> <span class='text-red-500'>رغم كثرة الأدوات؟</span>"
                            subtitle="الكثير من التجار والشركات يعانون من أدوات لا تعمل معًا، وإعلانات بلا عائد حقيقي."
                            className="mb-0 text-start"
                        />

                        {/* Visual: Chaos Graphic */}
                        <div className="relative w-full flex justify-center order-1 lg:order-2">
                            <div className="w-full max-w-sm md:max-w-md">
                                <ChaosGraphic />
                            </div>
                        </div>
                    </div>

                    {/* Grid Items (Full Width Again) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                        {[
                            { title: "أدوات لا تعمل معًا", desc: "أنظمة منفصلة تزيد التعقيد بدلاً من حله." },
                            { title: "إعلانات بلا عائد حقيقي", desc: "صرف ميزانيات ضخمة دون نتائج ملموسة." },
                            { title: "مواقع جميلة لا تحوّل", desc: "تصاميم مبهرة لكنها لا تقنع الزائر بالشراء." },
                            { title: "بيانات متفرقة", desc: "غياب الرؤية الكاملة يؤدي لقرارات متأخرة وخاطئة." },
                            { title: "اعتماد على مزودين منفصلين", desc: "تشتت الجهود بين عدة وكالات بلا رؤية موحّدة." },
                            { title: "النتيجة: هدر للموارد", desc: "ضياع الميزانية، الوقت، والطاقة." }
                        ].map((item, i) => (
                            <div key={i} className="bento-card p-8 bg-white dark:bg-[#0f0f10] hover:border-red-500/20 group hover:-translate-y-1 transition-transform">
                                <div className="w-12 h-12 bg-red-50 dark:bg-red-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <XCircle className="text-red-500" size={24} />
                                </div>
                                <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3">{item.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400 font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* THE SOLUTION SECTION */}
            <section className="py-16 md:py-24 lg:py-32 px-6 md:px-10 lg:px-16 bg-white dark:bg-black">
                <div className="max-w-[1400px] mx-auto">
                    {/* Header Row: Title + Visual */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-end mb-16 md:mb-24">
                        <SectionHeader
                            tag="الحل: فريق نمو مدمج"
                            title="منظومة واحدة <br/> <span class='text-blue-500'>بدل حلول متفرقة.</span>"
                            subtitle="نحن لا نبيع خدمات منفصلة، بل نوفر فريق نمو مدمج يتولى عنك الجوانب التقنية والتسويقية."
                            className="mb-0 text-start"
                        />

                        {/* Visual: System Graphic */}
                        <div className="relative w-full flex justify-center order-1 lg:order-2">
                            <div className="w-full max-w-sm md:max-w-md">
                                <SystemGraphic />
                            </div>
                        </div>
                    </div>

                    {/* Grid Items (8 Cards) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {[
                            { title: "SEO استراتيجي", desc: "مبني على نية الشراء", icon: <Search size={20} /> },
                            { title: "متاجر قابلة للتوسع", desc: "بنية تحتية قوية", icon: <LayoutGrid size={20} /> },
                            { title: "UX/UI يقود القرار", desc: "تصميم يحول الزوار لعملاء", icon: <Palette size={20} /> },
                            { title: "أتمتة العمليات", desc: "بـ n8n وربط الأنظمة", icon: <Zap size={20} /> },
                            { title: "إعلانات مربحة", desc: "مبنية على العائد ROAS", icon: <TrendingUp size={20} /> },
                            { title: "هندسة Funnels", desc: "مسارات بيع ذكية", icon: <Code size={20} /> },
                            { title: "تحليل بالأرقام", desc: "قرارات مبنية على داتا", icon: <BarChart3 size={20} /> },
                            { title: "إدارة نمو", desc: "حملات توسع مدروسة", icon: <Rocket size={20} /> }
                        ].map((item, i) => (
                            <div key={i} className="bento-card p-6 bg-blue-50 dark:bg-blue-900/5 border-blue-100 dark:border-blue-500/10 hover:border-blue-500/30 group hover:-translate-y-1 transition-transform">
                                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 font-bold">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-2xl font-bold text-gray-500 dark:text-gray-400">
                            لتتفرغ أنت لما تتقنه فعلًا: <span className="text-gray-900 dark:text-white">المنتج، العميل، والرؤية.</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* PARTNERSHIP MINDSET */}
            <section className="py-16 md:py-24 lg:py-32 px-6 md:px-10 lg:px-16 bg-black text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,_rgba(37,99,235,0.2)_0%,_transparent_50%)]"></div>
                <div className="max-w-[1000px] mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-sm font-bold mb-8">
                        <Users size={16} />
                        <span>عقلية الشريك</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-tight">
                        نحن نعمل كشريك استراتيجي مدمج، <br />
                        <span className="text-blue-500">لا كمزوّد خدمة خارجي.</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed max-w-4xl mx-auto mb-16">
                        نشارك في صناعة القرار، نفهم نموذج عملك بعمق، ونعمل بعقلية داخلية تضع أهدافك التجارية في صميم كل خطوة.
                    </p>

                    <blockquote className="text-2xl md:text-3xl font-bold leading-relaxed italic text-white/90 border-r-4 border-blue-500 pr-6 inline-block">
                        "نمو أعمالك هو المؤشر الحقيقي لنجاح شراكتنا."
                    </blockquote>
                </div>
            </section>

            {/* TECHNICAL & INNOVATION */}
            <section className="py-16 md:py-24 lg:py-32 px-6 md:px-10 lg:px-16 bg-white dark:bg-black">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-5 text-start">
                            <SectionHeader
                                tag="التميز الهندسي"
                                title="بنية رقمية صلبة.<br/> <span class='text-blue-500'> أتمتة ذكية تفهمك.</span>"
                                subtitle="لا نكتفي ببناء المواقع؛ نخلق أنظمة حية تتنفس البيانات، تتحدث مع عملائك، وتنجز المهام الروتينية بدقة جراحية بينما تتفرغ أنت للنمو."
                            />
                            <div className="mt-8 flex flex-col gap-4">
                                <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/5 backdrop-blur-sm">
                                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                                        <Zap size={20} />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-gray-900 dark:text-white">أداء فائق السرعة</h5>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">تحميل &lt; 1 ثانية</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/5 backdrop-blur-sm">
                                    <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
                                        <Workflow size={20} />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-gray-900 dark:text-white">أتمتة سير العمل</h5>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">توفير +40 ساعة/شهرياً</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                            {/* Decorative background glow */}
                            <div className="absolute inset-0 bg-blue-500/5 blur-[100px] -z-10 rounded-full"></div>

                            {[
                                { t: "معمارية الأداء الأول", d: "تصميم برمجي يضع السرعة والاستقرار فوق كل اعتبار، لضمان تجربة مستخدم خالية من أي توقف.", i: <Cpu /> },
                                { t: "محرك الأتمتة (n8n)", d: "عقل رقمي يدير عملياتك الخلفية، يربط التطبيقات، ويتخذ القرارات نيابة عنك طوال اليوم.", i: <Workflow /> },
                                { t: "تكامل بلا حدود", d: "جسور ذكية بين منصاتك المختلفة (CRM, ERP, Ads) لتنهي عزلة البيانات للأبد وتوحد الرؤية.", i: <Layers /> },
                                { t: "نمو بلا قيود", d: "نظام مرن مصمم ليتوسع معك بسلاسة من أول طلب وحتى الطلب المليون دون الحاجة لإعادة البناء.", i: <BarChart3 /> }
                            ].map((item, i) => (
                                <div key={i} className="bento-card p-8 bg-white/50 dark:bg-[#151516]/80 backdrop-blur-xl border border-black/5 dark:border-white/10 hover:border-blue-500/30 hover:scale-[1.02] flex flex-col gap-4 group transition-all duration-500">
                                    <div className="w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-white/5 dark:to-white/10 rounded-2xl flex items-center justify-center text-gray-900 dark:text-white group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500 shadow-sm">
                                        {React.cloneElement(item.i as any, { size: 28 })}
                                    </div>
                                    <h4 className="text-xl font-black text-gray-900 dark:text-white">{item.t}</h4>
                                    <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed">{item.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SUSTAINABLE GROWTH */}
            <section className="py-16 md:py-24 lg:py-32 px-6 md:px-10 lg:px-16 bg-gray-50 dark:bg-[#080808]">
                <div className="max-w-[1400px] mx-auto">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-12 md:mb-16 lg:mb-20">
                        {/* Text Content */}
                        <div className="text-start order-1">
                            <SectionHeader
                                tag="المنظور الاستراتيجي"
                                title="لا نبحث عن ضجة مؤقتة...<br/> <span class='text-green-600'>نبني أصولاً تدوم.</span>"
                                subtitle="القفزات السريعة تغري الهواة، لكن النمو المركب هو لعبة المحترفين. نحول عملك من صفقات عشوائية إلى ماكينة تدفق نقدي مستدام."
                                className="items-start text-start"
                                titleClassName="text-4xl md:text-6xl lg:text-7xl font-black"
                                subtitleClassName="text-xl md:text-2xl mt-6"
                            />
                        </div>

                        {/* Symbolic Image (Left Side) */}
                        <div className="relative order-2 flex justify-center">
                            <div className="w-full max-w-sm md:max-w-md">
                                <CompoundGrowthGraphic />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bento-card p-10 bg-white dark:bg-[#151516] border border-green-500/10 hover:border-green-500/30 transition-all duration-500 group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 blur-[50px] -z-10 transition-opacity opacity-50 group-hover:opacity-100"></div>
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-500/10 rounded-2xl flex items-center justify-center text-green-600 dark:text-green-500 mb-8 group-hover:scale-110 transition-transform duration-500">
                                <TrendingUp size={32} />
                            </div>
                            <h4 className="text-2xl font-black text-gray-900 dark:text-white mb-4">تراكم القيمة</h4>
                            <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed text-lg">
                                كل ريال يُنفق اليوم يجب أن يسهل بيعة الغد. نبني لك قاعدة بيانات، سمعة، ومحتوى يرفع قيمة علامتك تلقائياً مع الزمن.
                            </p>
                        </div>

                        <div className="bento-card p-10 bg-white dark:bg-[#151516] border border-blue-500/10 hover:border-blue-500/30 transition-all duration-500 group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[50px] -z-10 transition-opacity opacity-50 group-hover:opacity-100"></div>
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-500 mb-8 group-hover:scale-110 transition-transform duration-500">
                                <ShieldCheck size={32} />
                            </div>
                            <h4 className="text-2xl font-black text-gray-900 dark:text-white mb-4">ملكية الجمهور</h4>
                            <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed text-lg">
                                لا تكن رهينة لمنصات الإعلانات. نساعدك في بناء قنواتك الخاصة (قوائم بريدية، مجتمعات) التي تملكها للأبد ولا يستطيع أحد أخذها منك.
                            </p>
                        </div>

                        <div className="bento-card p-10 bg-white dark:bg-[#151516] border border-purple-500/10 hover:border-purple-500/30 transition-all duration-500 group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 blur-[50px] -z-10 transition-opacity opacity-50 group-hover:opacity-100"></div>
                            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-600 dark:text-purple-500 mb-8 group-hover:scale-110 transition-transform duration-500">
                                <BarChart3 size={32} />
                            </div>
                            <h4 className="text-2xl font-black text-gray-900 dark:text-white mb-4">استقرار التنبؤ</h4>
                            <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed text-lg">
                                وداعاً للتقلبات العنيفة. نصمم آليات عمل وهياكل تسويقية تعطيك رؤية واضحة للمستقبل، لتتخذ قرارات التوسع بقلب مطمئن.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* VISION & WHY US */}
            <section className="py-16 md:py-24 lg:py-32 px-6 md:px-10 lg:px-16 bg-white dark:bg-black">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Vision */}
                    <div className="text-start">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-100 dark:bg-white/10 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                            <Globe size={14} />
                            رؤية عربية
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 leading-tight">
                            نفهم السوق... <br />
                            <span className="text-blue-500">ونتقن الأدوات.</span>
                        </h2>
                        <ul className="space-y-6 text-lg font-medium text-gray-500 dark:text-gray-400">
                            {[
                                "نمزج فهم عميق للتاجر العربي",
                                "لغة السوق المحلي وثقافته",
                                "معايير عالمية في التنفيذ",
                                "أفضل ممارسات Google وApple وUX الحديثة"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Why Digital Merchant */}
                    <div className="bento-card p-10 bg-gray-900 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px]"></div>
                        <h3 className="text-3xl font-black mb-8 relative z-10">لماذا "التاجر الرقمي"؟</h3>
                        <ul className="space-y-6 relative z-10">
                            {[
                                "فريق واحد بدل 5 مزودين",
                                "استراتيجية قبل التنفيذ",
                                "تقنية + تسويق + أتمتة",
                                "قرارات مبنية على بيانات",
                                "شراكة طويلة المدى"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-xl font-bold">
                                    <CheckCircle2 className="text-green-400 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-12 flex items-center gap-3 px-6 py-3 bg-white/10 rounded-xl w-fit backdrop-blur-md border border-white/10">
                            <ShieldCheck className="text-blue-400" />
                            <div>
                                <div className="font-black text-sm">100% Reliable</div>
                                <div className="text-xs text-gray-400">التزام كامل بالجودة والشفافية</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TEAM */}
            <section className="py-16 md:py-24 lg:py-32 px-6 md:px-10 lg:px-16 bg-gray-50/50 dark:bg-[#080808]">
                <div className="max-w-4xl mx-auto text-center">
                    <SectionHeader
                        tag="الفريق"
                        title="فريقنا هو سر قوتك"
                        subtitle="تجمعنا رؤية واحدة: تمكين التاجر العربي من المنافسة عالميًا بأفضل الأدوات الممكنة."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        {[
                            { icon: Code2, role: "مهندسو البرمجيات", subRole: "(Software Engineers)", desc: "يبنون بنية تقنية مستقرة، قابلة للتوسع، تتحمل النمو العالي دون أعطال أو حلول مؤقتة.", color: "text-blue-500", bg: "bg-blue-500/10" },
                            { icon: Palette, role: "مصممو تجربة المستخدم", subRole: "(UX/UI Designers)", desc: "لا يصممون شكلًا جميلًا فقط، بل واجهات تحوّل الزائر إلى عميل بثقة وسلاسة عالمية.", color: "text-purple-500", bg: "bg-purple-500/10" },
                            { icon: Target, role: "خبراء SEO", subRole: "(SEO Specialists)", desc: "يبنون حضورًا طويل الأمد في نتائج البحث، يعتمد على البيانات والسلوك الشرائي لا على الحيل المؤقتة.", color: "text-green-500", bg: "bg-green-500/10" }
                        ].map((item, i) => (
                            <div key={i} className="group flex flex-col items-center text-center">
                                {/* Symbolic Icon Container */}
                                <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-white dark:bg-[#151516] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-500 flex items-center justify-center relative overflow-hidden mb-6">
                                    <div className={`absolute inset-0 ${item.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                    <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />

                                    <item.icon size={40} className={`text-gray-400 dark:text-gray-600 group-hover:${item.color} transition-colors duration-500 relative z-10`} />

                                    {/* Decorative Elements */}
                                    <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-gray-200 dark:bg-white/10 group-hover:bg-current text-inherit opacity-50"></div>
                                    <div className="absolute bottom-4 left-4 w-1 h-1 rounded-full bg-gray-200 dark:bg-white/10 group-hover:bg-current text-inherit opacity-50"></div>
                                </div>

                                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{item.role}</h4>
                                <span className="text-sm font-bold text-blue-500 mb-4 block dir-ltr">{item.subRole}</span>
                                <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-medium max-w-xs group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROCESS */}
            <section className="py-16 md:py-24 lg:py-32 px-6 md:px-10 lg:px-16 bg-white dark:bg-black relative overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-1/2 left-0 w-full h-[500px] -translate-y-1/2 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 blur-3xl -z-10"></div>

                <div className="max-w-[1400px] mx-auto relative">
                    <SectionHeader
                        tag="منهجية العمل"
                        title="كيف ندير الشراكة؟"
                        subtitle=""
                        className="mb-16 md:mb-24"
                    />

                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[280px] left-10 right-10 h-0.5 bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                        {[
                            {
                                step: "01",
                                title: "التحليل الاستراتيجي",
                                desc: "نبدأ بفهم نموذج عملك وتحليل أهدافك ودراسة سياق السوق، لضمان أن يكون كل قرار لاحق مبنيًا على أساس تجاري واضح."
                            },
                            {
                                step: "02",
                                title: "تصميم المنظومة",
                                desc: "نُحدّد البنية التقنية والتسويقية الأنسب، ونبني منظومة متكاملة ومتجانسة تدعم أهدافك وتكون قابلة للتوسع."
                            },
                            {
                                step: "03",
                                title: "الإطلاق والقياس",
                                desc: "نُنفّذ الحلول ونطلقها وفق خطة واضحة، مع إعداد مؤشرات أداء دقيقة للمتابعة والتحليل."
                            },
                            {
                                step: "04",
                                title: "التحسين والتوسّع",
                                desc: "نُحلّل البيانات، ونُحسّن الأداء، ونُوسّع المنظومة تدريجيًا استنادًا إلى نتائج فعلية وقابلة للقياس."
                            },
                            {
                                step: "05",
                                title: "النمو المستدام",
                                desc: "نواصل العمل كشريك طويل المدى، ونواكب تطور أعمالك، ونضمن نموًا متوازنًا ومستدامًا يدعم أهدافك الاستراتيجية."
                            }
                        ].map((item, i) => (
                            <div key={i} className="group relative pt-12">
                                {/* Step Indicator */}
                                <div className="absolute top-0 right-8 w-20 h-20 bg-white dark:bg-[#0c0c0d] border border-gray-100 dark:border-white/10 rounded-2xl flex items-center justify-center text-2xl font-black text-gray-300 dark:text-gray-700 group-hover:text-blue-500 group-hover:border-blue-500/50 group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 shadow-xl z-20">
                                    {item.step}
                                </div>

                                {/* Card Body */}
                                <div className="h-full p-8 md:p-10 pt-16 rounded-[2.5rem] bg-gray-50/50 dark:bg-[#0c0c0d]/80 border border-black/5 dark:border-white/5 backdrop-blur-xl hover:bg-white dark:hover:bg-[#151516] hover:border-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 flex flex-col">
                                    <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 mt-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-lg text-gray-500 dark:text-gray-400 font-medium leading-relaxed group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-24 lg:py-32 px-6 md:px-10 lg:px-16 bg-white dark:bg-black">
                <div className="max-w-5xl mx-auto text-center bg-gray-900 text-white rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_100%,_rgba(37,99,235,0.4)_0%,_transparent_50%)]"></div>

                    <div className="relative z-10 flex flex-col items-center">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tighter leading-tight">
                            هل تبحث عن مزوّد خدمات… <br className="hidden lg:block" />
                            <span className="text-blue-500">أم عن شريك يقود معك النمو؟</span>
                        </h2>

                        <p className="text-lg md:text-xl text-gray-300 font-medium mb-12 max-w-3xl mx-auto leading-relaxed">
                            في التاجر الرقمي، لا نُقدّم حلولًا منفصلة، بل نبني منظومة متكاملة تُدار بعقلية الشريك، وتُقاس بالأثر الحقيقي على أعمالك.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-start w-full max-w-3xl mx-auto mb-16">
                            {[
                                "وضوح استراتيجي بدل القرارات التجريبية",
                                "نظام متكامل بدل أدوات متفرقة",
                                "نتائج قابلة للقياس بدل وعود تسويقية",
                                "شريك يفكّر معك ويدير التفاصيل"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5 backdrop-blur-sm">
                                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 text-blue-400">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <span className="text-lg font-bold text-gray-100">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mb-8 max-w-2xl mx-auto text-gray-400 font-medium space-y-2">
                            <p className="text-xl text-white font-bold">ابدأ اليوم بتحليل نمو شامل يحدد:</p>
                            <p>أين تقف الآن، وما الذي يعيقك، وأين تكمن فرص النمو الحقيقية.</p>
                        </div>

                        <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-xl font-black transition-all hover:scale-105 shadow-2xl shadow-blue-600/30">
                            <span>اطلب التحليل الآن</span>
                            <ArrowUpRight />
                        </Link>

                        <p className="mt-10 text-gray-500 font-medium leading-relaxed max-w-xl mx-auto">
                            ودع التاجر الرقمي يعمل في كواليس نجاحك،
                            بينما تركز أنت على تطوير عملك وبناء مستقبله.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

// Simple internal component for the n8n icon representation or similar if needed, 
// otherwise we use standard icons. 
const Workflow = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <rect width="8" height="8" x="3" y="3" rx="2" />
        <path d="M7 11v4a2 2 0 0 0 2 2h4" />
        <rect width="8" height="8" x="13" y="13" rx="2" />
    </svg>
);

const CompoundGrowthGraphic = () => (
    <div className="relative w-full aspect-square md:aspect-video lg:aspect-square flex items-center justify-center p-8">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 to-blue-500/10 rounded-3xl blur-2xl"></div>

        {/* Main Chart Container */}
        <div className="relative w-full h-full bg-white/50 dark:bg-black/50 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl p-8 overflow-hidden shadow-2xl">
            {/* Grid Lines */}
            <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'linear-gradient(#888 1px, transparent 1px), linear-gradient(90deg, #888 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            {/* The Chart SVG */}
            <svg viewBox="0 0 400 300" className="w-full h-full overflow-visible">
                <defs>
                    <linearGradient id="growthGradient" x1="0" y1="1" x2="1" y2="0">
                        <stop offset="0%" stopColor="#22c55e" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Curve Line */}
                {/* Starting low left, exponential up to right */}
                <path d="M 50 250 C 150 250, 200 200, 350 50"
                    fill="none"
                    stroke="url(#growthGradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    filter="url(#glow)"
                />

                {/* Area under curve */}
                <path d="M 50 250 C 150 250, 200 200, 350 50 L 350 250 L 50 250 Z"
                    fill="url(#growthGradient)"
                    opacity="0.2"
                />

                {/* Points */}
                <circle cx="50" cy="250" r="6" fill="#22c55e" />
                <circle cx="350" cy="50" r="8" fill="#3b82f6" className="animate-pulse" />

            </svg>
        </div>
    </div>
);

const ChaosGraphic = () => (
    <div className="relative w-full aspect-square md:aspect-video lg:aspect-square flex items-center justify-center p-8">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 to-orange-500/10 rounded-3xl blur-2xl"></div>

        {/* Main Chart Container */}
        <div className="relative w-full h-full bg-white/50 dark:bg-black/50 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl p-8 overflow-hidden shadow-2xl group">
            {/* Grid Lines */}
            <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'linear-gradient(#888 1px, transparent 1px), linear-gradient(90deg, #888 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            {/* The Chart SVG */}
            <svg viewBox="0 0 400 300" className="w-full h-full overflow-visible">
                <defs>
                    <linearGradient id="chaosGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#f97316" stopOpacity="0.8" />
                    </linearGradient>
                    <filter id="glowRed">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Volatile Line */}
                <path d="M 50 150 Q 80 50 120 180 T 200 120 T 280 220 T 350 100"
                    fill="none"
                    stroke="url(#chaosGradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="8 8"
                    filter="url(#glowRed)"
                    className="animate-pulse"
                />

                {/* Disconnected Nodes (Silos) */}
                <g className="group-hover:translate-x-1 transition-transform duration-1000">
                    <circle cx="120" cy="180" r="12" fill="#ef4444" opacity="0.8" />
                    <text x="120" y="210" textAnchor="middle" fill="#ef4444" fontSize="12" fontWeight="bold" opacity="0.6">Ads</text>
                </g>

                <g className="group-hover:-translate-y-2 transition-transform duration-1000 delay-100">
                    <circle cx="200" cy="120" r="16" fill="#f97316" opacity="0.8" />
                    <text x="200" y="90" textAnchor="middle" fill="#f97316" fontSize="12" fontWeight="bold" opacity="0.6">Sales</text>
                </g>

                <g className="group-hover:translate-y-2 transition-transform duration-1000 delay-200">
                    <circle cx="280" cy="220" r="14" fill="#ef4444" opacity="0.8" />
                    <text x="280" y="255" textAnchor="middle" fill="#ef4444" fontSize="12" fontWeight="bold" opacity="0.6">CRM</text>
                </g>

                {/* Broken/Red X Connections */}
                <path d="M 120 180 L 200 120" stroke="#ef4444" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 4" />
                <path d="M 200 120 L 280 220" stroke="#ef4444" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 4" />

                {/* Warning Symbols */}
                <text x="160" y="150" fontSize="16" fill="#ef4444">⚠️</text>
                <text x="240" y="170" fontSize="16" fill="#ef4444">⚠️</text>

            </svg>
        </div>
    </div>
);

const SystemGraphic = () => (
    <div className="relative w-full aspect-square md:aspect-video lg:aspect-square flex items-center justify-center p-8">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl"></div>

        {/* Main Chart Container */}
        <div className="relative w-full h-full bg-white/50 dark:bg-black/50 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl p-8 overflow-hidden shadow-2xl group">
            {/* Grid Lines */}
            <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'linear-gradient(#888 1px, transparent 1px), linear-gradient(90deg, #888 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            {/* The Graphic SVG */}
            <svg viewBox="0 0 400 300" className="w-full h-full overflow-visible">
                <defs>
                    <linearGradient id="systemGradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#a855f7" stopOpacity="0.8" />
                    </linearGradient>
                    <filter id="glowBlue">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Central Hub */}
                <g className="animate-[pulse_4s_ease-in-out_infinite]">
                    <circle cx="200" cy="150" r="40" fill="none" stroke="url(#systemGradient)" strokeWidth="2" filter="url(#glowBlue)" />
                    <circle cx="200" cy="150" r="30" fill="url(#systemGradient)" opacity="0.2" />
                    <circle cx="200" cy="150" r="8" fill="#3b82f6" />
                </g>

                {/* Orbiting Nodes */}
                <g>
                    <animateTransform attributeName="transform" type="rotate" from="0 200 150" to="360 200 150" dur="20s" repeatCount="indefinite" />

                    {/* Node 1 */}
                    <circle cx="200" cy="50" r="10" fill="#3b82f6" opacity="0.8" />
                    <line x1="200" y1="60" x2="200" y2="110" stroke="#3b82f6" strokeWidth="2" strokeOpacity="0.3" />

                    {/* Node 2 */}
                    <circle cx="286" cy="100" r="10" fill="#a855f7" opacity="0.8" />
                    <line x1="286" y1="100" x2="235" y2="130" stroke="#a855f7" strokeWidth="2" strokeOpacity="0.3" />

                    {/* Node 3 */}
                    <circle cx="286" cy="200" r="10" fill="#3b82f6" opacity="0.8" />
                    <line x1="286" y1="200" x2="235" y2="170" stroke="#3b82f6" strokeWidth="2" strokeOpacity="0.3" />

                    {/* Node 4 */}
                    <circle cx="200" cy="250" r="10" fill="#a855f7" opacity="0.8" />
                    <line x1="200" y1="250" x2="200" y2="190" stroke="#a855f7" strokeWidth="2" strokeOpacity="0.3" />

                    {/* Node 5 */}
                    <circle cx="114" cy="200" r="10" fill="#3b82f6" opacity="0.8" />
                    <line x1="114" y1="200" x2="165" y2="170" stroke="#3b82f6" strokeWidth="2" strokeOpacity="0.3" />

                    {/* Node 6 */}
                    <circle cx="114" cy="100" r="10" fill="#a855f7" opacity="0.8" />
                    <line x1="114" y1="100" x2="165" y2="130" stroke="#a855f7" strokeWidth="2" strokeOpacity="0.3" />
                </g>

                {/* Floating Labels */}
                <g className="animate-bounce">
                    <rect x="160" y="138" width="80" height="24" rx="12" fill="white" fillOpacity="0.9" />
                    <text x="200" y="155" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#3b82f6">INTEGRATION</text>
                </g>

            </svg>
        </div>
    </div>
);

export default Home;
