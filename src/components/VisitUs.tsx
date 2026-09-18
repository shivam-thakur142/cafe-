import React from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink } from 'lucide-react';

export const VisitUs: React.FC = () => {
  const handleOpenMap = () => {
    // Open Google Maps search for Nahan Mall Road
    window.open(
      'https://www.google.com/maps/search/?api=1&query=Mall+Road+Nahan+Himachal+Pradesh',
      '_blank'
    );
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F7F2EB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: Text and Information */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-[#C26D45] text-xs font-bold tracking-[0.2em] uppercase">
              <MapPin className="w-3.5 h-3.5" />
              <span>Historic Mall Road</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#25140D] tracking-tight leading-tight">
              Visit Us Today
            </h2>

            <p className="text-base sm:text-lg text-[#5A3521]/85 leading-relaxed font-normal">
              Drop by for your morning coffee, stay for a delicious bite, and enjoy the warm atmosphere of our café.
            </p>

            {/* Quick Details List */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/70 border border-[#E2D7CA]/80">
                <div className="p-2 rounded-lg bg-[#EDE4D8] text-[#5A3521] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#C26D45]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#25140D] uppercase tracking-wider mb-1">
                    Address
                  </h4>
                  <p className="text-sm text-[#5A3521]/90">
                    12 Mall Road, Nahan, Himachal Pradesh — 173001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/70 border border-[#E2D7CA]/80">
                <div className="p-2 rounded-lg bg-[#EDE4D8] text-[#5A3521] shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-[#C26D45]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#25140D] uppercase tracking-wider mb-1">
                    Opening Hours
                  </h4>
                  <p className="text-sm text-[#5A3521]/90">
                    Mon – Sun: 7:00 AM – 9:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/70 border border-[#E2D7CA]/80">
                <div className="p-2 rounded-lg bg-[#EDE4D8] text-[#5A3521] shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-[#C26D45]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#25140D] uppercase tracking-wider mb-1">
                    Direct Contact & Reservations
                  </h4>
                  <a
                    href="tel:+919876543210"
                    className="text-sm font-semibold text-[#25140D] hover:text-[#C26D45] transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>

            {/* Action button */}
            <div className="pt-2">
              <button
                onClick={handleOpenMap}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#25140D] hover:bg-[#3E2114] text-[#FAF7F2] font-semibold text-xs tracking-[0.2em] uppercase transition-all duration-200 shadow-md hover:shadow-lg"
                id="find-location-btn"
              >
                <Navigation className="w-4 h-4 text-[#C69A58]" />
                <span>Find Our Location</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </button>
            </div>
          </div>

          {/* RIGHT: 3-Image Collage with subtle rounded corners and overlap */}
          <div className="lg:col-span-6 relative">
            <div className="relative min-h-[460px] sm:min-h-[520px] w-full">
              {/* Image 1: Café Exterior (Main anchor) */}
              <div className="absolute top-0 left-0 w-3/4 sm:w-2/3 aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border-2 border-white z-10 group">
                <img
                  src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80"
                  alt="Café exterior on historic Mall Road"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-2 left-3 bg-[#25140D]/80 backdrop-blur-xs text-white text-[10px] uppercase tracking-widest px-2.5 py-1 rounded font-semibold">
                  Café Exterior
                </div>
              </div>

              {/* Image 2: Barista preparing coffee (Top right overlap) */}
              <div className="absolute top-12 right-0 w-3/5 sm:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-2 border-white z-20 group">
                <img
                  src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80"
                  alt="Barista preparing coffee"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-2 left-3 bg-[#25140D]/80 backdrop-blur-xs text-white text-[10px] uppercase tracking-widest px-2.5 py-1 rounded font-semibold">
                  Barista Brew
                </div>
              </div>

              {/* Image 3: Cozy café interior (Bottom center/right overlap) */}
              <div className="absolute bottom-0 left-1/4 sm:left-1/3 w-3/4 sm:w-3/5 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-30 group">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80"
                  alt="Cozy café interior with warm timber and lighting"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-2 left-3 bg-[#25140D]/80 backdrop-blur-xs text-white text-[10px] uppercase tracking-widest px-2.5 py-1 rounded font-semibold">
                  Cozy Interior
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
