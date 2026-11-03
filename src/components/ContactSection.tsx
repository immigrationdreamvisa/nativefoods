import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Building2, Clock } from 'lucide-react';

interface ContactSectionProps {
  currentLang: 'en' | 'pt';
  initialEstablishment?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  currentLang,
  initialEstablishment = false
}) => {
  const [formData, setFormData] = useState({
    topic: '',
    name: '',
    email: '',
    phone: '',
    area: 'Lisboa & Vale do Tejo',
    isEstablishment: initialEstablishment ? 'yes' : 'no',
    establishmentName: '',
    message: '',
    privacyConsent: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Update establishment if parent toggles it
  React.useEffect(() => {
    if (initialEstablishment) {
      setFormData((prev) => ({ ...prev, isEstablishment: 'yes' }));
    }
  }, [initialEstablishment]);

  const geographicalAreas = [
    'Lisboa & Vale do Tejo',
    'Porto & Grande Porto',
    'Norte de Portugal (Braga, Guimarães, Viana)',
    'Centro (Coimbra, Leiria, Aveiro, Viseu)',
    'Alentejo (Évora, Beja, Sines)',
    'Algarve (Faro, Portimão, Albufeira, Lagos)',
    'Madeira & Açores',
    'Espanha / Spain',
    'Other International / European Union'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError(currentLang === 'en' ? 'Please complete all required fields.' : 'Por favor preencha todos os campos obrigatórios.');
      return;
    }
    if (!formData.privacyConsent) {
      setError(currentLang === 'en' ? 'You must accept the privacy policy to submit.' : 'É necessário aceitar a política de privacidade.');
      return;
    }

    setLoading(true);
    setError('');
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-[#FFFDF8] relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#155242] mb-2">
            <span>{currentLang === 'en' ? 'Reach Out' : 'Fale Connosco'}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#777777]">Portugal</span>
          </div>
          <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold text-[#171717] tracking-tight leading-[1.05]">
            {currentLang === 'en' ? "Let's Start a Fresh Conversation." : 'Vamos Começar uma Conversa.'}
          </h2>
          <p className="text-base text-[#171717]/80 mt-4 leading-relaxed font-normal">
            {currentLang === 'en'
              ? 'Whether you are inquiring about our products, exploring retail partnerships, or seeking technical dossiers, our team in Portugal is ready to assist.'
              : 'Quer pretenda conhecer melhor os nossos produtos, explorar parcerias de distribuição ou obter fichas técnicas, a nossa equipa em Portugal está à sua disposição.'}
          </p>
        </div>

        {/* ========================================================================= */}
        {/* MAIN SPLIT STAGE: IMAGE ON LEFT + LIVE FORM ON MINT (#E2F0F1) ON RIGHT     */}
        {/* ========================================================================= */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#171717]/10 bg-white grid grid-cols-1 lg:grid-cols-12 relative mb-16">
          
          {/* Left Column: Hand holding the fresh açaí bowl */}
          <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full overflow-hidden bg-[#FBF4D8]">
            <img
              src="/src/assets/images/contact_bowl_hand.jpg"
              alt="Hand holding fresh artisanal açaí bowl with kiwi and banana"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center"
            />
            {/* Subtle gradient vignette to blend with form on mobile */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:hidden" />
          </div>

          {/* Right Column: Interactive Form on Mint Background #E2F0F1 */}
          <div className="lg:col-span-7 bg-[#E2F0F1] p-6 sm:p-10 lg:p-12 relative flex flex-col justify-center">

            {/* Embedded "+ SELL NATIVE?" badge tab matching Image 3 */}
            <div className="hidden sm:flex absolute right-0 top-8 z-10 flex-col items-end">
              {/* Two mini tubs on top */}
              <div className="flex items-end -space-x-1.5 -mb-2 pr-4 pointer-events-none">
                <div className="w-8 h-10 bg-gradient-to-b from-[#A81D5E] to-[#7E1244] rounded-t-md rounded-b-sm border border-white/80 shadow-md transform -rotate-12 flex flex-col justify-between p-0.5 overflow-hidden">
                  <div className="h-1 bg-[#540B2E] rounded-xs" />
                  <div className="text-[5px] font-black text-white text-center leading-none uppercase">Native<br/>Pitaya</div>
                  <div className="h-0.5 bg-white/40 rounded-full mx-1" />
                </div>
                <div className="w-8 h-10 bg-gradient-to-b from-[#155242] to-[#0A2E24] rounded-t-md rounded-b-sm border border-white/80 shadow-md transform rotate-6 flex flex-col justify-between p-0.5 overflow-hidden z-10">
                  <div className="h-1 bg-[#051C16] rounded-xs" />
                  <div className="text-[5px] font-black text-white text-center leading-none uppercase">Native<br/>Açaí</div>
                  <div className="h-0.5 bg-white/40 rounded-full mx-1" />
                </div>
              </div>
              {/* Orange pill button */}
              <button
                type="button"
                onClick={() => setFormData((prev) => ({ ...prev, isEstablishment: 'yes' }))}
                className="bg-[#B44C28] hover:bg-[#9B3C1B] text-white px-3.5 py-2 rounded-l-full shadow-lg flex items-center gap-1.5 transition-colors cursor-pointer border-t border-b border-l border-white/20 select-none"
              >
                <div className="flex items-center -space-x-1 shrink-0">
                  <span className="w-4 h-4 rounded-full bg-[#27223B] border border-white flex items-center justify-center text-[8px] font-black text-white">A</span>
                  <span className="w-4 h-4 rounded-full bg-[#A81D5E] border border-white flex items-center justify-center text-[8px] font-black text-white z-10">P</span>
                </div>
                <span className="font-sans font-black text-[11px] tracking-wider text-white uppercase whitespace-nowrap">
                  + SELL NATIVE?
                </span>
              </button>
            </div>

            {/* Form Header matching the clean layout */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wide text-[#155242] uppercase font-sans">
                {currentLang === 'en' ? 'TALK TO US' : 'FALE CONNOSCO'}
              </h3>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4 bg-white/80 rounded-2xl p-8 border border-[#155242]/10"
              >
                <div className="w-16 h-16 rounded-full bg-[#155242]/10 text-[#155242] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-sans text-2xl font-bold text-[#155242]">
                  {currentLang === 'en' ? 'Message Received!' : 'Mensagem Recebida!'}
                </h4>
                <p className="text-xs sm:text-sm text-[#171717]/80 max-w-md mx-auto leading-relaxed">
                  {currentLang === 'en'
                    ? 'Thank you for reaching out to Native Foods. A dedicated representative will contact you within 24 business hours.'
                    : 'Obrigado pelo seu contacto. Um dos nossos consultores entrará em contacto no prazo máximo de 24 horas úteis.'}
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      topic: '',
                      name: '',
                      email: '',
                      phone: '',
                      area: 'Lisboa & Vale do Tejo',
                      isEstablishment: 'no',
                      establishmentName: '',
                      message: '',
                      privacyConsent: false
                    });
                  }}
                  className="mt-4 px-6 py-2.5 bg-[#155242] text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#0E3A2E] transition-colors cursor-pointer"
                >
                  {currentLang === 'en' ? 'Send Another Message' : 'Enviar Outra Mensagem'}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Field 1: What do you want to know? */}
                <div>
                  <label className="block text-xs font-bold text-[#155242] mb-1.5 font-sans">
                    {currentLang === 'en' ? 'What do you want to know?' : 'O que pretende saber?'}
                  </label>
                  <input
                    type="text"
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    placeholder={currentLang === 'en' ? 'e.g. Products, retail partnership, organic certification...' : 'ex: Produtos, distribuição, certificados biológicos...'}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#155242]/20 bg-white text-xs text-[#171717] outline-none focus:border-[#155242] focus:ring-1 focus:ring-[#155242] shadow-2xs transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Field 2: Name* */}
                  <div>
                    <label className="block text-xs font-bold text-[#155242] mb-1.5 font-sans">
                      {currentLang === 'en' ? 'Name*' : 'Nome*'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Maria Silva"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#155242]/20 bg-white text-xs text-[#171717] outline-none focus:border-[#155242] focus:ring-1 focus:ring-[#155242] shadow-2xs transition-all"
                    />
                  </div>

                  {/* Field 3: E-mail* */}
                  <div>
                    <label className="block text-xs font-bold text-[#155242] mb-1.5 font-sans">
                      {currentLang === 'en' ? 'E-mail*' : 'E-mail*'}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="maria.silva@exemplo.pt"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#155242]/20 bg-white text-xs text-[#171717] outline-none focus:border-[#155242] focus:ring-1 focus:ring-[#155242] shadow-2xs transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Field 4: Phone* */}
                  <div>
                    <label className="block text-xs font-bold text-[#155242] mb-1.5 font-sans">
                      {currentLang === 'en' ? 'Phone*' : 'Telefone*'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+351 912 345 678"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#155242]/20 bg-white text-xs text-[#171717] outline-none focus:border-[#155242] focus:ring-1 focus:ring-[#155242] shadow-2xs transition-all"
                    />
                  </div>

                  {/* Field 5: Geographical Area* */}
                  <div>
                    <label className="block text-xs font-bold text-[#155242] mb-1.5 font-sans">
                      {currentLang === 'en' ? 'Geographical Area*' : 'Zona Geográfica*'}
                    </label>
                    <select
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#155242]/20 bg-white text-xs text-[#171717] outline-none focus:border-[#155242] focus:ring-1 focus:ring-[#155242] shadow-2xs transition-all cursor-pointer"
                    >
                      {geographicalAreas.map((area) => (
                        <option key={area} value={area}>
                          {area}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Business / Establishment Optional Checkbox */}
                <div className="pt-1">
                  <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-[#155242]">
                    <input
                      type="checkbox"
                      checked={formData.isEstablishment === 'yes'}
                      onChange={(e) => setFormData({ ...formData, isEstablishment: e.target.checked ? 'yes' : 'no' })}
                      className="w-4 h-4 rounded border-[#155242]/30 text-[#155242] focus:ring-[#155242]"
                    />
                    <span>
                      {currentLang === 'en' 
                        ? 'I represent a café, restaurant or retail establishment' 
                        : 'Represento um café, restaurante ou revendedor'}
                    </span>
                  </label>
                  {formData.isEstablishment === 'yes' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-2.5 p-3 rounded-xl bg-white border border-[#155242]/25"
                    >
                      <label className="block text-[11px] font-bold text-[#155242] uppercase tracking-wider mb-1">
                        {currentLang === 'en' ? 'Establishment / Company Name' : 'Nome do Estabelecimento / Empresa'}
                      </label>
                      <input
                        type="text"
                        value={formData.establishmentName}
                        onChange={(e) => setFormData({ ...formData, establishmentName: e.target.value })}
                        placeholder={currentLang === 'en' ? 'e.g. Café Estrela, Sintra' : 'ex: Café Estrela, Sintra'}
                        className="w-full px-3 py-2 rounded-lg border border-[#155242]/20 bg-[#FFFDF8] text-xs text-[#171717] outline-none focus:border-[#155242]"
                      />
                    </motion.div>
                  )}
                </div>

                {/* Field 6: Message* */}
                <div>
                  <label className="block text-xs font-bold text-[#155242] mb-1.5 font-sans">
                    {currentLang === 'en' ? 'Message*' : 'Mensagem*'}
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={currentLang === 'en' ? 'Tell us about your requirements, inquiries or venue details...' : 'Indique-nos como podemos ajudar...'}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#155242]/20 bg-white text-xs text-[#171717] outline-none focus:border-[#155242] focus:ring-1 focus:ring-[#155242] shadow-2xs transition-all resize-none"
                  />
                </div>

                {/* Privacy Consent Checkbox */}
                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="contact-consent"
                    required
                    checked={formData.privacyConsent}
                    onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                    className="mt-0.5 rounded border-[#155242]/30 text-[#155242] focus:ring-[#155242] cursor-pointer"
                  />
                  <label htmlFor="contact-consent" className="text-[11px] text-[#155242]/90 leading-tight select-none cursor-pointer">
                    {currentLang === 'en'
                      ? 'I agree to the processing of my contact information by Native Foods Portugal.'
                      : 'Autorizo o tratamento dos meus dados de contacto pela Native Foods Portugal.'}
                  </label>
                </div>

                {error && <p className="text-xs text-red-600 font-semibold">{error}</p>}

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-[#155242] hover:bg-[#0E3A2E] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-md cursor-pointer hover:shadow-lg"
                >
                  <span>{loading ? (currentLang === 'en' ? 'Sending...' : 'A enviar...') : (currentLang === 'en' ? 'Submit Inquiry' : 'Enviar Mensagem')}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

          </div>

        </div>

        {/* ========================================================================= */}
        {/* COMPACT LOGISTICS & PORTUGAL HEADQUARTERS BAR BELOW THE STAGE             */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Direct Contact */}
          <div className="p-6 rounded-2xl bg-white border border-[#171717]/10 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#155242]/10 text-[#155242] flex items-center justify-center shrink-0 mt-0.5">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#171717]">
                {currentLang === 'en' ? 'Contacts' : 'Contactos'}
              </h4>
              <div className="text-xs text-[#777777] mt-1 space-y-1.5">
                <div>
                  <a href="tel:+351217541578" className="hover:text-[#4F5CF5] font-semibold text-[#171717] block">
                    (+351) 217 541 578
                  </a>
                  <span className="text-[10px] text-[#777777] block">
                    {currentLang === 'en' ? '(Landline local call)' : '(Chamada para a rede fixa nacional)'}
                  </span>
                </div>
                <div>
                  <a href="mailto:info@nativefoods.pt" className="hover:text-[#4F5CF5] font-medium text-[#171717]">
                    info@nativefoods.pt
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Registered Headquarters */}
          <div className="p-6 rounded-2xl bg-white border border-[#171717]/10 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#BA4B23]/10 text-[#BA4B23] flex items-center justify-center shrink-0 mt-0.5">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#171717]">
                {currentLang === 'en' ? 'Headquarters & Logistics' : 'Sede & Centro Logístico'}
              </h4>
              <p className="text-xs text-[#777777] mt-1 leading-relaxed">
                Rua Quinta dos Álamos, 10
                <br />
                2625-577 Vialonga · Portugal
              </p>
            </div>
          </div>

          {/* Card 3: Quality & Cold-Chain */}
          <div className="p-6 rounded-2xl bg-white border border-[#171717]/10 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#4F5CF5]/10 text-[#4F5CF5] flex items-center justify-center shrink-0 mt-0.5">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#171717]">
                {currentLang === 'en' ? '-18°C Cold-Chain Certified' : 'Cadeia de Frio a -18°C'}
              </h4>
              <p className="text-xs text-[#777777] mt-1 leading-relaxed">
                {currentLang === 'en'
                  ? 'All superfood blends preserved at uninterrupted -18°C from harvest to distribution in Portugal.'
                  : 'Preservação contínua a -18°C desde a colheita até à entrega em Portugal.'}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
