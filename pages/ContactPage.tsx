import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Sparkles, Globe, Clock, ArrowRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const ContactPage = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const name = formData.get('name');
        const subject = formData.get('subject');
        const message = formData.get('message');

        const whatsappUrl = `https://wa.me/963936638280?text=${encodeURIComponent(
            `*رسالة تواصل جديدة*\n\n*الاسم:* ${name}\n*الموضوع:* ${subject}\n*الرسالة:* ${message}`
        )}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <main className="pt-32 pb-32">
            <section className="px-6 md:px-12 max-w-[1400px] mx-auto">
                <SectionHeader
                    tag="تواصل معنا"
                    title="دعنا نبدأ <br/> <span className='text-blue-500'>رحلة النمو اليوم.</span>"
                    subtitle="سواء كان لديك استفسار بسيط أو مشروع ضخم، نحن هنا للاستماع إليك وتقديم أفضل الحلول الممكنة."
                    icon={<MessageCircle className="w-5 h-5 text-blue-400" />}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24 mb-24">
                    {/* Contact Info */}
                    <div className="lg:col-span-5 space-y-12 text-start">
                        <div>
                            <div className="inline-flex items-center gap-3 bg-white/5 text-blue-500 px-6 py-2 rounded-full text-sm font-black mb-8 border border-blue-500/20">
                                <Sparkles size={18} />
                                <span>جاهزون للرد دائماً</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-8 tracking-tighter">معلومات <br /> الاتصال</h2>
                            <p className="text-xl text-gray-500 font-medium leading-relaxed mb-12">فريقنا متاح لدعمك وتقديم الاستشارات التقنية والتسويقية اللازمة لمتجرك.</p>
                        </div>

                        <div className="space-y-8">
                            {[
                                { i: <Mail className="text-blue-500" />, t: "البريد الإلكتروني", v: "hello@digitalmerchant.team" },
                                { i: <Phone className="text-blue-500" />, t: "رقم الواتساب", v: "+963 936 638 280" },
                                { i: <MapPin className="text-blue-500" />, t: "المقر الرئيسي", v: "Doha, Qatar / Global Remote" },
                                { i: <Clock className="text-blue-500" />, t: "ساعات العمل", v: "الأحد - الخميس: 9:00 ص - 6:00 م" }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 items-center group">
                                    <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-blue-600/10 transition-colors border border-white/5">
                                        {item.i}
                                    </div>
                                    <div>
                                        <div className="text-gray-500 text-sm font-bold mb-1 uppercase tracking-widest">{item.t}</div>
                                        <div className="text-white text-xl font-black group-hover:text-blue-500 transition-colors">{item.v}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-12 border-t border-white/5">
                            <h4 className="text-white font-black text-xl mb-6">تابعنا على منصات التواصل</h4>
                            <div className="flex gap-6 text-gray-400 font-bold">
                                <span className="hover:text-white cursor-pointer transition-colors">Twitter</span>
                                <span className="hover:text-white cursor-pointer transition-colors">LinkedIn</span>
                                <span className="hover:text-white cursor-pointer transition-colors">Instagram</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-7 bento-card p-10 md:p-16 relative overflow-hidden bg-gradient-to-br from-gray-900/50 to-black border-white/10">
                        <div className="absolute top-0 inset-inline-end-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,_rgba(37,99,235,0.05)_0%,_transparent_50%)]"></div>
                        <form onSubmit={handleSubmit} className="relative z-10 space-y-8 text-start">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-white font-black text-lg block">الاسم الكريم</label>
                                    <input name="name" required type="text" placeholder="مثلاً: محمد الأحمد" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-blue-500 transition-colors font-bold" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-white font-black text-lg block">الموضوع</label>
                                    <input name="subject" required type="text" placeholder="مثلاً: استفسار عن أتمتة n8n" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-blue-500 transition-colors font-bold" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-white font-black text-lg block">تفاصيل الرسالة</label>
                                <textarea name="message" required rows={5} placeholder="كيف يمكننا مساعدتك اليوم؟" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-blue-500 transition-colors font-bold resize-none"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-white text-black py-6 rounded-3xl text-xl font-black shadow-2xl hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-4">
                                إرسال عبر واتساب
                                <Send size={24} />
                            </button>
                            <p className="text-center text-gray-500 font-bold text-sm">بالنقر على إرسال، سيتم توجيهك مباشرة لفتح تطبيق واتساب لبدء المحادثة.</p>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ContactPage;
