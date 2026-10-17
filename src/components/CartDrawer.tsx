import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_INFO, KHANAQIN_AREAS } from '../data/restaurantData';

export const CartDrawer: React.FC = () => {
  const {
    items,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    formattedTotalPrice,
    isCartOpen,
    closeCart,
    sendWhatsAppOrder,
    setActiveScreen,
  } = useCart();

  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    area: KHANAQIN_AREAS[0],
    orderType: 'delivery' as 'delivery' | 'takeaway',
    specialInstructions: '',
  });

  const [validationError, setValidationError] = useState('');

  if (!isCartOpen) return null;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerInfo.name.trim()) {
      setValidationError('يرجى إدخال اسمك لتأكيد الطلب');
      return;
    }
    if (!customerInfo.phone.trim()) {
      setValidationError('يرجى إدخال رقم هاتفك أو واتساب');
      return;
    }
    setValidationError('');
    sendWhatsAppOrder(customerInfo);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden text-[#011d35]">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 left-0 max-w-full flex pl-10 sm:pl-16">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between text-right">
          {/* Drawer Header */}
          <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-[#f8f9ff]">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#004098] text-[24px]">shopping_bag</span>
              <span className="font-black text-lg text-[#011d35]">سلة الطلبات</span>
              <span className="bg-[#fc9430] text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
                {totalItems}
              </span>
            </div>
            <button
              onClick={closeCart}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="py-16 text-center flex flex-col items-center justify-center">
                <span className="material-symbols-outlined text-slate-300 text-6xl">production_quantity_limits</span>
                <p className="font-bold text-base text-[#011d35] mt-3">سلتك فارغة حالياً</p>
                <p className="text-xs text-[#737784] mt-1 max-w-xs">
                  تصفح قائمة الطعام الغنية واختر أشهى وجبات الشاورما والمشويات.
                </p>
                <button
                  onClick={() => {
                    closeCart();
                    setActiveScreen('menu');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="mt-5 px-5 py-2.5 bg-[#004098] text-white rounded-xl text-xs font-bold hover:bg-[#1557c0] transition-colors cursor-pointer"
                >
                  تصفح قائمة الطعام
                </button>
              </div>
            ) : (
              <>
                {/* Items List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500 pb-1 border-b border-slate-100">
                    <span>الوجبات المختارة</span>
                    <button
                      onClick={clearCart}
                      className="text-red-500 hover:underline cursor-pointer"
                    >
                      إفراغ السلة
                    </button>
                  </div>

                  {items.map((item) => (
                    <div
                      key={item.dish.id}
                      className="p-3 bg-[#f8f9ff] rounded-xl border border-slate-100 flex items-center justify-between gap-3"
                    >
                      <img
                        src={item.dish.image}
                        alt={item.dish.name}
                        className="w-14 h-14 rounded-lg object-cover bg-slate-200 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-xs md:text-sm text-[#011d35] truncate">
                          {item.dish.name}
                        </h4>
                        <span className="text-xs font-semibold text-[#004098] block">
                          {(item.dish.price * item.quantity).toLocaleString('en-US')} د.ع
                        </span>
                        {item.options?.breadType && (
                          <span className="text-[10px] text-slate-500 block">
                            • الخبز: {item.options.breadType}
                          </span>
                        )}
                        {item.notes && (
                          <span className="text-[10px] text-slate-500 block truncate">
                            • ملاحظة: {item.notes}
                          </span>
                        )}
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-1.5 bg-white p-1 rounded-lg border border-slate-200">
                        <button
                          onClick={() => updateQuantity(item.dish.id, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center text-slate-500 hover:text-red-500 hover:bg-slate-100 rounded text-xs cursor-pointer font-bold"
                        >
                          -
                        </button>
                        <span className="text-xs font-bold px-1">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.dish.id, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center text-slate-500 hover:text-[#004098] hover:bg-slate-100 rounded text-xs cursor-pointer font-bold"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.dish.id)}
                        className="text-slate-400 hover:text-red-500 p-1"
                        title="حذف الوجبة"
                      >
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                      </button>
                    </div>
                  ))}
                </div>

                {/* Checkout Form */}
                <form id="cartCheckoutForm" onSubmit={handleCheckout} className="space-y-3 pt-3 border-t border-slate-100">
                  <span className="text-xs font-bold text-[#004098] block">بيانات الاستلام والتوصيل في خانقين</span>

                  {/* Order Type Toggle */}
                  <div className="grid grid-cols-2 gap-2 p-1 bg-[#f8f9ff] rounded-xl border border-slate-200">
                    <button
                      type="button"
                      onClick={() => setCustomerInfo({ ...customerInfo, orderType: 'delivery' })}
                      className={`py-2 px-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer ${
                        customerInfo.orderType === 'delivery'
                          ? 'bg-[#004098] text-white shadow-sm'
                          : 'text-[#424653] hover:text-[#011d35]'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[16px]">moped</span>
                      <span>توصيل للمنزل</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setCustomerInfo({ ...customerInfo, orderType: 'takeaway' })}
                      className={`py-2 px-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer ${
                        customerInfo.orderType === 'takeaway'
                          ? 'bg-[#004098] text-white shadow-sm'
                          : 'text-[#424653] hover:text-[#011d35]'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[16px]">shopping_bag</span>
                      <span>استلام من الفرع</span>
                    </button>
                  </div>

                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-bold text-[#011d35] mb-1">
                      الاسم الكريم <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                      placeholder="مثال: علي محمد"
                      className="w-full bg-[#f8f9ff] text-xs p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#004098]"
                    />
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="block text-xs font-bold text-[#011d35] mb-1">
                      رقم الهاتف / واتساب <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      dir="ltr"
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                      placeholder="0771 572 7069"
                      className="w-full bg-[#f8f9ff] text-xs p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#004098] text-right"
                    />
                  </div>

                  {/* Area Input (if delivery) */}
                  {customerInfo.orderType === 'delivery' && (
                    <div>
                      <label className="block text-xs font-bold text-[#011d35] mb-1">
                        المنطقة في خانقين
                      </label>
                      <select
                        value={customerInfo.area}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, area: e.target.value })}
                        className="w-full bg-[#f8f9ff] text-xs p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#004098]"
                      >
                        {KHANAQIN_AREAS.map((area, idx) => (
                          <option key={idx} value={area}>
                            {area}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Special instructions */}
                  <div>
                    <label className="block text-xs font-bold text-[#011d35] mb-1">
                      ملاحظات خاصة (اختياري)
                    </label>
                    <input
                      type="text"
                      value={customerInfo.specialInstructions}
                      onChange={(e) =>
                        setCustomerInfo({ ...customerInfo, specialInstructions: e.target.value })
                      }
                      placeholder="مثل: بيبسي مثلج، بدون مخلل، زيادة ثوم..."
                      className="w-full bg-[#f8f9ff] text-xs p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#004098]"
                    />
                  </div>

                  {validationError && (
                    <p className="text-xs text-red-500 font-bold">{validationError}</p>
                  )}
                </form>
              </>
            )}
          </div>

          {/* Drawer Footer */}
          {items.length > 0 && (
            <div className="p-5 border-t border-slate-100 bg-[#f8f9ff] space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-600">
                <span>المجموع الكلي:</span>
                <span className="text-lg font-black text-[#004098]">{formattedTotalPrice}</span>
              </div>
              <p className="text-[11px] text-[#737784] leading-relaxed">
                * عند الضغط سيتم تحويل تفاصيل طلبك مباشرة إلى واتساب كادر مطبخ {RESTAURANT_INFO.brandName} في خانقين للتأكيد الفوري.
              </p>

              <button
                type="submit"
                form="cartCheckoutForm"
                className="w-full bg-[#fc9430] hover:bg-[#914d00] text-white py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">send</span>
                <span>تأكيد الطلب وإرسال عبر واتساب</span>
              </button>

              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="w-full bg-white hover:bg-slate-50 text-[#004098] py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 border border-slate-200 transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">call</span>
                <span>أو اطلب عبر اتصال هاتفي: {RESTAURANT_INFO.phoneLocal}</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
