import React from 'react';
import { Package, BrainCircuit, Workflow, Zap, ArrowRight, ShieldCheck, Sparkles, Smartphone, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';

const ProductsPage = () => {
    return (
        <main className="pt-32 pb-32">
            <section className="px-6 md:px-12 max-w-[1400px] mx-auto">
                <SectionHeader
                    tag="منتجاتنا الرقمية"
                    title="أدوات ذكية <br/> <span className='text-orange-500'>مصممة للتوسع والسيطرة.</span>"
                    subtitle="نطور برمجيات وأنظمة أتمتة حصرية تمنحك ميزة تنافسية لا تملكها الوكالات التقليدية، مما يسرع نمو متجرك بشكل آلي."
                    icon={<Package className="w-5 h-5 text-orange-400" />}
                />

                {/* Main Product: AI Sales Engine */}
                <div className="bento-card p-12 md:p-20 relative overflow-hidden group mb-24 min-h-[600px] flex flex-col justify-center">
                    <div className="absolute top-0 inset-inline-end-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,_rgba(249,115,22,0.1)_0%,_transparent_50%)]"></div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                        <div className="text-start">
                            <div className="inline-flex items-center gap-3 bg-white/5 text-orange-500 px-6 py-2 rounded-full text-sm font-black mb-8 border border-orange-500/20">
                                <BrainCircuit size={18} />
                                <span>الذكاء الاصطناعي التوليدي</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tighter">AI Sales Engine <br /> <span className="text-orange-500">v2.0</span></h2>
                            <p className="text-xl text-gray-400 font-medium mb-12 leading-relaxed">
                                محرك مبيعات متقدم يقوم بتقديم توصيات مخصصة لكل زائر بناءً على سلوكه اللحظي، مما يرفع معدلات التحويل (CR) بنسبة قد تصل إلى <span className="text-white font-black">45%</span> مقارنة بالأنظمة التقليدية.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/contact" className="bg-white text-black px-10 py-5 rounded-3xl font-black text-xl hover:bg-orange-500 hover:text-white transition-all shadow-2xl flex items-center gap-4">
                                    احصل على نسخة تجريبية
                                    <ArrowRight size={24} />
                                </Link>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { t: "تحليل نفسي للزوار", d: "فهم نفسية المشتري." },
                                { t: "تسعير ديناميكي", d: "تعديل السعر آلياً." },
                                { t: "تنبؤ بالمخزون", d: "منع نفاذ المنتجات." },
                                { t: "توصيات ذكية", d: "Cross-sell/Up-sell." }
                            ].map((f, i) => (
                                <div key={i} className="bg-white/5 p-8 rounded-[2.5rem] border border-white/5 backdrop-blur-xl text-start">
                                    <h4 className="text-white font-black text-xl mb-2">{f.t}</h4>
                                    <p className="text-gray-500 text-sm font-bold">{f.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Workflow Automations */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 text-start">
                    {[
                        {
                            t: "n8n Automation Sets",
                            d: "مجموعات أتمتة مسبقة الإعداد لربط Shopify مع WhatsApp و Google Sheets و CRM بلمسة زر.",
                            i: <Workflow className="text-blue-500" />,
                            tag: "Production Ready"
                        },
                        {
                            t: "Apple-Standard UI Kit",
                            d: "مكتبة واجهات مستخدم حصرية مصممة لزيادة الثقة والتحويل في المتاجر العربية.",
                            i: <Smartphone className="text-purple-500" />,
                            tag: "Design System"
                        },
                        {
                            t: "Merchant Ops Dashboard",
                            d: "لوحة تحكم مركزية تمنحك رؤية بانورامية لعملياتك المالية والتشغيلية في مكان واحد.",
                            i: <Zap className="text-yellow-500" />,
                            tag: "Real-time Data"
                        }
                    ].map((item, i) => (
                        <div key={i} className="bento-card p-10 group hover:border-white/20 transition-all flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-8">
                                    <div className="p-4 bg-white/5 rounded-2xl">{item.i}</div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 border border-white/10 px-3 py-1 rounded-full">{item.tag}</span>
                                </div>
                                <h4 className="text-2xl font-black text-white mb-4">{item.t}</h4>
                                <p className="text-gray-500 text-lg font-medium leading-relaxed mb-8">{item.d}</p>
                            </div>
                            <Link to="/contact" className="flex items-center gap-2 text-white font-black hover:text-orange-500 cursor-pointer transition-colors group">
                                <span>استكشف المزيد</span>
                                <ArrowRight size={18} className="group-hover:translate-x-[-4px] transition-transform" />
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Quality Badge */}
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto py-24 bg-gradient-to-tr from-gray-900/40 to-black rounded-[4rem] border border-white/5">
                    <ShieldCheck size={80} className="text-green-500 mb-8 opacity-40" />
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">برمجياتنا مصممة لتدوم</h3>
                    <p className="text-xl text-gray-500 font-medium leading-relaxed px-12">
                        كل تطبيق أو نظام أتمتة ننتجه يمر باختبارات جودة صارمة لضمان استقراره، أمانه، وتوافقه الكامل مع نمو نشاطك التجاري.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default ProductsPage;
