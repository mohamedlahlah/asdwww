import React from 'react';
import { Palette, Layout, Smartphone, MousePointer2, GitBranch, FlaskConical, CheckCircle2, Sparkles, Heart } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import ServiceForm from '../components/ServiceForm';

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
        <main className="pt-32 pb-32">
            <section className="px-6 md:px-12 max-w-[1400px] mx-auto">
                <SectionHeader
                    tag="واجهات المستخدم UI/UX"
                    title="تصميم تجارب رقمية <br/> <span className='text-purple-500'>تجمع بين السحر والوظيفة.</span>"
                    subtitle="نحن لا نرسم واجهات جميلة فحسب، بل نبني رحلة مستخدم (User Journey) مدروسة بعناية تزيد من الولاء وتدفع العميل نحو التحويل النهائي."
                    icon={<Smartphone className="w-5 h-5 text-purple-400" />}
                />

                {/* UI/UX Focus Areas */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 text-start">
                    {[
                        { t: "هندسة تجربة المستخدم UX", d: "دراسة سلوك المستخدم وبناء هيكلة (Wireframes) تضمن سلاسة التنقل وسهولة الاستخدام.", i: <GitBranch className="text-purple-500" /> },
                        { t: "تصميم الواجهات UI", d: "تحويل الأفكار إلى واجهات بصرية ساحرة تتبع أحدث معايير Apple في التصميم والتفاعل.", i: <MousePointer2 className="text-purple-500" /> },
                        { t: "نماذج تفاعلية Prototype", d: "بناء نسخة حية من مشروعك تمكنك من تجربة كل ضغطة زر قبل البدء في البرمجة الفعلية.", i: <FlaskConical className="text-purple-500" /> }
                    ].map((item, i) => (
                        <div key={i} className="bento-card p-10 group hover:border-purple-500/30 transition-all">
                            <div className="mb-6">{item.i}</div>
                            <h4 className="text-2xl font-black text-white mb-4 group-hover:text-purple-500 transition-colors">{item.t}</h4>
                            <p className="text-gray-500 text-lg font-medium leading-relaxed">{item.d}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 mb-24 items-center">
                    <div className="lg:col-span-5 relative group overflow-hidden bento-card h-[600px] flex items-center justify-center bg-gradient-to-tr from-[#151516] to-black border-none">
                        <div className="absolute inset-0 bg-purple-600/5 opacity-50 blur-[100px]"></div>
                        <div className="relative text-center p-12">
                            <Layout size={100} className="text-purple-500 mb-8 mx-auto opacity-20 group-hover:rotate-12 transition-transform duration-700" />
                            <h3 className="text-4xl md:text-5xl font-black text-white mb-6">User-Centric Design</h3>
                            <p className="text-gray-500 text-lg font-bold">كل عنصر في التصميم يوضع لخدمة غرض محدد في رحلة العميل.</p>
                        </div>
                    </div>

                    <div className="lg:col-span-7 space-y-12 text-start">
                        <div className="inline-flex items-center gap-3 bg-white/5 text-purple-500 px-6 py-2 rounded-full text-sm font-black mb-4 border border-purple-500/20">
                            <Sparkles size={18} />
                            <span>فلسفة تصميم Apple</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">لماذا الـ UX هو <br /><span className="text-purple-600">محرك نمو عملك؟</span></h2>
                        <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl">التصميم الجيد ليس ما يبدو جيداً، بل ما يعمل جيداً. تعقيد الواجهة يعني هروب العميل؛ بساطتها وسلاستها تعني بقاءه وإتمامه لعملية الشراء.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { t: "تحليل User Flows", d: "رسم مسارات واضحة لكل نوع من المستخدمين." },
                                { t: "أنظمة تصميم مخصصة", d: "بناء Design System يضمن توحد الهوية وسرعة التطوير." },
                                { t: "تجاوب كامل (Responsive)", d: "تصاميم تبدو مذهلة على الشاشات الكبيرة والجوال." },
                                { t: "اختبار سهولة الاستخدام", d: "ضمان أن المستخدم يجد ما يبحث عنه في ثوانٍ." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-start border-s-2 border-purple-500/20 ps-6">
                                    <div className="text-start">
                                        <h5 className="font-black text-white text-xl mb-2">{item.t}</h5>
                                        <p className="text-gray-500 text-sm font-bold">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="pt-10 flex">
                            <div className="flex items-center gap-3 text-white font-black text-xl hover:text-purple-500 transition-colors cursor-pointer group">
                                <span>مشاهدة ملف أعمالنا (UI/UX)</span>
                                <Heart size={24} className="group-hover:fill-purple-500 transition-all" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Integration Service Form */}
                <ServiceForm serviceName="تصميم واجهات المستخدم UI/UX" questions={designQuestions} />
            </section>
        </main>
    );
};

export default DesignPage;
