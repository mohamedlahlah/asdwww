import React from 'react';
import { Search, TrendingUp, Zap, Globe, ShieldCheck, Target, MousePointer2, BarChart3, Layers, LayoutPanelLeft, Compass, Info, Link2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import ServiceForm from '../components/ServiceForm';
import FAQ from '../components/FAQ';

const SEOPage = () => {
    const seoQuestions = [
        { label: 'رابط موقعك الحالي (إن وجد)', type: 'text' as const, placeholder: 'https://example.com' },
        { label: 'هل تم تحسين محركات البحث (SEO) سابقًا للموقع؟', type: 'radio' as const, options: ['نعم', 'لا'], required: true },
        { label: 'الكلمات المفتاحية التي تريد التركيز عليها', type: 'text' as const, placeholder: 'مثلاً: ملابس رجالية، عطور فرنسية' },
        { label: 'المنافسون الذين تريد التفوق عليهم', type: 'textarea' as const, placeholder: 'اذكر روابط مواقع المنافسين' },
        { label: 'هل لديك محتوى مكتوب جاهز؟', type: 'radio' as const, options: ['نعم، جاهز', 'لا، أحتاج لإنشائه'], required: true },
        { label: 'الهدف الرئيسي من تحسين السيو', type: 'select' as const, options: ['زيادة الزيارات', 'زيادة المبيعات', 'التعرف على العلامة التجارية'], required: true },
        { label: 'هل تريد تقارير دورية عن الأداء؟', type: 'radio' as const, options: ['نعم، أسبوعياً', 'نعم، شهرياً', 'لا شكراً'], required: true }
    ];

    return (
        <main className="pt-32 pb-32 bg-white dark:bg-black transition-colors duration-500 overflow-hidden">
            <section className="px-6 md:px-12 max-w-[1400px] mx-auto">
                {/* Section 1: The Problem (Breaking the Illusion) */}
                <SectionHeader
                    tag="كسر الوهم"
                    title="الزيارات وحدها <br/> <span className='text-red-500'>لا تصنع مبيعات.</span>"
                    subtitle="معظم المواقع تخسر المال رغم وجود زيارات، لأن السيو (SEO) التقليدي يجذب 'باحثين عن معلومات' لا 'عملاء بنية شراء'. إن لم يكن موقعك مبنيًا على نية الشراء، فأنت تحسّن شيئًا لا يبيع."
                    icon={<Search className="w-5 h-5 text-red-500" />}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    <div className="bento-card p-12 bg-red-50/30 dark:bg-red-500/5 border-red-100 dark:border-red-500/10">
                        <h4 className="text-2xl font-black text-gray-900 dark:text-white mb-6">جوجل اليوم لا يكافئ الكثرة</h4>
                        <p className="text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                            الخوارزميات الحديثة تبحث عن "دقة الفهم" و "نية الباحث" و "تجربة المستخدم الكاملة". نحن ننتقل بك من عقلية حشو الكلمات إلى عقلية الهيمنة على النتائج.
                        </p>
                    </div>
                    <div className="bento-card p-12 bg-gray-50 dark:bg-[#151516] flex items-center justify-center">
                        <div className="text-center">
                            <div className="text-5xl font-black text-red-500 mb-4 tracking-tighter">السيو ≠ مجرد زيارات</div>
                            <div className="text-xl font-bold text-gray-400 uppercase tracking-widest">السيو = نية تجارية (Commercial Intent)</div>
                        </div>
                    </div>
                </div>

                {/* Section 2: Methodology (The Mindset Shift) */}
                <div className="mb-32">
                    <SectionHeader
                        tag="المنهجية"
                        title="سيو مبني على نية الباحث <br/> <span className='text-blue-500'>وليس مجرد كلمات.</span>"
                        subtitle="نحن لا نستهدف كلمات... نحن نعيد هندسة موقعك حول نية البحث التجارية والشرائية (Commercial & Transactional Intent)."
                        icon={<Target className="w-5 h-5 text-blue-500" />}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-start">
                        {[
                            {
                                t: "تحليل مسار البحث الكامل",
                                d: "تتبع رحلة العميل في البحث (Search Journey) لضمان التواجد في كل مرحلة.",
                                icon: <Compass className="text-blue-500" />
                            },
                            {
                                t: "ربط الصفحات بأهداف شريكة",
                                d: "كل صفحة يتم إنشاؤها لها هدف تجاري واضح يقود للتحويل أو البيع مباشرة.",
                                icon: <Target className="text-blue-500" />
                            },
                            {
                                t: "هيكلة تقود للقرار",
                                d: "تصميم بنية محتوى تقود المستخدم بسلاسة من السؤال إلى المقارنة ثم إلى قرار الشراء.",
                                icon: <Layers className="text-blue-500" />
                            }
                        ].map((item, i) => (
                            <div key={i} className="bento-card p-10 bg-gray-50 dark:bg-[#151516] hover:border-blue-500/30 transition-all group">
                                <div className="w-12 h-12 bg-white dark:bg-white/5 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h4 className="text-2xl font-black text-gray-900 dark:text-white mb-4">{item.t}</h4>
                                <p className="text-gray-500 dark:text-gray-400 text-lg font-medium leading-relaxed">{item.d}</p>
                            </div>
                        ))}
                    </div>

                    {/* Google Standards Tags */}
                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        {['نية البحث (Search Intent)', 'المحتوى المفيد (Helpful Content)', 'معايير EEAT (الخبرة والمصداقية)'].map((tag, i) => (
                            <span key={tag} className="px-6 py-2 bg-blue-50 dark:bg-blue-500/5 text-blue-600 dark:text-blue-400 font-black rounded-full text-sm border border-blue-100 dark:border-blue-500/10">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Section 3: Technical Foundation */}
                <div className="mb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-4 flex flex-col justify-center text-start">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-100 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-full text-xs font-black text-gray-400 uppercase tracking-widest mb-6 w-fit">
                                <Zap size={14} className="text-yellow-500" />
                                الأساس التقني
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight mb-6">
                                جوجل لا يثق بالمواقع <br />
                                <span className="text-yellow-500">البطيئة أو المشوشة.</span>
                            </h2>
                            <p className="text-xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                                نفذنا تحسينات تقنية شاملة تجعل موقعك مفهوماً بوضوح لخوارزميات جوجل... وسهلاً للإنسان.
                            </p>
                        </div>
                        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { t: "سرعة الصفحات", d: "تحسين مؤشرات الويب الحيوية (Core Web Vitals) لضمان تحميل لحظي.", v: <Zap size={32} className="text-yellow-500" /> },
                                { t: "الزحف والفهرسة", d: "حل مشاكل الزحف والفهرسة (Crawl & Indexing) لضمان ظهور كل صفحة.", v: <Compass size={32} className="text-blue-500" /> },
                                { t: "هيكلة البيانات", d: "استخدام البيانات المنظمة (Schema) لشرح محتوى الموقع لخوارزميات البحث.", v: <Layers size={32} className="text-purple-500" /> },
                                { t: "سلطة الموضوع", d: "تحسين الربط الداخلي لتعزيز (Topical Authority) واكتساب ثقة جوجل.", v: <Link2 size={32} className="text-indigo-500" /> }
                            ].map((item, i) => (
                                <div key={i} className="bento-card p-8 bg-gray-50 dark:bg-black border border-black/5 dark:border-white/10">
                                    <div className="text-3xl mb-4">{item.v}</div>
                                    <h5 className="text-xl font-black text-gray-900 dark:text-white mb-2">{item.t}</h5>
                                    <p className="text-gray-500 dark:text-gray-400 font-bold leading-relaxed">{item.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Section 4: Domain Authority */}
                <div className="mb-32 p-12 md:p-24 bento-card relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-900 text-white border-none shadow-[0_20px_50px_rgba(37,99,235,0.3)]">
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,_rgba(255,255,255,0.15)_0%,_transparent_50%)]"></div>
                    <div className="relative z-10 max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-xs font-black uppercase tracking-widest mb-10">
                            <ShieldCheck size={16} />
                            سلطة النطاق
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter">
                            جوجل لا يصنفك... <br />
                            <span className="text-blue-300">بل يقيم ثقتك.</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 text-start">
                            <div>
                                <h4 className="text-2xl font-black mb-4">بناء الثقة (Domain Trust)</h4>
                                <p className="text-blue-100/80 text-lg leading-relaxed font-medium">
                                    نحن لا نبني روابط خلفية (Backlinks) عشوائية، بل نركز على روابط من مواقع ذات صلة حقيقية وحماية موقعك من الروابط السامة.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-black mb-4">رفع قيمة النطاق</h4>
                                <p className="text-blue-100/80 text-lg leading-relaxed font-medium">
                                    هدفنا هو تحويل موقعك إلى مرجع في مجاله (Topical Authority) ليتصدر تلقائياً دون الحاجة لمحاربة الخوارزميات.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 5: The Proof (Numbers) */}
                <div className="mb-32">
                    <SectionHeader
                        tag="الدليل بالأرقام"
                        title="نمو عضوي صافي <br/> <span className='text-gray-400'>بيانات مقارنة (6 أشهر)</span>"
                        subtitle="السيو الصحيح لا يرفع الترتيب فقط… بل يرفع قيمة كل زيارة إلى أقصى حد."
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 active">
                        {/* Main Stat Card */}
                        <div className="lg:col-span-8 bento-card p-12 md:p-16 relative overflow-hidden bg-gray-50 dark:bg-black border border-black/5 dark:border-white/10">
                            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,_rgba(37,99,235,0.05)_0%,_transparent_50%)]"></div>
                            <div className="flex items-center justify-end gap-6 mb-16 relative z-10">
                                <div className="text-start">
                                    <div className="font-bold text-2xl md:text-3xl text-gray-900 dark:text-white">تحليل العائد الاستثماري</div>
                                    <p className="text-blue-600 dark:text-blue-400 font-bold">مؤشرات التحويل والعائد (ROI & Conversion)</p>
                                </div>
                                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center shrink-0"><TrendingUp size={32} className="text-blue-600 dark:text-blue-400" /></div>
                            </div>
                            <div className="space-y-12 relative z-10">
                                {[
                                    { label: 'الظهور في النتائج الأولى', value: '94%', color: 'from-blue-600 to-indigo-600', w: '94%' },
                                    { label: 'نسبة النقر للظهور (CTR)', value: '18.5%', color: 'from-green-600 to-emerald-600', w: '75%' },
                                    { label: 'القيمة التجارية للزيارات', value: '+120 ألف دولار', color: 'from-purple-600 to-pink-600', w: '85%' }
                                ].map((item, i) => (
                                    <div key={i} className="space-y-5 text-start">
                                        <div className="flex justify-between text-xl font-bold text-gray-900 dark:text-white"><span>{item.label}</span><span className="text-left" style={{ direction: 'ltr' }}>{item.value}</span></div>
                                        <div className="h-4 w-full bg-gray-200 dark:bg-white/5 rounded-full overflow-hidden border border-black/5 dark:border-white/5">
                                            <div className={`h-full bg-gradient-to-r ${item.color} transition-all duration-[2s]`} style={{ width: item.w }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Metrics */}
                        <div className="lg:col-span-4 grid grid-rows-2 gap-8">
                            <div className="bento-card p-10 flex flex-col justify-between group bg-gray-50 dark:bg-[#151516]">
                                <Zap size={40} className="text-yellow-500" />
                                <div className="text-start">
                                    <div className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-2">0.8 ثانية</div>
                                    <p className="text-gray-500 font-bold text-sm uppercase tracking-widest">متوسط سرعة الموقع</p>
                                </div>
                            </div>
                            <div className="bento-card p-10 flex flex-col justify-between group bg-gray-50 dark:bg-[#0a0a0b]">
                                <Globe size={40} className="text-blue-500" />
                                <div className="text-start">
                                    <div className="text-4xl font-black text-gray-900 dark:text-white mb-2">12+ دولة</div>
                                    <p className="text-gray-500 font-bold text-sm uppercase tracking-widest">تغطية سيو عالمية</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 6: FAQ */}
                <FAQ
                    items={[
                        {
                            question: "متى سأبدأ في رؤية نتائج التحسين؟",
                            answer: "تحسين محركات البحث (SEO) هو استثمار طويل الأمد، وعادة ما تبدأ النتائج الملموسة في الظهور بين 3 إلى 6 أشهر، اعتماداً على شدة المنافسة في مجالك."
                        },
                        {
                            question: "هل تضمنون المركز الأول في جوجل؟",
                            answer: "لا أحد يضمن المركز الأول لأن خوارزميات جوجل تتغير باستمرار، ولكننا نضمن لك تحسناً جذرياً في الترتيب وزيادة في الزيارات العضوية ذات الجودة العالية."
                        },
                        {
                            question: "هل تقومون بكتابة المحتوى أيضاً؟",
                            answer: "نعم، لدينا فريق من كتاب المحتوى المتخصصين الذين يكتبون مواداً بيعية متوافقة مع محركات البحث تهدف لتحويل الزائر إلى عميل."
                        }
                    ]}
                />

                {/* Section 7: Action / Form */}
                <div className="mt-48 text-center bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-[4rem] p-12 md:p-32">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter">
                            هل تريد زوارًا... <br />
                            <span className="text-blue-600 dark:text-blue-500">أم عملاء؟</span>
                        </h2>
                        <p className="text-2xl text-gray-500 dark:text-gray-400 font-bold mb-16 leading-relaxed">
                            إذا كنت تبحث عن نمو عضوي قابل للقياس، وسيو يخدم المبيعات لا التقارير... ابدأ بتحليل استراتيجي مخصص لموقعك الآن.
                        </p>
                        <ServiceForm serviceName="السيو - تحلل نية - بنية - تقنية - سلطة" questions={seoQuestions} />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default SEOPage;
