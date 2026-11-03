import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TreePine, 
  Users, 
  Recycle, 
  Droplet, 
  ShieldCheck, 
  HeartHandshake, 
  ArrowUpRight,
  CheckCircle2,
  Leaf,
  Globe,
  Award,
  Sun,
  Ship,
  Sparkles,
  ChevronDown,
  PackageCheck,
  Compass,
  Waves,
  Bird
} from 'lucide-react';

interface SustainabilitySectionProps {
  currentLang: 'en' | 'pt';
  onExploreImpact?: () => void;
  onContact?: () => void;
}

export const SustainabilitySection: React.FC<SustainabilitySectionProps> = ({ 
  currentLang,
  onContact 
}) => {
  const [activeHarvestStep, setActiveHarvestStep] = useState(0);
  const [activePackagingFormat, setActivePackagingFormat] = useState<'160g' | '500g' | '3.6kg'>('160g');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // 1. Core Environmental Commitments
  const commitments = [
    {
      icon: TreePine,
      title: currentLang === 'en' ? 'Zero Rainforest Deforestation' : 'Desmatamento Zero na Floresta',
      stat: '0%',
      statLabel: currentLang === 'en' ? 'Deforestation Footprint' : 'Impacto de Desflorestação',
      description: currentLang === 'en'
        ? 'Wild açaí palms grow naturally beneath the dense Amazonian canopy in the river floodplains (várzeas). Harvesting requires zero tree clearing, preserving ancient biodiversity.'
        : 'Os açaizeiros selvagens crescem naturalmente sob a densa copa amazónica nas várzeas ribeirinhas. A colheita manual não derruba uma única árvore e protege a biodiversidade.'
    },
    {
      icon: Users,
      title: currentLang === 'en' ? 'Fair Trade Ribeirinho Support' : 'Comércio Justo com Ribeirinhos',
      stat: '120+',
      statLabel: currentLang === 'en' ? 'Local Harvester Families' : 'Famílias Tradicionais Apoiadas',
      description: currentLang === 'en'
        ? 'We pay fair, above-market seasonal rates directly to river communities, creating sustainable local economies that disincentivize illegal logging and cattle ranching.'
        : 'Remuneramos as comunidades ribeirinhas com preços justos e acima da média de mercado, garantindo rendimento digno e incentivando a conservação ativa da floresta.'
    },
    {
      icon: Recycle,
      title: currentLang === 'en' ? '100% Recyclable & Responsible' : 'Embalagens 100% Recicláveis',
      stat: '100%',
      statLabel: currentLang === 'en' ? 'Recyclable Materials' : 'Materiais Recicláveis',
      description: currentLang === 'en'
        ? 'Our on-the-go tubs, 500g family tubs, and 3.6kg foodservice pails are manufactured using food-grade recyclable mono-materials, minimizing lifecycle carbon emissions.'
        : 'As nossas embalagens individuais, familiares e baldes profissionais de 3.6kg são produzidos em mono-materiais 100% recicláveis com tintas de base vegetal.'
    },
    {
      icon: Droplet,
      title: currentLang === 'en' ? 'Solar-Assisted Cold Chain' : 'Cadeia de Frio Sustentável',
      stat: '-18°C',
      statLabel: currentLang === 'en' ? 'Bio-Preservation Purity' : 'Preservação Bio-Ativa',
      description: currentLang === 'en'
        ? 'From river harvest to flash-freezing in Pará and distribution in Portugal, our cold route utilizes energy-efficient cooling to preserve 99% of raw anthocyanins and omegas.'
        : 'Da colheita fluvial ao congelamento ultrarrápido e distribuição em Portugal, mantemos a rota de frio otimizada para manter intactos todos os nutrientes essenciais.'
    }
  ];

  // 2. Interactive Harvest Cycle Steps (Canopy to Table)
  const harvestSteps = [
    {
      number: '01',
      title: currentLang === 'en' ? 'Wild Várzea Foraging' : 'Colheita Selvagem nas Várzeas',
      subtitle: currentLang === 'en' ? 'Hand climbing without machinery' : 'Subida manual sem maquinaria',
      tag: currentLang === 'en' ? 'Zero Logging' : 'Zero Abate',
      description: currentLang === 'en'
        ? 'Skilled local harvesters (peconheiros) climb towering wild palms reaching up to 25 meters, using traditional woven palm-leaf footholds called peconhas. Only mature, deep-purple berry clusters are carefully cut down, leaving the mother palm entirely intact to fruit year after year.'
        : 'Os peconheiros ribeirinhos sobem aos açaizeiros selvagens de até 25 metros de altura utilizando a tradicional peconha vegetal. Apenas os cachos no ponto ideal de maturação são colhidos, preservando a palmeira viva para frutificar ano após ano.',
      metrics: currentLang === 'en' ? 'Up to 25m climbing · 100% hand harvested' : 'Até 25m de altura · 100% manual',
      badgeColor: 'bg-[#155242] text-white'
    },
    {
      number: '02',
      title: currentLang === 'en' ? 'Riverboat Transport & 4-Hour Clock' : 'Transporte Fluvial & Relógio de 4 Horas',
      subtitle: currentLang === 'en' ? 'Traditional popopô canoes to dock' : 'Canoas popopô tradicionais',
      tag: currentLang === 'en' ? 'Ultra Fresh' : 'Frescura Máxima',
      description: currentLang === 'en'
        ? 'Freshly harvested wicker baskets (paneiros) are brought downriver via traditional wooden popopô boats to certified riverside handling stations. The berries must be washed and pulped within 4 hours of picking to prevent natural oxidation and protect raw antioxidant ORAC values.'
        : 'Os paneiros de vime com os frutos frescos são transportados pelos rios em embarcações popopô até aos postos ribeirinhos. A polpa é processada no prazo máximo de 4 horas para travar a oxidação e conservar a potência antioxidante natural.',
      metrics: currentLang === 'en' ? '< 4 Hours from tree to pulp' : '< 4 Horas da árvore à polpa',
      badgeColor: 'bg-[#4F5CF5] text-white'
    },
    {
      number: '03',
      title: currentLang === 'en' ? 'Pure Mechanical Friction Cold Pulping' : 'Despolpamento Mecânico a Frio',
      subtitle: currentLang === 'en' ? 'Clean water & gentle stainless friction' : 'Água pura e atrito suave',
      tag: currentLang === 'en' ? 'Zero Heat' : 'Sem Aquecimento',
      description: currentLang === 'en'
        ? 'Berries are washed in ozonated water, softened, and passed through food-grade stainless-steel depulpers that gently separate the nutrient-dense purple skin and flesh from the seed using friction alone. Zero chemical solvents, zero pasteurizing heat damage, and zero artificial ascorbic acid.'
        : 'Os frutos são higienizados em água ozonizada e submetidos a despolpadores de aço inoxidável que separam a polpa da semente por puro atrito mecânico, sem recurso a calor desvitalizante ou solventes químicos.',
      metrics: currentLang === 'en' ? '100% mechanical separation · 0 chemical solvents' : '100% mecânico · 0 solventes químicos',
      badgeColor: 'bg-[#39245C] text-white'
    },
    {
      number: '04',
      title: currentLang === 'en' ? 'Deep Cryo-Freezing at -18°C' : 'Congelamento Ultrarrápido a -18°C',
      subtitle: currentLang === 'en' ? 'Locking phytonutrients in stasis' : 'Preservação celular dos nutrientes',
      tag: currentLang === 'en' ? 'Bio-Preserved' : 'Bio-Preservado',
      description: currentLang === 'en'
        ? 'Within minutes of separation, the thick velvety purée is flash-frozen at deep cryogenic sub-zero temperatures. This halts molecular degradation, locking in live anthocyanins, polyphenols, vitamin E, and essential Omega 3, 6, and 9 healthy fats in their raw natural state.'
        : 'Minutos após a extração, o puré é congelado a temperaturas negativas extremas. Este processo bloqueia a degradação molecular e fixa as antocianinas, polifenóis e ácidos gordos ómega 3, 6 e 9 intactos.',
      metrics: currentLang === 'en' ? '-18°C constant temperature · 99% nutrient retention' : '-18°C contínuo · 99% retenção nutricional',
      badgeColor: 'bg-[#155242] text-white'
    },
    {
      number: '05',
      title: currentLang === 'en' ? 'Maritime Eco-Route & Portugal Distribution' : 'Rota Marítima & Distribuição em Portugal',
      subtitle: currentLang === 'en' ? 'Direct Atlantic shipping into Portugal' : 'Transporte marítimo para Portugal',
      tag: currentLang === 'en' ? 'Low Carbon Freight' : 'Baixas Emissões',
      description: currentLang === 'en'
        ? 'Products travel from Belém do Pará to Lisbon Port via high-efficiency refrigerated sea freight, generating 92% less CO₂ per ton than air freight. From our Vialonga logistics center, temperature-controlled electric and green delivery fleets supply Portugal and southern Europe.'
        : 'O açaí navega de Belém do Pará até ao Porto de Lisboa em navios porta-contentores frigoríficos, emitindo 92% menos CO₂ por tonelada face ao frete aéreo. A partir do polo de Vialonga, abastecemos Portugal com frotas dedicadas.',
      metrics: currentLang === 'en' ? '92% less emissions vs air cargo · Portugal hub dispatch' : '92% menos emissões vs frete aéreo · Polo Vialonga',
      badgeColor: 'bg-[#BA4B23] text-white'
    }
  ];

  // 3. Packaging Circular Economy Formats
  const packagingSpecs = {
    '160g': {
      title: currentLang === 'en' ? '160g On-The-Go Tub' : 'Pote Individual 160g Ready-to-Eat',
      material: '100% Food-Grade Polypropylene (PP 05)',
      recyclingBin: currentLang === 'en' ? 'Yellow Recycling Bin (Ponto Verde Amarelo)' : 'Ecoponto Amarelo (Embalagens)',
      spoon: currentLang === 'en' ? 'Recyclable spoon under lid · Zero loose cutlery' : 'Colher reciclável na tampa · Zero talheres soltos',
      benefits: currentLang === 'en'
        ? 'Mono-material construction means the tub, rim, and lid can be placed together directly into curbside recycling without complicated component separation.'
        : 'Construção mono-material que permite colocar o pote e a tampa juntos no ecoponto amarelo sem necessidade de desmanchar componentes.'
    },
    '500g': {
      title: currentLang === 'en' ? '500g Household & Family Tub' : 'Embalagem Familiar 500g',
      material: 'High-Purity Recyclable PP 05 with Freezer-Resistant Seal',
      recyclingBin: currentLang === 'en' ? 'Yellow Recycling Bin or Multi-Turn Dishwasher Safe' : 'Ecoponto Amarelo ou Reutilizável na Cozinha',
      spoon: currentLang === 'en' ? 'Airtight resealable lid for multiple bowl servings' : 'Tampa de fecho hermético para várias doses',
      benefits: currentLang === 'en'
        ? 'Engineered to withstand sub-zero freezer cycles without brittleness or plastic micro-chipping. Fully reusable as kitchen containers before entering the recycling stream.'
        : 'Resistente a temperaturas negativas sem estalar nem libertar microplásticos. Pode ser lavado na máquina e reutilizado para guardar refeições.'
    },
    '3.6kg': {
      title: currentLang === 'en' ? '3.6kg Foodservice & Café Pail' : 'Balde Profissional 3.6kg Foodservice',
      material: 'Commercial-Grade Heavy Recyclable PP with Safety Tear Band',
      recyclingBin: currentLang === 'en' ? 'Industrial Recycling Stream & Circular Bucket Return' : 'Reciclagem Industrial & Circuito Fechado',
      spoon: currentLang === 'en' ? 'Ergonomic handle & wide-rim scoopable opening' : 'Pega ergonómica e abertura larga para concha',
      benefits: currentLang === 'en'
        ? 'Drastically eliminates small single-use containers in commercial cafés and juice bars, cutting packaging mass by over 74% per kilogram of served superfood.'
        : 'Reduz em 74% a pegada de material plástico por quilo servido em estabelecimentos de restauração, cafés saudáveis e geladarias.'
    }
  };

  // 4. Ecosystem & Wildlife Impact Highlights
  const ecosystemPoints = [
    {
      icon: Bird,
      title: currentLang === 'en' ? 'Avian & Canopy Protection' : 'Proteção da Fauna & Aves',
      text: currentLang === 'en'
        ? 'Wild açaí groves form the primary nesting canopy for Harpy Eagles, Toucans, and over 140 endemic Amazonian bird species. Keeping trees standing preserves their essential wild breeding grounds.'
        : 'Os açaizais selvagens são o habitat de nidificação da Harpia, Tucanos e mais de 140 espécies de aves tropicais. Manter a floresta em pé protege estas populações vitais.'
    },
    {
      icon: Waves,
      title: currentLang === 'en' ? 'Várzea Floodplain Hydrology' : 'Hidrologia Natural das Várzeas',
      text: currentLang === 'en'
        ? 'Twice daily, Amazon river tides flood the root systems with Andean mineral silt. This natural fertilization eliminates any demand for artificial nitrate or phosphate chemicals.'
        : 'O fluxo das marés dos rios amazónicos deposita naturalmente sedimentos ricos em minerais andinos, dispensando totalmente o uso de fertilizantes químicos sintéticos.'
    },
    {
      icon: Sparkles,
      title: currentLang === 'en' ? 'Native Stingless Bee Pollination' : 'Polinização por Abelhas Nativas',
      text: currentLang === 'en'
        ? 'Açaí flowers rely on delicate Melipona stingless bees for cross-pollination. Zero chemical pesticide application guarantees that native bee sanctuaries thrive uninterrupted.'
        : 'As inflorescências do açaí dependem de abelhas nativas sem ferrão (Melíponas). A ausência total de pesticidas garante a prosperidade destes polinizadores essenciais.'
    }
  ];

  // 5. Frequently Asked Sustainability Questions
  const faqs = [
    {
      q: currentLang === 'en' ? 'Why is wild harvesting superior to clearing land for açaí plantations?' : 'Por que razão a colheita selvagem é superior a plantações monoculturais?',
      a: currentLang === 'en'
        ? 'Industrial monoculture plantations clear-cut diverse native forests to plant dense rows of trees, destroying local biodiversity, exhausting topsoil, and demanding heavy irrigation and fertilizers. In contrast, wild harvesting takes place in existing, naturally seeded floodplain forests where native flora and fauna live undisturbed.'
        : 'As plantações monoculturais intensivas requerem o abate de floresta virgem, empobrecem os solos e exigem rega e adubos químicos. A colheita selvagem Native Foods ocorre em árvores nativas já existentes nas várzeas, sem derrubar a floresta e respeitando a fauna e flora locais.'
    },
    {
      q: currentLang === 'en' ? 'How does paying above-market rates protect against Amazon deforestation?' : 'Como é que pagar salários justos previne o desmatamento na Amazónia?',
      a: currentLang === 'en'
        ? 'When river families earn dependable, dignified livelihoods from harvesting seasonal fruits of standing trees, the forest becomes far more economically valuable alive than dead. This directly neutralizes the pressure to sell communal ancestral land to illegal cattle ranchers and timber loggers.'
        : 'Ao garantir rendimentos dignos e estáveis com a colheita dos frutos de árvores em pé, a floresta torna-se economicamente muito mais valiosa viva do que queimada. Isto elimina a tentação económica de vender as terras a madeireiros ilegais ou criadores de gado extensivo.'
    },
    {
      q: currentLang === 'en' ? 'Can all Native Foods packaging be recycled in Portugal\'s yellow bin?' : 'Todas as embalagens podem ser recicladas no Ecoponto Amarelo em Portugal?',
      a: currentLang === 'en'
        ? 'Yes. All our retail tubs (160g and 500g) are made of 100% recyclable mono-material Polypropylene (PP 05). You can place the entire tub and lid directly into the yellow recycling bin (Ecoponto Amarelo) nationwide, in full partnership with Sociedade Ponto Verde.'
        : 'Sim. Todos os nossos potes de retalho (160g e 500g) são constituídos por polipropileno mono-material (PP 05) 100% reciclável. Podem ser depositados diretamente no ecoponto amarelo em todo o território nacional, em cumprimento das diretrizes da Sociedade Ponto Verde.'
    },
    {
      q: currentLang === 'en' ? 'Why do you transport your açaí via refrigerated sea freight instead of air?' : 'Por que utilizam transporte marítimo refrigerado em vez de avião?',
      a: currentLang === 'en'
        ? 'Air cargo has the highest carbon emissions of any global transport mode (over 500g CO₂ per ton-km). By using deep-freeze maritime routes directly from Belém do Pará to Lisbon Port, we cut transportation emissions by over 92% while maintaining uninterrupted -18°C cold preservation.'
        : 'O frete aéreo gera mais de 500g de CO₂ por tonelada-quilómetro. Ao organizar a logística através de navios cargueiros com contentores ultracongelados desde Belém até Lisboa, reduzimos a pegada carbónica em mais de 92% com estabilidade térmica a -18°C.'
    },
    {
      q: currentLang === 'en' ? 'What certifications verify Native Foods\' environmental and organic claims?' : 'Que certificações comprovam os padrões biológicos da Native Foods?',
      a: currentLang === 'en'
        ? 'Our products carry the official European Union Organic leaf logo under code PT-BIO-03, audited from tree harvest in Brazil through import and distribution in Portugal. We are also verified Non-GMO, 100% Vegan, and operate in accordance with Sedex ethical supplier guidelines.'
        : 'Todos os produtos ostentam a folha biológica da União Europeia (código PT-BIO-03), auditada desde a colheita no Pará até à receção em Portugal. Somos certificados Sem OGM, 100% Vegan e auditados por referenciais de comércio ético Sedex.'
    }
  ];

  return (
    <section id="sustainability" className="py-24 bg-[#FFFDF8] relative overflow-hidden border-t border-[#171717]/10 scroll-mt-16">
      
      {/* Decorative subtle ambient backdrop */}
      <div className="absolute top-0 right-1/4 w-[36rem] h-[36rem] bg-[#A6A9EE]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-[#155242]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[#171717]/10 pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#155242] mb-2">
              <Leaf className="w-4 h-4 text-[#155242]" />
              <span>{currentLang === 'en' ? 'Ecological Responsibility & Ethics' : 'Compromisso Ecológico & Ético'}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#777777]">Amazon to Portugal</span>
            </div>
            <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#171717] tracking-tight leading-[1.05]">
              {currentLang === 'en' ? (
                <>
                  Grounded in Nature.
                  <br />
                  <span className="italic font-normal text-[#155242]">Committed to Tomorrow.</span>
                </>
              ) : (
                <>
                  Enraizados na Natureza.
                  <br />
                  <span className="italic font-normal text-[#155242]">Comprometidos com o Futuro.</span>
                </>
              )}
            </h2>
          </div>
          <p className="text-sm text-[#777777] max-w-md font-normal leading-relaxed font-sans">
            {currentLang === 'en'
              ? 'We believe authentic nourishment must never come at the expense of our planet. By championing wild agroforestry, above-market wages, and clean cold distribution, we preserve the Amazonian canopy with every berry harvested.'
              : 'Acreditamos que a nutrição autêntica nunca deve custar o futuro do planeta. Ao defender a agrofloresta selvagem, salários justos e distribuição de frio limpa, preservamos a Amazónia a cada fruto colhido.'}
          </p>
        </div>

        {/* Impact Bar (Key Numbers) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-2xl bg-[#E2F0F1]/60 border border-[#155242]/15 mb-16 shadow-xs font-sans">
          <div className="text-center sm:text-left">
            <span className="font-sans text-3xl sm:text-4xl font-extrabold text-[#155242] block">24,000+</span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#171717]/80 mt-1 block">
              {currentLang === 'en' ? 'Hectares of Canopy Protected' : 'Hectares Protegidos'}
            </span>
          </div>
          <div className="text-center sm:text-left border-l border-[#155242]/15 pl-4 sm:pl-6">
            <span className="font-sans text-3xl sm:text-4xl font-extrabold text-[#155242] block">0%</span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#171717]/80 mt-1 block">
              {currentLang === 'en' ? 'Deforestation or Clear-Cutting' : 'Desflorestação ou Abate'}
            </span>
          </div>
          <div className="text-center sm:text-left border-l border-[#155242]/15 pl-4 sm:pl-6">
            <span className="font-sans text-3xl sm:text-4xl font-extrabold text-[#155242] block">120+</span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#171717]/80 mt-1 block">
              {currentLang === 'en' ? 'Ribeirinho Families Partnered' : 'Famílias Ribeirinhas Parceiras'}
            </span>
          </div>
          <div className="text-center sm:text-left border-l border-[#155242]/15 pl-4 sm:pl-6">
            <span className="font-sans text-3xl sm:text-4xl font-extrabold text-[#155242] block">100%</span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#171717]/80 mt-1 block">
              {currentLang === 'en' ? 'Recyclable Mono-Materials' : 'Mono-Materiais Recicláveis'}
            </span>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 font-sans">
          {commitments.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 rounded-2xl bg-[#FFFDF8] border border-[#171717]/10 shadow-xs flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#155242]/10 text-[#155242] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-sans text-3xl sm:text-4xl font-extrabold text-[#171717] block leading-none mb-1">
                    {item.stat}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#155242] block mb-3">
                    {item.statLabel}
                  </span>
                  <h3 className="font-sans text-lg font-bold text-[#171717] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#171717]/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#171717]/8 flex items-center gap-1.5 text-[11px] text-[#777777]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#155242]" />
                  <span>Verified Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* NEW SECTION 1: Interactive Wild Harvest Journey (Canopy to Table)  */}
        {/* ------------------------------------------------------------------ */}
        <div className="mb-20 p-8 sm:p-10 rounded-3xl bg-white border border-[#171717]/10 shadow-sm">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#BA4B23] mb-1">
                <Compass className="w-4 h-4" />
                <span>{currentLang === 'en' ? 'The Ethical Supply Chain' : 'A Cadeia de Valor Ética'}</span>
              </div>
              <h3 className="font-sans text-3xl sm:text-4xl font-extrabold text-[#171717]">
                {currentLang === 'en' ? 'The Wild Amazonian Harvest Cycle' : 'O Ciclo de Colheita Selvagem'}
              </h3>
            </div>
            <p className="text-xs text-[#777777] max-w-sm font-sans">
              {currentLang === 'en'
                ? 'Follow our 5-step transparent journey from river floodplains in Pará to our distribution hub in Portugal.'
                : 'Acompanhe as 5 etapas transparentes desde as várzeas fluviais no Pará até à chegada a Portugal.'}
            </p>
          </div>

          {/* Interactive Step Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-8 font-sans">
            {harvestSteps.map((step, idx) => (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveHarvestStep(idx)}
                className={`p-3.5 rounded-xl text-left border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  activeHarvestStep === idx
                    ? 'bg-[#155242] border-[#155242] text-white shadow-sm'
                    : 'bg-[#FFFDF8] border-[#171717]/10 text-[#171717] hover:border-[#155242]/40'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${activeHarvestStep === idx ? 'text-white/80' : 'text-[#777777]'}`}>
                    {step.number}
                  </span>
                  <span className={`text-[9px] uppercase px-1.5 py-0.5 rounded-md font-bold tracking-wider ${
                    activeHarvestStep === idx ? 'bg-white/20 text-white' : 'bg-[#155242]/10 text-[#155242]'
                  }`}>
                    {step.tag}
                  </span>
                </div>
                <span className="text-xs font-bold leading-tight line-clamp-2">
                  {step.title}
                </span>
              </button>
            ))}
          </div>

          {/* Active Step Showcase Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeHarvestStep}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="p-6 sm:p-8 rounded-2xl bg-[#FBF4D8]/50 border border-[#171717]/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 font-sans"
            >
              <div className="space-y-3 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-bold text-[#155242] bg-[#155242]/10 px-2.5 py-1 rounded-md">
                    {currentLang === 'en' ? `Stage ${harvestSteps[activeHarvestStep].number}` : `Etapa ${harvestSteps[activeHarvestStep].number}`}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#777777]">
                    {harvestSteps[activeHarvestStep].subtitle}
                  </span>
                </div>
                <h4 className="font-sans text-2xl sm:text-3xl font-extrabold text-[#171717]">
                  {harvestSteps[activeHarvestStep].title}
                </h4>
                <p className="text-xs sm:text-sm text-[#171717]/85 leading-relaxed font-sans">
                  {harvestSteps[activeHarvestStep].description}
                </p>
                <div className="inline-flex items-center gap-2 pt-2 text-xs font-bold text-[#155242]">
                  <CheckCircle2 className="w-4 h-4 text-[#155242]" />
                  <span>{harvestSteps[activeHarvestStep].metrics}</span>
                </div>
              </div>

              {/* Progress and quick nav */}
              <div className="flex lg:flex-col items-center gap-3 shrink-0 w-full lg:w-auto justify-between border-t lg:border-t-0 lg:border-l border-[#171717]/10 pt-4 lg:pt-0 lg:pl-6 font-sans">
                <div className="text-left lg:text-center">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#777777] block">
                    {currentLang === 'en' ? 'Cycle Stage' : 'Etapa do Ciclo'}
                  </span>
                  <span className="font-sans text-2xl font-extrabold text-[#155242]">
                    {activeHarvestStep + 1} / {harvestSteps.length}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    disabled={activeHarvestStep === 0}
                    onClick={() => setActiveHarvestStep((prev) => Math.max(0, prev - 1))}
                    className="px-3 py-1.5 rounded-lg border border-[#171717]/20 text-xs font-bold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white cursor-pointer"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    disabled={activeHarvestStep === harvestSteps.length - 1}
                    onClick={() => setActiveHarvestStep((prev) => Math.min(harvestSteps.length - 1, prev + 1))}
                    className="px-3 py-1.5 rounded-lg border border-[#171717]/20 text-xs font-bold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white cursor-pointer"
                  >
                    →
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

        {/* ------------------------------------------------------------------ */}
        {/* NEW SECTION 2: Ribeirinho Community Spotlight & Social Fair Trade   */}
        {/* ------------------------------------------------------------------ */}
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#4F5CF5]">
              <HeartHandshake className="w-4 h-4" />
              <span>{currentLang === 'en' ? 'Social Impact & Living Wages' : 'Impacto Social & Rendimento Justo'}</span>
            </div>
            <h3 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171717] leading-tight">
              {currentLang === 'en' ? (
                <>
                  Empowering the Guardians
                  <br />
                  <span className="italic font-normal text-[#4F5CF5]">of the Riverbanks.</span>
                </>
              ) : (
                <>
                  Capacitar os Guardiões
                  <br />
                  <span className="italic font-normal text-[#4F5CF5]">das Margens Fluviais.</span>
                </>
              )}
            </h3>
            <p className="text-xs sm:text-sm text-[#171717]/80 leading-relaxed">
              {currentLang === 'en'
                ? 'For generations, traditional ribeirinho communities have lived in harmony with the natural tidal rise and fall of the Amazon basin. Native Foods works without intermediaries, establishing guaranteed seasonal purchase agreements with over 120 family cooperatives.'
                : 'Há gerações que as comunidades ribeirinhas vivem em perfeita harmonia com os ciclos das marés amazónicas. A Native Foods atua sem intermediários especulativos, celebrando contratos de colheita direta com mais de 120 famílias em cooperativas locais.'}
            </p>
            
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#171717]/10">
                <div className="w-8 h-8 rounded-lg bg-[#4F5CF5]/10 text-[#4F5CF5] flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-bold text-xs text-[#171717]">
                    {currentLang === 'en' ? 'Above-Market Price Guarantee' : 'Preço Mínimo Acima do Mercado'}
                  </h5>
                  <p className="text-[11px] text-[#777777] mt-0.5">
                    {currentLang === 'en'
                      ? 'Protecting smallholders from commodity price speculation, ensuring families can invest in healthcare, education, and safe river boats.'
                      : 'Protege os pequenos produtores da volatilidade de preços, permitindo investir em educação infantil, saúde e barcos seguros.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#171717]/10">
                <div className="w-8 h-8 rounded-lg bg-[#155242]/10 text-[#155242] flex items-center justify-center shrink-0 mt-0.5">
                  <TreePine className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-bold text-xs text-[#171717]">
                    {currentLang === 'en' ? 'Living Trees Over Deforestation' : 'Árvores Vivas vs Desmatamento'}
                  </h5>
                  <p className="text-[11px] text-[#777777] mt-0.5">
                    {currentLang === 'en'
                      ? 'A standing açaí palm yields ongoing harvest value year after year, rendering destructive clear-cutting for cattle grazing economically unviable.'
                      : 'Um açaizeiro em pé gera colheitas contínuas ano após ano, tornando qualquer oferta de corte para pasto de gado economicamente desinteressante.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-[#155242] text-white space-y-6 relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#E2F0F1]/80 block">
              {currentLang === 'en' ? 'Harvester Voice · Pará Basin' : 'Voz Ribeirinha · Bacia do Pará'}
            </span>
            
            <blockquote className="font-sans text-xl sm:text-2xl italic leading-relaxed text-white/95">
              {currentLang === 'en'
                ? '"The forest feeds our children, and our children protect the forest. When companies respect the wild canopy and pay us with honesty, nobody ever needs to sell an ancient tree to a chainsaw."'
                : '"A floresta alimenta os nossos filhos, e os nossos filhos defendem a floresta. Quando somos pagos com honestidade pelo açaí selvagem, ninguém precisa de vender uma árvore antiga a uma motosserra."'
              }
            </blockquote>

            <div className="pt-4 border-t border-white/20 flex items-center justify-between">
              <div>
                <span className="font-bold text-sm block">Manuel D. & Cooperativa Ribeirinha</span>
                <span className="text-xs text-white/70">Abaetetuba, Pará · Amazon Basin</span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

        </div>

        {/* ------------------------------------------------------------------ */}
        {/* NEW SECTION 3: Packaging Innovation & Circular Economy (PP 05)     */}
        {/* ------------------------------------------------------------------ */}
        <div className="mb-20 p-8 sm:p-10 rounded-3xl bg-[#E2F0F1]/40 border border-[#155242]/15">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#155242] mb-1">
                <PackageCheck className="w-4 h-4" />
                <span>{currentLang === 'en' ? 'Circular Design & Materials' : 'Design Circular & Materiais'}</span>
              </div>
              <h3 className="font-sans text-3xl sm:text-4xl font-bold text-[#171717]">
                {currentLang === 'en' ? '100% Recyclable Packaging Formats' : 'Formatos de Embalagem 100% Recicláveis'}
              </h3>
            </div>
            <p className="text-xs text-[#777777] max-w-sm">
              {currentLang === 'en'
                ? 'Engineered with mono-material Polypropylene (PP 05) for seamless sorting in European and Portuguese recycling streams (Ponto Verde).'
                : 'Concebidas em polipropileno mono-material (PP 05) para reciclagem imediata no ecoponto amarelo sem resíduos mistos.'}
            </p>
          </div>

          {/* Format Selector Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {(['160g', '500g', '3.6kg'] as const).map((format) => (
              <button
                key={format}
                type="button"
                onClick={() => setActivePackagingFormat(format)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activePackagingFormat === format
                    ? 'bg-[#155242] text-white shadow-xs'
                    : 'bg-white text-[#171717] border border-[#171717]/10 hover:border-[#155242]/30'
                }`}
              >
                {format === '160g' ? (currentLang === 'en' ? '160g On-the-Go' : '160g Individual') : ''}
                {format === '500g' ? (currentLang === 'en' ? '500g Household Tub' : '500g Familiar') : ''}
                {format === '3.6kg' ? (currentLang === 'en' ? '3.6kg Foodservice Pail' : '3.6kg Balde Profissional') : ''}
              </button>
            ))}
          </div>

          {/* Selected Packaging Detail Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 sm:p-8 rounded-2xl bg-white border border-[#171717]/10">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#155242] block">
                {currentLang === 'en' ? 'Primary Material' : 'Material Principal'}
              </span>
              <h5 className="font-sans text-xl font-bold text-[#171717]">
                {packagingSpecs[activePackagingFormat].material}
              </h5>
              <p className="text-xs text-[#777777] pt-2">
                {packagingSpecs[activePackagingFormat].benefits}
              </p>
            </div>

            <div className="space-y-1 md:border-l border-[#171717]/10 md:pl-6">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#BA4B23] block">
                {currentLang === 'en' ? 'Recycling Destination' : 'Destino da Reciclagem'}
              </span>
              <h5 className="font-sans text-xl font-bold text-[#171717]">
                {packagingSpecs[activePackagingFormat].recyclingBin}
              </h5>
              <p className="text-xs text-[#777777] pt-2">
                {currentLang === 'en'
                  ? 'Compatible with standard automated infrared optical sorting plants in Lisbon and European recycling hubs.'
                  : 'Compatível com as centrais de triagem ótica por infravermelhos em Portugal.'}
              </p>
            </div>

            <div className="space-y-1 md:border-l border-[#171717]/10 md:pl-6">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#4F5CF5] block">
                {currentLang === 'en' ? 'Feature & Inks' : 'Funcionalidade & Tintas'}
              </span>
              <h5 className="font-sans text-xl font-bold text-[#171717]">
                {packagingSpecs[activePackagingFormat].spoon}
              </h5>
              <p className="text-xs text-[#777777] pt-2">
                {currentLang === 'en'
                  ? 'Printed exclusively with solvent-free, non-toxic vegetable-based soy and linseed inks.'
                  : 'Impressão exclusiva com tintas vegetais de soja e linhaça sem óleos minerais.'}
              </p>
            </div>
          </div>

        </div>

        {/* ------------------------------------------------------------------ */}
        {/* NEW SECTION 4: Biodiversity & Amazon Ecosystem Guardianship        */}
        {/* ------------------------------------------------------------------ */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#155242] block mb-2">
              {currentLang === 'en' ? 'Ecosystem Protection' : 'Proteção do Ecossistema'}
            </span>
            <h3 className="font-sans text-3xl sm:text-4xl font-bold text-[#171717]">
              {currentLang === 'en' ? 'Preserving Amazonian Biodiversity' : 'Preservação da Biodiversidade Amazónica'}
            </h3>
            <p className="text-xs sm:text-sm text-[#777777] mt-3">
              {currentLang === 'en'
                ? 'A wild açaí palm grove is not an orchard—it is a thriving primary ecosystem teeming with wildlife, native waterways, and ancient flora.'
                : 'Um açaizal selvagem não é um pomar artificial—é um ecossistema primário vivo e repleto de fauna, rios e espécies raras.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ecosystemPoints.map((point) => {
              const PointIcon = point.icon;
              return (
                <div
                  key={point.title}
                  className="p-6 rounded-2xl bg-white border border-[#171717]/10 shadow-xs hover:border-[#155242]/30 transition-all space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#155242]/10 text-[#155242] flex items-center justify-center">
                    <PointIcon className="w-5 h-5" />
                  </div>
                  <h4 className="font-sans text-lg font-bold text-[#171717]">
                    {point.title}
                  </h4>
                  <p className="text-xs text-[#171717]/75 leading-relaxed">
                    {point.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* NEW SECTION 5: Certifications & Verification Grid                  */}
        {/* ------------------------------------------------------------------ */}
        <div className="mb-20 p-8 rounded-3xl bg-white border border-[#171717]/10 shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4F5CF5] block mb-1">
              {currentLang === 'en' ? 'Independently Audited' : 'Auditorias Independentes'}
            </span>
            <h4 className="font-sans text-2xl sm:text-3xl font-bold text-[#171717]">
              {currentLang === 'en' ? 'Standards, Quality & Trust' : 'Normas, Qualidade & Transparência'}
            </h4>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            <div className="p-4 rounded-xl bg-[#FFFDF8] border border-[#171717]/8">
              <span className="text-lg font-bold text-[#155242] block">PT-BIO-03</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#777777] mt-1 block">
                {currentLang === 'en' ? 'EU Organic Certified' : 'Biológico Certificado UE'}
              </span>
            </div>
            <div className="p-4 rounded-xl bg-[#FFFDF8] border border-[#171717]/8">
              <span className="text-lg font-bold text-[#171717] block">NON-GMO</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#777777] mt-1 block">
                {currentLang === 'en' ? '100% Non-Transgenic' : '100% Sem OGM'}
              </span>
            </div>
            <div className="p-4 rounded-xl bg-[#FFFDF8] border border-[#171717]/8">
              <span className="text-lg font-bold text-[#155242] block">100% VEGAN</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#777777] mt-1 block">
                {currentLang === 'en' ? 'Plant-Based Purity' : 'Origem 100% Vegetal'}
              </span>
            </div>
            <div className="p-4 rounded-xl bg-[#FFFDF8] border border-[#171717]/8">
              <span className="text-lg font-bold text-[#BA4B23] block">PONTO VERDE</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#777777] mt-1 block">
                {currentLang === 'en' ? 'Circular Pack Partner' : 'Embalagem Reciclável'}
              </span>
            </div>
            <div className="p-4 rounded-xl bg-[#FFFDF8] border border-[#171717]/8">
              <span className="text-lg font-bold text-[#4F5CF5] block">SEDEX / SMETA</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#777777] mt-1 block">
                {currentLang === 'en' ? 'Ethical Trade Audited' : 'Comércio Ético Auditado'}
              </span>
            </div>
            <div className="p-4 rounded-xl bg-[#FFFDF8] border border-[#171717]/8">
              <span className="text-lg font-bold text-[#171717] block">GLUTEN FREE</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#777777] mt-1 block">
                {currentLang === 'en' ? 'Safe Allergen Control' : 'Isento de Glúten'}
              </span>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* NEW SECTION 6: Sustainability FAQ (Accordion)                      */}
        {/* ------------------------------------------------------------------ */}
        <div className="mb-20 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#155242] block mb-2">
              {currentLang === 'en' ? 'Frequently Answered Questions' : 'Perguntas Frequentes'}
            </span>
            <h3 className="font-sans text-3xl sm:text-4xl font-bold text-[#171717]">
              {currentLang === 'en' ? 'Clarity & Accountability' : 'Transparência em Cada Detalhe'}
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-[#171717]/10 bg-white overflow-hidden transition-all shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FBF4D8]/30 transition-colors"
                  >
                    <span className="font-sans text-base sm:text-lg font-bold text-[#171717]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#155242] transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#171717]/80 leading-relaxed border-t border-[#171717]/5"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Bottom Sustainability Pledge Banner & Contact Action               */}
        {/* ------------------------------------------------------------------ */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#FFFDF8] border border-[#171717]/10 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-[#155242]/10 flex items-center justify-center text-[#155242] shrink-0">
              <HeartHandshake className="w-8 h-8" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#155242] block mb-1">
                {currentLang === 'en' ? 'Our Environmental & Social Charter' : 'A Nossa Carta de Sustentabilidade'}
              </span>
              <h4 className="font-sans text-2xl sm:text-3xl font-bold text-[#171717]">
                {currentLang === 'en'
                  ? 'Certified Organic & Wild Amazonian Stewardship'
                  : 'Certificação Biológica e Conservação da Amazónia'}
              </h4>
              <p className="text-xs sm:text-sm text-[#777777] mt-1.5 max-w-xl leading-relaxed">
                {currentLang === 'en'
                  ? 'All Native Foods products comply with European Organic Regulation (PT-BIO-03). Audited and certified from river canopy to Portuguese table.'
                  : 'Todos os produtos Native Foods cumprem rigorosamente as normas biológicas europeias (PT-BIO-03), auditados desde as copas dos rios no Pará até à mesa portuguesa.'}
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
            className="px-8 py-4 bg-[#155242] hover:bg-[#0E3A2E] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap shrink-0 flex items-center gap-2 shadow-sm cursor-pointer"
          >
            <span>{currentLang === 'en' ? 'Connect With Our Team' : 'Falar com a Nossa Equipa'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
