import React from 'react';
import { Instagram, Facebook, Twitter, PinIcon as Pinterest, Clock, Sparkles } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <div
      id="top-announcement-bar"
      className="bg-[#25140D] text-[#E2D7CA] text-xs py-2 px-4 border-b border-[#3E2114]/60 relative z-40 transition-colors"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 tracking-wide font-medium">
        {/* Left message */}
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#C69A58]" />
          <span className="font-serif italic text-sm tracking-normal text-[#EDE4D8]">
            Good Coffee, Good Mood
          </span>
          <span className="hidden md:inline-block text-[#C26D45] mx-1">•</span>
          <span className="hidden md:inline-block text-xs text-[#E2D7CA]/80">
            Artisanal Indian Café & Coffee Roastery
          </span>
        </div>

        {/* Right opening hours & socials */}
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5 text-[#EDE4D8]">
            <Clock className="w-3.5 h-3.5 text-[#C69A58]" />
            <span>Mon – Sun: 7:00 AM – 9:00 PM</span>
          </div>

          <div className="h-3 w-px bg-[#3E2114] hidden sm:block" />

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-[#E2D7CA]/80 hover:text-[#C69A58] transition-colors p-0.5"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="text-[#E2D7CA]/80 hover:text-[#C69A58] transition-colors p-0.5"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter / X"
              className="text-[#E2D7CA]/80 hover:text-[#C69A58] transition-colors p-0.5"
            >
              <Twitter className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Pinterest"
              className="text-[#E2D7CA]/80 hover:text-[#C69A58] transition-colors p-0.5"
            >
              <Pinterest className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
