import React from 'react';
import { Coffee, Flame, HeartHandshake, Leaf } from 'lucide-react';

export const IndianCafeExperience: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-[#FAF7F2] relative border-y border-[#EDE4D8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tasteful decorative Indian coffee/chai motif */}
        <div className="inline-flex items-center justify-center gap-3 mb-6">
          <span className="w-12 h-px bg-[#C69A58]" />
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EDE4D8] border border-[#E2D7CA]">
            <Flame className="w-4 h-4 text-[#C26D45]" />
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#5A3521] uppercase">
              The Indian Café Culture
            </span>
            <Leaf className="w-4 h-4 text-[#2C483A]" />
          </div>
          <span className="w-12 h-px bg-[#C69A58]" />
        </div>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#25140D] tracking-tight mb-6 max-w-3xl mx-auto leading-tight">
          More Than Just Coffee
        </h2>

        {/* Story Text */}
        <p className="text-base sm:text-lg md:text-xl text-[#5A3521]/90 leading-relaxed font-normal max-w-3xl mx-auto mb-12">
          From the aroma of freshly brewed filter coffee to conversations over chai and snacks, our café is designed around the simple joy of good food and good company.
        </p>

        {/* 3 Storytelling pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-8">
          <div className="p-6 rounded-2xl bg-white/70 border border-[#E2D7CA]/80">
            <div className="w-10 h-10 rounded-full bg-[#EDE4D8] text-[#C26D45] flex items-center justify-center mb-4">
              <Coffee className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-[#25140D] mb-2">
              The Ritual of Decoction
            </h3>
            <p className="text-xs sm:text-sm text-[#5A3521]/80 leading-relaxed">
              We honor the patient ritual of Indian filter drip extraction, poured from height to aerate into a creamy, aromatic froth.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/70 border border-[#E2D7CA]/80">
            <div className="w-10 h-10 rounded-full bg-[#EDE4D8] text-[#C26D45] flex items-center justify-center mb-4">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-[#25140D] mb-2">
              Chai Pe Charcha
            </h3>
            <p className="text-xs sm:text-sm text-[#5A3521]/80 leading-relaxed">
              Crushed ginger, fragrant green cardamom, and rich hill milk brewed fresh in small kettles for conversations that linger.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/70 border border-[#E2D7CA]/80">
            <div className="w-10 h-10 rounded-full bg-[#EDE4D8] text-[#2C483A] flex items-center justify-center mb-4">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-[#25140D] mb-2">
              Warm Indian Hospitality
            </h3>
            <p className="text-xs sm:text-sm text-[#5A3521]/80 leading-relaxed">
              Rooted in Atithi Devo Bhava, every guest is welcomed with warmth, whether for a quick espresso or an afternoon of reading.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
