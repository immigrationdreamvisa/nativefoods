import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Compass, TreePine, Users, ShieldCheck, X } from 'lucide-react';
import { BRAND_VALUES } from '../data/nativeData';

interface BrandStorySectionProps {
  currentLang: 'en' | 'pt';
}

export const BrandStorySection: React.FC<BrandStorySectionProps> = ({ currentLang }) => {
  const [worldModalOpen, setWorldModalOpen] = useState(false);

  return (
    <section id="story" className="py-24 bg-[#FFFDF8] relative overflow-hidden scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Split Screen Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left Column: Editorial Headline & Brand Philosophy (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#4F5CF5] mb-3">
              <span>{currentLang === 'en' ? 'Our Philosophy' : 'A Nossa Filosofia'}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#777777]">Portugal & The Amazon</span>
            </div>

            <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold text-[#171717] tracking-tight leading-[1.04] mb-6">
              More Than Food.
              <br />
              <span className="font-extrabold text-[#4F5CF5]">It&apos;s a Way of Life.</span>
            </h2>

            <p className="text-base text-[#171717]/80 leading-relaxed font-normal mb-6">
              {currentLang === 'en'
                ? 'Native Foods was born in Portugal out of a deep reverence for the untamed power of nature. We believe that true wellness does not come from ultra-processed formulations, but from honoring the planet’s most pristine botanicals in their natural, uncompromised state.'
                : 'A Native Foods nasceu em Portugal com uma profunda paixão pelo poder genuíno da natureza. Acreditamos que o bem-estar autêntico não vem de fórmulas ultra-processadas, mas sim de respeitar os frutos mais puros do planeta no seu estado selvagem.'}
            </p>

            <p className="text-sm text-[#777777] leading-relaxed mb-8">
              {currentLang === 'en'
                ? 'Every scoop of our açaí is ethically harvested by traditional riverside families in the Amazon, directly protecting thousands of hectares of native canopy from industrial deforestation. By choosing Native Foods, you support honest sustainability with every single bowl.'
                : 'Cada colher do nosso açaí é colhida de forma justa por famílias ribeirinhas no Brasil, preservando diretamente hectares de floresta primária contra o desmatamento. Ao escolher a Native Foods, apoia a sustentabilidade real a cada refeição.'}
            </p>

            <div>
              <button
                onClick={() => setWorldModalOpen(true)}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#4F5CF5] hover:bg-[#3D4AE0] text-[#FFFDF8] rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
              >
                <span>{currentLang === 'en' ? 'Discover Our World' : 'Descubra o Nosso Mundo'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Split Visual (6 cols) */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Main Image */}
              <div className="aspect-4/3 rounded-2xl overflow-hidden border border-[#171717]/10 shadow-2xl bg-[#FBF4D8] relative group">
                <img
                  src="/src/assets/images/product_acai_original_1793423320516.jpg"
                  alt="Native Foods organic packaging and fresh açaí scoop on travertine stone"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#A6A9EE] block">Purity Without Compromise</span>
                    <p className="font-sans text-lg font-bold">Wild Amazon Açaí · Artisanal Standards</p>
                  </div>
                  <span className="px-3 py-1 bg-[#FFFDF8]/90 text-[#171717] text-[10px] font-bold uppercase rounded-md">
                    Vialonga · Portugal
                  </span>
                </div>
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -top-6 -left-6 bg-[#FFFDF8] border border-[#171717]/10 rounded-xl p-4 shadow-xl hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#4F5CF5]/10 flex items-center justify-center text-[#4F5CF5]">
                  <TreePine className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-[#777777]">Canopy Conservation</p>
                  <p className="font-sans text-2xl font-bold text-[#171717] leading-none">0% Deforestation</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-[#171717]/10">
          {BRAND_VALUES.map((pillar) => (
            <div
              key={pillar.number}
              className="p-6 rounded-2xl bg-[#FBF4D8]/60 border border-[#171717]/8 flex flex-col justify-between hover:bg-[#FBF4D8] transition-colors"
            >
              <div>
                <span className="font-sans text-3xl font-extrabold text-[#4F5CF5] block mb-3">
                  {pillar.number}
                </span>
                <h3 className="font-sans text-xl font-bold text-[#171717] mb-2">
                  {currentLang === 'en' ? pillar.title : pillar.portugueseTitle}
                </h3>
                <p className="text-xs text-[#171717]/75 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Discover Our World Modal */}
      <AnimatePresence>
        {worldModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setWorldModalOpen(false)}
              className="fixed inset-0 bg-[#171717]/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-[#FFFDF8] rounded-2xl shadow-2xl border border-[#171717]/10 p-6 sm:p-8 z-10 space-y-6"
            >
              <div className="flex items-center justify-between border-b border-[#171717]/10 pb-4">
                <div className="flex items-center gap-2">
                  <Compass className="w-5 h-5 text-[#4F5CF5]" />
                  <h3 className="font-sans text-2xl font-bold text-[#171717]">
                    {currentLang === 'en' ? 'The Native Foods Journey' : 'A Jornada Native Foods'}
                  </h3>
                </div>
                <button
                  onClick={() => setWorldModalOpen(false)}
                  className="p-1.5 rounded-lg text-[#171717]/70 hover:text-[#171717] hover:bg-[#171717]/5"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#171717]/80 leading-relaxed">
                <p>
                  <strong>Rooted in Portugal:</strong> The Native Foods Company was established in Portugal to provide European hospitality venues and wellness enthusiasts with genuine wild Amazonian superfoods. Unlike commercial syrups diluted with industrial fillers, our products honor the true consistency of wild fruit.
                </p>
                <p>
                  <strong>Biodiverse Harvesting:</strong> The açaí palm (<em>Euterpe oleracea</em>) grows naturally in the rich soils along the banks of the Amazon basin. Harvesters scale thirty-meter palms by hand, picking ripe bunches without machinery or forest clearance.
                </p>
                <p>
                  <strong>Cold Preservation Standard:</strong> Açaí begins to ferment within 48 hours of picking. Our extraction facility is strategically situated within river transport reach, allowing berries to be pulped and flash-frozen at -25°C immediately.
                </p>
              </div>

              <div className="pt-4 border-t border-[#171717]/10 flex justify-end">
                <button
                  onClick={() => setWorldModalOpen(false)}
                  className="px-6 py-2.5 bg-[#4F5CF5] hover:bg-[#3D4AE0] text-[#FFFDF8] text-xs font-bold uppercase tracking-wider rounded-xl transition-colors"
                >
                  {currentLang === 'en' ? 'Close Dossier' : 'Fechar'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
