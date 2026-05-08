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
        color: 'emerald',
        // Technical Specifications
        techStack: {
            frontend: ['React', 'TypeScript', 'TailwindCSS', 'Recharts', 'Framer Motion'],
            backend: ['Node.js', 'Express', 'PostgreSQL', 'Redis'],
            infrastructure: ['Vercel', 'AWS S3', 'CloudFlare CDN'],
            apis: ['Saudi Stock Exchange API', 'Financial Data APIs', 'News Aggregation APIs']
        },
        projectDetails: {
            pages: 12,
            duration: '4 أشهر',
            teamSize: 5,
            platform: 'Web Application (SaaS)',
            responsive: true,
            rtl: true
        },
        features: [
            'لوحة تحكم تفاعلية مع مؤشرات حية',
            'تحليل ذكي للأسهم والشركات',
            'تنبيهات فورية للفرص الاستثمارية',
            'تقارير مخصصة قابلة للتصدير',
            'نظام اشتراكات متعدد المستويات',
            'تكامل مع منصات التداول'
        ]
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
        <main className="pt-16 md:pt-24 pb-20 md:pt-32 md:pb-32 bg-white dark:bg-black transition-colors duration-500">
            {/* Header / Hero */}
            <section className="px-6 md:px-12 max-w-[1400px] mx-auto mb-12 md:mb-20 text-start">
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
            <section className="px-6 md:px-12 max-w-[1400px] mx-auto mb-16 md:mb-24">
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 md:gap-24 items-start">
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

            {/* Technical Specifications */}
            <section className="px-6 md:px-12 max-w-[1400px] mx-auto mb-32">
                <SectionHeader
                    tag="المواصفات التقنية"
                    title="التقنيات والأدوات"
                    subtitle="نستخدم أحدث التقنيات لضمان أداء عالٍ وتجربة مستخدم استثنائية"
                    className="mb-16"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {/* Frontend */}
                    <div className="bento-card p-8 bg-blue-50 dark:bg-blue-900/5 border-blue-100 dark:border-blue-500/10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center">
                                <Globe className="text-blue-500" size={20} />
                            </div>
                            <h4 className="text-lg font-black text-gray-900 dark:text-white">Frontend</h4>
                        </div>
                        <ul className="space-y-2">
                            {project.techStack.frontend.map((tech: string, i: number) => (
                                <li key={i} className="text-sm font-bold text-gray-600 dark:text-gray-400 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Backend */}
                    <div className="bento-card p-8 bg-purple-50 dark:bg-purple-900/5 border-purple-100 dark:border-purple-500/10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center">
                                <Layers className="text-purple-500" size={20} />
                            </div>
                            <h4 className="text-lg font-black text-gray-900 dark:text-white">Backend</h4>
                        </div>
                        <ul className="space-y-2">
                            {project.techStack.backend.map((tech: string, i: number) => (
                                <li key={i} className="text-sm font-bold text-gray-600 dark:text-gray-400 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Infrastructure */}
                    <div className="bento-card p-8 bg-green-50 dark:bg-green-900/5 border-green-100 dark:border-green-500/10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center">
                                <Zap className="text-green-500" size={20} />
                            </div>
                            <h4 className="text-lg font-black text-gray-900 dark:text-white">Infrastructure</h4>
                        </div>
                        <ul className="space-y-2">
                            {project.techStack.infrastructure.map((tech: string, i: number) => (
                                <li key={i} className="text-sm font-bold text-gray-600 dark:text-gray-400 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* APIs */}
                    <div className="bento-card p-8 bg-orange-50 dark:bg-orange-900/5 border-orange-100 dark:border-orange-500/10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center">
                                <BarChart3 className="text-orange-500" size={20} />
                            </div>
                            <h4 className="text-lg font-black text-gray-900 dark:text-white">APIs & Integrations</h4>
                        </div>
                        <ul className="space-y-2">
                            {project.techStack.apis.map((tech: string, i: number) => (
                                <li key={i} className="text-sm font-bold text-gray-600 dark:text-gray-400 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Project Details Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    <div className="bento-card p-6 text-center bg-gray-50 dark:bg-[#111]">
                        <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400 mb-2">{project.projectDetails.pages}</div>
                        <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">صفحة</div>
                    </div>
                    <div className="bento-card p-6 text-center bg-gray-50 dark:bg-[#111]">
                        <div className="text-2xl font-black text-blue-600 dark:text-blue-400 mb-2">{project.projectDetails.duration}</div>
                        <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">المدة</div>
                    </div>
                    <div className="bento-card p-6 text-center bg-gray-50 dark:bg-[#111]">
                        <div className="text-3xl font-black text-purple-600 dark:text-purple-400 mb-2">{project.projectDetails.teamSize}</div>
                        <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">أعضاء الفريق</div>
                    </div>
                    <div className="bento-card p-6 text-center bg-gray-50 dark:bg-[#111] col-span-2 md:col-span-3">
                        <div className="text-lg font-black text-gray-900 dark:text-white mb-2">{project.projectDetails.platform}</div>
                        <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">المنصة</div>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="px-6 md:px-12 max-w-[1200px] mx-auto mb-32">
                <SectionHeader
                    tag="المميزات الرئيسية"
                    title="ما يميز المشروع"
                    subtitle="مجموعة شاملة من الوظائف المتقدمة"
                    className="mb-16"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.features.map((feature: string, i: number) => (
                        <div key={i} className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-[#111] rounded-2xl border border-black/5 dark:border-white/5 hover:border-emerald-500/20 transition-all group">
                            <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                <Sparkles className="text-emerald-500" size={16} />
                            </div>
                            <p className="text-gray-900 dark:text-white font-bold text-lg">{feature}</p>
                        </div>
                    ))}
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
