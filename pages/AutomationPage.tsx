import React from 'react';
import { Zap, Bot, Database, MessageSquare, Workflow, Settings, CheckCircle2, Cpu, Sparkles, LineChart, Clock, AlertTriangle, Network, Combine, Shield, Activity, FileText, BarChart, Code2, Repeat, Globe, DollarSign, UserCheck, UserPlus, Search, TrendingUp, Target, BarChart3, Users, X } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import ServiceForm from '../components/ServiceForm';
import FAQ from '../components/FAQ';

const AutomationPage = () => {
    const automationQuestions = [
        { label: 'ما هي أكثر عملية تستهلك وقت فريقك حالياً؟', type: 'textarea' as const, placeholder: 'مثلاً: إدخال البيانات، متابعة الطلبات، الردود المتكررة...' },
        { label: 'هل تستخدم أدوات أتمتة حالياً (Zapier/n8n)؟', type: 'radio' as const, options: ['نعم، أستخدم n8n', 'نعم، أستخدم Zapier/Make', 'لا، كل شيء يدوي'], required: true },
        { label: 'البرامج التي تريد ربطها ببعضها', type: 'text' as const, placeholder: 'مثلاً: Shopify + Google Sheets + WhatsApp' },
        { label: 'ما هي النتيجة المرجوة من الأتمتة؟', type: 'select' as const, options: ['تقليل الأخطاء البشرية', 'تسريع وقت التنفيذ', 'توفير التكاليف', 'إدارة حجم أكبر من العمليات'], required: true },
        { label: 'الميزانية التقريبية لحلول الأتمتة', type: 'text' as const, placeholder: 'مثلاً: 2000 - 4000 ريال' }
    ];

    return (
        <main className="pt-32 pb-32 bg-white dark:bg-black transition-colors duration-500 overflow-hidden">
            <section className="px-6 md:px-12 max-w-[1400px] mx-auto">
                {/* Section 1: Problem Awareness */}
                <div className="mb-48">
                    <SectionHeader
                        tag="مرآة الفعالية"
                        title="الوقت لا يُهدر في العمل… <br/> <span className='text-purple-600'>بل بين الأعمال.</span>"
                        subtitle="معظم الشركات لا تعاني من نقص أدوات، بل من انقطاع تدفق البيانات وصعوبة العمليات المتكررة."
                        icon={<Clock className="w-5 h-5 text-purple-600" />}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
                        {[
                            { t: "إدخال يدوي", d: "تكرار إدخال نفس البيانات في عدة برامج.", i: <Repeat className="text-red-500" /> },
                            { t: "أنظمة صامتة", d: "برامجك لا تتحدث مع بعضها البعض.", i: <Combine className="text-orange-500" /> },
                            { t: "أخطاء مكلفة", d: "الهفوات البشرية التي تستنزف الأرباح.", i: <AlertTriangle className="text-yellow-500" /> },
                            { t: "جزر معزولة", d: "فرق تعمل دون مزامنة فورية للمعلومات.", i: <Users className="text-blue-500" /> },
                            { t: "بيانات متأخرة", d: "قرارات تُبنى على أرقام من الأمس.", i: <Activity className="text-emerald-500" /> }
                        ].map((item, i) => (
                            <div key={i} className="bento-card p-8 bg-gray-50 dark:bg-[#151516] border border-black/5 dark:border-white/10 group">
                                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-white/5 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                    {item.i}
                                </div>
                                <h4 className="text-lg font-black text-gray-900 dark:text-white mb-2">{item.t}</h4>
                                <p className="text-gray-500 dark:text-gray-400 font-bold text-sm leading-relaxed">{item.d}</p>
                            </div>
                        ))}
                    </div>
                    <p className="mt-12 text-2xl text-gray-400 font-bold text-center">كل عملية يدوية متكررة هي نزيف صامت في الوقت والمال.</p>
                </div>

                {/* Section 2: Reframing */}
                <div className="mb-48 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="text-start">
                        <SectionHeader
                            tag="التحول الذهني"
                            title="الأتمتة ليست اختصار وقت… <br/> <span className='text-indigo-500'>بل إعادة تصميم العمل.</span>"
                            subtitle="نحن لا نستخدم n8n لربط تطبيقين فقط، بل لبناء نظام عمليات ذكي يفهم، يقرر، ويُنتج أثراً."
                            icon={<Sparkles className="w-5 h-5 text-indigo-500" />}
                        />
                        <div className="mt-10 space-y-4">
                            <div className="flex items-center gap-4 text-xl font-bold text-red-500 opacity-50">
                                <X size={20} />
                                <span>❌ ما الأداة؟</span>
                            </div>
                            <div className="flex items-center gap-4 text-2xl font-black text-green-500">
                                <CheckCircle2 size={24} />
                                <span>✅ لماذا تُنفذ هذه الخطوة أصلًا؟</span>
                            </div>
                        </div>
                    </div>
                    <div className="bento-card p-12 bg-indigo-500/5 relative overflow-hidden text-start border-indigo-500/10">
                        <div className="space-y-6 relative z-10">
                            {[
                                { q: "يفهم متى يبدأ", a: "Triggers دقيقة" },
                                { q: "يعرف ماذا يفعل", a: "خطوات منطقية" },
                                { q: "يقرر أين يرسل", a: "توزيع ذكي" },
                                { q: "يُنتج أثراً", a: "نتائج ملموسة" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-6 group hover:translate-x-2 transition-transform duration-500">
                                    <span className="text-sm font-black text-indigo-500/50">0{i + 1}.</span>
                                    <span className="text-xl font-bold text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{item.q}</span>
                                    <div className="h-px flex-grow bg-indigo-500/10"></div>
                                    <span className="text-xs font-black text-indigo-500 bg-indigo-500/10 px-3 py-1 rounded-full uppercase tracking-widest">{item.a}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Section 3: Why n8n? */}
                <div className="mb-48">
                    <SectionHeader
                        tag="الأداة المختارة"
                        title="لماذا <span className='text-orange-500'>n8n</span>؟ <br/> <span className='text-gray-400'>أتمتة مرنة بلا قيود.</span>"
                        subtitle="نختار n8n لأنه مفتوح المصدر، قابل للاستضافة الذاتية، ويسمح بمنطق شرطي وقرارات متقدمة."
                        icon={<Code2 className="w-5 h-5 text-orange-500" />}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-start mt-16">
                        {[
                            { t: "مفتوح المصدر (Open Source)", d: "تحكم كامل بالكود بلا قيود المنصات المغلقة.", i: <Globe className="text-orange-500" /> },
                            { t: "استضافة ذاتية (Self-hosting)", d: "خصوصية مطلقة لبياناتك بعيداً عن السحابة العامة.", i: <Shield className="text-orange-500" /> },
                            { t: "مرونة الـ Workflows", d: "بناء مسارات عمل معقدة تدعم مئات التكاملات.", i: <Workflow className="text-orange-500" /> },
                            { t: "منطق شرطي وقرارات", d: "ذكاء اصطناعي وقرارات برمجية داخل المسار الواحد.", i: <Zap className="text-orange-500" /> },
                            { t: "تحكم لا اعتماد", d: "مناسب للشركات التي تريد الاستقلالية والنمو المستدام.", i: <Settings className="text-orange-500" /> }
                        ].map((item, i) => (
                            <div key={i} className="bento-card p-10 bg-gray-50 dark:bg-[#0c0c0d] border border-black/5 dark:border-white/10 hover:border-orange-500/30 transition-all">
                                <div className="mb-6">{item.i}</div>
                                <h4 className="text-2xl font-black text-gray-900 dark:text-white mb-4">{item.t}</h4>
                                <p className="text-gray-500 dark:text-gray-400 text-lg font-medium leading-relaxed">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 4: Methodology */}
                <div className="mb-48 p-12 md:p-24 bento-card relative overflow-hidden bg-gray-50 dark:bg-black border border-black/5 dark:border-white/10 text-start">
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,_rgba(168,85,247,0.05)_0%,_transparent_50%)]"></div>
                    <SectionHeader
                        tag="منهجيتنا"
                        title="الأتمتة تبدأ من العملية <br/> <span className='text-purple-500'>لا من الأداة.</span>"
                        subtitle="نبدأ كل مشروع عبر تحليل العمليات الحالية (Process Mapping) لتحديد نقاط الهدر."
                        icon={<Search className="w-5 h-5 text-purple-500" />}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
                        {[
                            { t: "تحليل العمليات", d: "أين يبدأ العمل؟ أين يتوقف؟ أين يُعاد؟" },
                            { t: "تحديد الهدر", d: "كشف ثغرات البطء والأخطاء البشرية." },
                            { t: "إعادة التصميم", d: "تحويل المسار المعقد إلى Workflow ذكي." },
                            { t: "التنفيذ الرقمي", d: "بناء المسار داخل n8n بـ Trigger ومنطق ونتائج." }
                        ].map((step, i) => (
                            <div key={i} className="p-8 bg-white dark:bg-white/5 rounded-3xl border border-black/5 dark:border-white/5 relative group hover:bg-purple-500/5 transition-colors">
                                <div className="text-4xl font-black text-purple-500/10 mb-4">{i + 1}.</div>
                                <h5 className="text-xl font-black text-gray-900 dark:text-white mb-2">{step.t}</h5>
                                <p className="text-gray-500 dark:text-gray-400 font-bold text-sm">{step.d}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 5: Advanced Engineering */}
                <div className="mb-48 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="text-start">
                        <SectionHeader
                            tag="هندسة Workflows"
                            title="ما نبنيه ليس سيناريو… <br/> <span className='text-blue-500'>بل نظام مؤسسي مستقر.</span>"
                            subtitle="نُنشئ أنظمة أتمتة تشمل Webhooks، API Integrations، و Error Handling لضمان الاستدامة."
                            icon={<Cpu className="w-5 h-5 text-blue-500" />}
                        />
                        <div className="grid grid-cols-2 gap-4 mt-12">
                            {['If / Switch', 'Loop & Pagination', 'Webhooks', 'API Integrations', 'Error Handling', 'Logging & Alerts'].map((tech, i) => (
                                <div key={i} className="p-4 bg-blue-500/5 border border-blue-500/10 rounded-2xl text-blue-500 text-xs font-black text-center uppercase tracking-widest">
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bento-card p-12 bg-blue-500/5 h-[400px] flex items-center justify-center border-blue-500/10">
                        <div className="relative">
                            <Network size={160} className="text-blue-500/20" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 bg-blue-500 rounded-full animate-ping opacity-20"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 6: Use Cases */}
                <div className="mb-48">
                    <SectionHeader
                        tag="حالات استخدام"
                        title="أين تصنع الأتمتة <br/> <span className='text-emerald-500'>فرقاً حقيقياً؟</span>"
                        subtitle="نُطبق n8n في أعصب مفاصل العمل لرفع الإنتاجية الفورية تحت ضغط العمل."
                        icon={<BarChart3 className="w-5 h-5 text-emerald-500" />}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        {[
                            {
                                t: "المبيعات",
                                d: "نقل Leads تلقائياً، تصنيف العملاء، وتحديث CRM لحظي.",
                                c: "text-purple-500",
                                i: (
                                    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M12 2L2 7L12 12L22 7L12 2Z" className="stroke-purple-600 dark:stroke-purple-400" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M2 17L12 22L22 17" className="stroke-purple-400/50 dark:stroke-purple-500/50" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M2 12L12 17L22 12" className="stroke-purple-400/50 dark:stroke-purple-500/50" strokeLinecap="round" strokeLinejoin="round" />
                                        <circle cx="12" cy="12" r="3" className="fill-purple-500/20 stroke-none" />
                                    </svg>
                                )
                            },
                            {
                                t: "التسويق",
                                d: "ربط الإعلانات بالـ CRM وإرسال حملات مخصصة مبنية على السلوك.",
                                c: "text-orange-500",
                                i: (
                                    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
                                        <circle cx="12" cy="12" r="10" className="stroke-orange-500/20" />
                                        <path d="M12 8V12L15 15" className="stroke-orange-500" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 2V4" className="stroke-orange-500" strokeLinecap="round" />
                                        <circle cx="12" cy="12" r="6" className="stroke-orange-500" />
                                        <path d="M22 12H20" className="stroke-orange-500/50" strokeLinecap="round" />
                                        <path d="M4 12H2" className="stroke-orange-500/50" strokeLinecap="round" />
                                    </svg>
                                )
                            },
                            {
                                t: "المالية",
                                d: "أتمتة الفواتير، التقارير المالية، وإشعارات الدفع التلقائية.",
                                c: "text-emerald-500",
                                i: (
                                    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
                                        <rect x="2" y="5" width="20" height="14" rx="2" className="stroke-emerald-500" />
                                        <path d="M2 10H22" className="stroke-emerald-500/30" />
                                        <path d="M7 15H7.01" className="stroke-emerald-500" strokeWidth="3" strokeLinecap="round" />
                                        <path d="M11 15H13" className="stroke-emerald-500" strokeLinecap="round" />
                                        <circle cx="18" cy="15" r="2" className="fill-emerald-500/20 stroke-none" />
                                    </svg>
                                )
                            },
                            {
                                t: "الدعم",
                                d: "إدارة التذاكر وتصعيد الحالات الحرجة آلياً دون تأخير.",
                                c: "text-blue-500",
                                i: (
                                    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M21 11.5C21.0039 12.8199 20.7811 14.1283 20.344 15.3463C19.9069 16.5644 19.2636 17.6675 18.45 18.5931M5.54999 18.5931C4.73636 17.6675 4.09311 16.5644 3.65597 15.3463C3.21883 14.1283 2.99609 12.8199 3 11.5C3 6.52944 7.02944 2.5 12 2.5C16.9706 2.5 21 6.52944 21 11.5Z" className="stroke-blue-500" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M9 13H15" className="stroke-blue-500" strokeLinecap="round" />
                                        <path d="M12 10V13" className="stroke-blue-500" strokeLinecap="round" />
                                    </svg>
                                )
                            },
                            {
                                t: "الإدارة",
                                d: "Dashboards حية وتنبيهات ذكية لحظية للنتائج.",
                                c: "text-indigo-500",
                                i: (
                                    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
                                        <rect x="3" y="3" width="7" height="9" rx="1" className="stroke-indigo-500" />
                                        <rect x="14" y="3" width="7" height="5" rx="1" className="stroke-indigo-500/70" />
                                        <rect x="14" y="12" width="7" height="9" rx="1" className="stroke-indigo-500" />
                                        <rect x="3" y="16" width="7" height="5" rx="1" className="stroke-indigo-500/70" />
                                    </svg>
                                )
                            },
                            {
                                t: "الذكاء الاصطناعي",
                                d: "دمج AI APIs لتحليل النصوص أو الصور داخل الـ Workflow.",
                                c: "text-fuchsia-500",
                                i: (
                                    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" className="stroke-fuchsia-500/20" />
                                        <path d="M12 6V18" className="stroke-fuchsia-500" strokeLinecap="round" />
                                        <path d="M6 12H18" className="stroke-fuchsia-500" strokeLinecap="round" />
                                        <path d="M9 9L15 15" className="stroke-fuchsia-500" strokeLinecap="round" />
                                        <path d="M15 9L9 15" className="stroke-fuchsia-500" strokeLinecap="round" />
                                        <circle cx="12" cy="12" r="2" className="fill-fuchsia-500 stroke-none animate-pulse" />
                                    </svg>
                                )
                            }
                        ].map((item, i) => (
                            <div key={i} className="bento-card p-10 bg-white dark:bg-[#0a0a0b] border border-black/5 dark:border-white/10 group hover:-translate-y-2 transition-all hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-none">
                                <div className={`w-16 h-16 rounded-2xl bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500 ${item.c}`}>
                                    {item.i}
                                </div>
                                <h4 className="text-2xl font-black text-gray-900 dark:text-white mb-4 group-hover:text-current transition-colors">{item.t}</h4>
                                <p className="text-gray-500 dark:text-gray-400 font-bold leading-relaxed">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 7: Security & Reliability */}
                <div className="mb-48 p-12 md:p-24 bento-card relative overflow-hidden bg-black text-white border-none">
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,_rgba(37,99,235,0.1)_0%,_transparent_50%)]"></div>
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="text-start">
                            <SectionHeader
                                tag="الأمان والاعتمادية"
                                title="الأتمتة دون أمان <br/> <span className='text-blue-400'>خطر تشغيلي.</span>"
                                subtitle="الأتمتة الجيدة لا تُرى، لكنها يجب أن تكون موثوقة ومحكمة دائماً."
                                icon={<Shield className="w-5 h-5 text-blue-400" />}
                            />
                            <div className="mt-12 grid grid-cols-2 gap-4">
                                {['Self-hosted', 'Data Encryption', 'Access Control', 'System Logs'].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 font-bold text-gray-400">
                                        <CheckCircle2 size={16} className="text-blue-400" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-6">
                            <p className="text-2xl font-bold leading-relaxed opacity-80">نُنفذ الأتمتة مع استضافة ذاتية، تشفير كامل، ونسخ احتياطي للمسارات لضمان استمرارية العمل.</p>
                        </div>
                    </div>
                </div>

                {/* Section 8: Integrations */}
                <div className="mb-48 text-center">
                    <SectionHeader
                        tag="التكامل"
                        title="لا نغير أدواتك… <br/> <span className='text-purple-500'>نجعلها تعمل معاً.</span>"
                        subtitle="نربط n8n مع الـ CRM، أنظمة ERP، قواعد البيانات، والذكاء الاصطناعي ليكون لديك مصدر حقيقة موحد."
                        icon={<Combine className="w-5 h-5 text-purple-500" />}
                    />
                    <div className="flex flex-wrap justify-center gap-4 mt-16 max-w-4xl mx-auto">
                        {['CRM Sync', 'ERP Flows', 'E-commerce Hub', 'Database Links', 'AI APIs'].map((hub, i) => (
                            <div key={i} className="px-8 py-4 bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl font-black text-purple-500 shadow-sm animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}>
                                {hub}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 9: ROI & Measurement */}
                <div className="mb-48 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="text-start">
                        <SectionHeader
                            tag="القياس والعائد"
                            title="الأتمتة يجب أن <br/> <span className='text-green-500'>تُبرر نفسها.</span>"
                            subtitle="نحن نقيس أثر الأتمتة على أرقامك الحقيقية لضمان جدوى الاستثمار."
                            icon={<DollarSign className="w-5 h-5 text-green-500" />}
                        />
                        <div className="space-y-6 mt-12">
                            {['الوقت الموفر شهرياً', 'تقليل نسبة الأخطاء', 'سرعة التنفيذ (Cycle Time)', 'التكلفة قبل وبعد'].map((text, i) => (
                                <div key={i} className="flex items-center gap-4 text-xl font-black text-gray-700 dark:text-gray-300">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span>{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bento-card p-12 bg-green-500/5 border-green-500/10 flex items-center justify-center">
                        <TrendingUp size={120} className="text-green-500 opacity-20" />
                    </div>
                </div>

                {/* Section 10: Proof & Impact */}
                <div className="mb-48 bento-card p-12 md:p-24 bg-gray-50 dark:bg-[#0c0c0d] border border-black/5 dark:border-white/10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                        {[
                            { v: "65%", l: "تقليل العمل اليدوي", c: "text-purple-600" },
                            { v: "80%", l: "خفض الأخطاء التشغيلية", c: "text-blue-600" },
                            { v: "Secs", l: "تنفيذ بدلاً من ساعات", c: "text-emerald-600" },
                            { v: "$120k+", l: "وفر تشغيلي سنوي", c: "text-orange-600" }
                        ].map((stat, i) => (
                            <div key={i} className="text-center group">
                                <div className={`text-5xl md:text-7xl font-black mb-4 tracking-tighter ${stat.c} group-hover:scale-110 transition-transform`}>{stat.v}</div>
                                <div className="text-sm font-black text-gray-500 uppercase tracking-widest">{stat.l}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 11: Whom is this for? */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-48">
                    <div className="bento-card p-12 bg-green-500/5 border-green-500/10">
                        <h4 className="text-2xl font-black text-green-600 mb-8 flex items-center gap-3">
                            <CheckCircle2 /> هذه الخدمة لك إذا:
                        </h4>
                        <ul className="space-y-6 text-start">
                            {[
                                "شركتك تعاني من تعقيد العمليات وتداخل المهام.",
                                "تستخدم أدوات كثيرة غير مترابطة تستنزف الوقت.",
                                "تريد التحكم المطلق ببياناتك وأتمتة قابلة للتوسع."
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
                                "تريد حلولاً جاهزة معلبة بلا أي تحليل لعملياتك.",
                                "لا تهتم بالتحليل وتبحث عن \"زر سحري\" للنمو.",
                                "لا تريد الاستثمار في بناء بنية تحتية مستدامة."
                            ].map((text, i) => (
                                <li key={i} className="flex gap-4 text-lg font-bold text-gray-600 dark:text-gray-400">
                                    <div className="shrink-0 w-2 h-2 bg-red-500 rounded-full mt-3"></div>
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* FAQ Section */}
                <FAQ
                    items={[
                        {
                            question: "لماذا n8n هو الأنسب للشركات الكبيرة؟",
                            answer: "لأنه يمنحك الاستقلالية الكاملة، فهو مفتوح المصدر وقابل للاستضافة ذاتياً، مما يعني أن بياناتك لا تخرج عن نطاق سيطرتك، بالإضافة لمرونته في التعامل مع أعقد سيناريوهات الـ Logic."
                        },
                        {
                            question: "هل الأتمتة تعني الاستغناء عن الموظفين؟",
                            answer: "بالعكس، الأتمتة تحرر موظفيك من المهام اليدوية المملة والمتكررة، ليتفرغوا للعمل الإبداعي والاستراتيجي الذي ينمي الشركة فعلياً."
                        },
                        {
                            question: "كيف نبدأ عملية الأتمتة؟",
                            answer: "نبدأ بجلسة تحليل عميقة لعملياتك الحالية، نرسم مسارات العمل، نحدد نقاط الهدر، ثم نصمم الـ Workflow الأمثل وننفذه عبر n8n."
                        }
                    ]}
                />

                {/* Section 12: Call to Action */}
                <div className="mt-48 text-center bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-[4rem] p-12 md:p-32">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter">
                            هل تعمل أنظمتك معك… <br />
                            <span className="text-purple-600 dark:text-purple-500">أم ضدك؟</span>
                        </h2>
                        <p className="text-2xl text-gray-400 font-bold mb-16 leading-relaxed">
                            ابدأ اليوم بتحليل عملياتك الذي يشمل رسم المسارات الحالية، تحديد فرص الأتمتة، وتقدير العائد.
                        </p>
                        <ServiceForm serviceName="أتمتة العمليات n8n" questions={automationQuestions} />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AutomationPage;
