import React from 'react';
import { ShoppingBag, ShoppingCart, Rocket, BarChart3, Layers, Zap, MousePointer2, Gauge, Search, Share2, Cpu, Globe, CheckCircle2, X, MessageSquare, TrendingUp, ShieldCheck, CreditCard, RefreshCw, LineChart, Workflow } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import ServiceForm from '../components/ServiceForm';
import FAQ from '../components/FAQ';

const WebDevPage = () => {
    const ecomQuestions = [
        { label: 'ما هو النوع المبدئي لمتجرك؟', type: 'select' as const, options: ['متجر Shopify جديد', 'تطوير متجر Shopify قائم', 'منصة دروبشيبينغ مخصصة', 'متجر على منصة أخرى (سلة/زد)', 'أخرى'], required: true },
        { label: 'هل لديك هوية بصرية جاهزة للمتجر؟', type: 'radio' as const, options: ['نعم، جاهزة', 'لا، أحتاج تصميمها معكم'], required: true },
        { label: 'عدد المنتجات المتوقع عرضها', type: 'text' as const, placeholder: 'مثلاً: 50 منتج' },
        { label: 'أنظمة الربط المطلوبة', type: 'select' as const, options: ['ربط CRM المبيعات', 'ربط بوابات دفع دولية', 'ربط شركات شحن وأتمتة', 'أتمتة المخزون بالكامل', 'لا أحتاج حالياً'], required: false },
        { label: 'الهدف الرئيسي للمتجر في أول 6 أشهر', type: 'select' as const, options: ['تحقيق أول 100 عملية بيع', 'التوسع لقاعدة عملاء أكبر', 'بناء تجربة براند فاخرة'], required: true },
        { label: 'ميزانية تطوير النظام التقني', type: 'text' as const, placeholder: 'مثلاً: 10000 - 20000 ريال' }
    ];

    return (
        <main className="pt-32 pb-32 bg-white dark:bg-black transition-colors duration-500 overflow-hidden">
            <section className="px-6 md:px-12 max-w-[1400px] mx-auto">
                {/* Section 1: Problem Awareness */}
                <SectionHeader
                    tag="آلات البيع الرقمية"
                    title="معظم المتاجر لا تفشل بسبب المنتجات... <br/> <span className='text-blue-500'>بل بسبب التجربة.</span>"
                    subtitle="آلاف المتاجر تُطلق كل عام، والقليل فقط ينجح. المتجر الذي لا يقنع في اللحظة الحرجة... يخسر مهما كان الإعلان قوياً."
                    icon={<ShoppingCart className="w-5 h-5 text-blue-500" />}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
                    {[
                        { t: "تجربة شراء معقدة", d: "المشتري يغادر فوراً إذا شعر بأي ارتباك أو غموض.", i: <X className="text-red-500" /> },
                        { t: "بطء الموقع", d: "كل ثانية تأخير تعني خسارة مباشرة في المبيعات.", i: <Gauge className="text-red-500" /> },
                        { t: "ثقة ضعيفة", d: "عدم وجود عناصر طمأنينة يقتل الرغبة في الدفع.", i: <ShieldCheck className="text-red-500" /> },
                        { t: "نظام دفع متعثر", d: "تعقيد صفحة الدفع (Checkout) هو العدو الأول لمعدل التحويل.", i: <CreditCard className="text-red-500" /> }
                    ].map((item, i) => (
                        <div key={i} className="bento-card p-8 bg-gray-50 dark:bg-[#151516] hover:border-red-500/30 transition-all group">
                            <div className="w-12 h-12 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
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
                            title="نحن لا نبني متجراً... <br/> <span className='text-purple-500'>نحن نبني آلة بيع.</span>"
                            subtitle="المتجر الناجح يجب أن يفهم نفسية المشتري، يقلل التردد، ويسرّع القرار ليزيد قيمة السلة ويعيد العميل مرة أخرى."
                            icon={<Zap className="w-5 h-5 text-purple-500" />}
                        />
                    </div>
                    <div className="bento-card p-12 bg-gray-50 dark:bg-[#0c0c0d] relative overflow-hidden text-start">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl"></div>
                        <div className="space-y-8 relative z-10">
                            <div className="flex items-center gap-6 opacity-40 grayscale">
                                <span className="text-sm font-black text-gray-400">❌ عقلية الكم:</span>
                                <span className="text-xl font-bold text-gray-600">كم منتجاً تريد؟</span>
                            </div>
                            <div className="h-px bg-gray-200 dark:bg-white/5"></div>
                            <div className="flex items-center gap-6">
                                <span className="text-sm font-black text-purple-500">✅ عقلية التاجر:</span>
                                <span className="text-2xl font-black text-gray-900 dark:text-white leading-tight">لماذا يشتري العميل هنا وليس عند المنافس؟</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 3: Ecommerce Methodology */}
                <div className="mb-32">
                    <SectionHeader
                        tag="منهجية البناء"
                        title="كل متجر يبدأ <br/> <span className='text-gray-400'>من سلوك الشراء.</span>"
                        subtitle="نبدأ بتحليل نموذج العمل، الهوامش الربحية، ودورة الشراء قبل البدء في التصميم."
                        icon={<Workflow className="w-5 h-5 text-blue-500" />}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-start">
                        {[
                            { t: "تحليل نموذج العمل", d: "نوع المنتجات، الهوامش، ودورة حياة العميل المتوقعة." },
                            { t: "تحليل سلوك العميل", d: "دراسة دوافع الشراء، نقاط التردد، والاعتراضات المحتملة." },
                            { t: "تصميم رحلة الشراء", d: "من الدخول إلى التصفح ثم المقارنة والقرار وأخيراً الدفع السلس." }
                        ].map((item, i) => (
                            <div key={i} className="bento-card p-10 bg-gray-50 dark:bg-[#0a0a0b] border border-black/5 dark:border-white/10">
                                <div className="text-blue-500 font-black mb-4">الخطوة {i + 1}</div>
                                <h4 className="text-2xl font-black text-gray-900 dark:text-white mb-4">{item.t}</h4>
                                <p className="text-gray-500 dark:text-gray-400 text-lg font-medium leading-relaxed">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 4: UX for Ecommerce */}
                <div className="mb-32 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    <div className="lg:col-span-12">
                        <div className="bento-card p-12 bg-gray-50 dark:bg-black border border-black/5 dark:border-white/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,_rgba(37,99,235,0.02)_0%,_transparent_50%)]"></div>
                            <div className="flex flex-col lg:flex-row gap-16 items-center">
                                <div className="lg:w-1/2 text-start relative z-10">
                                    <SectionHeader
                                        tag="هندسة التجربة"
                                        title="كل نقرة إما تبيع... <br/> <span className='text-blue-500'>أو تُبعد العميل.</span>"
                                        subtitle="نصمم التجربة لتقليل الخيارات المربكة، إبراز عناصر الثقة، وتوجيه المستخدم نحو 'إتمام الطلب'."
                                        icon={<MousePointer2 className="w-5 h-5 text-blue-500" />}
                                    />
                                </div>
                                <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                                    {[
                                        "تصنيفات وبحث داخلي ذكي.",
                                        "مراجعات وتقييمات لبناء الثقة.",
                                        "رسائل طمأنينة في كل مرحلة.",
                                        "عناصر توجيه (CTAs) مدروسة."
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

                {/* Section 5: Product Page Engineering */}
                <div className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="text-start">
                        <SectionHeader
                            tag="هندسة صفحات المنتج"
                            title="صفحة المنتج هي <br/> <span className='text-orange-500'>ساحة القرار.</span>"
                            subtitle="نصمم صفحات تخدم الفهم السريع، إزالة الشك، وتحفيز الإجراء عبر وصف مبني على الفائدة وصور عالية الجودة."
                            icon={<ShoppingBag className="w-5 h-5 text-orange-500" />}
                        />
                        <div className="grid gap-4 mt-12 text-start">
                            {[
                                { t: "وصف مبني على الفائدة", d: "التركيز على القيمة التي يحصل عليها العميل." },
                                { t: "عروض زيادة السلة (Upsells)", d: "زيادة قيمة الطلب عبر الحزم والعروض التكميلية." },
                                { t: "إثبات اجتماعي قوي", d: "عرض المراجعات والتقييمات بطريقة مقنعة." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-6 bg-gray-50 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/5">
                                    <div className="shrink-0 w-2 h-2 bg-orange-500 rounded-full mt-3"></div>
                                    <div>
                                        <h5 className="font-black text-gray-900 dark:text-white text-xl mb-1">{item.t}</h5>
                                        <p className="text-gray-500 dark:text-gray-400 font-bold text-sm tracking-tight">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative group perspective-1000">
                        <div className="absolute inset-0 bg-orange-500/10 blur-[100px] rounded-full -z-10 group-hover:bg-orange-500/20 transition-all duration-700"></div>
                        <div className="bento-card p-4 bg-white/50 dark:bg-black/20 border-orange-500/10 backdrop-blur-md relative overflow-hidden group-hover:rotate-1 group-hover:scale-[1.02] transition-all duration-500">
                            <img
                                src="/assets/ecommerce/product-page-demo.jpg"
                                alt="هيكلة صفحة المنتج المثالية"
                                className="w-full h-auto rounded-2xl shadow-lg border border-black/5 dark:border-white/5"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent pointer-events-none rounded-2xl"></div>
                        </div>
                    </div>
                </div>

                {/* Section 6: Checkout Optimization */}
                <div className="mb-32 p-12 md:p-24 bento-card relative overflow-hidden bg-gray-50 dark:bg-black border border-black/5 dark:border-white/10 transition-colors">
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,_rgba(37,99,235,0.05)_0%,_transparent_50%)]"></div>
                    <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2 text-start">
                            <SectionHeader
                                tag="تهيئة التحويل"
                                title="كل خطوة إضافية <br/> <span className='text-blue-500'>تقلل المبيعات.</span>"
                                subtitle="نصمم نظام إتمام طلب (Checkout) قصير، واضح، وسريع لتقليل التخلي عن السلة وضمان نجاح البيع."
                                icon={<RefreshCw className="w-5 h-5 text-blue-500" />}
                            />
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                            {[
                                { l: "خطوات الدفع", v: "صفحة واحدة" },
                                { l: "دعم Apple/G Pay", v: "مفعل" },
                                { l: "تقليل الارتداد", v: "٤٠٪-" },
                                { l: "سرعة العملية", v: "عالية" }
                            ].map((stat, i) => (
                                <div key={i} className="p-6 bg-white dark:bg-white/5 rounded-3xl border border-black/5 dark:border-white/5 text-center">
                                    <div className="text-xl font-black text-gray-900 dark:text-white mb-1">{stat.v}</div>
                                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{stat.l}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Section 7: Technical Performance */}
                <div className="mb-32 text-center relative">
                    <div className="absolute inset-0 bg-blue-600/5 blur-[150px]"></div>
                    <SectionHeader
                        tag="الأداء التقني"
                        title="الأداء هو <br/> <span className='text-blue-500'>شرط البيع.</span>"
                        subtitle="نطور متاجر فائقة السرعة، متوافقة تماماً مع الجوال، ومجهزة بمؤشرات الويب الأساسية (Core Web Vitals) لضمان أفضل ثبات."
                        icon={<Gauge className="w-5 h-5 text-blue-500" />}
                    />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
                        {['سرعة < 1 ثانية', 'أولوية للجوال', 'أمان مؤسسي', 'مهيأ للسيو'].map((item, i) => (
                            <div key={i} className="px-6 py-3 bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-xl font-bold text-gray-500 dark:text-gray-400 text-sm">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 8: Ecommerce SEO */}
                <div className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="bento-card p-12 bg-blue-500/5 border-blue-500/10 text-start">
                        <SectionHeader
                            tag="سيو المتاجر"
                            title="المتجر الذي لا يظهر <br/> <span className='text-blue-500'>لا يبيع.</span>"
                            subtitle="نُدمج SEO داخل البنية: هيكلة فئات ذكية، Schema للمنتجات، وصفحات قابلة للفهرسة منذ اللحظة الأولى."
                            icon={<Search className="w-5 h-5 text-blue-500" />}
                        />
                    </div>
                    <div className="space-y-6">
                        {[
                            "تحسين الظهور لاسم المنتجات (Product SEO).",
                            "دعم معايير EEAT لبناء سلطة المتجر.",
                            "هيكلة عناوين URL نظيفة وسهلة الزحف."
                        ].map((text, i) => (
                            <div key={i} className="flex items-center gap-4 text-lg font-bold text-gray-600 dark:text-gray-400 text-start">
                                <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                                <span>{text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 9: Integration & Automation */}
                <div className="mb-32 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-12">
                        <div className="bento-card p-12 bg-purple-600/5 text-start border-purple-500/10 flex flex-col lg:flex-row gap-12 items-center">
                            <div className="lg:w-1/2">
                                <SectionHeader
                                    tag="التكامل والأتمتة"
                                    title="المتجر مركز عمليات <br/> <span className='text-purple-500'>لا مجرد واجهة.</span>"
                                    subtitle="نربط متجرك مع بوابات الدفع، شركات الشحن، إدارة المخزون، والـ CRM ليصبح منصة نمو مستدام."
                                    icon={<Share2 className="w-5 h-5 text-purple-500" />}
                                />
                            </div>
                            <div className="lg:w-1/2 flex flex-wrap gap-4">
                                {['مزامنة المخزون', 'أتمتة الشحن', 'ربط CRM', 'بوابات الدفع'].map((hub, i) => (
                                    <div key={i} className="p-4 px-8 bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-2xl font-black text-purple-500 text-sm shadow-sm">
                                        {hub}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 10: Product Entry Services */}
                <div className="mb-32">
                    <SectionHeader
                        tag="خدمات إدخال المنتجات"
                        title="منتجاتك جاهزة للبيع <br/> <span className='text-emerald-500'>بشكل احترافي.</span>"
                        subtitle="نقدم خدمات شاملة لإدخال وإدارة منتجات متجرك بأعلى معايير الجودة والاحترافية لضمان تجربة تسوق مميزة."
                        icon={<Layers className="w-5 h-5 text-emerald-500" />}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                        {[
                            {
                                t: "إدخال بيانات المنتجات",
                                d: "إدخال شامل لجميع تفاصيل المنتجات: الأسماء، الأوصاف، الأسعار، المخزون، والمواصفات التقنية.",
                                i: <ShoppingBag className="text-emerald-500" />
                            },
                            {
                                t: "تحرير صور المنتجات",
                                d: "معالجة احترافية للصور: إزالة الخلفيات، تعديل الألوان، وتحسين الجودة لعرض مثالي.",
                                i: <Cpu className="text-blue-500" />
                            },
                            {
                                t: "كتابة أوصاف تسويقية",
                                d: "صياغة أوصاف جذابة ومقنعة تبرز مميزات المنتج وتحفز على الشراء.",
                                i: <MessageSquare className="text-purple-500" />
                            },
                            {
                                t: "تصنيف وتنظيم المنتجات",
                                d: "هيكلة ذكية للفئات والتصنيفات لتسهيل التصفح وتحسين تجربة المستخدم.",
                                i: <Layers className="text-orange-500" />
                            },
                            {
                                t: "تحسين SEO المنتجات",
                                d: "تهيئة المنتجات لمحركات البحث: عناوين محسنة، كلمات مفتاحية، وروابط صديقة.",
                                i: <Search className="text-cyan-500" />
                            },
                            {
                                t: "إضافة المتغيرات",
                                d: "إعداد خيارات المنتجات المتعددة: الألوان، المقاسات، والإصدارات المختلفة.",
                                i: <RefreshCw className="text-pink-500" />
                            },
                            {
                                t: "نقل المنتجات",
                                d: "نقل وترحيل المنتجات بين المنصات (سلة، زد، شوبيفاي) مع الحفاظ على جميع البيانات.",
                                i: <Globe className="text-indigo-500" />
                            },
                            {
                                t: "إدارة المخزون",
                                d: "متابعة وتحديث كميات المخزون بشكل دوري وتنبيهات النفاد التلقائية.",
                                i: <Rocket className="text-amber-500" />
                            }
                        ].map((item, i) => (
                            <div key={i} className="bento-card p-8 bg-gray-50 dark:bg-[#151516] hover:border-emerald-500/30 transition-all group text-start">
                                <div className="w-14 h-14 bg-white dark:bg-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                    {item.i}
                                </div>
                                <h4 className="text-xl font-black text-gray-900 dark:text-white mb-3">{item.t}</h4>
                                <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed text-sm">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 11: Continuous Improvement */}
                <div className="mb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-start">
                        <div>
                            <SectionHeader
                                tag="التحسين المستمر"
                                title="المتجر الناجح <br/> <span className='text-blue-500'>لا يتوقف عن التحسن.</span>"
                                subtitle="نراقب ونحلل معدلات التحويل، قيمة السلة، والتخلي عن الطلبات لنحسّن المتجر باستمرار بناءً على بيانات حقيقية."
                                icon={<TrendingUp className="w-5 h-5 text-blue-500" />}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-8 bento-card bg-gray-50 dark:bg-[#151516] flex flex-col items-center">
                                <LineChart className="text-blue-500 mb-4" size={32} />
                                <div className="text-sm font-bold text-gray-500">معدل التحويل</div>
                            </div>
                            <div className="p-8 bento-card bg-gray-50 dark:bg-[#151516] flex flex-col items-center">
                                <BarChart3 className="text-green-500 mb-4" size={32} />
                                <div className="text-sm font-bold text-gray-500">قيمة السلة</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 11: Proof & Results */}
                <div className="mb-32 p-12 md:p-24 bento-card bg-black text-white border-none relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,_rgba(255,255,255,0.05)_0%,_transparent_50%)]"></div>
                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-16">
                        <div className="text-start">
                            <div className="text-blue-400 font-black tracking-widest uppercase mb-4 text-sm">نتائج التجارة الإلكترونية</div>
                            <h4 className="text-4xl md:text-6xl font-black mb-6">نتائج <br />أداء حقيقي.</h4>
                        </div>
                        <div className="grid grid-cols-2 gap-8 w-full md:w-auto">
                            {[
                                { l: "رفع معدل التحويل", v: "3.1x" },
                                { l: "تحميل المتجر", v: "0.8s" },
                                { l: "تقليل التخلي عن السلة", v: "40%" },
                                { l: "إجمالي المبيعات", v: "$120k+" }
                            ].map((stat, i) => (
                                <div key={i} className="text-start">
                                    <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.v}</div>
                                    <div className="text-xs text-blue-400 font-bold uppercase tracking-widest">{stat.l}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Section 12: Ideal Client */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    <div className="bento-card p-12 bg-green-500/5 border-green-500/10">
                        <h4 className="text-2xl font-black text-green-600 mb-8 flex items-center gap-3">
                            <CheckCircle2 /> هذه الخدمة لك إذا:
                        </h4>
                        <ul className="space-y-6 text-start">
                            {[
                                "تريد متجراً يبيع باستمرار وبنية تحتية صلبة.",
                                "تفكر بعقلية طويلة المدى وتخطط للتوسع وزيادة المبيعات.",
                                "تبحث عن شريك يفهم سيكولوجية المشتري لا مجرد قوالب."
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
                                "تريد متجراً شكلياً فقط دون أي تحليل أو أهداف.",
                                "لا تهتم بالبيانات والتحليل والتحسين المستمر.",
                                "تبحث عن أقل سعر فقط دون النظر لجودة هندسة التحويل."
                            ].map((text, i) => (
                                <li key={i} className="flex gap-4 text-lg font-bold text-gray-600 dark:text-gray-400 text-start">
                                    <div className="shrink-0 w-2 h-2 bg-red-500 rounded-full mt-3"></div>
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Section 13: FAQ */}
                <FAQ
                    items={[
                        {
                            question: "هل المتاجر التي تبنونها تدعم بوابات الدفع المحلية؟",
                            answer: "نعم، نقوم بربط متجرك بجميع بوابات الدفع الشهيرة في المنطقة (سداد، مدي، تابي، تمارا، سترايب) لضمان تجربة شراء سلسة وموثوقة."
                        },
                        {
                            question: "هل يمكنني نقل متجري الحالي من سلة أو زد إلى Shopify؟",
                            answer: "بكل تأكيد. لدينا فريق متخصص في هجرة البيانات وقيادة عملية الانتقال دون فقدان أي بيانات للعملاء أو الطلبات السابقة، مع تحسين الأداء في النظام الجديد."
                        },
                        {
                            question: "ما هي المنصات التي تدعمونها؟",
                            answer: "متخصصون في Shopify و Shopify Plus للمشاريع الكبرى، ونقوم أيضاً ببناء منصات مخصصة بالكامل (Custom Commerce) حسب احتياجاتك البرمجية الخاصة."
                        }
                    ]}
                />

                {/* Section 14: Final CTA */}
                <div className="mt-48 text-center bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-[4rem] p-12 md:p-32">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter">
                            هل متجرك جاهز للبيع... <br />
                            <span className="text-blue-600 dark:text-blue-500">أم مجرد عرض؟</span>
                        </h2>
                        <p className="text-2xl text-gray-400 font-bold mb-16 leading-relaxed">
                            ابدأ اليوم رحلتك نحو متجر يعمل كآلة بيع حقيقية. سنقوم بتحليل أهدافك ورسم مسار التفوق التجاري الخاص بك.
                        </p>
                        <ServiceForm serviceName="بناء المتاجر الإلكترونية" questions={ecomQuestions} />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default WebDevPage;
