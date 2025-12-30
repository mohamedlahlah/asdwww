import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { Cookie } from 'lucide-react';

const Cookies = () => {
    return (
        <main className="pt-32 pb-32 bg-white dark:bg-black transition-colors duration-500">
            <section className="px-6 md:px-12 max-w-[1000px] mx-auto text-start">
                <SectionHeader
                    tag="ملفات تعريف الارتباط"
                    title="تجربة مستخدم <br/> <span className='text-orange-500'>محسنة ومخصصة.</span>"
                    subtitle="نستخدم ملفات تعريف الارتباط (Cookies) لتحسين تجربتك على موقعنا، تحليل الزيارات، وتخصيص المحتوى."
                    icon={<Cookie className="w-5 h-5 text-orange-500" />}
                />

                <div className="mt-16 space-y-12">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-black text-gray-900 dark:text-white">1. ما هي ملفات تعريف الارتباط؟</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                            ملفات تعريف الارتباط هي ملفات نصية صغيرة يتم تخزينها على جهازك (الكمبيوتر أو الهاتف المحمول) عند زيارتك لمواقع معينة. تساعد هذه الملفات المواقع على تذكر تفضيلاتك وإجراءاتك (مثل تسجيل الدخول، اللغة، وحجم الخط) لفترة زمنية، بحيث لا تضطر إلى إعادة إدخالها في كل مرة تزور فيها الموقع.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-2xl font-black text-gray-900 dark:text-white">2. كيف نستخدم ملفات تعريف الارتباط</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                            نستخدم ملفات تعريف الارتباط للأغراض التالية:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 leading-relaxed mr-4">
                            <li><strong className="text-gray-900 dark:text-white">الضرورية:</strong> ملفات ضرورية لعمل الموقع بشكل صحيح (مثل التنقل الآمن). لا يمكنك تعطيل هذه الملفات.</li>
                            <li><strong className="text-gray-900 dark:text-white">الأداء والتحليلات:</strong> تساعدنا في فهم كيفية تفاعل الزوار مع الموقع، مما يتيح لنا تحسين الأداء وإصلاح المشاكل.</li>
                            <li><strong className="text-gray-900 dark:text-white">الوظيفية:</strong> تسمح للموقع بتذكر خياراتك (مثل اسم المستخدم أو اللغة) وتوفير ميزات محسنة وشخصية.</li>
                            <li><strong className="text-gray-900 dark:text-white">التسويق:</strong> تُستخدم لتتبع الزوار عبر المواقع لعرض إعلانات ذات صلة وجذابة للمستخدم الفردي.</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-2xl font-black text-gray-900 dark:text-white">3. إدارة ملفات تعريف الارتباط</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                            لديك الحق في قبول أو رفض ملفات تعريف الارتباط. يمكنك تعديل إعدادات متصفحك لرفض ملفات تعريف الارتباط إذا كنت تفضل ذلك. ومع ذلك، قد يؤدي ذلك إلى منعك من الاستفادة الكاملة من الموقع.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg mt-2">
                            لمزيد من المعلومات حول كيفية إدارة ملفات تعريف الارتباط، يمكنك زيارة صفحة المساعدة في متصفحك.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-2xl font-black text-gray-900 dark:text-white">4. التغييرات على سياسة الكوكيز</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                            قد نقوم بتحديث سياسة ملفات تعريف الارتباط الخاصة بنا من وقت لآخر لتعكس التغييرات في التكنولوجيا أو القانون. سنقوم بنشر أي تغييرات على هذه الصفحة، لذا يرجى مراجعتها بانتظام.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Cookies;
