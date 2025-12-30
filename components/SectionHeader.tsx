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
    <div className={`reveal mb-10 md:mb-16 text-start ${className || ''}`}>
        <div className={`inline-flex items-center gap-3 bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 px-4 py-1.5 rounded-full text-[12px] md:text-[14px] font-bold mb-5 md:mb-8 border border-black/5 dark:border-white/10 backdrop-blur-sm ${className?.includes('text-center') ? 'mx-auto' : ''}`}>
            {icon}
            <span>{tag}</span>
        </div>
        <h2
            className={`font-bold mb-5 md:mb-8 tracking-tighter leading-[1.15] text-gray-900 dark:text-white ${titleClassName || 'text-3xl md:text-5xl lg:text-6xl'}`}
            dangerouslySetInnerHTML={{ __html: title }}
        ></h2>
        <p className={`text-base md:text-lg lg:text-xl text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed font-medium ${subtitleClassName || 'mr-0 ml-auto'}`}>{subtitle}</p>
    </div>
);


export default SectionHeader;
