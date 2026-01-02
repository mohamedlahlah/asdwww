import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BarChart3, Globe, Layers, Smartphone, Sparkles, Target, Zap } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

// ----------------------------------------------------------------------
// DATA: Should normally be in a separate file or CMS
// ----------------------------------------------------------------------

const PROJECTS: any = {
    'fashion-brand-scale': {
        title: 'براند أزياء عالمي',
        category: 'توسع المتاجر والمبيعات',
        description: 'تحويل متجر من أداء متذبذب إلى نمو صاروخي من خلال إعادة تصميم تجربة المستخدم (UI/UX) وأتمتة سلاسل الإمداد.',
        stats: [
            { label: 'نمو الإيرادات', value: '+340%' },
            { label: 'متوسط العائد الإعلاني ROAS', value: 'x4.8' },
            { label: 'معدل التحويل', value: '3.2%' },
        ],
        challenge: 'كان العميل يعاني من ارتفاع تكلفة الاستحواذ (CPA) وانخفاض معدل الاحتفاظ بالعملاء (Retention). الموقع القديم كان بطيئاً ومعقداً.',
        solution: 'قمنا ببناء متجر جديد بالكامل (Headless Shopify) مع تجربة مستخدم تركز على الموبايل، وربطنا نظام Klaviyo لأتمتة استعادة السلات المتروكة.',
        color: 'emerald'
    },
    'food-delivery-app': {
        title: 'تطبيق توصيل ذكي',
        category: 'تطوير التطبيقات',
        description: 'بناء تطبيق توصيل متكامل يربط المطاعم بالسائقين مع خوارزميات توجيه ذكية.',
        stats: [
            { label: 'مستخدم نشط', value: '+50k' },
            { label: 'تقليل التكاليف', value: '-60%' },
            { label: 'سرعة الطلب', value: '15m' },
        ],
        challenge: 'التطبيق السابق كان ينهار تحت الضغط، ونظام التوجيه اليدوي كان مكلفاً وغير دقيق.',
        solution: 'أعدنا بناء الخلفية (Backend) باستخدام Node.js و Redis للسرعة، وطورنا خوارزمية ذكية لتعيين السائق الأقرب تلقائياً.',
        color: 'blue'
    },
    'tech-store-seo': {
        title: 'متجر إلكترونيات',
        category: 'نمو و SEO',
        description: 'ضاعفنا الزيارات المجانية (Organic Traffic) وهيمننا على كلمات مفتاحية عالية المنافسة.',
        stats: [
            { label: 'زيارات مجانية (Organic)', value: '+210%' },
            { label: 'المركز الأول في البحث', value: '450+' },
            { label: 'مبيعات من الـ SEO', value: '$120k' },
        ],
        challenge: 'المنافسة شرسة مع الكبار (Amazon/Noon)، والميزانية الإعلانية كانت تستنزف الأرباح.',
        solution: 'ركزنا على استراتيجية المحتوى التقني (Reviews & Comparisons) وتحسين البنية التقنية للمتجر لتتصدر النتائج.',
        color: 'purple'
    },
    'ar-investor': {
        title: 'رادار المستثمر',
        category: 'تقنية مالية وأنظمة (SaaS)',
        description: 'منصة استخبارات اقتصادية تُمكّن المستثمرين من اكتشاف الفرص الخفية في السوق السعودي من خلال تحليلات بيانات ضخمة ولوحات تحكم تفاعلية.',
        stats: [
            { label: 'نقطة بيانات معالجة', value: '+15M' },
            { label: 'تغطية السوق', value: '100%' },
            { label: 'سرعة اتخاذ القرار', value: '10x' },
        ],
        challenge: 'السوق المالي يعاني من "ضوضاء البيانات". المستثمر يغرق في الأرقام الخام دون الحصول على رؤية واضحة أو سياق اقتصادي يدعم القرار.',
        solution: 'طورنا "رادار المستثمر" كمنصة SaaS تعتمد على الخوارزميات لتحويل البيانات المبعثرة إلى "قصص اقتصادية" ومرئيات (Data Viz) تقود لقرار استثماري آمن.',
        color: 'emerald'
    },
    'real-estate-automation': {
        title: 'شركة تطوير عقاري',
        category: 'أتمتة و CRM',
        description: 'أتمتة عملية البيع بالكامل من "ليد" إلى "عقد" باستخدام CRM مخصص و n8n.',
        stats: [
            { label: 'عمل يدوي', value: '-90%' },
            { label: 'سرعة الاستجابة', value: '< 1min' },
            { label: 'مبيعات الوحدات', value: '+45%' },
        ],
        challenge: 'فريق المبيعات كان يضيع وقته في إدخال البيانات يدوياً، مما يؤدي لضياع الفرص الساخنة.',
        solution: 'ربطنا جميع قنوات الإعلانات بـ Salesforce عبر n8n، وقمنا بأتمتة رسائل الواتساب للتواصل الفوري مع العملاء.',
        color: 'orange'
    }
};

const CaseStudyPage = () => {
    const { id } = useParams();
    const project = PROJECTS[id || ''];

    if (!project) {
        return <Navigate to="/portfolio" replace />;
    }

    const { title, category, description, stats, challenge, solution, color } = project;

    const colorClasses: any = {
        emerald: { bg: 'bg-emerald-50 dark:bg-emerald-900/10', text: 'text-emerald-600 dark:text-emerald-400', border: 'border-emerald-500/20' },
        blue: { bg: 'bg-blue-50 dark:bg-blue-900/10', text: 'text-blue-600 dark:text-blue-400', border: 'border-blue-500/20' },
        purple: { bg: 'bg-purple-50 dark:bg-purple-900/10', text: 'text-purple-600 dark:text-purple-400', border: 'border-purple-500/20' },
        orange: { bg: 'bg-orange-50 dark:bg-orange-900/10', text: 'text-orange-600 dark:text-orange-400', border: 'border-orange-500/20' },
    };

    const theme = colorClasses[color] || colorClasses.emerald;

    return (
        <main className="pt-32 pb-32 bg-white dark:bg-black transition-colors duration-500">
            {/* Header / Hero */}
            <section className="px-6 md:px-12 max-w-[1400px] mx-auto mb-20 text-start">
                <Link to="/portfolio" className="inline-flex items-center gap-2 text-gray-400 hover:text-black dark:hover:text-white transition-colors mb-8 font-bold" dir="rtl">
                    <ArrowRight size={20} className="transform rotate-180" />
                    عودة للمعرض
                </Link>

                <div className={`inline-block px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6 ${theme.bg} ${theme.text} border ${theme.border}`}>
                    {category}
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter">{title}</h1>
                <p className="text-2xl text-gray-500 dark:text-gray-400 font-medium max-w-3xl mx-auto leading-relaxed">
                    {description}
                </p>
            </section>

            {/* Stats Grid */}
            <section className="px-6 md:px-12 max-w-[1400px] mx-auto mb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stats.map((stat: any, i: number) => (
                        <div key={i} className="bento-card p-10 text-center bg-gray-50 dark:bg-[#111] border border-black/5 dark:border-white/10">
                            <div className={`text-5xl md:text-6xl font-black mb-2 ${theme.text}`}>{stat.value}</div>
                            <div className="text-gray-400 font-bold uppercase tracking-widest text-sm">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Challenge & Solution */}
            <section className="px-6 md:px-12 max-w-[1200px] mx-auto mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
                    <div>
                        <SectionHeader
                            tag="التحدي"
                            title="المشكلة"
                            subtitle={challenge}
                            className="text-start mb-0"
                            icon={<Target className="text-red-500" />}
                        />
                    </div>
                    <div>
                        <SectionHeader
                            tag="الحل"
                            title="الإستراتيجية"
                            subtitle={solution}
                            className="text-start mb-0"
                            icon={<Zap className={theme.text} />}
                        />
                    </div>
                </div>
            </section>

            {/* Visual Proof (Mockup Placeholders) */}
            <section className="px-6 md:px-12 max-w-[1400px] mx-auto mb-32">
                <div className="bento-card p-8 md:p-12 bg-gray-100 dark:bg-[#151516] border-none mb-8">
                    <div className="aspect-video bg-gray-200 dark:bg-black/50 rounded-2xl flex items-center justify-center">
                        <span className="text-gray-400 font-black text-2xl">[ تصور الفائدة / لقطة شاشة ]</span>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="aspect-square bg-gray-100 dark:bg-[#151516] rounded-3xl flex items-center justify-center">
                        <span className="text-gray-400 font-black">[ عرض الجوال ]</span>
                    </div>
                    <div className="aspect-square bg-gray-100 dark:bg-[#151516] rounded-3xl flex items-center justify-center">
                        <span className="text-gray-400 font-black">[ لوحة التحليلات ]</span>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="text-center">
                <div className="inline-flex flex-col items-center gap-6">
                    <p className="text-gray-500 font-bold">هل أنت مستعد لتحقيق نتائج مماثلة؟</p>
                    <Link to="/contact" className="bg-black dark:bg-white text-white dark:text-black px-12 py-5 rounded-3xl font-black text-xl hover:scale-105 transition-transform">
                        ابدأ مشروعك الآن
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default CaseStudyPage;
