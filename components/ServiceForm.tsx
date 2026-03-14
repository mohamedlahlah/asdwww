import React, { useState } from 'react';
import { Send, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';

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
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    if (!questions || questions.length === 0) return null;

    const question = questions[currentStep];
    const isLastStep = currentStep === questions.length - 1;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!isLastStep) {
            handleNext();
            return;
        }

        setIsSubmitting(true);

        // Format the WhatsApp message
        let message = `*طلب خدمة جديد: ${serviceName}*\n\n`;
        questions.forEach((q) => {
            const answer = answers[q.label] || 'غير محدد';
            message += `*${q.label}*:\n${answer}\n\n`;
        });

        const encodedMessage = encodeURIComponent(message);
        const phoneNumber = '971545777839';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        // Simulate a brief delay then redirect
        setTimeout(() => {
            window.open(whatsappUrl, '_blank');
            setIsSubmitting(false);
            setIsSuccess(true);
            // Reset after some time
            setTimeout(() => {
                setIsSuccess(false);
                setCurrentStep(0);
                setAnswers({});
            }, 5000);
        }, 800);
    };

    const handleInputChange = (label: string, value: string) => {
        setAnswers((prev) => ({ ...prev, [label]: value }));
    };

    const handleNext = () => {
        if (question.required && !answers[question.label]) return;
        
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentStep((p) => Math.min(questions.length - 1, p + 1));
            setIsAnimating(false);
        }, 300);
    };

    const handlePrev = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentStep((p) => Math.max(0, p - 1));
            setIsAnimating(false);
        }, 300);
    };

    const progress = questions.length > 0 ? ((currentStep + 1) / questions.length) * 100 : 0;
    const canAdvance = !question.required || (answers[question.label] && answers[question.label].trim() !== "");

    return (
        <div className="bento-card p-8 md:p-12 lg:p-16 max-w-4xl mx-auto mt-24 border-blue-500/20 shadow-2xl relative overflow-hidden bg-white dark:bg-[#0c0c0d]">
            <div className="absolute top-0 end-0 w-64 h-64 bg-blue-600/10 blur-[100px] pointer-events-none"></div>

            <div className="mb-12 text-center md:text-start reveal">
                <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">ابدأ مشروعك الآن</h3>
                <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl font-medium">أجب على الأسئلة التالية لنتمكن من فهم احتياجاتك وتقديم أفضل استراتيجية نمو لك.</p>
            </div>

            {/* Progress Bar */}
            <div className="mb-12">
                <div className="flex justify-between items-end mb-4">
                    <span className="text-sm font-bold text-gray-500 dark:text-gray-400">الخطوة {currentStep + 1} من {questions.length}</span>
                    <span className="text-2xl font-black text-blue-600 dark:text-blue-500">{Math.round(progress)}%</span>
                </div>
                <div className="w-full h-4 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden shadow-inner">
                    <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-700 ease-in-out relative"
                        style={{ width: `${progress}%` }}
                    >
                        <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite]"></div>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col min-h-[350px]">
                <div className={`transition-all duration-300 ease-in-out flex-1 ${isAnimating ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'}`}>
                    <div className="space-y-8 text-start mb-8">
                        <label className="text-gray-900 dark:text-white font-black text-2xl md:text-4xl block leading-tight mb-8">
                            {question.label} {question.required && <span className="text-red-500 text-2xl">*</span>}
                        </label>

                        {question.type === 'text' && (
                            <input
                                autoFocus
                                type="text"
                                required={question.required}
                                placeholder={question.placeholder}
                                value={answers[question.label] || ''}
                                onChange={(e) => handleInputChange(question.label, e.target.value)}
                                className="w-full bg-gray-50 dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-2xl px-8 py-6 text-gray-900 dark:text-white text-xl md:text-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder-gray-400 dark:placeholder-gray-600 shadow-sm"
                            />
                        )}

                        {question.type === 'select' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {question.options?.map((opt, i) => (
                                    <button
                                        type="button"
                                        key={i}
                                        onClick={() => handleInputChange(question.label, opt)}
                                        className={`w-full text-start p-6 rounded-2xl font-bold text-lg md:text-xl border-2 transition-all flex items-center justify-between group ${
                                            answers[question.label] === opt 
                                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 transform scale-[1.02] shadow-md' 
                                            : 'border-black/5 dark:border-white/5 bg-gray-50 dark:bg-black/50 text-gray-700 dark:text-gray-300 hover:border-blue-500/30'
                                        }`}
                                    >
                                        <span>{opt}</span>
                                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${answers[question.label] === opt ? 'border-blue-500 bg-blue-500' : 'border-gray-300 dark:border-gray-600 group-hover:border-blue-500/50'}`}>
                                            {answers[question.label] === opt && <CheckCircle2 className="text-white w-4 h-4" />}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        )}

                        {question.type === 'textarea' && (
                            <textarea
                                autoFocus
                                required={question.required}
                                placeholder={question.placeholder}
                                rows={4}
                                value={answers[question.label] || ''}
                                onChange={(e) => handleInputChange(question.label, e.target.value)}
                                className="w-full bg-gray-50 dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-2xl px-8 py-6 text-gray-900 dark:text-white text-xl md:text-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder-gray-400 dark:placeholder-gray-600 shadow-sm resize-none"
                            ></textarea>
                        )}

                        {question.type === 'radio' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {question.options?.map((opt, i) => (
                                    <button
                                        type="button"
                                        key={i}
                                        onClick={() => handleInputChange(question.label, opt)}
                                        className={`w-full text-start p-6 rounded-2xl font-bold text-lg md:text-xl border-2 transition-all flex items-center justify-between group ${
                                            answers[question.label] === opt 
                                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 transform scale-[1.02] shadow-md' 
                                            : 'border-black/5 dark:border-white/5 bg-gray-50 dark:bg-black/50 text-gray-700 dark:text-gray-300 hover:border-blue-500/30'
                                        }`}
                                    >
                                        <span>{opt}</span>
                                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${answers[question.label] === opt ? 'border-blue-500 bg-blue-500' : 'border-gray-300 dark:border-gray-600 group-hover:border-blue-500/50'}`}>
                                            {answers[question.label] === opt && <CheckCircle2 className="text-white w-4 h-4" />}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-4 pt-8 border-t border-black/5 dark:border-white/10 mt-auto">
                    {currentStep > 0 && (
                        <button
                            type="button"
                            onClick={handlePrev}
                            className="px-6 md:px-10 py-5 rounded-[1.5rem] font-bold text-lg md:text-xl bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10 transition-all flex items-center gap-3 hover:-translate-x-1"
                        >
                            <ArrowRight size={24} /> السابق
                        </button>
                    )}
                    
                    {!isLastStep ? (
                        <button
                            type="button"
                            onClick={handleNext}
                            disabled={!canAdvance}
                            className={`flex-1 py-5 rounded-[1.5rem] font-black text-lg md:text-xl transition-all flex items-center justify-center gap-3 ${
                                canAdvance 
                                ? 'bg-blue-600 text-white shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_-5px_rgba(37,99,235,0.6)] hover:bg-blue-500 hover:translate-x-1' 
                                : 'bg-gray-100 dark:bg-white/5 text-gray-400 dark:text-gray-600 cursor-not-allowed'
                            }`}
                        >
                            التالي <ArrowLeft size={24} />
                        </button>
                    ) : (
                        <button
                            type="submit"
                            disabled={isSubmitting || !canAdvance}
                            className={`flex-1 py-5 rounded-[1.5rem] font-black text-lg md:text-xl transition-all flex items-center justify-center gap-3 shadow-xl overflow-hidden relative group ${
                                !canAdvance 
                                ? 'bg-gray-100 dark:bg-white/5 text-gray-400 dark:text-gray-600 cursor-not-allowed'
                                : isSuccess ? 'bg-green-600 text-white' : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-[1.02] hover:shadow-[0_0_40px_-5px_rgba(147,51,234,0.5)]'
                            }`}
                        >
                            {isSubmitting ? (
                                <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                            ) : isSuccess ? (
                                <>تم الإرسال بنجاح! <CheckCircle2 size={28} /></>
                            ) : (
                                <>إرسال الطلب الآن <Send size={28} className="group-hover:-translate-x-2 transition-transform" /></>
                            )}
                        </button>
                    )}
                </div>
            </form>

            <p className="mt-8 text-center text-gray-500 dark:text-gray-400 font-medium text-sm">
                نحن نحترم خصوصيتك وسنقوم بالرد عليك في غضون 24 ساعة عمل.
            </p>
        </div>
    );
};

export default ServiceForm;
