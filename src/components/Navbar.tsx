import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Globe, ArrowUpRight
} from 'lucide-react';
import { Product } from '../data/nativeData';
import logoImg from '../assets/images/native_foods_logo_transparent.png';

export type NavPage = 'home' | 'products' | 'superfoods' | 'sustainability' | 'contact';

interface NavbarProps {
  currentLang: 'en' | 'pt';
  onToggleLang: () => void;
  activePage: NavPage;
  onNavigate: (page: NavPage) => void;
  onSelectProduct?: (product: Product) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onToggleLang,
  activePage,
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Optimized scroll detection with requestAnimationFrame and hysteresis to eliminate stutter
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setIsScrolled((prev) => {
            if (!prev && scrollY > 24) return true;
            if (prev && scrollY < 12) return false;
            return prev;
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: NavPage; name: string }[] = [
    {
      id: 'home',
      name: currentLang === 'en' ? 'Home' : 'Início',
    },
    {
      id: 'products',
      name: currentLang === 'en' ? 'Products' : 'Produtos',
    },
    {
      id: 'superfoods',
      name: currentLang === 'en' ? 'Superfoods' : 'Superalimentos',
    },
    {
      id: 'sustainability',
      name: currentLang === 'en' ? 'Sustainability' : 'Sustentabilidade',
    },
    {
      id: 'contact',
      name: currentLang === 'en' ? 'Contact' : 'Contacto',
    },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, page: NavPage) => {
    e.preventDefault();
    onNavigate(page);
  };

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 bg-[#FBF4D8] py-3.5 sm:py-4 transition-shadow duration-200 ${
        isScrolled
          ? 'shadow-md border-b border-[#171717]/12'
          : 'border-b border-[#171717]/8'
      }`}
      style={{ transform: 'translateZ(0)' }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
        
        {/* Zone 1: Native Foods Brand Logo (Consistently Big & Sharp, No Resizing Lag) */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="group flex items-center gap-3 whitespace-nowrap shrink-0 focus-visible:outline-[#4F5CF5] cursor-pointer py-0.5"
          aria-label="The Native Foods Company - Home"
        >
          <img
            src={logoImg}
            alt="The Native Foods Company"
            className="h-14 sm:h-16 lg:h-18 w-auto object-contain transition-transform duration-200 group-hover:scale-103"
          />
        </a>

        {/* Zone 2: Dedicated Navigation Links with Contact & Home */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-[#171717]">
          {navItems.map((item) => {
            const isActive = activePage === item.id;

            return (
              <div key={item.id} className="relative py-1.5">
                <a
                  href={`#/${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'text-[#4F5CF5] font-bold'
                      : 'text-[#171717]/80 hover:text-[#4F5CF5]'
                  }`}
                >
                  {item.name}
                </a>

                {/* Instant, lag-free active indicator */}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#4F5CF5] rounded-full" />
                )}
              </div>
            );
          })}
        </nav>

        {/* Zone 3: Actions (Language Selector & Direct Contact CTA) */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          {/* EN / PT Language Switcher */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[#171717]/15 hover:border-[#4F5CF5] text-xs font-bold text-[#171717] transition-all hover:bg-white shadow-xs cursor-pointer group"
            title={currentLang === 'en' ? 'Click to switch to Portuguese (Original)' : 'Clique para mudar para Inglês (English)'}
            aria-label="Toggle between English and Portuguese (Original)"
          >
            <Globe className="w-3.5 h-3.5 text-[#4F5CF5] transition-transform duration-300 group-hover:rotate-45" />
            <div className="flex items-center gap-1 font-sans">
              <span className={`transition-colors ${currentLang === 'en' ? 'text-[#4F5CF5] font-extrabold' : 'text-[#777777]'}`}>EN</span>
              <span className="text-[#171717]/30 text-[10px]">|</span>
              <span className={`transition-colors ${currentLang === 'pt' ? 'text-[#4F5CF5] font-extrabold' : 'text-[#777777]'}`}>PT</span>
            </div>
          </button>

          {/* Contact Button */}
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#4F5CF5] hover:bg-[#3D4AE0] text-[#FFFDF8] rounded-xl text-xs font-bold tracking-wide uppercase shadow-xs transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>{currentLang === 'en' ? 'Get In Touch' : 'Contacte-nos'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#171717] hover:bg-[#171717]/5 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FBF4D8] border-b border-[#171717]/10 px-6 py-6 shadow-lg animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-4 text-base font-semibold text-[#171717]">
            {navItems.map((link) => (
              <a
                key={link.id}
                href={`#/${link.id}`}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleNavClick(e, link.id);
                }}
                className={`py-2 border-b border-[#171717]/5 flex items-center justify-between cursor-pointer ${
                  activePage === link.id ? 'text-[#4F5CF5] font-bold' : 'hover:text-[#4F5CF5]'
                }`}
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-[#777777]" />
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  onToggleLang();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 border border-[#171717]/15 rounded-xl text-xs font-bold uppercase tracking-wider text-[#171717] bg-white cursor-pointer"
              >
                <Globe className="w-4 h-4 text-[#4F5CF5]" />
                <span>
                  {currentLang === 'en' ? 'Mudar para Português (Original)' : 'Switch to English'}
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('contact');
                }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#4F5CF5] text-[#FFFDF8] rounded-xl text-sm font-bold uppercase tracking-wider shadow-xs cursor-pointer"
              >
                <span>{currentLang === 'en' ? 'Contact Native Foods' : 'Falar com a Native Foods'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
