import React from 'react';
import { motion } from 'motion/react';
import { Store, Truck, Coffee, Award, ArrowRight, CheckCircle2 } from 'lucide-react';

interface WholesaleSectionProps {
  currentLang: 'en' | 'pt';
  onConnectWholesale: () => void;
}

export const WholesaleSection: React.FC<WholesaleSectionProps> = ({
  currentLang,
  onConnectWholesale
}) => {
  const b2bFeatures = [
    {
      icon: Store,
      title: currentLang === 'en' ? '3.6kg Foodservice Tubs' : 'Baldes de 3.6kg Restauração',
      desc: currentLang === 'en'
        ? 'High-volume resealable containers engineered for rapid, mess-free kitchen prep and consistent yield.'
        : 'Embalagens de grande formato desenhadas para serviço rápido, sem desperdício e com rendimento consistente.'
    },
    {
      icon: Coffee,
      title: currentLang === 'en' ? 'Soft-Serve & Bowl Ready' : 'Compatível com Máquinas & Taças',
      desc: currentLang === 'en'
        ? 'Optimal scoop consistency straight from the freezer or pourable for high-volume soft-serve machines.'
        : 'Consistência perfeita para colher diretamente ou para alimentar máquinas de açaí cremoso / soft-serve.'
    },
    {
      icon: Truck,
      title: currentLang === 'en' ? 'Direct Cold-Chain Logistics' : 'Logística a Frio Direta',
      desc: currentLang === 'en'
        ? 'Guaranteed -18°C temperature-controlled deliveries across Lisbon, Porto, Algarve, and nationwide.'
        : 'Entregas regulares com frota refrigerada controlada a -18°C em Lisboa, Porto, Algarve e todo o país.'
    },
    {
      icon: Award,
      title: currentLang === 'en' ? 'Branded Merchandising & POS' : 'Material de Ponto de Venda',
      desc: currentLang === 'en'
        ? 'Complimentary table-tents, biodegradable bowls, branded menu signage, and staff training guides.'
        : 'Suportes de mesa, taças biodegradáveis, sinalética de menu e formação de equipa incluídos.'
    }
  ];

  return (
    <section id="wholesale" className="py-24 bg-[#FBF4D8] relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#4F5CF5] mb-2">
            <span>{currentLang === 'en' ? 'B2B & Hospitality Partners' : 'Parceiros Horeca & Distribuição'}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#777777]">Portugal & Spain</span>
          </div>
          <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold text-[#171717] tracking-tight leading-[1.05]">
            Bring Native Goodness to Your Business.
          </h2>
          <p className="text-base text-[#171717]/80 mt-4 leading-relaxed font-normal">
            {currentLang === 'en'
              ? 'Join over 250+ top specialty cafes, beach clubs, healthy brunch spots, luxury hotel resorts, and bio grocers serving authentic Native Foods superfoods daily.'
              : 'Junte-se a mais de 250 cafés de especialidade, beach clubs, espaços de brunch saudável, resorts de luxo e mercearias biológicas que confiam diariamente na Native Foods.'}
          </p>
        </div>

        {/* B2B Split Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Photography: Foodservice café environment */}
          <div className="lg:col-span-6 relative">
            <div className="aspect-16/10 rounded-2xl overflow-hidden shadow-2xl border border-[#171717]/10 bg-[#FFFDF8] group">
              <img
                src="/src/assets/images/b2b_cafe_acai_prep_1793423322122.jpg"
                alt="Barista in a modern European Lisbon cafe artfully preparing fresh açaí bowl with dragon fruit"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white flex items-center justify-between">
                <div>
                  <p className="font-sans text-lg font-bold">The Mill Lisbon · Partner Location</p>
                  <p className="text-white/80 text-xs">High-turnover daily bowl service with 3.6kg Native Açai</p>
                </div>
                <span className="px-3 py-1 bg-[#4F5CF5] text-white text-[10px] font-bold uppercase rounded-md">
                  Foodservice Ready
                </span>
              </div>
            </div>
          </div>

          {/* Right column: Highlights and Quick Inquire */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {b2bFeatures.map((feat, i) => {
                const IconComponent = feat.icon;
                return (
                  <div
                    key={i}
                    className="p-5 rounded-xl bg-[#FFFDF8] border border-[#171717]/8 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-[#4F5CF5]/10 text-[#4F5CF5] flex items-center justify-center mb-3">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-sm text-[#171717] mb-1.5">{feat.title}</h4>
                      <p className="text-xs text-[#777777] leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Wholesale Enquiry CTA Box */}
            <div className="p-6 rounded-2xl bg-[#FFFDF8] border border-[#4F5CF5]/20 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
              <div>
                <h4 className="font-sans text-xl font-bold text-[#171717]">
                  {currentLang === 'en' ? 'Ready to Taste the Difference?' : 'Quer Receber uma Amostra Gratuita?'}
                </h4>
                <p className="text-xs text-[#777777] mt-0.5">
                  {currentLang === 'en'
                    ? 'Request our B2B commercial catalog and sample kit delivered directly to your venue.'
                    : 'Solicite a tabela de preços para profissionais e kit de degustação para o seu espaço.'}
                </p>
              </div>
              <button
                onClick={onConnectWholesale}
                className="px-6 py-3.5 bg-[#4F5CF5] hover:bg-[#3D4AE0] text-[#FFFDF8] rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap shrink-0 flex items-center gap-2"
              >
                <span>{currentLang === 'en' ? 'Wholesale Enquiry' : 'Pedir Contacto B2B'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
