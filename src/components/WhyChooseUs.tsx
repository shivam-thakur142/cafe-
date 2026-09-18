import React from 'react';
import { Coffee, ArrowRight } from 'lucide-react';
import { WHY_CHOOSE_US_CARDS } from '../data/cafeData';
import { FeatureCard } from '../types';

interface WhyChooseUsProps {
  onLearnMore: (card: FeatureCard) => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onLearnMore }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered header with decorative coffee/leaf icon */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#EDE4D8] text-[#5A3521] mb-4">
            <Coffee className="w-5 h-5 text-[#C26D45]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#25140D] tracking-tight mb-4">
            Why Choose Us?
          </h2>

          <p className="text-base sm:text-lg text-[#5A3521]/80 leading-relaxed font-normal">
            We care about quality, comfort, and creating memorable moments for every guest.
          </p>
        </div>

        {/* 3 Elegant Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {WHY_CHOOSE_US_CARDS.map((card) => (
            <div
              key={card.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E2D7CA]/80 shadow-[0_4px_20px_-4px_rgba(37,20,13,0.05)] hover:shadow-[0_12px_30px_-6px_rgba(37,20,13,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
              id={`why-card-${card.id}`}
            >
              {/* Image container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EDE4D8]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#25140D]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Card content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-[#25140D] mb-3 group-hover:text-[#C26D45] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#5A3521]/85 leading-relaxed mb-6 font-normal">
                    {card.description}
                  </p>
                </div>

                <div>
                  <button
                    onClick={() => onLearnMore(card)}
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase text-[#25140D] group-hover:text-[#C26D45] transition-colors focus:outline-none"
                    id={`learn-more-btn-${card.id}`}
                  >
                    <span>LEARN MORE</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
