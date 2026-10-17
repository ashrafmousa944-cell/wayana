import React, { createContext, useContext, useState, useEffect } from 'react';
import { MenuItem, RESTAURANT_INFO } from '../data/restaurantData';

export interface CartItem {
  dish: MenuItem;
  quantity: number;
  notes?: string;
  options?: {
    breadType?: string;
    spiceLevel?: string;
    extraGarlic?: boolean;
    extraPickles?: boolean;
  };
}

export interface CustomerOrderDetails {
  name: string;
  phone: string;
  area: string;
  orderType: 'delivery' | 'takeaway';
  specialInstructions?: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (dish: MenuItem, quantity?: number, notes?: string, options?: CartItem['options']) => void;
  removeFromCart: (dishId: string) => void;
  updateQuantity: (dishId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  formattedTotalPrice: string;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  sendWhatsAppOrder: (customer: CustomerOrderDetails) => void;
  activeScreen: 'welcome' | 'home' | 'menu' | 'about' | 'services' | 'contact';
  setActiveScreen: (screen: 'welcome' | 'home' | 'menu' | 'about' | 'services' | 'contact') => void;
  selectedDishForModal: MenuItem | null;
  setSelectedDishForModal: (dish: MenuItem | null) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('otlob_wayana_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeScreen, setActiveScreen] = useState<'welcome' | 'home' | 'menu' | 'about' | 'services' | 'contact'>('home');
  const [selectedDishForModal, setSelectedDishForModal] = useState<MenuItem | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('otlob_wayana_cart', JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const addToCart = (
    dish: MenuItem,
    quantity = 1,
    notes = '',
    options?: CartItem['options']
  ) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex((i) => i.dish.id === dish.id);
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex].quantity += quantity;
        if (notes) next[existingIndex].notes = notes;
        if (options) next[existingIndex].options = options;
        return next;
      }
      return [...prev, { dish, quantity, notes, options }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (dishId: string) => {
    setItems((prev) => prev.filter((i) => i.dish.id !== dishId));
  };

  const updateQuantity = (dishId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(dishId);
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.dish.id === dishId ? { ...i, quantity } : i))
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.dish.price * item.quantity, 0);
  const formattedTotalPrice = `${totalPrice.toLocaleString('en-US')} د.ع`;

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const sendWhatsAppOrder = (customer: CustomerOrderDetails) => {
    if (items.length === 0) return;

    let itemsText = items
      .map((item, index) => {
        let line = `${index + 1}. *${item.dish.name}* (العدد: ${item.quantity}) - ${(
          item.dish.price * item.quantity
        ).toLocaleString('en-US')} د.ع`;
        if (item.options?.breadType) line += `\n   • نوع الخبز: ${item.options.breadType}`;
        if (item.options?.spiceLevel) line += `\n   • مستوى التتبيلة: ${item.options.spiceLevel}`;
        if (item.options?.extraGarlic) line += `\n   • إكسترا ثومية`;
        if (item.options?.extraPickles) line += `\n   • إكسترا مخلل`;
        if (item.notes) line += `\n   • ملاحظات: ${item.notes}`;
        return line;
      })
      .join('\n');

    const orderTypeLabel = customer.orderType === 'delivery' ? 'توصيل سريع للمنزل (Express Delivery)' : 'استلام مباشر من المطعم (Takeaway)';

    const message = `*طلب جديد من موقع ${RESTAURANT_INFO.brandName} - خانقين* 🛵🍔%0A%0A` +
      `👤 *الاسم:* ${encodeURIComponent(customer.name)}%0A` +
      `📞 *رقم الهاتف:* ${encodeURIComponent(customer.phone)}%0A` +
      `📍 *المنطقة / العنوان في خانقين:* ${encodeURIComponent(customer.area || 'غير محدد')}%0A` +
      `📦 *نوع الاستلام:* ${encodeURIComponent(orderTypeLabel)}%0A` +
      (customer.specialInstructions ? `📝 *تعليمات إضافية:* ${encodeURIComponent(customer.specialInstructions)}%0A` : '') +
      `%0A📋 *تفاصيل الطلب:*%0A${encodeURIComponent(itemsText)}%0A%0A` +
      `💰 *المجموع الإجمالي:* ${encodeURIComponent(formattedTotalPrice)}%0A` +
      `⚡ *الرجاء تأكيد الطلب وتحديد وقت التوصيل التقريبي شكراً لكم!*`;

    window.open(`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        formattedTotalPrice,
        isCartOpen,
        openCart,
        closeCart,
        sendWhatsAppOrder,
        activeScreen,
        setActiveScreen,
        selectedDishForModal,
        setSelectedDishForModal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
