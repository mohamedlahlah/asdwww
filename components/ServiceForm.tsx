import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

interface Question {
    label: string;
    type: 'text' | 'select' | 'textarea' | 'radio';
    options?: string[];
    placeholder?: string;
    required?: boolean;
}

interface ServiceFormProps {
    serviceName: string;
    questions: Question[];
}

const ServiceForm: React.FC<ServiceFormProps> = ({ serviceName, questions }) => {
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Format the WhatsApp message
        let message = `*طلب خدمة جديد: ${serviceName}*\n\n`;
        questions.forEach((q) => {
            const answer = answers[q.label] || 'غير محدد';
            message += `*${q.label}*:\n${answer}\n\n`;
        });

        const encodedMessage = encodeURIComponent(message);
        const phoneNumber = '963936638280';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        // Simulate a brief delay then redirect
        setTimeout(() => {
            window.open(whatsappUrl, '_blank');
            setIsSubmitting(false);
            setIsSuccess(true);
            // Reset after some time
            setTimeout(() => setIsSuccess(false), 5000);
        }, 800);
    };

    const handleInputChange = (label: string, value: string) => {
        setAnswers((prev) => ({ ...prev, [label]: value }));
    };

    return (
        <div className="bento-card p-8 md:p-12 lg:p-16 max-w-4xl mx-auto mt-24 border-blue-500/20 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 end-0 w-64 h-64 bg-blue-600/10 blur-[100px] pointer-events-none"></div>

            <div className="mb-12 text-center md:text-start reveal">
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4">ابدأ مشروعك الآن</h3>
                <p className="text-gray-500 text-lg md:text-xl font-medium">أجب على الأسئلة التالية لنتمكن من فهم احتياجاتك وتقديم أفضل استراتيجية نمو لك.</p>
            </div>


            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {questions.map((q, idx) => (
                        <div key={idx} className={`space-y-3 ${q.type === 'textarea' ? 'md:col-span-2' : ''} text-start`}>
                            <label className="text-white font-bold text-lg block px-2">
                                {q.label} {q.required && <span className="text-red-500">*</span>}
                            </label>

                            {q.type === 'text' && (
                                <input
                                    type="text"
                                    required={q.required}
                                    placeholder={q.placeholder}
                                    onChange={(e) => handleInputChange(q.label, e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-blue-500 outline-none transition-all placeholder-gray-700"
                                />
                            )}

                            {q.type === 'select' && (
                                <div className="relative">
                                    <select
                                        required={q.required}
                                        onChange={(e) => handleInputChange(q.label, e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-blue-500 outline-none transition-all appearance-none"
                                    >
                                        <option value="" className="bg-[#1c1c1e]">اختر الإجابة...</option>
                                        {q.options?.map((opt, i) => (
                                            <option key={i} value={opt} className="bg-[#1c1c1e]">{opt}</option>
                                        ))}
                                    </select>
                                </div>
                            )}

                            {q.type === 'textarea' && (
                                <textarea
                                    required={q.required}
                                    placeholder={q.placeholder}
                                    rows={4}
                                    onChange={(e) => handleInputChange(q.label, e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-blue-500 outline-none transition-all placeholder-gray-700"
                                ></textarea>
                            )}

                            {q.type === 'radio' && (
                                <div className="flex flex-wrap gap-4 pt-2">
                                    {q.options?.map((opt, i) => (
                                        <label key={i} className="flex items-center gap-2 cursor-pointer group">
                                            <input
                                                type="radio"
                                                name={q.label}
                                                value={opt}
                                                required={q.required}
                                                onChange={(e) => handleInputChange(q.label, e.target.value)}
                                                className="w-5 h-5 accent-blue-500"
                                            />
                                            <span className="text-gray-400 group-hover:text-white transition-colors">{opt}</span>
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-6 rounded-[2rem] text-xl font-black transition-all flex items-center justify-center gap-4 shadow-3xl overflow-hidden relative group ${isSuccess ? 'bg-green-600 text-white' : 'bg-white text-black hover:bg-blue-600 hover:text-white'
                        }`}
                >
                    {isSubmitting ? (
                        <div className="w-8 h-8 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
                    ) : isSuccess ? (
                        <>تم الإرسال بنجاح <CheckCircle2 size={24} /></>
                    ) : (
                        <>إرسال الطلب عبر واتساب <Send size={24} className="group-hover:translate-x-[-10px] transition-transform" /></>
                    )}
                </button>
            </form>

            <p className="mt-8 text-center text-gray-600 font-bold text-sm">
                نحن نحترم خصوصيتك وسنقوم بالرد عليك في غضون 24 ساعة عمل.
            </p>
        </div>
    );
};

export default ServiceForm;
