import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PRODUCTS, Product } from '../data/nativeData';

interface HomeProductTabsProps {
  currentLang: 'en' | 'pt';
  onOpenProductModal: (product: Product) => void;
  onViewAllProducts: () => void;
}

export const HomeProductTabs: React.FC<HomeProductTabsProps> = ({
  currentLang,
  onOpenProductModal,
  onViewAllProducts,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'pure-acai' | 'zero-sugar' | 'exotic-blends'>('all');

  const tabs = [
    { 
      id: 'all', 
      label: currentLang === 'en' ? `All Blends (${PRODUCTS.length})` : `Todos (${PRODUCTS.length})` 
    },
    { 
      id: 'pure-acai', 
      label: currentLang === 'en' ? 'Pure Wild Açaí' : 'Açaí Selvagem' 
    },
    { 
      id: 'zero-sugar', 
      label: currentLang === 'en' ? 'Zero Sugar & Keto' : 'Zero Açúcar & Keto' 
    },
    { 
      id: 'exotic-blends', 
      label: currentLang === 'en' ? 'Exotic Superfruits' : 'Frutas Exóticas' 
    },
  ];

  const filtered = activeTab === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeTab);

  return (
    <section className="py-20 bg-[#FFFDF8] border-t border-b border-[#171717]/10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header with Title and View All Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#4F5CF5] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{currentLang === 'en' ? 'Featured Food Items' : 'Gama de Produtos em Destaque'}</span>
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-[#171717] tracking-tight">
              {currentLang === 'en' ? 'Pure Wild Amazonian Blends' : 'Preparados Puros da Amazónia'}
            </h2>
          </div>

          <button
            type="button"
            onClick={onViewAllProducts}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4F5CF5] hover:text-[#3D4AE0] transition-colors cursor-pointer self-start md:self-end"
          >
            <span>{currentLang === 'en' ? `View All ${PRODUCTS.length} Blends` : `Ver Todos os ${PRODUCTS.length} Produtos`}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
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
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7"
          >
            {filtered.map((product) => {
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

        {/* Footer CTA Banner on Home */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={onViewAllProducts}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#171717] hover:bg-[#4F5CF5] text-[#FFFDF8] rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 shadow-sm cursor-pointer"
          >
            <span>{currentLang === 'en' ? `Explore Full Collection & Nutrition Dossiers (${PRODUCTS.length} Blends)` : `Explorar Gama Completa & Fichas Nutricionais (${PRODUCTS.length} Produtos)`}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

