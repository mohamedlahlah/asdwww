import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BarChart3, Globe, Layers, Smartphone, Sparkles, Target, Zap } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

// ----------------------------------------------------------------------
// DATA: Should normally be in a separate file or CMS
// ----------------------------------------------------------------------

const PROJECTS: any = {
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
