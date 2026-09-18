import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { MenuHighlights } from './components/MenuHighlights';
import { FullMenu } from './components/FullMenu';
import { VisitUs } from './components/VisitUs';
import { IndianCafeExperience } from './components/IndianCafeExperience';
import { Gallery } from './components/Gallery';
import { BlogSection } from './components/BlogSection';
import { OrderOnlineBanner } from './components/OrderOnlineBanner';
import { Footer } from './components/Footer';
import { OrderDrawer } from './components/OrderDrawer';
import { LightboxModal } from './components/LightboxModal';
import { InfoModal } from './components/InfoModal';
import { MenuItem, CartItem, GalleryItem, FeatureCard, BlogPost } from './types';
import { GALLERY_ITEMS } from './data/cafeData';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Lightbox state
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  // Info Modal state (Why Choose Us & Blog)
  const [selectedCard, setSelectedCard] = useState<FeatureCard | null>(null);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  // Cart operations
  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.item.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.item.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.item.id === itemId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setCart((prev) => prev.filter((i) => i.item.id !== itemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Scroll tracking for active navigation highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'menu', 'gallery', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Lightbox handlers
  const handleOpenLightbox = (item: GalleryItem, index: number) => {
    setCurrentGalleryIndex(index);
    setIsLightboxOpen(true);
  };

  const handlePrevLightbox = () => {
    setCurrentGalleryIndex((prev) => (prev > 0 ? prev - 1 : GALLERY_ITEMS.length - 1));
  };

  const handleNextLightbox = () => {
    setCurrentGalleryIndex((prev) => (prev < GALLERY_ITEMS.length - 1 ? prev + 1 : 0));
  };

  // Info Modal handlers
  const handleOpenLearnMore = (card: FeatureCard) => {
    setSelectedCard(card);
    setSelectedBlog(null);
    setIsInfoModalOpen(true);
  };

  const handleOpenBlogStory = (blog: BlogPost) => {
    setSelectedBlog(blog);
    setSelectedCard(null);
    setIsInfoModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#25140D] font-sans">
      {/* 1. Top Announcement Bar */}
      <TopBar />

      {/* 2. Sticky Navigation Bar */}
      <Navbar
        cartCount={cartCount}
        onOpenOrder={() => setIsOrderDrawerOpen(true)}
        activeSection={activeSection}
      />

      <main className="flex-1">
        {/* 3. Hero Section */}
        <Hero
          onViewMenu={() => scrollToSection('#highlights')}
          onOrderOnline={() => setIsOrderDrawerOpen(true)}
        />

        {/* 4. Why Choose Us Section */}
        <WhyChooseUs onLearnMore={handleOpenLearnMore} />

        {/* 5. Menu Highlights Section */}
        <MenuHighlights
          onAddToCart={handleAddToCart}
          onViewFullMenu={() => scrollToSection('#menu')}
        />

        {/* 6. Indian Café Experience Storytelling */}
        <IndianCafeExperience />

        {/* 7. Full Interactive Menu Categories */}
        <FullMenu
          onAddToCart={handleAddToCart}
          cartItemIds={cart.map((i) => i.item.id)}
        />

        {/* 8. Visit Us Split Section (Collage & Details) */}
        <VisitUs />

        {/* 9. Image Gallery with Lightbox */}
        <Gallery onOpenLightbox={handleOpenLightbox} />

        {/* 10. Stories / Blog Section */}
        <BlogSection onSelectPost={handleOpenBlogStory} />

        {/* 11. Order Online Banner */}
        <OrderOnlineBanner
          onOrderOnline={() => setIsOrderDrawerOpen(true)}
          onViewMenu={() => scrollToSection('#menu')}
        />
      </main>

      {/* 12. Footer with Newsletter & Contacts */}
      <Footer
        onNavClick={scrollToSection}
        onFilterCategory={() => scrollToSection('#menu')}
      />

      {/* Interactive Drawers & Modals */}
      <OrderDrawer
        isOpen={isOrderDrawerOpen}
        onClose={() => setIsOrderDrawerOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onExploreMenu={() => {
          setIsOrderDrawerOpen(false);
          scrollToSection('#menu');
        }}
      />

      <LightboxModal
        isOpen={isLightboxOpen}
        item={GALLERY_ITEMS[currentGalleryIndex] || null}
        currentIndex={currentGalleryIndex}
        totalItems={GALLERY_ITEMS.length}
        onClose={() => setIsLightboxOpen(false)}
        onPrev={handlePrevLightbox}
        onNext={handleNextLightbox}
      />

      <InfoModal
        isOpen={isInfoModalOpen}
        onClose={() => setIsInfoModalOpen(false)}
        cardData={selectedCard}
        blogData={selectedBlog}
      />
    </div>
  );
}
