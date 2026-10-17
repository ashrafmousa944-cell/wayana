import React from 'react';
import { RESTAURANT_INFO, MENU_ITEMS, TESTIMONIALS } from '../data/restaurantData';
import { useCart } from '../context/CartContext';

export const HomeScreen: React.FC = () => {
  const { addToCart, setActiveScreen, setSelectedDishForModal } = useCart();

  // Pick the 6 signature dishes featured on home screen
  const signatureDishes = MENU_ITEMS.slice(0, 6);

  const handleQuickWhatsAppOrder = (dishName: string, price: string) => {
    const text = `مرحباً اطلب ويانه / خانقين، أود طلب: ${dishName} بسعر ${price}.`;
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="flex flex-col w-full bg-[#f8f9ff] text-[#011d35]">
      {/* 1. Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#eef4ff] via-[#f8f9ff] to-white py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Text & Action Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-right space-y-4 z-10">
              {/* Tag Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dbe9ff] text-[#004098] font-bold text-xs md:text-sm shadow-sm">
                <span className="material-symbols-outlined text-[#fc9430] text-[18px]">
                  restaurant
                </span>
                <span>{RESTAURANT_INFO.slogan} • {RESTAURANT_INFO.city}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#011d35] tracking-tight leading-tight">
                أشهى المأكولات العراقية والغربية <br />
                <span className="text-[#1557c0]">تصلك ساخنة</span> في خانقين
              </h1>

              {/* Subtitle / Paragraph */}
              <p className="text-base sm:text-lg text-[#424653] max-w-2xl leading-relaxed">
                من قلب خانقين، نعد لكم أطباقنا بأجود اللحوم الطازجة، تتبيلاتنا العراقية السرية، وأعلى معايير النظافة والطعم الذي يخلّد في الذاكرة. وجبتك المفضلة بضغطة زر واحدة!
              </p>

              {/* Primary CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent('مرحباً اطلب ويانه، أود الاطلاع على المنيو والطلب')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[#fc9430] hover:bg-[#914d00] text-white px-6 py-3.5 rounded-xl font-bold text-base shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  <span>اطلب عبر واتساب</span>
                </a>
                <button
                  onClick={() => {
                    setActiveScreen('menu');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto bg-[#1557c0] hover:bg-[#004098] text-white px-6 py-3.5 rounded-xl font-bold text-base shadow-sm hover:shadow-md transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">menu_book</span>
                  <span>تصفح قائمة الطعام</span>
                </button>
              </div>

              {/* Quick Trust Metrics Cards */}
              <div className="pt-4 grid grid-cols-3 gap-3 w-full max-w-lg">
                <div className="p-3.5 rounded-xl bg-white shadow-sm border border-[#c3c6d5]/30 flex flex-col text-right">
                  <span className="text-xl md:text-2xl text-[#004098] font-black">10K+</span>
                  <span className="text-xs text-[#737784] font-semibold">متابع وزبون وفي</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white shadow-sm border border-[#c3c6d5]/30 flex flex-col text-right">
                  <span className="text-xl md:text-2xl text-[#fc9430] font-black">100%</span>
                  <span className="text-xs text-[#737784] font-semibold">لحوم طازجة يومياً</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white shadow-sm border border-[#c3c6d5]/30 flex flex-col text-right">
                  <span className="text-xl md:text-2xl text-[#004098] font-black">{RESTAURANT_INFO.deliveryTime}</span>
                  <span className="text-xs text-[#737784] font-semibold">متوسط التوصيل</span>
                </div>
              </div>
            </div>

            {/* Visual Media Collage */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              {/* Ambient Glows */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#fc9430]/15 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-8 -left-8 w-60 h-60 bg-[#1557c0]/15 rounded-full blur-3xl pointer-events-none"></div>

              {/* Main Image Container */}
              <div className="relative bg-white p-3 rounded-2xl shadow-xl border border-slate-100">
                <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-slate-100">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    alt="تشكيلة المشويات والشاورما الملكية في خانقين"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-GpggvP8qSfhRB9wUDmpGKCqqUJoHa8u7O_ZQoIqNEJ9kdqlWLNJi-0dOmOOOKYonjHr1pK8r1mzcGzs_R9QYh0O6v7Bande4oQeVgiu9Tcm1NrCNXIh4ze2Pna0fq-sJMo6LrKMe5kGKwl1tkhODOs7OJDXdmAgOn1uWO4nU0GcaphTvbLWbbPAGFuGk5lBDYk0XF_upyRJXLAsi97YY-yJCFT4voEhvHkazUWUhElYyaAuZDw_K"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/20 to-transparent flex items-end p-4">
                    <div className="text-right">
                      <span className="px-2.5 py-0.5 rounded bg-[#fc9430] text-white text-xs font-bold">
                        وجبة العائلة الأولى
                      </span>
                      <p className="text-lg font-bold text-white mt-1">
                        تشكيلة المشويات والشاورما الملكية
                      </p>
                    </div>
                  </div>
                </div>

                {/* Overlapping Floating Delivery Badge */}
                <div className="absolute -bottom-5 -right-4 bg-white p-3.5 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 max-w-xs">
                  <div className="w-11 h-11 rounded-full bg-[#dbe9ff] text-[#004098] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[24px]">moped</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-[#011d35]">توصيل حار وسريع</p>
                    <p className="text-xs text-[#737784]">لكافة أحياء ومناطق خانقين</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Quick Feature Strip */}
      <section className="w-full bg-white py-6 border-y border-[#c3c6d5]/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 text-right p-2">
              <div className="w-11 h-11 rounded-xl bg-[#dbe9ff] flex items-center justify-center text-[#004098] shrink-0">
                <span className="material-symbols-outlined text-[22px]">electric_moped</span>
              </div>
              <div>
                <p className="font-bold text-sm text-[#011d35]">توصيل فوري</p>
                <p className="text-xs text-[#424653]">حرارة الوجبة مضمونة</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-right p-2">
              <div className="w-11 h-11 rounded-xl bg-[#ffdcc3] flex items-center justify-center text-[#914d00] shrink-0">
                <span className="material-symbols-outlined text-[22px]">verified</span>
              </div>
              <div>
                <p className="font-bold text-sm text-[#011d35]">مكونات طازجة 100%</p>
                <p className="text-xs text-[#424653]">لحوم بلدية مختارة بعناية</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-right p-2">
              <div className="w-11 h-11 rounded-xl bg-[#dbe9ff] flex items-center justify-center text-[#004098] shrink-0">
                <span className="material-symbols-outlined text-[22px]">inventory_2</span>
              </div>
              <div>
                <p className="font-bold text-sm text-[#011d35]">تغليف محكم وعصري</p>
                <p className="text-xs text-[#424653]">بوكسات خاصة تحفظ النكهة</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-right p-2">
              <div className="w-11 h-11 rounded-xl bg-[#ffdcc3] flex items-center justify-center text-[#914d00] shrink-0">
                <span className="material-symbols-outlined text-[22px]">support_agent</span>
              </div>
              <div>
                <p className="font-bold text-sm text-[#011d35]">خدمة عملاء مباشرة</p>
                <p className="text-xs text-[#424653]">واتساب وهاتف طوال اليوم</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Signature Dishes Section */}
      <section className="w-full py-16 md:py-20 bg-[#f8f9ff]" id="signature-dishes">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 text-right gap-4">
            <div>
              <span className="text-sm font-bold text-[#fc9430]">أطباقنا الأكثر طلباً</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#011d35] mt-1">
                تذوق اختيارات زبائن "اطلب ويانه" المميزة
              </h2>
              <p className="text-sm md:text-base text-[#424653] mt-2 max-w-xl">
                كل طبق محضر بشغف وإتقان من قبل أمهر الطهاة، بوكسات غنية ووجبات شهية تناسب جمعاتكم ولحظاتكم السعيدة.
              </p>
            </div>
            <button
              onClick={() => {
                setActiveScreen('menu');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 text-[#004098] font-bold text-sm hover:underline shrink-0 cursor-pointer"
            >
              <span>مشاهدة القائمة الكاملة</span>
              <span className="material-symbols-outlined text-[18px]">chevron_left</span>
            </button>
          </div>

          {/* Dishes Grid (6 Cards Matching Design) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {signatureDishes.map((dish) => (
              <article
                key={dish.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group border border-[#c3c6d5]/20"
              >
                {/* Media Container */}
                <div
                  onClick={() => setSelectedDishForModal(dish)}
                  className="relative h-60 overflow-hidden bg-slate-100 cursor-pointer"
                >
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={dish.altText}
                    src={dish.image}
                  />
                  {dish.badge && (
                    <span className="absolute top-3 right-3 bg-[#fc9430] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                      {dish.badge}
                    </span>
                  )}
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-lg text-[#004098] font-bold text-base shadow-sm">
                    {dish.formattedPrice}
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-5 flex-1 flex flex-col justify-between text-right">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h3
                        onClick={() => setSelectedDishForModal(dish)}
                        className="font-bold text-base md:text-lg text-[#011d35] hover:text-[#004098] transition-colors cursor-pointer"
                      >
                        {dish.name}
                      </h3>
                    </div>
                    <p className="text-xs md:text-sm text-[#424653] leading-relaxed mb-4 line-clamp-2">
                      {dish.description}
                    </p>
                  </div>

                  {/* Action Bar */}
                  <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                    <button
                      onClick={() => addToCart(dish, 1)}
                      className="flex-1 bg-[#1557c0] hover:bg-[#004098] text-white py-2.5 px-3 rounded-xl font-bold text-xs md:text-sm flex items-center justify-center gap-1.5 transition-colors active:scale-95 cursor-pointer shadow-sm"
                    >
                      <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                      <span>أضف للسلة</span>
                    </button>
                    <button
                      onClick={() => handleQuickWhatsAppOrder(dish.name, dish.formattedPrice)}
                      className="px-3.5 py-2.5 bg-[#ffdcc3] hover:bg-[#fc9430] text-[#914d00] hover:text-white rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-1 cursor-pointer"
                      title="طلب فوري عبر واتساب"
                    >
                      <span className="material-symbols-outlined text-[18px]">send</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us Section (Bento Grid) */}
      <section className="w-full py-16 md:py-20 bg-[#eef4ff] border-y border-[#c3c6d5]/20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs md:text-sm font-bold text-[#fc9430]">لماذا نحن خيارك الأول؟</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#011d35] mt-1">
              خدمة استثنائية ونكهة عراقية أصلية
            </h2>
            <p className="text-sm md:text-base text-[#424653] mt-2">
              في "اطلب ويانه / خانقين" نجمع بين كرم الضيافة وسرعة تلبية رغباتكم بأحدث معايير التوصيل الحديث.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Bento Feature 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#c3c6d5]/20 flex flex-col text-right hover:-translate-y-1 transition-transform duration-200">
              <div className="w-12 h-12 rounded-xl bg-[#dbe9ff] text-[#004098] flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[28px]">skillet</span>
              </div>
              <h3 className="font-bold text-base text-[#011d35] mb-2">نكهة لا تُنسى بأيدي طهاة محترفين</h3>
              <p className="text-xs md:text-sm text-[#424653] leading-relaxed">
                خلطات وتتبيلات خاصة مبتكرة تعطي طعامنا بصمة فريدة لا تجدها في أي مكان آخر داخل خانقين.
              </p>
            </div>

            {/* Bento Feature 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#c3c6d5]/20 flex flex-col text-right hover:-translate-y-1 transition-transform duration-200">
              <div className="w-12 h-12 rounded-xl bg-[#ffdcc3] text-[#fc9430] flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[28px]">local_shipping</span>
              </div>
              <h3 className="font-bold text-base text-[#011d35] mb-2">أسرع أسطول دليفري في خانقين</h3>
              <p className="text-xs md:text-sm text-[#424653] leading-relaxed">
                سائقونا يعرفون أدق تفاصيل أحياء المدينة لتصلك الوجبة ساخنة كأنها خرجت للتو من الفرن.
              </p>
            </div>

            {/* Bento Feature 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#c3c6d5]/20 flex flex-col text-right hover:-translate-y-1 transition-transform duration-200">
              <div className="w-12 h-12 rounded-xl bg-[#dbe9ff] text-[#004098] flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[28px]">sanitizer</span>
              </div>
              <h3 className="font-bold text-base text-[#011d35] mb-2">تغليف عازل للحرارة ونظافة فائقة</h3>
              <p className="text-xs md:text-sm text-[#424653] leading-relaxed">
                نعتمد عبوات وبوكسات آمنة تحمي طعامك بالكامل وتحافظ على قرمشته ونكهته حتى باب منزلك.
              </p>
            </div>

            {/* Bento Feature 4 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#c3c6d5]/20 flex flex-col text-right hover:-translate-y-1 transition-transform duration-200">
              <div className="w-12 h-12 rounded-xl bg-[#ffdcc3] text-[#fc9430] flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[28px]">touch_app</span>
              </div>
              <h3 className="font-bold text-base text-[#011d35] mb-2">سهولة مطلقة في الطلب والمتابعة</h3>
              <p className="text-xs md:text-sm text-[#424653] leading-relaxed">
                فريق متجاوب على مدار الساعة لاستقبال طلباتكم عبر رسالة واتساب واحدة أو اتصال فوري.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Customer Testimonials Section */}
      <section className="w-full py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 text-right">
            <div>
              <span className="text-xs md:text-sm font-bold text-[#004098]">آراء أهلنا في خانقين</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#011d35] mt-1">
                ثقة زبائننا هي فخرنا الدائم
              </h2>
            </div>
            <div className="flex items-center gap-1.5 text-[#fc9430] mt-3 md:mt-0 bg-[#f8f9ff] px-4 py-2 rounded-xl border border-slate-100">
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="font-bold text-sm text-[#011d35] mr-2">4.9 / 5 تقييم عام</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((review, idx) => (
              <div
                key={idx}
                className="bg-[#f8f9ff] p-6 rounded-2xl border border-[#c3c6d5]/20 text-right flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-[#fc9430] mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                  <p className="text-xs md:text-sm text-[#424653] leading-relaxed">
                    "{review.text}"
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1557c0] text-white flex items-center justify-center font-bold text-sm">
                    {review.initial}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-[#011d35]">{review.name}</p>
                    <p className="text-xs text-[#737784]">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Location & Hours Context Strip */}
      <section className="w-full py-12 md:py-16 bg-[#eef4ff] border-t border-[#c3c6d5]/20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#c3c6d5]/20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 text-right space-y-3">
                <span className="text-xs md:text-sm font-bold text-[#fc9430]">موقعنا وخدماتنا المباشرة</span>
                <h3 className="text-xl md:text-2xl font-bold text-[#011d35]">في قلب خانقين، قريبين منك دائماً</h3>
                <p className="text-xs md:text-sm text-[#424653] leading-relaxed">
                  نستقبلكم في صالتنا الدافئة أو نوصل طلباتكم لكافة أرجاء قضاء خانقين والمناطق المجاورة بسرعة ودقة متناهية.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-xs md:text-sm text-[#011d35]">
                    <span className="material-symbols-outlined text-[#004098] text-[20px]">location_on</span>
                    <span className="font-semibold">{RESTAURANT_INFO.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs md:text-sm text-[#011d35]">
                    <span className="material-symbols-outlined text-[#fc9430] text-[20px]">schedule</span>
                    <span className="font-semibold">{RESTAURANT_INFO.hours}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs md:text-sm text-[#011d35]">
                    <span className="material-symbols-outlined text-[#004098] text-[20px]">call</span>
                    <span className="font-semibold" dir="ltr">{RESTAURANT_INFO.phone}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div 
                  className="w-full h-64 md:h-72 rounded-xl bg-cover bg-center shadow-inner relative overflow-hidden" 
                  style={{ backgroundImage: `url('${RESTAURANT_INFO.mapImageUrl}')` }}
                >
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm p-3 rounded-lg shadow text-right">
                    <span className="text-xs font-bold text-[#004098] block">نقطة انطلاق الطلبات</span>
                    <span className="text-xs text-slate-600">خانقين، ديالى - توصيل سريع لكافة الأحياء</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Final Call to Action Strip */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-l from-[#19324b] via-[#004098] to-[#19324b] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 md:px-8 text-center flex flex-col items-center relative z-10">
          <span className="px-4 py-1 rounded-full bg-[#fc9430] text-white font-bold text-xs mb-4 shadow-sm">
            {RESTAURANT_INFO.slogan}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white max-w-2xl leading-tight">
            جاهز لتجربة وجبة لا تُنسى اليوم؟
          </h2>
          <p className="text-sm md:text-base text-[#d1e4ff] max-w-xl mt-2 mb-8">
            اختر وجبتك المفضلة وسنتكفل بإعدادها طازجة وتوصيلها فوراً إلى باب دارك أينما كنت في خانقين.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center max-w-md">
            <a
              href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent('مرحباً اطلب ويانه / خانقين، أود طلب وجبة طعام')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#fc9430] hover:bg-[#914d00] text-white px-8 py-3.5 rounded-xl font-bold text-base shadow-lg transition-all duration-200 active:scale-95 flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>طلب فوري عبر واتساب</span>
            </a>
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="w-full sm:w-auto bg-white hover:bg-slate-100 text-[#004098] px-6 py-3.5 rounded-xl font-bold text-base shadow-md transition-all duration-200 active:scale-95 flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[20px]">call</span>
              <span>{RESTAURANT_INFO.phoneLocal}</span>
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-slate-300 text-xs font-semibold">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-[#fc9430]">check_circle</span>
              <span>دفع عند الاستلام</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-[#fc9430]">check_circle</span>
              <span>توصيل دقيق وسريع</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
