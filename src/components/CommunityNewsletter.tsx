import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Check, ArrowRight, ShieldCheck } from 'lucide-react';

interface CommunityNewsletterProps {
  currentLang: 'en' | 'pt';
}

export const CommunityNewsletter: React.FC<CommunityNewsletterProps> = ({ currentLang }) => {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setErrorMessage(currentLang === 'en' ? 'Please enter a valid email address.' : 'Por favor introduza um email válido.');
      setStatus('error');
      return;
    }
    if (!consent) {
      setErrorMessage(currentLang === 'en' ? 'Please accept the privacy policy to continue.' : 'Por favor aceite os termos de privacidade para continuar.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setConsent(false);
      setErrorMessage('');
    }, 600);
  };

  return (
    <section className="py-20 bg-[#FBF4D8] border-t border-b border-[#171717]/10 relative">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#4F5CF5] mb-3">
          <span>{currentLang === 'en' ? 'Join The Native Circle' : 'Junte-se à Comunidade Native'}</span>
        </div>

        <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold text-[#171717] tracking-tight mb-4">
          Good Things Are Better Together.
        </h2>

        <p className="text-sm sm:text-base text-[#171717]/80 max-w-xl mx-auto mb-8 font-normal leading-relaxed">
          {currentLang === 'en'
            ? 'Receive exclusive wellness insights, invitations to Lisbon community events, and early access to new harvest releases.'
            : 'Receba dicas de nutrição consciente, convites para eventos em Lisboa e acesso antecipado a novas colheitas.'}
        </p>

        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-6 rounded-2xl bg-[#FFFDF8] border border-[#4F5CF5]/30 max-w-md mx-auto shadow-sm"
          >
            <div className="w-12 h-12 rounded-full bg-[#4F5CF5]/10 text-[#4F5CF5] flex items-center justify-center mx-auto mb-3">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="font-sans text-xl font-bold text-[#171717] mb-1">
              {currentLang === 'en' ? 'Welcome to Native Foods!' : 'Bem-vindo à Native Foods!'}
            </h4>
            <p className="text-xs text-[#777777]">
              {currentLang === 'en'
                ? "You've successfully joined our community. Check your inbox for your welcome recipe book."
                : 'A sua inscrição foi confirmada. Verifique a sua caixa de entrada para receber o e-book de receitas de boas-vindas.'}
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubscribe} className="max-w-lg mx-auto space-y-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 bg-[#FFFDF8] p-1.5 rounded-2xl border border-[#171717]/15 shadow-sm focus-within:border-[#4F5CF5]">
              <div className="flex items-center gap-2 pl-3 w-full sm:w-auto flex-1">
                <Mail className="w-4 h-4 text-[#777777] shrink-0" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={currentLang === 'en' ? 'Enter your email address...' : 'O seu endereço de email...'}
                  className="w-full py-2.5 text-xs text-[#171717] placeholder-[#777777] bg-transparent outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full sm:w-auto px-6 py-3 bg-[#4F5CF5] hover:bg-[#3D4AE0] text-[#FFFDF8] rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shrink-0"
              >
                <span>{status === 'loading' ? 'Subscribing...' : (currentLang === 'en' ? 'Subscribe' : 'Subscrever')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Privacy Checkbox */}
            <div className="flex items-start justify-center gap-2 text-left pt-1">
              <input
                type="checkbox"
                id="newsletter-consent"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 rounded border-[#171717]/20 text-[#4F5CF5] focus:ring-[#4F5CF5]"
              />
              <label htmlFor="newsletter-consent" className="text-[11px] text-[#777777] leading-tight select-none cursor-pointer">
                {currentLang === 'en'
                  ? 'I agree to receive communications from Native Foods and accept the Privacy Policy.'
                  : 'Aceito receber comunicações da Native Foods e concordo com a Política de Privacidade.'}
              </label>
            </div>

            {errorMessage && (
              <p className="text-xs text-red-600 font-medium">{errorMessage}</p>
            )}
          </form>
        )}

      </div>
    </section>
  );
};
