import React, { useState } from 'react';
import { Eye, Image as ImageIcon } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/cafeData';
import { GalleryItem } from '../types';

interface GalleryProps {
  onOpenLightbox: (item: GalleryItem, index: number) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenLightbox }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filterCategories = ['All', 'Coffee', 'Chai', 'Indian Snacks', 'Desserts', 'Café Interior', 'Barista'];

  const filteredGallery = activeFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 text-[#C26D45] text-xs font-bold tracking-[0.2em] uppercase mb-2">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Visual Journal</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#25140D] tracking-tight mb-4">
            Moments at The Bean House
          </h2>

          <p className="text-base sm:text-lg text-[#5A3521]/80 leading-relaxed font-normal">
            Glimpses of handcrafted brews, comforting plates, sun-dappled tables, and welcoming smiles.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-[#25140D] text-[#FAF7F2] shadow-sm'
                    : 'bg-[#EDE4D8] text-[#5A3521] hover:bg-[#E2D7CA]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGallery.map((item, index) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item, index)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer bg-[#EDE4D8] shadow-sm hover:shadow-xl transition-all duration-300 aspect-[4/3] sm:aspect-square"
              id={`gallery-item-${item.id}`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-[#25140D]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white">
                <div className="flex justify-end">
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] tracking-widest uppercase font-bold text-[#C69A58] block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-base font-semibold leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#E2D7CA] line-clamp-2 mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
