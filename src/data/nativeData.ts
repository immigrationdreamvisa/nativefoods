export interface Product {
  id: string;
  name: string;
  portugueseName: string;
  tagline: string;
  category: 'pure-acai' | 'zero-sugar' | 'exotic-blends';
  description: string;
  image: string;
  sizes: string[];
  defaultSize: string;
  isZeroSugar?: boolean;
  accentColor: string;
  calories: string; // per 100g
  highlights: string[];
  ingredients: string[];
  nutritionalTable: {
    energy: string;
    fat: string;
    saturates: string;
    carbohydrates: string;
    sugars: string;
    fiber: string;
    protein: string;
    salt: string;
    antioxidants: string;
  };
  tastingNotes: string;
  idealFor: string[];
  b2bFormat: string;
  origin?: string;
  badge?: { en: string; pt: string; color: string };
}

export interface Recipe {
  id: string;
  title: string;
  portugueseTitle: string;
  category: 'bowls' | 'smoothies' | 'baking' | 'treats';
  prepTime: string;
  difficulty: 'Easy' | 'Medium';
  servings: string;
  image: string;
  summary: string;
  ingredients: string[];
  instructions: string[];
  proTip: string;
  calories: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'original-acai',
    name: 'Original Acai',
    portugueseName: 'Açaí Original',
    tagline: 'The Authentic Taste of the Amazon',
    category: 'pure-acai',
    description: 'Our signature organic wild-harvested açaí purée, prepared according to traditional Amazonian standards with a delicate touch of organic guarana aroma and natural sweetness. Incredibly rich, velvety, and packed with vitality.',
    image: '/src/assets/images/product_acai_original_1793423320516.jpg',
    sizes: ['160g Tub', '500g Tub', '3.6kg Foodservice'],
    defaultSize: '500g Tub',
    accentColor: '#4F5CF5',
    calories: '98 kcal',
    badge: { en: 'Amazon Signature', pt: 'Assinatura Amazónia', color: 'bg-[#4F5CF5] text-[#FFFDF8]' },
    highlights: ['Wild Harvested', 'High in Anthocyanins', 'Omegas 3, 6 & 9', 'Rich in Dietary Fiber'],
    ingredients: ['Organic wild açaí pulp (85%)', 'Organic demerara cane sugar', 'Water', 'Organic guarana extract', 'Organic sunflower lecithin', 'Citric acid'],
    nutritionalTable: {
      energy: '412 kJ / 98 kcal',
      fat: '4.2 g',
      saturates: '1.0 g',
      carbohydrates: '12.8 g',
      sugars: '10.5 g',
      fiber: '4.6 g',
      protein: '1.4 g',
      salt: '< 0.01 g',
      antioxidants: '1,420 mg / kg ORAC value'
    },
    tastingNotes: 'Deep, earthy berry profile with notes of raw dark cacao, gentle guarana crispness, and a velvety smooth melt-in-mouth finish.',
    idealFor: ['Traditional Lisbon-style açaí bowls', 'Pre-workout booster spoons', 'Gourmet dessert bases', 'Café signature bowls'],
    b2bFormat: '3.6kg resealable buckets ready for scoop or soft-serve dispensing.'
  },
  {
    id: 'native-acai-zero-sugar',
    name: 'Native Acai Zero Sugar',
    portugueseName: 'Açaí Native Zero Açúcar',
    tagline: '100% Pure Wild Forest Superfood',
    category: 'zero-sugar',
    description: 'Pure, unadulterated Amazonian açaí with absolute zero added sugar or artificial sweeteners. Maximum concentration of anthocyanin antioxidants, healthy fatty acids, and wholesome dietary fibers for low-glycemic, keto and mindful nutrition.',
    image: '/src/assets/images/hero_acai_bowl_1793423320255.jpg',
    sizes: ['160g Tub', '500g Tub', '3.6kg Foodservice'],
    defaultSize: '500g Tub',
    isZeroSugar: true,
    accentColor: '#171717',
    calories: '64 kcal',
    badge: { en: 'Zero Sugar', pt: 'Sem Açúcar', color: 'bg-[#171717] text-[#FFFDF8]' },
    highlights: ['0g Added Sugar', 'Keto Certified', 'Double Anthocyanins', 'Paleo & Vegan'],
    ingredients: ['Wild organic açaí berry pulp (98%)', 'Water', 'Citric acid'],
    nutritionalTable: {
      energy: '268 kJ / 64 kcal',
      fat: '5.1 g',
      saturates: '1.2 g',
      carbohydrates: '1.8 g',
      sugars: '0.4 g',
      fiber: '5.8 g',
      protein: '1.6 g',
      salt: '0.01 g',
      antioxidants: '2,890 mg / kg ORAC value'
    },
    tastingNotes: 'Intense raw berry essence, unsweetened botanical undertones, dark wine-like richness, and clean cleansing finish.',
    idealFor: ['Strict keto and sugar-free dietary protocols', 'Custom smoothie blending with fresh fruits', 'Savory culinary reductions'],
    b2bFormat: 'Available in 3.6kg foodservice tubs and 100g flash-frozen smoothie pouches.'
  },
  {
    id: 'native-acai-banana',
    name: 'Native Acai with Banana',
    portugueseName: 'Açaí Native com Banana',
    tagline: 'Naturally Creamy & Energizing',
    category: 'pure-acai',
    description: 'A harmonious blend of our premium wild açaí berries with sun-ripened organic bananas. Naturally sweet with a luxuriously thick, silky texture that scoops like gelato right from the freezer.',
    image: '/src/assets/images/hero_custom_banner.jpg',
    sizes: ['160g Tub', '500g Tub', '3.6kg Foodservice'],
    defaultSize: '500g Tub',
    accentColor: '#D97706',
    calories: '104 kcal',
    badge: { en: 'Naturally Sweet', pt: 'Doce Natural', color: 'bg-[#D97706] text-[#FFFDF8]' },
    highlights: ['Natural Fruit Sugars', 'Rich in Potassium', 'Silky Soft Texture', 'Family Favorite'],
    ingredients: ['Organic wild açaí pulp (65%)', 'Organic ripe banana purée (25%)', 'Organic cane sugar', 'Water', 'Organic lemon juice'],
    nutritionalTable: {
      energy: '438 kJ / 104 kcal',
      fat: '3.6 g',
      saturates: '0.8 g',
      carbohydrates: '16.2 g',
      sugars: '13.1 g',
      fiber: '3.8 g',
      protein: '1.5 g',
      salt: '< 0.01 g',
      antioxidants: '1,180 mg / kg ORAC value'
    },
    tastingNotes: 'Tropical banana smoothness up front balanced by the rich deep earthiness of Amazonian açaí. Round, comforting and delectable.',
    idealFor: ['Instant breakfast bowls topped with granola', 'Post-surf refueling in Portugal', 'Kids wholesome healthy treat'],
    b2bFormat: '3.6kg buckets optimal for rapid café bowl assembly without needing blenders.'
  },
  {
    id: 'cookies-with-acai',
    name: 'Cookies with Acai',
    portugueseName: 'Cookies com Açaí',
    tagline: 'Artisanal Superfood Delicacy',
    category: 'exotic-blends',
    description: 'Crispy artisanal whole oat and cacao biscuit sandwiches layered with rich, velvety Amazonian wild açaí filling. 100% organic wholesome delicacy.',
    image: '/src/assets/images/recipe_acai_cookies_1793423375090.jpg',
    sizes: ['Pack 6x', 'Box 12x', 'Café Display'],
    defaultSize: 'Box 12x',
    accentColor: '#047857',
    calories: '135 kcal',
    badge: { en: 'Artisanal Treat', pt: 'Snack Artesanal', color: 'bg-[#047857] text-[#FFFDF8]' },
    highlights: ['Wild Açaí Cream Filling', 'Whole Spelt & Oats', 'Antioxidant Packed', 'Plant-Based Goodness'],
    ingredients: ['Organic oat flour', 'Wild açaí berry pulp (35%)', 'Raw cacao powder', 'Cold-pressed virgin coconut oil', 'Demerara cane sugar', 'Dark chocolate drops'],
    nutritionalTable: {
      energy: '565 kJ / 135 kcal',
      fat: '6.2 g',
      saturates: '2.1 g',
      carbohydrates: '17.4 g',
      sugars: '8.1 g',
      fiber: '3.9 g',
      protein: '2.4 g',
      salt: '0.02 g',
      antioxidants: '980 mg / kg ORAC value'
    },
    tastingNotes: 'Crisp biscuit texture paired with velvety dark berry cream. Rich, satisfying, and wholesome.',
    idealFor: ['Café counter display delicacy', 'Afternoon coffee companion', 'High-energy organic snack', 'Gourmet dessert'],
    b2bFormat: 'Available in 12-unit retail packs and bulk foodservice display cases.'
  },
  {
    id: 'pitaya-zero',
    name: 'Pitaya Zero',
    portugueseName: 'Pitaya Vermelha Zero',
    tagline: 'Vibrant Magenta Superfood Fruit',
    category: 'zero-sugar',
    description: '100% pure red dragon fruit (pitaya) purée with zero added sugars. Stunning natural electric fuchsia color, rich in immune-boosting vitamin C, prebiotic fibers, and subtle crunchy micro-seeds.',
    image: '/src/assets/images/product_pitaya_dragonfruit_1793423352501.jpg',
    sizes: ['160g Tub', '500g Tub', '3.6kg Foodservice'],
    defaultSize: '500g Tub',
    isZeroSugar: true,
    accentColor: '#E11D48',
    calories: '51 kcal',
    badge: { en: 'Zero Sugar', pt: 'Sem Açúcar', color: 'bg-[#171717] text-[#FFFDF8]' },
    highlights: ['Immunity Vitamin C', '0g Added Sugar', 'Prebiotic Fiber', '100% Natural Color'],
    ingredients: ['Pure red dragon fruit purée (99%)', 'Natural ascorbic acid (Vitamin C)'],
    nutritionalTable: {
      energy: '214 kJ / 51 kcal',
      fat: '0.6 g',
      saturates: '0.1 g',
      carbohydrates: '9.4 g',
      sugars: '7.8 g (naturally occurring)',
      fiber: '3.2 g',
      protein: '1.2 g',
      salt: '0.01 g',
      antioxidants: 'High betalain & polyphenols'
    },
    tastingNotes: 'Crisp, delicately sweet kiwi-melon undertones with mild floral notes and a refreshing, hydrating palate.',
    idealFor: ['Two-tone layered smoothie bowls', 'Vibrant superfood mocktails & lemonades', 'High-impact café visual menus'],
    b2bFormat: '3.6kg foodservice containers for bright, photogenic bowl bases.'
  },
  {
    id: 'acai-mango-puree',
    name: 'Acai & Tropical Mango',
    portugueseName: 'Açaí & Manga Tropical',
    tagline: 'Sun-Drenched Exotic Harmony',
    category: 'exotic-blends',
    description: 'A luxurious pairing of wild antioxidant açaí with golden Alphonso mango purée. Naturally luscious with tropical sweetness, sun-ripened vitamins, and a velvety spoonable texture.',
    image: '/src/assets/images/recipe_acai_mango_smoothie_1793423374165.jpg',
    sizes: ['160g Tub', '500g Tub', '3.6kg Foodservice'],
    defaultSize: '500g Tub',
    accentColor: '#EA580C',
    calories: '86 kcal',
    badge: { en: 'Tropical Exotic', pt: 'Gama Tropical', color: 'bg-[#EA580C] text-[#FFFDF8]' },
    highlights: ['High Vitamin A & C', 'Golden Mango Purée', 'Pure Velvet Texture', 'Enzyme Rich'],
    ingredients: ['Organic wild açaí pulp (60%)', 'Golden mango purée (30%)', 'Organic demerara sugar', 'Water', 'Citric acid'],
    nutritionalTable: {
      energy: '360 kJ / 86 kcal',
      fat: '2.8 g',
      saturates: '0.6 g',
      carbohydrates: '14.1 g',
      sugars: '11.8 g',
      fiber: '3.4 g',
      protein: '1.1 g',
      salt: '< 0.01 g',
      antioxidants: '1,280 mg / kg ORAC value'
    },
    tastingNotes: 'Lush golden mango sweetness transitioning into rich, dark Amazon berry richness. Vibrant, sunny, and uplifting.',
    idealFor: ['Tropical smoothie bowls', 'Summer café breakfast specials', 'Hydrating fruit cups'],
    b2bFormat: '3.6kg tubs and 100g single-serve smoothie bases.'
  },
  {
    id: 'wild-guava-acai',
    name: 'Amazonian Guava & Acai',
    portugueseName: 'Goiaba Selvagem & Açaí',
    tagline: 'Pink Rainforest Antioxidant Elixir',
    category: 'exotic-blends',
    description: 'Fragrant wild pink guava harvested in Brazilian riverbeds blended with cold-processed açaí purée. Packed with bioavailable lycopene, carotenoids, and four times the vitamin C of oranges.',
    image: '/src/assets/images/recipe_guava_acai_smoothie_1793423395094.jpg',
    sizes: ['160g Tub', '500g Tub', '3.6kg Foodservice'],
    defaultSize: '500g Tub',
    accentColor: '#BE123C',
    calories: '78 kcal',
    badge: { en: 'High Vitamin C', pt: 'Vitamina C Pura', color: 'bg-[#BE123C] text-[#FFFDF8]' },
    highlights: ['Natural Lycopene', '4x Orange Vitamin C', 'Wild Pink Guava', 'Collagen Booster'],
    ingredients: ['Organic wild açaí pulp (65%)', 'Wild pink guava purée (28%)', 'Organic cane sugar', 'Water', 'Ascorbic acid'],
    nutritionalTable: {
      energy: '326 kJ / 78 kcal',
      fat: '2.5 g',
      saturates: '0.5 g',
      carbohydrates: '13.2 g',
      sugars: '9.9 g',
      fiber: '4.2 g',
      protein: '1.3 g',
      salt: '< 0.01 g',
      antioxidants: '1,640 mg / kg ORAC value'
    },
    tastingNotes: 'Aromatic floral pink guava notes balanced by earthy, rich açaí undertones. Tangy, refreshing, and deeply revitalizing.',
    idealFor: ['Immunity booster bowls', 'Refreshing post-exercise recovery smoothies', 'Gourmet dessert pairings'],
    b2bFormat: '3.6kg containers ready for culinary and bar prep.'
  },
  {
    id: 'acai-chia-botanical',
    name: 'Chia Pudding with Acai',
    portugueseName: 'Pudim de Chia com Açaí',
    tagline: 'Omega-Infused Prebiotic Delicacy',
    category: 'pure-acai',
    description: 'Cold-milled organic chia seeds layered with pure wild Amazon açaí purée and antioxidant berries. A sustained-energy nutritional powerhouse rich in plant omega-3s and soluble fiber.',
    image: '/src/assets/images/recipe_chia_pudding_1793423353393.jpg',
    sizes: ['160g Tub', '500g Tub', '3.6kg Foodservice'],
    defaultSize: '500g Tub',
    accentColor: '#3B82F6',
    calories: '112 kcal',
    badge: { en: 'Omega Power', pt: 'Poder Ómega', color: 'bg-[#3B82F6] text-[#FFFDF8]' },
    highlights: ['Plant-Based Omegas', 'Soluble Prebiotic Fiber', 'Sustained Energy', 'Slow Digestion'],
    ingredients: ['Organic wild açaí pulp (75%)', 'Organic hydrated chia seeds (15%)', 'Organic demerara sugar', 'Water'],
    nutritionalTable: {
      energy: '470 kJ / 112 kcal',
      fat: '4.9 g',
      saturates: '0.9 g',
      carbohydrates: '12.4 g',
      sugars: '8.2 g',
      fiber: '6.4 g',
      protein: '2.8 g',
      salt: '0.01 g',
      antioxidants: '1,510 mg / kg ORAC value'
    },
    tastingNotes: 'Velvety dark chocolate berry flavor accented by pleasant micro-gel texture from swollen raw chia seeds.',
    idealFor: ['Meal-prep superfood breakfast bowls', 'Long-lasting morning satiety', 'Athletic endurance nutrition'],
    b2bFormat: '3.6kg foodservice tubs ready to scoop directly into breakfast bowls.'
  },
  {
    id: 'acai-artisanal-muffins',
    name: 'Wild Acai Muffins',
    portugueseName: 'Queques de Açaí Selvagem',
    tagline: 'Antioxidant Spelt & Berry Bakes',
    category: 'exotic-blends',
    description: 'Artisanal organic spelt bakery muffins infused with pure wild açaí reduction and studded with dark chocolate chunks and blackberries.',
    image: '/src/assets/images/recipe_acai_muffins_1793423374342.jpg',
    sizes: ['Pack 4x', 'Box 8x', 'Bakery Crate 24x'],
    defaultSize: 'Box 8x',
    accentColor: '#8B5CF6',
    calories: '142 kcal',
    badge: { en: 'Bakery Special', pt: 'Pastelaria Fina', color: 'bg-[#8B5CF6] text-[#FFFDF8]' },
    highlights: ['Stone-Ground Spelt Flour', 'Real Açaí Purée Core', 'Low Refined Sugar', 'Fibre-Rich Snack'],
    ingredients: ['Organic whole spelt flour', 'Wild açaí pulp (30%)', 'Virgin olive oil', 'Demerara cane sugar', 'Blackberries', 'Baking powder'],
    nutritionalTable: {
      energy: '594 kJ / 142 kcal',
      fat: '5.8 g',
      saturates: '1.4 g',
      carbohydrates: '19.2 g',
      sugars: '7.6 g',
      fiber: '4.1 g',
      protein: '3.2 g',
      salt: '0.03 g',
      antioxidants: '840 mg / kg ORAC value'
    },
    tastingNotes: 'Tender golden crumb punctuated by bursts of tart wild açaí berries and deep molasses richness.',
    idealFor: ['Artisan café pastry cabinets', 'Breakfast with espresso', 'Nutrient-rich snack on the move'],
    b2bFormat: 'Individually wrapped or bulk frozen unbaked pucks for bake-off cafés.'
  },
  {
    id: 'acai-protein-pancakes',
    name: 'Acai Spelt Pancakes',
    portugueseName: 'Panquecas de Açaí & Espelta',
    tagline: 'Golden Stack with Pure Berry Drizzle',
    category: 'exotic-blends',
    description: 'Fluffy whole-grain spelt pancakes infused with pure Amazonian açaí purée and topped with organic stewed apples and cinnamon.',
    image: '/src/assets/images/recipe_pancakes_apple_1793423353017.jpg',
    sizes: ['Pack 6x', 'Box 12x', 'Brunch Pack'],
    defaultSize: 'Box 12x',
    accentColor: '#D97706',
    calories: '128 kcal',
    badge: { en: 'Brunch Favorite', pt: 'Favorito Brunch', color: 'bg-[#D97706] text-[#FFFDF8]' },
    highlights: ['100% Spelt Flour', 'Naturally Fluffy', 'Whole Apple Compote', 'Low GI Energy'],
    ingredients: ['Organic spelt flour', 'Organic wild açaí purée', 'Almond milk', 'Organic eggs', 'Stewed apples', 'Ceylon cinnamon'],
    nutritionalTable: {
      energy: '535 kJ / 128 kcal',
      fat: '3.4 g',
      saturates: '0.7 g',
      carbohydrates: '20.1 g',
      sugars: '6.2 g',
      fiber: '3.5 g',
      protein: '4.8 g',
      salt: '0.02 g',
      antioxidants: '760 mg / kg ORAC value'
    },
    tastingNotes: 'Warm aromatic cinnamon notes harmonizing with tart wild berry vibrancy and soft, pillow-like pancake texture.',
    idealFor: ['Weekend brunch menus', 'High-protein pre-workout fuel', 'Wholesome family breakfasts'],
    b2bFormat: 'Frozen ready-to-heat foodservice packs for rapid café brunch service.'
  },
  {
    id: 'acai-french-crepes',
    name: 'Acai French Crepes',
    portugueseName: 'Crepes Finos de Açaí',
    tagline: 'Delicate Paper-Thin Superfood Crepes',
    category: 'exotic-blends',
    description: 'Delicate, lace-thin artisanal crepes folded with silky wild açaí purée, fresh raspberries, and edible violet flowers.',
    image: '/src/assets/images/recipe_acai_crepes_1793423373971.jpg',
    sizes: ['Pack 6x', 'Box 12x', 'Chef Crate'],
    defaultSize: 'Box 12x',
    accentColor: '#EC4899',
    calories: '118 kcal',
    badge: { en: 'Gourmet French', pt: 'Gourmet Francês', color: 'bg-[#EC4899] text-[#FFFDF8]' },
    highlights: ['Paper-Thin Texture', 'Pure Açaí Swirl', 'Subtle Blossom Aroma', 'Zero Trans Fats'],
    ingredients: ['Organic wheat flour', 'Wild açaí berry purée', 'Organic milk', 'Farm butter', 'Organic vanilla extract', 'Sea salt'],
    nutritionalTable: {
      energy: '494 kJ / 118 kcal',
      fat: '4.1 g',
      saturates: '1.8 g',
      carbohydrates: '16.8 g',
      sugars: '5.4 g',
      fiber: '2.8 g',
      protein: '3.6 g',
      salt: '0.04 g',
      antioxidants: '690 mg / kg ORAC value'
    },
    tastingNotes: 'Silky, melt-in-the-mouth crepe with rich wild açaí and delicate vanilla undertones.',
    idealFor: ['Dessert crêperie menus', 'Luxury hotel breakfast buffets', 'Afternoon tea pairings'],
    b2bFormat: 'Chilled stacked sheets interleaved with wax parchment for quick plating.'
  },
  {
    id: 'organic-acai-pulp-pure',
    name: 'Pure Wild Acai Pulp',
    portugueseName: 'Polpa Pura de Açaí',
    tagline: 'Unadulterated 100% Raw Frozen Pulp',
    category: 'zero-sugar',
    description: 'Single-origin floodplain açaí berries cold-pressed and flash-frozen within 4 hours of tree canopy harvest. Absolutely zero additives, sugar, or dilution—the quintessential culinary foundation.',
    image: '/src/assets/images/b2b_cafe_acai_prep_1793423322122.jpg',
    sizes: ['160g Tub', '500g Tub', '3.6kg Foodservice'],
    defaultSize: '500g Tub',
    isZeroSugar: true,
    accentColor: '#171717',
    calories: '60 kcal',
    badge: { en: '100% Raw Pulp', pt: 'Polpa 100% Pura', color: 'bg-[#171717] text-[#FFFDF8]' },
    highlights: ['100% Raw Uncut Pulp', '0g Added Sugar', 'Peak Antioxidant ORAC', 'Chef Culinary Grade'],
    ingredients: ['100% Wild Organic Amazonian Açaí Pulp'],
    nutritionalTable: {
      energy: '252 kJ / 60 kcal',
      fat: '4.8 g',
      saturates: '1.1 g',
      carbohydrates: '1.2 g',
      sugars: '0.2 g',
      fiber: '5.6 g',
      protein: '1.5 g',
      salt: '< 0.01 g',
      antioxidants: '3,120 mg / kg ORAC value'
    },
    tastingNotes: 'Austere, deep forest berry essence with tannic cocoa richness and genuine floodplain earthy purity.',
    idealFor: ['Custom smoothies crafted to individual sweetness', 'Michelin-grade culinary savory sauces', 'Zero-sugar ketogenic bowls'],
    b2bFormat: '3.6kg foodservice buckets and 100g flash-frozen culinary pouches.'
  }
];

export const RECIPES: Recipe[] = [
  {
    id: 'cookies-with-acai',
    title: 'Cookies with Açaí',
    portugueseTitle: 'Cookies com Açaí',
    category: 'baking',
    prepTime: '20 min',
    difficulty: 'Easy',
    servings: '12 cookies',
    image: '/src/assets/images/recipe_acai_cookies_1793423375090.jpg',
    summary: 'Fudgy artisanal cacao cookies folded with Native Açai compote and dark chocolate chunks for an antioxidant-packed afternoon bite.',
    ingredients: [
      '120g Native Açai Original or Zero Sugar (thawed)',
      '150g oat flour or whole spelt flour',
      '40g raw cacao powder',
      '60ml virgin coconut oil (melted)',
      '70g coconut sugar or maple syrup',
      '80g dark chocolate chips (70%+)',
      '1 tsp baking powder',
      '1 pinch sea salt flakes'
    ],
    instructions: [
      'Preheat oven to 175°C (350°F) and line a baking sheet with parchment paper.',
      'In a medium bowl, whisk together the melted coconut oil, coconut sugar, and Native Açai until glossy.',
      'Sift in oat flour, cacao powder, baking powder, and salt. Fold gently with a spatula until a rich dough forms.',
      'Fold in the dark chocolate chips and freeze dough for 10 minutes to firm up.',
      'Scoop 12 equal portions onto baking sheet and press lightly.',
      'Bake for 10-12 minutes until edges are set. Allow to cool completely for the signature fudgy chew.'
    ],
    proTip: 'Sprinkle with flaky sea salt right as they come out of the oven to heighten the dark berry notes.',
    calories: '142 kcal / cookie'
  },
  {
    id: 'chia-pudding-with-acai',
    title: 'Chia Pudding with Açaí',
    portugueseTitle: 'Pudim de Chia com Açaí',
    category: 'bowls',
    prepTime: '10 min + chill',
    difficulty: 'Easy',
    servings: '2 jars',
    image: '/src/assets/images/recipe_chia_pudding_1793423353393.jpg',
    summary: 'Velvety coconut milk chia seed pudding beautifully layered with deep violet Native Açai purée and fresh garden berries.',
    ingredients: [
      '160g Native Açai (thawed or gently blended)',
      '4 tbsp black organic chia seeds',
      '240ml light coconut milk or almond milk',
      '1 tbsp pure maple syrup or raw agave',
      '1/2 tsp vanilla bean extract',
      'Fresh blueberries and raspberries for topping',
      '1 tbsp hemp seeds or toasted coconut flakes'
    ],
    instructions: [
      'In a glass bowl, whisk chia seeds, plant milk, maple syrup, and vanilla bean extract together thoroughly.',
      'Let sit for 5 minutes, then whisk once more to eliminate clumps.',
      'Refrigerate for at least 3 hours (or overnight) until a thick, luxurious pudding forms.',
      'In serving jars, alternate layers of the creamy coconut chia pudding with spoonfuls of Native Açai.',
      'Top with fresh blueberries, raspberries, and a shower of toasted coconut flakes.'
    ],
    proTip: 'Prepare 4 jars on Sunday evening for a ready-to-grab nutrient-dense breakfast throughout the week.',
    calories: '210 kcal / serving'
  },
  {
    id: 'acai-and-mango-smoothie',
    title: 'Açaí and Mango Smoothie',
    portugueseTitle: 'Smoothie de Açaí e Manga',
    category: 'smoothies',
    prepTime: '5 min',
    difficulty: 'Easy',
    servings: '2 glasses',
    image: '/src/assets/images/recipe_acai_mango_smoothie_1793423374165.jpg',
    summary: 'A breathtaking two-tone tropical glass featuring silky golden Alphonso mango purée topped with dark purple wild açaí blend.',
    ingredients: [
      '160g Native Açai Zero Sugar or Original',
      '1 cup ripe frozen mango chunks',
      '100ml fresh coconut water',
      '100ml almond milk',
      '1 tbsp chia seeds',
      'Fresh mint sprig and edible flowers for garnish'
    ],
    instructions: [
      'Prepare mango base: Blend frozen mango chunks with coconut water and chia seeds until silky and thick. Pour into bottom half of two glasses.',
      'Rinse blender. Add Native Açai with almond milk and blend on high speed for 30 seconds until rich and smooth.',
      'Slowly pour the dark açaí layer over the back of a spoon onto the mango layer to achieve clean dual-color separation.',
      'Garnish with fresh mint sprigs, fresh raspberries, and serve immediately.'
    ],
    proTip: 'Pouring over the back of a chilled spoon keeps the mango and açaí layers distinct for stunning presentation.',
    calories: '185 kcal / glass'
  },
  {
    id: 'pancakes-with-caramelized-apple-and-acai',
    title: 'Pancakes with Caramelized Apple and Açaí',
    portugueseTitle: 'Panquecas com Maçã Caramelizada e Açaí',
    category: 'baking',
    prepTime: '25 min',
    difficulty: 'Medium',
    servings: '3-4 servings',
    image: '/src/assets/images/recipe_pancakes_apple_1793423353017.jpg',
    summary: 'Fluffy whole-grain oat pancakes stacked high, topped with warm cinnamon-glazed apple slices and a warm glossy açaí berry drizzle.',
    ingredients: [
      '160g Native Açai Original (used for berry compote)',
      '150g oat flour',
      '1 tsp baking powder',
      '1 egg (or 1 flax egg for vegan)',
      '180ml oat milk',
      '2 crisp apples (Fuji or Alcobaça), sliced',
      '1 tbsp coconut oil or grass-fed butter',
      '1 tbsp maple syrup',
      '1/2 tsp ground Ceylon cinnamon'
    ],
    instructions: [
      'Whisk oat flour, baking powder, egg/flax egg, and oat milk until a smooth batter forms. Let rest for 5 minutes.',
      'In a skillet over medium heat, melt coconut oil with sliced apples, maple syrup, and cinnamon. Sauté for 6-8 minutes until golden and caramelized.',
      'In a small saucepan, gently warm the Native Açai on low heat with a dash of maple syrup until it becomes a pourable syrup.',
      'Cook pancakes on a lightly oiled griddle for 2-3 minutes per side until golden brown bubbles appear.',
      'Stack the pancakes, crown with warm caramelized apples, and pour the glossy warm açaí compote lavishly over the stack.'
    ],
    proTip: 'Warm the açaí gently on low heat—do not boil—to preserve its delicate raw anthocyanin nutrients.',
    calories: '310 kcal / serving'
  },
  {
    id: 'guava-and-acai-smoothie',
    title: 'Guava and Açaí Smoothie',
    portugueseTitle: 'Smoothie de Goiaba e Açaí',
    category: 'smoothies',
    prepTime: '5 min',
    difficulty: 'Easy',
    servings: '2 glasses',
    image: '/src/assets/images/recipe_guava_acai_smoothie_1793423395094.jpg',
    summary: 'A tropical Lisbon cafe secret blending floral pink guava purée with deep Amazonian wild açaí for an invigorating boost.',
    ingredients: [
      '160g Native Açai Original or Zero',
      '150g pink guava pulp or fresh deseeded pink guava',
      '150ml pure coconut water',
      '1 squeeze fresh lime juice',
      '1 tsp organic raw honey or agave',
      'Ice cubes'
    ],
    instructions: [
      'Add Native Açai, pink guava pulp, lime juice, coconut water, and honey to a high-speed blender.',
      'Blend on high for 45 seconds until velvety and frothy.',
      'Pour into chilled tall glasses over a couple of ice cubes.',
      'Garnish the rim with a fresh pink guava wheel and fresh mint.'
    ],
    proTip: 'The lime juice brightens the tropical aroma of the pink guava and balances the earthy depth of the açaí.',
    calories: '160 kcal / glass'
  },
  {
    id: 'colorful-acai-bowl',
    title: 'Colorful Açaí Bowl',
    portugueseTitle: 'Bowl de Açaí Colorido',
    category: 'bowls',
    prepTime: '8 min',
    difficulty: 'Easy',
    servings: '1 large bowl',
    image: '/src/assets/images/recipe_colorful_acai_bowl_1793423395934.jpg',
    summary: 'The ultimate showcase bowl featuring thick Native Açai topped with kiwi wheels, dragon fruit stars, pomegranate jewels, and coconut ribbon.',
    ingredients: [
      '200g Native Açai (partially thawed for 5 mins)',
      '1/2 frozen banana',
      '30ml coconut water (minimal liquid for thick scoop)',
      '1 golden or green kiwi, sliced into wheels',
      'Fresh red pitaya cut into decorative shapes',
      'Handful of wild blueberries and pomegranate arils',
      '2 tbsp crunchy almond granola',
      'Shaved organic coconut flakes & micro-mint'
    ],
    instructions: [
      'Blend Native Açai with frozen banana and 30ml coconut water using a tamper tool until thick like soft-serve ice cream.',
      'Spoon into a wide ceramic bowl and smooth the surface with a warm spoon.',
      'Arrange toppings in artistic curved lines: crunchy granola, kiwi wheels, dragon fruit shapes, blueberries, and glistening pomegranate seeds.',
      'Finish with coconut ribbons and edible flowers. Enjoy immediately with a chilled spoon.'
    ],
    proTip: 'Use as little liquid as possible when blending to keep the base thick enough to support the fresh fruit art.',
    calories: '285 kcal / bowl'
  },
  {
    id: 'overnight-oats-with-acai',
    title: 'Overnight Oats with Açaí',
    portugueseTitle: 'Overnight Oats com Açaí',
    category: 'bowls',
    prepTime: '5 min + chill',
    difficulty: 'Easy',
    servings: '1 jar',
    image: '/src/assets/images/recipe_overnight_oats_acai_1793423396192.jpg',
    summary: 'Slow-soaked organic rolled oats with chia seeds and almond butter, crowned with thick wild açaí and roasted almond slivers.',
    ingredients: [
      '120g Native Açai Original or Zero Sugar',
      '60g organic rolled oats (gluten-free if desired)',
      '1 tbsp chia seeds',
      '120ml unsweetened oat milk or almond milk',
      '1 tbsp creamy almond butter',
      '1 tsp pure maple syrup',
      'Handful of fresh blackberries & toasted flaked almonds'
    ],
    instructions: [
      'Combine rolled oats, chia seeds, almond milk, maple syrup, and almond butter in a clean glass mason jar. Stir thoroughly.',
      'Seal with lid and refrigerate overnight (minimum 4 hours) to allow the oats to absorb the liquid.',
      'In the morning, unseal and stir gently. Spoon Native Açai generously over the oat layer.',
      'Top with fresh blackberries and toasted flaked almonds for satisfying morning crunch.'
    ],
    proTip: 'Add 1 scoop of plant protein to the oat mixture before chilling for a 25g post-workout breakfast.',
    calories: '340 kcal / serving'
  },
  {
    id: 'acai-and-mango-ice-cream',
    title: 'Açaí and Mango Ice Cream',
    portugueseTitle: 'Gelado de Açaí e Manga',
    category: 'treats',
    prepTime: '10 min + freeze',
    difficulty: 'Easy',
    servings: '4 servings',
    image: '/src/assets/images/recipe_acai_mango_icecream_1793423397124.jpg',
    summary: 'A dairy-free, 100% whole-fruit artisanal sorbet scoop combining intense wild açaí with sun-drenched tropical mango.',
    ingredients: [
      '250g Native Açai Original or Zero Sugar',
      '200g ripe frozen mango chunks',
      '2 frozen bananas',
      '2 tbsp coconut cream',
      '1 tbsp lime juice',
      'Fresh mint leaves and cacao nibs for serving'
    ],
    instructions: [
      'For the açaí scoop: Process Native Açai with 1 frozen banana and 1 tbsp coconut cream in a food processor until glossy and thick.',
      'For the mango scoop: Process frozen mango chunks with 1 frozen banana, 1 tbsp coconut cream, and lime juice until vibrant yellow and silky.',
      'Transfer each mixture into separate freezer-safe containers and chill for 45 minutes for scoopable consistency.',
      'Using an ice cream scoop dipped in warm water, scoop twin balls of deep purple açaí and golden mango into footed dessert glasses.',
      'Garnish with cacao nibs and fresh mint sprigs.'
    ],
    proTip: 'Dip your metal ice cream scoop in warm water between scoops for picture-perfect glossy domes.',
    calories: '165 kcal / serving'
  },
  {
    id: 'acai-crepes',
    title: 'Açaí Crepes',
    portugueseTitle: 'Crepes de Açaí',
    category: 'baking',
    prepTime: '20 min',
    difficulty: 'Medium',
    servings: '4 crepes',
    image: '/src/assets/images/recipe_acai_crepes_1793423373971.jpg',
    summary: 'Delicate buckwheat crepes folded over creamy whipped coconut yogurt, warm wild açaí compote, and fresh raspberries.',
    ingredients: [
      '140g Native Açai Original or Zero Sugar',
      '100g buckwheat or spelt flour',
      '2 eggs (or vegan chickpea flour equivalent)',
      '220ml oat milk',
      '1 tbsp melted coconut oil',
      '100g Greek or coconut yogurt',
      'Fresh raspberries and toasted flaked hazelnuts'
    ],
    instructions: [
      'In a blender, blend buckwheat flour, eggs, oat milk, and melted coconut oil until a light, lump-free batter forms.',
      'Heat a lightly greased non-stick crepe pan over medium heat. Pour 1/4 cup batter, swirling quickly to coat evenly.',
      'Cook for 90 seconds until edges lift, flip and cook for 30 seconds more. Repeat for remaining batter.',
      'Spread each warm crepe with whipped coconut yogurt and a lavish ribbon of Native Açai.',
      'Fold into quarters, plate elegantly, and decorate with fresh raspberries and toasted hazelnuts.'
    ],
    proTip: 'Let the crepe batter rest on the counter for 15 minutes before cooking so the flour hydrates evenly.',
    calories: '220 kcal / crepe'
  },
  {
    id: 'acai-and-oat-muffins',
    title: 'Açaí and Oat Muffins',
    portugueseTitle: 'Muffins de Açaí e Aveia',
    category: 'baking',
    prepTime: '30 min',
    difficulty: 'Medium',
    servings: '8 muffins',
    image: '/src/assets/images/recipe_acai_muffins_1793423374342.jpg',
    summary: 'Golden bakery-style oat flour muffins with deep ribbons of wild açaí swirled inside and a toasted oat-cinnamon streusel on top.',
    ingredients: [
      '140g Native Açai Original or Zero Sugar (used for swirl)',
      '180g rolled oats, blended into flour',
      '1 tsp ground cinnamon',
      '1 tsp baking powder',
      '1/2 tsp baking soda',
      '2 ripe bananas, mashed',
      '2 eggs (or chia eggs)',
      '60ml pure maple syrup',
      '40ml olive oil or coconut oil',
      '3 tbsp whole rolled oats (for topping)'
    ],
    instructions: [
      'Preheat oven to 180°C (350°F) and line a muffin tin with 8 parchment cups.',
      'In a large bowl, whisk mashed bananas, eggs, maple syrup, and oil until combined.',
      'Fold in oat flour, cinnamon, baking powder, and baking soda until batter just comes together.',
      'Divide half the batter between the 8 cups. Add a dollop of Native Açai in the center of each.',
      'Cover with remaining batter and another small spoon of açaí. Swirl gently using a wooden toothpick.',
      'Sprinkle whole rolled oats on top and bake for 20-22 minutes until a toothpick inserted comes out clean.'
    ],
    proTip: 'Store in an airtight container for up to 4 days—they become even moister on day two!',
    calories: '185 kcal / muffin'
  }
];

export const BRAND_VALUES = [
  {
    number: '01',
    title: 'Wild Amazonian Harvest',
    portugueseTitle: 'Colheita Selvagem na Amazónia',
    description: 'We do not cultivate mono-culture plantations. Our açaí grows wild in the natural floodplain estuaries (várzeas) of the Amazon, preserving biodiversity and ancient rainforest canopies.'
  },
  {
    number: '02',
    title: 'Ethical Community Direct Trade',
    portugueseTitle: 'Comércio Justo com Ribeirinhos',
    description: 'We partner directly with traditional ribeirinho families, ensuring fair year-round compensation, healthcare access, and sustainable stewardship incentives that protect native forests from logging.'
  },
  {
    number: '03',
    title: 'Cold-Chain Bio-Preservation',
    portugueseTitle: 'Preservação a Frio dos Nutrientes',
    description: 'From tree to flash-freezing within 24 hours. Our cutting-edge cold process captures 99% of raw bio-active anthocyanins and omegas without artificial heat or preservative chemicals.'
  },
  {
    number: '04',
    title: 'Zero Artificial Compromise',
    portugueseTitle: 'Zero Compromissos Artificiais',
    description: 'No corn syrups, no artificial food colorings, no industrial fillers. Only wholesome, clean ingredients crafted for maximum vitality, pure taste, and honest wellness.'
  }
];
