import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Clock, ArrowUpRight, ChefHat, Sparkles } from 'lucide-react';
import { RECIPES, Recipe } from '../data/nativeData';

interface RecipeSectionProps {
  onOpenRecipeModal: (recipe: Recipe) => void;
  currentLang: 'en' | 'pt';
}

export const RecipeSection: React.FC<RecipeSectionProps> = ({
  onOpenRecipeModal,
  currentLang
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: currentLang === 'en' ? 'All Recipes (10)' : 'Todas as Receitas (10)' },
    { id: 'bowls', label: currentLang === 'en' ? 'Bowls & Breakfast' : 'Bowls & Pequeno-Almoço' },
    { id: 'smoothies', label: currentLang === 'en' ? 'Smoothies & Drinks' : 'Smoothies & Bebidas' },
    { id: 'baking', label: currentLang === 'en' ? 'Baking & Crepes' : 'Pastelaria & Crepes' },
    { id: 'treats', label: currentLang === 'en' ? 'Desserts & Gelato' : 'Sobremesas & Gelados' },
  ];

  const filteredRecipes = activeCategory === 'all'
    ? RECIPES
    : RECIPES.filter((r) => r.category === activeCategory);

  return (
    <section id="recipes" className="py-24 bg-[#FBF4D8] relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-[#171717]/10 pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#4F5CF5] mb-2">
              <span>{currentLang === 'en' ? 'Culinary Studio' : 'Estúdio Culinário'}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#777777]">{currentLang === 'en' ? '10 Delicious Creations' : '10 Criações Saudáveis'}</span>
            </div>
            <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold text-[#171717] tracking-tight">
              A Little Inspiration.
              <br />
              <span className="font-extrabold text-[#4F5CF5]">A Lot of Goodness.</span>
            </h2>
          </div>
          <p className="text-sm text-[#777777] max-w-md font-normal leading-relaxed">
            {currentLang === 'en'
              ? 'From quick morning antioxidant bowls to golden buckwheat crepes and fudgy açaí cookies—elevate your home and café menu with these simple, nutrient-dense recipes.'
              : 'Desde bowls matinais de antioxidantes a crepes de trigo sarraceno e cookies aveludadas de açaí—eleve a sua mesa com receitas simples e cheias de vitalidade.'}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#4F5CF5] text-[#FFFDF8] shadow-xs'
                  : 'bg-[#FFFDF8] text-[#171717]/80 hover:text-[#171717] border border-[#171717]/10 hover:border-[#4F5CF5]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Clean Unified Card Grid matching Image 1 & 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {filteredRecipes.map((recipe, index) => {
            return (
              <motion.article
                key={recipe.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
                onClick={() => onOpenRecipeModal(recipe)}
                className="group flex flex-col rounded-3xl bg-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 cursor-pointer border border-[#171717]/8 shadow-sm"
              >
                {/* Top Image Stage - Clean with soft rounded top */}
                <div className="relative aspect-square overflow-hidden bg-[#FBF4D8]/40">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                  />
                </div>

                {/* Clean Minimalist White Body matching Image 1 */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between bg-white">
                  {/* Recipe Title in Deep Forest Green */}
                  <div className="min-h-[56px] flex items-start">
                    <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#0D4738] tracking-tight leading-snug group-hover:text-[#063327] transition-colors">
                      {currentLang === 'en' ? recipe.title : recipe.portugueseTitle}
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
              </motion.article>
            );
          })}
        </div>

        {/* Chef Recipe Callout */}
        <div className="mt-16 text-center">
          <p className="text-xs uppercase tracking-widest font-bold text-[#777777] mb-2">
            Share Your Creations with Native Foods
          </p>
          <p className="font-sans text-xl font-bold text-[#171717]">
            Tag <span className="font-semibold text-[#4F5CF5]">@nativefoods.pt</span> on Instagram to be featured on our community feed.
          </p>
        </div>

      </div>
    </section>
  );
};
