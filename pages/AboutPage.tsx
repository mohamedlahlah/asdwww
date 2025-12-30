import { Target, Users2, ShieldCheck, Sparkles, Zap, BrainCircuit, Globe, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';

const AboutPage = () => {
    return (
        <main className="pt-32 pb-32 bg-white dark:bg-black transition-colors duration-500">
            <section className="px-6 md:px-12 max-w-[1400px] mx-auto">
                <SectionHeader
                    tag="عن التاجر الرقمي"
                    title="لسنا مجرد وكالة، <br/> <span className='text-blue-500'>نحن شريكك في كواليس النمو.</span>"
                    subtitle="تأسست التاجر الرقمي لسد الفجوة بين التقنيات المعقدة واحتياجات رواد الأعمال الحقيقية، من خلال تقديم منظومة عمل مدمجة تضمن النتائج."
                    icon={<Users2 className="w-5 h-5 text-blue-400" />}
                />

                {/* Values / DNA */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 text-start">
                    {[
                        { t: "عقلية الشريك", d: "لا نتعامل كطرف خارجي، بل كجزء مدمج من فريقك، نجاحك هو مقياس نجاحنا الوحيد.", i: <Heart className="text-red-500" /> },
                        { t: "الابتكار التقني", d: "نستخدم أحدث تقنيات Apple و n8n للأتمتة لضمان بقائك في طليعة المنافسة.", i: <BrainCircuit className="text-purple-500" /> },
                        { t: "النمو المستدام", d: "لا نبحث عن الأرقام المؤقتة، بل نبني أنظمة تضمن لك تدفقاً مستداماً للمبيعات والعملاء.", i: <Zap className="text-yellow-500" /> }
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
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative bento-card p-12 md:p-20 bg-gray-50 dark:bg-black border border-black/5 dark:border-white/10 flex items-center justify-center transition-colors">
                            <div className="text-center">
                                <ShieldCheck size={100} className="text-blue-600 dark:text-blue-500 mb-8 mx-auto opacity-30" />
                                <div className="text-3xl font-black text-gray-900 dark:text-white mb-2 italic">100% Reliable</div>
                                <p className="text-gray-500 dark:text-gray-500 font-bold uppercase tracking-widest text-sm">التزام كامل بالجودة والمواعيد</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team / Culture */}
                <div className="bento-card p-12 md:p-20 text-center bg-gray-50 dark:bg-[#0c0c0d] border border-black/5 dark:border-white/5 relative overflow-hidden transition-colors">
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
                        <Link to="/contact" className="bg-black dark:bg-white text-white dark:text-black px-12 py-5 rounded-3xl font-black text-xl hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-black transition-all shadow-2xl">
                            انضم إلينا اليوم
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AboutPage;
