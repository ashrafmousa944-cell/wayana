import React, { useState, useMemo } from 'react';
import { MENU_ITEMS, RESTAURANT_INFO, MenuItem } from '../data/restaurantData';
import { useCart } from '../context/CartContext';

export const MenuScreen: React.FC = () => {
  const { addToCart, setSelectedDishForModal } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'الكل', icon: 'local_dining' },
    { id: 'shawarma', label: 'بوكسات الشاورما والعروض', icon: 'lunch_dining' },
    { id: 'grills', label: 'المشويات العراقية الفاخرة', icon: 'outdoor_grill' },
    { id: 'burgers', label: 'البرغر والسندويشات الغربية', icon: 'fastfood' },
    { id: 'pasta', label: 'الباستا والأطباق الإيطالية', icon: 'ramen_dining' },
    { id: 'platters', label: 'الصواني الخاصة والرز', icon: 'dinner_dining' },
    { id: 'sides', label: 'المقبلات والمشروبات', icon: 'tapas' },
  ];

  const filteredDishes = useMemo(() => {
    return MENU_ITEMS.filter((dish) => {
      const matchesCategory = selectedCategory === 'all' || dish.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dish.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleQuickWhatsAppOrder = (dish: MenuItem) => {
    const text = `مرحباً اطلب ويانه / خانقين، أود طلب: ${dish.name} بسعر ${dish.formattedPrice}.`;
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handlePromotionQuickOrder = () => {
    const text = `مرحباً اطلب ويانه / خانقين، أود طلب عرض الجمعة والمباريات: بوكس شاورما 18 قطعة مع مشروب وبطاطا بـ 10,000 د.ع فقط!`;
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="flex flex-col w-full bg-[#f8f9ff] text-[#011d35]">
      {/* 1. Header & Search Bar */}
      <section className="relative bg-[#eef4ff] py-12 md:py-16 overflow-hidden border-b border-[#c3c6d5]/20">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#fc9430]/10 blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[#004098]/5 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-2 text-right max-w-2xl">
              <div className="inline-flex items-center gap-1.5 w-fit bg-[#fc9430]/15 text-[#914d00] px-3.5 py-1.5 rounded-full">
                <span className="material-symbols-outlined text-[18px]">restaurant_menu</span>
                <span className="text-xs md:text-sm font-bold">قائمة طعام طازجة يومياً</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#011d35] tracking-tight">
                قائمة طعام <span className="text-[#004098]">{RESTAURANT_INFO.brandName}</span>
              </h1>
              <p className="text-sm md:text-base text-[#424653] leading-relaxed">
                نقدم لكم تشكيلة مختارة من أشهى المأكولات المحضرة بكل شغف وعناية لتناسب كل الأذواق في خانقين وضواحيها. تجربة مذاق عراقي وغربي أصيل تبدأ من هنا.
              </p>
            </div>

            {/* Live Status Pill & Search Input */}
            <div className="flex flex-col gap-3 w-full md:w-80">
              <div className="flex items-center justify-between bg-white px-4 py-2.5 rounded-xl shadow-sm border border-[#c3c6d5]/30">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs md:text-sm text-[#011d35] font-bold">المطبخ يستقبل طلباتكم الآن</span>
                </div>
                <span className="text-xs text-[#914d00] font-bold">11 ص - 12 م</span>
              </div>

              {/* Search Bar */}
              <div className="relative w-full">
                <span className="material-symbols-outlined absolute right-3.5 top-1/2 -translate-y-1/2 text-[#737784] text-[20px]">
                  search
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="ابحث عن وجبة، كباب، برغر، صينية..."
                  className="w-full bg-white text-[#011d35] text-sm pr-11 pl-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004098] shadow-sm border border-[#c3c6d5]/30 placeholder:text-slate-400"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                  >
                    <span className="material-symbols-outlined text-[18px]">cancel</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Categories Filter Tabs (Horizontal Scrollable) */}
          <div className="mt-8 pt-2 flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`whitespace-nowrap px-4 py-2.5 rounded-full font-bold text-xs md:text-sm transition-all duration-200 active:scale-95 flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-[#004098] text-white shadow-md'
                      : 'bg-white text-[#424653] hover:text-[#011d35] hover:bg-[#e4efff] border border-[#c3c6d5]/30'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Highlight Promotion Strip (Matches Design) */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 w-full -mt-5 relative z-20">
        <div className="bg-gradient-to-l from-[#004098] to-[#1557c0] text-white rounded-2xl p-5 md:p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4 border border-white/10">
          <div className="flex items-center gap-4 text-right">
            <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[#fc9430] text-3xl">celebration</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-[#fc9430] text-white text-xs px-2.5 py-0.5 rounded-full font-bold">
                  عرض الجمعة والمباريات
                </span>
                <span className="text-xs text-[#ffdcc3] font-semibold">{RESTAURANT_INFO.name}</span>
              </div>
              <h2 className="text-base md:text-xl font-bold">
                بوكس شاورما عائلي 18 قطعة مع مشروب وبطاطا بـ 10,000 د.ع فقط!
              </h2>
              <p className="text-xs md:text-sm text-[#d1e4ff] mt-0.5 opacity-90">
                وجبة مشبعة تكفي العائلة والأصدقاء مع التوصيل السريع الحار لحد باب البيت.
              </p>
            </div>
          </div>
          <button
            onClick={handlePromotionQuickOrder}
            className="shrink-0 bg-[#fc9430] hover:bg-[#914d00] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg transition-transform active:scale-95 flex items-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
            <span>اطلب العرض المباشر</span>
          </button>
        </div>
      </section>

      {/* 3. Dishes Grid Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 w-full">
        {/* Empty State */}
        {filteredDishes.length === 0 && (
          <div className="py-16 text-center flex flex-col items-center justify-center">
            <span className="material-symbols-outlined text-slate-300 text-6xl">search_off</span>
            <h3 className="text-xl font-bold text-[#011d35] mt-4">لم نجد وجبات مطابقة لبحثك</h3>
            <p className="text-sm text-[#737784] mt-1">جرّب البحث باسم آخر أو اختر أحد تصنيفات المنيو أعلاه.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 rounded-lg bg-[#004098] text-white text-xs font-bold cursor-pointer"
            >
              عرض كل الأطباق
            </button>
          </div>
        )}

        {/* Dishes Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDishes.map((dish) => (
            <article
              key={dish.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group border border-[#c3c6d5]/20"
            >
              <div
                onClick={() => setSelectedDishForModal(dish)}
                className="relative w-full h-56 overflow-hidden bg-slate-100 cursor-pointer"
              >
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={dish.altText}
                  src={dish.image}
                />
                {dish.badge && (
                  <div className="absolute top-3 right-3 flex flex-col gap-1 items-end">
                    <span className={`${dish.badgeColor || 'bg-[#fc9430]'} text-white text-xs px-3 py-1 rounded-full font-bold shadow-md`}>
                      {dish.badge}
                    </span>
                  </div>
                )}
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-lg text-[#004098] font-black text-base shadow-sm">
                  {dish.formattedPrice}
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1 justify-between gap-4">
                <div className="flex flex-col text-right gap-1.5">
                  <h3
                    onClick={() => setSelectedDishForModal(dish)}
                    className="font-bold text-base md:text-lg text-[#011d35] hover:text-[#004098] transition-colors cursor-pointer"
                  >
                    {dish.name}
                  </h3>
                  <p className="text-xs md:text-sm text-[#424653] leading-relaxed line-clamp-2">
                    {dish.description}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between bg-[#f8f9ff] p-3 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-1.5 text-[#914d00] font-bold text-xs">
                    <span className="material-symbols-outlined text-[18px]">
                      {dish.servings ? 'group' : 'verified'}
                    </span>
                    <span>{dish.servings || dish.highlightTag}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => addToCart(dish, 1)}
                      className="bg-[#004098] hover:bg-[#1557c0] text-white px-3.5 py-2 rounded-lg font-bold text-xs flex items-center gap-1.5 transition-colors active:scale-95 shadow-sm cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[16px]">add_shopping_cart</span>
                      <span>أضف للسلة</span>
                    </button>
                    <button
                      onClick={() => handleQuickWhatsAppOrder(dish)}
                      className="p-2 bg-[#ffdcc3] hover:bg-[#fc9430] text-[#914d00] hover:text-white rounded-lg transition-colors cursor-pointer"
                      title="طلب سريع عبر واتساب"
                    >
                      <span className="material-symbols-outlined text-[16px]">send</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. Bottom Assurance Strip (Matching Design) */}
      <section className="bg-[#eef4ff] py-12 border-t border-[#c3c6d5]/20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#c3c6d5]/20 flex items-start gap-3.5 text-right">
              <div className="w-12 h-12 rounded-xl bg-[#ffdcc3] text-[#fc9430] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-2xl">moped</span>
              </div>
              <div className="flex flex-col">
                <h4 className="font-bold text-base text-[#011d35]">توصيل سريع لكل خانقين</h4>
                <p className="text-xs text-[#424653] mt-1 leading-relaxed">
                  نغطي كافة أحياء وقرى خانقين (المزرعة، المعلمين، كوتة، بانميل، وباقي المناطق).
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#c3c6d5]/20 flex items-start gap-3.5 text-right">
              <div className="w-12 h-12 rounded-xl bg-[#dbe9ff] text-[#004098] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-2xl">format_image_left</span>
              </div>
              <div className="flex flex-col">
                <h4 className="font-bold text-base text-[#011d35]">تغليف محكم وساخن</h4>
                <p className="text-xs text-[#424653] mt-1 leading-relaxed">
                  تصلكم الوجبات مغلفة في بوكسات حرارية معقمة ومحكمة الإغلاق لضمان الجودة.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#c3c6d5]/20 flex items-start gap-3.5 text-right">
              <div className="w-12 h-12 rounded-xl bg-[#ffdcc3] text-[#fc9430] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-2xl">chat</span>
              </div>
              <div className="flex flex-col">
                <h4 className="font-bold text-base text-[#011d35]">طلب فوري عبر الواتساب</h4>
                <p className="text-xs text-[#424653] mt-1 leading-relaxed">
                  تأكيد مباشر دون تعقيد بنقرة زر واحدة أو بمكالمة هاتفية مع الكابتن.
                </p>
              </div>
            </div>
          </div>

          {/* Catering Callout Strip */}
          <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm border border-[#c3c6d5]/20 flex flex-col lg:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-4 text-right">
              <div className="w-12 h-12 rounded-2xl bg-[#914d00] text-white flex items-center justify-center shrink-0 shadow-md">
                <span className="material-symbols-outlined text-2xl">call</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base text-[#011d35]">هل تود تخصيص وجبة خاصة لعزيمة أو مناسبة؟</span>
                <span className="text-xs md:text-sm text-[#424653]">
                  اتصل بكادر مطبخ اطلب ويانه وسنقوم بإعداد صواني العزائم حسب رغبتكم بالكامل
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full lg:w-auto">
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent('مرحباً اطلب ويانه، أود الاستفسار عن حجز وتجهيز صواني عزومة عائلية')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 lg:flex-initial text-center bg-[#fc9430] hover:bg-[#914d00] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">send</span>
                <span>واتساب المطبخ: {RESTAURANT_INFO.phoneLocal}</span>
              </a>
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="p-3 bg-[#e4efff] hover:bg-[#d1e4ff] rounded-xl text-[#004098] transition-colors flex items-center justify-center"
                title="اتصال هاتفي مباشر"
              >
                <span className="material-symbols-outlined text-[22px]">phone_in_talk</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
