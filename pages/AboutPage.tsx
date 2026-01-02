import { Target, Users2, ShieldCheck, Sparkles, Zap, BrainCircuit, Globe, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';

const AboutPage = () => {
    return (
        <main className="pt-32 pb-32 bg-white dark:bg-black transition-colors duration-500">
            <section className="px-6 md:px-12 max-w-[1400px] mx-auto">
                <SectionHeader
                    tag="عن التاجر الرقمي"
                    title="أكثر من مجرد وكالة... <br/> <span class='text-blue-500'>نحن المحرك الخفي لنموك.</span>"
                    subtitle="نشأنا لنعيد تعريف التجارة الرقمية. ندمج بين الإبداع البشري والذكاء التقني لنخلق منظومة نمو لا تتوقف."
                    icon={<Users2 className="w-5 h-5 text-blue-400" />}
                />

                {/* Values / DNA */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 text-start">
                    {[
                        { t: "انصهار كامل", d: "لا نعمل لأجلك، بل نعمل معك. نندمج في كيانك التجاري لنصبح الفريق الذي طالما تمنيت وجوده.", i: <Heart className="text-red-500" /> },
                        { t: "هيمنة تقنية", d: "نسخر أحدث ترسانات Apple وأتمتة n8n لنمنحك سبقاً تقنياً يجعلك تسبق المنافسين بسنوات ضوئية.", i: <BrainCircuit className="text-purple-500" /> },
                        { t: "أصول لا تتآكل", d: "نتجاوز ضجيج الترندات المؤقتة لنبني لك بنية تحتية رقمية تضخ الأرباح وتنمو قيمتها مع الزمن.", i: <Zap className="text-yellow-500" /> }
                    ].map((item, i) => (
                        <div key={i} className="bento-card p-10 hover:border-black/10 dark:hover:border-white/20 transition-all bg-gray-50 dark:bg-[#151516]">
                            <div className="mb-6">{item.i}</div>
                            <h4 className="text-2xl font-black text-gray-900 dark:text-white mb-4">{item.t}</h4>
                            <p className="text-gray-500 dark:text-gray-400 text-lg font-medium leading-relaxed">{item.d}</p>
                        </div>
                    ))}
                </div>

                {/* Story/Methodology */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                    <div className="space-y-8 text-start">
                        <div className="inline-flex items-center gap-3 bg-gray-100 dark:bg-white/5 text-blue-600 dark:text-blue-500 px-6 py-2 rounded-full text-sm font-black mb-4 border border-blue-500/10 dark:border-blue-500/20">
                            <Globe size={18} />
                            <span>رؤية عربية بمعايير عالمية</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white leading-tight tracking-tighter">لماذا "التاجر الرقمي"؟</h2>
                        <div className="space-y-6 text-xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                            <p>في عالم يتسارع فيه التحول الرقمي، يجد الكثير من التجار أنفسهم تائهين بين أدوات لا تعمل معاً، وحملات تسويقية تهدر الميزانية بدون عائد حقيقي.</p>
                            <p>جئنا لنغير هذا الواقع. نحن نقدم لك "فريق نمو مدمج" يتولى عنك الجوانب التقنية (SEO، برمجيات، أتمتة) والجوانب التسويقية (إعلانات، إستراتيجيات)، لتتفرغ أنت لما تتقنه: <span className="text-gray-900 dark:text-white">تطوير منتجاتك وخدمة عملائك.</span></p>
                        </div>
                    </div>
                    <div className="relative group w-full flex justify-center">
                        <div className="w-full max-w-lg">
                            <ReliabilityGraphic />
                        </div>
                    </div>
                </div>

                {/* Team / Culture */}
                <div className="bento-card p-12 md:p-20 text-center bg-gray-50 dark:bg-[#0c0c0d] border border-black/5 dark:border-white/5 relative overflow-hidden transition-colors mb-24">
                    <div className="absolute top-0 inset-inline-start-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(37,99,235,0.1)_0%,_transparent_70%)]"></div>
                    <div className="relative z-10">
                        <Sparkles size={60} className="text-blue-600 dark:text-blue-500 mb-8 mx-auto" />
                        <h3 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter">فريقنا هو سر قوتك</h3>
                        <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium mb-12">
                            نحن مجموعة من الشغوفين، المطورين، والمتخصصين في التسويق الرقمي، تجمعنا رؤية واحدة: تمكين التاجر العربي من المنافسة عالمياً وبأفضل الأدوات الممكنة.
                        </p>
                        <div className="flex flex-wrap justify-center gap-8 text-gray-900 dark:text-white font-black text-xl mb-12">
                            <div className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> <span>إستراتيجية</span></div>
                            <div className="flex items-center gap-2"><div className="w-2 h-2 bg-purple-500 rounded-full"></div> <span>تكنولوجيا</span></div>
                            <div className="flex items-center gap-2"><div className="w-2 h-2 bg-orange-500 rounded-full"></div> <span>نمو</span></div>
                        </div>
                    </div>
                </div>

                {/* Careers Section */}
                <div id="careers" className="scroll-mt-32">
                    <SectionHeader
                        tag="التوظيف"
                        title="انضم لنخبة <br/> <span class='text-blue-500'>التاجر الرقمي</span>"
                        subtitle="نبحث دائماً عن مواهب استثنائية تؤمن برؤيتنا وترغب في بناء المستقبل معنا."
                        className="mb-16"
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        {/* Job 1: Full Stack */}
                        <div className="bento-card p-8 bg-white dark:bg-[#151516] border border-black/5 dark:border-white/10 hover:border-blue-500/30 transition-all group">
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-blue-50 dark:bg-blue-500/10 rounded-xl text-blue-600 dark:text-blue-400">
                                    <Globe size={24} />
                                </div>
                                <span className="px-3 py-1 bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400 rounded-full text-xs font-black">متاح للتقديم</span>
                            </div>
                            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">Full Stack Developer</h3>
                            <p className="text-gray-500 dark:text-gray-400 font-bold mb-6">Laravel (PHP) & React</p>

                            <ul className="space-y-3 mb-8 text-gray-600 dark:text-gray-300 font-medium">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> <span>خبرة لا تقل عن سنتين (2 Years Exp)</span></li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> <span>إتقان PHP / Laravel Framework</span></li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> <span>خبرة في بناء APIs و Database Design</span></li>
                            </ul>
                        </div>

                        {/* Job 2: Media Buyer */}
                        <div className="bento-card p-8 bg-white dark:bg-[#151516] border border-black/5 dark:border-white/10 hover:border-purple-500/30 transition-all group">
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-purple-50 dark:bg-purple-500/10 rounded-xl text-purple-600 dark:text-purple-400">
                                    <Target size={24} />
                                </div>
                                <span className="px-3 py-1 bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400 rounded-full text-xs font-black">متاح للتقديم</span>
                            </div>
                            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">Senior Media Buyer</h3>
                            <p className="text-gray-500 dark:text-gray-400 font-bold mb-6">Performance Marketing</p>

                            <ul className="space-y-3 mb-8 text-gray-600 dark:text-gray-300 font-medium">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> <span>خبرة لا تقل عن سنتين (2 Years Exp)</span></li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> <span>إدارة ميزانيات إعلانية ضخمة (Meta/TikTok/Google)</span></li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> <span>قدرة عالية على تحليل البيانات ورفع الـ ROAS</span></li>
                            </ul>
                        </div>
                    </div>

                    {/* Application Form */}
                    <div className="max-w-2xl mx-auto bg-gray-50 dark:bg-[#0c0c0d] p-8 md:p-12 rounded-3xl border border-black/5 dark:border-white/5">
                        <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-8 text-center">قدّم طلب انضمام</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-900 dark:text-white">الاسم الكامل</label>
                                    <input type="text" className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl focus:outline-none focus:border-blue-500 transition-colors" placeholder="اسمك الثلاثي" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-900 dark:text-white">البريد الإلكتروني</label>
                                    <input type="email" className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl focus:outline-none focus:border-blue-500 transition-colors" placeholder="name@example.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-900 dark:text-white">المسمى الوظيفي</label>
                                <select className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl focus:outline-none focus:border-blue-500 transition-colors appearance-none text-start">
                                    <option value="">اختر الوظيفة...</option>
                                    <option value="fullstack">Full Stack Developer (Laravel/React)</option>
                                    <option value="mediabuyer">Media Buyer</option>
                                    <option value="other">أخرى (تدريب / تخصص آخر)</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-900 dark:text-white">رابط السيرة الذاتية (CV Link)</label>
                                <input type="url" className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl focus:outline-none focus:border-blue-500 transition-colors" placeholder="Google Drive / LinkedIn / Website" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-900 dark:text-white">رابط معرض الأعمال (Portfolio / GitHub)</label>
                                <input type="url" className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl focus:outline-none focus:border-blue-500 transition-colors" placeholder="Behance / GitHub / Live Links" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-900 dark:text-white">رسالة قصيرة (اختياري)</label>
                                <textarea rows={3} className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl focus:outline-none focus:border-blue-500 transition-colors" placeholder="حدثنا باختصار عن شغفك..."></textarea>
                            </div>

                            <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-600/20 active:scale-95">
                                إرسال الطلب
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

const ReliabilityGraphic = () => (
    <div className="w-full h-full min-h-[350px] flex flex-col items-center justify-center bg-gray-50 dark:bg-[#111] rounded-[2.5rem] border border-black/5 dark:border-white/5 relative overflow-hidden group">
        {/* Minimal Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent opacity-50"></div>

        {/* The Symbol */}
        <div className="relative z-10">
            <div className="relative w-32 h-32 md:w-40 md:h-40 bg-white dark:bg-black rounded-[2rem] shadow-2xl shadow-blue-500/10 flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-all duration-500 ease-out border border-black/5 dark:border-white/10">
                <ShieldCheck strokeWidth={1.5} className="w-16 h-16 md:w-20 md:h-20 text-blue-600 dark:text-blue-500" />

                {/* Status Indicator */}
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-gray-50 dark:border-[#111] shadow-sm"></div>
            </div>

            {/* Backdrop Shape */}
            <div className="absolute inset-0 bg-blue-600/5 dark:bg-blue-600/10 rounded-[2rem] transform rotate-6 scale-90 -z-10"></div>
        </div>

        {/* Text */}
        <div className="relative z-10 mt-10 text-center">
            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">شريك موثوق</h3>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Reliability Partners</p>
        </div>
    </div>
);

export default AboutPage;
