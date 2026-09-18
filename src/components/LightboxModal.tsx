import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  isOpen: boolean;
  item: GalleryItem | null;
  currentIndex: number;
  totalItems: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  item,
  currentIndex,
  totalItems,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !item) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#160B06]/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
      id="gallery-lightbox-modal"
    >
      {/* Controls Container */}
      <div
        className="relative max-w-5xl w-full flex flex-col items-center max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with count & close */}
        <div className="w-full flex items-center justify-between text-white/80 mb-3 px-2">
          <span className="text-xs tracking-widest uppercase font-medium">
            {currentIndex + 1} of {totalItems} • {item.category}
          </span>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Image Container with navigation arrows */}
        <div className="relative w-full flex items-center justify-center overflow-hidden rounded-2xl bg-black/40 border border-white/10">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-[70vh] w-auto object-contain rounded-xl select-none"
            referrerPolicy="no-referrer"
          />

          {/* Prev Button */}
          <button
            onClick={onPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#25140D]/80 hover:bg-[#C26D45] text-white backdrop-blur-sm transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={onNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#25140D]/80 hover:bg-[#C26D45] text-white backdrop-blur-sm transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Caption */}
        <div className="w-full text-center mt-4 px-4 text-white">
          <h3 className="font-serif text-xl sm:text-2xl font-semibold mb-1 text-[#FAF7F2]">
            {item.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#E2D7CA]/90 max-w-xl mx-auto leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};
