
import React, { useState, useEffect } from 'react';
import { 
  Search, 
  TrendingUp, 
  Settings, 
  Camera, 
  PenTool, 
  BarChart3, 
  ArrowLeft,
  CheckCircle2,
  Users,
  Lightbulb,
  Zap,
  Menu,
  X,
  ArrowUpRight,
  MousePointerClick,
  ShieldAlert,
  Gauge,
  ShoppingBag,
  FileText,
  PieChart,
  Heart,
  Sparkles,
  Monitor,
  Activity,
  Target,
  BarChart,
  Sun,
  Battery,
  Cpu,
  BrainCircuit,
  Globe,
  Palette,
  Users2,
  Rocket,
  Mail,
  Lock,
  Star,
  CreditCard,
  Layers,
  Crown,
  ChevronLeft,
  Briefcase,
  Trophy,
  ArrowRight,
  GitBranch,
  Network,
  Workflow,
  Command,
  Database,
  Link2
} from 'lucide-react';

const useScrollReveal = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${scrolled ? 'apple-blur border-b border-white/10 py-5' : 'bg-transparent py-10'}`}>
      <div className="max-w-[1400px] mx-auto px-10 md:px-16 flex items-center justify-between">
        <div className="flex items-center gap-16">
          <div className="font-bold text-3xl tracking-tighter hover:opacity-70 transition-opacity cursor-pointer flex items-center gap-4">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
              <div className="w-4 h-4 bg-black rounded-full"></div>
            </div>
            <span className="hidden sm:inline text-white">التاجر الرقمي</span>
          </div>
          <div className="hidden lg:flex gap-12 text-[15px] font-semibold text-gray-400 tracking-tight">
            {['SEO', 'الإعلانات', 'التصميم', 'الأتمتة', 'الإدارة', 'الأسعار'].map((item, idx) => (
              <a key={idx} href={`#${item}`} className="hover:text-white transition-colors">{item}</a>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-8">
          <button className="bg-white text-black px-10 py-3.5 rounded-full text-[15px] font-bold btn-apple shadow-2xl active:scale-95">
            ابدأ رحلتك
          </button>
          <button className="lg:hidden p-2 text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      <div className={`lg:hidden fixed inset-0 top-0 bg-black z-[110] transition-all duration-700 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="flex flex-col p-16 gap-12 text-5xl font-black pt-40 text-white text-right">
          <button className="absolute top-12 left-12 p-2" onClick={() => setIsOpen(false)}><X size={48} /></button>
          {['SEO', 'الإعلانات', 'التصميم', 'الأتمتة', 'الإدارة', 'الأسعار'].map((item, idx) => (
            <a key={idx} href={`#${item}`} onClick={() => setIsOpen(false)} className="hover:text-blue-500 transition-colors">{item}</a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const SectionHeader: React.FC<{ tag: string; title: string; subtitle: string; icon: React.ReactNode }> = ({ tag, title, subtitle, icon }) => (
  <div className="reveal mb-12 md:mb-20 text-right">
    <div className="inline-flex items-center gap-3 bg-white/5 text-gray-400 px-5 py-2 rounded-full text-[13px] md:text-[15px] font-bold mb-6 md:mb-10 border border-white/10 backdrop-blur-sm">
      {icon}
      <span>{tag}</span>
    </div>
    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-10 tracking-tighter leading-[1.1] text-white" dangerouslySetInnerHTML={{ __html: title }}></h2>
    <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl leading-relaxed font-medium">{subtitle}</p>
  </div>
);

const App: React.FC = () => {
  useScrollReveal();

  const platforms = [
    { name: 'Shopify', icon: <ShoppingBag size={40} /> },
    { name: 'WooCommerce', icon: <Monitor size={40} /> },
    { name: 'سلة (Salla)', icon: <CheckCircle2 size={40} /> },
    { name: 'زد (Zid)', icon: <Zap size={40} /> },
    { name: 'Magento', icon: <Settings size={40} /> },
    { name: 'Amazon', icon: <Globe size={40} /> },
    { name: 'eBay', icon: <TrendingUp size={40} /> },
  ];

  const pricingPlans = [
    {
      name: "باقة الانطلاق",
      tagline: "للمتاجر الجديدة والطموحة",
      price: "1,499",
      period: "/شهرياً",
      features: ["إدارة منصة واحدة (سلة/زد)", "تحسين SEO أساسي", "تصميم 5 بنرات شهرياً", "تقارير أداء شهرية", "دعم فني عبر البريد"],
      icon: <Rocket className="text-blue-400" />,
      popular: false
    },
    {
      name: "باقة النمو",
      tagline: "الخيار الأمثل للتوسع والسيطرة",
      price: "3,800",
      period: "/شهرياً",
      features: ["إدارة منصتين متكاملة", "SEO متقدم وتصدر نتائج", "تصميم هوية بصرية كاملة", "أتمتة العمليات الأساسية n8n", "تقارير أداء أسبوعية", "مدير حساب خاص"],
      icon: <Layers className="text-white" />,
      popular: true
    },
    {
      name: "باقة النخبة",
      tagline: "للمتاجر الكبرى والبراندات",
      price: "اتصل بنا",
      period: "",
      features: ["إدارة غير محدودة للمنصات", "نظام AI Sales Engine مدمج", "أتمتة سير العمل n8n المتقدمة", "إدارة مخزون وعمليات Pro", "تحليلات بيانات لحظية", "دعم VIP 24/7"],
      icon: <Crown className="text-orange-400" />,
      popular: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-600 selection:text-white overflow-x-hidden bg-black">
      <Navbar />
      
      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative pt-48 md:pt-64 lg:pt-80 pb-32 md:pb-64 px-10 md:px-20 bg-black overflow-hidden flex flex-col items-center min-h-screen">
          <div className="max-w-[1400px] mx-auto relative z-10 w-full text-center">
            <h1 className="hero-title-apple mb-12 md:mb-20 reveal active">
              الوقت الأنسب <br /> لنمو تجارتك هو الآن.
            </h1>
            
            <div className="flex flex-col items-center gap-8 md:gap-10 mb-16 md:mb-24 reveal active">
              <label className="text-gray-400 text-xl md:text-2xl font-medium flex items-center gap-4">
                حدد مستوى متجرك الحالي: <span className="opacity-40 hover:opacity-100 transition-opacity cursor-pointer">ⓘ</span>
              </label>
              <div className="relative w-full max-w-xl px-4 md:px-0">
                <select className="w-full bg-[#1c1c1e] text-white border border-white/10 px-8 py-5 md:px-12 md:py-7 rounded-full text-xl md:text-2xl font-bold outline-none focus:border-white/30 transition-all text-center btn-apple shadow-xl">
                  <option>مبتدئ - أقل من 10 آلاف ر.س</option>
                  <option>متوسط - 10 آلاف إلى 50 ألف ر.س</option>
                  <option>متقدم - أكثر من 50 ألف ر.س</option>
                </select>
              </div>
            </div>

            {/* ENHANCED BENTO SECTION */}
            <div className="w-full mt-32 md:mt-48 text-right">
              <div className="inline-flex items-center gap-4 bg-white/5 text-blue-500 px-8 py-3 rounded-full text-sm font-black mb-12 border border-blue-500/20 backdrop-blur-xl reveal active">
                <Sparkles size={20} />
                <span>نظام التاجر الرقمي AI</span>
              </div>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-24 tracking-tight leading-[1] reveal active">
                أدوات استثنائية <br /> <span className="text-gray-500">لنموّ غير محدود.</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 reveal active">
                <div className="lg:col-span-8 bento-card p-12 md:p-20 flex flex-col justify-between min-h-[600px] relative group overflow-hidden border-white/10">
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,_rgba(37,99,235,0.15)_0%,_transparent_50%)]"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-6 mb-12">
                      <div className="p-6 bg-blue-600 rounded-[2rem] shadow-[0_0_50px_rgba(37,99,235,0.4)]">
                        <BrainCircuit size={48} className="text-white" />
                      </div>
                      <div>
                         <h3 className="text-3xl md:text-5xl font-black text-white mb-2">محرك مبيعات AI</h3>
                         <p className="text-blue-400 font-bold text-xl">توقع وسلوك - Pro Edition</p>
                      </div>
                    </div>
                    <p className="text-2xl md:text-4xl text-gray-400 max-w-3xl leading-snug font-medium">
                      يقوم النظام بتحليل مسار كل زائر بشكل لحظي، وتعديل العروض تلقائياً لضمان أعلى معدل تحويل <span className="text-white">بزيادة تصل لـ 86%.</span>
                    </p>
                  </div>
                  <div className="relative z-10 mt-20 flex flex-wrap gap-8">
                     <div className="bg-white/5 backdrop-blur-md px-8 py-4 rounded-3xl border border-white/5">
                        <span className="text-gray-500 text-sm font-bold block mb-1">دقة التوقع</span>
                        <span className="text-white text-3xl font-black tracking-tighter">99.2%</span>
                     </div>
                     <div className="bg-white/5 backdrop-blur-md px-8 py-4 rounded-3xl border border-white/5">
                        <span className="text-gray-500 text-sm font-bold block mb-1">سرعة الاستجابة</span>
                        <span className="text-white text-3xl font-black tracking-tighter">15ms</span>
                     </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-1/2 opacity-20 group-hover:opacity-40 transition-opacity duration-1000">
                    <div className="w-full h-64 bg-gradient-to-tr from-blue-600 to-purple-600 blur-[120px] rounded-full"></div>
                  </div>
                </div>

                <div className="lg:col-span-4 bento-card p-12 flex flex-col justify-between min-h-[600px] bg-gradient-to-b from-[#151516] to-[#0a0a0a]">
                  <div className="p-6 bg-orange-500/10 rounded-[2rem] w-fit mb-12">
                    <Sun size={40} className="text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-6">واجهات XDR</h3>
                    <p className="text-xl text-gray-500 leading-relaxed">
                      تصاميمنا ليست مجرد صور؛ هي أنظمة بصرية مصممة لراحة العين وبناء الثقة المطلقة عند العميل من النظرة الأولى.
                    </p>
                  </div>
                  <div className="mt-12 h-32 w-full bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl animate-pulse"></div>
                </div>

                <div className="lg:col-span-6 bento-card p-12 md:p-16 flex items-center gap-12 group">
                   <div className="hidden md:flex shrink-0 w-32 h-32 bg-green-500/10 rounded-full items-center justify-center group-hover:scale-110 transition-transform duration-700">
                      <Battery size={48} className="text-green-500 animate-pulse" />
                   </div>
                   <div className="text-right">
                      <h3 className="text-3xl md:text-5xl font-black text-white mb-4">14 ساعة وفـر</h3>
                      <p className="text-xl text-gray-500 leading-relaxed font-medium">
                        نحن لا نبيعك برنامجاً، نحن نبيعك <span className="text-white font-bold">وقتاً إضافياً</span> لتركز على رؤية براندك بينما يتولى الـ AI العمليات الروتينية.
                      </p>
                   </div>
                </div>

                <div className="lg:col-span-6 bento-card p-12 md:p-16 flex items-center gap-12 group glow-border-rainbow">
                   <div className="hidden md:flex shrink-0 w-32 h-32 bg-blue-500/10 rounded-full items-center justify-center group-hover:scale-110 transition-transform duration-700">
                      <Globe size={48} className="text-blue-400" />
                   </div>
                   <div className="text-right">
                      <h3 className="text-3xl md:text-5xl font-black text-white mb-4">ذكاء محلي</h3>
                      <p className="text-xl text-gray-500 leading-relaxed font-medium">
                        مدرب على سلوك المستهلك الخليجي والعربي بشكل خاص، ليفهم اللهجات والتوقيتات الشرائية والاهتمامات المحلية.
                      </p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <section className="py-24 md:py-48 bg-black border-y border-white/5 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-10 mb-16 md:mb-24 text-center reveal">
             <h3 className="text-lg md:text-xl font-black text-gray-500 uppercase tracking-[0.5em]">التوافق الكامل مع أقوى المنصات</h3>
          </div>
          <div className="flex overflow-hidden relative group">
            <div className="animate-marquee flex gap-16 md:gap-24 whitespace-nowrap">
              {[...platforms, ...platforms].map((platform, i) => (
                <div key={i} className="flex items-center gap-8 md:gap-10 px-12 md:px-20 py-8 md:py-10 rounded-[2.5rem] md:rounded-[3rem] grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all cursor-default group/item hover:bg-white/5">
                  <div className="p-4 md:p-6 bg-white/10 rounded-2xl md:rounded-3xl group-hover/item:bg-white group-hover/item:text-black transition-all border border-white/10 group-hover/item:border-transparent">
                    {React.cloneElement(platform.icon as React.ReactElement, { className: 'w-8 h-8 md:w-10 md:h-10' })}
                  </div>
                  <span className="text-3xl md:text-5xl font-black text-white tracking-tighter">{platform.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO SECTION */}
        <section id="SEO" className="py-32 md:py-64 lg:py-80 px-10 md:px-20 bg-black transition-all">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-40 items-center">
            <div className="order-2 lg:order-1 relative reveal">
               <div className="bento-card p-10 md:p-16 shadow-2xl">
                  <div className="flex items-center justify-end gap-6 mb-12">
                    <div className="font-bold text-2xl md:text-3xl text-white">تحسين محركات البحث</div>
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-500/10 rounded-2xl md:rounded-[1.5rem] flex items-center justify-center"><Search size={32} className="text-blue-400"/></div>
                  </div>
                  <div className="space-y-8 md:space-y-10">
                     {[
                       { label: 'الزيارات العضوية المجانية', value: '+340%', color: 'bg-green-500' },
                       { label: 'تكلفة الإعلانات المدفوعة', value: '-65%', color: 'bg-blue-500' },
                       { label: 'معدل الارتداد (Bounce Rate)', value: '-22%', color: 'bg-red-500' }
                     ].map((item, i) => (
                       <div key={i} className="space-y-3 md:space-y-4 text-right">
                         <div className="flex justify-between text-lg md:text-xl font-bold text-white"><span>{item.label}</span><span>{item.value}</span></div>
                         <div className="h-2 md:h-3 w-full bg-white/5 rounded-full overflow-hidden shadow-inner">
                           <div className={`h-full ${item.color} reveal transition-all duration-1000 ease-out`} style={{ width: '85%', transitionDelay: `${i * 0.3}s` }}></div>
                         </div>
                       </div>
                     ))}
                  </div>
               </div>
               <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeader 
                tag="ظهور مستدام وعالمي"
                title="سيطر على <br/> نتائج Google الأولى."
                subtitle="نحن لا نوفر مجرد كلمات مفتاحية؛ نحن نبني استراتيجية ظهور شاملة تجعل متجرك الخيار الأول والوحيد لعملائك المستهدفين."
                icon={<Search className="w-5 h-5 text-blue-400" />}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 reveal stagger-2">
                 {[
                   { t: 'SEO Audit', d: 'تحليل عميق شامل لكل تفصيلة تقنية وبنيوية تؤثر على ترتيبك.' },
                   { t: 'Keywords', d: 'دراسة الكلمات الأكثر ربحية وتحويلاً في مجالك وتصدرها.' },
                   { t: 'On-page', d: 'تحسين تجربة المستخدم وسرعة الصفحات لتتوافق مع معايير جوجل.' },
                   { t: 'Off-page', d: 'بناء شبكة روابط خلفية قوية (Backlinks) ترفع من سلطة نطاقك.' }
                 ].map((item, i) => (
                   <div key={i} className="p-8 md:p-10 bento-card hover:shadow-2xl transition-all group text-right">
                     <h4 className="font-bold text-xl md:text-2xl mb-4 text-white group-hover:text-blue-400 transition-colors">{item.t}</h4>
                     <p className="text-base md:text-lg text-gray-500 leading-relaxed">{item.d}</p>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </section>

        {/* PAID ADS SECTION */}
        <section id="الإعلانات" className="py-32 md:py-64 lg:py-80 px-10 md:px-20 bg-black">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-24 lg:gap-40 items-center">
              <div className="lg:w-1/2">
                <SectionHeader 
                  tag="نمو صاروخي سريع"
                  title="حوّل ميزانيتك <br/> إلى ماكينة أرباح."
                  subtitle="نحن نصمم حملات إعلانية ذكية عبر كافة المنصات العالمية، تستهدف العميل الذي يبحث عنك فعلياً وتحوله إلى مشترٍ دائم."
                  icon={<TrendingUp className="w-5 h-5 text-orange-400" />}
                />
                <div className="space-y-10 md:space-y-12 reveal stagger-2">
                   {[
                     { title: 'استراتيجية البيانات الدقيقة', desc: 'دراسة المنتج، الجمهور، والمنافسين بعمق إحصائي قبل إنفاق أي ريال.' },
                     { title: 'تحسين ROAS المستمر', desc: 'التركيز اليومي على تحقيق أفضل عائد ممكن على الإنفاق الإعلاني لزيادة الربحية.' },
                     { title: 'اختبار A/B ذكاء اصطناعي', desc: 'تجربة آلاف النصوص والصور للوصول إلى التركيبة المثالية التي تجذب العملاء.' }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-6 md:gap-8 items-start text-right justify-end">
                        <div>
                          <h4 className="font-bold text-2xl md:text-3xl mb-4 text-white">{item.title}</h4>
                          <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-lg">{item.desc}</p>
                        </div>
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                          <CheckCircle2 className="text-blue-400 w-6 h-6 md:w-8 md:h-8" />
                        </div>
                     </div>
                   ))}
                </div>
              </div>
              <div className="lg:w-1/2 relative reveal stagger-3 grid grid-cols-2 gap-6 md:gap-8">
                 <div className="space-y-6 md:space-y-8 pt-12 md:pt-24">
                    <div className="p-8 md:p-12 bg-blue-600/90 text-white rounded-[3rem] md:rounded-[4rem] shadow-2xl hover:-translate-y-4 transition-transform duration-500 backdrop-blur-xl border border-white/10"><h5 className="font-bold text-2xl md:text-3xl mb-4">Google Ads</h5><p className="text-base md:text-lg opacity-80">الوصول للباحثين عنك في اللحظة الحاسمة.</p></div>
                    <div className="p-8 md:p-12 bg-white/5 text-white rounded-[3rem] md:rounded-[4rem] shadow-2xl hover:-translate-y-4 transition-transform duration-500 border border-white/10"><h5 className="font-bold text-2xl md:text-3xl mb-4">TikTok Ads</h5><p className="text-base md:text-lg opacity-80">انتشار فيروسي وتفاعل يفوق كل التوقعات.</p></div>
                 </div>
                 <div className="space-y-6 md:space-y-8">
                    <div className="p-8 md:p-12 bg-[#1877F2]/80 text-white rounded-[3rem] md:rounded-[4rem] shadow-2xl hover:-translate-y-4 transition-transform duration-500 border border-white/10"><h5 className="font-bold text-2xl md:text-3xl mb-4">Meta Ads</h5><p className="text-base md:text-lg opacity-80">استهداف دقيق للمهتمين بمنتجك عبر إنستغرام.</p></div>
                    <div className="p-8 md:p-12 bg-[#FFFC00] text-black rounded-[3rem] md:rounded-[4rem] shadow-2xl hover:-translate-y-4 transition-transform duration-500"><h5 className="font-bold text-2xl md:text-3xl mb-4 text-black">Snapchat</h5><p className="text-base md:text-lg opacity-70">هيمنة شاملة على السوق الخليجي النشط.</p></div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* STORE DESIGN SECTION */}
        <section id="التصميم" className="py-32 md:py-64 lg:py-80 px-10 md:px-20 bg-black overflow-hidden relative">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-40 items-center relative z-10">
            <div className="reveal text-right">
              <div className="inline-flex items-center gap-3 bg-white/5 text-gray-300 px-6 py-2.5 rounded-full text-[15px] font-bold mb-12 border border-white/10 backdrop-blur-md">
                <Palette className="w-5 h-5 text-purple-400" /><span>تجربة مستخدم Apple-Grade</span>
              </div>
              <h2 className="text-5xl md:text-7xl lg:text-9xl font-black mb-12 tracking-tighter leading-[1] text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">متجر يليق <br/> بإمبراطوريتك.</h2>
              <p className="text-xl md:text-2xl text-gray-500 mb-16 leading-relaxed max-w-2xl ml-auto">نحن لا نصمم واجهات؛ نحن نهندس رحلات شراء غامرة تعزز الثقة المطلقة وترفع معدلات التحويل إلى مستويات قياسية.</p>
              <div className="grid grid-cols-2 gap-8 md:gap-12 mb-16">
                 <div className="group"><div className="text-3xl md:text-5xl font-black mb-4 text-blue-500 group-hover:scale-110 transition-transform origin-right">Shopify</div><div className="text-gray-500 text-lg md:text-xl font-medium">تطوير مخصص وحصري لبراندك</div></div>
                 <div className="group"><div className="text-3xl md:text-5xl font-black mb-4 text-blue-500 group-hover:scale-110 transition-transform origin-right">سلة / زد</div><div className="text-gray-500 text-lg md:text-xl font-medium">تهيئة احترافية للمنصات المحلية</div></div>
              </div>
              <button className="bg-white text-black px-10 py-5 md:px-14 md:py-6 rounded-full font-black text-xl md:text-2xl hover:bg-blue-600 hover:text-white transition-all btn-apple flex items-center gap-4 justify-center md:justify-end">
                 ابدأ تصميم متجرك الآن <ArrowUpRight size={32} />
              </button>
            </div>
            <div className="relative reveal stagger-2">
               <div className="relative group">
                  <div className="absolute inset-0 bg-blue-600/20 blur-[120px] rounded-full group-hover:bg-blue-600/40 transition-all duration-[2s]"></div>
                  <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1500" alt="Premium Store Design" className="rounded-[3rem] md:rounded-[4rem] shadow-2xl border border-white/10 group-hover:scale-[1.03] transition-transform duration-[3s] opacity-80" />
               </div>
            </div>
          </div>
        </section>

        {/* AUTOMATION & n8n SECTION - NEW */}
        <section id="الأتمتة" className="py-32 md:py-64 lg:py-80 px-10 md:px-20 bg-black relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto">
            <SectionHeader 
               tag="الربط الذكي وأتمتة المهام"
               title="اجعل متجرك يعمل <br/> <span className='text-purple-500'>بشكل آلي تماماً.</span>"
               subtitle="عبر خدمات n8n الاحترافية، نربط جميع أدواتك في نظام واحد متناغم يوفر مئات الساعات ويقضي على الأخطاء البشرية."
               icon={<Workflow className="w-5 h-5 text-purple-400" />}
             />

             <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 reveal stagger-2">
                {/* Large Featured n8n Card */}
                <div className="lg:col-span-7 bento-card p-12 md:p-16 flex flex-col justify-between min-h-[500px] bg-gradient-to-br from-[#0f0f10] to-[#050505] border-purple-500/20 group">
                   <div className="relative z-10">
                      <div className="flex items-center gap-6 mb-12">
                         <div className="p-5 bg-purple-600 rounded-3xl shadow-[0_0_40px_rgba(147,51,234,0.3)] group-hover:rotate-12 transition-transform duration-500">
                            <Network size={40} className="text-white" />
                         </div>
                         <h3 className="text-3xl md:text-5xl font-black text-white">إمكانيات n8n اللا نهائية</h3>
                      </div>
                      <p className="text-xl md:text-3xl text-gray-400 leading-relaxed font-medium mb-10">
                         نحن متخصصون في بناء <span className="text-white">سلاسل سير عمل (Nodes)</span> معقدة تربط متجرك مع تطبيقات المحاسبة، CRM، البريد، وقواعد البيانات بشكل لحظي وآمن.
                      </p>
                      <div className="flex flex-wrap gap-4">
                         {['Google Sheets', 'HubSpot', 'WhatsApp API', 'Slack', 'Mailchimp'].map((tool, i) => (
                           <div key={i} className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm font-bold text-purple-400 flex items-center gap-2">
                             <Link2 size={14} /> {tool}
                           </div>
                         ))}
                      </div>
                   </div>
                   <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity duration-1000">
                      <Workflow size={300} className="text-purple-500" />
                   </div>
                </div>

                {/* Automation Use Cases */}
                <div className="lg:col-span-5 grid grid-rows-2 gap-8 md:gap-12">
                   <div className="bento-card p-10 flex flex-col justify-center border-white/5 hover:border-blue-500/30 transition-all">
                      <div className="flex items-center gap-6 mb-4">
                         <Zap className="text-yellow-400" />
                         <h4 className="text-2xl font-black text-white">أتمتة الطلبات والفوترة</h4>
                      </div>
                      <p className="text-gray-500 text-lg leading-relaxed">بمجرد وصول طلب جديد، يتم إنشاء الفاتورة، تحديث المخزون، وإرسال رسالة شكر للعميل عبر الواتساب تلقائياً.</p>
                   </div>
                   <div className="bento-card p-10 flex flex-col justify-center border-white/5 hover:border-green-500/30 transition-all">
                      <div className="flex items-center gap-6 mb-4">
                         <Database className="text-green-400" />
                         <h4 className="text-2xl font-black text-white">مزامنة البيانات الكبرى</h4>
                      </div>
                      <p className="text-gray-500 text-lg leading-relaxed">ربط بيانات متجرك في (سلة/زد/Shopify) مع أنظمة ERP الخاصة بك لضمان دقة البيانات 100%.</p>
                   </div>
                </div>

                {/* Tech Specs */}
                <div className="lg:col-span-12 bento-card p-12 bg-white/[0.02] border-white/10 flex flex-col md:flex-row items-center justify-between gap-12 group">
                   <div className="flex items-center gap-8 order-2 md:order-1">
                      <div className="text-right">
                         <div className="text-white text-2xl md:text-3xl font-black mb-2">توفير تكاليف التشغيل</div>
                         <p className="text-gray-500 text-lg">الأتمتة توفر عليك توظيف فريق كامل لإدخال البيانات اليدوي.</p>
                      </div>
                      <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center shrink-0">
                         <CreditCard className="text-blue-400 w-10 h-10" />
                      </div>
                   </div>
                   <div className="flex items-center gap-12 order-1 md:order-2">
                      <div className="flex flex-col items-center">
                         <span className="text-4xl md:text-6xl font-black text-white tracking-tighter">80%</span>
                         <span className="text-purple-400 font-bold uppercase tracking-widest text-xs mt-2">وقت أقل</span>
                      </div>
                      <div className="w-px h-16 bg-white/10"></div>
                      <div className="flex flex-col items-center">
                         <span className="text-4xl md:text-6xl font-black text-white tracking-tighter">0%</span>
                         <span className="text-purple-400 font-bold uppercase tracking-widest text-xs mt-2">أخطاء بشرية</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* MANAGEMENT SECTION */}
        <section id="الإدارة" className="py-32 md:py-64 lg:py-80 px-6 md:px-10 lg:px-20 bg-black overflow-hidden">
          <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
            <div className="w-full lg:w-1/2 order-1 lg:order-1 reveal">
              <div className="relative group perspective-1000">
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 to-purple-600/10 rounded-[3rem] md:rounded-[4.5rem] blur-2xl group-hover:opacity-40 transition-opacity duration-1000"></div>
                <div className="relative rounded-[3rem] md:rounded-[4.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] group bento-card border-white/10">
                  <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1500" alt="إدارة احترافية للمتاجر" className="w-full object-cover min-h-[400px] md:min-h-[500px] lg:min-h-[700px] group-hover:scale-110 transition-transform duration-[4s] ease-out opacity-80" />
                  <div className="absolute top-10 right-10 left-10 p-6 md:p-10 bg-black/40 backdrop-blur-xl rounded-[2.5rem] border border-white/10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-1000">
                     <div className="flex items-center gap-6 justify-end">
                        <div className="text-right">
                           <div className="text-gray-400 text-sm md:text-base font-bold">حالة التشغيل اللحظية</div>
                           <div className="text-green-400 text-lg md:text-2xl font-black">فعّال وبأداء مثالي</div>
                        </div>
                        <div className="w-10 h-10 md:w-14 md:h-14 bg-green-500/20 rounded-full flex items-center justify-center">
                           <Activity className="text-green-400 w-6 h-6 md:w-8 md:h-8 animate-pulse" />
                        </div>
                     </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end p-10 md:p-20">
                     <div className="text-right">
                        <p className="text-white text-2xl md:text-4xl font-black tracking-tighter leading-tight">
                           الدقة المتناهية <br /> <span className="text-blue-500">هي سر تفوقنا التشغيلي.</span>
                        </p>
                     </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-2 lg:order-2 text-right">
              <SectionHeader tag="تشغيل ذكي وصامت" title="تفرغ أنت للنمو، <br/> ونحن نتولى كل شيء." subtitle="نحن لسنا مجرد مزودي خدمة، نحن شريكك التشغيلي الذي يضمن أن كل برغي في متجرك يعمل بدقة الساعة السويسرية." icon={<Settings className="w-5 h-5 text-gray-400" />} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 reveal stagger-2">
                 {[
                   { icon: <ShoppingBag />, t: 'إدارة المنتجات', d: 'تحديث المحتوى، الصور، والأسعار بدقة متناهية تضمن ظهوراً مثالياً لبراندك.' },
                   { icon: <Users />, t: 'خدمة العملاء Pro', d: 'فريق متخصص للرد والمتابعة وتحويل التحديات إلى فرص ولاء لعملائك.' },
                   { icon: <PieChart />, t: 'تحليل الأداء اللحظي', d: 'تقارير يومية وأسبوعية شفافة مدعومة بالبيانات لاتخاذ قرارات نمو مدروسة.' },
                   { icon: <Rocket />, t: 'إطلاق الحملات', d: 'تجهيز العروض الموسمية والتخفيضات بكل احترافية لضمان أقصى استفادة.' }
                 ].map((item, i) => (
                   <div key={i} className="p-8 md:p-12 bento-card hover:bg-white/[0.03] group transition-all duration-500">
                      <div className="text-blue-400 mb-6 md:mb-8 group-hover:scale-125 transition-transform origin-right duration-500">
                        {React.cloneElement(item.icon as React.ReactElement, { className: 'w-10 h-10 md:w-12 md:h-12' })}
                      </div>
                      <h4 className="font-bold text-2xl md:text-3xl mb-4 text-white group-hover:text-blue-300 transition-colors">{item.t}</h4>
                      <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-medium">{item.d}</p>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section id="الأسعار" className="py-32 md:py-64 lg:py-80 px-10 md:px-20 bg-black overflow-hidden relative">
          <div className="max-w-[1400px] mx-auto text-right">
             <SectionHeader 
               tag="استثمار مدروس للنمو"
               title="باقات صممت <br/> لتناسب طموحك."
               subtitle="اختر المسار الذي يتماشى مع المرحلة الحالية لمتجرك، ودعنا نتولى قيادة المرحلة القادمة."
               icon={<CreditCard className="w-5 h-5 text-green-400" />}
             />
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-20 md:mt-32 reveal stagger-3">
               {pricingPlans.map((plan, i) => (
                 <div key={i} className={`relative bento-card p-10 md:p-16 flex flex-col justify-between transition-all duration-700 ${plan.popular ? 'border-blue-600/40 bg-white/[0.02] shadow-[0_0_80px_rgba(37,99,235,0.15)]' : 'border-white/10'}`}>
                    {plan.popular && (
                      <div className="absolute -top-6 right-10 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-black tracking-tighter shadow-xl">
                        الأكثر اختياراً
                      </div>
                    )}
                    
                    <div>
                      <div className="mb-10 p-6 bg-white/5 rounded-3xl w-fit">
                        {React.cloneElement(plan.icon as React.ReactElement, { size: 40 })}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-black text-white mb-3">{plan.name}</h3>
                      <p className="text-gray-500 text-lg font-medium mb-12">{plan.tagline}</p>
                      
                      <div className="flex items-baseline gap-2 mb-12">
                        <span className="text-5xl md:text-7xl font-black text-white tracking-tighter">{plan.price}</span>
                        <span className="text-xl text-gray-500 font-bold">{plan.period}</span>
                      </div>
                      
                      <div className="space-y-6 md:space-y-8 mb-20">
                        {plan.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-4 justify-end">
                            <span className="text-lg md:text-xl text-gray-400 font-medium">{feature}</span>
                            <CheckCircle2 size={24} className={plan.popular ? "text-blue-500" : "text-gray-600"} />
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <button className={`w-full py-6 md:py-8 rounded-full text-xl md:text-2xl font-black transition-all btn-apple ${plan.popular ? 'bg-blue-600 text-white shadow-2xl shadow-blue-600/30' : 'bg-white text-black'}`}>
                      اختر الباقة الآن
                    </button>
                 </div>
               ))}
             </div>
             
             <div className="mt-24 text-center reveal">
                <p className="text-gray-500 text-lg md:text-xl font-medium">هل لديك متطلبات خاصة؟ <a href="#contact" className="text-blue-400 hover:text-blue-300 transition-colors font-bold border-b border-blue-400/30">تحدث مع خبير النمو لدينا</a></p>
             </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-32 md:py-64 lg:py-80 px-10 text-center bg-black overflow-hidden relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[30rem] font-black text-white/5 pointer-events-none select-none -z-10">TRUST</div>
          <div className="max-w-[1000px] mx-auto reveal">
            <blockquote className="text-4xl md:text-6xl lg:text-9xl font-black leading-[1.05] mb-12 md:mb-20 tracking-tighter text-white italic">
              "نحن لا نعمل كوكالة خارجية، <br/> بل كفريق نمو مدمج داخل متجرك."
            </blockquote>
            <div className="flex items-center justify-center gap-6 md:gap-8">
               <div className="w-16 h-16 md:w-24 md:h-24 bg-white/10 rounded-2xl md:rounded-3xl flex items-center justify-center border border-white/10 shadow-2xl animate-bounce-slow"><Zap className="text-blue-400" size={48} /></div>
               <div className="text-right">
                  <div className="font-black text-2xl md:text-4xl text-white tracking-tight">فريق التاجر الرقمي</div>
                  <div className="text-gray-500 font-bold text-lg md:text-xl mt-2 tracking-widest uppercase">نصنع المستقبل الرقمي معاً</div>
               </div>
            </div>
          </div>
        </section>

        {/* NEW ENHANCED CTA SECTION (The Vault Concept) */}
        <section id="contact" className="py-40 md:py-64 lg:py-80 px-10 md:px-20 bg-black relative overflow-hidden flex items-center justify-center min-h-screen">
          <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full animate-pulse pointer-events-none"></div>
          <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>

          <div className="max-w-[1400px] w-full relative z-10">
            <div className="flex flex-col items-center text-center reveal">
              <div className="inline-flex items-center gap-3 bg-white/5 text-blue-400 px-8 py-3 rounded-full text-sm font-black mb-12 border border-blue-400/20 backdrop-blur-3xl shadow-[0_0_40px_rgba(37,99,235,0.1)]">
                <Crown size={18} className="animate-bounce" />
                <span>عضوية الدائرة المغلقة (Inner Circle)</span>
              </div>

              <h2 className="text-6xl md:text-8xl lg:text-9xl font-black mb-10 tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-600">
                لا نرسل إيميلات، <br /> <span className="text-blue-600">نرسل خطط حرب.</span>
              </h2>

              <p className="text-xl md:text-3xl text-gray-500 max-w-4xl mb-24 leading-relaxed font-medium">
                انضم لـ <span className="text-white font-bold">12,400+</span> تاجر يتلقون أسبوعياً استراتيجيات نمو "خلف الكواليس" لا يتم نشرها في أي مكان آخر. 
              </p>

              <div className="relative w-full max-w-4xl">
                 <div className="relative group">
                    <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-[3.5rem] md:rounded-[5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-focus-within:opacity-50"></div>
                    <div className="relative bg-[#0a0a0b] border border-white/10 rounded-[3.5rem] md:rounded-[5rem] p-4 md:p-6 shadow-3xl overflow-hidden">
                       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.05)_0%,_transparent_70%)]"></div>
                       <div className="relative flex flex-col lg:flex-row items-center gap-4">
                          <input 
                            type="email" 
                            placeholder="ضع بريدك لفتح الخزنة الرقمية..." 
                            className="w-full lg:flex-grow bg-transparent border-none outline-none px-10 py-8 md:py-10 text-2xl md:text-3xl font-bold text-white text-right placeholder-gray-700 focus:placeholder-gray-500 transition-all"
                          />
                          <button className="w-full lg:w-auto bg-white text-black px-12 py-8 md:py-10 rounded-[2.5rem] md:rounded-[4rem] font-black text-2xl md:text-3xl hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-6 group/btn active:scale-95 shadow-2xl shrink-0">
                            فتح الخزنة الآن 
                            <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center group-hover/btn:bg-white transition-colors duration-500">
                               <ChevronLeft className="text-white group-hover/btn:text-blue-600 transition-colors duration-500" size={32} />
                            </div>
                          </button>
                       </div>
                    </div>
                 </div>

                 <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-12 text-gray-500">
                    <div className="flex items-center gap-4">
                       <div className="flex -space-x-4 flex-row-reverse">
                          {[1,2,3,4].map(i => (
                            <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-12 h-12 rounded-full border-4 border-black object-cover" alt="User" />
                          ))}
                          <div className="w-12 h-12 rounded-full border-4 border-black bg-blue-600 flex items-center justify-center text-[10px] text-white font-black">+12k</div>
                       </div>
                       <span className="text-sm font-black uppercase tracking-widest">انضم لرواد الأعمال</span>
                    </div>
                    <div className="hidden md:block w-px h-8 bg-white/10"></div>
                    <div className="flex items-center gap-4">
                       <ShieldAlert size={20} className="text-green-500" />
                       <span className="text-sm font-black uppercase tracking-widest">بياناتك مشفرة ومؤمنة بالكامل</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-black pt-32 md:pt-48 pb-16 px-10 md:px-24 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-20 md:gap-24 mb-32">
          <div className="lg:col-span-6 text-right">
            <div className="flex items-center justify-end gap-6 mb-12">
              <span className="font-black text-3xl md:text-4xl tracking-tighter text-white">التاجر الرقمي</span>
              <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl flex items-center justify-center shadow-xl"><div className="w-5 h-5 md:w-6 md:h-6 bg-black rounded-full"></div></div>
            </div>
            <p className="text-gray-500 text-xl md:text-2xl leading-relaxed mb-12 max-w-lg ml-auto font-medium">المنصة رقم #1 في الشرق الأوسط لدعم وتمكين رواد الأعمال الرقميين من خلال منظومة خدمات عالمية متكاملة.</p>
          </div>
          <div className="lg:col-span-3 text-right">
            <h4 className="font-black text-white mb-10 text-xl tracking-widest uppercase opacity-50">الخدمات</h4>
            <ul className="space-y-4 md:space-y-6 text-lg md:text-xl font-bold text-gray-500">
              <li><a href="#SEO" className="hover:text-white transition-colors">تحسين السيو المتقدم</a></li>
              <li><a href="#الإعلانات" className="hover:text-white transition-colors">إدارة الحملات الإعلانية</a></li>
              <li><a href="#الأتمتة" className="hover:text-white transition-colors">أتمتة العمليات n8n</a></li>
              <li><a href="#الإدارة" className="hover:text-white transition-colors">الإدارة التشغيلية Pro</a></li>
            </ul>
          </div>
          <div className="lg:col-span-3 text-right">
            <h4 className="font-black text-white mb-10 text-xl tracking-widest uppercase opacity-50">تواصل معنا</h4>
            <p className="text-gray-500 text-lg md:text-xl font-medium mb-10 leading-relaxed">فريقنا متاح دائماً للرد على استفساراتك.</p>
            <div className="text-xl md:text-2xl font-black text-white tracking-tighter">hello@digitalmerchant.ar</div>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto pt-16 border-t border-white/5 flex flex-col md:flex-row-reverse justify-between items-center gap-10 text-sm md:text-[15px] text-gray-600 font-bold">
          <p>© 2024 منصة التاجر الرقمي. جميع الحقوق محفوظة بكل فخر.</p>
          <div className="flex items-center gap-4 text-lg md:text-xl">
             <span className="opacity-40">صُنع بمعايير جودة عالمية في</span>
             <span className="font-black text-white uppercase tracking-widest">الوطن العربي</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
