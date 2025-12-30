import React from 'react';
import {
    Palette, Layout, Smartphone, MousePointer2, GitBranch, FlaskConical, CheckCircle2,
    Sparkles, Heart, Brain, Eye, Target, Users, Search, Microscope,
    Layers, PenTool, Braces, Rocket, BarChart2, Zap, X, ArrowRight,
    Monitor, Lightbulb, Clock, ShieldCheck, FileCode, Component,
    Database, Activity, TrendingUp, DollarSign, Map, FileText, Ban, FileJson, BookOpen
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import ServiceForm from '../components/ServiceForm';
import FAQ from '../components/FAQ';

const DesignPage = () => {
    const designQuestions = [
        { label: 'نوع المشروع المطلوب تصميمه', type: 'select' as const, options: ['تطبيق جوال (iOS/Android)', 'موقع إلكتروني / متجر', 'لوحة تحكم (Dashboard)', 'برنامج سحابي (SaaS)', 'أخرى'], required: true },
        { label: 'عدد الواجهات / الشاشات المتوقع (تقريبي)', type: 'text' as const, placeholder: 'مثلاً: 5-10 شاشات' },
        { label: 'هل لديك User Flow أو هيكلة واضحة؟', type: 'radio' as const, options: ['نعم، جاهزة', 'نعم، أريد تطويرها معكم', 'لا، أحتاج البدء من الصفر'], required: true },
        { label: 'ما هو النمط البصري المفضل؟', type: 'select' as const, options: ['بسيط وعصري (Minimalist)', 'غني بالتفاصيل (Glassmorphism)', 'رسمي واحترافي', 'مبهج وملون'], required: true },
        { label: 'هل تحتاج لنسخة تفاعلية (Prototype)؟', type: 'radio' as const, options: ['نعم (Figma Prototype)', 'لا، صور ثابتة تكفي'], required: true },
        { label: 'من هم مستخدمو النظام الرئيسيون؟', type: 'textarea' as const, placeholder: 'صف جمهورك المستهدف واحتياجاتهم...' },
        { label: 'الموعد النهائي لتسليم التصاميم', type: 'text' as const, placeholder: 'مثلاً: خلال أسبوعين' }
    ];

    return (
        <main className="pt-32 pb-32 bg-white dark:bg-black transition-colors duration-500 overflow-hidden">
            <section className="px-6 md:px-12 max-w-[1400px] mx-auto">

                {/* Section 1: Problem Awareness */}
                <div className="mb-48">
                    <SectionHeader
                        tag="المشكلة الحقيقية"
                        title="الواجهة الجميلة <br/> <span className='text-red-500'>لا تعني تجربة ناجحة.</span>"
                        subtitle="UX/UI السيئ لا يُغضب المستخدم… بل يُربكه، والارتباك يعني مغادرة."
                        icon={<X className="w-5 h-5 text-red-500" />}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                        {[
                            { t: "المستخدم لا يفهم", d: "ما المطلوب منه؟ غموض الهدف.", i: <Brain className="text-red-500" /> },
                            { t: "المسار غير واضح", d: "أين يضغط التالي؟ تشتت بصري.", i: <Map className="text-orange-500" /> },
                            { t: "الجهد الذهني مرتفع", d: "تفكير زائد لإنجاز مهمة بسيطة.", i: <Zap className="text-yellow-500" /> },
                            { t: "القرار يتأخر", d: "أو لا يحدث بسبب كثرة الخيارات.", i: <Clock className="text-gray-500" /> }
                        ].map((item, i) => (
                            <div key={i} className="bento-card p-8 bg-gray-50 dark:bg-[#151516] border border-black/5 dark:border-white/10 group hover:border-red-500/30 transition-all">
                                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-white/5 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                    {i === 1 ? <Layout className="text-orange-500" /> : item.i}
                                </div>
                                <h4 className="text-lg font-black text-gray-900 dark:text-white mb-2">{item.t}</h4>
                                <p className="text-gray-500 dark:text-gray-400 font-bold text-sm leading-relaxed">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 2: Reframing */}
                <div className="mb-48 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="text-start">
                        <SectionHeader
                            tag="التحول الذهني"
                            title="UX/UI ليس ذوقًا… <br/> <span className='text-purple-600'>بل علم قرار.</span>"
                            subtitle="نحن لا نصمم شاشات، نحن نُهندس كيف يفكر المستخدم، ماذا يرى أولًا، ومتى يقرر."
                            icon={<Brain className="w-5 h-5 text-purple-600" />}
                        />
                        <div className="mt-10 space-y-6">
                            <div className="flex items-center gap-4 text-xl font-bold text-red-500 opacity-60">
                                <X size={24} />
                                <span>❌ هل التصميم جميل؟</span>
                            </div>
                            <div className="flex items-center gap-4 text-2xl font-black text-green-500">
                                <CheckCircle2 size={32} />
                                <span>✅ هل يقود المستخدم للفعل الصحيح بأقل مجهود؟</span>
                            </div>
                        </div>
                    </div>
                    <div className="bento-card p-12 bg-purple-500/5 relative overflow-hidden text-start border-purple-500/10 h-[400px] flex items-center justify-center">
                        <div className="relative z-10 text-center">
                            <Target size={100} className="text-purple-500 mx-auto mb-6 opacity-80" />
                            <p className="text-3xl font-black text-gray-900 dark:text-white">الشكل يتبع <span className="text-purple-500">الوظيفة</span></p>
                        </div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(168,85,247,0.1)_0%,_transparent_60%)]"></div>
                    </div>
                </div>

                {/* Section 3: Methodology */}
                <div className="mb-48">
                    <SectionHeader
                        tag="منهجيتنا"
                        title="التصميم يبدأ <br/> <span className='text-blue-500'>قبل الألوان.</span>"
                        subtitle="نبدأ كل مشروع برحلة استكشاف لضمان أن كل بكسل يخدم هدفاً تجارياً حقيقياً."
                        icon={<Lightbulb className="w-5 h-5 text-blue-500" />}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                        {[
                            { t: "فهم الهدف التجاري", d: "تسجيل؟ شراء؟ تواصل؟ استخدام متكرر؟", i: <Target className="text-blue-500" /> },
                            { t: "تحليل المستخدم", d: "من هو؟ ماذا يريد؟ ما الذي يعيقه؟", i: <Users className="text-blue-500" /> },
                            { t: "تحليل نية الاستخدام", d: "استكشاف -> مقارنة -> تنفيذ.", i: <Search className="text-blue-500" /> },
                            { t: "تصميم User Flow", d: "كل واجهة لها وظيفة ومؤشر نجاح.", i: <GitBranch className="text-blue-500" /> }
                        ].map((item, i) => (
                            <div key={i} className="bento-card p-8 bg-white dark:bg-[#0a0a0b] border border-black/5 dark:border-white/10 text-start group hover:-translate-y-2 transition-transform duration-500">
                                <div className="text-6xl font-black text-blue-500/10 mb-4 absolute top-4 left-4">{i + 1}</div>
                                <div className="mb-6 relative z-10">{item.i}</div>
                                <h4 className="text-xl font-black text-gray-900 dark:text-white mb-2 relative z-10">{item.t}</h4>
                                <p className="text-gray-500 dark:text-gray-400 font-bold text-sm relative z-10">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 4: User Research */}
                <div className="mb-48 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
                    <div className="lg:col-span-5 relative group overflow-hidden bento-card h-[500px] flex items-center justify-center bg-gray-50 dark:bg-black border border-black/5 dark:border-white/10">
                        <Microscope size={120} className="text-indigo-500 opacity-20 group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute bottom-10 left-0 right-0 text-center">
                            <p className="text-indigo-500 font-bold tracking-widest uppercase text-sm">تصميم مدعوم بالبيانات</p>
                        </div>
                    </div>
                    <div className="lg:col-span-7 text-start">
                        <SectionHeader
                            tag="أبحاث المستخدم"
                            title="لا نفترض… <br/> <span className='text-indigo-500'>بل نختبر.</span>"
                            subtitle="أفضل قرار تصميمي هو الذي تدعمه بيانات استخدام حقيقية."
                            icon={<Microscope className="w-5 h-5 text-indigo-500" />}
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                            {['شخصيات المستخدمين', 'المهام الوظيفية (JTBD)', 'تحليل الخرائط الحرارية', 'المقارنة المعيارية'].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-indigo-500/5 border border-indigo-500/10">
                                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                                    <span className="font-bold text-gray-700 dark:text-gray-300">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Section 5: UX Engineering */}
                <div className="mb-48">
                    <SectionHeader
                        tag="هندسة التجربة"
                        title="تقليل الجهد الذهني <br/> <span className='text-emerald-500'>هو مفتاح النجاح.</span>"
                        subtitle="نُصمم UX وفق مبادئ الوضوح والتدرج المنطقي والاستجابة الفورية."
                        icon={<Layers className="w-5 h-5 text-emerald-500" />}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        {[
                            { t: "هيكلة المعلومات (IA)", d: "تنظيم المحتوى في شجرة منطقية وسهلة الوصول.", i: <Layout className="text-emerald-500" /> },
                            { t: "المخططات الهيكلية (Wireframes)", d: "المخططات الهيكلية الأولية للتركيز على الوظيفة قبل الشكل.", i: <PenTool className="text-emerald-500" /> },
                            { t: "اختبار قابلية الاستخدام", d: "اختبار قابلية الاستخدام لكشف المشاكل مبكراً.", i: <CheckCircle2 className="text-emerald-500" /> }
                        ].map((item, i) => (
                            <div key={i} className="bento-card p-10 bg-gray-50 dark:bg-[#151516] border-t-4 border-emerald-500 group">
                                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{item.i}</div>
                                <h4 className="text-2xl font-black text-gray-900 dark:text-white mb-4">{item.t}</h4>
                                <p className="text-gray-500 dark:text-gray-400 font-bold leading-relaxed">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 6: UI Design */}
                <div className="mb-48 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="text-start order-2 lg:order-1">
                        <SectionHeader
                            tag="تصميم الواجهة UI"
                            title="الجمال <br/> <span className='text-pink-500'>يخدم الوظيفة.</span>"
                            subtitle="نُحوّل UX إلى واجهة ساحرة، متناسقة بصريًا، وواضحة هرميًا."
                            icon={<Palette className="w-5 h-5 text-pink-500" />}
                        />
                        <ul className="space-y-4 mt-10">
                            {[
                                "خطوط مدروسة لسهولة القراءة",
                                "أنظمة ألوان وظيفية ذات دلالات",
                                "أنظمة تصميم قابلة للتوسع",
                                "سهولة الوصول (Accessibility) للشمولية"
                            ].map((text, i) => (
                                <li key={i} className="flex items-center gap-3 text-lg font-bold text-gray-600 dark:text-gray-400">
                                    <Sparkles size={18} className="text-pink-500" />
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="order-1 lg:order-2 bento-card h-[400px] bg-pink-500/5 border-pink-500/10 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 grid grid-cols-3 gap-4 p-8 opacity-30 transform -rotate-12 scale-110">
                            {[...Array(9)].map((_, i) => (
                                <div key={i} className="bg-pink-500 rounded-3xl opacity-20"></div>
                            ))}
                        </div>
                        <Palette size={100} className="text-pink-500 relative z-10" />
                    </div>
                </div>

                {/* Section 7: Conversion-Centered Design */}
                <div className="mb-48 text-center">
                    <SectionHeader
                        tag="التصميم للتحويل"
                        title="كل عنصر يجب أن <br/> <span className='text-yellow-500'>يبرر وجوده.</span>"
                        subtitle="نصمم الواجهات لزيادة التفاعل، الإكمال، والشراء عبر إزالة الاحتكاك ودعم القرار."
                        icon={<MousePointer2 className="w-5 h-5 text-yellow-500" />}
                    />
                    <div className="flex flex-wrap justify-center gap-6 mt-16 max-w-4xl mx-auto">
                        {['دعوات الإجراء (CTAs)', 'إزالة الاحتكاك', 'دعم القرار البصري', 'توجيه الانتباه البصري'].map((hub, i) => (
                            <div key={i} className="px-10 py-6 bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl font-black text-xl text-yellow-600 dark:text-yellow-500 shadow-sm hover:scale-105 transition-transform">
                                {hub}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 8: Developer Integration */}
                <div className="mb-48 bento-card p-12 md:p-24 bg-gray-900 text-white border-none relative overflow-hidden text-start">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,_rgba(59,130,246,0.2)_0%,_transparent_50%)]"></div>
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <SectionHeader
                                tag="التكامل مع التطوير"
                                title="تصميم يُبنى… <br/> <span className='text-blue-400'>لا يُعاد رسمه.</span>"
                                subtitle="نُسلّم ملفات Figma منظمة، Design Tokens، ومكونات جاهزة لضمان تنفيذ دقيق."
                                icon={<FileCode className="w-5 h-5 text-blue-400" />}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { t: "ملفات فيجما", i: <Layout /> },
                                { t: "متغيرات التصميم", i: <Braces /> },
                                { t: "المكونات البرمجية", i: <Component /> },
                                { t: "توثيق التصميم", i: <FileText /> }
                            ].map((item, i) => (
                                <div key={i} className="p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10 flex flex-col items-center text-center gap-3 group hover:bg-white/20 transition-colors">
                                    <div className="text-blue-400 group-hover:scale-110 transition-transform">{item.i}</div>
                                    <span className="font-bold text-sm">{item.t}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Section 9: Measurement */}
                <div className="mb-48">
                    <SectionHeader
                        tag="القياس والتحسين"
                        title="التصميم عملية <br/> <span className='text-cyan-500'>حية ومستمرة.</span>"
                        subtitle="نقيس بعد الإطلاق ونُحسّن بناءً على النتائج لا الانطباعات."
                        icon={<Activity className="w-5 h-5 text-cyan-500" />}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
                        {['وقت إنجاز المهمة', 'معدل الانسحاب', 'معدل التحويل', 'معدل التفاعل'].map((metric, i) => (
                            <div key={i} className="p-8 border border-dashed border-gray-300 dark:border-gray-700 rounded-3xl text-center">
                                <TrendingUp className="mx-auto mb-4 text-cyan-500" />
                                <h5 className="font-black text-lg text-gray-900 dark:text-white">{metric}</h5>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 10: Proof & Impact */}
                <div className="mb-48 bento-card p-12 bg-gray-50 dark:bg-[#0c0c0d] border border-black/5 dark:border-white/10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x lg:divide-x-reverse divide-gray-200 dark:divide-gray-800">
                        {[
                            { v: "2.7x", l: "زيادة معدل التحويل", i: <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-4" /> },
                            { v: "40%", l: "تقليل الجهد الذهني", i: <Brain className="w-8 h-8 text-purple-500 mx-auto mb-4" /> },
                            { v: "35%", l: "تقليل وقت المهام", i: <Clock className="w-8 h-8 text-blue-500 mx-auto mb-4" /> },
                            { v: "12+", l: "دولة مستخدمة فيها", i: <Smartphone className="w-8 h-8 text-orange-500 mx-auto mb-4" /> },
                            { v: "$120k", l: "قيمة مدعومة", i: <DollarSign className="w-8 h-8 text-yellow-500 mx-auto mb-4" /> }
                        ].map((stat, i) => (
                            <div key={i} className="pt-8 lg:pt-0">
                                {stat.i}
                                <div className="text-4xl font-black text-gray-900 dark:text-white mb-2">{stat.v}</div>
                                <div className="text-sm font-bold text-gray-500">{stat.l}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 11: Audience */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-48">
                    <div className="bento-card p-12 bg-green-500/5 border-green-500/10">
                        <h4 className="text-2xl font-black text-green-600 mb-8 flex items-center gap-3">
                            <CheckCircle2 /> هذه الخدمة لك إذا:
                        </h4>
                        <ul className="space-y-6 text-start">
                            {[
                                "لديك منتج رقمي أو منصة.",
                                "تهتم بالتجربة لا الشكل فقط.",
                                "تريد نتائج قابلة للقياس.",
                                "تخطط للتوسع والنمو."
                            ].map((text, i) => (
                                <li key={i} className="flex gap-4 text-lg font-bold text-gray-700 dark:text-gray-300">
                                    <div className="shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bento-card p-12 bg-red-500/5 border-red-500/10 opacity-70">
                        <h4 className="text-2xl font-black text-red-600 mb-8 flex items-center gap-3">
                            <Ban /> غير مناسبة إذا كنت:
                        </h4>
                        <ul className="space-y-6 text-start">
                            {[
                                "تبحث عن تصميم “سريع” ورخيص.",
                                "لا تهتم بسلوك المستخدم.",
                                "تريد واجهة شكلية فقط للزينة."
                            ].map((text, i) => (
                                <li key={i} className="flex gap-4 text-lg font-bold text-gray-600 dark:text-gray-400">
                                    <div className="shrink-0 w-2 h-2 bg-red-500 rounded-full mt-3"></div>
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Section 12: Call to Action */}
                <div className="mt-48 text-center bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-[4rem] p-12 md:p-32">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter">
                            هل واجهتك تحقق أهدافك... <br />
                            <span className="text-purple-600 dark:text-purple-500">أم مجرد زينة؟</span>
                        </h2>
                        <p className="text-2xl text-gray-400 font-bold mb-16 leading-relaxed">
                            ابدأ بتحليل UX/UI يشمل مسارات المستخدم، نقاط التعطيل، وفرص التحسين.
                        </p>
                        <ServiceForm serviceName="تصميم واجهات المستخدم UI/UX" questions={designQuestions} />
                    </div>
                </div>

            </section>
        </main>
    );
};

export default DesignPage;
