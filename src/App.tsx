import React from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WelcomeScreen } from './components/WelcomeScreen';
import { HomeScreen } from './components/HomeScreen';
import { MenuScreen } from './components/MenuScreen';
import { AboutScreen } from './components/AboutScreen';
import { ServicesScreen } from './components/ServicesScreen';
import { ContactScreen } from './components/ContactScreen';
import { CartDrawer } from './components/CartDrawer';
import { DishModal } from './components/DishModal';
import { RESTAURANT_INFO } from './data/restaurantData';

const MainAppContent: React.FC = () => {
  const { activeScreen, setActiveScreen, totalItems, openCart } = useCart();

  // If the active screen is the Welcome / Splash screen, render it full screen
  if (activeScreen === 'welcome') {
    return (
      <div className="relative min-h-screen w-full font-['Cairo',sans-serif]">
        <WelcomeScreen />
        <CartDrawer />
        <DishModal />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex flex-col w-full bg-[#f8f9ff] text-[#011d35] font-['Cairo',sans-serif]">
      {/* Top Fixed Header */}
      <Header />

      {/* Main Screen Content */}
      <main className="w-full pt-20 flex-1">
        {activeScreen === 'home' && <HomeScreen />}
        {activeScreen === 'menu' && <MenuScreen />}
        {activeScreen === 'about' && <AboutScreen />}
        {activeScreen === 'services' && <ServicesScreen />}
        {activeScreen === 'contact' && <ContactScreen />}
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Global Slide-Over Cart Drawer */}
      <CartDrawer />

      {/* Global Dish Customization Modal */}
      <DishModal />

      {/* Floating Quick Action Widget (Bottom Left for RTL) */}
      <aside aria-label="أزرار الطلب السريع" className="fixed bottom-5 left-5 z-40 flex flex-col gap-2.5">
        {/* Floating Cart Trigger */}
        {totalItems > 0 && (
          <button
            onClick={openCart}
            className="flex items-center gap-2 bg-[#004098] hover:bg-[#1557c0] text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border-2 border-white"
          >
            <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
            <span className="text-xs font-bold">السلة ({totalItems})</span>
          </button>
        )}

        {/* Floating WhatsApp Contact */}
        <a
          href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent('مرحباً اطلب ويانه / خانقين، أود طلب وجبة طعام')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white"
          title="تواصل مباشر عبر واتساب"
        >
          <span className="material-symbols-outlined text-[22px]">chat</span>
          <span className="text-xs font-bold hidden sm:inline">اطلب عبر واتساب</span>
        </a>
      </aside>

      {/* Screens Quick Switcher Bar (Bottom Bar on Desktop for instant review of all 6 screens) */}
      <div className="fixed bottom-4 right-4 z-40 hidden md:flex items-center gap-1 bg-white/95 backdrop-blur-md p-1.5 rounded-2xl shadow-xl border border-slate-200 text-xs">
        <span className="px-2 text-slate-400 font-bold text-[11px]">الشاشات:</span>
        <button
          onClick={() => { setActiveScreen('welcome'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className={`px-2.5 py-1.5 rounded-xl font-bold transition-colors cursor-pointer ${
            (activeScreen as string) === 'welcome' ? 'bg-[#004098] text-white' : 'hover:bg-slate-100 text-slate-700'
          }`}
        >
          الافتتاحية
        </button>
        <button
          onClick={() => { setActiveScreen('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className={`px-2.5 py-1.5 rounded-xl font-bold transition-colors cursor-pointer ${
            activeScreen === 'home' ? 'bg-[#004098] text-white' : 'hover:bg-slate-100 text-slate-700'
          }`}
        >
          الرئيسية
        </button>
        <button
          onClick={() => { setActiveScreen('menu'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className={`px-2.5 py-1.5 rounded-xl font-bold transition-colors cursor-pointer ${
            activeScreen === 'menu' ? 'bg-[#004098] text-white' : 'hover:bg-slate-100 text-slate-700'
          }`}
        >
          قائمة الطعام
        </button>
        <button
          onClick={() => { setActiveScreen('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className={`px-2.5 py-1.5 rounded-xl font-bold transition-colors cursor-pointer ${
            activeScreen === 'services' ? 'bg-[#004098] text-white' : 'hover:bg-slate-100 text-slate-700'
          }`}
        >
          خدماتنا
        </button>
        <button
          onClick={() => { setActiveScreen('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className={`px-2.5 py-1.5 rounded-xl font-bold transition-colors cursor-pointer ${
            activeScreen === 'about' ? 'bg-[#004098] text-white' : 'hover:bg-slate-100 text-slate-700'
          }`}
        >
          من نحن
        </button>
        <button
          onClick={() => { setActiveScreen('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className={`px-2.5 py-1.5 rounded-xl font-bold transition-colors cursor-pointer ${
            activeScreen === 'contact' ? 'bg-[#004098] text-white' : 'hover:bg-slate-100 text-slate-700'
          }`}
        >
          تواصل معنا
        </button>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <MainAppContent />
    </CartProvider>
  );
}
