import React from 'react';
import {
    Search,
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
    Rocket,
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
            <section className="relative pt-48 md:pt-64 lg:pt-80 pb-32 md:pb-64 px-6 md:px-12 bg-white dark:bg-black overflow-hidden flex flex-col items-center min-h-screen transition-colors duration-500">
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
            <section className="py-24 md:py-32 px-6 md:px-12 bg-gray-50/50 dark:bg-[#050505]">
                <div className="max-w-[1400px] mx-auto">
                    <SectionHeader
                        tag="المشكلة التي نحلّها"
                        title="لماذا يفشل النمو <br/> <span class='text-red-500'>رغم كثرة الأدوات؟</span>"
                        subtitle="الكثير من التجار والشركات يعانون من أدوات لا تعمل معًا، وإعلانات بلا عائد حقيقي."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                        {[
                            { title: "أدوات لا تعمل معًا", desc: "أنظمة منفصلة تزيد التعقيد بدلاً من حله." },
                            { title: "إعلانات بلا عائد حقيقي", desc: "صرف ميزانيات ضخمة دون نتائج ملموسة." },
                            { title: "مواقع جميلة لا تحوّل", desc: "تصاميم مبهرة لكنها لا تقنع الزائر بالشراء." },
                            { title: "بيانات متفرقة", desc: "غياب الرؤية الكاملة يؤدي لقرارات متأخرة وخاطئة." },
                            { title: "اعتماد على مزودين منفصلين", desc: "تشتت الجهود بين عدة وكالات بلا رؤية موحّدة." },
                            { title: "النتيجة: هدر للموارد", desc: "ضياع الميزانية، الوقت، والطاقة — دون نمو حقيقي." }
                        ].map((item, i) => (
                            <div key={i} className="bento-card p-8 bg-white dark:bg-[#0f0f10] hover:border-red-500/20 group">
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
            <section className="py-24 md:py-32 px-6 md:px-12 bg-white dark:bg-black">
                <div className="max-w-[1400px] mx-auto">
                    <SectionHeader
                        tag="الحل: فريق نمو مدمج"
                        title="منظومة واحدة <br/> <span class='text-blue-500'>بدل حلول متفرقة.</span>"
                        subtitle="نحن لا نبيع خدمات منفصلة، بل نوفر فريق نمو مدمج يتولى عنك الجوانب التقنية والتسويقية."
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
                        {/* Technical Side */}
                        <div className="bento-card p-12 bg-blue-50 dark:bg-blue-900/5 border-blue-100 dark:border-blue-500/10">
                            <div className="flex items-center gap-4 mb-8">
                                <Code2 size={40} className="text-blue-600 dark:text-blue-400" />
                                <h3 className="text-3xl font-black text-gray-900 dark:text-white">الجوانب التقنية</h3>
                            </div>
                            <ul className="space-y-6">
                                {[
                                    "SEO استراتيجي مبني على نية الشراء",
                                    "تطوير مواقع ومتاجر قابلة للتوسع",
                                    "UX/UI يقود القرار لا الإعجاب",
                                    "أتمتة العمليات بـ n8n وربط الأنظمة"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-xl font-bold text-gray-600 dark:text-gray-300">
                                        <CheckCircle2 size={24} className="text-blue-500 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Marketing Side */}
                        <div className="bento-card p-12 bg-purple-50 dark:bg-purple-900/5 border-purple-100 dark:border-purple-500/10">
                            <div className="flex items-center gap-4 mb-8">
                                <TrendingUp size={40} className="text-purple-600 dark:text-purple-400" />
                                <h3 className="text-3xl font-black text-gray-900 dark:text-white">الجوانب التسويقية</h3>
                            </div>
                            <ul className="space-y-6">
                                {[
                                    "إعلانات مدفوعة مبنية على الربحية",
                                    "هندسة Funnels وصفحات هبوط",
                                    "تحليل وتحسين مستمر بالأرقام",
                                    "إدارة حملات النمو والتوسع"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-xl font-bold text-gray-600 dark:text-gray-300">
                                        <CheckCircle2 size={24} className="text-purple-500 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-2xl font-bold text-gray-500 dark:text-gray-400">
                            لتتفرغ أنت لما تتقنه فعلًا: <span className="text-gray-900 dark:text-white">المنتج، العميل، والرؤية.</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* PARTNERSHIP MINDSET */}
            <section className="py-24 px-6 md:px-12 bg-black text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,_rgba(37,99,235,0.2)_0%,_transparent_50%)]"></div>
                <div className="max-w-[1000px] mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-sm font-bold mb-8">
                        <Users size={16} />
                        <span>عقلية الشريك</span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter">
                        نجاحك هو <span className="text-blue-500">KPI</span> الوحيد.
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-lg font-bold text-gray-300 mb-16">
                        <span>نشاركك القرار</span>
                        <span>نفهم نموذج عملك</span>
                        <span>نعمل بعقلية داخلية</span>
                        <span>نقيس نجاحنا بنموك</span>
                    </div>

                    <blockquote className="text-3xl md:text-4xl font-black leading-relaxed italic text-white/90">
                        "إذا لم ينمُ عملك... فعملنا لم يكتمل."
                    </blockquote>
                </div>
            </section>

            {/* TECHNICAL & INNOVATION */}
            <section className="py-32 px-6 md:px-12 bg-white dark:bg-black">
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
            {/* SUSTAINABLE GROWTH */}
            <section className="py-32 px-6 md:px-12 bg-gray-50 dark:bg-[#080808]">
                <div className="max-w-[1400px] mx-auto">
                    <div className="text-center mb-20 max-w-3xl mx-auto">
                        <SectionHeader
                            tag="المنظور الاستراتيجي"
                            title="لا نبحث عن ضجة مؤقتة...<br/> <span class='text-green-600'>نبني أصولاً تدوم.</span>"
                            subtitle="القفزات السريعة تغري الهواة، لكن النمو المركب هو لعبة المحترفين. نحول عملك من صفقات عشوائية إلى ماكينة تدفق نقدي مستدام."
                            className="items-center text-center"
                            titleClassName="text-center text-4xl md:text-6xl lg:text-7xl font-black"
                            subtitleClassName="mx-auto text-xl md:text-2xl mt-6"
                        />
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
            <section className="py-32 px-6 md:px-12 bg-white dark:bg-black">
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
            <section className="py-24 px-6 md:px-12 bg-gray-50/50 dark:bg-[#080808]">
                <div className="max-w-4xl mx-auto text-center">
                    <SectionHeader
                        tag="الفريق"
                        title="فريقنا هو سر قوتك"
                        subtitle="تجمعنا رؤية واحدة: تمكين التاجر العربي من المنافسة عالميًا بأفضل الأدوات الممكنة."
                    />
                    <div className="flex flex-wrap justify-center gap-4 mt-12">
                        {["مطورين", "مختصي UX/UI", "خبراء SEO", "مهندسي أتمتة", "استراتيجيي نمو"].map((role, i) => (
                            <span key={i} className="px-6 py-3 bg-white dark:bg-[#151516] rounded-full font-bold text-gray-700 dark:text-gray-300 shadow-sm border border-black/5 dark:border-white/5">
                                {role}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROCESS */}
            <section className="py-24 px-6 md:px-12 bg-white dark:bg-black">
                <div className="max-w-[1400px] mx-auto">
                    <SectionHeader
                        tag="العملية"
                        title="كيف نعمل؟"
                        subtitle="إستراتيجية ← تكنولوجيا ← نمو"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-16">
                        {[
                            { step: "01", title: "نفهم نموذج عملك" },
                            { step: "02", title: "نبني المنظومة المناسبة" },
                            { step: "03", title: "نطلق ونقيس" },
                            { step: "04", title: "نُحسّن ونوسّع" },
                            { step: "05", title: "ننمو معك" }
                        ].map((item, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-gray-50 dark:bg-[#111] border border-black/5 dark:border-white/5 text-start hover:border-blue-500/50 transition-colors group">
                                <div className="text-4xl font-black text-gray-200 dark:text-gray-800 mb-4 group-hover:text-blue-500/20 transition-colors">{item.step}</div>
                                <h4 className="text-lg font-bold text-gray-900 dark:text-white">{item.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-6 md:px-12 bg-white dark:bg-black">
                <div className="max-w-5xl mx-auto text-center bg-gray-900 text-white rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_100%,_rgba(37,99,235,0.4)_0%,_transparent_50%)]"></div>
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">انضم إلينا اليوم</h2>
                        <p className="text-2xl text-gray-400 font-bold mb-12">هل تبحث عن خدمات… أم عن شريك نمو؟</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-start max-w-2xl mx-auto mb-16">
                            {[
                                "وضوحًا بدل التجربة",
                                "نظامًا بدل حلول متفرقة",
                                "نتائج قابلة للقياس",
                                "شريكًا يفكر معك"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-blue-400" />
                                    <span className="text-lg font-bold">{item}</span>
                                </div>
                            ))}
                        </div>

                        <Link to="/contact" className="inline-flex items-center gap-3 px-12 py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-2xl font-black transition-all hover:scale-105 shadow-2xl shadow-blue-600/30">
                            <span>ابدأ الآن بتحليل نمو شامل</span>
                            <ArrowUpRight />
                        </Link>
                        <p className="mt-8 text-gray-500 font-medium">ودع "التاجر الرقمي" يعمل في كواليس نجاحك.</p>
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

export default Home;
