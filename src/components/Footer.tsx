import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { useCart } from '../context/CartContext';

export const Footer: React.FC = () => {
  const { setActiveScreen } = useCart();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#19324b] text-[#e9f1ff] py-8 border-t border-[#1557c0]/20 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex flex-col gap-6">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <img
              src={RESTAURANT_INFO.logoUrl}
              alt={RESTAURANT_INFO.name}
              className="w-10 h-10 rounded-full object-cover ring-2 ring-[#fc9430]"
            />
            <div className="flex flex-col text-right">
              <span className="text-lg font-black text-white">
                {RESTAURANT_INFO.brandName}
              </span>
              <span className="text-xs text-[#fc9430] font-semibold">
                {RESTAURANT_INFO.city} - أشهى المأكولات والتوصيل السريع
              </span>
            </div>
          </div>

          {/* Contact & Hours Info Strip */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs md:text-sm text-[#d1e4ff] text-center md:text-right">
            <a href={`tel:${RESTAURANT_INFO.phoneRaw}`} className="hover:text-white transition-colors">
              {RESTAURANT_INFO.phone}
            </a>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span>{RESTAURANT_INFO.detailedAddress}</span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span>يومياً: {RESTAURANT_INFO.openingTime} - {RESTAURANT_INFO.closingTime}</span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <a 
              href="https://instagram.com/order1us" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#fc9430] hover:underline"
            >
              order1us@
            </a>
          </div>

          {/* Quick Back to Top & Welcome Screen Trigger */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveScreen('welcome')}
              className="text-xs px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[#d1e4ff] transition-colors cursor-pointer"
            >
              الترحيب
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              title="العودة لأعلى الصفحة"
            >
              <span className="material-symbols-outlined text-[18px]">arrow_upward</span>
            </button>
          </div>
        </div>

        {/* Sub-footer Copyright */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          <span>© 2025 اطلب ويانه / خانقين. جميع الحقوق محفوظة.</span>
          <div className="flex items-center gap-4">
            <button onClick={() => { setActiveScreen('home'); scrollToTop(); }} className="hover:text-white transition-colors cursor-pointer">الرئيسية</button>
            <button onClick={() => { setActiveScreen('menu'); scrollToTop(); }} className="hover:text-white transition-colors cursor-pointer">قائمة الطعام</button>
            <button onClick={() => { setActiveScreen('services'); scrollToTop(); }} className="hover:text-white transition-colors cursor-pointer">خدماتنا</button>
            <button onClick={() => { setActiveScreen('about'); scrollToTop(); }} className="hover:text-white transition-colors cursor-pointer">من نحن</button>
            <button onClick={() => { setActiveScreen('contact'); scrollToTop(); }} className="hover:text-white transition-colors cursor-pointer">تواصل معنا</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
