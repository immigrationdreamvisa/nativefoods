import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  Zap, 
  Sparkles, 
  Droplets, 
  Leaf, 
  ArrowRight, 
  ShieldCheck, 
  Scale, 
  Activity, 
  Award, 
  BookOpen, 
  Info,
  CheckCircle2,
  Compass
} from 'lucide-react';

interface SuperfoodsSectionProps {
  currentLang: 'en' | 'pt';
  onExploreNutrition: () => void;
}

export const SuperfoodsSection: React.FC<SuperfoodsSectionProps> = ({
  currentLang,
  onExploreNutrition
}) => {
  const [activeSuperfood, setActiveSuperfood] = useState<'acai' | 'pitaya' | 'guava' | 'guarana'>('acai');

  // 1. Detailed Botanical Superfood Data
  const superfoodData = {
    acai: {
      name: currentLang === 'en' ? 'Wild Amazonian Açaí' : 'Açaí Selvagem da Amazónia',
      botanicalName: 'Euterpe oleracea',
      origin: currentLang === 'en' ? 'Pará Floodplain Estuaries (Várzeas)' : 'Várzeas do Rio Amazonas, Pará',
      oracScore: '102,700 µmol TE/100g',
      image: '/src/assets/images/hero_acai_bowl_1793423320255.jpg',
      badge: currentLang === 'en' ? 'Signature Superfood' : 'Superalimento Estrela',
      description: currentLang === 'en'
        ? 'Growing naturally on 25-meter wild palm trees along tidal riverbanks, açaí berries develop extraordinary concentrations of purple cyanidin-3-glucoside anthocyanins to shield their genetic structure from harsh tropical ultraviolet sunlight. Packed with plant omegas and low natural sugars, it is a uniquely balanced vitality source.'
        : 'Crescendo no topo de açaizeiros selvagens de 25 metros nas margens dos rios, os bagos de açaí produzem imensas antocianinas cianidina-3-glicosídeo para proteger as sementes do sol equatorial intenso. Com ácidos gordos ómega e baixo teor de frutose natural, é uma fonte rara e equilibrada de vitalidade celular.',
      compounds: [
        { label: currentLang === 'en' ? 'Cyanidin Anthocyanins' : 'Antocianinas Cianidinas', value: 'Over 1,420 mg / kg' },
        { label: currentLang === 'en' ? 'Omegas 3, 6 & 9' : 'Ómegas 3, 6 e 9', value: '4.8g per 100g pure pulp' },
        { label: currentLang === 'en' ? 'Prebiotic Dietary Fiber' : 'Fibras Prebióticas', value: '4.6g per 100g' },
        { label: currentLang === 'en' ? 'Glycemic Index' : 'Índice Glicémico', value: 'Ultra-low (0g added sugar)' }
      ],
      healthBenefits: [
        currentLang === 'en' ? 'Neutralizes cellular free radicals and oxidative stress' : 'Neutraliza radicais livres e combate o stress oxidativo',
        currentLang === 'en' ? 'Supports healthy blood lipid and cardiovascular balance' : 'Apoia a saúde cardiovascular e o equilíbrio lipídico',
        currentLang === 'en' ? 'Provides sustained, crash-free physical stamina' : 'Fornece resistência física duradoura sem quebras de energia',
        currentLang === 'en' ? 'Nourishes beneficial intestinal microflora' : 'Alimenta a flora intestinal com fibras naturais solúveis'
      ]
    },
    pitaya: {
      name: currentLang === 'en' ? 'Deep Red Pitaya (Dragon Fruit)' : 'Pitaya Vermelha Intensa',
      botanicalName: 'Hylocereus polyrhizus',
      origin: currentLang === 'en' ? 'Tropical Amazon Rainforest Estuaries' : 'Regiões Tropicais Húmidas do Amazonas',
      oracScore: '14,800 µmol TE/100g',
      image: '/src/assets/images/product_pitaya_dragonfruit_1793423352501.jpg',
      badge: currentLang === 'en' ? 'Cellular Radiance' : 'Luminosidade Celular',
      description: currentLang === 'en'
        ? 'Deep crimson red dragon fruit is celebrated for its natural betalain pigments—the same bio-active antioxidants found in beets, but accompanied by a refreshing tropical sweetness. Its edible black seeds are loaded with essential linoleic fatty acids and dietary fibers.'
        : 'A pitaya de polpa carmesim intensa é famosa pelos seus pigmentos betalaínas naturais—os mesmos bio-antioxidantes da beterraba, mas com frescura tropical e sementes crocantes ricas em ácidos gordos linoleicos essenciais.',
      compounds: [
        { label: currentLang === 'en' ? 'Active Betalains' : 'Betalaínas Ativas', value: 'Natural cellular colorants' },
        { label: currentLang === 'en' ? 'Vitamin C Complex' : 'Complexo Vitamina C', value: 'High bio-availability' },
        { label: currentLang === 'en' ? 'Oligosaccharide Prebiotics' : 'Oligossacarídeos Prebióticos', value: 'Supports gut microbiome' },
        { label: currentLang === 'en' ? 'Natural Electrolytes' : 'Eletrólitos Naturais', value: 'Rich in potassium & magnesium' }
      ],
      healthBenefits: [
        currentLang === 'en' ? 'Stimulates skin hydration and collagen resilience' : 'Estimula a hidratação e luminosidade natural da pele',
        currentLang === 'en' ? 'Promotes rapid electrolyte replenishment post-workout' : 'Favorece a reposição de eletrólitos após exercício físico',
        currentLang === 'en' ? 'Natural digestive regularity through edible micro-seeds' : 'Promove a regularidade digestiva através das microsementes',
        currentLang === 'en' ? 'Zero artificial colorants—100% natural magenta tone' : 'Zero corantes artificiais—tom magenta 100% biológico'
      ]
    },
    guava: {
      name: currentLang === 'en' ? 'Amazonian Red Guava' : 'Goiaba Vermelha da Amazónia',
      botanicalName: 'Psidium guajava',
      origin: currentLang === 'en' ? 'Native Neotropical Forest Canopy' : 'Florestas Neotropicais Nativas',
      oracScore: '25,500 µmol TE/100g',
      image: '/src/assets/images/recipe_guava_acai_smoothie_1793423395094.jpg',
      badge: currentLang === 'en' ? 'Immune Fortifier' : 'Escudo Imunitário',
      description: currentLang === 'en'
        ? 'Amazonian red guava contains over four times the Vitamin C concentration of fresh oranges, paired with powerful carotenoids and lycopene. Its luscious, fragrant purée provides natural body and floral complexity when blended with pure wild açaí.'
        : 'A goiaba vermelha amazónica contém mais de quatro vezes a concentração de Vitamina C das laranjas, combinada com carotenoides e licopeno protetor. Confere uma textura aveludada e aroma floral quando combinada com o açaí.',
      compounds: [
        { label: currentLang === 'en' ? 'Natural Vitamin C' : 'Vitamina C Natural', value: '4× more than citrus oranges' },
        { label: currentLang === 'en' ? 'Lycopene Carotenoids' : 'Licopeno e Carotenoides', value: 'High cellular defense' },
        { label: currentLang === 'en' ? 'Folate (Vitamin B9)' : 'Folatos (Vitamina B9)', value: 'Essential metabolic cofactor' },
        { label: currentLang === 'en' ? 'Soluble Pectin' : 'Pectina Solúvel', value: 'Gentle on digestion' }
      ],
      healthBenefits: [
        currentLang === 'en' ? 'Dramatically reinforces natural immune system defense' : 'Reforça as defesas naturais do sistema imunitário',
        currentLang === 'en' ? 'Antioxidant carotenoids protect against environmental stress' : 'Carotenoides que protegem contra agentes poluentes',
        currentLang === 'en' ? 'High potassium supports optimal arterial pressure' : 'Alto teor de potássio que regula a pressão arterial',
        currentLang === 'en' ? 'Silky, velvety mouthfeel without synthetic thickeners' : 'Consistência cremosa sem qualquer espessante artificial'
      ]
    },
    guarana: {
      name: currentLang === 'en' ? 'Organic Wild Guaraná' : 'Guaraná Biológico Selvagem',
      botanicalName: 'Paullinia cupana',
      origin: currentLang === 'en' ? 'Lower Amazon Rainforest (Maués)' : 'Baixo Amazonas (Região de Maués)',
      oracScore: '19,200 µmol TE/100g',
      image: '/src/assets/images/product_acai_original_1793423320516.jpg',
      badge: currentLang === 'en' ? 'Cognitive Stamina' : 'Foco Cognitivo',
      description: currentLang === 'en'
        ? 'Traditionally cultivated and dried over aromatic wood smoke by indigenous Amazonian tribes, guaraná seeds contain guaranine—a naturally bound form of caffeine that binds to tannins and plant saponins, releasing slowly over 4 to 6 hours without jitters or sudden crashes.'
        : 'Seco tradicionalmente ao fumo aromático de madeiras amazónicas, o guaraná contém guaranina ligada a taninos e saponinas, proporcionando uma libertação lenta de energia durante 4 a 6 horas sem ansiedade nem quebras bruscas.',
      compounds: [
        { label: currentLang === 'en' ? 'Natural Guaranine' : 'Guaranina Natural', value: 'Slow-release mental focus' },
        { label: currentLang === 'en' ? 'Plant Tannins' : 'Taninos Vegetais', value: 'Gentle, delayed absorption' },
        { label: currentLang === 'en' ? 'Theobromine' : 'Teobromina', value: 'Mood elevation & blood flow' },
        { label: currentLang === 'en' ? 'Synergistic Flavonols' : 'Flavonóis Sinérgicos', value: 'Enhanced micro-circulation' }
      ],
      healthBenefits: [
        currentLang === 'en' ? '4 to 6 hours of clean mental clarity and alertness' : '4 a 6 horas de foco mental nítido e produtividade',
        currentLang === 'en' ? 'Zero nervous tension or rapid heart-rate spikes' : 'Zero tremores ou picos acelerados de frequência cardíaca',
        currentLang === 'en' ? 'Complements natural sports performance and endurance' : 'Otimiza o rendimento físico em treinos desportivos',
        currentLang === 'en' ? 'Traditional botanical herb revered for centuries' : 'Erva botânica milenar respeitada pelas comunidades'
      ]
    }
  };

  // 2. ORAC Antioxidant Comparison Benchmark (µmol TE / 100g)
  const oracBenchmarks = [
    { name: currentLang === 'en' ? 'Wild Amazon Açaí' : 'Açaí Selvagem da Amazónia', score: 102700, barWidth: '100%', highlight: true, note: '10× Blueberries' },
    { name: currentLang === 'en' ? 'Raw Guava Purée' : 'Polpa de Goiaba Pura', score: 25500, barWidth: '25%', highlight: false, note: 'High Lycopene' },
    { name: currentLang === 'en' ? 'Goji Berry' : 'Bagas de Goji', score: 25300, barWidth: '24.6%', highlight: false, note: 'Ancient tonic' },
    { name: currentLang === 'en' ? 'Red Pitaya (Dragon Fruit)' : 'Pitaya Vermelha', score: 14800, barWidth: '14.4%', highlight: false, note: 'Rich Betalains' },
    { name: currentLang === 'en' ? 'Wild Blueberries' : 'Mirtilos Silvestres', score: 9621, barWidth: '9.3%', highlight: false, note: 'Standard fruit' },
    { name: currentLang === 'en' ? 'Pomegranate Seeds' : 'Romã Fresca', score: 4479, barWidth: '4.3%', highlight: false, note: 'Juice reference' }
  ];

  // 3. Four Bio-Chemical Pillars of Superfood Science
  const bioPillars = [
    {
      icon: Sparkles,
      title: currentLang === 'en' ? '1. Anthocyanin Defense Shield' : '1. Escudo de Antocianinas',
      subtitle: currentLang === 'en' ? 'Mitochondrial Cellular Protection' : 'Proteção Celular e Mitocondrial',
      text: currentLang === 'en'
        ? 'Cyanidin-3-glucoside is one of nature\'s most potent free-radical scavengers. It directly traverses biological membranes to neutralize reactive oxygen species (ROS) produced by daily metabolic stress, UV exposure, and pollution.'
        : 'A cianidina-3-glicosídeo atravessa as membranas celulares para neutralizar espécies reativas de oxigénio (radicais livres), protegendo as mitocôndrias e o ADN do envelhecimento precoce provocado pelo stress diário.'
    },
    {
      icon: Heart,
      title: currentLang === 'en' ? '2. Cardioprotective Plant Omegas' : '2. Ómegas Vegetais Cardioprotetores',
      subtitle: currentLang === 'en' ? 'Oleic & Linoleic Fatty Acids' : 'Ácidos Oleico e Linoleico (3-6-9)',
      text: currentLang === 'en'
        ? 'Unlike common orchard fruits comprised almost entirely of water and fructose, wild açaí resembles olive oil or avocado in its fatty acid spectrum: rich in monounsaturated Oleic acid (Omega 9) and essential Linoleic acid (Omega 6).'
        : 'Ao contrário das frutas comuns de pomar que consistem quase só em água e frutose, o açaí selvagem partilha o perfil lipídico do azeite virgem e do abacate: abundante em ácido oleico (ómega 9) e linoleico (ómega 6).'
    },
    {
      icon: Leaf,
      title: currentLang === 'en' ? '3. Prebiotic Microbiome Harmony' : '3. Harmonia da Microbiota Intestinal',
      subtitle: currentLang === 'en' ? 'Insoluble Fermentable Polysaccharides' : 'Polissacarídeos Prebióticos Naturais',
      text: currentLang === 'en'
        ? 'With over 4.5g of wholesome dietary fiber per 100g, pure açaí provides the essential complex plant polysaccharides that selectively feed beneficial Bifidobacterium and Lactobacillus colonies in the human digestive system.'
        : 'Com mais de 4.5g de fibras por 100g de polpa pura, o açaí fornece polissacarídeos complexos que alimentam seletivamente as colónias probióticas de Bifidobactérias e Lactobacilos essenciais à digestão e bem-estar.'
    },
    {
      icon: Zap,
      title: currentLang === 'en' ? '4. Clean Low-Glycemic Release' : '4. Energia Estável de Baixo Índice Glicémico',
      subtitle: currentLang === 'en' ? 'Zero Insulin Spikes or Energy Crashes' : 'Sem Picos de Insulina nem Quebras',
      text: currentLang === 'en'
        ? 'Pure wild açaí contains negligible sugars (less than 1g per 100g in our Zero Sugar formulation). Fueling your body with healthy fatty acids instead of refined glucose ensures clean, steady, hour-after-hour physical and mental focus.'
        : 'O açaí puro não refinado quase não contém açúcares (menos de 1g por 100g no formato Zero Açúcar). Fornecer energia ao corpo através de ácidos gordos saudáveis previne picos de insulina e fadiga após as refeições.'
    }
  ];

  return (
    <section id="superfoods" className="py-24 bg-[#FBF4D8] relative overflow-hidden scroll-mt-16">
      
      {/* Decorative ambient blurred color spots */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#4F5CF5]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[30rem] h-[30rem] bg-[#155242]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* ========================================================================= */}
        {/* SECTION 1: EDITORIAL HERO & HARVEST PHOTOGRAPHY                           */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Left Column: Large Harvest Photography (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#171717]/10 aspect-4/3 group bg-[#FFFDF8]">
              <img
                src="/src/assets/images/superfood_harvest_1793423320923.jpg"
                alt="Sustainable wild açaí harvest in the Amazon rainforest floodplain canopy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/75 via-transparent to-transparent" />
              
              {/* Photo metadata caption */}
              <div className="absolute bottom-6 left-6 right-6 text-[#FFFDF8] flex items-end justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#A6A9EE] block mb-1">
                    {currentLang === 'en' ? 'Direct From The Source' : 'Diretamente da Origem'}
                  </span>
                  <p className="font-sans text-xl sm:text-2xl font-bold">
                    Várzeas of the Amazon River, Pará
                  </p>
                  <p className="text-white/80 text-xs mt-1">
                    {currentLang === 'en' 
                      ? 'Wild tree-top harvest by local ribeirinho families' 
                      : 'Colheita manual no topo das copas por famílias ribeirinhas'}
                  </p>
                </div>
                <div className="px-3.5 py-1.5 rounded-lg bg-[#4F5CF5] text-white text-xs font-bold tracking-wide shrink-0">
                  Wild & Pure
                </div>
              </div>
            </div>

            {/* Overlapping Decorative Stat Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -right-4 sm:-right-6 bg-[#FFFDF8] rounded-2xl p-6 border border-[#171717]/10 shadow-2xl max-w-[260px] hidden sm:block"
            >
              <div className="flex items-center gap-2 text-[#4F5CF5] mb-1">
                <Sparkles className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-wider">Antioxidant Power</span>
              </div>
              <p className="font-sans text-3xl sm:text-4xl font-extrabold text-[#171717] leading-none mb-1">
                10× More
              </p>
              <p className="text-xs text-[#777777] leading-relaxed">
                {currentLang === 'en'
                  ? 'antioxidants than blueberries, protecting your cells naturally every day.'
                  : 'antioxidantes do que mirtilos silvestres, protegendo as suas células todos os dias.'}
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Narrative, Philosophy & Pillars (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#4F5CF5] mb-3">
              <Leaf className="w-4 h-4 text-[#4F5CF5]" />
              <span>{currentLang === 'en' ? 'Superfood Intelligence & Science' : 'Inteligência & Ciência Nutricional'}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#777777]">100% Plant Bio-Power</span>
            </div>

            <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#171717] tracking-tight leading-[1.05] mb-6">
              Feel Good.
              <br />
              <span className="italic font-normal text-[#4F5CF5]">Eat Naturally.</span>
            </h2>

            <p className="text-base text-[#171717]/85 leading-relaxed font-normal mb-8 max-w-xl">
              {currentLang === 'en'
                ? 'True superfoods are never engineered in laboratories—they are harvested where volcanic soils, equatorial sunlight, and wild rainforest biodiversity thrive untouched. The Native Foods Company brings this concentrated botanical power directly to Portugal with zero dilution, zero synthetic fillers, and uncompromised transparency.'
                : 'Os verdadeiros superalimentos nunca nascem em laboratório—brotam onde os solos férteis, a luz equatorial e a biodiversidade selvagem prosperam intactos. A Native Foods traz este poder botânico concentrado diretamente para Portugal sem diluições, sem aditivos químicos e com total transparência.'}
            </p>

            {/* Quick Feature Chips */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="p-3.5 rounded-xl bg-[#FFFDF8] border border-[#171717]/8 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#4F5CF5] shrink-0" />
                <span className="text-xs font-bold text-[#171717]">
                  {currentLang === 'en' ? '100% Wild Harvested' : '100% Colheita Selvagem'}
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#FFFDF8] border border-[#171717]/8 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#4F5CF5] shrink-0" />
                <span className="text-xs font-bold text-[#171717]">
                  {currentLang === 'en' ? 'PT-BIO-03 EU Organic' : 'Certificado Biológico UE'}
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#FFFDF8] border border-[#171717]/8 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#4F5CF5] shrink-0" />
                <span className="text-xs font-bold text-[#171717]">
                  {currentLang === 'en' ? 'Zero Corn Syrups' : 'Zero Xaropes Artificiais'}
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#FFFDF8] border border-[#171717]/8 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#4F5CF5] shrink-0" />
                <span className="text-xs font-bold text-[#171717]">
                  {currentLang === 'en' ? '-18°C Bio-Preserved' : 'Bio-Preservado a -18°C'}
                </span>
              </div>
            </div>

            {/* Call to action button */}
            <div>
              <button
                onClick={onExploreNutrition}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#4F5CF5] hover:bg-[#3D4AE0] text-[#FFFDF8] rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 shadow-sm cursor-pointer"
              >
                <span>{currentLang === 'en' ? 'Explore Product Collection' : 'Explorar Gama de Produtos'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* SECTION 2: THE AMAZON BIO-VAULT — INTERACTIVE SUPERFOOD EXPLORER          */}
        {/* ========================================================================= */}
        <div className="mb-24 p-8 sm:p-12 rounded-3xl bg-[#FFFDF8] border border-[#171717]/10 shadow-sm">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-[#171717]/10 pb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#4F5CF5] mb-1">
                <Compass className="w-4 h-4" />
                <span>{currentLang === 'en' ? 'Botanical Monograph' : 'Monografia Botânica'}</span>
              </div>
              <h3 className="font-sans text-3xl sm:text-4xl font-extrabold text-[#171717]">
                {currentLang === 'en' ? 'The Amazonian Superfood Vault' : 'Os Superalimentos Nativos da Amazónia'}
              </h3>
            </div>
            <p className="text-xs text-[#777777] max-w-sm">
              {currentLang === 'en'
                ? 'Select a botanical ingredient to inspect its unique phytochemical profile, traditional lore, and active phytonutrients.'
                : 'Selecione um ingrediente nativo para analisar o seu perfil fitoquímico e princípios ativos.'}
            </p>
          </div>

          {/* Interactive Superfood Tabs */}
          <div className="flex flex-wrap gap-2.5 mb-8">
            {(['acai', 'pitaya', 'guava', 'guarana'] as const).map((key) => {
              const item = superfoodData[key];
              const isSelected = activeSuperfood === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveSuperfood(key)}
                  className={`px-5 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? 'bg-[#171717] text-white shadow-md'
                      : 'bg-[#FBF4D8] text-[#171717] hover:bg-[#FBF4D8]/70 border border-[#171717]/10'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#4F5CF5]' : 'bg-[#171717]/30'}`} />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Superfood Detail Showcase */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSuperfood}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Image with overlay badge */}
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-square border border-[#171717]/10 shadow-md">
                <img
                  src={superfoodData[activeSuperfood].image}
                  alt={superfoodData[activeSuperfood].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-md text-[11px] font-bold text-white uppercase tracking-wider">
                  {superfoodData[activeSuperfood].badge}
                </div>
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-sm shadow-xs border border-[#171717]/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#777777] block">ORAC Activity</span>
                    <span className="text-sm font-bold text-[#171717] font-mono">
                      {superfoodData[activeSuperfood].oracScore}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-bold text-[#777777] block">Scientific Genus</span>
                    <span className="text-xs font-sans italic font-bold text-[#4F5CF5]">
                      {superfoodData[activeSuperfood].botanicalName}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Phytochemical breakdown & benefits */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4F5CF5] mb-1">
                    <span>{superfoodData[activeSuperfood].origin}</span>
                  </div>
                  <h4 className="font-sans text-3xl sm:text-4xl font-extrabold text-[#171717]">
                    {superfoodData[activeSuperfood].name}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#171717]/85 leading-relaxed font-sans mt-3">
                    {superfoodData[activeSuperfood].description}
                  </p>
                </div>

                {/* Phytochemical Compounds Grid */}
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#777777] block mb-2">
                    {currentLang === 'en' ? 'Key Phytochemical Nutrients' : 'Compostos Fitoquímicos Chave'}
                  </span>
                  <div className="grid grid-cols-2 gap-3">
                    {superfoodData[activeSuperfood].compounds.map((comp) => (
                      <div key={comp.label} className="p-3 rounded-xl bg-[#FBF4D8]/60 border border-[#171717]/10">
                        <span className="text-xs font-bold text-[#171717] block">
                          {comp.label}
                        </span>
                        <span className="text-[11px] text-[#4F5CF5] font-semibold block mt-0.5">
                          {comp.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Verified Physiological Benefits */}
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#777777] block mb-2">
                    {currentLang === 'en' ? 'Target Physiological Benefits' : 'Benefícios Fisiológicos Comprovados'}
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#171717]/80">
                    {superfoodData[activeSuperfood].healthBenefits.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#155242] shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

        </div>

        {/* ========================================================================= */}
        {/* SECTION 3: ANTIOXIDANT ORAC BENCHMARK TABLE                               */}
        {/* ========================================================================= */}
        <div className="mb-24 p-8 sm:p-12 rounded-3xl bg-[#171717] text-white shadow-2xl">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-white/10 pb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#A6A9EE] mb-2">
                <Scale className="w-4 h-4" />
                <span>{currentLang === 'en' ? 'Antioxidant Verification' : 'Verificação Antioxidante'}</span>
              </div>
              <h3 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                {currentLang === 'en' ? 'ORAC Antioxidant Score Comparison' : 'Comparativo de Potência Antioxidante (ORAC)'}
              </h3>
            </div>
            <p className="text-xs text-white/70 max-w-sm leading-relaxed">
              {currentLang === 'en'
                ? 'Oxygen Radical Absorbance Capacity (ORAC) measures a food\'s ability to deactivate free radicals. Higher values denote superior cellular defense.'
                : 'A Capacidade de Absorção de Radicais de Oxigénio (ORAC) afere a capacidade de desativar radicais livres por 100g de matéria pura.'}
            </p>
          </div>

          {/* Bar Chart Representation */}
          <div className="space-y-4">
            {oracBenchmarks.map((item) => (
              <div key={item.name} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center gap-2 font-bold">
                    <span>{item.name}</span>
                    {item.highlight && (
                      <span className="px-2 py-0.5 bg-[#4F5CF5] text-white text-[10px] uppercase font-bold rounded-md">
                        {currentLang === 'en' ? 'Highest Bio-Density' : 'Máxima Bio-Densidade'}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-white/60 hidden sm:inline">{item.note}</span>
                    <span className="font-mono font-bold text-white sm:text-base">
                      {item.score.toLocaleString()} <span className="text-[11px] font-normal text-white/60">µmol TE</span>
                    </span>
                  </div>
                </div>

                {/* Bar */}
                <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: item.barWidth }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className={`h-full rounded-full ${
                      item.highlight 
                        ? 'bg-gradient-to-r from-[#4F5CF5] to-[#A6A9EE]' 
                        : 'bg-white/40'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6 mt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-white/60 gap-4">
            <span>* Standardized ORAC laboratory testing per 100g dry weight benchmark. USDA & independent scientific assays.</span>
            <div className="flex items-center gap-1.5 text-white/80 font-bold">
              <ShieldCheck className="w-4 h-4 text-[#4F5CF5]" />
              <span>Certified 100% Raw Wild Harvest</span>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* SECTION 4: THE FOUR BIO-CHEMICAL PILLARS OF SUPERFOOD SCIENCE              */}
        {/* ========================================================================= */}
        <div className="mb-24">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4F5CF5] block mb-2">
              {currentLang === 'en' ? 'Cellular Mechanisms' : 'Mecanismos Celulares'}
            </span>
            <h3 className="font-sans text-3xl sm:text-4xl font-extrabold text-[#171717]">
              {currentLang === 'en' ? 'The Science Behind Pure Vitality' : 'A Ciência por Trás da Pura Vitalidade'}
            </h3>
            <p className="text-xs sm:text-sm text-[#777777] mt-3">
              {currentLang === 'en'
                ? 'How the unique molecular structure of Amazonian superfoods nourishes your cardiovascular system, microbiome, and energy reserves.'
                : 'Como a estrutura molecular dos superalimentos amazónicos apoia o sistema cardiovascular, a microbiota e os níveis de energia.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bioPillars.map((pillar) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-8 rounded-3xl bg-[#FFFDF8] border border-[#171717]/10 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#4F5CF5]/10 text-[#4F5CF5] flex items-center justify-center mb-5">
                      <PillarIcon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#4F5CF5] block mb-1">
                      {pillar.subtitle}
                    </span>
                    <h4 className="font-sans text-2xl font-bold text-[#171717] mb-3">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#171717]/80 leading-relaxed font-sans">
                      {pillar.text}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-[#171717]/8 flex items-center gap-2 text-xs font-bold text-[#155242]">
                    <CheckCircle2 className="w-4 h-4 text-[#155242]" />
                    <span>Clinically Documented Benefit</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Clean spacing at bottom of section */}
        <div className="pt-4" />

      </div>
    </section>
  );
};
