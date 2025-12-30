import React from 'react';
import { Search, TrendingUp, Monitor, Palette, Workflow, Briefcase, Sparkles, ArrowRight, ShoppingBag, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';

const ServicesLandingPage = () => {
    const services = [
        {
            title: "بناء المتاجر الإلكترونية",
            desc: "متاجر Shopify ومنصات مخصصة بلمسة Apple وتجربة مستخدم عالمية تخدم البيع المباشر.",
            icon: <ShoppingBag className="text-blue-500" size={40} />,
            path: "/ecommerce",
            color: "blue"
        },
        {
            title: "مواقع الشركات المؤسسية",
            desc: "منصات قرار تعكس هوية شركتك وتبني الثقة مع الشركاء والمستثمرين والعملاء.",
            icon: <Building2 className="text-indigo-500" size={40} />,
            path: "/corporate-web",
            color: "indigo"
        },
        {
            title: "تحسين محركات البحث SEO",
            desc: "تصدر النتائج الأولى في جوجل واجعل عملاءك يجدونك عضوياً بدون إعلانات.",
            icon: <Search className="text-blue-500" size={40} />,
            path: "/seo",
            color: "blue"
        },
        {
            title: "إدارة الإعلانات الممولة",
            desc: "حملات إعلانية ذكية على سناب، تيك توك، وانستقرام تستهدف المشتري الفعلي.",
            icon: <TrendingUp className="text-orange-500" size={40} />,
            path: "/ads",
            color: "orange"
        },
        {
            title: "تصميم واجهات UI/UX",
            desc: "تحويل الأفكار إلى واقع بصري ساحر يزيد الولاء ويحفز عملية الشراء.",
            icon: <Palette className="text-purple-500" size={40} />,
            path: "/design",
            color: "purple"
        },
        {
            title: "أتمتة العمليات n8n",
            desc: "ربط تجارتك بأنظمة ذكية تعمل بالنيابة عنك وتوفر آلاف الساعات اليدوية.",
            icon: <Workflow className="text-purple-500" size={40} />,
            path: "/automation",
            color: "purple"
        }
    ];

    return (
        <main className="pt-32 pb-32 bg-white dark:bg-black transition-colors duration-500">
            <section className="px-6 md:px-12 max-w-[1400px] mx-auto">
                <SectionHeader
                    tag="منظومة الخدمات 360"
                    title="حلول متكاملة تضمن <br/> <span className='text-blue-500'>سيطرتك على السوق الرقمي.</span>"
                    subtitle="نحن لا نقدم خدمات مجزأة، بل نبني لك منظومة نمو متكاملة حيث يعمل كل قسم لتعزيز القسم الآخر لضمان أقصى كفاءة ممكنة."
                    icon={<Sparkles className="w-5 h-5 text-blue-400" />}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 text-start">
                    {services.map((service, i) => (
                        <Link
                            key={i}
                            to={service.path}
                            className="bento-card p-10 group hover:border-blue-500/30 transition-all flex flex-col justify-between min-h-[400px] bg-gray-50 dark:bg-[#151516]"
                        >
                            <div>
                                <div className="mb-10 p-5 bg-white dark:bg-white/5 w-fit rounded-[2rem] group-hover:scale-110 transition-transform duration-500 shadow-sm dark:shadow-none">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-6 tracking-tight group-hover:text-blue-500 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400 text-lg font-medium leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>
                            <div className="mt-12 flex items-center gap-4 text-gray-900 dark:text-white font-black text-lg group">
                                <span>استكشف الخدمة</span>
                                <ArrowRight size={20} className="group-hover:translate-x-[-4px] transition-transform" />
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Integration Value Prop */}
                <div className="bento-card p-12 md:p-20 bg-gray-50 dark:bg-black border border-blue-500/10 dark:border-blue-500/20 text-center relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_0%_100%,_rgba(37,99,235,0.05)_0% ,_transparent_50%)]"></div>
                    <h3 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-10 tracking-tighter relative z-10">هل تحتاج لإستراتيجية مخصصة؟</h3>
                    <p className="text-xl text-gray-500 dark:text-gray-400 font-medium max-w-2xl mx-auto mb-12 relative z-10">
                        إذا كنت تبحث عن باقة متكاملة تجمع بين أكثر من خدمة لتحقيق نمو سريع، فنحن هنا لتصميم "خطة الحرب" الخاصة بك.
                    </p>
                    <Link to="/contact" className="relative z-10 inline-block bg-blue-600 text-white px-12 py-5 rounded-[2.5rem] font-black text-xl hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all shadow-xl">
                        اطلب استشارة مجانية
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default ServicesLandingPage;
