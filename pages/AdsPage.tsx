import React from 'react';
import { TrendingUp, CheckCircle2, Target, BarChart3, Rocket, Users2, Sparkles, MessageSquare } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import ServiceForm from '../components/ServiceForm';

const AdsPage = () => {
    const adsQuestions = [
        { label: 'الهدف من الحملة الإعلانية؟', type: 'select' as const, options: ['زيادة المبيعات', 'التوعية بالعلامة التجارية', 'ترويج منتج محدد', 'تحميل تطبيق'], required: true },
        { label: 'المنصات المفضلة للإعلان', type: 'radio' as const, options: ['Google Ads', 'Meta (FB/IG)', 'TikTok', 'Snapchat', 'الكل'], required: true },
        { label: 'الميزانية المخصصة شهرياً (ر.س)', type: 'text' as const, placeholder: 'مثلاً: 5000 ريال' },
        { label: 'الجمهور المستهدف', type: 'textarea' as const, placeholder: 'العمر، الجنس، الموقع، الاهتمامات...' },
        { label: 'هل لديك تصميمات أو فيديوهات جاهزة؟', type: 'radio' as const, options: ['نعم، جاهزة', 'لا، أحتاج تصميمها'], required: true },
        { label: 'هل تريد تتبع التحويلات (Pixels)؟', type: 'radio' as const, options: ['نعم', 'لا'], required: true },
        { label: 'طبيعة الحملة الإعلانية', type: 'select' as const, options: ['حملة مستمرة', 'حملة موسمية / عرض لفترة محدودة'], required: true }
    ];

    return (
        <main className="pt-32 pb-32">
            <section className="px-6 md:px-12 max-w-[1400px] mx-auto">
                <SectionHeader
                    tag="نمو صاروخي سريع"
                    title="استثمر ذكاءك <br/> <span className='text-orange-500'>وضاعف مبيعاتك فوراً.</span>"
                    subtitle="نحن لا ندير حملات إعلانية؛ نحن نبني أنظمة تحويل متكاملة تضمن لك الوصول إلى العميل المثالي بأقل تكلفة ممكنة وأعلى عائد استثماري (ROAS)."
                    icon={<TrendingUp className="w-5 h-5 text-orange-400" />}
                />

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 text-start">
                    {[
                        { t: "استهداف الميكرو (Micro-Targeting)", d: "لا نهدر الميزانية على الجميع، نصل فقط لمن يبحثون عن منتجك في هذه اللحظة." },
                        { t: "تصميم إبداعي للتحويل", d: "إعلاناتنا لا تلفت الانتباه فحسب، بل مصممة سيكولوجياً لتقليل تردد العميل في الضغط." },
                        { t: "توسع مدروس (Scaling)", d: "عندما نجد 'كلمة السر' التي تعمل، نقوم بمضاعفة الميزانية بشكل آمن لزيادة المبيعات." }
                    ].map((item, i) => (
                        <div key={i} className="bento-card p-10 hover:border-orange-500/30 transition-colors">
                            <div className="w-2 h-12 bg-orange-600 rounded-full mb-6"></div>
                            <h4 className="text-2xl font-black text-white mb-4">{item.t}</h4>
                            <p className="text-gray-500 text-lg font-medium leading-relaxed">{item.d}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
                    <div className="lg:col-span-6 space-y-12 reveal">
                        <div className="text-start">
                            <div className="inline-flex items-center gap-3 bg-white/5 text-orange-500 px-6 py-2 rounded-full text-sm font-black mb-8 border border-orange-500/20">
                                <Sparkles size={18} />
                                <span>منهجية الفريق المدمج</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-[1.1]">نحن نحارب معك <br /> في ساحة المنافسة.</h2>
                            <p className="text-xl text-gray-500 leading-relaxed font-medium mb-12">فريقنا يحلل كل نقرة وكل قرش يتم إنفاقه. نحن لسنا مجرد منفذين، بل شركاء استراتيجيين نتحمل معك عبء التفكير في كيفية التفوق على المنافسين.</p>
                            <div className="space-y-6">
                                {[
                                    "إعداد الـ Pixel والـ Conversion API لضمان دقة البيانات.",
                                    "تقارير شفافة وسهلة القراءة تعرض الأرقام الحقيقية للنمو.",
                                    "اختبار مستمر (A/B Testing) للوصول للتركيبة الرابحة."
                                ].map((text, i) => (
                                    <div key={i} className="flex items-center gap-4 justify-start text-lg font-bold text-gray-400">
                                        <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 grid grid-cols-2 gap-6 reveal stagger-3">
                        <div className="space-y-6 pt-12">
                            <div className="p-10 bento-card bg-blue-600/90 text-white rounded-[3rem] shadow-2xl hover:-translate-y-4 transition-transform duration-500 border-none group relative overflow-hidden">
                                <div className="absolute -inset-1 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                                <h5 className="font-bold text-2xl mb-4 relative z-10">Google Ads</h5>
                                <p className="opacity-80 relative z-10">السيطرة على محركات البحث واليوتيوب.</p>
                            </div>
                            <div className="p-10 bento-card bg-black text-white rounded-[3rem] shadow-2xl hover:-translate-y-4 transition-transform duration-500 border border-white/10 group">
                                <h5 className="font-bold text-2xl mb-4">TikTok Ads</h5>
                                <p className="opacity-80">صناعة الصيحات والنمو الفيروسي السريع.</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="p-10 bento-card bg-[#1877F2]/80 text-white rounded-[3rem] shadow-2xl hover:-translate-y-4 transition-transform duration-500 border-none group">
                                <h5 className="font-bold text-2xl mb-4">Meta Ads</h5>
                                <p className="opacity-80">استهداف العواطف وبناء البراند عبر IG/FB.</p>
                            </div>
                            <div className="p-10 bento-card bg-[#FFFC00] text-black rounded-[3rem] shadow-2xl hover:-translate-y-4 transition-transform duration-500 border-none group">
                                <h5 className="font-bold text-2xl mb-4">Snapchat</h5>
                                <p className="opacity-70 font-bold">الهيمنة على السوق الخليجي والشباب.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bento-card p-10 bg-gradient-to-br from-gray-900 to-gray-950 border border-white/10 rounded-[3rem] shadow-2xl mb-24 reveal">
                    <div className="flex items-center justify-end gap-6 mb-16 relative z-10">
                        <div className="text-start">
                            <div className="font-bold text-2xl md:text-3xl text-white">إدارة ميزانية 4M+ ريال سنوياً</div>
                            <p className="text-orange-400 font-bold">عائد استثمار (ROAS) مستدام</p>
                        </div>
                        <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center shrink-0"><Sparkles size={32} className="text-orange-400" /></div>
                    </div>
                    <div className="space-y-12 relative z-10">
                        {[
                            { label: 'تخفيض تكلفة الاستحواذ (CAC)', value: '-42%', color: 'from-orange-600 to-red-600', w: '85%' },
                            { label: 'معدل الحفاظ على العميل', value: '68%', color: 'from-blue-600 to-emerald-600', w: '68%' },
                            { label: 'نمو المبيعات الشهري', value: 'x3.5', color: 'from-yellow-600 to-orange-600', w: '92%' }
                        ].map((item, i) => (
                            <div key={i} className="space-y-5 text-start">
                                <div className="flex justify-between text-xl font-bold text-white"><span>{item.label}</span><span>{item.value}</span></div>
                                <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden shadow-inner border border-white/5">
                                    <div className={`h-full bg-gradient-to-r ${item.color} transition-all duration-[2s] ease-out shadow-[0_0_20px_rgba(249,115,22,0.3)]`} style={{ width: item.w }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                {/* Integration Service Form */}
                <ServiceForm serviceName="إدارة الإعلانات الرقمية" questions={adsQuestions} />
            </section>
        </main>
    );
};

export default AdsPage;
