// DARSHANA - Products Catalog Dataset (Sarees, Dupattas, Dress Materials & Sets)
const PRODUCTS_DATA = [
  // --- SAREES ---
  {
    id: "saree-01",
    name: "Aaranya Crimson Banarasi Katan Silk Saree",
    category: "sarees",
    subCategory: "Banarasi Silk",
    generation: "classic", // 'classic' (older/timeless) or 'modern' (younger/contemporary)
    priceINR: 14999,
    originalPriceINR: 18999,
    rating: 4.9,
    reviewCount: 128,
    isBestseller: true,
    isHandloom: true,
    hasSilkMark: true,
    tag: "Heirloom Classic",
    color: "Crimson Red",
    fabric: "Pure Katan Silk",
    craft: "Kadwa Gold Zari Weave",
    occasion: "Bridal / Wedding",
    drapeDifficulty: "Intermediate",
    description: "Woven by master artisans in Varanasi using pure mulberry silk and intricate antique gold zari kadwa motifs. A timeless heirloom passed through generations.",
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80"
    ],
    features: [
      "100% Pure Katan Silk with Silk Mark Certification",
      "Antique Gold Zari floral jaal pallu",
      "Includes 0.8m matching unstitched blouse piece",
      "Heirloom longevity - preserve for decades"
    ]
  },
  {
    id: "saree-02",
    name: "Noor Lavender Pre-Draped Chiffon Saree with Embroidered Belt",
    category: "sarees",
    subCategory: "Pre-Draped Ready-to-Wear",
    generation: "modern",
    priceINR: 7499,
    originalPriceINR: 9999,
    rating: 4.8,
    reviewCount: 94,
    isBestseller: true,
    isHandloom: false,
    hasSilkMark: false,
    tag: "Gen-Z Favorite",
    color: "Pastel Lavender",
    fabric: "Viscose Chiffon",
    craft: "Cutdana & Sequin Belt Embellishment",
    occasion: "Cocktail / Farewell / Reception",
    drapeDifficulty: "1-Minute Ready",
    description: "Designed for effortless elegance. Pre-stitched pleats with a designer pearl-embellished metallic waist belt. Wear in under 60 seconds without safety pin fuss.",
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80"
    ],
    features: [
      "Ready-to-wear pre-stitched pleats with hook fastening",
      "Detachable hand-embroidered sequin waist belt",
      "Featherlight flowy fabric with flattering drape",
      "Includes pre-stitched designer bustier blouse (Sizes XS to XXL)"
    ]
  },
  {
    id: "saree-03",
    name: "Kalyani Royal Emerald Kanjeevaram Pure Silk Saree",
    category: "sarees",
    subCategory: "Kanjeevaram Silk",
    generation: "classic",
    priceINR: 22499,
    originalPriceINR: 26999,
    rating: 5.0,
    reviewCount: 215,
    isBestseller: true,
    isHandloom: true,
    hasSilkMark: true,
    tag: "Royal Heritage",
    color: "Emerald Green & Gold",
    fabric: "Pure Mulberry Kanchipuram Silk",
    craft: "Korvai Weaving with Pure Zari Border",
    occasion: "Wedding / Festive / Pooja",
    drapeDifficulty: "Intermediate",
    description: "Authentic temple-border Kanchipuram silk saree with rich peacock (Mayil) and coin (Butta) motifs woven with dipped gold threads.",
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80"
    ],
    features: [
      "Original Kanchipuram Geographical Indication (GI) tagged",
      "Traditional heavy zari border & grand contrast pallu",
      "Includes pure silk unstitched blouse piece",
      "Certified Silk Mark Authority of India"
    ]
  },
  {
    id: "saree-04",
    name: "Sitara Dusty Rose Metallic Organza Drape Saree",
    category: "sarees",
    subCategory: "Organza Silk",
    generation: "modern",
    priceINR: 8999,
    originalPriceINR: 11999,
    rating: 4.7,
    reviewCount: 76,
    isBestseller: false,
    isHandloom: false,
    hasSilkMark: false,
    tag: "Modern Chic",
    color: "Dusty Rose Pink",
    fabric: "Glass Organza & Tissue Silk",
    craft: "Scalloped Cutwork Zari Border",
    occasion: "Cocktail / Sangeet / Day Wedding",
    drapeDifficulty: "Easy",
    description: "Shimmering tissue organza saree with delicate hand-scalloped borders and subtle floral foil motifs. Perfectly styled with modern corset or halter tops.",
    images: [
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80"
    ],
    features: [
      "Airy, crisp silhouette that holds pleats crisply",
      "Hand-finished scalloped resham borders",
      "Pairs beautifully with both traditional & western jewelry",
      "Comes with unstitched raw silk blouse piece"
    ]
  },
  {
    id: "saree-05",
    name: "Chandrika Ivory Chikankari & Mukaish Work Georgette Saree",
    category: "sarees",
    subCategory: "Lucknowi Chikankari",
    generation: "classic",
    priceINR: 12499,
    originalPriceINR: 15499,
    rating: 4.9,
    reviewCount: 112,
    isBestseller: false,
    isHandloom: true,
    hasSilkMark: false,
    tag: "Artisan Heirloom",
    color: "Ivory White",
    fabric: "Pure Viscose Georgette",
    craft: "Handcrafted Lucknowi Bakhiya & Phanda with Mukaish",
    occasion: "Day Festive / Elegance / Mehendi",
    drapeDifficulty: "Easy",
    description: "Hand-embroidered by women artisans of Awadh with thousands of intricate needle stitches and gleaming silver mukaish badla dots.",
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80"
    ],
    features: [
      "Over 45 days of painstaking hand embroidery per piece",
      "Pure dyeable georgette base with soft fluid drape",
      "Intricate floral jaal throughout body & border",
      "Includes heavily embroidered blouse fabric"
    ]
  },
  {
    id: "saree-06",
    name: "Zohra Midnight Indigo Paithani Peacock Border Saree",
    category: "sarees",
    subCategory: "Paithani Silk",
    generation: "classic",
    priceINR: 16999,
    originalPriceINR: 20999,
    rating: 4.9,
    reviewCount: 88,
    isBestseller: false,
    isHandloom: true,
    hasSilkMark: true,
    tag: "Maharashtra Royal",
    color: "Midnight Blue & Gold",
    fabric: "Pure Silk",
    craft: "Tapestry Weaving with Multicolored Mor (Peacock) Pallu",
    occasion: "Festive / Wedding / Diwali",
    drapeDifficulty: "Intermediate",
    description: "The queen of silks from Yeola, featuring an opulent kaleidoscopic pallu woven with peacocks, parrots, and golden lotus vine borders.",
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80"
    ],
    features: [
      "Pure gold zari woven pallu with kaleidoscope mor motifs",
      "Rich single-tone sheen with zari butties",
      "100% Silk Mark certified weave",
      "Includes running blouse fabric with Paithani border"
    ]
  },

  // --- DUPATTAS & STOLES ---
  {
    id: "dupatta-01",
    name: "Roshni Royal Banarasi Brocade Meenakari Dupatta",
    category: "dupattas",
    subCategory: "Banarasi Dupatta",
    generation: "classic",
    priceINR: 4299,
    originalPriceINR: 5999,
    rating: 4.8,
    reviewCount: 65,
    isBestseller: true,
    isHandloom: true,
    hasSilkMark: true,
    tag: "Festive Essential",
    color: "Rani Pink & Gold",
    fabric: "Pure Katan Silk Brocade",
    craft: "Meenakari Floral Kadwa Weave",
    occasion: "Wedding / Sangeet / Kurta Styling",
    drapeDifficulty: "Easy",
    description: "An instant regal upgrade to any simple suit or lehenga. Heavy antique gold zari brocade with multicolored meenakari resham accents.",
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=900&q=80"
    ],
    features: [
      "Full 2.5-meter length with 40-inch generous width",
      "Rich traditional gold tassel latkans on edges",
      "Transforms plain kurtas into wedding couture",
      "Pure silk mark accredited"
    ]
  },
  {
    id: "dupatta-02",
    name: "Gulabi Punjab Royal Phulkari Geometric Hand-Embroidered Dupatta",
    category: "dupattas",
    subCategory: "Phulkari",
    generation: "classic",
    priceINR: 3499,
    originalPriceINR: 4499,
    rating: 4.9,
    reviewCount: 82,
    isBestseller: false,
    isHandloom: true,
    hasSilkMark: false,
    tag: "Punjab Heritage",
    color: "Mustard Yellow & Hot Pink",
    fabric: "Chanderi Cotton Silk Base",
    craft: "Traditional Pat Silk Thread Baghandi Work",
    occasion: "Haldi / Mehendi / Lohri / Baisakhi",
    drapeDifficulty: "Easy",
    description: "Vibrant traditional Phulkari (flower work) hand-embroidered by rural artisan collectives in Punjab using lustrous untwisted silk floss.",
    images: [
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80"
    ],
    features: [
      "High-density authentic threadwork on breathable Chanderi",
      "Mirror-work accents with festive handmade tassels",
      "Celebrates vibrant Punjabi folk artistry",
      "Length: 2.45m | Dry clean recommended"
    ]
  },
  {
    id: "dupatta-03",
    name: "Sheesh Mahal Scalloped Pearl Organza Cape Dupatta",
    category: "dupattas",
    subCategory: "Modern Cape Dupattas",
    generation: "modern",
    priceINR: 3199,
    originalPriceINR: 4299,
    rating: 4.7,
    reviewCount: 54,
    isBestseller: true,
    isHandloom: false,
    hasSilkMark: false,
    tag: "Gen-Z Fusion",
    color: "Champagne Gold",
    fabric: "Fine Crystal Organza",
    craft: "Pearl & Moti Border Cutwork",
    occasion: "Cocktail / Modern Kurti / Crop Top Styling",
    drapeDifficulty: "Pre-Structured",
    description: "Modern no-fuss silhouette. Can be worn as a shoulder-cape or classic single-shoulder drape. Hand-set pearl drops along scalloped borders.",
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80"
    ],
    features: [
      "Wear as a cape, shrug, or classic one-sided drape",
      "Zero slipping - sits effortlessly on shoulders",
      "Pairs stunningly with fusion pantsuits and lehengas",
      "Dimensions: 2.3m x 36 inches"
    ]
  },
  {
    id: "dupatta-04",
    name: "Kashmir Aari & Tilla Work Pashmina-Feel Velvet Stole",
    category: "dupattas",
    subCategory: "Kashmiri Stoles",
    generation: "classic",
    priceINR: 5999,
    originalPriceINR: 7999,
    rating: 5.0,
    reviewCount: 47,
    isBestseller: false,
    isHandloom: true,
    hasSilkMark: false,
    tag: "Winter Royalty",
    color: "Deep Wine & Copper",
    fabric: "Micro Velvet with Wool Silk Blend",
    craft: "Kashmiri Aari Needlework & Tilla Zari",
    occasion: "Winter Weddings / Grand Evenings",
    drapeDifficulty: "Easy",
    description: "Warmth meets majestic Kashmiri royalty. Elaborate copper tilla paisley embroidery framing plush wine velvet.",
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80"
    ],
    features: [
      "Opulent micro-velvet with satin backing",
      "Traditional Kashmiri badam and chinar leaf embroidery",
      "Cozy warmth for destination or winter weddings",
      "Length: 2.2m x 30 inches"
    ]
  },

  // --- DRESS PIECES & UNSTITCHED SUITS ---
  {
    id: "dress-01",
    name: "Maharani Pure Chanderi Silk 3-Piece Unstitched Suit Piece",
    category: "dress-pieces",
    subCategory: "Chanderi Silk Suit",
    generation: "classic",
    priceINR: 6499,
    originalPriceINR: 8499,
    rating: 4.9,
    reviewCount: 142,
    isBestseller: true,
    isHandloom: true,
    hasSilkMark: true,
    tag: "Timeless Choice",
    color: "Sage Green & Rose Gold",
    fabric: "Chanderi Silk Kurta + Shantoon Bottom + Zari Dupatta",
    craft: "Handwoven Zari Boota with Hand-embroidered Gota Neckline",
    occasion: "Pooja / Festive Gathering / Office Celebrations",
    drapeDifficulty: "Unstitched Material",
    description: "Luxury 3-piece unstitched fabric kit featuring a handwoven Chanderi kurta piece, soft shantoon bottom fabric, and a grand sheer organza zari dupatta.",
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=900&q=80"
    ],
    features: [
      "Kurta Fabric: 2.5m Pure Chanderi Silk with Zari border",
      "Bottom Fabric: 2.5m Premium Shantoon Silk for trousers/salwar",
      "Dupatta: 2.5m Full-width Zari Tissue Dupatta",
      "Custom Stitching option available with personalized measurements"
    ]
  },
  {
    id: "dress-02",
    name: "Nazaakat Handblock Print Pure Mulmul Cotton Suit Piece",
    category: "dress-pieces",
    subCategory: "Bagru Handblock Cotton",
    generation: "classic",
    priceINR: 2899,
    originalPriceINR: 3699,
    rating: 4.8,
    reviewCount: 98,
    isBestseller: true,
    isHandloom: true,
    hasSilkMark: false,
    tag: "Daily Luxury",
    color: "Indigo Blue & Madder Red",
    fabric: "100% 60s Count Breathable Mulmul Cotton",
    craft: "Authentic Bagru Teakwood Block Printing",
    occasion: "Daily Wear / Workwear / Summer Festive",
    drapeDifficulty: "Unstitched Material",
    description: "Hand-dyed with natural eco-friendly vegetable pigments. Ultra-soft mulmul cotton that breathes like a dream in warm weather.",
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80"
    ],
    features: [
      "Top: 2.5m Pure Soft Mulmul Cotton with border prints",
      "Bottom: 2.5m Contrasting Geometric Block-printed Cotton",
      "Dupatta: 2.5m Airy Cotton Malmal Dupatta",
      "Natural organic dyes that grow softer with every wash"
    ]
  },
  {
    id: "dress-03",
    name: "Alia Peach Contemporary Co-ord Suit Piece with Organza Patchwork",
    category: "dress-pieces",
    subCategory: "Fusion Co-ord Sets",
    generation: "modern",
    priceINR: 4799,
    originalPriceINR: 6299,
    rating: 4.7,
    reviewCount: 63,
    isBestseller: false,
    isHandloom: false,
    hasSilkMark: false,
    tag: "Gen-Z Trend",
    color: "Peach Blossom",
    fabric: "Modal Satin & Cutwork Organza",
    craft: "Laser Cutwork & Minimalist Thread Embroidery",
    occasion: "Brunch / Mehendi / Modern Festive",
    drapeDifficulty: "Unstitched / Custom Stitch Ready",
    description: "Tailor it into a chic straight-cut kurta with flared palazzo pants or a modern kaftan suit. Includes sheer floral organza sleeve & hem trims.",
    images: [
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80"
    ],
    features: [
      "Silky modal satin top fabric (2.5m) with lustrous finish",
      "Palazzo bottom fabric (2.5m) with anti-crease drape",
      "Pre-cut organza floral inserts for sleeves and daman",
      "Comes with style guide for modern cuts (asymmetrical, co-ord)"
    ]
  },
  {
    id: "dress-04",
    name: "Raziya Royal Kashmiri Tilla Embroidered Velvet Unstitched Suit",
    category: "dress-pieces",
    subCategory: "Velvet Suit Set",
    generation: "classic",
    priceINR: 8999,
    originalPriceINR: 11499,
    rating: 4.9,
    reviewCount: 41,
    isBestseller: false,
    isHandloom: false,
    hasSilkMark: false,
    tag: "Winter Luxe",
    color: "Teal Green & Silver Zari",
    fabric: "Premium 9000 Micro Velvet + Tissue Silk Dupatta",
    craft: "Intricate Tilla Gilded Neckline & Sleeve Borders",
    occasion: "Winter Wedding / Reception",
    drapeDifficulty: "Unstitched Material",
    description: "Heavily gilded with silver tilla threadwork around the collar and borders on thick, lustrous micro velvet. Paired with a delicate tissue silk dupatta.",
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80"
    ],
    features: [
      "Top: 2.5m Heavy 9000 Micro Velvet with embroidered neckline",
      "Bottom: 2.5m Satin Velvet fabric for churidar or straight pants",
      "Dupatta: 2.5m Pure Tissue Silk with 4-sided embroidered lace",
      "Ideal for cold-weather celebrations and royal evenings"
    ]
  },

  // --- FESTIVE & FUSION SPECIALS ---
  {
    id: "fusion-01",
    name: "Navya Ruffle Saree with Mirror Work Corset Blouse Fabric",
    category: "sarees",
    subCategory: "Ruffle & Tiered Sarees",
    generation: "modern",
    priceINR: 6999,
    originalPriceINR: 8999,
    rating: 4.8,
    reviewCount: 115,
    isBestseller: true,
    isHandloom: false,
    hasSilkMark: false,
    tag: "Trending Now",
    color: "Sunset Mustard & Mirror Gold",
    fabric: "Georgette with Tiered Ruffles",
    craft: "Real Mirror Embellished Blouse Piece",
    occasion: "Haldi / Sangeet / College Fest",
    drapeDifficulty: "Easy Drape",
    description: "Multi-tiered dynamic ruffle saree that sways dramatically as you dance. Comes with an unstitched heavy mirror-work blouse fabric.",
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=900&q=80"
    ],
    features: [
      "Triple-layered cascading ruffle border",
      "Crease-resistant flowing georgette body",
      "Blouse fabric loaded with authentic Rajasthani mirror work",
      "Young, cheerful, and photo-ready for social media"
    ]
  },
  {
    id: "fusion-02",
    name: "Devyani Kalamkari Hand-Painted Pure Tussar Silk Saree",
    category: "sarees",
    subCategory: "Tussar Silk",
    generation: "classic",
    priceINR: 11999,
    originalPriceINR: 14500,
    rating: 4.9,
    reviewCount: 73,
    isBestseller: false,
    isHandloom: true,
    hasSilkMark: true,
    tag: "Art Collector",
    color: "Natural Beige & Rust Ochre",
    fabric: "Pure Wild Tussar Silk",
    craft: "Sri Kalahasti Pen Kalamkari with Natural Dyes",
    occasion: "Art Soiree / Festive / Cultural Gatherings",
    drapeDifficulty: "Intermediate",
    description: "Each saree is an original hand-painted canvas depicting tree-of-life and mythological motifs using bamboo pens and vegetable colors.",
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80"
    ],
    features: [
      "100% Hand-painted using organic alum & myrobalan dyes",
      "Rich organic texture of wild tussar silk",
      "Silk Mark certified genuine craft piece",
      "Includes coordinated pen-painted blouse material"
    ]
  }
];

// Interactive Saree Drape Guide Data (Multi-Generational)
const DRAPE_GUIDES = [
  {
    id: "drape-nivi",
    title: "The Royal Nivi Drape (Classic)",
    subtitle: "The Timeless Indian Standard",
    appeal: "Classic Heritage Loved by All",
    timeRequired: "3 Minutes",
    difficulty: "Easy",
    idealFor: "Banarasi, Kanjeevaram, Silk Sarees",
    description: "The quintessential Indian drape originating from Andhra Pradesh. Neat pleats tucked into the center waist, with the pallu gracefully draped over the left shoulder.",
    steps: [
      { step: 1, text: "Tuck the plain end of the saree at your right waist and take one full turn around to the starting point." },
      { step: 2, text: "Make 6 to 8 even pleats (approx 5 inches wide) at the front and tuck neatly into the petticoat below the navel." },
      { step: 3, text: "Bring the remaining pallu around your back, make neat shoulder pleats, and pin securely to the left shoulder leaving the rich pallu flowing to the back." }
    ],
    stylistTip: "For heavy silks, pin the pallu in crisp box pleats to keep your posture majestic and comfortable throughout long wedding ceremonies."
  },
  {
    id: "drape-belted",
    title: "The Modern Belted Drape (Gen-Z & Millennial)",
    subtitle: "Sleek, Hands-Free & Trendsetting",
    appeal: "Modern Youth & Cocktail Parties",
    timeRequired: "2 Minutes",
    difficulty: "Beginner Friendly",
    idealFor: "Organza, Chiffon, Georgette, Pre-draped",
    description: "A runaway hit among younger fashion enthusiasts. Accentuates the waistline with an ethnic or metallic belt, ensuring your pallu stays perfectly in place while dancing.",
    steps: [
      { step: 1, text: "Complete your standard front pleats and tuck into the waistband." },
      { step: 2, text: "Gather the pallu in a narrow accordion fold over the left shoulder, letting the end reach below your knees." },
      { step: 3, text: "Cinch a contrasting gold or pearl-embellished waist belt directly over the pallu at your narrowest waist point." }
    ],
    stylistTip: "Style with high heels and a modern choker necklace for an ultra-chic runway look."
  },
  {
    id: "drape-butterfly",
    title: "The Bollywood Butterfly Drape",
    subtitle: "Glamorous & Figure-Flattering",
    appeal: "Younger Generation / Parties & Receptions",
    timeRequired: "4 Minutes",
    difficulty: "Intermediate",
    idealFor: "Net, Chiffon, Satin & Shimmer Sarees",
    description: "Created for Bollywood red carpets. The pallu is pleated ultra-thinly on the shoulder to reveal the blouse design and create a sleek, elongated silhouette.",
    steps: [
      { step: 1, text: "Tuck basic pleats at the waist slightly toward the left side." },
      { step: 2, text: "Gather the pallu into tiny, sharp 1-inch micro-pleats across the bustline to form a butterfly fan shape." },
      { step: 3, text: "Pin firmly on the inner shoulder seam to emphasize blouse embroidery and statement sleeve cuffs." }
    ],
    stylistTip: "Pairs best with sweetheart necklines, corset blouses, or halter-neck cuts."
  },
  {
    id: "drape-gujarati",
    title: "The Seedha Pallu (Gujarati / Royal Front Drape)",
    subtitle: "Showcase Your Most Opulent Pallu",
    appeal: "Traditional Poojas, Elders, Grand Festivities",
    timeRequired: "4 Minutes",
    difficulty: "Intermediate",
    idealFor: "Paithani, Bandhani, Heavy Brocade & Kanjeevarams",
    description: "Instead of draping back-to-front, the pallu comes from the back over the right shoulder and is spread across the chest, displaying every inch of master zari artistry.",
    steps: [
      { step: 1, text: "Tuck the saree and make waist pleats facing toward the right side instead of left." },
      { step: 2, text: "Take the pallu from behind your back and bring it forward over your right shoulder." },
      { step: 3, text: "Spread the rich zari artwork across the chest and pin the left corner neatly at your left waist." }
    ],
    stylistTip: "The ultimate drape when you want the heirloom zari craftsmanship of your saree to be 100% visible in family photographs."
  },
  {
    id: "drape-pant",
    title: "The Indo-Western Pant Drape",
    subtitle: "Zero Petticoat, 100% Movement",
    appeal: "Gen-Z, Sangeet Nights, Fashion Mavericks",
    timeRequired: "3 Minutes",
    difficulty: "Easy",
    idealFor: "Printed Silks, Lightweight Crepes, Chiffons",
    description: "Ditch the heavy petticoat and wear your saree over tailored silk trousers, cigarette pants, or dhoti pants for unmatched mobility.",
    steps: [
      { step: 1, text: "Wear a well-fitted pair of golden or matching cigarette trousers." },
      { step: 2, text: "Tuck the initial end at the center waist of your trousers and create front pleats." },
      { step: 3, text: "Drape the pallu diagonally across the torso and toss it loosely over the left shoulder or loop it like a scarf." }
    ],
    stylistTip: "Style with embellished jutis or block heels so you can dance all night without worrying about tripping over hems."
  }
];

// Customer Reviews / "Generations of DARSHANA" Stories
const CUSTOMER_STORIES = [
  {
    id: "story-01",
    author: "Gayatri & Ananya Sharma",
    relation: "Mother & Daughter (Delhi)",
    occasion: "Family Wedding",
    productBought: "Kalyani Kanjeevaram & Noor Pre-Draped Saree",
    rating: 5,
    quote: "Finding a brand that my 58-year-old mother and 22-year-old daughter both fell in love with was impossible until DARSHANA. Mom got her authentic pure zari Kanjeevaram with certified Silk Mark, and Ananya danced all night in her 1-minute pre-draped lavender saree!",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "story-02",
    author: "Dr. Meenakshi Sundaram",
    relation: "Heirloom Textile Connoisseur (Chennai)",
    occasion: "Grandson's Upanayanam",
    productBought: "Aaranya Crimson Banarasi Katan Silk",
    rating: 5,
    quote: "The kadwa gold zari weaving is of authentic museum quality. You can feel the weight of genuine mulberry silk. It has the authentic feel of pieces we used to buy from master weavers in the 1980s.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "story-03",
    author: "Rhea Kapoor",
    relation: "Design Student & Content Creator (Mumbai)",
    occasion: "Friend's Destination Sangeet",
    productBought: "Sitara Metallic Organza & Sheesh Mahal Cape",
    rating: 5,
    quote: "The drape guide on this website is genius! I used the Belted Drape for my friend's sangeet and received non-stop compliments on Instagram. Contemporary, airy, and so photogenic.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  }
];

// Currency Exchange Rates (Base: INR)
const CURRENCIES = {
  INR: { symbol: "₹", rate: 1, code: "INR", label: "INR (₹) - India" },
  USD: { symbol: "$", rate: 0.012, code: "USD", label: "USD ($) - USA & Global" },
  GBP: { symbol: "£", rate: 0.0095, code: "GBP", label: "GBP (£) - UK" },
  AED: { symbol: "AED ", rate: 0.044, code: "AED", label: "AED (د.إ) - UAE" }
};
