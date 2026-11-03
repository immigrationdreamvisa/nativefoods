import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';

interface HeroSectionProps {
  currentLang: 'en' | 'pt';
  onExploreProducts?: () => void;
  onExploreSuperfoods?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  currentLang,
  onExploreProducts,
  onExploreSuperfoods
}) => {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-12 sm:pt-16 pb-16 overflow-hidden bg-[#FBF4D8]">
      {/* Subtle organic ambient circles */}
      <div className="absolute top-10 right-0 w-[550px] h-[550px] bg-[#A6A9EE]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-[-10%] w-[450px] h-[450px] bg-[#4F5CF5]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Headline & Narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Editorial Kicker */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#4F5CF5] mb-5"
            >
              <span>{currentLang === 'en' ? 'Authentic Wild Amazon Superfoods' : 'Superalimentos Selvagens da Amazónia'}</span>
              <span aria-hidden="true" className="text-[#A6A9EE]">·</span>
              <span className="text-[#171717]/70">Portugal</span>
            </motion.div>

            {/* Editorial Headline with Word-by-Word Animation */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.98] font-bold tracking-tight text-[#171717] mb-6 text-balance"
            >
              {currentLang === 'en' ? (
                <>
                  Nature&apos;s Goodness.
                  <br />
                  <span className="font-extrabold text-[#4F5CF5]">Made to Inspire.</span>
                </>
              ) : (
                <>
                  A Bondade da Natureza.
                  <br />
                  <span className="font-extrabold text-[#4F5CF5]">Feita Para Inspirar.</span>
                </>
              )}
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-[#171717]/80 max-w-xl font-normal leading-relaxed mb-8"
            >
              {currentLang === 'en'
                ? 'Harvested from wild açaí palms in the Amazon floodplain basin and cold-preserved to lock in vitality. Pure, nutrient-dense organic superfoods crafted for energetic breakfasts, vibrant smoothie bowls, and gourmet culinary creations.'
                : 'Colhido de palmeiras selvagens nas várzeas da Amazónia e preservado a frio para manter a vitalidade intacta. Superalimentos biológicos puros e ricos em nutrientes para pequenos-almoços cheios de energia, bowls vibrantes e criações gourmet.'}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <button
                type="button"
                onClick={() => {
                  if (onExploreProducts) onExploreProducts();
                  else {
                    const el = document.getElementById('products');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[#4F5CF5] hover:bg-[#3D4AE0] text-[#FFFDF8] rounded-xl text-sm font-bold tracking-wide uppercase shadow-sm transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                {currentLang === 'en' ? 'Explore Our Products' : 'Explorar Produtos'}
              </button>
              <button
                type="button"
                onClick={() => {
                  if (onExploreSuperfoods) onExploreSuperfoods();
                  else {
                    const el = document.getElementById('superfoods');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center justify-center px-7 py-3.5 border border-[#171717]/20 hover:border-[#171717] bg-[#FFFDF8]/80 hover:bg-[#FFFDF8] text-[#171717] rounded-xl text-sm font-bold tracking-wide uppercase transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                {currentLang === 'en' ? 'Superfood Benefits' : 'Benefícios dos Superalimentos'}
              </button>
            </motion.div>

            {/* Trust Signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center gap-6 sm:gap-8 pt-6 border-t border-[#171717]/10 text-xs text-[#171717]/80 font-medium"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#4F5CF5] shrink-0" />
                <span>100% Wild Amazon Harvest</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#4F5CF5] shrink-0" />
                <span>Cold-Chain Nutrient Lock</span>
              </div>
              <div className="flex items-center gap-2 hidden sm:flex">
                <HeartHandshake className="w-4 h-4 text-[#4F5CF5] shrink-0" />
                <span>Fair Trade Ribeirinho Support</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual Asset & Floating Cards (5 cols) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#171717]/10 bg-[#FFFDF8]"
            >
              {/* Main Bowl Image */}
              <div className="aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 relative overflow-hidden group">
                <img
                  src="/src/assets/images/hero_custom_banner.jpg"
                  alt="Native Açaí with Banana tub on wooden board with fresh bananas and nuts"
                  fetchPriority="high"
                  decoding="sync"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />
                
                {/* Floating caption overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-[#FFFDF8] flex items-center justify-between text-xs">
                  <div>
                    <p className="font-sans text-lg font-bold leading-tight">
                      {currentLang === 'en' ? 'Native Acai with Banana' : 'Açaí Native com Banana'}
                    </p>
                    <p className="text-white/80 text-[11px]">
                      {currentLang === 'en' ? 'Organic Amazon Harvest · Ready to Scoop' : 'Colheita Biológica da Amazónia · Pronto a Servir'}
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-[#4F5CF5] text-[10px] font-bold tracking-wider uppercase">
                    100% Organic
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Floating Editorial Badge (Top Right) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="absolute -top-6 -right-4 sm:-right-6 bg-[#FFFDF8] border border-[#171717]/10 rounded-xl p-3.5 shadow-lg hidden sm:flex items-center gap-3 backdrop-blur-sm"
            >
              <div className="w-9 h-9 rounded-lg bg-[#4F5CF5]/10 flex items-center justify-center text-[#4F5CF5]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#777777]">Antioxidant Power</p>
                <p className="text-xs font-bold text-[#171717]">2,800+ ORAC / 100g</p>
              </div>
            </motion.div>

            {/* Floating Badge (Bottom Left) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="absolute -bottom-6 -left-4 sm:-left-6 bg-[#FFFDF8] border border-[#171717]/10 rounded-xl p-3.5 shadow-lg flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-[#FBF4D8] flex items-center justify-center text-[#171717]">
                <span className="font-sans font-bold text-lg">0%</span>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#777777]">Purity Guarantee</p>
                <p className="text-xs font-bold text-[#171717]">Zero Preservatives or Dyes</p>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 sm:mt-18 flex justify-center">
          <a
            href="#products"
            className="flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-[#777777] hover:text-[#4F5CF5] transition-colors"
          >
            <span>{currentLang === 'en' ? 'Scroll to explore' : 'Deslize para explorar'}</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-[#4F5CF5]" />
          </a>
        </div>
      </div>
    </section>
  );
};
