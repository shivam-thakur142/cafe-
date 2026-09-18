import React from 'react';
import { Plus, ArrowRight, Sparkles } from 'lucide-react';
import { HIGHLIGHT_ITEMS } from '../data/cafeData';
import { MenuItem } from '../types';

interface MenuHighlightsProps {
  onAddToCart: (item: MenuItem) => void;
  onViewFullMenu: () => void;
}

export const MenuHighlights: React.FC<MenuHighlightsProps> = ({
  onAddToCart,
  onViewFullMenu,
}) => {
  return (
    <section id="highlights" className="py-20 md:py-28 bg-[#F7F2EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-[#C26D45] text-xs font-bold tracking-[0.2em] uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Signatures of The Bean House</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#25140D] tracking-tight">
              Our Menu Highlights
            </h2>
            <p className="text-base sm:text-lg text-[#5A3521]/80 mt-2 font-normal">
              Freshly prepared. Comfortingly familiar.
            </p>
          </div>

          <button
            onClick={onViewFullMenu}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#25140D] hover:bg-[#3E2114] text-[#FAF7F2] text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-200 self-start md:self-auto shadow-sm"
            id="view-full-menu-top-btn"
          >
            <span>View Full Menu</span>
            <ArrowRight className="w-4 h-4 text-[#C69A58]" />
          </button>
        </div>

        {/* 4 Food Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {HIGHLIGHT_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E2D7CA]/80 shadow-[0_4px_16px_-4px_rgba(37,20,13,0.06)] hover:shadow-[0_12px_28px_-6px_rgba(37,20,13,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              id={`highlight-card-${item.id}`}
            >
              <div>
                {/* Image */}
                <div className="relative aspect-square w-full overflow-hidden bg-[#EDE4D8]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  {/* Indian Veg Badge */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm p-1 rounded border border-green-700/40 shadow-xs flex items-center justify-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-600 block" title="Vegetarian" />
                  </div>

                  {/* Bestseller ribbon */}
                  {item.isBestseller && (
                    <div className="absolute top-3 right-3 bg-[#25140D]/90 text-[#FAF7F2] text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full backdrop-blur-sm border border-white/10">
                      Bestseller
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#25140D] leading-snug group-hover:text-[#C26D45] transition-colors">
                      {item.name}
                    </h3>
                    <span className="font-serif text-lg font-bold text-[#C26D45] whitespace-nowrap">
                      ₹{item.price}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#5A3521]/80 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                <button
                  onClick={() => onAddToCart(item)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#EDE4D8] hover:bg-[#25140D] text-[#25140D] hover:text-[#FAF7F2] font-semibold text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.98]"
                  id={`add-highlight-${item.id}`}
                >
                  <Plus className="w-4 h-4" />
                  <span>Add to Order</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View full menu bottom CTA banner */}
        <div className="mt-14 text-center">
          <button
            onClick={onViewFullMenu}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#25140D] hover:bg-[#3E2114] text-[#FAF7F2] font-semibold text-xs tracking-[0.2em] uppercase transition-all duration-200 shadow-md hover:shadow-lg"
            id="view-full-menu-bottom-btn"
          >
            <span>Explore Full Indian Café Menu</span>
            <ArrowRight className="w-4 h-4 text-[#C69A58]" />
          </button>
        </div>
      </div>
    </section>
  );
};
