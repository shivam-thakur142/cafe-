import React, { useState } from 'react';
import {
  Coffee,
  Instagram,
  Facebook,
  Twitter,
  PinIcon as Pinterest,
  Send,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
} from 'lucide-react';

interface FooterProps {
  onNavClick: (href: string) => void;
  onFilterCategory?: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, onFilterCategory }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  const quickLinks = [
    { label: 'HOME', href: '#hero' },
    { label: 'ABOUT', href: '#about' },
    { label: 'MENU', href: '#menu' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'BLOG', href: '#blog' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const menuCategories = [
    { label: 'Coffee', key: 'coffee' },
    { label: 'Chai & Tea', key: 'tea' },
    { label: 'Quick Bites', key: 'bites' },
    { label: 'Bakery', key: 'bakery' },
    { label: 'Desserts', key: 'bakery' },
  ];

  return (
    <footer className="bg-[#1E100A] text-[#EDE4D8] pt-16 md:pt-20 pb-12 border-t border-[#3E2114]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#3E2114]/80">
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#3E2114] flex items-center justify-center text-[#C69A58] border border-[#5A3521]">
                <Coffee className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif tracking-[0.2em] text-lg font-bold text-[#FAF7F2] uppercase">
                  The Bean House
                </span>
                <span className="text-[10px] tracking-[0.3em] font-semibold text-[#C69A58] uppercase">
                  Coffee & More
                </span>
              </div>
            </div>

            <p className="text-sm text-[#E2D7CA]/80 leading-relaxed max-w-sm pt-2">
              Good coffee, delicious food, and warm moments.
            </p>

            <p className="text-xs text-[#E2D7CA]/60 leading-relaxed max-w-sm">
              An authentic contemporary Indian café blending traditional hill-station hospitality with single-origin coffees, handcrafted chai, and fresh daily baking.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-[#2A170F] border border-[#3E2114] flex items-center justify-center text-[#E2D7CA] hover:text-[#C69A58] hover:border-[#C69A58] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-[#2A170F] border border-[#3E2114] flex items-center justify-center text-[#E2D7CA] hover:text-[#C69A58] hover:border-[#C69A58] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="w-8 h-8 rounded-full bg-[#2A170F] border border-[#3E2114] flex items-center justify-center text-[#E2D7CA] hover:text-[#C69A58] hover:border-[#C69A58] transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Pinterest"
                className="w-8 h-8 rounded-full bg-[#2A170F] border border-[#3E2114] flex items-center justify-center text-[#E2D7CA] hover:text-[#C69A58] hover:border-[#C69A58] transition-colors"
              >
                <Pinterest className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold tracking-[0.2em] text-[#C69A58] uppercase mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs font-medium tracking-wider">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavClick(link.href);
                    }}
                    className="text-[#E2D7CA]/80 hover:text-white transition-colors block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Menu Categories (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold tracking-[0.2em] text-[#C69A58] uppercase mb-5">
              Menu
            </h4>
            <ul className="space-y-2.5 text-xs font-medium tracking-wider">
              {menuCategories.map((cat) => (
                <li key={cat.label}>
                  <a
                    href="#menu"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavClick('#menu');
                      if (onFilterCategory) onFilterCategory(cat.key);
                    }}
                    className="text-[#E2D7CA]/80 hover:text-white transition-colors block py-0.5"
                  >
                    {cat.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Hours (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold tracking-[0.2em] text-[#C69A58] uppercase mb-5">
              Contact
            </h4>

            <div className="space-y-3 text-xs text-[#E2D7CA]/85">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C26D45] shrink-0 mt-0.5" />
                <span>12 Mall Road, Nahan, Himachal Pradesh</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C26D45] shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors font-medium">
                  +91 98765 43210
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C26D45] shrink-0" />
                <a href="mailto:hello@thebeanhouse.in" className="hover:text-white transition-colors">
                  hello@thebeanhouse.in
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#C26D45] shrink-0" />
                <span>Mon – Sun: 7:00 AM – 9:00 PM</span>
              </div>
            </div>

            {/* Newsletter Subscription Box */}
            <div className="pt-4 border-t border-[#3E2114]">
              <h5 className="font-serif text-sm font-semibold text-[#FAF7F2] mb-1">
                Stay in the Loop
              </h5>
              <p className="text-[11px] text-[#E2D7CA]/70 mb-3">
                Subscribe for new menu items, special offers, and café updates.
              </p>

              {subscribed ? (
                <div className="flex items-center gap-2 text-xs text-green-400 bg-green-950/40 p-2.5 rounded-lg border border-green-800/40">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span>Thank you! You're on The Bean House insider list.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-1 bg-[#2A170F] border border-[#3E2114] rounded-lg px-3 py-2 text-xs text-[#FAF7F2] placeholder-[#E2D7CA]/40 focus:outline-none focus:border-[#C26D45]"
                    id="newsletter-email-input"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#C26D45] hover:bg-[#A7552E] text-white text-xs font-bold tracking-wider uppercase rounded-lg transition-colors flex items-center gap-1.5 shrink-0"
                    id="newsletter-subscribe-btn"
                  >
                    <span>Subscribe</span>
                    <Send className="w-3 h-3" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E2D7CA]/60">
          <p>© 2026 The Bean House. All Rights Reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); alert("The Bean House respects your privacy. Customer information is never shared or sold."); }} className="hover:text-[#EDE4D8] transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#terms" onClick={(e) => { e.preventDefault(); alert("The Bean House Terms: Standard café service terms apply to all orders placed online or in-store."); }} className="hover:text-[#EDE4D8] transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
