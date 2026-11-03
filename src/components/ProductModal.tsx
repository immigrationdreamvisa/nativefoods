import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ShieldCheck, Sparkles, Scale, Info, ArrowRight } from 'lucide-react';
import { Product } from '../data/nativeData';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  currentLang: 'en' | 'pt';
  onNavigateToContact?: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  currentLang,
  onNavigateToContact
}) => {
  const [selectedSize, setSelectedSize] = React.useState<string>(
    product ? product.defaultSize : '500g Tub'
  );

  React.useEffect(() => {
    if (product) {
      setSelectedSize(product.defaultSize);
    }
  }, [product]);

  if (!product) return null;

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
          className="relative w-full max-w-4xl bg-[#FFFDF8] rounded-2xl shadow-2xl border border-[#171717]/10 overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#171717]/10 bg-[#FBF4D8]/80">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4F5CF5]">
              <Sparkles className="w-4 h-4" />
              <span>{currentLang === 'en' ? 'Product Dossier & Nutrition Profile' : 'Ficha Técnica & Perfil Nutricional'}</span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#171717] hover:bg-[#171717]/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
            
            {/* Top Product Hero Card */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Product Visual */}
              <div className="md:col-span-5 relative rounded-xl overflow-hidden aspect-4/3 bg-[#FBF4D8] border border-[#171717]/10">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.isZeroSugar && (
                  <span className="absolute top-3 left-3 px-3 py-1 bg-[#171717] text-[#FFFDF8] text-[10px] font-bold uppercase rounded-md shadow-xs">
                    Zero Sugar
                  </span>
                )}
                <div className="absolute bottom-3 right-3 bg-white/95 text-[#171717] text-xs font-bold px-3 py-1 rounded-md border border-[#171717]/10">
                  {product.calories} / 100g
                </div>
              </div>

              {/* Product Key Info & Specs */}
              <div className="md:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#777777] uppercase tracking-wider font-semibold mb-1">
                    <span>{product.id === 'pitaya-zero' ? 'Dragon Fruit' : 'Amazon Superfood'}</span>
                    <span>·</span>
                    <span className="text-[#4F5CF5]">100% Organic</span>
                  </div>

                  <h3 className="font-sans text-3xl sm:text-4xl font-bold text-[#171717] tracking-tight mb-2">
                    {currentLang === 'en' ? product.name : product.portugueseName}
                  </h3>

                  <p className="text-xs text-[#4F5CF5] font-semibold tracking-wide uppercase mb-3">
                    {product.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-[#171717]/80 leading-relaxed mb-4">
                    {product.description}
                  </p>

                  {/* Available Sizes Picker */}
                  <div className="mb-4">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-[#777777] block mb-1.5">
                      {currentLang === 'en' ? 'Available Sizes & Formats:' : 'Formatos Disponíveis:'}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((sz) => (
                        <button
                          key={sz}
                          onClick={() => setSelectedSize(sz)}
                          className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                            selectedSize === sz
                              ? 'bg-[#4F5CF5] text-[#FFFDF8] border-[#4F5CF5]'
                              : 'bg-[#FBF4D8]/50 text-[#171717] border-[#171717]/15 hover:border-[#4F5CF5]'
                          }`}
                        >
                          {sz}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {product.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-2 text-xs text-[#171717]/85">
                        <div className="w-4 h-4 rounded-full bg-[#4F5CF5]/10 text-[#4F5CF5] flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tasting Profile */}
                  <div className="p-3.5 rounded-xl bg-[#FBF4D8] border border-[#171717]/8 mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#777777] block mb-1">
                      {currentLang === 'en' ? 'Tasting Profile & Notes' : 'Perfil de Sabor e Notas'}:
                    </span>
                    <p className="text-xs text-[#171717] italic">
                      &ldquo;{product.tastingNotes}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Inquiry CTA */}
                <div className="pt-4 border-t border-[#171717]/10 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] text-[#777777] block">
                      {currentLang === 'en' ? 'Selected Specification:' : 'Formato Selecionado:'}
                    </span>
                    <span className="text-sm font-bold text-[#171717]">{selectedSize}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        if (onNavigateToContact) {
                          onNavigateToContact();
                        } else {
                          const el = document.getElementById('contact');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="px-5 py-2.5 bg-[#4F5CF5] hover:bg-[#3D4AE0] text-[#FFFDF8] rounded-xl text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-xs cursor-pointer"
                    >
                      <span>{currentLang === 'en' ? 'Inquire About This Blend' : 'Pedir Informações'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* Deep Breakdown: Nutrition Table & Ingredients */}
            <div className="pt-6 border-t border-[#171717]/10 grid grid-cols-1 md:grid-cols-12 gap-8">
              
              {/* Ingredients List */}
              <div className="md:col-span-5">
                <h4 className="font-sans text-lg font-bold text-[#171717] mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#4F5CF5]" />
                  <span>{currentLang === 'en' ? 'Ingredients & Sourcing' : 'Ingredientes & Origem'}</span>
                </h4>
                <ul className="space-y-1.5 text-xs text-[#171717]/80 mb-5">
                  {product.ingredients.map((ing) => (
                    <li key={ing} className="flex items-start gap-2">
                      <span className="text-[#4F5CF5] mt-1 font-bold">·</span>
                      <span>{ing}</span>
                    </li>
                  ))}
                </ul>

                <h5 className="font-sans text-base font-bold text-[#171717] mb-2 flex items-center gap-2">
                  <Info className="w-4 h-4 text-[#4F5CF5]" />
                  <span>{currentLang === 'en' ? 'Ideal Applications' : 'Aplicações Recomendadas'}</span>
                </h5>
                <ul className="space-y-1.5 text-xs text-[#777777]">
                  {product.idealFor.map((app) => (
                    <li key={app} className="flex items-start gap-2">
                      <span className="text-[#A6A9EE] mt-1">✔</span>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Verified Laboratory Nutrition Facts Table */}
              <div className="md:col-span-7">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-sans text-lg font-bold text-[#171717] flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[#4F5CF5]" />
                    <span>{currentLang === 'en' ? 'Nutrition Declaration (per 100g)' : 'Declaração Nutricional (por 100g)'}</span>
                  </h4>
                  <span className="text-[10px] uppercase font-bold text-[#777777]">EU Reg 1169/2011</span>
                </div>

                <div className="rounded-xl border border-[#171717]/15 bg-[#FFFDF8] overflow-hidden text-xs">
                  <div className="grid grid-cols-2 p-2.5 bg-[#FBF4D8] font-bold text-[#171717] border-b border-[#171717]/10">
                    <span>{currentLang === 'en' ? 'Parameter' : 'Parâmetro'}</span>
                    <span className="text-right">{currentLang === 'en' ? 'Average Quantity' : 'Quantidade Média'}</span>
                  </div>
                  
                  <div className="divide-y divide-[#171717]/8 text-[#171717]/85">
                    <div className="grid grid-cols-2 p-2 px-3">
                      <span>{currentLang === 'en' ? 'Energy Value' : 'Energia'}</span>
                      <span className="text-right font-semibold">{product.nutritionalTable.energy}</span>
                    </div>
                    <div className="grid grid-cols-2 p-2 px-3">
                      <span>{currentLang === 'en' ? 'Fat (Lipids)' : 'Lípidos'}</span>
                      <span className="text-right">{product.nutritionalTable.fat}</span>
                    </div>
                    <div className="grid grid-cols-2 p-2 px-3 pl-6 text-[#777777]">
                      <span>{currentLang === 'en' ? 'of which Saturates' : 'dos quais saturados'}</span>
                      <span className="text-right">{product.nutritionalTable.saturates}</span>
                    </div>
                    <div className="grid grid-cols-2 p-2 px-3">
                      <span>{currentLang === 'en' ? 'Carbohydrates' : 'Hidratos de Carbono'}</span>
                      <span className="text-right">{product.nutritionalTable.carbohydrates}</span>
                    </div>
                    <div className="grid grid-cols-2 p-2 px-3 pl-6 text-[#777777]">
                      <span>{currentLang === 'en' ? 'of which Sugars' : 'dos quais açúcares'}</span>
                      <span className="text-right">{product.nutritionalTable.sugars}</span>
                    </div>
                    <div className="grid grid-cols-2 p-2 px-3">
                      <span>{currentLang === 'en' ? 'Dietary Fiber' : 'Fibra Alimentar'}</span>
                      <span className="text-right">{product.nutritionalTable.fiber}</span>
                    </div>
                    <div className="grid grid-cols-2 p-2 px-3">
                      <span>{currentLang === 'en' ? 'Protein' : 'Proteínas'}</span>
                      <span className="text-right">{product.nutritionalTable.protein}</span>
                    </div>
                    <div className="grid grid-cols-2 p-2 px-3">
                      <span>{currentLang === 'en' ? 'Salt (Sodium x 2.5)' : 'Sal'}</span>
                      <span className="text-right">{product.nutritionalTable.salt}</span>
                    </div>
                    <div className="grid grid-cols-2 p-2 px-3 bg-[#4F5CF5]/5 font-semibold text-[#4F5CF5]">
                      <span>{currentLang === 'en' ? 'Anthocyanin Antioxidants' : 'Antioxidantes (Antocianinas)'}</span>
                      <span className="text-right">{product.nutritionalTable.antioxidants}</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Footer Bar */}
          <div className="px-6 py-3.5 border-t border-[#171717]/10 bg-[#FBF4D8] flex items-center justify-between text-xs text-[#777777]">
            <span>Native Foods Portugal · Organic Certified PT-BIO-03</span>
            <button
              onClick={onClose}
              className="text-xs font-bold text-[#171717] hover:text-[#4F5CF5] uppercase tracking-wider"
            >
              {currentLang === 'en' ? 'Close Window' : 'Fechar'}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
