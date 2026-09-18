import React from 'react';
import { ArrowRight, Coffee, Heart, Sparkles } from 'lucide-react';

interface HeroProps {
  onViewMenu: () => void;
  onOrderOnline: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewMenu, onOrderOnline }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#FAF7F2] py-16 md:py-24"
    >
      {/* Subtle warm background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(247,242,235,0.95),rgba(250,247,242,0.98))] z-0 pointer-events-none" />

      {/* Decorative leaf / coffee botanical watermark */}
      <div className="absolute -top-12 -right-12 w-96 h-96 rounded-full bg-[#EDE4D8]/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-96 h-96 rounded-full bg-[#C26D45]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Small handwritten-style eyebrow */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-8 h-px bg-[#C26D45]/60" />
          <span className="font-script text-2xl sm:text-3xl text-[#C26D45] tracking-wide font-semibold">
            Welcome to our café
          </span>
          <span className="w-8 h-px bg-[#C26D45]/60" />
        </div>

        {/* Large editorial serif heading */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-semibold text-[#25140D] tracking-tight leading-[1.1] max-w-4xl mb-6">
          Good Coffee, <br className="hidden sm:inline" />
          <span className="italic font-normal text-[#5A3521]">Great Moments</span>
        </h1>

        {/* Supporting text */}
        <p className="text-base sm:text-lg md:text-xl text-[#5A3521]/90 max-w-2xl font-normal leading-relaxed mb-10 text-balance">
          Freshly brewed coffee, delicious bites, and cozy moments made for slowing down and enjoying the day.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
          <button
            onClick={onViewMenu}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#25140D] hover:bg-[#3E2114] text-[#FAF7F2] font-semibold text-xs tracking-[0.2em] uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 border border-[#3E2114]"
            id="hero-view-menu-btn"
          >
            <span>View Our Menu</span>
            <ArrowRight className="w-4 h-4 text-[#C69A58]" />
          </button>

          <button
            onClick={onOrderOnline}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-[#F7F2EB] text-[#25140D] font-semibold text-xs tracking-[0.2em] uppercase transition-all duration-300 shadow-sm hover:shadow border border-[#E2D7CA] flex items-center justify-center gap-2.5 active:scale-[0.99]"
            id="hero-order-online-btn"
          >
            <Coffee className="w-4 h-4 text-[#C26D45]" />
            <span>Order Online</span>
          </button>
        </div>

        {/* Cinematic Photography Centerpiece Card inspired by reference layout */}
        <div className="w-full relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-[#EDE4D8] bg-[#EDE4D8]/50">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1800&q=85"
              alt="Artisanal Indian café breakfast spread with filter coffee, masala chai, samosa and baked goods on a rustic table"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
              referrerPolicy="no-referrer"
            />
            {/* Soft gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#25140D]/80 via-[#25140D]/20 to-transparent" />

            {/* Bottom floating details badge */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-8 sm:right-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-white">
              <div className="flex items-center gap-3 bg-[#25140D]/75 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/10">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C26D45] animate-pulse" />
                <span className="text-xs tracking-wider uppercase font-medium text-[#FAF7F2]">
                  Fresh Bakes & Steaming Decoction Daily • 7:00 AM – 9:00 PM
                </span>
              </div>

              <div className="hidden md:flex items-center gap-2 bg-[#25140D]/75 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/10 text-xs font-serif italic text-[#E2D7CA]">
                <Heart className="w-3.5 h-3.5 text-[#C26D45] fill-current" />
                <span>Crafted with love in Nahan, Himachal Pradesh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature quick highlights bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-10 w-full text-left">
          <div className="p-4 rounded-xl bg-white/70 border border-[#EDE4D8] backdrop-blur-sm">
            <div className="flex items-center gap-2 text-[#C26D45] mb-1 font-semibold text-xs tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Estate Sourced</span>
            </div>
            <p className="text-xs text-[#5A3521]/80">Single-origin beans from Chikmagalur & Coorg</p>
          </div>

          <div className="p-4 rounded-xl bg-white/70 border border-[#EDE4D8] backdrop-blur-sm">
            <div className="flex items-center gap-2 text-[#C26D45] mb-1 font-semibold text-xs tracking-wider uppercase">
              <Coffee className="w-3.5 h-3.5" />
              <span>Authentic Brews</span>
            </div>
            <p className="text-xs text-[#5A3521]/80">Brass dabarah filter coffee & slow-simmered chai</p>
          </div>

          <div className="p-4 rounded-xl bg-white/70 border border-[#EDE4D8] backdrop-blur-sm">
            <div className="flex items-center gap-2 text-[#C26D45] mb-1 font-semibold text-xs tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Scratch Bakery</span>
            </div>
            <p className="text-xs text-[#5A3521]/80">Fresh flaky croissants, tea cakes & desserts daily</p>
          </div>

          <div className="p-4 rounded-xl bg-white/70 border border-[#EDE4D8] backdrop-blur-sm">
            <div className="flex items-center gap-2 text-[#C26D45] mb-1 font-semibold text-xs tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Cozy Ambience</span>
            </div>
            <p className="text-xs text-[#5A3521]/80">Relaxed seating, reading nooks & mountain view</p>
          </div>
        </div>
      </div>
    </section>
  );
};
