import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Header: React.FC = () => {
  const { activeScreen, setActiveScreen, totalItems, openCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'الرئيسية' },
    { id: 'menu', label: 'قائمة الطعام' },
    { id: 'about', label: 'من نحن' },
    { id: 'services', label: 'خدماتنا' },
    { id: 'contact', label: 'تواصل معنا' },
  ] as const;

  const handleNavClick = (screenId: typeof navItems[number]['id']) => {
    setActiveScreen(screenId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#ffffff]/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#c3c6d5]/20">
      <div className="h-20 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Zone */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="relative">
            <img 
              src={RESTAURANT_INFO.logoUrl} 
              alt={RESTAURANT_INFO.name}
              className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover ring-2 ring-[#004098]/20 group-hover:scale-105 transition-transform" 
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white"></span>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-lg md:text-xl font-extrabold text-[#004098] tracking-tight group-hover:text-[#1557c0] transition-colors">
              {RESTAURANT_INFO.brandName}
            </span>
            <span className="text-xs text-[#914d00] font-bold">
              {RESTAURANT_INFO.city}
            </span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-[#f8f9ff] p-1.5 rounded-xl border border-[#c3c6d5]/30">
          {navItems.map((item) => {
            const isActive = activeScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-lg font-bold text-sm transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#1557c0] text-white shadow-sm'
                    : 'text-[#424653] hover:text-[#011d35] hover:bg-[#e4efff]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls & Mobile Toggles */}
        <div className="flex items-center gap-2.5">
          {/* Welcome Screen Switcher Button */}
          <button
            onClick={() => setActiveScreen('welcome')}
            title="شاشة الترحيب الافتتاحية"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#e4efff] hover:bg-[#d1e4ff] text-[#004098] text-xs font-bold transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">wb_sunny</span>
            <span>الافتتاحية</span>
          </button>

          {/* Cart Trigger Button */}
          <button
            onClick={openCart}
            className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-[#e4efff] hover:bg-[#d1e4ff] text-[#004098] transition-colors cursor-pointer"
            aria-label="سلة الطلبات"
          >
            <span className="material-symbols-outlined text-[22px]">shopping_bag</span>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#fc9430] text-white text-xs font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm animate-pulse">
                {totalItems}
              </span>
            )}
          </button>

          {/* Primary CTA (Order Now) */}
          <a
            href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent('مرحباً اطلب ويانه / خانقين، أود الاستفسار والطلب')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#fc9430] hover:bg-[#914d00] text-white font-bold text-sm px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 active:scale-95 whitespace-nowrap"
          >
            <span className="material-symbols-outlined text-[18px]">send</span>
            <span>اطلب الآن</span>
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-[#f8f9ff] text-[#011d35] hover:bg-[#e4efff] border border-[#c3c6d5]/30 cursor-pointer"
            aria-label="القائمة الرئيسية"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#c3c6d5]/20 px-4 py-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const isActive = activeScreen === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl font-bold text-base transition-colors ${
                    isActive
                      ? 'bg-[#1557c0] text-white'
                      : 'text-[#424653] hover:bg-[#f8f9ff]'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="material-symbols-outlined text-[20px]">
                    chevron_left
                  </span>
                </button>
              );
            })}
            <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
              <button
                onClick={() => {
                  setActiveScreen('welcome');
                  setMobileMenuOpen(false);
                }}
                className="flex-1 py-2.5 px-3 rounded-lg bg-[#e4efff] text-[#004098] font-bold text-sm flex items-center justify-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[18px]">wb_sunny</span>
                <span>شاشة الافتتاحية</span>
              </button>
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-lg bg-[#fc9430] text-white font-bold text-sm flex items-center justify-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[18px]">send</span>
                <span>واتساب مباشر</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
