import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Shield, FileText, Cookie } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'cookies' | 'terms' | null;
  onClose: () => void;
  currentLang: 'en' | 'pt';
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose, currentLang }) => {
  if (!type) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#171717]/60 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          className="relative w-full max-w-2xl bg-[#FFFDF8] rounded-2xl shadow-2xl border border-[#171717]/10 p-6 sm:p-8 z-10 max-h-[85vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#171717]/10">
            <div className="flex items-center gap-2.5">
              {type === 'privacy' && <Shield className="w-5 h-5 text-[#4F5CF5]" />}
              {type === 'cookies' && <Cookie className="w-5 h-5 text-[#4F5CF5]" />}
              {type === 'terms' && <FileText className="w-5 h-5 text-[#4F5CF5]" />}
              <h3 className="font-sans text-2xl font-bold text-[#171717]">
                {type === 'privacy' && (currentLang === 'en' ? 'Privacy Policy' : 'Política de Privacidade')}
                {type === 'cookies' && (currentLang === 'en' ? 'Cookies Policy' : 'Política de Cookies')}
                {type === 'terms' && (currentLang === 'en' ? 'Terms & Conditions' : 'Termos e Condições')}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#171717]/70 hover:text-[#171717] hover:bg-[#171717]/5"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="overflow-y-auto py-4 text-xs sm:text-sm text-[#171717]/80 leading-relaxed space-y-4">
            {type === 'privacy' && (
              <>
                <p>
                  <strong>1. Data Controller:</strong> The Native Foods Company, headquartered in Rua Quinta dos Álamos, 10 - 2625-577 Vialonga, Portugal, complies fully with the European Union General Data Protection Regulation (GDPR / RGPD).
                </p>
                <p>
                  <strong>2. Information We Collect:</strong> When you submit our contact or wholesale inquiries, we process your contact name, commercial establishment, email address, telephone number, and geographical zone solely for communication regarding your request.
                </p>
                <p>
                  <strong>3. Purpose of Processing:</strong> Data is handled strictly to provide quotation details, arrange refrigerated sample distribution, respond to consumer queries, and send our requested newsletter. We never monetize or transfer your information to third-party advertisers.
                </p>
                <p>
                  <strong>4. Your Rights:</strong> Under GDPR articles 15-22, you hold the right to access, rectify, or request erasure of your personal data at any time by contacting info@nativefoods.pt.
                </p>
              </>
            )}

            {type === 'cookies' && (
              <>
                <p>
                  <strong>1. What are Cookies:</strong> Cookies are minimal text files stored by your browser to retain session preferences (such as selected language).
                </p>
                <p>
                  <strong>2. Necessary Cookies:</strong> We utilize technical cookies strictly required for website navigation, language selection (EN/PT), and interactive form operations.
                </p>
                <p>
                  <strong>3. Preference Cookies:</strong> These allow the website to remember your preference choices between English and Portuguese during visits.
                </p>
              </>
            )}

            {type === 'terms' && (
              <>
                <p>
                  <strong>1. Commercial Identity:</strong> Native Foods is an authorized brand offering wild Amazonian açaí, pitaya, and organic fruit preparations throughout Portugal and the EU.
                </p>
                <p>
                  <strong>2. Organic Certification & Standards:</strong> All organic products sold adhere to European organic agricultural standards (PT-BIO-03).
                </p>
                <p>
                  <strong>3. Product Inquiries:</strong> Product specifications, laboratory analyses, and organic certifications are provided on request via our official communication channels.
                </p>
              </>
            )}
          </div>

          {/* Footer */}
          <div className="pt-4 border-t border-[#171717]/10 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-[#4F5CF5] hover:bg-[#3D4AE0] text-[#FFFDF8] rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
