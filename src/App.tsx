import React, { useState, useEffect } from 'react';
import { Navbar, NavPage } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProductCollection } from './components/ProductCollection';
import { HomeProductTabs } from './components/HomeProductTabs';
import { SuperfoodsSection } from './components/SuperfoodsSection';
import { SustainabilitySection } from './components/SustainabilitySection';
import { CommunityNewsletter } from './components/CommunityNewsletter';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { LegalModal } from './components/LegalModals';
import { Product, PRODUCTS } from './data/nativeData';
import { Sparkles, Leaf, ShieldCheck, ArrowRight } from 'lucide-react';

export default function App() {
  const [currentLang, setCurrentLang] = useState<'en' | 'pt'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('nativefoods_lang');
      if (saved === 'en' || saved === 'pt') return saved;
    }
    return 'en';
  });
  const [activePage, setActivePage] = useState<NavPage>('home');
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'cookies' | 'terms' | null>(null);
  const [isB2bInquiry, setIsB2bInquiry] = useState(false);

  // Synchronize activePage with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.replace('#/', '').replace('#', '').toLowerCase();
      if (['home', 'products', 'superfoods', 'sustainability', 'contact'].includes(rawHash)) {
        setActivePage((prev) => (prev === rawHash ? prev : rawHash as NavPage));
      } else if (!rawHash) {
        setActivePage((prev) => (prev === 'home' ? prev : 'home'));
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: NavPage) => {
    setActivePage(page);
    window.location.hash = `#/${page}`;
    window.scrollTo(0, 0);
  };

  const toggleLang = () => {
    setCurrentLang((prev) => {
      const next = prev === 'en' ? 'pt' : 'en';
      if (typeof window !== 'undefined') {
        localStorage.setItem('nativefoods_lang', next);
      }
      return next;
    });
  };

  const getPageTitle = (page: NavPage): string => {
    switch (page) {
      case 'home':
        return currentLang === 'en' ? 'Home' : 'Início';
      case 'products':
        return currentLang === 'en' ? 'Superfood Collection' : 'Gama de Superalimentos';
      case 'superfoods':
        return currentLang === 'en' ? 'Nutrition Science & Harvest' : 'Guia Nutricional & Colheita';
      case 'sustainability':
        return currentLang === 'en' ? 'Sustainability & Ethical Harvest' : 'Sustentabilidade & Compromisso';
      case 'contact':
        return currentLang === 'en' ? 'Contact & Portugal Hub' : 'Contacto & Sede Portugal';
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF4D8] text-[#171717] font-sans antialiased selection:bg-[#4F5CF5] selection:text-[#FFFDF8] flex flex-col justify-between">
      <div>
        {/* Sticky Dedicated Navigation with Contact & Home Buttons */}
        <Navbar
          currentLang={currentLang}
          onToggleLang={toggleLang}
          activePage={activePage}
          onNavigate={navigateTo}
          onSelectProduct={(product) => setActiveProduct(product)}
        />

        {/* Section Header / Breadcrumb for Dedicated Sub-pages */}
        {activePage !== 'home' && (
          <div className="bg-[#FFFDF8] border-b border-[#171717]/8 py-3.5 transition-all">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-[#777777]">
                <button
                  type="button"
                  onClick={() => navigateTo('home')}
                  className="hover:text-[#4F5CF5] transition-colors cursor-pointer"
                >
                  {currentLang === 'en' ? 'Home' : 'Início'}
                </button>
                <span className="text-[#171717]/30">/</span>
                <span className="font-bold text-[#171717]">{getPageTitle(activePage)}</span>
              </div>
              <span className="hidden sm:inline-block text-[11px] font-semibold text-[#4F5CF5] uppercase tracking-wider">
                The Native Foods Company · Portugal
              </span>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SPECIFIC SECTIONS: RENDERED AS OWN DEDICATED SECTIONS/VIEWS              */}
        {/* ========================================================================= */}
        <main className="min-h-[60vh]">
          {/* SECTION 1: HOME PAGE */}
          {activePage === 'home' && (
            <div>
              {/* Full-Width Editorial Hero */}
              <HeroSection
                currentLang={currentLang}
                onExploreProducts={() => navigateTo('products')}
                onExploreSuperfoods={() => navigateTo('superfoods')}
              />

              {/* Interactive Home Product Showcase with Tabs */}
              <HomeProductTabs
                currentLang={currentLang}
                onOpenProductModal={(product) => setActiveProduct(product)}
                onViewAllProducts={() => navigateTo('products')}
              />

              {/* Home Spotlight Row: Gateway to Dedicated Sections */}
              <section className="py-20 bg-[#FFFDF8] border-t border-b border-[#171717]/10">
                <div className="max-w-7xl mx-auto px-6 sm:px-8">
                  <div className="text-center max-w-2xl mx-auto mb-14">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4F5CF5] block mb-2">
                      {currentLang === 'en' ? 'Explore Native Foods' : 'Conheça a Native Foods'}
                    </span>
                    <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-[#171717]">
                      {currentLang === 'en' ? 'Wild Nutrition. Uncompromising Purity.' : 'Nutrição Selvagem. Pureza Absoluta.'}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Spotlight 1: Products */}
                    <div 
                      onClick={() => navigateTo('products')}
                      className="group p-8 rounded-2xl bg-[#FBF4D8]/60 hover:bg-[#FBF4D8] border border-[#171717]/10 hover:border-[#4F5CF5]/40 transition-all duration-300 cursor-pointer flex flex-col justify-between hover:shadow-lg hover:-translate-y-1"
                    >
                      <div>
                        <div className="w-12 h-12 rounded-xl bg-[#4F5CF5] text-[#FFFDF8] flex items-center justify-center mb-6 shadow-xs group-hover:scale-105 transition-transform">
                          <Sparkles className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#4F5CF5] block mb-1">
                          {currentLang === 'en' ? 'The Collection' : 'A Coleção'}
                        </span>
                        <h3 className="font-sans text-2xl font-bold text-[#171717] mb-3 group-hover:text-[#4F5CF5] transition-colors">
                          {currentLang === 'en' ? 'Pure Wild Amazon Blends' : 'Preparados Puros da Amazónia'}
                        </h3>
                        <p className="text-xs text-[#777777] leading-relaxed mb-6">
                          {currentLang === 'en'
                            ? `Discover our complete collection of ${PRODUCTS.length} organic superfood blends, artisan snacks, and nutrient-dense Amazonian purées.`
                            : `Descubra a nossa coleção completa de ${PRODUCTS.length} preparados biológicos de superalimentos, snacks artesanais e polpas puras da Amazónia.`}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4F5CF5] group-hover:translate-x-1 transition-transform">
                        <span>{currentLang === 'en' ? 'Explore Products' : 'Ver Coleção'}</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Spotlight 2: Superfoods */}
                    <div 
                      onClick={() => navigateTo('superfoods')}
                      className="group p-8 rounded-2xl bg-[#FBF4D8]/60 hover:bg-[#FBF4D8] border border-[#171717]/10 hover:border-[#4F5CF5]/40 transition-all duration-300 cursor-pointer flex flex-col justify-between hover:shadow-lg hover:-translate-y-1"
                    >
                      <div>
                        <div className="w-12 h-12 rounded-xl bg-[#171717] text-[#FFFDF8] flex items-center justify-center mb-6 shadow-xs group-hover:scale-105 transition-transform">
                          <Leaf className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#4F5CF5] block mb-1">
                          {currentLang === 'en' ? 'Nutrition Science' : 'Guia Nutricional'}
                        </span>
                        <h3 className="font-sans text-2xl font-bold text-[#171717] mb-3 group-hover:text-[#4F5CF5] transition-colors">
                          {currentLang === 'en' ? '10x Antioxidants & Omegas' : '10x Antioxidantes & Ómegas'}
                        </h3>
                        <p className="text-xs text-[#777777] leading-relaxed mb-6">
                          {currentLang === 'en'
                            ? 'Learn how authentic wild-harvested açaí delivers cellular protection, healthy plant fats, and zero synthetic syrups.'
                            : 'Conheça o poder dos antioxidantes naturais, ácidos gordos ómega 3-6-9 e a ausência total de aditivos artificiais.'}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4F5CF5] group-hover:translate-x-1 transition-transform">
                        <span>{currentLang === 'en' ? 'Discover Superfoods' : 'Saber Mais'}</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Spotlight 3: Sustainability */}
                    <div 
                      onClick={() => navigateTo('sustainability')}
                      className="group p-8 rounded-2xl bg-[#FBF4D8]/60 hover:bg-[#FBF4D8] border border-[#171717]/10 hover:border-[#4F5CF5]/40 transition-all duration-300 cursor-pointer flex flex-col justify-between hover:shadow-lg hover:-translate-y-1"
                    >
                      <div>
                        <div className="w-12 h-12 rounded-xl bg-[#4F5CF5] text-[#FFFDF8] flex items-center justify-center mb-6 shadow-xs group-hover:scale-105 transition-transform">
                          <ShieldCheck className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#4F5CF5] block mb-1">
                          {currentLang === 'en' ? 'Ecological Purity' : 'Compromisso Ecológico'}
                        </span>
                        <h3 className="font-sans text-2xl font-bold text-[#171717] mb-3 group-hover:text-[#4F5CF5] transition-colors">
                          {currentLang === 'en' ? '0% Deforestation & Ethical Trade' : 'Desmatamento Zero & Comércio Justo'}
                        </h3>
                        <p className="text-xs text-[#777777] leading-relaxed mb-6">
                          {currentLang === 'en'
                            ? 'Our direct contracts with 120+ ribeirinho families protect the natural floodplain canopy with 100% recyclable packaging.'
                            : 'Parcerias com mais de 120 famílias ribeirinhas no Pará e embalagens mono-material totalmente recicláveis.'}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4F5CF5] group-hover:translate-x-1 transition-transform">
                        <span>{currentLang === 'en' ? 'View Our Charter' : 'Ver Carta'}</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Community & Newsletter */}
              <CommunityNewsletter currentLang={currentLang} />

              {/* Home Bottom Invitation to Connect */}
              <div className="py-16 bg-[#FBF4D8] border-b border-[#171717]/10">
                <div className="max-w-4xl mx-auto px-6 text-center">
                  <h3 className="font-sans text-3xl sm:text-4xl font-bold text-[#171717] mb-3">
                    {currentLang === 'en' ? 'Have Questions or Partnership Inquiries?' : 'Tem Dúvidas ou Propostas de Parceria?'}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#777777] max-w-lg mx-auto mb-6">
                    {currentLang === 'en'
                      ? 'Our team in Portugal is always available to assist with product dossiers and technical inquiries.'
                      : 'A nossa equipa em Portugal está à sua inteira disposição para esclarecimentos técnicos e informações.'}
                  </p>
                  <button
                    type="button"
                    onClick={() => navigateTo('contact')}
                    className="px-8 py-3.5 bg-[#4F5CF5] hover:bg-[#3D4AE0] text-[#FFFDF8] rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 shadow-sm cursor-pointer"
                  >
                    {currentLang === 'en' ? 'Go to Contact Page' : 'Ir Para a Página de Contacto'}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* SECTION 2: DEDICATED PRODUCTS SECTION */}
          {activePage === 'products' && (
            <ProductCollection
              onOpenProductModal={(product) => setActiveProduct(product)}
              currentLang={currentLang}
              onContact={() => navigateTo('contact')}
            />
          )}

          {/* SECTION 3: DEDICATED SUPERFOODS SECTION */}
          {activePage === 'superfoods' && (
            <SuperfoodsSection
              currentLang={currentLang}
              onExploreNutrition={() => navigateTo('products')}
            />
          )}

          {/* SECTION 4: DEDICATED SUSTAINABILITY SECTION */}
          {activePage === 'sustainability' && (
            <SustainabilitySection
              currentLang={currentLang}
              onContact={() => navigateTo('contact')}
            />
          )}

          {/* SECTION 5: DEDICATED CONTACT SECTION */}
          {activePage === 'contact' && (
            <ContactSection
              currentLang={currentLang}
              initialEstablishment={isB2bInquiry}
            />
          )}
        </main>
      </div>

      {/* Premium Deep Charcoal Footer */}
      <Footer
        currentLang={currentLang}
        onOpenLegal={(type) => setLegalModalType(type)}
        onNavigate={navigateTo}
      />

      {/* Product Detail Modal */}
      <ProductModal
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
        currentLang={currentLang}
        onNavigateToContact={() => navigateTo('contact')}
      />

      {/* Legal Modals (Privacy, Cookies, Terms) */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
        currentLang={currentLang}
      />
    </div>
  );
}
