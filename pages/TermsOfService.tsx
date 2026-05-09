import SEO from '../components/SEO';
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { FileText } from 'lucide-react';

const TermsOfService = () => {
    return (
        <main className="pt-32 md:pt-48 pb-20 md:pb-32 bg-white dark:bg-black transition-colors duration-500">
            <SEO title="شروط الخدمة" description="شروط وأحكام استخدام خدمات منصة التاجر الرقمي." canonicalUrl="/termsofservice" />

            <section className="px-6 md:px-12 max-w-[1000px] mx-auto text-start">
                <SectionHeader
                    tag="شروط الخدمة"
                    title="قواعد الاستخدام <br/> <span className='text-blue-500'>والالتزامات القانونية.</span>"
                    subtitle="يرجى قراءة شروط الخدمة هذه بعناية قبل استخدام موقعنا وخدماتنا الرقمية."
                    icon={<FileText className="w-5 h-5 text-blue-500" />}
                />

                <div className="mt-16 space-y-12">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-black text-gray-900 dark:text-white">1. الموافقة على الشروط</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                            من خلال الوصول إلى موقعنا الإلكتروني واستخدامه، فإنك توافق على الالتزام بهذه الشروط والأحكام وجميع القوانين واللوائح المعمول بها. إذا كنت لا توافق على أي من هذه الشروط، يُحظر عليك استخدام هذا الموقع أو الوصول إليه.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-2xl font-black text-gray-900 dark:text-white">2. حقوق الملكية الفكرية</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                            جميع المحتويات الموجودة على هذا الموقع، بما في ذلك النصوص، الرسومات، الشعارات، الصور، ومقاطع الفيديو، هي ملك لنا أو لمرخصينا ومحمية بموجب قوانين حقوق النشر والعلامات التجارية المعمول بها.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 leading-relaxed mr-4">
                            <li>لا يجوز لك تعديل أو نسخ المواد.</li>
                            <li>لا يجوز لك استخدام المواد لأي غرض تجاري أو للعرض العام (تجاري أو غير تجاري) دون إذن كتابي مسبق.</li>
                            <li>لا يجوز لك محاولة فك تشفير أو عكس هندسة أي برنامج موجود على موقعنا.</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-2xl font-black text-gray-900 dark:text-white">3. الخدمات المقدمة</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                            نقدم خدمات رقمية متنوعة تشمل التصميم، التطوير، التسويق، والاستشارات. نحتفظ بالحق في تعديل أو إيقاف أي خدمة في أي وقت دون إشعار مسبق. نحن نسعى جاهدين لضمان دقة المعلومات المقدمة، لكننا لا نضمن خلو الموقع من الأخطاء.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-2xl font-black text-gray-900 dark:text-white">4. سياسة التنفيذ والتسليم (Fulfillment Policy)</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                            نظراً لكون خدماتنا رقمية وتطويرية، تختلف مدة التنفيذ والتسليم بناءً على حجم ونطاق المشروع. يتم الاتفاق المسبق على الإطار الزمني لتسليم المشاريع مع العميل في العقد المبرم أو عرض السعر. عادةً ما تتراوح مدة تنفيذ المتاجر الإلكترونية وحملات التسويق من 14 إلى 30 يوم عمل. نلتزم بإبقاء العميل على اطلاع دائم بمراحل سير العمل وتسليم المتطلبات المتفق عليها رقمياً.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-2xl font-black text-gray-900 dark:text-white">5. حدود المسؤولية</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                            لا نتحمل بأي حال من الأحوال المسؤولية عن أي أضرار (بما في ذلك، على سبيل المثال لا الحصر، الأضرار الناجمة عن فقدان البيانات أو الأرباح، أو بسبب انقطاع العمل) الناشئة عن استخدام أو عدم القدرة على استخدام المواد الموجودة على موقعنا، حتى لو تم إبلاغنا شفهياً أو كتابياً باحتمالية حدوث مثل هذه الأضرار.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-2xl font-black text-gray-900 dark:text-white">6. الروابط الخارجية</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                            قد يحتوي موقعنا على روابط لمواقع خارجية لا نقوم بإدارتها. نحن لا نملك أي سيطرة على محتوى وسياسات الخصوصية لتلك المواقع ولا نتحمل أي مسؤولية عنها.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-2xl font-black text-gray-900 dark:text-white">7. القانون الواجب التطبيق</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                            تخضع هذه الشروط والأحكام وتفسر وفقاً للقوانين المعمول بها في المملكة العربية السعودية، وتخضع أنت بشكل غير قابل للنقض للاختصاص القضائي الحصري للمحاكم في تلك الدولة أو الموقع.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default TermsOfService;
