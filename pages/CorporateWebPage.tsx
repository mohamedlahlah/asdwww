import React from 'react';
import { Building2, ShieldCheck, Target, Users, BarChart3, Rocket, Sparkles, Zap, Search, Share2, Workflow, Cpu, Globe, CheckCircle2, X, MousePointer2, Briefcase, Info, MessageSquare, LineChart, Layers, Gauge } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import ServiceForm from '../components/ServiceForm';
import FAQ from '../components/FAQ';

const CorporateWebPage = () => {
    const corporateQuestions = [
        { label: 'اسم الشركة ونوع النشاط', type: 'text' as const, placeholder: 'مثلاً: شركة تقنية، مجموعة استشارية...' },
        { label: 'الهدف الرئيسي من الموقع', type: 'select' as const, options: ['بناء صورة ذهنية احترافية (Branding)', 'استقطاب شركاء ومستثمرين', 'دعم المبيعات والتعاقدات الكبرى', 'التوظيف وبناء الثقة للموظفين المحتملين'], required: true },
        { label: 'هل لديكم هوية بصرية مؤسسية موحدة؟', type: 'radio' as const, options: ['نعم، لدينا كتاب هوية (Brand Book)', 'نحتاج لمساعدتكم في تطوير الهوية'], required: true },
        { label: 'عدد اللغات المطلوبة في الموقع', type: 'select' as const, options: ['عربي / إنجليزي', 'عربي فقط', 'أكثر من لغتين'], required: false },
        { label: 'هل الموقع جزء من متطلبات الإدراج أو الحوكمة؟', type: 'radio' as const, options: ['نعم', 'لا'], required: false },
        { label: 'الميزانية التقريبية للمشروع', type: 'text' as const, placeholder: 'مثلاً: 20,000 - 50,000 ريال' }
    ];

    return (
        <main className="pt-32 pb-32 bg-white dark:bg-black transition-colors duration-500 overflow-hidden">
            <section className="px-6 md:px-12 max-w-[1400px] mx-auto">
                {/* Section 1: Problem Awareness */}
                <SectionHeader
                    tag="مرآة القرارات"
                    title="موقع شركتك هو <br/> <span className='text-blue-600'>وجه جديتها واحترافيتها.</span>"
                    subtitle="العملاء، الشركاء، والمستثمرون يحكمون على شركتك خلال ثوانٍ. الموقع الضعيف يعني فقدان فرص شراكات وعقود قبل أن يبدأ أي تواصل."
                    icon={<Building2 className="w-5 h-5 text-blue-600" />}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
                    {[
                        { t: "الصورة الذهنية", d: "صورة احترافية تعكس حجم وقوة المؤسسة فعلياً.", i: <Sparkles className="text-blue-500" /> },
                        { t: "بناء الثقة", d: "إزالة الشكوك لدى الشركاء والعملاء المحتملين.", i: <ShieldCheck className="text-blue-500" /> },
                        { t: "اقتناص الفرص", d: "تحويل الموقع إلى أداة تبيع قيمتك الإستراتيجية.", i: <Briefcase className="text-blue-500" /> },
                        { t: "دعم التوسع", d: "بنية تحتية تدعم نمو الشركة ودخول أسواق جديدة.", i: <Layers className="text-blue-500" /> }
                    ].map((item, i) => (
                        <div key={i} className="bento-card p-8 bg-gray-50 dark:bg-[#151516] hover:border-blue-500/30 transition-all group">
                            <div className="w-12 h-12 bg-white dark:bg-white/5 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                {item.i}
                            </div>
                            <h4 className="text-xl font-black text-gray-900 dark:text-white mb-3">{item.t}</h4>
                            <p className="text-gray-500 dark:text-gray-400 font-bold leading-relaxed">{item.d}</p>
                        </div>
                    ))}
                </div>

                {/* Section 2: Reframing */}
                <div className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="text-start">
                        <SectionHeader
                            tag="التحول الذهني"
                            title="نحن لا نبني صفحات... <br/> <span className='text-indigo-500'>نحن نبني منصات قرار.</span>"
                            subtitle="موقع الشركة الحديث يجب أن يشرح من أنت بسرعة، يوضح لماذا يجب الوثوق بك، ويسهل اتخاذ قرار التواصل أو الشراكة."
                            icon={<Target className="w-5 h-5 text-indigo-500" />}
                        />
                    </div>
                    <div className="bento-card p-12 bg-gray-50 dark:bg-[#0c0c0d] relative overflow-hidden text-start">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl"></div>
                        <div className="space-y-8 relative z-10">
                            <div className="flex items-center gap-6 opacity-40 grayscale">
                                <span className="text-sm font-black text-gray-400">❌ عقلية السطحية:</span>
                                <span className="text-xl font-bold text-gray-600">كيف يبدو الموقع؟</span>
                            </div>
                            <div className="h-px bg-gray-200 dark:bg-white/5"></div>
                            <div className="flex items-center gap-6">
                                <span className="text-sm font-black text-indigo-500">✅ عقلية المؤسسة:</span>
                                <span className="text-2xl font-black text-gray-900 dark:text-white leading-tight">ماذا يجب أن يفهم الزائر فور دخوله؟</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 3: Strategic Methodology */}
                <div className="mb-32">
                    <SectionHeader
                        tag="المنهجية الاستراتيجية"
                        title="بناء يبدأ من الداخل <br/> <span className='text-gray-400'>لا من الواجهة.</span>"
                        subtitle="تحليل الهوية، الجمهور، ونية الزيارة قبل كتابة سطر كود واحد."
                        icon={<Workflow className="w-5 h-5 text-blue-500" />}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-start">
                        {[
                            { t: "تحليل الهوية المؤسسية", d: "الرؤية، الرسالة، والقيمة المقترحة التي تميز شركتك." },
                            { t: "تحليل نية الزيارة", d: "هل الزائر هو شريك؟ مستثمر؟ أم عميل يبحث عن خدمة؟" },
                            { t: "هندسة رحلة المستشار", d: "بناء مسارات تفاعلية تقود الزائر نحو قرار التواصل الرسمي." }
                        ].map((item, i) => (
                            <div key={i} className="bento-card p-10 bg-gray-50 dark:bg-[#0a0a0b] border border-black/5 dark:border-white/10">
                                <div className="text-indigo-500 font-black mb-4">Phase 0{i + 1}</div>
                                <h4 className="text-2xl font-black text-gray-900 dark:text-white mb-4">{item.t}</h4>
                                <p className="text-gray-500 dark:text-gray-400 text-lg font-medium leading-relaxed">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 4: Corporate Content Architecture */}
                <div className="mb-32 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    <div className="lg:col-span-12">
                        <div className="bento-card p-12 bg-gray-50 dark:bg-black border border-black/5 dark:border-white/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,_rgba(37,99,235,0.02)_0%,_transparent_50%)]"></div>
                            <div className="flex flex-col lg:flex-row gap-16 items-center">
                                <div className="lg:w-1/2 text-start relative z-10">
                                    <SectionHeader
                                        tag="هندسة المحتوى"
                                        title="المحتوى المؤسسي <br/> <span className='text-blue-500'>ليس مجرد حشو.</span>"
                                        subtitle="نُعيد هيكلة المعلومات لتخدم الوضوح والمصداقية وتسهيل الوصول للحقائق الحاسمة."
                                        icon={<Info className="w-5 h-5 text-blue-500" />}
                                    />
                                </div>
                                <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                                    {[
                                        "رئيسية تقود الفهم السريع.",
                                        "من نحن: قصة نجاح وثقة.",
                                        "خدمات تشرح القيمة والمميزات.",
                                        "تواصل مصمم للتحويل المؤسسي."
                                    ].map((text, i) => (
                                        <div key={i} className="flex items-center gap-4 p-5 bg-white dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/5 font-bold text-gray-700 dark:text-gray-300">
                                            <CheckCircle2 size={18} className="text-green-500" />
                                            <span>{text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 5: UX for Decision Makers */}
                <div className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="text-start">
                        <SectionHeader
                            tag="تجربة صناع القرار"
                            title="المانح للقرار <br/> <span className='text-orange-500'>لا يملك وقتاً.</span>"
                            subtitle="نصمم التجربة بناءً على سرعة الوصول للمعلومة، التسلسل المنطقي، وإبراز النقاط الحاسمة للتعاقد."
                            icon={<MousePointer2 className="w-5 h-5 text-orange-500" />}
                        />
                        <div className="space-y-6 mt-12">
                            {[
                                { t: "تقليل التشتت البصري", d: "التركيز على الرسائل الجوهرية فقط." },
                                { t: "قابلية القراءة السريعة (Scanning)", d: "تصميم يسمح بفهم القيمة في أقل من 3 ثوانٍ." },
                                { t: "وضوح الدعوة للفعل", d: "مسارات واضحة لطلب الاجتماع أو تحميل الملف التعريفي." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 items-start">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 shadow-lg shadow-orange-500/50"></div>
                                    <div>
                                        <h5 className="font-black text-gray-900 dark:text-white text-xl mb-1">{item.t}</h5>
                                        <p className="text-gray-500 dark:text-gray-400 font-bold">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bento-card p-12 bg-orange-500/5 border-orange-500/10 h-full flex items-center justify-center">
                            <Gauge size={180} className="text-orange-500/20" />
                        </div>
                    </div>
                </div>

                {/* Section 6: Enterprise-Grade Development (Visual Overhaul) */}
                <div className="mb-48 relative">
                    <div className="absolute inset-0 bg-blue-500/5 blur-[120px] pointer-events-none"></div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="text-start">
                            <SectionHeader
                                tag="تطوير مؤسسي"
                                title="الموقع يجب أن يكون مستقراً <br/> <span className='text-blue-500'>قبل أن يكون جميلاً.</span>"
                                subtitle="نطور المواقع بمعايير المؤسسات الكبرى: سرعة فائقة، أمان عالي، وبنية قابلة للتوسع اللانهائي."
                                icon={<Cpu className="w-5 h-5 text-blue-500" />}
                            />
                            <div className="mt-12 space-y-8">
                                {[
                                    { t: "بنية نظيفة (Clean Code)", d: "أكواد برمجية محسنة تضمن سرعة تحميل البرق وسهولة الصيانة." },
                                    { t: "استباقية التوسع", d: "بناء هندسي يسمح بإضافة ميزات معقدة مستقبلاً دون هدم الأساس." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 items-start">
                                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                                            <Zap size={20} className="text-blue-500" />
                                        </div>
                                        <div>
                                            <h5 className="text-xl font-black text-gray-900 dark:text-white mb-2">{item.t}</h5>
                                            <p className="text-gray-500 dark:text-gray-400 font-bold leading-relaxed">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {[
                                {
                                    l: "الأمان والحماية",
                                    v: "High Tier",
                                    i: (
                                        <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-blue-500" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    ),
                                    glow: "shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)]"
                                },
                                {
                                    l: "توافق الموبايل",
                                    v: "Adaptive",
                                    i: (
                                        <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-emerald-500" stroke="currentColor" strokeWidth="1.5">
                                            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M12 18h.01" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    ),
                                    glow: "shadow-[0_0_40px_-10px_rgba(16,185,129,0.3)]"
                                },
                                {
                                    l: "بنية URL",
                                    v: "Semantic",
                                    i: (
                                        <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-indigo-500" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    ),
                                    glow: "shadow-[0_0_40px_-10px_rgba(99,102,241,0.3)]"
                                },
                                {
                                    l: "إدارة المحتوى",
                                    v: "Flexible",
                                    i: (
                                        <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-purple-500" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M3.27 6.96L12 12.01l8.73-5.05" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M12 22.08V12" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    ),
                                    glow: "shadow-[0_0_40px_-10px_rgba(168,85,247,0.3)]"
                                }
                            ].map((stat, i) => (
                                <div key={i} className={`bento-card p-10 bg-white/50 dark:bg-[#0c0c0d] border border-black/5 dark:border-white/10 text-center flex flex-col items-center gap-6 group hover:-translate-y-2 transition-all duration-500 ${stat.glow}`}>
                                    <div className="transform group-hover:scale-110 transition-transform duration-500">
                                        {stat.i}
                                    </div>
                                    <div>
                                        <div className="text-2xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">{stat.v}</div>
                                        <div className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em]">{stat.l}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Section 7: Corporate SEO Built-in */}
                <div className="mb-32 text-center relative">
                    <div className="absolute inset-0 bg-blue-600/5 blur-[150px]"></div>
                    <SectionHeader
                        tag="سيو مؤسسي"
                        title="الظهور في البحث <br/> <span className='text-blue-500'>يعكس قوة الشركة.</span>"
                        subtitle="نحن نعزز سمعة علامتك التجارية عبر هيكلة موضوعية تدعم الـ EEAT لضمان أفضل ترتيب في محركات البحث."
                        icon={<Search className="w-5 h-5 text-blue-500" />}
                    />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
                        {['Authority Search', 'Brand Visibility', 'Schema Support', 'Internal Linking'].map((item, i) => (
                            <div key={i} className="px-6 py-3 bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-xl font-bold text-gray-500 dark:text-gray-400 text-sm">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 8: Integration & Automation */}
                <div className="mb-32 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-12">
                        <div className="bento-card p-12 bg-purple-600/5 text-start border-purple-500/10 flex flex-col lg:flex-row gap-12 items-center">
                            <div className="lg:w-1/2">
                                <SectionHeader
                                    tag="التكامل الذكي"
                                    title="الموقع جزء من <br/> <span className='text-purple-500'>نظامك الإداري.</span>"
                                    subtitle="نربط موقعك مع الـ CRM، أدوات التوظيف، وأنظمة التواصل الداخلي ليصبح أداة تنظيم ومصدر بيانات حقيقي."
                                    icon={<Share2 className="w-5 h-5 text-purple-500" />}
                                />
                            </div>
                            <div className="lg:w-1/2 flex flex-wrap gap-4">
                                {['CRM Sync', 'HR & Hiring Portal', 'Analytics Dashboards', 'Internal Flows'].map((hub, i) => (
                                    <div key={i} className="p-4 px-8 bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-2xl font-black text-purple-500 text-sm shadow-sm">
                                        {hub}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 9: Measurement & Continuous Improvement */}
                <div className="mb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-start">
                        <div>
                            <SectionHeader
                                tag="القياس الاستراتيجي"
                                title="الموقع ليس مشروعاً منتهياً... <br/> <span className='text-green-500'>بل كائن يتطور.</span>"
                                subtitle="نوفر تقارير أداء دورية، تتبع مسارات الزوار، وتوصيات تحسين لضمان استمرار وضوح الرسالة وسهولة القرار."
                                icon={<LineChart className="w-5 h-5 text-green-500" />}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-8 bento-card bg-gray-50 dark:bg-[#151516] flex flex-col items-center">
                                <BarChart3 className="text-green-500 mb-4" size={32} />
                                <div className="text-sm font-bold text-gray-500">تتبع التفاعل</div>
                            </div>
                            <div className="p-8 bento-card bg-gray-50 dark:bg-[#151516] flex flex-col items-center">
                                <Users className="text-blue-500 mb-4" size={32} />
                                <div className="text-sm font-bold text-gray-500">تحليل الجمهور</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 10: Proof & Impact */}
                <div className="mb-32 p-12 md:p-24 bento-card bg-black text-white border-none relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,_rgba(255,255,255,0.05)_0%,_transparent_50%)]"></div>
                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-16">
                        <div className="text-start">
                            <div className="text-blue-400 font-black tracking-widest uppercase mb-4 text-sm">Performance & Results</div>
                            <h4 className="text-4xl md:text-6xl font-black mb-6">نتائج مثبتة <br />مؤسساتياً.</h4>
                        </div>
                        <div className="grid grid-cols-2 gap-8 w-full md:w-auto">
                            {[
                                { l: "سرعة تحميل", v: "0.9s" },
                                { l: "زيادة طلبات التواصل", v: "2.3x" },
                                { l: "وضوح العلامة في البحث", v: "+70%" },
                                { l: "تغطية دولية", v: "12+ دولة" }
                            ].map((stat, i) => (
                                <div key={i} className="text-start">
                                    <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.v}</div>
                                    <div className="text-xs text-blue-400 font-bold uppercase tracking-widest">{stat.l}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Section 11: Whom is this for? */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    <div className="bento-card p-12 bg-green-500/5 border-green-500/10">
                        <h4 className="text-2xl font-black text-green-600 mb-8 flex items-center gap-3">
                            <CheckCircle2 /> هذه الخدمة لك إذا:
                        </h4>
                        <ul className="space-y-6 text-start">
                            {[
                                "شركة تبحث عن صورة احترافية قوية ترسخ الثقة.",
                                "تريد موقعاً يدعم المبيعات غير المباشرة وبناء الشراكات.",
                                "تخطط للتوسع وبناء علامة تجارية طويلة الأمد وكبيرة."
                            ].map((text, i) => (
                                <li key={i} className="flex gap-4 text-lg font-bold text-gray-700 dark:text-gray-300">
                                    <div className="shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bento-card p-12 bg-red-500/5 border-red-500/10 opacity-60">
                        <h4 className="text-2xl font-black text-red-600 mb-8 flex items-center gap-3">
                            <X className="w-6 h-6" /> غير مناسبة إذا كنت:
                        </h4>
                        <ul className="space-y-6 text-start">
                            {[
                                "تبحث عن قوالب جاهزة سريعة بلا أي تحليل لهويتك.",
                                "لا تهتم بالهوية المؤسسية ودقة الرسالة الموجهة.",
                                "تريد موقعاً شكلياً فقط دون أي تكامل مع نظامك."
                            ].map((text, i) => (
                                <li key={i} className="flex gap-4 text-lg font-bold text-gray-600 dark:text-gray-400">
                                    <div className="shrink-0 w-2 h-2 bg-red-500 rounded-full mt-3"></div>
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Section 12: FAQ */}
                <FAQ
                    items={[
                        {
                            question: "هل الموقع سيكون متوافقاً مع محركات البحث؟",
                            answer: "نعم، كل موقع نبنيه يبدأ بأساس تقني قوي للـ SEO، مما يضمن سهولة أرشفة محتوى شركتك وظهورك الاحترافي أمام المستثمرين والشركاء."
                        },
                        {
                            question: "كم يستغرق بناء موقع تعريفي للشركة؟",
                            answer: "يعتمد ذلك على حجم المشروع، ولكن غالباً ما يستغرق من 4 إلى 8 أسابيع لنخرج بمنظومة متكاملة تعكس ثقل شركتك الحقيقي."
                        },
                        {
                            question: "هل يمكنني تحديث محتوى الموقع بنفسي؟",
                            answer: "نعم، نقوم بربط الموقع بنظام إدارة محتوى (CMS) سهل الاستخدام، يتيح لفريقك إضافة الأخبار، الخدمات، أو تحديث البيانات دون الحاجة لخبرة برمجية."
                        }
                    ]}
                />

                {/* Section 13: Call to Action */}
                <div className="mt-48 text-center bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-[4rem] p-12 md:p-32">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter">
                            هل موقع شركتك <br />
                            <span className="text-indigo-600 dark:text-indigo-500">يعكس مستواها الحقيقي؟</span>
                        </h2>
                        <p className="text-2xl text-gray-400 font-bold mb-16 leading-relaxed">
                            ابدأ اليوم بتحليل حضورك الرقمي المؤسسي. سنقوم برسم مسار التفوق الذي يليق بحجم وطموح شركتك.
                        </p>
                        <ServiceForm serviceName="بناء المواقع المؤسسية (Corporate)" questions={corporateQuestions} />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CorporateWebPage;
