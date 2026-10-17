import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const DishModal: React.FC = () => {
  const { selectedDishForModal, setSelectedDishForModal, addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [breadType, setBreadType] = useState('صمون عراقي');
  const [spiceLevel, setSpiceLevel] = useState('عادي');
  const [extraGarlic, setExtraGarlic] = useState(false);
  const [extraPickles, setExtraPickles] = useState(false);
  const [notes, setNotes] = useState('');

  if (!selectedDishForModal) return null;

  const handleClose = () => {
    setSelectedDishForModal(null);
    setQuantity(1);
    setNotes('');
    setExtraGarlic(false);
    setExtraPickles(false);
  };

  const handleAddAndClose = () => {
    addToCart(selectedDishForModal, quantity, notes, {
      breadType,
      spiceLevel,
      extraGarlic,
      extraPickles,
    });
    handleClose();
  };

  const handleDirectWhatsApp = () => {
    const text = `مرحباً اطلب ويانه / خانقين، أود طلب: ${selectedDishForModal.name} عدد (${quantity}) بسعر ${(
      selectedDishForModal.price * quantity
    ).toLocaleString('en-US')} د.ع.` + (notes ? ` ملاحظات: ${notes}` : '');
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 text-[#011d35]">
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl z-10 text-right border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
        {/* Image Banner */}
        <div className="relative h-64 sm:h-72 w-full bg-slate-100">
          <img
            src={selectedDishForModal.image}
            alt={selectedDishForModal.altText}
            className="w-full h-full object-cover"
          />
          <button
            onClick={handleClose}
            className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-slate-700 hover:bg-white shadow transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
          {selectedDishForModal.badge && (
            <span className="absolute top-4 right-4 bg-[#fc9430] text-white px-3.5 py-1 rounded-full text-xs font-bold shadow-md">
              {selectedDishForModal.badge}
            </span>
          )}
          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-[#004098] font-black text-lg shadow-sm">
            {selectedDishForModal.formattedPrice}
          </div>
        </div>

        {/* Content & Options */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-black text-[#011d35]">{selectedDishForModal.name}</h3>
            <p className="text-xs md:text-sm text-[#424653] leading-relaxed mt-1">
              {selectedDishForModal.description}
            </p>
          </div>

          {/* Customization Options */}
          <div className="space-y-3 pt-2 border-t border-slate-100 text-xs">
            {/* Bread type (for sandwiches & grills) */}
            {(selectedDishForModal.category === 'shawarma' ||
              selectedDishForModal.category === 'grills' ||
              selectedDishForModal.category === 'burgers') && (
              <div>
                <span className="font-bold text-[#011d35] block mb-1">نوع الخبز المفضل:</span>
                <div className="grid grid-cols-3 gap-2">
                  {['صمون عراقي', 'خبز صاج', 'خبز تنور حار'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setBreadType(type)}
                      className={`py-2 px-2 rounded-lg font-semibold transition-colors cursor-pointer border ${
                        breadType === type
                          ? 'bg-[#004098] text-white border-[#004098]'
                          : 'bg-[#f8f9ff] text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Spice Level */}
            <div>
              <span className="font-bold text-[#011d35] block mb-1">مستوى التتبيلة والحرارة:</span>
              <div className="grid grid-cols-3 gap-2">
                {['عادي', 'متوسط الحرارة', 'حار سبايسي 🌶️'].map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setSpiceLevel(lvl)}
                    className={`py-2 px-2 rounded-lg font-semibold transition-colors cursor-pointer border ${
                      spiceLevel === lvl
                        ? 'bg-[#fc9430] text-white border-[#fc9430]'
                        : 'bg-[#f8f9ff] text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            {/* Extras */}
            <div>
              <span className="font-bold text-[#011d35] block mb-1">إضافات مجانية:</span>
              <div className="flex items-center gap-4">
                <label className="inline-flex items-center gap-1.5 cursor-pointer font-semibold text-slate-700">
                  <input
                    type="checkbox"
                    checked={extraGarlic}
                    onChange={(e) => setExtraGarlic(e.target.checked)}
                    className="accent-[#004098] rounded w-4 h-4 cursor-pointer"
                  />
                  <span>إكسترا ثومية خانقين</span>
                </label>
                <label className="inline-flex items-center gap-1.5 cursor-pointer font-semibold text-slate-700">
                  <input
                    type="checkbox"
                    checked={extraPickles}
                    onChange={(e) => setExtraPickles(e.target.checked)}
                    className="accent-[#004098] rounded w-4 h-4 cursor-pointer"
                  />
                  <span>مخلل طازج إضافي</span>
                </label>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="font-bold text-[#011d35] block mb-1">ملاحظاتك للشيف:</label>
              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="أي تفصيل تحبه في إعداد وجبتك..."
                className="w-full p-2.5 bg-[#f8f9ff] rounded-xl border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#004098]"
              />
            </div>
          </div>

          {/* Quantity and Actions */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 bg-[#f8f9ff] p-1.5 rounded-xl border border-slate-200">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center font-bold text-slate-700 hover:text-red-500 cursor-pointer"
              >
                -
              </button>
              <span className="font-bold text-sm px-2">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center font-bold text-slate-700 hover:text-[#004098] cursor-pointer"
              >
                +
              </button>
            </div>

            <div className="flex items-center gap-2 flex-1">
              <button
                type="button"
                onClick={handleAddAndClose}
                className="flex-1 bg-[#004098] hover:bg-[#1557c0] text-white py-3 px-4 rounded-xl font-bold text-xs md:text-sm flex items-center justify-center gap-1.5 transition-colors active:scale-95 shadow-md cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                <span>أضف للسلة ({(selectedDishForModal.price * quantity).toLocaleString('en-US')} د.ع)</span>
              </button>
              <button
                type="button"
                onClick={handleDirectWhatsApp}
                className="p-3 bg-[#ffdcc3] hover:bg-[#fc9430] text-[#914d00] hover:text-white rounded-xl transition-colors cursor-pointer"
                title="طلب فوري عبر واتساب"
              >
                <span className="material-symbols-outlined text-[20px]">send</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
