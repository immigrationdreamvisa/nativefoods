import React from 'react';
import { Instagram, Linkedin, Facebook, MapPin, Mail, Phone, ChevronUp } from 'lucide-react';
import logoWhiteImg from '../assets/images/native_foods_logo_white.png';

interface FooterProps {
  currentLang: 'en' | 'pt';
  onOpenLegal: (type: 'privacy' | 'cookies' | 'terms') => void;
  onNavigate?: (page: 'home' | 'products' | 'superfoods' | 'sustainability' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onOpenLegal, onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#484B54] text-white pt-16 pb-10 mt-10">
      
      {/* Top Center Curve Wave with Scroll to Top */}
      <div className="absolute -top-[27px] left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-10">
        <svg
          className="w-36 h-7 text-[#484B54]"
          viewBox="0 0 144 28"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 28 C40 28 45 0 72 0 C99 0 104 28 144 28 Z"
            fill="currentColor"
          />
        </svg>
        <button
          type="button"
          onClick={scrollToTop}
          className="absolute top-1 w-8 h-8 rounded-full bg-[#393C44] hover:bg-[#2D3036] text-white/90 hover:text-white flex items-center justify-center transition-colors shadow-md pointer-events-auto cursor-pointer"
          aria-label="Scroll to top"
          title={currentLang === 'en' ? 'Back to top' : 'Voltar ao topo'}
        >
          <ChevronUp className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Main 4-Column Footer Grid matching the screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-0 pb-12">
          
          {/* Column 1: Brand Logo & Company Description (4 cols) */}
          <div className="lg:col-span-4 pr-0 lg:pr-8 space-y-4">
            <div>
              <img
                src={logoWhiteImg}
                alt="The Native Foods Company"
                className="h-14 sm:h-16 w-auto object-contain -ml-1 mb-1"
              />
            </div>

            <p className="text-xs sm:text-[13px] text-white/85 leading-relaxed font-sans max-w-sm">
              {currentLang === 'en'
                ? 'The Native Food Company provides the national and international market with frozen fruit solutions. We sell our products directly in Moderna Distribuição and Cash & Carry. In the retail and hotel and catering industries, we operate via distributors.'
                : 'A The Native Food Company fornece o mercado nacional e internacional com soluções de fruta congelada. Comercializamos os nossos produtos diretamente na Moderna Distribuição e Cash & Carry. No canal retalho e hotelaria/restauração operamos via distribuidores.'}
            </p>
          </div>

          {/* Column 2: Contacts (3.5 cols) with vertical line divider on BOTH sides matching Image 5 */}
          <div className="lg:col-span-3 lg:border-l lg:border-r border-white/25 px-0 lg:px-8 space-y-4">
            <h4 className="text-lg sm:text-xl font-bold font-sans text-white tracking-tight">
              {currentLang === 'en' ? 'Contacts' : 'Contactos'}
            </h4>
            
            <div className="space-y-4 text-xs sm:text-[13px] text-white/90 font-sans">
              
              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div>
                  <a
                    href="tel:+351217541578"
                    className="hover:text-white/80 font-medium text-white transition-colors block leading-tight text-xs sm:text-[13px]"
                  >
                    (+351) 217 541 578
                  </a>
                  <span className="text-[11px] text-white/70 block mt-0.5">
                    {currentLang === 'en' ? '(Landline local call)' : '(Chamada para a rede fixa nacional)'}
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white shrink-0" />
                <a
                  href="mailto:info@nativefoods.pt"
                  className="hover:text-white/80 text-white transition-colors text-xs sm:text-[13px]"
                >
                  info@nativefoods.pt
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span className="leading-snug text-white/90 text-xs sm:text-[13px]">
                  Rua Quinta dos Álamos,
                  <br />
                  10 - 2625-577 Vialonga
                  <br />
                  Portugal
                </span>
              </div>

            </div>
          </div>

          {/* Column 3: Legal Information (2.5 cols) */}
          <div className="lg:col-span-2 pl-0 lg:pl-8 space-y-4">
            <h4 className="text-lg sm:text-xl font-bold font-sans text-white tracking-tight">
              {currentLang === 'en' ? 'Legal Information' : 'Informação Legal'}
            </h4>
            
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-white/85 font-sans">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {currentLang === 'en' ? 'Privacy Policy' : 'Política de Privacidade'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('cookies')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {currentLang === 'en' ? 'Cookies Policy' : 'Política de Cookies'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {currentLang === 'en' ? 'Terms and Conditions' : 'Termos e Condições'}
                </button>
              </li>
              <li>
                <a
                  href="https://www.livroreclamacoes.pt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors cursor-pointer block text-left"
                >
                  {currentLang === 'en' ? 'Complaints Book' : 'Livro de Reclamações'}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Useful links (2.5 cols) with vertical line divider matching Image 7 */}
          <div className="lg:col-span-3 pl-0 lg:pl-8 border-l-0 lg:border-l border-white/25 space-y-4">
            <h4 className="text-lg sm:text-xl font-bold font-sans text-white tracking-tight">
              {currentLang === 'en' ? 'Useful links' : 'Links úteis'}
            </h4>
            
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-white/85 font-sans">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate ? onNavigate('home') : window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  The Native Foods Company
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate ? onNavigate('superfoods') : null}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate ? onNavigate('sustainability') : null}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {currentLang === 'en' ? 'Food Quality and Safety Policy' : 'Política de Qualidade e Segurança Alimentar'}
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Follow Us with clean circular social icons */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs text-white/85 font-medium">
              {currentLang === 'en' ? 'Follow Us' : 'Siga-nos'}
            </span>
            <div className="flex items-center gap-2">
              <a
                href="https://www.facebook.com/nativefoods.pt"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full bg-white text-[#484B54] flex items-center justify-center hover:opacity-90 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5 fill-current" />
              </a>
              <a
                href="https://www.instagram.com/nativefoods.pt"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full bg-white text-[#484B54] flex items-center justify-center hover:opacity-90 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.linkedin.com/company/nativefoods"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full bg-white text-[#484B54] flex items-center justify-center hover:opacity-90 transition-opacity"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5 fill-current" />
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-[11px] text-white/70">
              © {new Date().getFullYear()} The Native Foods Company®.
            </div>
            {/* Security badge matching Image 7 */}
            <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 rounded-sm bg-white/10 text-[9px] text-white/70 border border-white/15">
              <svg className="w-3.5 h-3.5 text-blue-300 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>reCAPTCHA Privacy · Terms</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
