import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { useCart } from '../context/CartContext';

export const AboutScreen: React.FC = () => {
  const { setActiveScreen } = useCart();

  return (
    <div className="flex flex-col w-full bg-[#f8f9ff] text-[#011d35]">
      {/* 1. Story Hero & Editorial Intro */}
      <section className="relative w-full px-4 md:px-8 lg:px-12 py-12 lg:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Story Content Column */}
          <div className="lg:col-span-7 flex flex-col gap-4 text-right relative z-10">
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#e4efff] text-[#914d00] font-bold text-xs md:text-sm">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span>حكاية المذاق الخانقيني الأصيل</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#011d35] leading-tight tracking-tight">
              قصتنا في خانقين.. <br />
              <span className="text-[#004098]">شغف بالطعام</span> وجودة نفتخر بها
            </h1>

            <p className="text-base sm:text-lg text-[#424653] max-w-2xl leading-relaxed">
              انطلق مشروع <strong className="text-[#011d35] font-bold">«اطلب ويانه»</strong> في قلب مدينة خانقين العريقة بهدف إعادة تعريف متعة الأكل اليومي، موازنين بين عراقة المذاق العراقي وكرم ضيافته وسرعة الوجبات المعاصرة المحضرة بعناية ودقة متناهية.
            </p>

            {/* Brand Motto Quote Box */}
            <div className="relative bg-white p-5 rounded-xl shadow-md border border-[#c3c6d5]/30 flex items-start gap-4 my-2">
              <div className="w-11 h-11 rounded-full bg-[#ffdcc3] flex items-center justify-center shrink-0 text-[#914d00]">
                <span className="material-symbols-outlined text-2xl">format_quote</span>
              </div>
              <div className="flex flex-col text-right">
                <span className="text-lg font-extrabold text-[#004098]">
                  "{RESTAURANT_INFO.slogan}"
                </span>
                <span className="text-xs md:text-sm text-[#424653] mt-1">
                  ليس مجرد شعار نرفعه، بل هو عهد يومي نحققه في كل ساندويش، صينية شاورما، وبوكس عائلي يخرج من مطبخنا.
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent('مرحباً اطلب ويانه / خانقين، أود التحدث مع كادر المطعم')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-[#1557c0] hover:bg-[#004098] text-white font-bold text-sm transition-all duration-200 shadow-sm active:scale-95 flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span>تواصل مع كادرنا</span>
              </a>
              <a
                href="#values"
                className="px-6 py-3 rounded-xl bg-[#e4efff] hover:bg-[#d1e4ff] text-[#011d35] font-bold text-sm transition-all duration-200"
              >
                اكتشف أسرار الجودة
              </a>
            </div>
          </div>

          {/* Editorial Image Composition */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-xl bg-slate-100 border border-slate-200">
              <img
                className="w-full h-full object-cover"
                alt="كادر مطبخ اطلب ويانه في خانقين"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBV7S8TrtM7FP_Q6I-2lt3MitqgFRZPgAg4K-uYXEHyXadsk_1a_h7bkjuqgq57tCenLZXoE9BHIbmzDhLAE49Ohe61JeGBOh9LqWVA9zSnqOMLz8ZObdWe9NnbJDOMw73tqoO6p3M8BUKPk1uvYhaytc3xjU6GyH3QNwPqWTKa8ccRKh14PTGjSvaecd8yPTbykOEV8CC_qCg6Ct5IVAeQfI-2WeJTi8tKjLKl6hMalOHID9sIOCUs"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-[#ffdcc3]">مطبخ خانقين</span>
                <span className="text-lg font-bold">حب وطبخ بأيدي أبناء المدينة</span>
              </div>
            </div>

            {/* Floating Badge Card */}
            <div className="absolute -bottom-5 -right-4 bg-white p-3.5 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg bg-[#914d00] flex items-center justify-center text-white shrink-0">
                <span className="material-symbols-outlined text-2xl">restaurant</span>
              </div>
              <div className="flex flex-col text-right">
                <span className="text-sm font-bold text-[#011d35]">طازج يومياً</span>
                <span className="text-xs text-[#737784]">لحوم بلدية 100%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Metrics Banner */}
      <section className="w-full bg-[#eef4ff] py-12 border-y border-[#c3c6d5]/20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-5 bg-white rounded-2xl shadow-sm border border-[#c3c6d5]/20 flex flex-col items-center text-center">
              <span className="text-2xl sm:text-3xl font-black text-[#004098]">+10,000</span>
              <span className="text-sm font-bold text-[#011d35] mt-1">متابع ومحب</span>
              <span className="text-xs text-[#737784] mt-0.5">مجتمعنا الوفي في خانقين</span>
            </div>

            <div className="p-5 bg-white rounded-2xl shadow-sm border border-[#c3c6d5]/20 flex flex-col items-center text-center">
              <span className="text-2xl sm:text-3xl font-black text-[#fc9430]">100%</span>
              <span className="text-sm font-bold text-[#011d35] mt-1">تغطية خانقين</span>
              <span className="text-xs text-[#737784] mt-0.5">توصيل لكل أزقة ومناطق المدينة</span>
            </div>

            <div className="p-5 bg-white rounded-2xl shadow-sm border border-[#c3c6d5]/20 flex flex-col items-center text-center">
              <span className="text-2xl sm:text-3xl font-black text-[#004098]">+50,000</span>
              <span className="text-sm font-bold text-[#011d35] mt-1">وجبة شهية سلمت</span>
              <span className="text-xs text-[#737784] mt-0.5">بحب وعناية مستمرة</span>
            </div>

            <div className="p-5 bg-white rounded-2xl shadow-sm border border-[#c3c6d5]/20 flex flex-col items-center text-center">
              <span className="text-2xl sm:text-3xl font-black text-[#fc9430]">20</span>
              <span className="text-sm font-bold text-[#011d35] mt-1">دقيقة متوسط التوصيل</span>
              <span className="text-xs text-[#737784] mt-0.5">وجبتك حارة ومقرمشة</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values & Principles Section */}
      <section className="w-full px-4 md:px-8 lg:px-12 py-16 md:py-20" id="values">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-1 text-right">
              <span className="text-xs md:text-sm text-[#fc9430] font-bold">ركائزنا ومعاييرنا</span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#011d35]">ما الذي يجعل طعامنا استثنائياً؟</h2>
            </div>
            <p className="text-xs md:text-sm text-[#424653] max-w-md text-right leading-relaxed">
              لا نؤمن بالحلول الوسط حين يتعلق الأمر بوجبة عائلتك. نضع أرقى معايير النظافة، المكونات، وسرعة الخدمة أولاً وقبل كل شيء.
            </p>
          </div>

          {/* Bento-style Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Value 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#c3c6d5]/20 hover:shadow-md transition-shadow flex flex-col justify-between h-full text-right">
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#e4efff] flex items-center justify-center text-[#004098]">
                  <span className="material-symbols-outlined text-2xl">local_florist</span>
                </div>
                <h3 className="text-base md:text-lg font-bold text-[#011d35]">مكونات محلية طازجة</h3>
                <p className="text-xs md:text-sm text-[#424653] leading-relaxed">
                  نختار اللحوم العراقية والدواجن والخضروات يومياً من أسواق خانقين المحلية بعناية تامة دون أي تجميد مسبق.
                </p>
              </div>
              <div className="pt-4 mt-4 bg-[#eef4ff] px-3.5 py-2 rounded-lg text-right">
                <span className="text-xs text-[#004098] font-bold">تجهيز يومي على مدار الساعة</span>
              </div>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#c3c6d5]/20 hover:shadow-md transition-shadow flex flex-col justify-between h-full text-right">
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#ffdcc3] flex items-center justify-center text-[#914d00]">
                  <span className="material-symbols-outlined text-2xl">sanitizer</span>
                </div>
                <h3 className="text-base md:text-lg font-bold text-[#011d35]">نظافة وتعقيم صارم</h3>
                <p className="text-xs md:text-sm text-[#424653] leading-relaxed">
                  بيئة عملنا تخضع لبروتوكولات نظافة قياسية، من ارتداء القفازات إلى التعقيم الدوري لأسطح التحضير والطهي.
                </p>
              </div>
              <div className="pt-4 mt-4 bg-[#eef4ff] px-3.5 py-2 rounded-lg text-right">
                <span className="text-xs text-[#914d00] font-bold">سلامة غذائية بدون تهاون</span>
              </div>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#c3c6d5]/20 hover:shadow-md transition-shadow flex flex-col justify-between h-full text-right">
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#e4efff] flex items-center justify-center text-[#004098]">
                  <span className="material-symbols-outlined text-2xl">inventory_2</span>
                </div>
                <h3 className="text-base md:text-lg font-bold text-[#011d35]">تغليف عازل وفاخر</h3>
                <p className="text-xs md:text-sm text-[#424653] leading-relaxed">
                  نبتكر علباً وبوكسات محكمة الإغلاق تحفظ حرارة المشاوي وقرمشة الساندويش لكي تصل مائدتكم وكأنها خرجت للتو من الشواية.
                </p>
              </div>
              <div className="pt-4 mt-4 bg-[#eef4ff] px-3.5 py-2 rounded-lg text-right">
                <span className="text-xs text-[#004098] font-bold">بوكسات حرارية مخصصة</span>
              </div>
            </div>

            {/* Value 4 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#c3c6d5]/20 hover:shadow-md transition-shadow flex flex-col justify-between h-full text-right">
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#ffdcc3] flex items-center justify-center text-[#914d00]">
                  <span className="material-symbols-outlined text-2xl">volunteer_activism</span>
                </div>
                <h3 className="text-base md:text-lg font-bold text-[#011d35]">كرم الضيافة والاهتمام</h3>
                <p className="text-xs md:text-sm text-[#424653] leading-relaxed">
                  فريقنا يتعامل مع كل زبون كفرد من العائلة؛ رحابة الصدر وسرعة الاستجابة هي سر محبتكم وثقتكم المتواصلة.
                </p>
              </div>
              <div className="pt-4 mt-4 bg-[#eef4ff] px-3.5 py-2 rounded-lg text-right">
                <span className="text-xs text-[#914d00] font-bold">خدمة عملاء ودودة وفورية</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Behind the Scenes Mosaic Gallery */}
      <section className="w-full bg-white py-16 md:py-20 border-y border-[#c3c6d5]/20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex flex-col gap-10">
          <div className="flex flex-col gap-1.5 text-right max-w-xl">
            <span className="text-xs md:text-sm text-[#004098] font-bold">كواليس العمل في مطبخنا</span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#011d35]">لحظات الشغف.. من الشواية إلى منزلك</h2>
            <p className="text-xs md:text-sm text-[#424653]">
              نظرة حية على تحضيراتنا اليومية، تتبيل اللحوم، وتجهيز الطلبيات بدقة وأمان.
            </p>
          </div>

          {/* Mosaic Grid (Exact 6 Photos from Brief) */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Card 1: Family Shawarma (Span 2) */}
            <div className="md:col-span-2 lg:col-span-2 relative group overflow-hidden rounded-2xl h-72 md:h-80 shadow-md">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="بوكسات الشاورما العائلية"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBg3eqy07mYv0uf-g2CAiCjX6aGDn1ctbBIk0ny8SMYJfcj4oXAlsRTc6GufKSygeIF7LTf8gbKWN4vadTz9GFZMy6Isc7ZiF-Bd8t_AwiG7yF8X-SUYkWcDbZOp578KExJmiDCoeSyNh_YHoMCAR8biThm6o_lNb8gsh2-dgKAZNEd0X5fgE3K5kj_jCnU2j9AVjnchNEchZFkPn6EUAuGGdwxh4mw-Pm5tc7wPZCCJBHJoESNek9P"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/20 to-transparent p-4 flex flex-col justify-end text-white text-right">
                <span className="text-xs font-bold text-[#ffdcc3]">بوكسات الشاورما العائلية</span>
                <span className="text-base md:text-lg font-bold">وجبة اللمة والجمعات في خانقين</span>
              </div>
            </div>

            {/* Card 2: Charcoal Grills */}
            <div className="relative group overflow-hidden rounded-2xl h-72 md:h-80 shadow-md">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="مشاوي على الفحم"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd_BPvxNb8SMRrzdXXb5qtneFOCq77jk8iWDzZVrfH8JnZPQ2nNNRUlAlG9v5c8_OgARVyPiKNyZob-FBJwvBlHNNBndv_qYNLyVYbkVXEjqamtY_TOcEefizQPuwvjmqLOks9Znfl4-6NtgSjfrg1u6KKGYesiKu5wSxQ-IWl4iVf_IBg0sX-RP6IMUTYM7zSIKRbeug-td-owQ1RuXVlwKToKJfTth0Oubye9vL870gHVNLSNgM9"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-transparent to-transparent p-4 flex flex-col justify-end text-white text-right">
                <span className="text-xs font-bold text-[#ffdcc3]">مشاوي على الفحم</span>
                <span className="text-base font-bold">نكهة الحطب والتتبيلة الخاصة</span>
              </div>
            </div>

            {/* Card 3: Gourmet Burger */}
            <div className="relative group overflow-hidden rounded-2xl h-72 md:h-80 shadow-md">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="برغر اطلب ويانه"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAs09dvDaMUr3MoTQ5MnAv2cW-8KbZPSoUXTG0a6L7gzui0Nyt3Ns0Q4MWMlQmlEwn2JLNYYcXrETIEL7TRJ3CitZ28aGhjnjxRtFuRRwGCGcdidmLYMit9m7cN81dyErWArwusw5NHzfj7SVjp9HlCQiyarju6wFf1az3-yfHBoQfIrR1Hg9SF2bBiNFUeQ_VQ4i4214aEwex762yLTAqS_sKcB5UQSFevWSc1LWeVLJnr7u2DnFhg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-transparent to-transparent p-4 flex flex-col justify-end text-white text-right">
                <span className="text-xs font-bold text-[#ffdcc3]">برغر اطلب ويانه</span>
                <span className="text-base font-bold">طراوة اللحم والجبن الذائب</span>
              </div>
            </div>

            {/* Card 4: Baked Pasta */}
            <div className="relative group overflow-hidden rounded-2xl h-72 shadow-md">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="معكرونة وباستا ساخنة"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfTjO3gQMkqLZzHSqgvzXU_rWU5TozdG8moDs9PslI6sb2-0_9inv8wmxF4hjopPjoqwVWvD-OOlk6GGCKvRWcNyfVxdDuQdvhOTG_Vlek2C8ePUi1GEZaErNoQZZZ33eIJhwfNdAKB0nzZrpnBAdVhv1IL93bibxiXAiQpE5JfwFBnXACOfmqWWDVbV0YBkZqLoo2XOkCuCXzXkCO8amsSlsJBJce3KkGkCS9nV8BASeoI3ONXgE-"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-transparent to-transparent p-4 flex flex-col justify-end text-white text-right">
                <span className="text-xs font-bold text-[#ffdcc3]">معكرونة وباستا ساخنة</span>
                <span className="text-base font-bold">أطباق إيطالية بلمسة عراقية</span>
              </div>
            </div>

            {/* Card 5: Delivery Rider */}
            <div className="relative group overflow-hidden rounded-2xl h-72 shadow-md">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="كابتن التوصيل في خانقين"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuClE2csvr9WhECxpgzc5xRC0hXHAImFsEO_ivR-Q-pQYf-Po7nlx4PrNnl6uve6cUGCBPbBsM5epr_ka9iJ4OCCQBZC25n_3qYUige9ewn5wwCyljIBYg9H1akgW_Z4SJlaDovn-ucjvLgye3bTjdP-bIyeyaD2Fo7ttlrYel1iTj9v__QUBoJW903eIBwa225zmbBTQqvs53l6SLMuJzxsun3BrGl4sBPoIUag9yHD8fHzS5tNpxFz"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-transparent to-transparent p-4 flex flex-col justify-end text-white text-right">
                <span className="text-xs font-bold text-[#ffdcc3]">كابتن التوصيل</span>
                <span className="text-base font-bold">سرعة وأمان حتى باب بيتك</span>
              </div>
            </div>

            {/* Card 6: Hospitality Feast (Span 2) */}
            <div className="md:col-span-2 lg:col-span-2 relative group overflow-hidden rounded-2xl h-72 shadow-md">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="ضيافة خانقينية متكاملة"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7dghN4kvdRtImgJBbrvGIVH1QsgzWgPcpayt_WPnlw1Psb7zQIXS4OdcS73_9Cqr8wK4R5KhrJE2Mh9Zzf5__mm7LfW0W7-oAcRNzrcFR8SMAn6x_m4tKT40_trF4saGx26GRo6YJncESi5ayWPqhlk2IsxGamx-RjOryKu9b9mGwu02snGAaBjOSzf7HSG_jTGS7iE11vgrq6AcMK6WsP84rMk6K0eJA4roZwu1GNIBf1oubMcsW"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/20 to-transparent p-4 flex flex-col justify-end text-white text-right">
                <span className="text-xs font-bold text-[#ffdcc3]">ضيافة خانقينية</span>
                <span className="text-base md:text-lg font-bold">جاهزون لكافة العزائم والمناسبات</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Khanaqin Pride & Map Section */}
      <section className="w-full px-4 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="max-w-7xl mx-auto bg-[#eef4ff] rounded-2xl p-6 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 border border-[#c3c6d5]/20">
          <div className="flex flex-col gap-3 text-right lg:w-1/2">
            <span className="text-xs md:text-sm font-bold text-[#004098]">فخر الانتماء</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#011d35]">
              من أزقة خانقين.. وإلى كل أهلها
            </h2>
            <p className="text-sm md:text-base text-[#424653] leading-relaxed">
              نحن لا نرى عملنا كخدمة تجارية وحسب، بل كجزء من نسيج هذه المدينة الجميلة وأهلها الكرام. مشاركتنا لمباريات كرة القدم، احتفالات المناسبات الوطنية، وعروضنا المستمرة هي طريقتنا الخاصة لنقول شكراً لخانقين.
            </p>
            <div className="flex flex-col gap-2 mt-2 text-[#011d35] text-xs md:text-sm">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#fc9430] text-[20px]">location_on</span>
                <span className="font-semibold">{RESTAURANT_INFO.detailedAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#004098] text-[20px]">schedule</span>
                <span className="text-[#424653]">{RESTAURANT_INFO.hours}</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-2">
            <div className="rounded-xl overflow-hidden shadow-md h-64 md:h-72 w-full relative">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${RESTAURANT_INFO.mapImageUrl}')` }}
              ></div>
              <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-4 py-2 rounded-lg shadow-sm text-[#011d35] text-right">
                <span className="text-xs font-bold text-[#004098] block">مناطق التغطية المباشرة:</span>
                <p className="text-xs text-[#424653]">حي المعلمين، باوة محمود، المزرعة، وحي الشهداء وكافة أطراف خانقين</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Call to Action Banner */}
      <section className="w-full bg-[#004098] text-white py-12 px-4 md:px-8 lg:px-12 mb-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-right">
          <div className="flex flex-col gap-1.5">
            <h3 className="text-2xl sm:text-3xl font-black">جاهز تتذوق الفرق؟</h3>
            <p className="text-xs md:text-sm text-[#d1e4ff] max-w-xl">
              أشهى وجبات الشاورما، المشاوي، البرغر، والباستا بانتظارك. بنقرة واحدة طلبك ينطلق لك حار وطازج.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => {
                setActiveScreen('menu');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-[#fc9430] hover:bg-[#914d00] text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-md transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
              <span>اطلب وجبتك الآن</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
