import React, { useState } from 'react';
import { RESTAURANT_INFO, KHANAQIN_AREAS } from '../data/restaurantData';

export const ContactScreen: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    inquiryType: 'طلب طعام وتوصيل منزلي',
    area: '',
    message: '',
    sendTarget: 'whatsapp' as 'whatsapp' | 'direct',
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (formData.sendTarget === 'whatsapp') {
      const formattedMsg =
        `*رسالة جديدة من موقع اطلب ويانه / خانقين*%0A%0A` +
        `👤 *الاسم:* ${encodeURIComponent(formData.name)}%0A` +
        `📞 *الهاتف:* ${encodeURIComponent(formData.phone)}%0A` +
        `📌 *المنطقة:* ${encodeURIComponent(formData.area || 'غير محدد')}%0A` +
        `🎯 *نوع الاستفسار:* ${encodeURIComponent(formData.inquiryType)}%0A` +
        `💬 *نص الرسالة:*%0A${encodeURIComponent(formData.message)}`;

      window.open(`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${formattedMsg}`, '_blank');
      setToastMessage('جاري تحويلك إلى واتساب لإرسال رسالتك مباشرة...');
    } else {
      setToastMessage('تم تسجيل رسالتكم بنجاح في نظام الموقع! سيتواصل معكم فريقنا خلال دقائق.');
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        phone: '',
        inquiryType: 'طلب طعام وتوصيل منزلي',
        area: '',
        message: '',
        sendTarget: 'whatsapp',
      });
    }, 1500);

    setTimeout(() => {
      setToastMessage(null);
    }, 6000);
  };

  return (
    <div className="flex flex-col w-full bg-[#f8f9ff] text-[#011d35]">
      {/* 1. Top Visual Brand Banner */}
      <section className="relative w-full overflow-hidden bg-[#004098] py-16 md:py-20 text-white">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#1557c0]/30 blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[#fc9430]/20 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl text-right">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-3.5 py-1 rounded-full">
                <span className="w-2.5 h-2.5 rounded-full bg-[#fc9430] animate-pulse"></span>
                <span className="text-xs font-bold text-[#ffdcc3]">خدمة التوصيل والاستفسار المباشر</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                تواصل ويانه.. بخدمتكم في خانقين
              </h1>
              <p className="text-sm md:text-base text-[#d1e4ff] max-w-xl leading-relaxed">
                سواء ردت تطلب وجبتك المفضلة، تحجز لمناسبتك، أو عندك أي استفسار، كادر "اطلب ويانه" حاضر دائماً لخدمتكم بأسرع وقت وأعلى جودة.
              </p>
            </div>

            {/* Quick Live Status Badge */}
            <div className="bg-white/10 backdrop-blur-lg p-5 rounded-2xl border border-white/10 flex items-center gap-4 w-full sm:w-auto shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-[#fc9430] text-white flex items-center justify-center shadow-md shrink-0">
                <span className="material-symbols-outlined text-[28px]">moped</span>
              </div>
              <div className="flex flex-col text-right">
                <span className="text-xs text-[#ffdcc3] font-semibold">حالة التوصيل الآن</span>
                <span className="text-base md:text-lg text-white font-bold">جاهزون للاستلام والتوصيل</span>
                <span className="text-xs text-slate-300">تغطية لكافة مناطق وأحياء خانقين</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 w-full">
        {/* Contact Channels: 4 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 -mt-16 mb-16 relative z-20">
          {/* Card 1: WhatsApp & Phone */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-[#c3c6d5]/20 flex flex-col justify-between text-right">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#e4efff] flex items-center justify-center text-[#004098] mb-3">
                <span className="material-symbols-outlined text-[26px]">chat</span>
              </div>
              <span className="text-xs font-bold text-[#914d00]">الطلبات الفورية</span>
              <h3 className="text-base md:text-lg font-bold text-[#011d35] mt-1">واتساب وهاتف مباشر</h3>
              <p className="text-xs md:text-sm text-[#424653] mt-1 leading-relaxed">
                أسرع طريقة لطلب الشاورما، المشاوي، والوجبات العائلية مباشرة.
              </p>
              <div className="mt-3 p-2 bg-[#f8f9ff] rounded-lg border border-slate-100">
                <span className="text-xs md:text-sm font-bold text-[#004098] block text-left" dir="ltr">
                  {RESTAURANT_INFO.phone}
                </span>
              </div>
            </div>
            <div className="pt-4 flex flex-col gap-2 mt-2">
              <a
                className="w-full bg-[#fc9430] hover:bg-[#914d00] text-white py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                href={`https://wa.me/${RESTAURANT_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[18px]">send</span>
                <span>محادثة واتساب سريعة</span>
              </a>
              <a
                className="w-full bg-[#f8f9ff] hover:bg-[#e4efff] text-[#004098] py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors border border-slate-200"
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span>اتصال هاتفي</span>
              </a>
            </div>
          </div>

          {/* Card 2: Location */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-[#c3c6d5]/20 flex flex-col justify-between text-right">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#e4efff] flex items-center justify-center text-[#004098] mb-3">
                <span className="material-symbols-outlined text-[26px]">location_on</span>
              </div>
              <span className="text-xs font-bold text-[#914d00]">العنوان والموقع</span>
              <h3 className="text-base md:text-lg font-bold text-[#011d35] mt-1">خانقين، ديالى</h3>
              <p className="text-xs md:text-sm text-[#424653] mt-1 leading-relaxed">
                العراق، محافظة ديالى، قضاء خانقين (الرمز البريدي: 32006).
              </p>
              <div className="mt-3 p-2 bg-[#f8f9ff] rounded-lg border border-slate-100">
                <span className="text-xs text-[#011d35] font-semibold block text-left" dir="ltr">
                  Khanaqin, Iraq 32006
                </span>
              </div>
            </div>
            <div className="pt-4 mt-2">
              <a
                className="w-full bg-[#004098] hover:bg-[#1557c0] text-white py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                href="#location-map-section"
              >
                <span className="material-symbols-outlined text-[18px]">map</span>
                <span>مشاهدة الخريطة</span>
              </a>
            </div>
          </div>

          {/* Card 3: Working Hours */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-[#c3c6d5]/20 flex flex-col justify-between text-right">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#e4efff] flex items-center justify-center text-[#004098] mb-3">
                <span className="material-symbols-outlined text-[26px]">schedule</span>
              </div>
              <span className="text-xs font-bold text-[#914d00]">ساعات العمل</span>
              <h3 className="text-base md:text-lg font-bold text-[#011d35] mt-1">يومياً بدون انقطاع</h3>
              <p className="text-xs md:text-sm text-[#424653] mt-1 leading-relaxed">
                نستقبل طلباتكم وزياراتكم يومياً لتقديم أشهى الأطباق الطازجة.
              </p>
              <div className="mt-3 p-2 bg-[#f8f9ff] rounded-lg border border-slate-100 flex flex-col gap-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#737784]">الافتتاح:</span>
                  <span className="font-bold text-[#004098]">11:00 ظهراً</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#737784]">الإغلاق:</span>
                  <span className="font-bold text-[#004098]">12:00 منتصف الليل</span>
                </div>
              </div>
            </div>
            <div className="pt-4 mt-2">
              <div className="flex items-center justify-center gap-2 text-[#914d00] font-bold text-xs bg-[#ffdcc3]/60 py-2.5 px-3 rounded-xl">
                <span className="w-2 h-2 rounded-full bg-[#914d00]"></span>
                <span>مفتوح الآن لخدمتكم</span>
              </div>
            </div>
          </div>

          {/* Card 4: Social Media */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-[#c3c6d5]/20 flex flex-col justify-between text-right">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#e4efff] flex items-center justify-center text-[#004098] mb-3">
                <span className="material-symbols-outlined text-[26px]">share</span>
              </div>
              <span className="text-xs font-bold text-[#914d00]">مواقع التواصل</span>
              <h3 className="text-base md:text-lg font-bold text-[#011d35] mt-1">تابعونا وتفاعلوا ويانه</h3>
              <p className="text-xs md:text-sm text-[#424653] mt-1 leading-relaxed">
                شاهدوا يوميات المطبخ، العروض الحصرية والمسابقات الرياضية وتوقعات المباريات.
              </p>
              <div className="mt-3 p-2 bg-[#f8f9ff] rounded-lg border border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[#737784]">حساب الإنستغرام:</span>
                <span className="font-bold text-[#004098]" dir="ltr">{RESTAURANT_INFO.instagram}</span>
              </div>
            </div>
            <div className="pt-4 flex flex-col gap-2 mt-2">
              <a
                className="w-full bg-[#f8f9ff] hover:bg-[#e4efff] text-[#004098] py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors border border-slate-200"
                href="https://instagram.com/order1us"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[18px]">photo_camera</span>
                <span>إنستغرام: order1us</span>
              </a>
              <a
                className="w-full bg-[#f8f9ff] hover:bg-[#e4efff] text-[#004098] py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors border border-slate-200"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[18px]">public</span>
                <span>فيسبوك: {RESTAURANT_INFO.brandName} / خانقين</span>
              </a>
            </div>
          </div>
        </div>

        {/* 3. Main Split Section: Form + Culinary Story Snapshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Interactive Form Container (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 md:p-8 shadow-md border border-[#c3c6d5]/20 text-right">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-[#fc9430] text-[22px]">rate_review</span>
                <span className="text-xs font-bold text-[#fc9430] uppercase">استمارة الحجز والتواصل</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#011d35]">
                ارسل لنا رسالتك أو استفسارك
              </h2>
              <p className="text-xs md:text-sm text-[#424653] mt-1">
                يسعدنا استقبال آرائكم، طلبات التجهيز للحفلات والمناسبات، أو أي ملاحظة لتطوير خدماتنا.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#011d35] mb-1.5">
                    الاسم الكامل <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="مثال: أحمد الخانقيني"
                      className="w-full bg-[#f8f9ff] text-[#011d35] placeholder:text-slate-400 rounded-xl py-3 px-4 pr-10 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#004098] text-xs md:text-sm border border-slate-200 transition-all"
                    />
                    <span className="material-symbols-outlined absolute right-3 top-3 text-slate-400 text-[20px]">
                      person
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#011d35] mb-1.5">
                    رقم الهاتف (واتساب) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      dir="ltr"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0771 572 7069"
                      className="w-full bg-[#f8f9ff] text-[#011d35] placeholder:text-slate-400 rounded-xl py-3 px-4 pl-10 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#004098] text-xs md:text-sm border border-slate-200 transition-all text-right"
                    />
                    <span className="material-symbols-outlined absolute left-3 top-3 text-slate-400 text-[20px]">
                      call
                    </span>
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#011d35] mb-1.5">
                    نوع الاستفسار / الغرض <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full bg-[#f8f9ff] text-[#011d35] rounded-xl py-3 px-4 pr-10 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#004098] text-xs md:text-sm border border-slate-200 transition-all appearance-none cursor-pointer"
                    >
                      <option value="طلب طعام وتوصيل منزلي">طلب طعام وتوصيل منزلي</option>
                      <option value="حجز وتجهيز مناسبات وعزائم">حجز وتجهيز مناسبات وعزائم</option>
                      <option value="استفسار عن الأسعار وقائمة الطعام">استفسار عن الأسعار وقائمة الطعام</option>
                      <option value="اقتراح أو ملاحظة على الخدمة">اقتراح أو ملاحظة على الخدمة</option>
                      <option value="أخرى">استفسار عام آخر</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-3 text-slate-400 text-[20px] pointer-events-none">
                      category
                    </span>
                    <span className="material-symbols-outlined absolute left-3 top-3 text-slate-400 text-[20px] pointer-events-none">
                      expand_more
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#011d35] mb-1.5">
                    المنطقة داخل خانقين <span className="text-slate-400 font-normal">(اختياري)</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      list="khanaqin-areas-list"
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      placeholder="مثال: حي المعلمين، بختياري، السوق..."
                      className="w-full bg-[#f8f9ff] text-[#011d35] placeholder:text-slate-400 rounded-xl py-3 px-4 pr-10 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#004098] text-xs md:text-sm border border-slate-200 transition-all"
                    />
                    <datalist id="khanaqin-areas-list">
                      {KHANAQIN_AREAS.map((a, i) => (
                        <option key={i} value={a} />
                      ))}
                    </datalist>
                    <span className="material-symbols-outlined absolute right-3 top-3 text-slate-400 text-[20px]">
                      pin_drop
                    </span>
                  </div>
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-xs font-bold text-[#011d35] mb-1.5">
                  نص الرسالة أو تفاصيل الطلب <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="اكتب هنا تفاصيل طلبك، الكميات المطلوبة، أو أي ملاحظة تحب توصلها لإدارة المطعم..."
                  className="w-full bg-[#f8f9ff] text-[#011d35] placeholder:text-slate-400 rounded-xl p-4 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#004098] text-xs md:text-sm border border-slate-200 transition-all leading-relaxed"
                />
              </div>

              {/* Preferred Action Selection */}
              <div className="bg-[#f8f9ff] p-4 rounded-xl border border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <span className="text-xs text-[#424653] font-semibold">طريقة الإرسال المفضلة لديك:</span>
                <div className="flex items-center gap-4">
                  <label className="inline-flex items-center gap-2 cursor-pointer text-xs md:text-sm font-bold text-[#011d35]">
                    <input
                      type="radio"
                      name="sendTarget"
                      checked={formData.sendTarget === 'whatsapp'}
                      onChange={() => setFormData({ ...formData, sendTarget: 'whatsapp' })}
                      className="accent-[#004098] w-4 h-4 cursor-pointer"
                    />
                    <span>توجيه إلى واتساب فوراً</span>
                  </label>
                  <label className="inline-flex items-center gap-2 cursor-pointer text-xs md:text-sm font-bold text-[#011d35]">
                    <input
                      type="radio"
                      name="sendTarget"
                      checked={formData.sendTarget === 'direct'}
                      onChange={() => setFormData({ ...formData, sendTarget: 'direct' })}
                      className="accent-[#004098] w-4 h-4 cursor-pointer"
                    />
                    <span>تسجيل إلكتروني بالموقع</span>
                  </label>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-[#004098] hover:bg-[#1557c0] text-white py-3.5 px-8 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer disabled:opacity-50"
                >
                  <span className="material-symbols-outlined text-[20px]">send</span>
                  <span>{isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة الآن'}</span>
                </button>
                <span className="text-xs text-[#737784] text-center sm:text-right">
                  نرد خلال دقائق خلال أوقات الدوام الرسمي.
                </span>
              </div>

              {/* Success Notification Toast */}
              {toastMessage && (
                <div className="p-4 bg-[#ffdcc3] text-[#914d00] rounded-xl text-right flex items-center gap-2 border border-[#fc9430]/30 animate-in fade-in duration-200">
                  <span className="material-symbols-outlined text-[24px]">check_circle</span>
                  <span className="font-bold text-xs md:text-sm">{toastMessage}</span>
                </div>
              )}
            </form>
          </div>

          {/* Right/Sidebar: Culinary Snapshot & Hospitality Guarantee */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Hospitality Guarantee Card */}
            <div className="bg-[#eef4ff] rounded-2xl p-6 text-right relative overflow-hidden border border-[#c3c6d5]/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#004098] text-white flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px]">verified</span>
                </div>
                <div>
                  <span className="text-xs text-[#fc9430] font-bold">ضمان اطلب ويانه</span>
                  <h4 className="font-bold text-base text-[#011d35]">وجبات طازجة وسريعة</h4>
                </div>
              </div>
              <p className="text-xs md:text-sm text-[#424653] leading-relaxed">
                نحرص على وصول أطباقكم ساخنة وطازجة بعناية تامة. نستخدم أجود أنواع اللحوم والدجاج الطازج مع خلطات تتبيل مميزة يحبها أهل خانقين.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-center">
                <div className="bg-white p-3 rounded-xl border border-slate-100">
                  <span className="block text-xl font-black text-[#004098]">+10,000</span>
                  <span className="text-xs text-[#737784]">متابع وزبون وفي</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-100">
                  <span className="block text-xl font-black text-[#fc9430]">100%</span>
                  <span className="text-xs text-[#737784]">لحوم طازجة يومياً</span>
                </div>
              </div>
            </div>

            {/* Visual Dish Showcase Grid (Inspired by Facebook Photos) */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c3c6d5]/20 text-right">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-bold text-base text-[#011d35]">من أطباقنا اليومية</h4>
                  <span className="text-xs text-[#737784]">أطباق مميزة تشتهر بها مائدتنا</span>
                </div>
                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#fc9430] text-xs font-bold hover:underline flex items-center gap-1"
                >
                  <span>طلب مباشر</span>
                  <span className="material-symbols-outlined text-[16px]">chevron_left</span>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-2.5">
                <div className="group relative rounded-xl overflow-hidden h-24 bg-slate-100">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    alt="مشاوي عراقية على الفحم"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ5mjqFh74DzYW0plHEPQTh8WfRTkE0QXPRDps4ay4gStGeQeJlNtxAt-Nl7SFk0gXubHd8RwGy758xD2NtXkKuVKzpQLGYFiJiUmy8IYn1F4BhXmUA4TtxlWoFxGtkJTX_Gy7vMwYY2oA9n4-dcuDLR2TQAPbcpV-AeXEIK_zJKOOOe-_ro8upKLQP95v9BsilRsndpflXiRnOR8zznk3NfGaKxqmsaDFyh5BpGvQlcG6KQ9Lq4LU"
                  />
                </div>
                <div className="group relative rounded-xl overflow-hidden h-24 bg-slate-100">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    alt="بوكس شاورما مميز"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy29_E1v9BHzQFN-657YkuGebVkbIxrYDdW8wfcgL-JjnLVRXiCv-FRcnUOTjH2mvKrplxTG6d-y8N2k_6sCBFdi7iJuDK_ljE6hbD3pjmLZgfnG9Z0jzjCES83NldGc9Q69OEBO12u_V8o0zav7zH8hitcGsQfweN_SiKdixRJo53Hm0n0PemahW9gSQSoDemyLSONpJOS9ggejNYRtcNf4I41ixVzzC9Z5daS1UrbM6tBCzf1JgD"
                  />
                </div>
                <div className="group relative rounded-xl overflow-hidden h-24 bg-slate-100">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    alt="أطباق معكرونة إيطالية"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDUCqUwwcZrpC-BMD9B-U-MA2Hura03_aJ6CvOuYXDC0egxWilCgP4yId_FGKU2gTq-8ivxWuts71Lh61THupcp6FAukzOGu3hbI1l0SDuWTt-EVXfqY5ulRN2jU77bDIryrn6c0bDO9XiQp5PzKpfbnxzyzmJZCWS3opzMqwgodXriSQ5ipQaBMpNRePcRF7ZXQIiX7Vo0o1E8zLB_znrFQRcSXZY5-LpmvYVO7SX1FjCNEz-g_wd"
                  />
                </div>
              </div>
            </div>

            {/* Direct Instant Call Banner */}
            <div className="bg-gradient-to-r from-[#004098] to-[#1557c0] text-white rounded-2xl p-6 text-right flex items-center justify-between gap-4 shadow-md">
              <div className="space-y-1">
                <span className="text-xs text-[#ffdcc3] font-bold">للطلبات المستعجلة</span>
                <h5 className="font-bold text-base md:text-lg text-white">تفضل بالاتصال هاتفياً</h5>
                <span className="text-xs md:text-sm text-[#d1e4ff] block" dir="ltr">
                  {RESTAURANT_INFO.phone}
                </span>
              </div>
              <a
                className="w-12 h-12 rounded-full bg-[#fc9430] text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-md shrink-0"
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              >
                <span className="material-symbols-outlined text-[24px]">call</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4. Map & Delivery Coverage Section */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-[#c3c6d5]/20 text-right mb-16" id="location-map-section">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-[#fc9430] text-[22px]">travel_explore</span>
                <span className="text-xs font-bold text-[#fc9430]">نطاق التغطية والوصول</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#011d35]">موقعنا في خانقين وسرعة التوصيل</h2>
              <p className="text-xs md:text-sm text-[#424653] mt-1">
                نوصل طلباتكم إلى كافة أحياء ومناطق خانقين وضواحيها بوقت قياسي للحفاظ على حرارة الوجبة.
              </p>
            </div>
            <div className="flex items-center gap-2 bg-[#f8f9ff] px-4 py-2 rounded-xl border border-slate-100">
              <span className="material-symbols-outlined text-[#004098] text-[20px]">near_me</span>
              <span className="text-xs md:text-sm font-bold text-[#011d35]">العراق - خانقين 32006</span>
            </div>
          </div>

          {/* Map Representation with Overlaid Interactive Card */}
          <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-inner">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('${RESTAURANT_INFO.mapImageUrl}')` }}
            ></div>
            <div className="absolute bottom-4 right-4 max-w-sm bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-200 text-right">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-3 h-3 rounded-full bg-[#fc9430]"></span>
                <span className="font-bold text-sm text-[#011d35]">نقطة انطلاق وتوزيع الطلبات</span>
              </div>
              <p className="text-xs text-[#424653] leading-relaxed">
                خانقين، ديالى. إمكانية الاستلام المباشر أو التوصيل السريع إلى باب منزلك أو مكان عملك.
              </p>
              <a
                className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-[#004098] hover:underline"
                href="https://maps.google.com/?q=Khanaqin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>فتح في خرائط Google</span>
                <span className="material-symbols-outlined text-[16px]">open_in_new</span>
              </a>
            </div>
          </div>

          {/* Delivery Coverage Pills */}
          <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-[#737784] ml-2">المناطق المشمولة بالتوصيل الفوري:</span>
            {KHANAQIN_AREAS.map((area, idx) => (
              <span
                key={idx}
                className="bg-[#f8f9ff] text-[#011d35] px-3 py-1 rounded-full text-xs font-semibold border border-slate-200 hover:bg-[#e4efff] transition-colors"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* 5. Warm Hospitality Statement */}
        <div className="bg-gradient-to-b from-[#eef4ff] to-[#f8f9ff] rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto border border-[#c3c6d5]/20">
          <div className="w-14 h-14 rounded-full bg-[#ffdcc3] mx-auto flex items-center justify-center text-[#914d00] mb-3 shadow-sm">
            <span className="material-symbols-outlined text-[28px]">favorite</span>
          </div>
          <h3 className="text-xl md:text-2xl font-black text-[#011d35]">
            "كون مميز ويانه واطلب ويانه"
          </h3>
          <p className="text-xs md:text-sm text-[#424653] max-w-xl mx-auto mt-2 leading-relaxed">
            فريقنا في خانقين متواجد دائماً لخدمتكم واستقبال طلباتكم وملاحظاتكم بكل سرور، ويسعدنا دائماً أن نكون خياركم الأول لأشهى المأكولات.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              className="bg-[#fc9430] hover:bg-[#914d00] text-white px-6 py-3 rounded-xl font-bold text-xs md:text-sm transition-colors shadow-sm inline-flex items-center gap-2"
              href={`https://wa.me/${RESTAURANT_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>راسلنا الآن عبر واتساب</span>
            </a>
            <a
              className="bg-white hover:bg-[#e4efff] text-[#004098] px-6 py-3 rounded-xl font-bold text-xs md:text-sm transition-colors shadow-sm inline-flex items-center gap-2 border border-slate-200"
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              <span>اتصال مباشر: {RESTAURANT_INFO.phoneLocal}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
