import SEO from '../components/SEO';
import React, { useEffect } from 'react';
import { ArrowLeft, ShieldCheck, Clock, FileWarning, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';

const RefundPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="pt-32 md:pt-48 pb-20 md:pb-32 bg-white dark:bg-black transition-colors duration-500 font-sans">
            <SEO title="سياسة الاسترجاع" description="سياسة الاسترجاع الخاصة بالخدمات الرقمية لمنصة التاجر الرقمي." canonicalUrl="/refundpolicy" />

            <div className="max-w-4xl mx-auto px-6 md:px-12">
                
                <Link to="/" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-500 font-bold hover:gap-3 transition-all mb-12">
                    <ArrowLeft size={20} /> العودة للرئيسية
                </Link>

                <SectionHeader 
                    tag="السياسات القانونية"
                    title="سياسة <span className='text-blue-600 dark:text-blue-500'>الاسترجاع والإلغاء</span>"
                    description="الشفافية هي أساس عملنا. يرجى قراءة هذه السياسة بعناية قبل التعاقد معنا لضمان حفظ حقوق جميع الأطراف."
                />

                <div className="mt-16 space-y-12 text-start">
                    
                    <div className="bento-card p-8 md:p-12 bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 relative overflow-hidden">
                        <div className="flex items-center gap-4 mb-6 text-blue-600 dark:text-blue-500">
                            <ShieldCheck size={32} />
                            <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white">طبيعة الخدمات الرقمية</h2>
                        </div>
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                            نظراً لطبيعة الخدمات التي نقدمها في "التاجر الرقمي" (تطوير المتاجر، الاستشارات الرقمية، التصميم، التسويق)، فإن هذه الخدمات تعتمد على استهلاك الوقت والجهد البشري المباشر ولا يمكن "إعادتها" بمجرد تنفيذها. 
                            لذلك، <strong className="text-gray-900 dark:text-white">لا نقدم المبالغ المستردة (No Refunds)</strong> بعد بدء العمل الفعلي في المشروع.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                                <Clock className="text-blue-500" /> الحالات التي يتم فيها قبول الاسترجاع
                            </h3>
                            <ul className="space-y-3 text-lg text-gray-600 dark:text-gray-400 font-medium">
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                                    <p>إذا قمت بالدفع ولم نبدأ في تنفيذ المشروع أو العمل بعد (عادة خلال 24 ساعة من الدفع).</p>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                                    <p>في حالة وجود خطأ تقني أدى إلى مضاعفة عملية الدفع (Double Charge) بشكل خاطئ من قبل بوابة الدفع.</p>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                                    <p>إذا لم نتمكن من تسليم الخدمة نهائياً لأسباب خارجة عن إرادتنا.</p>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                                <FileWarning className="text-red-500" /> الحالات التي لا يشملها الاسترجاع
                            </h3>
                            <ul className="space-y-3 text-lg text-gray-600 dark:text-gray-400 font-medium">
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></div>
                                    <p>عدم الرضا عن المخرجات النهائية (التصميم مثلاً) بعد الاعتماد، حيث أن جميع المشاريع تمر بمراحل مراجعة وتعديل مستمرة مع العميل.</p>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></div>
                                    <p>تغيير العميل لرأيه أو إلغاء فكرة المشروع بعد بدء العمل وتخصيص الموارد لتنفيذه.</p>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></div>
                                    <p>الخدمات المتعلقة بالاستشارات أو الإعلانات (الأموال التي تم صرفها على الحملات الإعلانية لا يمكن استردادها إطلاقاً).</p>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                                <HelpCircle className="text-green-500" /> كيفية طلب الاسترجاع (للحالات المسموحة)
                            </h3>
                            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium mb-4">
                                إذا كانت حالتك تنطبق على شروط الاسترجاع المذكورة أعلاه، يرجى التواصل معنا فوراً عبر:
                            </p>
                            <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-2xl border border-black/5 dark:border-white/10 text-lg font-bold">
                                البريد الإلكتروني: <a href="mailto:support@dtajer.com" className="text-blue-600 dark:text-blue-500 hover:underline">support@dtajer.com</a>
                                <br />
                                رقم الهاتف/واتساب: <span dir="ltr">+966 59 322 4180</span>
                            </div>
                            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium mt-4">
                                يتم معالجة طلبات الاسترجاع خلال 5 إلى 10 أيام عمل، ويتم إرجاع المبلغ إلى نفس البطاقة أو وسيلة الدفع الأصلية التي استخدمتها.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
};

export default RefundPolicy;
