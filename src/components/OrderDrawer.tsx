import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, CheckCircle2, Clock, MapPin, Sparkles } from 'lucide-react';
import { CartItem } from '../types';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  onExploreMenu: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onExploreMenu,
}) => {
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('pickup');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.item.price * item.quantity, 0);
  const gst = Math.round(subtotal * 0.05);
  const deliveryFee = orderType === 'delivery' ? (subtotal >= 300 ? 0 : 35) : 0;
  const grandTotal = subtotal + gst + deliveryFee;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;
    const generatedId = `TBH-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderId(generatedId);
    setOrderPlaced(true);
  };

  const handleResetAndClose = () => {
    setOrderPlaced(false);
    onClearCart();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200"
      id="order-drawer-backdrop"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-[#FAF7F2] h-full shadow-2xl flex flex-col justify-between overflow-hidden border-l border-[#EDE4D8] animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
        id="order-drawer-container"
      >
        {/* Drawer Header */}
        <div className="px-6 py-5 bg-[#25140D] text-[#FAF7F2] flex items-center justify-between border-b border-[#3E2114]">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#C69A58]" />
            <div>
              <h3 className="font-serif text-lg font-semibold tracking-wide">
                Your Café Order
              </h3>
              <p className="text-[11px] text-[#E2D7CA]/80">
                The Bean House • Mall Road, Nahan
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-[#E2D7CA] hover:text-white transition-colors"
            aria-label="Close Order Drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        {orderPlaced ? (
          <div className="p-8 flex-1 flex flex-col items-center justify-center text-center space-y-4 overflow-y-auto">
            <div className="w-16 h-16 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h4 className="font-serif text-2xl font-bold text-[#25140D]">
              Order Placed Successfully!
            </h4>

            <div className="bg-white p-4 rounded-xl border border-[#EDE4D8] w-full text-left space-y-2 text-xs">
              <div className="flex justify-between font-semibold text-[#25140D]">
                <span>Order Reference:</span>
                <span className="font-mono text-[#C26D45] text-sm">{orderId}</span>
              </div>
              <div className="flex justify-between text-[#5A3521]">
                <span>Order Type:</span>
                <span className="uppercase font-bold">{orderType}</span>
              </div>
              <div className="flex justify-between text-[#5A3521]">
                <span>Total Amount:</span>
                <span className="font-bold text-sm text-[#25140D]">₹{grandTotal}</span>
              </div>
              <div className="flex justify-between text-[#5A3521]">
                <span>Est. Preparation Time:</span>
                <span className="font-medium text-green-700">15–20 minutes</span>
              </div>
            </div>

            <p className="text-xs text-[#5A3521]/80 leading-relaxed">
              Our barista is crafting your fresh brews and snacks right now. We'll send an SMS update to {customerPhone || 'your mobile'}.
            </p>

            <button
              onClick={handleResetAndClose}
              className="w-full py-3 rounded-full bg-[#25140D] text-white text-xs font-semibold tracking-widest uppercase hover:bg-[#3E2114] transition-colors"
            >
              Start New Order
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Order Type Toggle */}
            <div className="bg-[#EDE4D8] p-1 rounded-xl grid grid-cols-2 gap-1 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setOrderType('pickup')}
                className={`py-2 rounded-lg transition-all ${
                  orderType === 'pickup'
                    ? 'bg-[#25140D] text-white shadow-xs'
                    : 'text-[#5A3521] hover:text-[#25140D]'
                }`}
              >
                Café Counter Pickup
              </button>
              <button
                type="button"
                onClick={() => setOrderType('delivery')}
                className={`py-2 rounded-lg transition-all ${
                  orderType === 'delivery'
                    ? 'bg-[#25140D] text-white shadow-xs'
                    : 'text-[#5A3521] hover:text-[#25140D]'
                }`}
              >
                Local Delivery (Nahan)
              </button>
            </div>

            {/* Cart Items List */}
            {cart.length === 0 ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-[#EDE4D8] text-[#5A3521] mx-auto flex items-center justify-center">
                  <ShoppingBag className="w-6 h-6 text-[#C26D45]" />
                </div>
                <h4 className="font-serif text-lg font-semibold text-[#25140D]">
                  Your order is empty
                </h4>
                <p className="text-xs text-[#5A3521]/80 max-w-xs mx-auto">
                  Add your favorite South Indian filter coffee, spiced chai, fresh pastries, or warm bites from the menu.
                </p>
                <button
                  onClick={() => {
                    onClose();
                    onExploreMenu();
                  }}
                  className="mt-2 px-6 py-2.5 rounded-full bg-[#25140D] text-white text-xs font-bold tracking-wider uppercase hover:bg-[#3E2114] transition-colors"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-bold text-[#5A3521] uppercase tracking-wider">
                  <span>Selected Items ({cart.length})</span>
                  <button
                    onClick={onClearCart}
                    className="text-red-700 hover:underline text-[11px]"
                  >
                    Clear All
                  </button>
                </div>

                <div className="space-y-3">
                  {cart.map((cartItem) => (
                    <div
                      key={cartItem.item.id}
                      className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#E2D7CA] shadow-xs gap-3"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <img
                          src={cartItem.item.image}
                          alt={cartItem.item.name}
                          className="w-12 h-12 rounded-lg object-cover shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <div className="min-w-0">
                          <h5 className="font-serif text-sm font-semibold text-[#25140D] truncate">
                            {cartItem.item.name}
                          </h5>
                          <span className="text-xs font-bold text-[#C26D45]">
                            ₹{cartItem.item.price * cartItem.quantity}
                          </span>
                        </div>
                      </div>

                      {/* Quantity Controller */}
                      <div className="flex items-center gap-2 shrink-0">
                        <div className="flex items-center bg-[#EDE4D8] rounded-lg p-0.5">
                          <button
                            onClick={() => onUpdateQuantity(cartItem.item.id, -1)}
                            className="p-1 rounded-md text-[#25140D] hover:bg-white transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center text-xs font-bold text-[#25140D]">
                            {cartItem.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(cartItem.item.id, 1)}
                            className="p-1 rounded-md text-[#25140D] hover:bg-white transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(cartItem.item.id)}
                          className="p-1.5 text-stone-400 hover:text-red-700 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Customer Details Form */}
                <form id="order-form" onSubmit={handlePlaceOrder} className="pt-4 space-y-3">
                  <h5 className="text-xs font-bold text-[#25140D] uppercase tracking-wider">
                    Contact & Delivery Details
                  </h5>

                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-[#E2D7CA] bg-white focus:outline-none focus:ring-1 focus:ring-[#C26D45]"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone (+91)"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-[#E2D7CA] bg-white focus:outline-none focus:ring-1 focus:ring-[#C26D45]"
                    />
                  </div>

                  {orderType === 'delivery' ? (
                    <input
                      type="text"
                      required
                      placeholder="Delivery Address (Nahan town / locality)"
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-[#E2D7CA] bg-white focus:outline-none focus:ring-1 focus:ring-[#C26D45]"
                    />
                  ) : (
                    <div className="p-2.5 rounded-lg bg-[#EDE4D8]/70 border border-[#E2D7CA] flex items-center gap-2 text-xs text-[#5A3521]">
                      <MapPin className="w-3.5 h-3.5 text-[#C26D45] shrink-0" />
                      <span>Ready for pickup at 12 Mall Road counter</span>
                    </div>
                  )}

                  <textarea
                    rows={2}
                    placeholder="Preparation notes (e.g. less sugar, extra hot, oat milk...)"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-[#E2D7CA] bg-white focus:outline-none focus:ring-1 focus:ring-[#C26D45]"
                  />
                </form>
              </div>
            )}
          </div>
        )}

        {/* Drawer Footer with Bill Summary */}
        {!orderPlaced && cart.length > 0 && (
          <div className="p-6 bg-white border-t border-[#EDE4D8] space-y-3">
            <div className="space-y-1.5 text-xs text-[#5A3521]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-[11px] text-[#5A3521]/70">
                <span>GST (5%)</span>
                <span>₹{gst}</span>
              </div>
              {orderType === 'delivery' && (
                <div className="flex justify-between text-[11px]">
                  <span>Delivery Charge</span>
                  <span>{deliveryFee === 0 ? <span className="text-green-700 font-bold">FREE</span> : `₹${deliveryFee}`}</span>
                </div>
              )}
              <div className="pt-2 border-t border-[#EDE4D8] flex justify-between text-base font-serif font-bold text-[#25140D]">
                <span>Total Amount</span>
                <span className="text-[#C26D45]">₹{grandTotal}</span>
              </div>
            </div>

            <button
              type="submit"
              form="order-form"
              className="w-full py-3.5 rounded-full bg-[#25140D] hover:bg-[#3E2114] text-[#FAF7F2] font-semibold text-xs tracking-[0.2em] uppercase transition-all duration-200 shadow-md flex items-center justify-center gap-2"
              id="confirm-place-order-btn"
            >
              <span>Place Order (₹{grandTotal})</span>
            </button>
            <p className="text-[10px] text-center text-[#5A3521]/60">
              Pay via UPI, Card, or Cash on Pickup/Delivery
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
