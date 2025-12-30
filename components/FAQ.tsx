import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    items: FAQItem[];
    tag?: string;
    title?: string;
}

const FAQ = ({ items, tag = "الأسئلة الشائعة", title = "لديك استفسار؟ <br/> <span className='text-blue-600'>إليك الأجوبة.</span>" }: FAQProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 md:py-32 px-6 md:px-12 bg-white dark:bg-black transition-colors duration-500 overflow-hidden">
            <div className="max-w-[1000px] mx-auto">
                <div className="text-center mb-20 reveal">
                    <div className="inline-flex items-center gap-3 bg-blue-500/5 dark:bg-white/5 text-blue-600 dark:text-blue-500 px-6 py-2 rounded-full text-sm font-black mb-8 border border-blue-500/10 dark:border-blue-500/20 backdrop-blur-xl">
                        <HelpCircle size={18} />
                        <span>{tag}</span>
                    </div>
                    <h2
                        className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[1.1]"
                        dangerouslySetInnerHTML={{ __html: title }}
                    />
                </div>

                <div className="space-y-4 reveal">
                    {items.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={`bento-card overflow-hidden transition-all duration-500 ${isOpen ? 'bg-gray-50 dark:bg-[#151516] border-blue-500/20' : 'bg-transparent hover:bg-gray-50 dark:hover:bg-[#0c0c0d]'}`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full p-8 flex items-center justify-between text-start gap-8"
                                >
                                    <span className={`text-xl md:text-2xl font-black transition-colors duration-300 ${isOpen ? 'text-blue-600 dark:text-blue-500' : 'text-gray-900 dark:text-white'}`}>
                                        {item.question}
                                    </span>
                                    <ChevronDown
                                        size={24}
                                        className={`shrink-0 transition-transform duration-500 ${isOpen ? 'rotate-180 text-blue-600' : 'text-gray-400'}`}
                                    />
                                </button>
                                <div
                                    className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="px-8 pb-8 text-lg md:text-xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed max-w-3xl">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
