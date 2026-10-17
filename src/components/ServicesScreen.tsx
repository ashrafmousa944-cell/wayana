import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { useCart } from '../context/CartContext';

export const ServicesScreen: React.FC = () => {
  const { setActiveScreen } = useCart();

  return (
    <div className="flex flex-col w-full bg-[#f8f9ff] text-[#011d35]">
      {/* 1. Editorial Header Section */}
      <section className="relative overflow-hidden bg-[#eef4ff] py-12 md:py-16 lg:py-20 border-b border-[#c3c6d5]/20">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#fc9430]/20 blur-3xl"></div>
          <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[#004098]/15 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl text-right">
              <div className="inline-flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full mb-3 shadow-sm border border-[#c3c6d5]/20">
                <span className="material-symbols-outlined text-[#fc9430] text-[18px]">verified</span>
                <span className="text-xs md:text-sm font-bold text-[#914d00]">خدماتنا المعتمدة في خانقين</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#004098] tracking-tight mb-3 leading-tight">
                خدمات متكاملة تصنع متعة كل وجبة
              </h1>
              <p className="text-sm md:text-base text-[#424653] leading-relaxed">
                من مطبخنا الساخن في قلب خانقين إلى مائدتكم أينما كنتم. نوفر حلول ضيافة سريعة، بوكسات عائلية فاخرة، وتجارب تفاعلية مستمرة لجمهورنا العزيز.
              </p>
            </div>

            {/* Quick Snapshot Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-white p-4 rounded-2xl shadow-sm border border-[#c3c6d5]/20">
              <div className="text-right p-2">
                <span className="text-xl md:text-2xl text-[#004098] font-black block">100%</span>
                <span className="text-xs text-[#737784] font-semibold">حرارة مضمونة بالبوكسات</span>
              </div>
              <div className="text-right p-2">
                <span className="text-xl md:text-2xl text-[#fc9430] font-black block">35 دقيقة</span>
                <span className="text-xs text-[#737784] font-semibold">متوسط وقت التوصيل</span>
              </div>
              <div className="col-span-2 sm:col-span-1 text-right p-2">
                <span className="text-xl md:text-2xl text-[#004098] font-black block">10k+</span>
                <span className="text-xs text-[#737784] font-semibold">متابع في خانقين</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Services Bento Mosaic */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex flex-col gap-10">
          {/* Service 1: Express Delivery (Hero Card) */}
          <div className="bg-[#f8f9ff] rounded-2xl p-6 md:p-10 shadow-sm border border-[#c3c6d5]/20 transition-all duration-300 hover:shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 flex flex-col text-right">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-10 h-10 rounded-xl bg-[#dbe9ff] flex items-center justify-center text-[#004098]">
                    <span className="material-symbols-outlined text-[22px]">two_wheeler</span>
                  </span>
                  <span className="text-xs font-bold tracking-wider text-[#004098]">
                    الخدمة الأساسية السريعة
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#011d35] mb-2">
                  التوصيل السريع للمنازل (Express Delivery)
                </h2>
                <p className="text-sm md:text-base text-[#424653] leading-relaxed mb-6">
                  أسطول توصيل مباشر يغطي كافة أرجاء خانقين والمناطق المجاورة. نحرص على تسليم الوجبة بنفس جودة وحرارة خروجها من المشواة والفرن بفضل أكياس العزل الحراري المتقدمة.
                </p>

                {/* Feature Bullets */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <div className="flex items-start gap-2.5 bg-white p-3.5 rounded-xl border border-slate-100">
                    <span className="material-symbols-outlined text-[#fc9430] text-[22px] mt-0.5">thermostat</span>
                    <div className="flex flex-col">
                      <span className="font-bold text-sm text-[#011d35]">عزل حراري محكم</span>
                      <span className="text-xs text-[#737784] mt-0.5">حقائب وبوكسات كرتونية مقواة تحافظ على القرمشة والحرارة.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 bg-white p-3.5 rounded-xl border border-slate-100">
                    <span className="material-symbols-outlined text-[#004098] text-[22px] mt-0.5">near_me</span>
                    <div className="flex flex-col">
                      <span className="font-bold text-sm text-[#011d35]">تغطية خانقين كاملة</span>
                      <span className="text-xs text-[#737784] mt-0.5">وصول فوري للأحياء السكنية والأسواق والمكاتب والدوائر.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 bg-white p-3.5 rounded-xl border border-slate-100">
                    <span className="material-symbols-outlined text-[#fc9430] text-[22px] mt-0.5">chat</span>
                    <div className="flex flex-col">
                      <span className="font-bold text-sm text-[#011d35]">تواصل وتتبع مباشر</span>
                      <span className="text-xs text-[#737784] mt-0.5">إشعار فوري عند انطلاق الكابتن مع إمكانية الاتصال السريع.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 bg-white p-3.5 rounded-xl border border-slate-100">
                    <span className="material-symbols-outlined text-[#004098] text-[22px] mt-0.5">savings</span>
                    <div className="flex flex-col">
                      <span className="font-bold text-sm text-[#011d35]">أجور توصيل رمزية</span>
                      <span className="text-xs text-[#737784] mt-0.5">أسعار توصيل ثابتة ورمزية مع عروض توصيل مجاني دورية.</span>
                    </div>
                  </div>
                </div>

                {/* Action Bar */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    className="bg-[#fc9430] hover:bg-[#914d00] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-sm transition-all duration-200 inline-flex items-center gap-2 active:scale-95"
                    href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent('مرحباً، أريد طلب وجبة توصيل سريع داخل خانقين')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="material-symbols-outlined text-[18px]">send</span>
                    <span>اطلب خدمة التوصيل السريع</span>
                  </a>
                  <span className="text-xs text-[#424653] font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    الكباتن جاهزون حالياً للتوصيل
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-2xl shadow-md group">
                  <img
                    className="w-full h-80 lg:h-96 object-cover transform transition-transform duration-500 group-hover:scale-105"
                    alt="وجبات التوصيل السريع في خانقين"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGXEj0gdX8887Twyl-fKf1MUCTS1lidtIzYFRd1ZN6voJNjUNaPoQ0IsolYt4JYdrg6rC-r5nflxQ0QDeExDyzDQhjldeSksAcx6Os7rs0pN0bSYUOLCbSl8IerRCSqmU_jGMFQFykd_wDDoBQyDZoifUBJ0zT3GkWoOUCmKXjXKB_ABP4vgUM62_NM6hslFLyw4cC87cMagt8kpRWdxtB3kE9kzD56yTLHRRLjUcca7fVU0_yYTGm"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent p-5 text-right text-white">
                    <span className="text-xs font-bold text-[#ffdcc3] block">التزامنا اليومي</span>
                    <span className="text-sm md:text-base font-bold">وجبتك تصل كما لو أنك تأكلها داخل المطعم</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 2: Gathering & Family Boxes */}
          <div className="bg-[#f8f9ff] rounded-2xl p-6 md:p-10 shadow-sm border border-[#c3c6d5]/20 transition-all duration-300 hover:shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative overflow-hidden rounded-2xl shadow-md group">
                  <img
                    className="w-full h-80 lg:h-96 object-cover transform transition-transform duration-500 group-hover:scale-105"
                    alt="صواني وبوكسات العزومات والجمعات في خانقين"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr5tEoy2cjiFvozMno6-XAgPPMuXRq4-YkpP1rJCU_SAL0SrsSeZbh8iQDe_JnGkPQSsuTvq3dpjBRz5ndNIY3EV3h4lnmHWhYKgqUSC2CbS2HwCW6NfC7N5NOl9yRKB0Wr8KS5O_QKPamSo3E4Qh2Hue-V_zTzKjXu3HRErYP_uU9SjDwUUoLjMAR-4chvuAPKy72lLzMtHNqpbmA8DmnZotQpaAXHf8g_GDxDEdnhIX1qLqE66y4"
                  />
                  <div className="absolute top-4 right-4 bg-[#004098] text-white text-xs px-3 py-1 rounded-full shadow-sm font-bold">
                    الأكثر طلباً للجمعات
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col text-right order-1 lg:order-2">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-10 h-10 rounded-xl bg-[#ffdcc3] flex items-center justify-center text-[#914d00]">
                    <span className="material-symbols-outlined text-[22px]">groups</span>
                  </span>
                  <span className="text-xs font-bold tracking-wider text-[#914d00]">
                    عزومات ولمات الأهل
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#011d35] mb-2">
                  تجهيز بوكسات العزومات والمناسبات العائلية
                </h2>
                <p className="text-sm md:text-base text-[#424653] leading-relaxed mb-6">
                  صممنا بوكساتنا وصوانينا لتكون سيدة المائدة في سهرات الأصدقاء، المناسبات العائلية، ولمات عطلة نهاية الأسبوع. تشكيلات سخية ومدروسة تكفي الجميع بأسعار تنافسية.
                </p>

                {/* Specifications List */}
                <div className="space-y-2.5 mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 bg-white rounded-xl border border-slate-100 gap-1">
                    <span className="font-bold text-sm text-[#004098]">بوكس الشاورما العائلي العملاق</span>
                    <span className="text-xs text-[#737784]">18 قطعة شاورما + بطاطا عائلية + صوصات + بطل بيبسي لتر</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 bg-white rounded-xl border border-slate-100 gap-1">
                    <span className="font-bold text-sm text-[#004098]">صواني المشاوي المشكلة الملكية</span>
                    <span className="text-xs text-[#737784]">كباب لحم عراقي، تكة دجاج، طماطة وبصل مشوي، خبز تنور</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 bg-white rounded-xl border border-slate-100 gap-1">
                    <span className="font-bold text-sm text-[#004098]">كومبو البرغر التوفيري</span>
                    <span className="text-xs text-[#737784]">سندويشات برغر مضاعفة مع طبق فنجر عائلي ومقبلات خاصة</span>
                  </div>
                </div>

                {/* Action Bar */}
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    className="bg-[#004098] hover:bg-[#1557c0] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-sm transition-all duration-200 inline-flex items-center gap-2 active:scale-95"
                    href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent('مرحباً، أود الاستفسار وحجز بوكس عائلي للعزومة')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="material-symbols-outlined text-[18px]">dinner_dining</span>
                    <span>احجز بوكس العزومة الآن</span>
                  </a>
                  <span className="text-xs text-[#737784]">تجهيز مسبق يضمن جهوزية طلبك بالدقيقة</span>
                </div>
              </div>
            </div>
          </div>

          {/* Two Column Row: Takeaway & Football Competitions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Service 3: Direct Takeaway */}
            <div className="bg-[#f8f9ff] rounded-2xl p-6 md:p-8 shadow-sm border border-[#c3c6d5]/20 flex flex-col justify-between text-right transition-all duration-300 hover:shadow-md">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#004098] shadow-sm">
                    <span className="material-symbols-outlined text-[26px]">shopping_bag</span>
                  </span>
                  <span className="text-xs bg-[#dbe9ff] text-[#004098] px-3 py-1 rounded-full font-bold">
                    بدون انتظار
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#011d35] mb-2">
                  الاستلام المباشر من المطعم (Takeaway)
                </h3>
                <p className="text-xs md:text-sm text-[#424653] leading-relaxed mb-6">
                  جدول وقتك بدقة. اتصل بنا أو راسلنا عبر الواتساب قبل انطلاقك، وحدد وجبتك المفضلة ووقت وصولك، وستجد طلبك معبأً وساخناً وجاهزاً للتسليم الفوري دون قضاء ثانية واحدة في الانتظار.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#fc9430] text-[18px]">check_circle</span>
                    <span className="text-xs md:text-sm text-[#011d35]">إعداد فوري قبل وصولك بـ 5 دقائق لحفظ السخونة.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#fc9430] text-[18px]">check_circle</span>
                    <span className="text-xs md:text-sm text-[#011d35]">مواقف سهلة وموقع معروف في مركز خانقين.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#fc9430] text-[18px]">check_circle</span>
                    <span className="text-xs md:text-sm text-[#011d35]">تأكيد جاهزية الطلب عبر رسالة واتساب تلقائية.</span>
                  </div>
                </div>
              </div>
              <div className="pt-2">
                <a
                  className="w-full bg-white hover:bg-[#e4efff] text-[#004098] font-bold text-xs md:text-sm py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 border border-[#c3c6d5]/30 shadow-sm"
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                >
                  <span className="material-symbols-outlined text-[18px]">call</span>
                  <span>اتصل واطلب للاستلام الفوري: {RESTAURANT_INFO.phoneLocal}</span>
                </a>
              </div>
            </div>

            {/* Service 4: Community & Match Day Competitions */}
            <div className="bg-[#f8f9ff] rounded-2xl p-6 md:p-8 shadow-sm border border-[#c3c6d5]/20 flex flex-col justify-between text-right transition-all duration-300 hover:shadow-md relative overflow-hidden">
              <div className="absolute -left-12 -top-12 w-40 h-40 bg-[#fc9430]/10 rounded-full blur-2xl pointer-events-none"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="w-12 h-12 rounded-xl bg-[#ffdcc3] flex items-center justify-center text-[#914d00]">
                    <span className="material-symbols-outlined text-[26px]">emoji_events</span>
                  </span>
                  <span className="text-xs bg-[#fc9430] text-white px-3 py-1 rounded-full font-bold">
                    فعاليات مجتمع خانقين
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#011d35] mb-2">
                  مسابقات وتوقعات المباريات والجوائز
                </h3>
                <p className="text-xs md:text-sm text-[#424653] leading-relaxed mb-4">
                  نحن لا نقدم الطعام فقط، بل نشارك أهلنا في خانقين شغفهم! في كل قمة كروية وبطولة دولية أو محلية، نطلق مسابقات "توقع واربح" وجوائز فورية من صواني شاورما وبوكسات عملاقة للفائزين.
                </p>
                <div className="bg-white p-3.5 rounded-xl border border-slate-100 mb-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-xs md:text-sm text-[#914d00]">جائزة التوقع الصحيح:</span>
                    <span className="text-xs font-bold text-[#004098]">مجانية 100%</span>
                  </div>
                  <p className="text-xs text-[#424653]">
                    اربح صينية شاورما عائلية عملاقة مع المشروبات والمقبلات، وتوصيل مجاني حتى باب بيتك!
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#424653]">
                  <span className="material-symbols-outlined text-[#004098] text-[18px]">sports_soccer</span>
                  <span>تابع صفحتنا الرسمية على فيسبوك للمشاركة بمسابقة المباراة القادمة.</span>
                </div>
              </div>
              <div className="pt-4 relative">
                <a
                  className="w-full bg-[#fc9430] hover:bg-[#914d00] text-white font-bold text-xs md:text-sm py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm"
                  href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent('مرحباً، أود الاشتراك في توقعات المباراة القادمة والحصول على الجائزة')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-[18px]">campaign</span>
                  <span>شارك بالتوقع وتواصل معنا</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive 3-Step Ordering Guide */}
      <section className="py-16 md:py-20 bg-[#eef4ff] border-t border-[#c3c6d5]/20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 text-center">
          <div className="max-w-xl mx-auto mb-12">
            <span className="text-xs md:text-sm text-[#fc9430] font-bold block mb-1">كيف تسير الأمور؟</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004098]">
              اطلب وجبتك في 3 خطوات بسيطة
            </h2>
            <p className="text-xs md:text-sm text-[#424653] mt-2">
              نحرص على تجربة طلب سهلة وسريعة تناسب كل أهالي خانقين، دون تعقيدات أو تسجيل طويل.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-right">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#c3c6d5]/20 hover:-translate-y-1 transition-transform duration-200">
              <div className="w-12 h-12 rounded-full bg-[#004098] text-white text-lg font-bold flex items-center justify-center mb-4">
                1
              </div>
              <span className="text-base font-bold text-[#011d35] block mb-2">اختر وجبتك المفضلة</span>
              <p className="text-xs md:text-sm text-[#424653] leading-relaxed">
                تصفح قائمتنا الغنية بالشاورما السورية، المشاوي العراقية التازة، سندويشات البرغر الشهية، والمقبلات المتنوعة.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[#004098] text-xs font-bold flex items-center justify-between">
                <span>تنوع يناسب كل الأذواق</span>
                <span className="material-symbols-outlined text-[18px]">restaurant_menu</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#c3c6d5]/20 hover:-translate-y-1 transition-transform duration-200">
              <div className="w-12 h-12 rounded-full bg-[#fc9430] text-white text-lg font-bold flex items-center justify-center mb-4">
                2
              </div>
              <span className="text-base font-bold text-[#011d35] block mb-2">راسلنا واتساب أو اتصل</span>
              <p className="text-xs md:text-sm text-[#424653] leading-relaxed">
                أرسل طلبك مع موقعك في خانقين عبر رسالة واتساب واحدة، أو مكالمة هاتفية مباشرة وسيقوم فريقنا بتأكيد الطلب بلحظات.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[#914d00] text-xs font-bold flex items-center justify-between">
                <span>رد فوري وتأكيد سريع</span>
                <span className="material-symbols-outlined text-[18px]">support_agent</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#c3c6d5]/20 hover:-translate-y-1 transition-transform duration-200">
              <div className="w-12 h-12 rounded-full bg-[#1557c0] text-white text-lg font-bold flex items-center justify-center mb-4">
                3
              </div>
              <span className="text-base font-bold text-[#011d35] block mb-2">استلم ساخناً واستمتع</span>
              <p className="text-xs md:text-sm text-[#424653] leading-relaxed">
                يصلك الكابتن بسرعة قياسية وبحرارة ممتازة، أو استلم طلبك من الفرع مباشرة دون أي انتظار. بالصحة والعافية!
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[#004098] text-xs font-bold flex items-center justify-between">
                <span>طعم لا يُنسى</span>
                <span className="material-symbols-outlined text-[18px]">sentiment_very_satisfied</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Live Assurance & Contact Callout */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="bg-[#19324b] rounded-2xl p-6 md:p-10 text-white text-right relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
              <div className="lg:col-span-8 flex flex-col">
                <span className="text-xs text-[#ffdcc3] font-bold block mb-1">خليك مميز واطلب ويانه</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  جاهز لتجربة طعام استثنائية في خانقين؟
                </h2>
                <p className="text-xs md:text-sm text-[#d1e4ff] max-w-2xl mb-4 leading-relaxed">
                  فريق المطبخ والكباتن في حالة استعداد دائم لتلبية طلبك، سواء كان غداء عمل سريع، لمة عائلية مسائية، أو سهرة مباراة حماسية.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[#fc9430] text-[18px]">schedule</span>
                    {RESTAURANT_INFO.hours}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[#fc9430] text-[18px]">location_on</span>
                    {RESTAURANT_INFO.address}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
                <a
                  className="bg-[#fc9430] hover:bg-[#914d00] text-white font-bold text-sm px-6 py-3.5 rounded-xl text-center transition-all duration-200 active:scale-95 shadow-md flex items-center justify-center gap-2"
                  href={`https://wa.me/${RESTAURANT_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-[18px]">send</span>
                  <span>تواصل عبر واتساب الآن</span>
                </a>
                <a
                  className="bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-6 py-3.5 rounded-xl text-center transition-all duration-200 flex items-center justify-center gap-2"
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                >
                  <span className="material-symbols-outlined text-[18px]">phone_in_talk</span>
                  <span>اتصال هاتفي مباشر</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
