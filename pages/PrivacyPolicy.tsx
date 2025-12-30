import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { ShieldCheck } from 'lucide-react';

const PrivacyPolicy = () => {
    return (
        <main className="pt-32 pb-32 bg-white dark:bg-black transition-colors duration-500">
            <section className="px-6 md:px-12 max-w-[1000px] mx-auto text-start">
                <SectionHeader
                    tag="سياسة الخصوصية"
                    title="نحمي بياناتك <br/> <span className='text-emerald-500'>كما نحمي بياناتنا.</span>"
                    subtitle="خصوصيتك أولوية قصوى بالنسبة لنا. تشرح هذه السياسة كيف نجمع ونستخدم ونحمي معلوماتك الشخصية."
                    icon={<ShieldCheck className="w-5 h-5 text-emerald-500" />}
                />

                <div className="mt-16 space-y-12">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-black text-gray-900 dark:text-white">1. المعلومات التي نجمعها</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                            قد نقوم بجمع أنواع مختلفة من المعلومات لأغراض مختلفة لتوفير وتحسين خدماتنا لك:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 leading-relaxed mr-4">
                            <li><strong className="text-gray-900 dark:text-white">بيانات شخصية:</strong> مثل الاسم، البريد الإلكتروني، رقم الهاتف، التي تقدمها طواعية عند ملء نماذج التواصل.</li>
                            <li><strong className="text-gray-900 dark:text-white">بيانات الاستخدام:</strong> معلومات حول كيفية وصولك واستخدامك للموقع (مثل عنوان IP، نوع المتصفح، الصفحات التي زرتها).</li>
                            <li><strong className="text-gray-900 dark:text-white">بيانات ملفات الارتباط (Cookies):</strong> نستخدم الكوكيز وتقنيات التتبع المماثلة لتتبع النشاط على خدمتنا والاحتفاظ ببعض المعلومات.</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-2xl font-black text-gray-900 dark:text-white">2. كيف نستخدم بياناتك</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                            نستخدم البيانات التي تم جمعها للأغراض التالية:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 leading-relaxed mr-4">
                            <li>لتقديم وصيانة خدماتنا.</li>
                            <li>لإعلامك بالتغييرات التي تطرأ على خدماتنا.</li>
                            <li>للسماح لك بالمشاركة في الميزات التفاعلية لخدمتنا عندما تختار القيام بذلك.</li>
                            <li>لتقديم الدعم للعملاء.</li>
                            <li>لجمع التحليلات أو المعلومات القيمة حتى نتمكن من تحسين خدماتنا.</li>
                            <li>لمراقبة استخدام خدماتنا.</li>
                            <li>للكشف عن المشكلات التقنية ومنعها ومعالجتها.</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-2xl font-black text-gray-900 dark:text-white">3. مشاركة البيانات</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                            نحن لا نبيع بياناتك الشخصية لأي طرف ثالث. قد نشارك معلوماتك فقط في الحالات التالية:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 leading-relaxed mr-4">
                            <li><strong className="text-gray-900 dark:text-white">الامتثال للقانون:</strong> إذا طلب منا ذلك بموجب القانون أو استجابة لطلبات صالحة من السلطات العامة (مثل المحكمة أو وكالة حكومية).</li>
                            <li><strong className="text-gray-900 dark:text-white">مقدمو الخدمة:</strong> قد نوظف شركات وأفراداً تابعين لجهات خارجية لتسهيل خدمتنا ("مقدمو الخدمة")، لتقديم الخدمة نيابة عنا، أو لمساعدتنا في تحليل كيفية استخدام خدمتنا.</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-2xl font-black text-gray-900 dark:text-white">4. أمن البيانات</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                            أمان بياناتك مهم بالنسبة لنا، ولكن تذكر أنه لا توجد طريقة نقل عبر الإنترنت أو طريقة تخزين إلكتروني آمنة بنسبة 100%. بينما نسعى جاهدين لاستخدام وسائل مقبولة تجارياً لحماية بياناتك الشخصية، لا يمكننا ضمان أمانها المطلق.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-2xl font-black text-gray-900 dark:text-white">5. حقوقك</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                            لديك الحق في الوصول إلى البيانات الشخصية التي نحتفظ بها عنك وتحديثها أو حذفها. إذا كنت ترغب في ممارسة هذا الحق، يرجى الاتصال بنا.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default PrivacyPolicy;
