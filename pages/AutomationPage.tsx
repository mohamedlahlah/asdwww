import React from 'react';
import { Zap, Bot, Database, MessageSquare, Workflow, Settings, CheckCircle2, Cpu, Sparkles } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import ServiceForm from '../components/ServiceForm';

const AutomationPage = () => {
    const automationQuestions = [
        { label: 'ما هي أكثر عملية تستهلك وقت فريقك حالياً؟', type: 'textarea' as const, placeholder: 'مثلاً: إدخال البيانات، متابعة الطلبات، الردود المتكررة...' },
        { label: 'هل تستخدم أدوات أتمتة حالياً (Zapier/n8n)؟', type: 'radio' as const, options: ['نعم، أستخدم n8n', 'نعم، أستخدم Zapier/Make', 'لا، كل شيء يدوي'], required: true },
        { label: 'البرامج التي تريد ربطها ببعضها', type: 'text' as const, placeholder: 'مثلاً: Shopify + Google Sheets + WhatsApp' },
        { label: 'ما هي النتيجة المرجوة من الأتمتة؟', type: 'select' as const, options: ['تقليل الأخطاء البشرية', 'تسريع وقت التنفيذ', 'توفير التكاليف', 'إدارة حجم أكبر من العمليات'], required: true },
        { label: 'الميزانية التقريبية لحلول الأتمتة', type: 'text' as const, placeholder: 'مثلاً: 2000 - 4000 ريال' }
    ];

    return (
        <main className="pt-32 pb-32">
            <section className="px-6 md:px-12 max-w-[1400px] mx-auto">
                <SectionHeader
                    tag="أتمتة العمليات n8n"
                    title="وداعاً للعمل اليدوي <br/> <span className='text-purple-500'>مرحباً بالكفاءة المطلقة.</span>"
                    subtitle="نقوم بتصميم وبناء أنظمة ذكية تربط تطبيقاتك المفضلة ببعضها البعض، لتعمل تجارتك كالساعة وبدون تدخل بشري مستمر."
                    icon={<Workflow className="w-5 h-5 text-purple-400" />}
                />

                {/* Automation Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 text-start">
                    {[
                        { t: "ربط الأنظمة CRM/ERP", d: "جعل جميع برامجك تتحدث مع بعضها البعض تلقائياً دون تدخل بشري." },
                        { t: "أتمتة المبيعات والعملاء", d: "ردود فورية، متابعة العملاء المحتملين، وإغلاق الصفقات عبر البوتات الذكية." },
                        { t: "تقارير آلية لحظية", d: "تصلك تقارير الأداء والمبيعات على تليجرام أو واتساب بمجرد حدوثها." }
                    ].map((item, i) => (
                        <div key={i} className="bento-card p-10 hover:border-purple-500/30 transition-colors">
                            <div className="w-2 h-12 bg-purple-600 rounded-full mb-6"></div>
                            <h4 className="text-2xl font-black text-white mb-4">{item.t}</h4>
                            <p className="text-gray-500 text-lg font-medium leading-relaxed">{item.d}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 mb-24 items-center">
                    <div className="lg:col-span-5 space-y-8 text-start">
                        <div className="inline-flex items-center gap-3 bg-white/5 text-purple-500 px-6 py-2 rounded-full text-sm font-black mb-4 border border-purple-500/20">
                            <Cpu size={18} />
                            <span>تكنولوجيا المستقبل اليوم</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">وفر آلاف الساعات <br /><span className="text-purple-600">من العمل المرهق.</span></h2>
                        <p className="text-xl text-gray-500 font-medium leading-relaxed">الأتمتة ليست مجرد رفاهية، بل هي الأساس الذي يسمح لمتجرك بالنمو دون الحاجة لزيادة عدد الموظفين بشكل جنوني.</p>

                        <div className="space-y-6">
                            {[
                                "بناء مسارات عمل (Workflows) مخصصة بنسبة 100%.",
                                "تقليل الأخطاء البشرية الناتجة عن تكرار المهام.",
                                "زيادة سرعة الاستجابة لطلبات العملاء."
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-4 text-lg font-bold text-gray-400">
                                    <CheckCircle2 className="text-green-500 shrink-0" size={24} />
                                    <span>{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-7 bento-card p-12 md:p-16 relative overflow-hidden h-[500px] flex items-center justify-center bg-gradient-to-bl from-purple-900/10 to-black">
                        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,_rgba(139,92,246,0.1)_0%,_transparent_50%)]"></div>
                        <div className="text-center relative z-10">
                            <Sparkles size={80} className="text-purple-500 mb-8 mx-auto opacity-30 animate-pulse" />
                            <div className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">99% Less Manual Tasks</div>
                            <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">نظام يعمل بالنيابة عنك 24/7</p>
                        </div>
                    </div>
                </div>

                {/* Integration Service Form */}
                <ServiceForm serviceName="أتمتة العمليات n8n" questions={automationQuestions} />
            </section>
        </main>
    );
};

export default AutomationPage;
