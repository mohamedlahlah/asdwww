import React from 'react';

interface SectionHeaderProps {
    tag: string;
    title: string;
    subtitle: string;
    icon?: React.ReactNode;
    titleClassName?: string;
    subtitleClassName?: string;
    className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ tag, title, subtitle, icon, titleClassName, subtitleClassName, className }) => (
    <div className={`reveal mb-10 md:mb-16 lg:mb-16 md:mb-24 text-start ${className || ''}`}>
        <div className={`inline-flex items-center gap-3 bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 px-4 py-1.5 rounded-full text-[12px] md:text-[14px] font-bold mb-4 md:mb-6 border border-black/5 dark:border-white/10 backdrop-blur-sm ${className?.includes('text-center') ? 'mx-auto' : ''}`}>
            {icon}
            <span>{tag}</span>
        </div>
        <h2
            className={`section-title-apple mb-4 md:mb-6 lg:mb-8 text-gray-900 dark:text-white ${titleClassName || ''}`}
            dangerouslySetInnerHTML={{ __html: title }}
        ></h2>
        <p className={`text-lg md:text-xl lg:text-2xl text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed font-medium ${subtitleClassName || 'mr-0 ml-auto'}`}>{subtitle}</p>
    </div>
);


export default SectionHeader;
