import React from 'react';
import { TrendingUp, CheckCircle2, Target, BarChart3, Rocket, Users2, Sparkles, MessageSquare, Zap, Target as TargetIcon, Search, ShieldAlert, BadgeAlert, Brain, Layers, Cpu, MousePointer2, Layout, LineChart, Check, X, LayoutGrid, Globe } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import ServiceForm from '../components/ServiceForm';
import FAQ from '../components/FAQ';

const AdsPage = () => {
    const adsQuestions = [
        { label: 'الهدف من الحملة الإعلانية؟', type: 'select' as const, options: ['زيادة المبيعات', 'التوعية بالعلامة التجارية', 'ترويج منتج محدد', 'تحميل تطبيق'], required: true },
        { label: 'المنصات المفضلة للإعلان', type: 'radio' as const, options: ['Google Ads', 'Meta (FB/IG)', 'TikTok', 'Snapchat', 'الكل'], required: true },
        { label: 'الميزانية المخصصة شهرياً (ر.س)', type: 'text' as const, placeholder: 'مثلاً: 5000 ريال' },
        { label: 'الجمهور المستهدف', type: 'textarea' as const, placeholder: 'العمر، الجنس، الموقع، الاهتمامات...' },
        { label: 'هل لديك تصميمات أو فيديوهات جاهزة؟', type: 'radio' as const, options: ['نعم، جاهزة', 'لا، أحتاج تصميمها'], required: true },
        { label: 'هل تريد تتبع التحويلات (Pixels)؟', type: 'radio' as const, options: ['نعم', 'لا'], required: true },
        { label: 'الهدف من التحليل الإستراتيجي؟', type: 'select' as const, options: ['خفض تكلفة الاستحواذ', 'التوسع في الميزانية', 'تحسين جودة المخرجات الإبداعية'], required: true }
    ];

    return (
        <main className="pt-32 pb-32 bg-white dark:bg-black transition-colors duration-500 overflow-hidden">
            <section className="px-6 md:px-12 max-w-[1400px] mx-auto">
                {/* Section 1: Problem awareness (Breaking the False Idea) */}
                <SectionHeader
                    tag="كسر الوهم الإعلاني"
                    title="المشكلة ليست في الإعلانات... <br/> <span className='text-orange-500'>بل في ما قبلها.</span>"
                    subtitle="معظم الحملات تفشل ليس لأن المنصة سيئة، بل لأن الإعلان يُطلق دون فهم نية العميل، ودون بنية تحويل صحيحة. الإعلان لا يصنع الطلب، بل يلتقطه."
                    icon={<ShieldAlert className="w-5 h-5 text-orange-500" />}
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    {[
                        { t: "نقرات بلا مبيعات", d: "زيارات كثيرة تنتهي بمعدل ارتداد عالي لأن الرسالة لا تطابق النية.", icon: <MousePointer2 className="text-orange-500" /> },
                        { t: "ميزانية تُحرق بلا أثر", d: "التنافس على كلمات عامة بدلاً من استهداف لحظات القرار الحاسمة.", icon: <Zap className="text-orange-500" /> },
                        { t: "نتائج تجارية ضعيفة", d: "تقارير تبدو جميلة بالأرقام، ولكنها لا تترجم لنمو حقيقي في حسابك البنكي.", icon: <BarChart3 className="text-orange-500" /> }
                    ].map((item, i) => (
                        <div key={i} className="bento-card p-10 bg-orange-50/30 dark:bg-orange-500/5 border-orange-100 dark:border-orange-500/10">
                            <div className="mb-6">{item.icon}</div>
                            <h4 className="text-2xl font-black text-gray-900 dark:text-white mb-4">{item.t}</h4>
                            <p className="text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed">{item.d}</p>
                        </div>
                    ))}
                </div>

                {/* Section 2: Reframing */}
                <div className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="text-start">
                        <SectionHeader
                            tag="التحول الذهني"
                            title="نحن لا نشتري نقرات... <br/> <span className='text-blue-500'>بل قرارات شراء.</span>"
                            subtitle="الإعلانات المدفوعة الناجحة اليوم تُبنى على مطابقة الرسالة مع المرحلة النفسية للعميل. نحن لا نسأل كم عدد الزيارات، بل من المستعد للدفع الآن؟"
                            icon={<Brain className="w-5 h-5 text-blue-500" />}
                        />
                    </div>
                    <div className="bento-card p-12 bg-gray-50 dark:bg-[#0c0c0d] flex flex-col gap-8">
                        <div className="flex items-center gap-6 p-6 bg-red-500/5 rounded-2xl border border-red-500/10">
                            <X className="text-red-500" size={32} />
                            <div>
                                <div className="text-gray-400 font-bold line-through">كم عدد الزيارات؟</div>
                                <div className="text-red-500 font-black text-xl">عقلية الهدر</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 p-6 bg-green-500/5 rounded-2xl border border-green-500/10 scale-105 shadow-2xl">
                            <Check className="text-green-500" size={32} />
                            <div>
                                <div className="text-gray-900 dark:text-white font-black text-2xl">من المستعد للدفع الآن؟</div>
                                <div className="text-green-500 font-bold uppercase tracking-widest text-sm">عقلية الربحية</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 3: Core Methodology (The Crystal Pyramid Redesign) */}
                {/* Section 3: Core Methodology (Compact Grid Redesign) */}
                <div className="mb-32 relative">
                    <SectionHeader
                        tag="المنهجية الجوهرية"
                        title="نظام إعلاني مبني <br/> <span className='text-indigo-500'>على هرم نية المستخدم.</span>"
                        subtitle="نحن نوزع الميزانية بذكاء عبر ثلاث مستويات تضمن لك الربح العاجل والنمو الآجل."
                        icon={<Layers className="w-5 h-5 text-indigo-500" />}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                        {[
                            {
                                t: "القنص المباشر",
                                sub: "نية شراء عالية",
                                d: "استهداف باحثين جاهزين للشراء الآن.",
                                stats: "٩٥٪ معدل تحويل",
                                icon: <Target className="text-white" />,
                                bg: "bg-indigo-600"
                            },
                            {
                                t: "بناء الثقة",
                                sub: "نية تجارية للمقارنة",
                                d: "التواجد في مراحل المقارنة والتقييم.",
                                stats: "٤٠٪ معدل تحويل",
                                icon: <ShieldAlert className="text-indigo-200" />,
                                bg: "bg-indigo-700"
                            },
                            {
                                t: "صناعة الطلب",
                                sub: "خلق طلب جديد",
                                d: "خلق الحاجة عند جمهور لم يعرفك بعد.",
                                stats: "١٠٪ معدل تحويل",
                                icon: <Sparkles className="text-indigo-300" />,
                                bg: "bg-indigo-900"
                            }
                        ].map((item, i) => (
                            <div key={i} className={`p-8 rounded-3xl ${item.bg} text-white relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500`}>
                                {/* Decor */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/20 transition-colors"></div>

                                <div className="relative z-10 flex flex-col h-full justify-between">
                                    <div>
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/10">
                                                {React.cloneElement(item.icon, { size: 24 })}
                                            </div>
                                            <div className="text-end">
                                                <div className="font-black text-2xl">{item.stats.split(' ')[0]}</div>
                                                <div className="text-[10px] uppercase font-bold text-indigo-200">مدى الفعالية</div>
                                            </div>
                                        </div>

                                        <h3 className="text-2xl font-black mb-1">{item.t}</h3>
                                        <div className="text-indigo-200 text-sm font-bold uppercase tracking-wider mb-4">{item.sub}</div>
                                        <p className="text-indigo-100 font-medium leading-relaxed">{item.d}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                {/* Section: Platforms We Manage (Redesigned Grid) */}
                <div className="mb-48 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Text Content (Right Side) */}
                        <div className="lg:col-span-5 text-start order-1 md:order-1">
                            <SectionHeader
                                tag="المنصات والشركاء"
                                title="أينما يتواجد عملاؤك... <br/> <span className='text-blue-500'>سنصل إليهم.</span>"
                                subtitle="ندير حملاتك عبر أقوى المنصات العالمية لضمان الوصول لأعلى نية شرائية وبأقل تكلفة استحواذ."
                                icon={<Globe className="w-5 h-5 text-blue-500" />}
                            />
                        </div>

                        {/* Logos Grid (Left Side) */}
                        <div className="lg:col-span-7 order-2 md:order-2 relative">
                            {/* Decorative Background */}
                            <div className="absolute inset-0 bg-blue-500/5 blur-[100px] -z-10 rounded-full"></div>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                {[
                                    { name: "Google Ads", img: "/assets/platforms/google-ads.png", color: "group-hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] group-hover:border-blue-500/50" },
                                    { name: "Meta (FB & IG)", img: "/assets/platforms/facebook.png", color: "group-hover:shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] group-hover:border-blue-600/50" },
                                    { name: "TikTok Ads", img: "/assets/platforms/tiktok.png", color: "group-hover:shadow-[0_0_40px_-10px_rgba(236,72,153,0.5)] group-hover:border-pink-500/50 scale-110" },
                                    { name: "Snapchat Ads", img: "/assets/platforms/snapchat.png", color: "group-hover:shadow-[0_0_40px_-10px_rgba(250,204,21,0.5)] group-hover:border-yellow-400/50" },
                                    { name: "Yandex Direct", img: "/assets/platforms/yandex.png", color: "group-hover:shadow-[0_0_40px_-10px_rgba(239,68,68,0.5)] group-hover:border-red-500/50" },
                                    { name: "LinkedIn Ads", img: "/assets/platforms/linkedin.png", color: "group-hover:shadow-[0_0_40px_-10px_rgba(10,102,194,0.5)] group-hover:border-blue-700/50" }
                                ].map((platform, i) => (
                                    <div key={i} className={`
                                        group relative aspect-square
                                        bg-white dark:bg-[#0c0c0d] 
                                        border border-black/5 dark:border-white/5 
                                        rounded-[2rem] flex items-center justify-center p-8
                                        transition-all duration-500 
                                        hover:-translate-y-2 hover:scale-105
                                        shadow-sm ${platform.color}
                                    `}>
                                        <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 dark:from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"></div>
                                        <img
                                            src={platform.img}
                                            alt={platform.name}
                                            className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 drop-shadow-md relative z-10"
                                            onError={(e) => {
                                                // Fallback if image missing, ensuring grid doesn't break
                                                e.currentTarget.style.display = 'none';
                                                e.currentTarget.parentElement!.innerHTML += `<span class='font-bold text-xs text-gray-400'>${platform.name}</span>`
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


                {/* Section: Scaling Strategy Roadmap (Infographic based) */}
                <div className="mb-48 relative">
                    <SectionHeader
                        tag="استراتيجية التوسع"
                        title="خارطة طريق <br/> <span className='text-blue-500'>التوسع الهائل.</span>"
                        subtitle="النمو الحقيقي ليس وليد الصدفة، بل هو نتيجة تطبيق استراتيجيات توسع مدروسة تحافظ على استقرار الأرباح."
                        icon={<TrendingUp className="w-5 h-5 text-blue-500" />}
                    />

                    <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                number: "01",
                                t: "التدرج المدروس (Steady Scaling)",
                                d: "زيادة الميزانية بنسب مدروسة (10-20%) كل 48-72 ساعة للحفاظ على استقرار تعلم الخوارزمية.",
                                color: "border-blue-500/20",
                                icon: <Zap className="text-blue-500" />
                            },
                            {
                                number: "02",
                                t: "التوسع الأفقي (Horizontal)",
                                d: "تكرار الحملات الناجحة لاستهداف جماهير جديدة أو اهتمامات مشابهة لتوسيع نطاق الوصول.",
                                color: "border-purple-500/20",
                                icon: <LayoutGrid className="text-purple-500" />
                            },
                            {
                                number: "03",
                                t: "التوسع الرأسي (Vertical)",
                                d: "ضخ ميزانية أكبر مباشرة في الحملات ذات الأداء الذهبي (Winner Ads) لتعظيم الربحية بسرعة.",
                                color: "border-emerald-500/20",
                                icon: <TargetIcon className="text-emerald-500" />
                            },
                            {
                                number: "04",
                                t: "تنويع الاستراتيجية الإبداعية",
                                d: "اختبار زوايا بصرية ونفسية مختلفة (Hook Variations) لتجنب تشبع الجمهور ورفع النقر.",
                                color: "border-pink-500/20",
                                icon: <Sparkles className="text-pink-500" />
                            },
                            {
                                number: "05",
                                t: "توسيع نطاق الجماهير",
                                d: "الانتقال من الاستهداف الضيق إلى الجماهير العريضة (Broad) والجماهير المشابهة (Lookalikes).",
                                color: "border-orange-500/20",
                                icon: <Users2 className="text-orange-500" />
                            },
                            {
                                number: "06",
                                t: "تحسين المزايدات (Bidding)",
                                d: "ضبط استراتيجيات عروض الأسعار (Manual Bidding) لضمان الفوز في المزادات الأعلى قيمة.",
                                color: "border-indigo-500/20",
                                icon: <Cpu className="text-indigo-500" />
                            },
                            {
                                number: "07",
                                t: "هيكلة الميزانية (ABO/CBO)",
                                d: "توزيع الميزانية بذكاء بين مستوى المجموعة الإعلانية أو الحملة (ABO/CBO) لضمان أفضل عائد.",
                                color: "border-red-500/20",
                                icon: <BarChart3 className="text-red-500" />
                            },
                            {
                                number: "FREE",
                                t: "استشارة نمو مجانية",
                                d: "هل أنت جاهز لتوسيع نشاطك؟ دعنا نضع لك خارطة الطريق المخصصة لنشاركك قصة نجاحك القادمة.",
                                color: "bg-blue-600 text-white border-none",
                                icon: <Rocket className="text-white" />,
                                isCTA: true
                            }
                        ].map((step, i) => (
                            <div key={i} className={`bento-card p-10 flex flex-col justify-between transition-all duration-500 hover:scale-105 group relative overflow-hidden ${step.color} reveal`} style={{ transitionDelay: `${i * 50}ms` }}>
                                {step.isCTA && <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-[60px]"></div>}
                                <div className="text-start relative z-10">
                                    <div className="flex justify-between items-start mb-8">
                                        <div className={`w-14 h-14 rounded-2xl ${step.isCTA ? 'bg-white/10' : 'bg-gray-100 dark:bg-white/5'} flex items-center justify-center`}>
                                            {step.icon}
                                        </div>
                                        <span className={`text-4xl font-black tracking-tighter ${step.isCTA ? 'text-white/20' : 'text-gray-900/10 dark:text-white/10'}`}>{step.number}</span>
                                    </div>
                                    <h5 className={`text-xl font-black mb-4 leading-tight ${step.isCTA ? 'text-white' : 'text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors'}`}>{step.t}</h5>
                                    <p className={`font-bold text-sm leading-relaxed ${step.isCTA ? 'text-blue-50' : 'text-gray-500 dark:text-gray-400'}`}>{step.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section: Heatmap Analysis (New Request) */}
                <div className="mb-48 relative">
                    <SectionHeader
                        tag="تحليل السلوك"
                        title="تتبّع أداء الإعلانات <br/> <span className='text-rose-500'>عبر الخرائط الحرارية.</span>"
                        subtitle="لأن النقر لا يعني دائمًا اهتمامًا… والسلوك لا يكذب. نحن نحول صفحات الهبوط من 'افتراضات تسويقية' إلى مساحات اختبار سلوكي حقيقي، لنكشف لك ما يفعله الزائر فعلياً."
                        icon={<MousePointer2 className="w-5 h-5 text-rose-500" />}
                    />

                    <div className="mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Visual Side (The Image) */}
                        <div className="lg:col-span-7 sticky top-32">
                            <div className="bento-card p-4 bg-gray-900 border-gray-800 overflow-hidden relative group">
                                <div className="absolute top-0 right-0 w-full h-full bg-rose-500/10 blur-[100px] z-0"></div>
                                <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                    <img
                                        src="/assets/heatmaps/heatmap_demo.png"
                                        alt="Heatmap Analysis Example"
                                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none flex flex-col justify-end p-8">
                                        <div className="bg-black/50 backdrop-blur-md border border-white/10 p-4 rounded-xl inline-block">
                                            <div className="text-rose-400 font-bold text-sm mb-1 uppercase tracking-widest">تنبيه سلوكي</div>
                                            <div className="text-white font-black text-xl">منطقة تركيز عالية (Hot Zone)</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 grid grid-cols-3 gap-4">
                                {[
                                    { t: "أين يركز الانتباه؟", i: <Target className="text-rose-500" /> },
                                    { t: "ماذا يتجاهل الزائر؟", i: <X className="text-gray-500" /> },
                                    { t: "أين يتردد المؤشر؟", i: <MousePointer2 className="text-yellow-500" /> }
                                ].map((item, i) => (
                                    <div key={i} className="bento-card p-6 bg-gray-50 dark:bg-[#151516] flex flex-col items-center text-center gap-3">
                                        {item.i}
                                        <span className="font-bold text-sm text-gray-900 dark:text-white">{item.t}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Methodology Side */}
                        <div className="lg:col-span-5 space-y-10">
                            {[
                                {
                                    step: "01",
                                    title: "ربط الحملات بالصفحات",
                                    desc: "نربط كل إعلان بصفحة محددة لضمان أن البيانات السلوكية تعكس نية الإعلان (بيع – تسجيل – تواصل)."
                                },
                                {
                                    step: "02",
                                    title: "تحليل خريطة النقرات",
                                    desc: "نرصد النقرات الحقيقية مقابل النقرات المشتتة. الهدف: اكتشاف فجوة الرسالة بين الإعلان والصفحة."
                                },
                                {
                                    step: "03",
                                    title: "تحليل عمق التمرير",
                                    desc: "نحدد النقطة التي يفقد فيها الزائر اهتمامه. النتيجة: إعادة ترتيب المحتوى وفق انتباه المستخدم الحقيقي."
                                },
                                {
                                    step: "04",
                                    title: "تحليل حركة الماوس",
                                    desc: "نستخدم حركة الماوس كمؤشر على التردد والحيرة، خصوصاً في نماذج التسجيل وصفحات الأسعار."
                                },
                                {
                                    step: "05",
                                    title: "مقارنة المصادر",
                                    desc: "نقارن سلوك مستخدم TikTok مقابل Google Ads، لأن نية المستخدم تختلف حسب المنصة."
                                },
                                {
                                    step: "06",
                                    title: "قرارات تحسين (Actionable)",
                                    desc: "لا نعرض صوراً فقط، بل نغير مكان CTA، نبسط الرسالة، ونزيل المشتتات فوراً."
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 group">
                                    <div className="flex flex-col items-center">
                                        <div className="w-10 h-10 rounded-full bg-rose-100 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 flex items-center justify-center text-rose-600 dark:text-rose-500 font-black text-sm shrink-0 shadow-sm relative z-10 group-hover:scale-110 transition-transform">
                                            {item.step}
                                        </div>
                                        {i !== 5 && <div className="w-px h-full bg-gray-200 dark:bg-white/5 my-2 group-hover:bg-rose-500/20 transition-colors"></div>}
                                    </div>
                                    <div className="pb-8">
                                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">{item.title}</h4>
                                        <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}

                            <div className="p-6 bg-rose-50 dark:bg-rose-900/10 rounded-2xl border border-rose-100 dark:border-rose-500/20">
                                <h5 className="font-black text-rose-700 dark:text-rose-400 mb-2 text-lg">لماذا هذه الخطوة حاسمة؟</h5>
                                <p className="text-rose-600/80 dark:text-rose-300/80 font-medium">الخرائط الحرارية تخبرك أين تخسر العميل قبل أن تخسر ميزانيتك.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section: Google Ecosystem Omnichannel (Premium Redesign) */}
                <div className="mb-48 relative">
                    <div className="max-w-[1400px] mx-auto bg-gray-50 dark:bg-[#0c0c0d] rounded-[3rem] p-8 md:p-20 border border-black/5 dark:border-white/5 relative overflow-hidden">
                        {/* Abstract Background Glows */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen animate-pulse"></div>
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-500/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen opacity-50"></div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
                            {/* Text Visuals */}
                            <div className="text-start space-y-12">
                                <SectionHeader
                                    tag="منظومة جوجل"
                                    title="سيطرة ممتدة عبر <br/> <span className='text-transparent bg-clip-text bg-gradient-to-l from-blue-600 to-red-500'>كامل منظومة Google.</span>"
                                    subtitle="لا نكتفي بالبحث فقط؛ نصل لعميلك في لحظة الإلهام على YouTube، ولحظة التصفح في Gmail، ولحظة البحث عن الموقع في Maps."
                                    icon={<Globe className="w-5 h-5 text-blue-600" />}
                                    className="mb-0"
                                />

                                <div className="grid gap-6">
                                    {/* Feature 1: PMax */}
                                    <div className="group bg-white dark:bg-white/5 p-6 md:p-8 rounded-3xl border border-black/5 dark:border-white/5 hover:border-blue-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/5">
                                        <div className="flex gap-6 items-start">
                                            <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                                                <Brain size={28} className="text-blue-600 dark:text-blue-400" />
                                            </div>
                                            <div>
                                                <h5 className="text-2xl font-black text-gray-900 dark:text-white mb-3">حملات PMax الذكية</h5>
                                                <p className="text-gray-500 dark:text-gray-400 font-bold leading-relaxed text-lg">
                                                    استخدام الذكاء الاصطناعي لتوزيع الإعلانات آلياً عبر أفضل القنوات أداءً.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Feature 2: Multi-Angle */}
                                    <div className="group bg-white dark:bg-white/5 p-6 md:p-8 rounded-3xl border border-black/5 dark:border-white/5 hover:border-red-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-red-500/5">
                                        <div className="flex gap-6 items-start">
                                            <div className="w-14 h-14 rounded-2xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                                                <Layers size={28} className="text-red-600 dark:text-red-400" />
                                            </div>
                                            <div>
                                                <h5 className="text-2xl font-black text-gray-900 dark:text-white mb-3">ظهور متعدد الزوايا</h5>
                                                <p className="text-gray-500 dark:text-gray-400 font-bold leading-relaxed text-lg">
                                                    عميلك يراك في كل مكان، مما يعزز الثقة ويسرع قرار الشراء.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Image Side */}
                            <div className="relative isolate group">
                                <div className="absolute inset-x-0 -top-20 -bottom-20 bg-gradient-to-b from-transparent via-white/50 dark:via-white/5 to-transparent skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
                                <div className="rounded-[2.5rem] overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl bg-white dark:bg-black">
                                    <img
                                        src="/assets/google/google-ecosystem.png"
                                        alt="Google Ecosystem"
                                        className="w-full h-auto transform group-hover:scale-105 transition-transform duration-[1.5s]"
                                    />
                                </div>
                                {/* Floating Badge */}
                                <div className="absolute -bottom-8 -left-8 bg-white dark:bg-[#1a1a1a] p-6 rounded-2xl shadow-xl border border-black/5 dark:border-white/10 hidden md:block animate-bounce-slow">
                                    <div className="flex items-center gap-4">
                                        <img src="/assets/platforms/google-ads.png" alt="Google Partner" className="w-12 h-12 object-contain" />
                                        <div>
                                            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">شريك معتمد</div>
                                            <div className="text-lg font-black text-gray-900 dark:text-white">Google Partner</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section: Advertising Effectiveness (Vertical Timeline) */}
                <div className="mb-48 relative px-6 max-w-5xl mx-auto">
                    <SectionHeader
                        tag="محركات الفعالية"
                        title="لماذا تهم <br/> <span className='text-emerald-500'>فعالية الإعلانات؟</span>"
                        subtitle="الحملة الإعلانية ليست مجرد إنفاق، بل هي استثمار استراتيجي يهدف لتحويل كل ريال إلى أصل تجاري متنامي."
                        icon={<TargetIcon className="w-5 h-5 text-emerald-500" />}
                        titleClassName="text-4xl md:text-5xl lg:text-5xl"
                    />

                    <div className="mt-32 relative">
                        {/* Timeline Center Line */}
                        <div className="absolute top-0 bottom-0 left-[20px] md:left-1/2 w-0.5 bg-gradient-to-b from-emerald-500 via-blue-500 to-transparent -translate-x-1/2 opacity-30"></div>

                        <div className="space-y-24">
                            {[
                                {
                                    t: "توزيع ذكي للميزانية",
                                    d: "توجيه الموارد للأقنية الأكثر ربحية وتقليل الهدر المالي عبر التوزيع الديناميكي.",
                                    i: <BarChart3 className="text-blue-500" />,
                                    glow: "border-blue-500/20 bg-blue-500/5"
                                },
                                {
                                    t: "استهداف أدق للجمهور",
                                    d: "الوصول للعملاء الذين يبحثون عنك فعليياً في الوقت المثالي والمكان المناسب.",
                                    i: <Users2 className="text-pink-500" />,
                                    glow: "border-pink-500/20 bg-pink-500/5"
                                },
                                {
                                    t: "تعزيز قيمة العلامة",
                                    d: "بناء صورة ذهنية قوية ومستدامة تزيد من ولاء العملاء وتسهل عمليات التحويل.",
                                    i: <Sparkles className="text-yellow-500" />,
                                    glow: "border-yellow-500/20 bg-yellow-500/5"
                                },
                                {
                                    t: "ميزة تنافسية",
                                    d: "التفوق على المنافسين عبر استراتيجيات بيانات دقيقة وحصرية تضعك في المقدمة.",
                                    i: <Rocket className="text-purple-500" />,
                                    glow: "border-purple-500/20 bg-purple-500/5"
                                },
                                {
                                    t: "نمو مستدام",
                                    d: "تحويل الحملات من مجرد تكلفة تشغيلية إلى محرك نمو طويل الأمد يغذي نفسه.",
                                    i: <TrendingUp className="text-emerald-500" />,
                                    glow: "border-emerald-500/20 bg-emerald-500/5"
                                }
                            ].map((point, i) => (
                                <div key={i} className={`relative flex items-center md:justify-between group reveal ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                    {/* Timeline Node */}
                                    <div className="absolute left-[20px] md:left-1/2 w-10 h-10 rounded-full bg-white dark:bg-black border-4 border-emerald-500 -translate-x-1/2 z-20 shadow-[0_0_20px_rgba(16,185,129,0.5)] group-hover:scale-125 transition-transform duration-500">
                                        <div className="absolute inset-0 rounded-full animate-ping bg-emerald-500/30"></div>
                                    </div>

                                    {/* Content Card */}
                                    <div className={`w-full md:w-[45%] ml-12 md:ml-0 bento-card p-10 md:p-14 relative overflow-hidden transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${point.glow}`}>
                                        <div className="mb-8 w-16 h-16 rounded-2xl bg-white dark:bg-white/5 flex items-center justify-center shadow-sm">
                                            {React.cloneElement(point.i as React.ReactElement, { size: 32 })}
                                        </div>
                                        <h4 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-6 group-hover:text-emerald-500 transition-colors uppercase tracking-tight leading-tight">{point.t}</h4>
                                        <p className="text-gray-500 dark:text-gray-400 font-bold text-xl leading-relaxed">{point.d}</p>
                                    </div>

                                    {/* Spacer for MD screens */}
                                    <div className="hidden md:block w-[45%]"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                {/* Section 4: Account Architecture */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 items-center">
                    <div className="lg:col-span-5 text-start order-1 lg:order-1">
                        <SectionHeader
                            tag="هندسة الحساب"
                            title="المنصات لا تكافئ <br/> <span className='text-blue-500'>العشوائية.</span>"
                            subtitle="نحن نعيد بناء الحساب الإعلاني ليفهم نشاطك، ويُحسن الأداء بدلاً من استنزاف الميزانية."
                            icon={<Cpu className="w-5 h-5 text-blue-500" />}
                        />
                        <p className="text-xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed mb-10">الخوارزمية ذكية، لكنها بحاجة لمندس يُوجهها. بدون هيكلة صحيحة، أنت تدفع ثمن أخطاء الخوارزمية من جيبك.</p>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 order-2 lg:order-2">
                        {[
                            { t: "هيكلة الحملات", d: "فصل النية التجارية لضمان عدم اختلاط البيانات.", i: <LayoutGrid className="text-blue-500" /> },
                            { t: "ضبط التحويلات CAPI", d: "تجاوز مشاكل التتبع عبر iOS14 وما بعدها.", i: <Zap className="text-yellow-500" /> },
                            { t: "Machine Learning", d: "تغذية الخوارزمية بالبيانات الصحيحة للتعلم.", i: <Cpu className="text-purple-500" /> },
                            { t: "استهداف جماهيري", d: "بناء جماهير مشابهة (Lookalike) ذات جودة عالية.", i: <Users2 className="text-green-500" /> }
                        ].map((item, i) => (
                            <div key={i} className="bento-card p-8 bg-gray-50 dark:bg-[#0c0c0d] border border-black/5 dark:border-white/10">
                                <div className="mb-4">{item.i}</div>
                                <h5 className="font-black text-gray-900 dark:text-white text-xl mb-2">{item.t}</h5>
                                <p className="text-gray-500 dark:text-gray-400 font-bold text-sm">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>



                {/* Section 5: Ad Creatives */}
                <div className="mb-48 relative p-12 md:p-24 bento-card bg-black text-white border-none overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,_rgba(37,99,235,0.2)_0%,_transparent_50%)]"></div>
                    <div className="relative z-10 max-w-4xl mx-auto text-center md:text-start">
                        <SectionHeader
                            tag="الإبداع الإعلاني"
                            title="الإعلان ليس تصميماً... <br/> <span className='text-blue-500'>بل رسالة في توقيت حاسم.</span>"
                            subtitle="نطوّر الإعلانات بناءً على نقاط الألم (Pain Points) واعتراضات الشراء ومحفزات القرار."
                            icon={<Sparkles className="w-5 h-5 text-blue-500" />}
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
                            {[
                                { t: "لغة السوق لا الشركة", d: "نتحدث بما يفهمه ويحتاجه العميل، لا بما نحبه نحن." },
                                { t: "اختبار الزوايا النفسية", d: "اختبار مستمر (A/B Testing) للعناوين، العروض، وأزرار الإجراء (CTA)." }
                            ].map((item, i) => (
                                <div key={i} className="border-r-2 border-blue-500/30 pr-8">
                                    <h4 className="text-2xl font-black mb-4 font-sans">{item.t}</h4>
                                    <p className="text-gray-400 text-lg font-medium leading-relaxed font-sans">{item.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Section 6: Conversion Engineering */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
                    <div className="lg:col-span-5 text-start">
                        <SectionHeader
                            tag="هندسة التحويل"
                            title="الإعلان القوي يفشل <br/> <span className='text-red-500'>بدون صفحة بيع صحيحة.</span>"
                            subtitle="نربط كل إعلان بصفحة هبوط مبنية على سرعة عالية، رسالة واحدة واضحة، وإزالة كاملة لأي احتكاك يمنع العميل من الشراء."
                            icon={<Layout className="w-5 h-5 text-red-500" />}
                        />
                    </div>
                    <div className="lg:col-span-7 inline-grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { t: "سرعة تحميل < 1s", i: <Zap className="text-yellow-500" /> },
                            { t: "إزالة الاحتكاك (Friction)", i: <ShieldAlert className="text-red-500" /> },
                            { t: "تسلسل إقناعي مدروس", i: <Layers className="text-blue-500" /> },
                            { t: "رسالة واحدة واضحة", i: <TargetIcon className="text-green-500" /> }
                        ].map((item, i) => (
                            <div key={i} className="bento-card p-8 bg-gray-50 dark:bg-[#151516] flex items-center gap-6 group hover:scale-105 transition-transform">
                                <div className="w-12 h-12 bg-white dark:bg-white/5 rounded-xl flex items-center justify-center shadow-sm">{item.i}</div>
                                <span className="text-xl font-black text-gray-900 dark:text-white">{item.t}</span>
                            </div>
                        ))}
                    </div>
                </div>



                {/* Section 7: Optimization Loop */}
                <div className="mb-32 p-12 md:p-24 bento-card bg-gray-50 dark:bg-black border border-black/5 dark:border-white/10 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-600/5 blur-[120px]"></div>
                    <SectionHeader
                        tag="التحسين المستمر"
                        title="الإعلانات علم... <br/> <span className='text-gray-400'>ليست مجرد حملة مؤقتة.</span>"
                        subtitle="ندير الإعلانات كنظام حي يتنفس؛ تحليل يومي للأداء، قرارات مبنية على بيانات لا مشاعر، وتحسين مستمر للميزانية حسب الربحية."
                        icon={<TrendingUp className="w-5 h-5 text-blue-500" />}
                    />
                </div>

                {/* Section 8: Proof & Metrics */}
                <div className="mb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-8 bento-card p-12 md:p-16 relative overflow-hidden bg-gray-50 dark:bg-black border border-black/5 dark:border-white/10">
                            <div className="absolute top-0 start-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,_rgba(249,115,22,0.05)_0%,_transparent_50%)]"></div>
                            <div className="flex items-center justify-end gap-6 mb-16 relative z-10">
                                <div className="text-start">
                                    <div className="font-bold text-2xl md:text-3xl text-gray-900 dark:text-white uppercase tracking-tighter">نتائج الأداء الحقيقة</div>
                                    <p className="text-orange-600 dark:text-orange-400 font-bold">مؤشرات الأداء والعائد (ROAS)</p>
                                </div>
                                <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center shrink-0"><LineChart size={32} className="text-orange-600 dark:text-orange-400" /></div>
                            </div>
                            <div className="space-y-12 relative z-10">
                                {[
                                    { label: 'خفض تكلفة الاستحواذ (CPA)', value: '-47%', color: 'from-orange-600 to-red-600', w: '85%' },
                                    { label: 'العائد على الإنفاق (ROAS)', value: '4.6x', color: 'from-blue-600 to-emerald-600', w: '92%' },
                                    { label: 'القيمة التجارية المحققة', value: '+$120k', color: 'from-purple-600 to-pink-600', w: '88%' }
                                ].map((item, i) => (
                                    <div key={i} className="space-y-5 text-start">
                                        <div className="flex justify-between text-xl font-bold text-gray-900 dark:text-white"><span>{item.label}</span><span>{item.value}</span></div>
                                        <div className="h-4 w-full bg-gray-200 dark:bg-white/5 rounded-full overflow-hidden border border-black/5 dark:border-white/5">
                                            <div className={`h-full bg-gradient-to-r ${item.color} transition-all duration-[2s]`} style={{ width: item.w }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:col-span-4 grid gap-8">
                            <div className="bento-card p-10 bg-gray-50 dark:bg-[#151516] flex flex-col justify-between">
                                <Globe size={40} className="text-blue-500" />
                                <div className="text-start">
                                    <div className="text-4xl font-black text-gray-900 dark:text-white mb-2">12+ دولة</div>
                                    <p className="text-gray-500 font-bold text-sm uppercase tracking-widest">تغطية حملات إقليمية</p>
                                </div>
                            </div>
                            <div className="bento-card p-10 bg-gray-50 dark:bg-[#0a0a0b] flex flex-col justify-between">
                                <Zap size={40} className="text-yellow-500" />
                                <div className="text-start">
                                    <div className="text-4xl font-black text-gray-900 dark:text-white mb-2">0.9s</div>
                                    <p className="text-gray-500 font-bold text-sm uppercase tracking-widest">سرعة تحويل الصفحات</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 9: Qualification (Ideal Client) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    <div className="bento-card p-12 bg-green-500/5 border-green-500/20">
                        <h4 className="text-2xl font-black text-green-600 mb-8 flex items-center gap-3">
                            <CheckCircle2 /> هذه الخدمة لك إذا:
                        </h4>
                        <ul className="space-y-4 text-start">
                            {[
                                "تبحث عن نمو حقيقي وقابل للقياس بالأرقام.",
                                "سئمت من حرق الميزانية في تجارب عشوائية.",
                                "تريد نظام إعلانات يخدم المبيعات لا التقارير."
                            ].map((text, i) => (
                                <li key={i} className="flex gap-4 text-lg font-bold text-gray-700 dark:text-gray-300">
                                    <div className="shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bento-card p-12 bg-red-500/5 border-red-500/20 grayscale hover:grayscale-0 transition-all opacity-60">
                        <h4 className="text-2xl font-black text-red-600 mb-8 flex items-center gap-3">
                            <BadgeAlert /> غير مناسبة إذا كنت:
                        </h4>
                        <ul className="space-y-4 text-start">
                            {[
                                "تبحث عن أرخص خدمة إعلانية في السوق.",
                                "تتوقع نتائج فورية دون بناء بنية تحتية.",
                                "لا تهتم بجمع وتحليل بيانات العملاء بدقة."
                            ].map((text, i) => (
                                <li key={i} className="flex gap-4 text-lg font-bold text-gray-600 dark:text-gray-400">
                                    <div className="shrink-0 w-2 h-2 bg-red-500 rounded-full mt-3"></div>
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Section 10: FAQ */}
                <FAQ
                    items={[
                        {
                            question: "أي منصة إعلانية هي الأفضل لمشروعي؟",
                            answer: "يعتمد ذلك على جمهورك المستهدف. إذا كنت تستهدف الشباب فمنصات تيك توك وسناب شات هي الأفضل، أما للخدمات المهنية فجوجل وإنستقرام يتصدران المشهد. ندرس مشروعك ونرشح لك الأنسب."
                        },
                        {
                            question: "كيف يتم قياس نجاح الحملات؟",
                            answer: "نعتمد على بيانات الأداء الحقيقية (ROAS, CPA, CTR). نوفر لك لوحة تحكم حية تظهر لك أين يذهب كل ريال وكيف يتحول إلى عائد مادي."
                        },
                        {
                            question: "هل تديرون ميزانيات صغيرة؟",
                            answer: "نحن نركز على المشاريع التي تسعى للنمو الحقيقي. نحدد الحد الأدنى للميزانية بناءً على أهدافك لضمان تحقيق نتائج تبرر تكلفة الإدارة."
                        }
                    ]}
                />

                {/* Section 11: Final CTA (Unified Intelligent Layout) */}
                <div className="mt-32 lg:mt-48 relative">
                    <div className="max-w-4xl mx-auto p-6 md:p-12 text-center">
                        {/* Header & Copy */}
                        <div className="mb-16 relative z-10 w-full">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500/10 text-orange-600 dark:text-orange-500 border border-orange-500/20 rounded-full text-sm font-black mb-8 animate-pulse">
                                <Brain size={16} />
                                <span>تحليل الذكاء الإعلاني</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-snug">
                                هل تريد إعلانات تُشاهد... <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-500 leading-normal">أم تُربح؟</span>
                            </h2>

                            <p className="text-2xl text-gray-500 dark:text-gray-400 font-medium mb-12 leading-relaxed max-w-2xl mx-auto">
                                ابدأ اليوم بتحليل إعلاني استراتيجي شامل. سنكشف لك فرص الربحية الضائعة ونرسم لك مسار النمو الحقيقي عبر بيانات دقيقة.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                                {[
                                    { t: "تدقيق الحساب الحالي", d: "نكتشف أين تهدر ميزانيتك.", i: <Search className="text-orange-500" /> },
                                    { t: "تحليل المنافسين", d: "نعرف ماذا يفعل منافسوك ونتفوق عليهم.", i: <Target className="text-blue-500" /> },
                                    { t: "خارطة طريق للعائد", d: "خطة واضحة لرفع ROAS خلال 90 يوم.", i: <TrendingUp className="text-green-500" /> }
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-col items-center gap-4 bg-white dark:bg-white/5 p-6 rounded-3xl border border-black/5 dark:border-white/5 shadow-sm hover:scale-105 transition-transform">
                                        <div className="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-white/5 flex items-center justify-center shrink-0">
                                            {React.cloneElement(item.i as React.ReactElement, { size: 32 })}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 dark:text-white text-xl mb-2">{item.t}</h4>
                                            <p className="text-gray-500 dark:text-gray-400 font-medium">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Form Container (Unwrapped) */}
                        <div className="w-full relative z-10 text-start">
                            <ServiceForm serviceName="إدارة الإعلانات والإستراتيجية الإعلانية" questions={adsQuestions} />

                            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-400 font-medium opacity-80">
                                <ShieldAlert size={14} />
                                <span>نحن نحترم خصوصيتك وسنقوم بالرد عليك في غضون 24 ساعة عمل.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </main >
    );
};

export default AdsPage;
