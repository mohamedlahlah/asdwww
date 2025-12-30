import React from 'react';
import { Layout, Palette, BarChart3, TrendingUp, Globe, Smartphone, Sparkles, ArrowUpRight, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';

const PortfolioPage = () => {
    return (
        <main className="pt-32 pb-32 bg-white dark:bg-black transition-colors duration-500">
            <section className="px-6 md:px-12 max-w-[1400px] mx-auto">
                <SectionHeader
                    tag="سجل نجاحنا"
                    title="قصص نمو <br/> <span className='text-emerald-500'>تتكلم لغة الأرقام.</span>"
                    subtitle="نحن لا نعرض مجرد تصاميم، بل نعرض تحولات حقيقية في أداء المتاجر والبراندات التي وثقت بنا لتحطيم أرقامها القياسية."
                    icon={<BarChart3 className="w-5 h-5 text-emerald-400" />}
                />

                {/* Portfolio Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-24">
                    {/* Big Client 1 */}
                    <Link to="/contact" className="lg:col-span-8 bento-card p-12 md:p-16 relative overflow-hidden group min-h-[500px] flex flex-col justify-between bg-gray-50 dark:bg-black border border-black/5 dark:border-white/10 transition-colors">
                        <div className="absolute top-0 inset-inline-start-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,_rgba(16,185,129,0.1)_0%,_transparent_50%)]"></div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-8 text-start">
                                <span className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-500 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest border border-emerald-500/20">E-Commerce Scale</span>
                                <span className="text-gray-500 dark:text-gray-500 text-xs font-bold">Fashion Sector</span>
                            </div>
                            <h3 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">براند أزياء عالمي</h3>
                            <p className="text-xl text-gray-500 dark:text-gray-400 font-medium max-w-xl leading-relaxed">
                                تحويل متجر من أداء متذبذب إلى نمو صاروخي من خلال إعادة تصميم تجربة المستخدم (UI/UX) وأتمتة سلاسل الإمداد.
                            </p>
                        </div>
                        <div className="relative z-10 flex flex-wrap gap-8 items-end justify-start">
                            <div className="text-start">
                                <div className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter mb-2">+340%</div>
                                <div className="text-emerald-600 dark:text-emerald-500 font-black text-sm uppercase tracking-widest">Growth in Revenue</div>
                            </div>
                            <div className="text-start">
                                <div className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter mb-2">x4.8</div>
                                <div className="text-emerald-600 dark:text-emerald-500 font-black text-sm uppercase tracking-widest">ROAS Average</div>
                            </div>
                        </div>
                    </Link>

                    {/* Side Case 1 */}
                    <Link to="/contact" className="lg:col-span-4 bento-card p-12 flex flex-col justify-between hover:border-emerald-500/30 transition-all cursor-pointer group bg-gray-50 dark:bg-[#151516]">
                        <div>
                            <Smartphone size={48} className="text-emerald-500 mb-8" />
                            <h4 className="text-2xl font-black text-gray-900 dark:text-white mb-4">تطبيق توصيل ذكي</h4>
                            <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed italic">"أتمتة خدمة العملاء قللت التكاليف بنسبة 60% وزادت سرعة الرد."</p>
                        </div>
                        <div className="pt-8 border-t border-black/5 dark:border-white/5 flex justify-between items-center text-gray-900 dark:text-white font-black group-hover:text-emerald-500 transition-colors">
                            <span>Success Story</span>
                            <ArrowUpRight size={20} />
                        </div>
                    </Link>

                    {/* Side Case 2 */}
                    <Link to="/contact" className="lg:col-span-4 bento-card p-12 flex flex-col justify-between hover:border-emerald-500/30 transition-all cursor-pointer group bg-gray-50 dark:bg-[#151516]">
                        <div>
                            <Globe size={48} className="text-emerald-500 mb-8" />
                            <h4 className="text-2xl font-black text-gray-900 dark:text-white mb-4">متجر إلقرونيات</h4>
                            <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed italic">"تحسين محركات البحث (SEO) ضاعف الزيارات المجانية خلال 4 أشهر فقط."</p>
                        </div>
                        <div className="pt-8 border-t border-black/5 dark:border-white/5 flex justify-between items-center text-gray-900 dark:text-white font-black group-hover:text-emerald-500 transition-colors">
                            <span>Case Study</span>
                            <ArrowUpRight size={20} />
                        </div>
                    </Link>

                    {/* Big Client 2 */}
                    <div className="lg:col-span-8 bento-card p-12 md:p-16 bg-gray-50 dark:bg-black border border-black/5 dark:border-white/10 min-h-[500px] flex flex-col justify-center text-center relative overflow-hidden transition-colors">
                        <div className="absolute top-0 inset-inline-start-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(16,185,129,0.05)_0%,_transparent_70%)]"></div>
                        <div className="relative z-10">
                            <Sparkles size={80} className="text-emerald-500 mb-10 mx-auto opacity-30" />
                            <h3 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter">Your Store is Next.</h3>
                            <p className="text-xl text-gray-500 dark:text-gray-400 font-medium max-w-xl mx-auto leading-relaxed mb-12">
                                نحن لا نجمع المشاريع، نحن نختار شركاء لديهم الطموح الكافي للسيطرة على أسواقهم. هل أنت مستعد؟
                            </p>
                            <Link to="/contact" className="bg-emerald-600 text-white px-12 py-5 rounded-3xl font-black text-xl hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all shadow-2xl mx-auto inline-block">
                                ابدأ مشروعك الآن
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Industries Section */}
                <div className="text-start mb-16">
                    <h4 className="text-gray-400 dark:text-gray-500 font-black text-sm uppercase tracking-[0.3em] mb-4">خبراتنا تشمل</h4>
                    <div className="flex flex-wrap gap-x-12 gap-y-6 text-2xl md:text-4xl font-black text-gray-200 dark:text-white/20">
                        <span className="hover:text-emerald-500 transition-colors cursor-default">FASHION</span>
                        <span className="hover:text-emerald-500 transition-colors cursor-default">ELECTRONICS</span>
                        <span className="hover:text-emerald-500 transition-colors cursor-default">SAAS</span>
                        <span className="hover:text-emerald-500 transition-colors cursor-default">HEALTHCARE</span>
                        <span className="hover:text-emerald-500 transition-colors cursor-default">LOGISTICS</span>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default PortfolioPage;
