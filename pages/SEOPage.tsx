import React from 'react';
import { Search, CheckCircle2, TrendingUp, Monitor, Zap, Globe, Target } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import ServiceForm from '../components/ServiceForm';

const SEOPage = () => {
    const seoQuestions = [
        { label: 'رابط موقعك الحالي (إن وجد)', type: 'text' as const, placeholder: 'https://example.com' },
        { label: 'هل تم عمل SEO سابقًا للموقع؟', type: 'radio' as const, options: ['نعم', 'لا'], required: true },
        { label: 'الكلمات المفتاحية التي تريد التركيز عليها', type: 'text' as const, placeholder: 'مثلاً: ملابس رجالية، عطور فرنسية' },
        { label: 'المنافسون الذين تريد التفوق عليهم', type: 'textarea' as const, placeholder: 'اذكر روابط مواقع المنافسين' },
        { label: 'هل لديك محتوى مكتوب جاهز؟', type: 'radio' as const, options: ['نعم، جاهز', 'لا، أحتاج لإنشائه'], required: true },
        { label: 'الهدف الرئيسي من تحسين SEO', type: 'select' as const, options: ['زيادة الزيارات', 'زيادة المبيعات', 'التعرف على العلامة التجارية'], required: true },
        { label: 'هل تريد تقارير دورية عن الأداء؟', type: 'radio' as const, options: ['نعم، أسبوعياً', 'نعم، شهرياً', 'لا شكراً'], required: true }
    ];

    return (
        <main className="pt-32 pb-32">
            <section className="px-6 md:px-12 max-w-[1400px] mx-auto">
                <SectionHeader
                    tag="السيطرة العضوية"
                    title="تصدر نتائج Google <br/> <span className='text-blue-500'>واحجز مكانك في القمة.</span>"
                    subtitle="نحن نطبق استراتيجيات SEO متقدمة تتجاوز مجرد 'الكلمات المفتاحية' لتصل إلى هندسة بنية الموقع بالكامل وفق خوارزميات Google الحديثة."
                    icon={<Search className="w-5 h-5 text-blue-400" />}
                />

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 text-start">
                    {[
                        { t: "تحليل نية الباحث", d: "نستهدف العملاء الذين لديهم 'نية شراء' حقيقية وليس مجرد باحثين عن معلومات عامة." },
                        { t: "SEO تقني عميق", d: "تحسين سرعة الصفحات، هيكلة البيانات (Schema)، وحل مشاكل الزحف والفهرسة." },
                        { t: "بناء سلطة النطاق", d: "بناء شبكة روابط خلفية (Backlinks) قوية وحصرية ترفع من موثوقية موقعك أمام محركات البحث." }
                    ].map((item, i) => (
                        <div key={i} className="bento-card p-10 hover:bg-white/[0.02] transition-colors">
                            <div className="w-2 h-12 bg-blue-600 rounded-full mb-6"></div>
                            <h4 className="text-2xl font-black text-white mb-4">{item.t}</h4>
                            <p className="text-gray-500 text-lg font-medium leading-relaxed">{item.d}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 reveal active">
                    {/* Main Stat Card */}
                    <div className="lg:col-span-8 bento-card p-12 md:p-16 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,_rgba(37,99,235,0.1)_0%,_transparent_50%)]"></div>
                        <div className="flex items-center justify-end gap-6 mb-16 relative z-10">
                            <div className="text-start">
                                <div className="font-bold text-2xl md:text-3xl text-white">تحليل النمو العضوي الصافي</div>
                                <p className="text-blue-400 font-bold">بيانات مقارنة (6 أشهر)</p>
                            </div>
                            <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center shrink-0"><TrendingUp size={32} className="text-blue-400" /></div>
                        </div>
                        <div className="space-y-12 relative z-10">
                            {[
                                { label: 'الظهور في النتائج الأولى', value: '94%', color: 'from-blue-600 to-indigo-600', w: '94%' },
                                { label: 'نسبة النقر للظهور (CTR)', value: '18.5%', color: 'from-green-600 to-emerald-600', w: '75%' },
                                { label: 'القيمة التجارية للزيارات', value: '+$120k', color: 'from-purple-600 to-pink-600', w: '85%' }
                            ].map((item, i) => (
                                <div key={i} className="space-y-5 text-start">
                                    <div className="flex justify-between text-xl font-bold text-white"><span>{item.label}</span><span>{item.value}</span></div>
                                    <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden shadow-inner border border-white/5">
                                        <div className={`h-full bg-gradient-to-r ${item.color} transition-all duration-[2s] ease-out shadow-[0_0_20px_rgba(37,99,235,0.3)]`} style={{ width: item.w }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* Quick Metrics */}
                    <div className="lg:col-span-4 grid grid-rows-2 gap-8">
                        <div className="bento-card p-10 flex flex-col justify-between group overflow-hidden">
                            <Zap size={40} className="text-blue-400 group-hover:scale-110 transition-transform duration-500" />
                            <div className="text-start">
                                <div className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-2">0.8s</div>
                                <p className="text-gray-500 font-bold text-sm uppercase tracking-widest">متوسط سرعة الموقع</p>
                            </div>
                        </div>
                        <div className="bento-card p-10 flex flex-col justify-between group overflow-hidden bg-gradient-to-b from-[#151516] to-black">
                            <Globe size={40} className="text-blue-500 group-hover:rotate-12 transition-transform duration-500" />
                            <div className="text-start">
                                <div className="text-3xl md:text-4xl font-black text-white mb-2">12+ دولة</div>
                                <p className="text-gray-500 font-bold text-sm uppercase tracking-widest">تغطية سيو إقليمية وعالمية</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Integration Service Form */}
                <ServiceForm serviceName="SEO - تحسين محركات البحث" questions={seoQuestions} />
            </section>
        </main>
    );
};

export default SEOPage;
