import React, { useState, useMemo } from 'react';
import { Plus, Check, Search, Sparkles, UtensilsCrossed } from 'lucide-react';
import { MENU_ITEMS } from '../data/cafeData';
import { MenuItem } from '../types';

interface FullMenuProps {
  onAddToCart: (item: MenuItem) => void;
  cartItemIds: string[];
}

type MenuCategory = 'all' | 'coffee' | 'tea' | 'bites' | 'bakery' | 'combos';

export const FullMenu: React.FC<FullMenuProps> = ({ onAddToCart, cartItemIds }) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  const categories: { key: MenuCategory; label: string; count: number }[] = [
    { key: 'all', label: 'All Items', count: MENU_ITEMS.length },
    { key: 'coffee', label: 'Coffee', count: MENU_ITEMS.filter((i) => i.category === 'coffee').length },
    { key: 'tea', label: 'Tea & Chai', count: MENU_ITEMS.filter((i) => i.category === 'tea').length },
    { key: 'bites', label: 'Quick Bites', count: MENU_ITEMS.filter((i) => i.category === 'bites').length },
    { key: 'bakery', label: 'Bakery & Desserts', count: MENU_ITEMS.filter((i) => i.category === 'bakery').length },
    { key: 'combos', label: 'Combos', count: MENU_ITEMS.filter((i) => i.category === 'combos').length },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item);
    setJustAddedId(item.id);
    setTimeout(() => setJustAddedId(null), 1200);
  };

  return (
    <section id="menu" className="py-20 md:py-28 bg-[#FAF7F2] relative border-t border-[#EDE4D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-[#C26D45] text-xs font-bold tracking-[0.2em] uppercase mb-2">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>Handcrafted With Heart</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#25140D] tracking-tight mb-4">
            The Bean House Menu
          </h2>
          <p className="text-[#5A3521]/80 text-base sm:text-lg leading-relaxed font-normal">
            From estate-grown filter decoction to warm samosas and house-baked pastries. All prices in Indian Rupees (₹).
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 ${
                  activeCategory === cat.key
                    ? 'bg-[#25140D] text-[#FAF7F2] shadow-sm'
                    : 'bg-[#EDE4D8] text-[#5A3521] hover:bg-[#E2D7CA]'
                }`}
                id={`cat-tab-${cat.key}`}
              >
                {cat.label} ({cat.count})
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5A3521]/50" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search coffee, chai, bites..."
              className="w-full pl-10 pr-4 py-2 text-xs rounded-full border border-[#E2D7CA] bg-white text-[#25140D] placeholder-[#5A3521]/50 focus:outline-none focus:ring-2 focus:ring-[#C26D45]"
            />
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white/60 rounded-2xl border border-[#EDE4D8]">
            <p className="text-sm font-medium text-[#5A3521]">No items found matching your search.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-bold text-[#C26D45] underline uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const isInCart = cartItemIds.includes(item.id);
              const isJustAdded = justAddedId === item.id;

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E2D7CA]/80 shadow-[0_2px_12px_-2px_rgba(37,20,13,0.05)] hover:shadow-[0_8px_24px_-4px_rgba(37,20,13,0.1)] hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between group"
                  id={`menu-item-${item.id}`}
                >
                  <div className="flex gap-4">
                    {/* Item Thumbnail */}
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 bg-[#EDE4D8]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      {/* Veg indicator badge */}
                      <div className="absolute top-1.5 left-1.5 bg-white/90 p-0.5 rounded border border-green-700/40 shadow-xs">
                        <span className="w-2 h-2 rounded-full bg-green-600 block" />
                      </div>
                    </div>

                    {/* Item Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1 mb-1">
                        <h4 className="font-serif text-base sm:text-lg font-semibold text-[#25140D] leading-snug truncate group-hover:text-[#C26D45] transition-colors">
                          {item.name}
                        </h4>
                      </div>

                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-serif font-bold text-base text-[#C26D45]">
                          ₹{item.price}
                        </span>
                        {item.prepTime && (
                          <span className="text-[10px] text-[#5A3521]/60 bg-[#FAF7F2] px-2 py-0.5 rounded-full border border-[#EDE4D8]">
                            {item.prepTime}
                          </span>
                        )}
                        {item.isSpecial && (
                          <span className="text-[10px] font-bold text-[#C69A58] bg-[#25140D] px-2 py-0.5 rounded-full flex items-center gap-0.5">
                            <Sparkles className="w-2.5 h-2.5" /> Chef's Pick
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-[#5A3521]/80 leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Add Button */}
                  <div className="mt-4 pt-3 border-t border-[#F7F2EB] flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-[#5A3521]/70 uppercase tracking-wider">
                      {item.category}
                    </span>

                    <button
                      onClick={() => handleAdd(item)}
                      className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 flex items-center gap-1.5 ${
                        isJustAdded
                          ? 'bg-green-700 text-white'
                          : isInCart
                          ? 'bg-[#25140D] text-[#FAF7F2]'
                          : 'bg-[#EDE4D8] text-[#25140D] hover:bg-[#25140D] hover:text-[#FAF7F2]'
                      }`}
                      id={`menu-add-btn-${item.id}`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added</span>
                        </>
                      ) : isInCart ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#C69A58]" />
                          <span>In Order</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add ₹{item.price}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
