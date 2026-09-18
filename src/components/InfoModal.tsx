import React from 'react';
import { X, Check, Coffee } from 'lucide-react';
import { FeatureCard, BlogPost } from '../types';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  cardData: FeatureCard | null;
  blogData: BlogPost | null;
}

export const InfoModal: React.FC<InfoModalProps> = ({
  isOpen,
  onClose,
  cardData,
  blogData,
}) => {
  if (!isOpen || (!cardData && !blogData)) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF7F2] rounded-3xl max-w-xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-[#EDE4D8] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#25140D]">
          <img
            src={cardData ? cardData.image : blogData?.image}
            alt={cardData ? cardData.title : blogData?.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#25140D]/80 via-transparent to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#C69A58] block mb-1">
              {cardData ? cardData.subtitle : blogData?.tag}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold leading-tight">
              {cardData ? cardData.title : blogData?.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
          {cardData && (
            <>
              <p className="text-sm sm:text-base text-[#5A3521] leading-relaxed font-normal">
                {cardData.description}
              </p>

              <div className="pt-3 border-t border-[#EDE4D8]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#25140D] mb-3">
                  Our Standards & Practices
                </h4>
                <div className="space-y-2.5">
                  {cardData.details.map((detail, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5A3521]/90">
                      <div className="p-1 rounded-full bg-[#EDE4D8] text-[#C26D45] shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {blogData && (
            <>
              <div className="text-xs text-[#5A3521]/60 flex items-center gap-2 mb-2">
                <span>Published on {blogData.date}</span>
                <span>•</span>
                <span>{blogData.readTime}</span>
              </div>
              <p className="text-sm sm:text-base text-[#5A3521] leading-relaxed">
                {blogData.summary}
              </p>
              <div className="p-4 rounded-xl bg-white border border-[#E2D7CA] text-xs text-[#5A3521]/90 leading-relaxed space-y-2">
                <p>
                  At The Bean House, every cup reflects our deep admiration for India's rich plantation history. From the mist-laden Western Ghats of Chikmagalur to the cool pine air of Himachal Pradesh, our brews honor time-tested preparation: the slow percolation of chicory-spiced coffee, the rolling boil of ginger-laced milk tea in brass kettles, and the warmth of genuine hospitality.
                </p>
                <p>
                  We invite you to step into our café at 12 Mall Road to taste this story firsthand.
                </p>
              </div>
            </>
          )}

          <div className="pt-4 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-[#25140D] hover:bg-[#3E2114] text-white text-xs font-semibold tracking-wider uppercase transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
