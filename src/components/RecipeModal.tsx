import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Clock, ChefHat, Flame, Check, Sparkles, Share2, Printer } from 'lucide-react';
import { Recipe } from '../data/nativeData';

interface RecipeModalProps {
  recipe: Recipe | null;
  onClose: () => void;
  currentLang: 'en' | 'pt';
}

export const RecipeModal: React.FC<RecipeModalProps> = ({
  recipe,
  onClose,
  currentLang
}) => {
  // Track checked ingredients
  const [checkedIngredients, setCheckedIngredients] = useState<{ [key: number]: boolean }>({});
  const [copied, setCopied] = useState(false);

  React.useEffect(() => {
    setCheckedIngredients({});
  }, [recipe]);

  if (!recipe) return null;

  const toggleIngredient = (idx: number) => {
    setCheckedIngredients((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#171717]/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl bg-[#FFFDF8] rounded-2xl shadow-2xl border border-[#171717]/10 overflow-hidden z-10 max-h-[92vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#171717]/10 bg-[#FBF4D8]/60">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-bold tracking-widest text-[#4F5CF5]">
                {currentLang === 'en' ? 'Kitchen Inspiration' : 'Receita da Casa'}
              </span>
              <span className="text-[#171717]/30">·</span>
              <span className="text-xs text-[#777777] capitalize">{recipe.category}</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="p-1.5 rounded-lg text-[#171717]/70 hover:text-[#4F5CF5] hover:bg-[#171717]/5 transition-colors"
                title="Copy link"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <button
                onClick={handlePrint}
                className="p-1.5 rounded-lg text-[#171717]/70 hover:text-[#4F5CF5] hover:bg-[#171717]/5 transition-colors hidden sm:block"
                title="Print recipe"
              >
                <Printer className="w-4 h-4" />
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-[#171717]/70 hover:text-[#171717] hover:bg-[#171717]/5 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {copied && (
            <div className="bg-[#4F5CF5] text-[#FFFDF8] text-center text-xs py-1.5 font-semibold">
              Link copied to clipboard!
            </div>
          )}

          {/* Body */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
            
            {/* Visual Hero & Metadata Strip */}
            <div className="relative rounded-xl overflow-hidden aspect-16/9 bg-[#FBF4D8] border border-[#171717]/10">
              <img
                src={recipe.image}
                alt={recipe.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-sans text-2xl sm:text-4xl font-bold leading-tight">
                  {currentLang === 'en' ? recipe.title : recipe.portugueseTitle}
                </h3>
                <p className="text-xs sm:text-sm text-white/80 mt-1 max-w-xl">
                  {recipe.summary}
                </p>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-4 gap-2 p-3 bg-[#FBF4D8] rounded-xl border border-[#171717]/10 text-center">
              <div>
                <span className="text-[10px] uppercase font-bold text-[#777777] block">Prep Time</span>
                <span className="text-xs font-bold text-[#171717] flex items-center justify-center gap-1 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-[#4F5CF5]" />
                  {recipe.prepTime}
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-[#777777] block">Difficulty</span>
                <span className="text-xs font-bold text-[#171717] flex items-center justify-center gap-1 mt-0.5">
                  <ChefHat className="w-3.5 h-3.5 text-[#4F5CF5]" />
                  {recipe.difficulty}
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-[#777777] block">Servings</span>
                <span className="text-xs font-bold text-[#171717] mt-0.5 block">
                  {recipe.servings}
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-[#777777] block">Nutritional</span>
                <span className="text-xs font-bold text-[#171717] flex items-center justify-center gap-1 mt-0.5">
                  <Flame className="w-3.5 h-3.5 text-[#4F5CF5]" />
                  {recipe.calories}
                </span>
              </div>
            </div>

            {/* Two Column: Ingredients Checklist + Step by Step Instructions */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-2">
              
              {/* Ingredients Checklist (5 cols) */}
              <div className="md:col-span-5 bg-[#FBF4D8]/50 p-5 rounded-xl border border-[#171717]/8">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-sans text-lg font-bold text-[#171717]">
                    {currentLang === 'en' ? 'Ingredients' : 'Ingredientes'}
                  </h4>
                  <span className="text-[11px] text-[#777777]">
                    {Object.values(checkedIngredients).filter(Boolean).length}/{recipe.ingredients.length}
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {recipe.ingredients.map((ing, idx) => {
                    const isChecked = !!checkedIngredients[idx];
                    return (
                      <li
                        key={idx}
                        onClick={() => toggleIngredient(idx)}
                        className="flex items-start gap-2.5 cursor-pointer text-xs group"
                      >
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center mt-0.5 shrink-0 transition-colors ${
                            isChecked
                              ? 'bg-[#4F5CF5] border-[#4F5CF5] text-white'
                              : 'border-[#171717]/30 group-hover:border-[#4F5CF5]'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3" />}
                        </div>
                        <span
                          className={`transition-colors ${
                            isChecked ? 'line-through text-[#777777]' : 'text-[#171717]'
                          }`}
                        >
                          {ing}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Instructions (7 cols) */}
              <div className="md:col-span-7 space-y-4">
                <h4 className="font-sans text-lg font-bold text-[#171717]">
                  {currentLang === 'en' ? 'Preparation Steps' : 'Modo de Preparação'}
                </h4>
                <ol className="space-y-3">
                  {recipe.instructions.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs leading-relaxed">
                      <span className="w-5 h-5 rounded-full bg-[#4F5CF5] text-[#FFFDF8] text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-[#171717]/85 pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>

                {/* Chef Pro Tip */}
                <div className="p-4 rounded-xl bg-[#FFFDF8] border border-[#4F5CF5]/20 flex items-start gap-3 mt-4">
                  <Sparkles className="w-4 h-4 text-[#4F5CF5] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#4F5CF5] block mb-0.5">
                      {currentLang === 'en' ? "Native Chef's Secret" : 'Segredo do Chef Native'}
                    </span>
                    <p className="text-xs text-[#171717] italic">
                      &ldquo;{recipe.proTip}&rdquo;
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Footer Action */}
          <div className="p-4 border-t border-[#171717]/10 bg-[#FBF4D8]/50 flex items-center justify-between">
            <span className="text-xs text-[#777777]">
              Crafted with authentic Portuguese love for pure superfoods.
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 bg-[#171717] hover:bg-[#4F5CF5] text-[#FFFDF8] rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Close Recipe
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
