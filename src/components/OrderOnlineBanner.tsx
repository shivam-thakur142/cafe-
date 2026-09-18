import React from 'react';
import { ShoppingBag, Utensils, Sparkles, CheckCircle2 } from 'lucide-react';

interface OrderOnlineBannerProps {
  onOrderOnline: () => void;
  onViewMenu: () => void;
}

export const OrderOnlineBanner: React.FC<OrderOnlineBannerProps> = ({
  onOrderOnline,
  onViewMenu,
}) => {
  return (
    <section className="py-20 md:py-28 bg-[#25140D] text-[#FAF7F2] relative overflow-hidden">
      {/* Warm ambient decorative lighting */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#C26D45]/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#C69A58]/15 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3E2114] border border-[#5A3521] text-[#C69A58] text-xs font-semibold tracking-[0.2em] uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Doorstep Delivery & Quick Café Pickup</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#FAF7F2] tracking-tight leading-[1.15] mb-6 max-w-3xl mx-auto">
          Your Café Favorites, <br className="hidden sm:inline" />
          <span className="italic font-normal text-[#E2D7CA]">Delivered</span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-[#EDE4D8]/80 font-normal max-w-2xl mx-auto leading-relaxed mb-10">
          Enjoy your favorite coffee, chai, snacks and desserts wherever you are.
        </p>

        {/* Feature perks */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-[#E2D7CA]/90 font-medium mb-12">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#C69A58]" />
            <span>Spill-safe insulated drink carriers</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#C69A58]" />
            <span>30–45 min local delivery in Nahan</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#C69A58]" />
            <span>Freshly packed upon receipt</span>
          </div>
        </div>

        {/* Two Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOrderOnline}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#C26D45] hover:bg-[#A7552E] text-white font-semibold text-xs tracking-[0.2em] uppercase transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3"
            id="order-banner-btn-order"
          >
            <ShoppingBag className="w-4 h-4 text-[#FAF7F2]" />
            <span>Order Online</span>
          </button>

          <button
            onClick={onViewMenu}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent hover:bg-white/10 text-[#FAF7F2] font-semibold text-xs tracking-[0.2em] uppercase transition-all duration-300 border border-[#FAF7F2]/30 flex items-center justify-center gap-2.5 active:scale-[0.98]"
            id="order-banner-btn-menu"
          >
            <Utensils className="w-4 h-4 text-[#C69A58]" />
            <span>View Menu</span>
          </button>
        </div>
      </div>
    </section>
  );
};
