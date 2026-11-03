import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { PRODUCTS, Product } from '../data/nativeData';

interface ProductCollectionProps {
  onOpenProductModal: (product: Product) => void;
  currentLang: 'en' | 'pt';
  onContact?: () => void;
  initialCategory?: 'all' | 'pure-acai' | 'zero-sugar' | 'exotic-blends';
}

export const ProductCollection: React.FC<ProductCollectionProps> = ({
  onOpenProductModal,
  currentLang,
  onContact,
  initialCategory = 'all'
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'pure-acai' | 'zero-sugar' | 'exotic-blends'>(initialCategory);

  const categoryTabs = [
    { 
      id: 'all', 
      label: currentLang === 'en' ? `All Blends (${PRODUCTS.length})` : `Todos os Produtos (${PRODUCTS.length})` 
    },
    { 
      id: 'pure-acai', 
      label: currentLang === 'en' ? 'Pure Wild Açaí' : 'Açaí Selvagem Puro' 
    },
    { 
      id: 'zero-sugar', 
      label: currentLang === 'en' ? 'Zero Sugar & Keto' : 'Zero Açúcar & Keto' 
    },
    { 
      id: 'exotic-blends', 
      label: currentLang === 'en' ? 'Exotic Superfruits' : 'Gama Tropical & Frutas' 
    },
  ];

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-20 sm:py-24 bg-[#FFFDF8] relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-[#171717]/10 pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#4F5CF5] mb-2">
              <span>{currentLang === 'en' ? 'The Collection' : 'A Coleção'}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#777777]">{currentLang === 'en' ? `${PRODUCTS.length} Organic Pure Superfoods` : `${PRODUCTS.length} Superalimentos Biológicos Puros`}</span>
            </div>
            <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold text-[#171717] tracking-tight">
              Goodness in Every Scoop.
            </h2>
          </div>
          <p className="text-sm text-[#777777] max-w-md font-normal leading-relaxed">
            {currentLang === 'en'
              ? `Hand-harvested in the Amazonian várzeas and gently cold-processed. Discover our ${PRODUCTS.length} distinct wild superfood blends and delicacies formulated for cellular vitality and irresistible velvety texture.`
              : `Colhido à mão nas várzeas da Amazónia e delicadamente processado a frio. Descubra os nossos ${PRODUCTS.length} preparados exclusivos e delícias formulados para máxima nutrição e textura aveludada.`}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categoryTabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id as typeof activeCategory)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#4F5CF5] text-[#FFFDF8] shadow-sm shadow-[#4F5CF5]/25 scale-102'
                    : 'bg-[#FBF4D8]/60 hover:bg-[#FBF4D8] text-[#171717]/80 hover:text-[#171717] border border-[#171717]/10'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7"
          >
            {filteredProducts.map((product) => {
              return (
                <div
                  key={product.id}
                  onClick={() => onOpenProductModal(product)}
                  className="group flex flex-col rounded-3xl bg-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 cursor-pointer border border-[#171717]/8 shadow-sm"
                >
                  {/* Top Image Stage - Clean without badges or overlays */}
                  <div className="relative aspect-square overflow-hidden bg-[#FBF4D8]/40">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                    />
                  </div>

                  {/* Clean Minimalist White Body */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between bg-white">
                    {/* Product Title in Deep Forest Green */}
                    <div className="min-h-[56px] flex items-start">
                      <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#0D4738] tracking-tight leading-snug group-hover:text-[#063327] transition-colors">
                        {currentLang === 'en' ? product.name : product.portugueseName}
                      </h3>
                    </div>

                    {/* Centered Read More Action in Rust / Terracotta */}
                    <div className="mt-8 flex justify-center">
                      <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#B84323] group-hover:text-[#933418] transition-colors">
                        <span>{currentLang === 'en' ? 'READ MORE' : 'SABER MAIS'}</span>
                        <span className="text-base font-bold transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Guarantee Banner */}
        <div className="mt-16 p-6 rounded-2xl bg-[#FBF4D8] border border-[#171717]/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#4F5CF5] text-[#FFFDF8] flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <p className="font-sans text-xl font-bold text-[#171717]">
                {currentLang === 'en' ? 'Pure Amazonian Quality, Guaranteed' : 'Qualidade Amazónica Pura Garantida'}
              </p>
              <p className="text-xs text-[#777777]">
                {currentLang === 'en'
                  ? 'All 8 superfood blends are wild-harvested, flash-frozen at the source, and 100% certified organic. Have questions or custom requests?'
                  : 'Todos os 8 preparados são colhidos na natureza, congelados na origem e 100% certificados biológicos. Tem dúvidas ou pedidos personalizados?'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              if (onContact) onContact();
              else {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-6 py-3 bg-[#171717] hover:bg-[#4F5CF5] text-[#FFFDF8] text-xs font-bold uppercase tracking-wider rounded-xl transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            {currentLang === 'en' ? 'Get In Touch' : 'Contacte-nos'}
          </button>
        </div>

      </div>
    </section>
  );
};
