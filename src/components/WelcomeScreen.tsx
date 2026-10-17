import React from 'react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const WelcomeScreen: React.FC = () => {
  const { setActiveScreen } = useCart();

  const handleEnter = () => {
    setActiveScreen('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main
      className="relative min-h-screen w-full luxury-radial-bg flex items-center justify-center p-4 overflow-hidden select-none"
      data-purpose="full-screen-welcome"
    >
      {/* Background Hospitality Pattern Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pattern-overlay pointer-events-none"
      ></div>

      {/* Atmospheric Ambient Rings */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#f28c28]/10 blur-3xl pointer-events-none"
      ></div>
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#1557c0]/10 blur-3xl pointer-events-none"
      ></div>

      {/* Skip / Enter discreet button at top corner */}
      <div className="absolute top-6 left-6 z-20">
        <button
          onClick={handleEnter}
          className="px-4 py-2 rounded-full bg-white/80 hover:bg-white text-slate-700 text-xs font-bold shadow-sm transition-all duration-200 border border-slate-200 flex items-center gap-1.5 cursor-pointer backdrop-blur-sm"
        >
          <span>تخطي إلى الموقع</span>
          <span className="material-symbols-outlined text-[16px]">arrow_back</span>
        </button>
      </div>

      {/* Main Central Interactive Card / Hero Container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-xl w-full mx-auto animate-float py-8">
        {/* Logo Presentation Wrapper with Luminous Halo */}
        <div
          className="relative flex items-center justify-center mb-6 sm:mb-8"
          data-purpose="logo-container"
        >
          {/* Animated Halo Glow */}
          <div
            aria-hidden="true"
            className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-[#f28c28]/20 to-[#1557c0]/20 blur-2xl animate-subtle-pulse pointer-events-none"
          ></div>

          {/* Authentic Restaurant Circular Logo */}
          <div className="relative z-10 p-2 sm:p-3 bg-white/95 rounded-full logo-halo transition-transform duration-500 hover:scale-105 border border-white/80 shadow-2xl backdrop-blur-sm">
            <img
              alt="شعار اطلب ويانه - خانقين"
              className="w-[220px] h-[220px] sm:w-[270px] sm:h-[270px] md:w-[300px] md:h-[300px] object-contain rounded-full drop-shadow-md"
              loading="eager"
              src={RESTAURANT_INFO.logoUrl}
            />
          </div>
        </div>

        {/* Restaurant Brand Identity Typography */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1557c0] tracking-tight drop-shadow-sm mb-2"
          data-purpose="brand-title"
        >
          {RESTAURANT_INFO.name}
        </h1>

        {/* Brand Slogan */}
        <p
          className="text-lg sm:text-xl md:text-2xl font-bold text-[#f28c28] mb-8 tracking-wide drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)]"
          data-purpose="brand-slogan"
        >
          {RESTAURANT_INFO.slogan}
        </p>

        {/* Primary Action Entrance Button */}
        <div className="w-full flex flex-col items-center gap-4" data-purpose="entry-action-wrapper">
          <button
            onClick={handleEnter}
            aria-label="للاستمتاع اضغط هنا للدخول"
            className="group relative inline-flex items-center justify-center gap-3.5 px-8 sm:px-11 py-4 sm:py-4.5 bg-[#f28c28] hover:bg-[#1557c0] text-white text-lg sm:text-xl font-extrabold rounded-full shadow-[0_12px_28px_rgba(242,140,40,0.4)] hover:shadow-[0_16px_36px_rgba(21,87,192,0.45)] transform active:scale-95 hover:-translate-y-1 transition-all duration-300 ease-out border-2 border-white/60 focus:outline-none focus:ring-4 focus:ring-[#1557c0]/30 cursor-pointer"
          >
            {/* Cutlery Icon */}
            <span className="material-symbols-outlined text-[26px] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
              restaurant
            </span>

            {/* Button Text */}
            <span className="tracking-normal font-bold">للاستمتاع اضغط هنا</span>

            {/* Forward Direction Arrow for Arabic Flow (Pointing Left in RTL) */}
            <span className="material-symbols-outlined text-[22px] transition-transform duration-300 group-hover:-translate-x-1.5">
              chevron_left
            </span>
          </button>

          {/* Quick Sub-Links */}
          <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-600 font-semibold mt-2">
            <button
              onClick={() => { setActiveScreen('menu'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-[#1557c0] hover:underline cursor-pointer flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[16px]">menu_book</span>
              <span>قائمة الطعام الكاملة</span>
            </button>
            <span className="text-slate-300">•</span>
            <a
              href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent('مرحباً اطلب ويانه / خانقين، أود طلب وجبة طازجة')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#914d00] hover:text-[#fc9430] hover:underline flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[16px]">chat</span>
              <span>طلب مباشر عبر واتساب</span>
            </a>
          </div>
        </div>

        {/* Small Trust Badge */}
        <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center justify-center gap-2 text-xs text-slate-500">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>المطبخ والكباتن في خانقين جاهزون لخدمتكم يومياً حتى منتصف الليل</span>
        </div>
      </div>
    </main>
  );
};
