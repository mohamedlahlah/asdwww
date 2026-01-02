import React, { useState } from 'react';
import { ArrowUpRight, BarChart3, Code2, Globe, Layout, Palette, ScanFace, Smartphone, Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';

const CATEGORIES = [
    { id: 'all', label: 'الكل' },
    { id: 'ecommerce', label: 'متاجر إلكترونية' },
    { id: 'app', label: 'تطبيقات وأنظمة' },
    { id: 'seo', label: 'نمو و SEO' },
    { id: 'automation', label: 'أتمتة' }
];

const PROJECTS = [
    {
        id: 'fashion-brand-scale',
        title: 'براند أزياء عالمي',
        description: 'تحويل متجر من أداء متذبذب إلى نمو صاروخي.',
        category: 'ecommerce',
        tags: ['Shopify Plus', 'UX/UI', 'أتمتة'],
        stats: '+340% إيرادات',
        color: 'bg-emerald-500',
        textColor: 'text-emerald-500',
        borderColor: 'border-emerald-500/20',
        bg: 'bg-emerald-50 dark:bg-emerald-900/5'
    },
    {
        id: 'food-delivery-app',
        title: 'تطبيق توصيل ذكي',
        description: 'بناء تطبيق توصيل متكامل مع خوارزميات توجيه.',
        category: 'app',
        tags: ['React Native', 'Node.js', 'Redis'],
        stats: '-60% تكاليف',
        color: 'bg-blue-500',
        textColor: 'text-blue-500',
        borderColor: 'border-blue-500/20',
        bg: 'bg-blue-50 dark:bg-blue-900/5'
    },
    {
        id: 'tech-store-seo',
        title: 'متجر إلكترونيات',
        description: 'هيمنة على نتائج البحث وزيادة المبيعات المجانية.',
        category: 'seo',
        tags: ['SEO تقني', 'استراتيجية محتوى', 'بناء روابط'],
        stats: '+210% زيارات',
        color: 'bg-purple-500',
        textColor: 'text-purple-500',
        borderColor: 'border-purple-500/20',
        bg: 'bg-purple-50 dark:bg-purple-900/5'
    },
    {
        id: 'ar-investor',
        title: 'رادار المستثمر',
        description: 'منصة ذكية لاكتشاف الفرص الخفية في السوق السعودي عبر تحليل البيانات.',
        category: 'app',
        tags: ['منصة سحابية (SaaS)', 'تحليل بيانات', 'تقنية مالية'],
        stats: 'رائد في التقنية المالية',
        color: 'bg-emerald-600',
        textColor: 'text-emerald-600',
        borderColor: 'border-emerald-600/20',
        bg: 'bg-emerald-50 dark:bg-emerald-900/5'
    },
    {
        id: 'real-estate-automation',
        title: 'شركة تطوير عقاري',
        description: 'أتمتة عملية البيع وربط العملاء بالـ CRM.',
        category: 'automation',
        tags: ['n8n', 'Salesforce', 'WhatsApp API'],
        stats: '-90% عمل يدوي',
        color: 'bg-orange-500',
        textColor: 'text-orange-500',
        borderColor: 'border-orange-500/20',
        bg: 'bg-orange-50 dark:bg-orange-900/5'
    }
];

const PortfolioPage = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredProjects = activeCategory === 'all'
        ? PROJECTS
        : PROJECTS.filter(p => p.category === activeCategory);

    return (
        <main className="pt-32 pb-32 bg-white dark:bg-black transition-colors duration-500 min-h-screen">
            <section className="px-6 md:px-12 max-w-[1400px] mx-auto">
                <SectionHeader
                    tag="سجل نجاحنا"
                    title="قصص نمو <br/> <span className='text-emerald-500'>تتكلم لغة الأرقام.</span>"
                    subtitle="استكشف كيف ساعدنا الشركات على تحقيق قفزات نوعية في الأداء والعائد."
                    icon={<BarChart3 className="w-5 h-5 text-emerald-400" />}
                />

                {/* Filters */}
                <div className="flex flex-wrap gap-4 mb-16 justify-center">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${activeCategory === cat.id
                                ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg scale-105'
                                : 'bg-gray-100 dark:bg-white/5 text-gray-500 hover:bg-gray-200 dark:hover:bg-white/10'
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up">
                    {filteredProjects.map((project) => (
                        <Link
                            to={`/portfolio/${project.id}`}
                            key={project.id}
                            className={`bento-card p-10 group relative overflow-hidden border transition-all hover:-translate-y-2 hover:shadow-2xl ${project.bg} ${project.borderColor}`}
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${project.color} bg-opacity-10`}>
                                    <ArrowUpRight className={`${project.textColor} transform scale-x-[-1]`} />
                                </div>
                                <span className={`text-sm font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white dark:bg-black/20 ${project.textColor}`}>
                                    {project.stats}
                                </span>
                            </div>

                            <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-4 group-hover:text-emerald-500 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 font-bold mb-8 text-lg">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-bold text-gray-400 border border-black/10 dark:border-white/10 px-3 py-1 rounded-lg">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-24 border border-dashed border-gray-200 dark:border-gray-800 rounded-3xl">
                        <p className="text-gray-400 font-bold text-xl">لا توجد مشاريع في هذا القسم حالياً.</p>
                    </div>
                )}
            </section>
        </main>
    );
};

export default PortfolioPage;
