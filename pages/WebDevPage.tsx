import React from 'react';
import { Monitor, Layout, Rocket, Globe, Database, Smartphone, CheckCircle2, Server, Cpu } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import ServiceForm from '../components/ServiceForm';

const WebDevPage = () => {
    const webDevQuestions = [
        { label: 'نوع المتجر / الموقع المطلوب', type: 'select' as const, options: ['متجر Shopify جديد', 'تطوير متجر Shopify قائم', 'موقع تعريفي للشركة', 'منصة مخصصة (Custom)', 'أخرى'], required: true },
        { label: 'هل لديك هوية بصرية جاهزة؟', type: 'radio' as const, options: ['نعم، جاهزة', 'لا، أحتاج تصميمها معكم'], required: true },
        { label: 'عدد المنتجات / الخدمات المتوقع', type: 'text' as const, placeholder: 'مثلاً: 50 منتج' },
        { label: 'هل تحتاج لربط أنظمة خارجية؟', type: 'select' as const, options: ['ربط CRM', 'ربط بوابة دفع', 'ربط شركات شحن', 'أتمتة مخزون', 'لا أحتاج'], required: false },
        { label: 'وصف لمميزات خاصة تحتاجها', type: 'textarea' as const, placeholder: 'اشرح لنا أهم الوظائف التي تريدها في موقعك...' },
        { label: 'الميزانية المتوقعة للمشروع', type: 'text' as const, placeholder: 'مثلاً: 5000 - 10000 ريال' }
    ];

    return (
        <main className="pt-32 pb-32">
            <section className="px-6 md:px-12 max-w-[1400px] mx-auto">
                <SectionHeader
                    tag="بناء المواقع والمتاجر"
                    title="متاجر إلكترونية <br/> <span className='text-blue-500'>تبيع بينما أنت نائم.</span>"
                    subtitle="نقوم ببناء منصات بيع متكاملة تجمع بين التصميم الجذاب وسرعة الأداء الفائقة، مع التركيز الكامل على تجربة المستخدم لزيادة التحويل."
                    icon={<Monitor className="w-5 h-5 text-blue-400" />}
                />

                {/* Tech Stack Bento */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 text-start">
                    {[
                        { t: "متاجر Shopify متقدمة", d: "بناء متاجر بمعايير عالمية تجمع بين السرعة الفائقة وتجربة الشراء السلسة عبر شوبيفاي." },
                        { t: "أنظمة إدارة العملاء CRM", d: "إنشاء لوحات تحكم مخصصة تتيح لك رؤية كاملة لعملياتك وعملائك في مكان واحد." },
                        { t: "أداء وسرعة Apple-Standard", d: "نستخدم أحدث تقنيات الويب لضمان تحميل صفحاتك في أقل من ثانية واحدة (Core Web Vitals)." }
                    ].map((item, i) => (
                        <div key={i} className="bento-card p-10 hover:border-blue-500/30 transition-colors">
                            <div className="w-2 h-12 bg-blue-600 rounded-full mb-6"></div>
                            <h4 className="text-2xl font-black text-white mb-4">{item.t}</h4>
                            <p className="text-gray-500 text-lg font-medium leading-relaxed">{item.d}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-24 items-center">
                    <div className="lg:col-span-7 bento-card p-12 md:p-16 relative overflow-hidden min-h-[500px] flex flex-col justify-center">
                        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_0%_100%,_rgba(37,99,235,0.1)_0%,_transparent_50%)]"></div>
                        <div className="flex items-center justify-end gap-6 mb-16 relative z-10">
                            <div className="text-start">
                                <div className="font-bold text-2xl md:text-3xl text-white">متوسط سرعة تحميل 0.7 ثانية</div>
                                <p className="text-blue-400 font-bold">تحسين معدلات التحويل بنسبة +40%</p>
                            </div>
                            <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center shrink-0"><Cpu size={32} className="text-blue-400" /></div>
                        </div>
                        <div className="space-y-12 relative z-10">
                            {[
                                { label: 'سرعة التنقل بين الصفحات', value: '98/100', color: 'from-blue-600 to-cyan-600', w: '98%' },
                                { label: 'جاهزية للهواتف موبايل', value: '100%', color: 'from-green-600 to-emerald-600', w: '100%' },
                                { label: 'استقرار النظام وسرعة الرد', value: '99.9%', color: 'from-purple-600 to-indigo-600', w: '99%' }
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

                    <div className="lg:col-span-5 space-y-8 text-start">
                        <div className="inline-flex items-center gap-3 bg-white/5 text-blue-500 px-6 py-2 rounded-full text-sm font-black mb-4 border border-blue-500/20">
                            <Rocket size={18} />
                            <span>بنية تحتية صلبة</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">برمجة تخدم <br /><span className="text-blue-600">أهدافك التجارية.</span></h2>
                        <p className="text-xl text-gray-500 font-medium leading-relaxed">لا نكتفي بجعل الموقع يبدو جميلاً، بل نهتم بكل تفصيلة تقنية تضمن استمرارية عمله بكفاءة تحت أي ظروف.</p>

                        <div className="space-y-6">
                            {[
                                "توافق كامل مع معايير Apple للتصميم والأداء.",
                                "ربط احترافي مع قنوات التسويق والتحليلات.",
                                "دعم فني مستمر وتحديثات أمنية دورية."
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-4 text-lg font-bold text-gray-400">
                                    <CheckCircle2 className="text-green-500 shrink-0" size={24} />
                                    <span>{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Integration Service Form */}
                <ServiceForm serviceName="بناء المواقع والمتاجر" questions={webDevQuestions} />
            </section>
        </main>
    );
};

export default WebDevPage;
