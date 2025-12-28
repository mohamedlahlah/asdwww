import React from 'react';
import { Briefcase, Users2, BarChart3, LineChart, ShieldCheck, PieChart, CheckCircle2, TrendingUp } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import ServiceForm from '../components/ServiceForm';

const ManagementPage = () => {
    const managementQuestions = [
        { label: 'ما هو حجم فريقك الحالي؟', type: 'select' as const, options: ['فرد واحد', '2-5 أشخاص', '6-15 شخص', 'أكثر من 15 شخص'], required: true },
        { label: 'ما هي أكبر عقبة تشغيلية تواجهك؟', type: 'textarea' as const, placeholder: 'مثلاً: إدارة المخزون، خدمة العملاء، فوضى المهام...' },
        { label: 'هل تستخدم حالياً أي نظام إدارة (ERP/Slack)؟', type: 'text' as const, placeholder: 'اذكر أسماء الأدوات التي تستخدمها' },
        { label: 'ما هو هدفك الرئيسي من الإدارة الخارجية؟', type: 'select' as const, options: ['توفير الوقت الشخصي', 'تقليل التكاليف التشغيلية', 'زيادة جودة المخرجات', 'التوسع السريع'], required: true },
        { label: 'الميزانية الشهرية المخصصة للإدارة والنمو', type: 'text' as const, placeholder: 'مثلاً: 3000 ريال شهرياً' }
    ];

    return (
        <main className="pt-32 pb-32">
            <section className="px-6 md:px-12 max-w-[1400px] mx-auto">
                <SectionHeader
                    tag="الإدارة والنمو الاستراتيجي"
                    title="تحويل الفوضى <br/> <span className='text-blue-500'>إلى منظومة نمو آلية.</span>"
                    subtitle="نحن نتحمل عنك عبء الإشراف والتشغيل اليومي، لنحرر وقتك للتركيز على الرؤية الكبيرة وتوسيع نطاق أعمالك."
                    icon={<Briefcase className="w-5 h-5 text-blue-400" />}
                />

                {/* Management Pillars Bento */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 text-start">
                    {[
                        { t: "إدارة العمليات (Ops)", d: "هيكلة سير العمل اليومي، تنظيم المهام، وضمان تنفيذها بأعلى جودة وفي الوقت المحدد.", i: <ShieldCheck className="text-blue-500" /> },
                        { t: "استراتيجية النمو", d: "وضع خطط توسعية مبنية على أرقام السوق الحقيقية واقتناص الفرص التجارية الواعدة.", i: <LineChart className="text-blue-500" /> },
                        { t: "إدارة المواهب", d: "توفير الدعم في اختيار وتوجيه الكفاءات اللازمة لنجاح متجرك الرقمي وتوسعه.", i: <Users2 className="text-blue-500" /> }
                    ].map((item, i) => (
                        <div key={i} className="bento-card p-10 group transition-all duration-500 hover:shadow-[0_40px_80px_rgba(37,99,235,0.05)]">
                            <div className="mb-6 flex justify-start">{item.i}</div>
                            <h4 className="text-2xl font-black text-white mb-4 group-hover:text-blue-500 transition-colors uppercase">{item.t}</h4>
                            <p className="text-gray-500 text-lg font-medium leading-relaxed">{item.d}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
                    <div className="lg:col-span-5 space-y-10 text-start">
                        <div className="inline-flex items-center gap-3 bg-white/5 text-blue-500 px-6 py-2 rounded-full text-sm font-black mb-4 border border-blue-500/20">
                            <TrendingUp size={18} />
                            <span>عقلية رواد الأعمال</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">نحن شركاء <br /><span className="text-blue-600">في النجاح.</span></h2>
                        <p className="text-xl text-gray-500 font-medium leading-relaxed">لسنا مجرد مستشارين، نحن فريق تنفيذي يعمل معك جنباً إلى جنب لتحقيق أهدافك التجارية الطموحة.</p>

                        <div className="space-y-6">
                            {[
                                "اجتماعات استراتيجية دورية لمتابعة الأداء.",
                                "تحليل مالي وتشغيلي دقيق لتعظيم الأرباح.",
                                "تطوير مستمر لثقافة العمل داخل فريقك."
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-4 text-lg font-bold text-gray-400">
                                    <CheckCircle2 className="text-green-500 shrink-0" size={24} />
                                    <span>{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-7 bento-card p-12 md:p-16 relative overflow-hidden flex flex-col items-center justify-center text-center bg-gradient-to-tr from-gray-900 to-black">
                        <PieChart size={120} className="text-blue-500 mb-10 opacity-20" />
                        <div className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">+120%</div>
                        <p className="text-gray-400 font-black text-lg uppercase tracking-widest">زيادة في كفاءة التشغيل الموثقة</p>
                    </div>
                </div>

                {/* Integration Service Form */}
                <ServiceForm serviceName="الإدارة والنمو الاستراتيجي" questions={managementQuestions} />
            </section>
        </main>
    );
};

export default ManagementPage;
