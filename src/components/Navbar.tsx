import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Coffee } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenOrder: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenOrder,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#hero', id: 'hero' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'MENU', href: '#menu', id: 'menu' },
    { label: 'GALLERY', href: '#gallery', id: 'gallery' },
    { label: 'BLOG', href: '#blog', id: 'blog' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navigation"
      className={`sticky top-0 z-30 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#E2D7CA]/80 py-3'
          : 'bg-[#FAF7F2] py-4 md:py-5 border-b border-[#EDE4D8]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Elegant text-based logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#hero');
          }}
          className="group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C26D45]"
          id="brand-logo"
        >
          <div className="w-10 h-10 rounded-full bg-[#25140D] flex items-center justify-center text-[#EFE7DE] shadow-sm group-hover:bg-[#C26D45] transition-colors">
            <Coffee className="w-5 h-5 text-[#C69A58] group-hover:text-white transition-colors" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif tracking-[0.2em] text-lg sm:text-xl font-bold text-[#25140D] uppercase leading-tight">
              The Bean House
            </span>
            <span className="text-[10px] tracking-[0.3em] font-semibold text-[#5A3521]/80 uppercase">
              Coffee & More
            </span>
          </div>
        </a>

        {/* Center / Right: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold tracking-[0.15em] text-[#3E2114]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`relative py-1 transition-colors hover:text-[#C26D45] ${
                  isActive ? 'text-[#C26D45]' : 'text-[#3E2114]'
                }`}
                id={`nav-link-${link.id}`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C26D45] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button & Cart Trigger */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenOrder}
            className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#25140D] hover:bg-[#3E2114] text-[#FAF7F2] font-semibold text-xs tracking-[0.15em] uppercase transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98] border border-[#3E2114]"
            id="order-online-nav-btn"
          >
            <ShoppingBag className="w-4 h-4 text-[#C69A58]" />
            <span>Order Online</span>
            {cartCount > 0 && (
              <span className="ml-1 px-2 py-0.5 rounded-full bg-[#C26D45] text-white text-[11px] font-bold">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Cart Button */}
          <button
            onClick={onOpenOrder}
            className="sm:hidden p-2 rounded-full bg-[#25140D] text-[#FAF7F2] relative"
            aria-label="View Cart and Order"
            id="mobile-cart-btn"
          >
            <ShoppingBag className="w-4 h-4 text-[#C69A58]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#C26D45] text-white text-[10px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#25140D] hover:bg-[#EDE4D8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C26D45]"
            aria-label="Toggle navigation menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden bg-[#FAF7F2] border-b border-[#E2D7CA] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-3 duration-200"
        >
          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`text-sm font-semibold tracking-wider px-3 py-2.5 rounded-md transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#EDE4D8] text-[#C26D45] font-bold'
                    : 'text-[#25140D] hover:bg-[#F7F2EB]'
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-[#E2D7CA]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrder();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#25140D] text-[#FAF7F2] text-xs font-semibold tracking-widest uppercase shadow"
              >
                <ShoppingBag className="w-4 h-4 text-[#C69A58]" />
                <span>Order Online {cartCount > 0 ? `(${cartCount} items)` : ''}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
