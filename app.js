/* =============================================
   SZN DECANTS — App Logic & Data
   ============================================= */

// ── Cologne Data ──────────────────────────────

const colognes = [
  // ═══════════ SZN ORIGINALS ═══════════
  // To add your own SZN bottle photos: add an "img" property with the path, e.g.:
  //   img: "images/szn-01.jpg"
  // Then place the photo in the images/ folder.
  {
    id: "szn-01",
    brand: "SZN",
    name: "01",
    category: "szn",
    gradient: "linear-gradient(135deg, #3d2b1f 0%, #1a1008 100%)",
    initial: "01",
    notes: {
      top: ["Vanilla"],
      mid: ["Musk", "Wood"],
      base: ["Tobacco", "Ambergris"]
    },
    prices: { "1ml": 2, "2ml": 3, "3ml": 4, "5ml": 5, "10ml": 9, "100ml": 50 }
  },
  {
    id: "szn-02",
    brand: "SZN",
    name: "02",
    category: "szn",
    gradient: "linear-gradient(135deg, #2d1f1a 0%, #0f0a08 100%)",
    initial: "02",
    notes: {
      top: ["Vanilla", "Leather"],
      mid: ["Leather"],
      base: ["Amber", "Milk", "Oud"]
    },
    prices: { "1ml": 2, "2ml": 3, "3ml": 4, "5ml": 5, "10ml": 9, "100ml": 50 }
  },
  {
    id: "szn-03",
    brand: "SZN",
    name: "03",
    category: "szn",
    gradient: "linear-gradient(135deg, #4a1a2e 0%, #1a0a12 100%)",
    initial: "03",
    notes: {
      top: ["Fruits", "Cherry", "Musk"],
      mid: ["Vanilla", "Fresh Notes", "Leather"],
      base: ["Green Notes", "Amber", "Coconut"]
    },
    prices: { "1ml": 2, "2ml": 3, "3ml": 4, "5ml": 5, "10ml": 9, "100ml": 50 }
  },
  {
    id: "szn-04",
    brand: "SZN",
    name: "04",
    category: "szn",
    gradient: "linear-gradient(135deg, #1a3d2b 0%, #0a1a10 100%)",
    initial: "04",
    notes: {
      top: ["Pear", "Mint", "Bergamot", "Lavender"],
      mid: ["Cardamom", "Sage"],
      base: ["Vanilla", "Amber", "Musk", "Patchouli"]
    },
    prices: { "1ml": 2, "2ml": 3, "3ml": 4, "5ml": 5, "10ml": 9, "100ml": 50 }
  },
  {
    id: "szn-05",
    brand: "SZN",
    name: "05",
    category: "szn",
    gradient: "linear-gradient(135deg, #1a2540 0%, #0a0f1a 100%)",
    initial: "05",
    notes: {
      top: ["Amber", "Fruit", "Sweet"],
      mid: ["Fresh", "Fruit", "Ozone"],
      base: ["Musk", "Patchouli", "Vanilla"]
    },
    prices: { "1ml": 2, "2ml": 3, "3ml": 4, "5ml": 5, "10ml": 9, "100ml": 50 }
  },
  {
    id: "szn-06",
    brand: "SZN",
    name: "06",
    category: "szn",
    gradient: "linear-gradient(135deg, #2d1a40 0%, #120a1a 100%)",
    initial: "06",
    notes: {
      top: ["Cardamom", "Pink Pepper", "Violet"],
      mid: ["Sage", "Nutmeg"],
      base: ["Vanilla", "Amber", "Caramel"]
    },
    prices: { "1ml": 2, "2ml": 3, "3ml": 4, "5ml": 5, "10ml": 9, "100ml": 50 }
  },
  {
    id: "szn-540",
    brand: "SZN",
    name: "540",
    category: "szn",
    gradient: "linear-gradient(135deg, #4a3520 0%, #1a1408 100%)",
    initial: "540",
    notes: {
      top: ["Pine", "Saffron"],
      mid: ["Ambroxan", "Hedione", "Virginia Cedar"],
      base: ["Jasmine", "Almond"]
    },
    prices: { "1ml": 2, "2ml": 3, "3ml": 4, "5ml": 5, "10ml": 9, "100ml": 50 }
  },

  // ═══════════ DESIGNER COLLECTION ═══════════
  {
    id: "lv-pacific-chill",
    brand: "Louis Vuitton",
    name: "Pacific Chill",
    category: "designer",
    gradient: "linear-gradient(135deg, #5a4a2a 0%, #1a1508 100%)",
    initial: "LV",
    img: "https://us.thecolognecollection.com/cdn/shop/files/louisvuittonpacificchillsample_grande.png?v=1752944957",
    notes: {
      top: ["Citron", "Orange", "Lemon", "Mint", "Black Currant"],
      mid: ["Apricot", "Basil", "Carrot Seeds", "May Rose"],
      base: ["Fig", "Dates", "Ambrette"]
    },
    prices: { "1ml": 9, "2ml": 16, "3ml": 22, "5ml": 31, "10ml": 54 }
  },
  {
    id: "ch-bad-boy",
    brand: "Carolina Herrera",
    name: "Bad Boy Cobalt Elixir",
    category: "designer",
    gradient: "linear-gradient(135deg, #1a2a4a 0%, #0a0f1a 100%)",
    initial: "CH",
    img: "https://www.imagebeauty.com/cdn/shop/files/Carolina-Herrera-Bad-Boy-Cobalt-Elixir-1-7-oz.jpg?v=1733840291",
    notes: {
      top: ["Black Pepper", "Sage"],
      mid: ["Truffle", "Woodsy Notes"],
      base: ["Vanilla", "Frankincense"]
    },
    prices: { "1ml": 7, "2ml": 11, "3ml": 15, "5ml": 22, "10ml": 37 }
  },
  {
    id: "armani-swya",
    brand: "Emporio Armani",
    name: "Stronger With You Absolutely",
    category: "designer",
    gradient: "linear-gradient(135deg, #3a2a1a 0%, #1a1008 100%)",
    initial: "EA",
    img: "https://www.scentsangel.com/cdn/shop/files/arif_16_c8fcf49b-7336-426b-bcc9-6f4c4423b331.jpg?v=1760654745",
    notes: {
      top: ["Rum", "Elemi", "Bergamot"],
      mid: ["Lavender", "Davana"],
      base: ["Madagascar Vanilla", "Chestnut", "Cedar", "Patchouli"]
    },
    prices: { "1ml": 4, "2ml": 7, "3ml": 9, "5ml": 13, "10ml": 21 }
  },
  {
    id: "alhambra-immortel",
    brand: "Maison Alhambra",
    name: "Immortel",
    category: "budget",
    gradient: "linear-gradient(135deg, #2a3a2a 0%, #0f1a0f 100%)",
    initial: "MA",
    img: "https://foreverlux.com/cdn/shop/files/1472272__61908.1750526723.1280.1280.png?v=1761781008",
    notes: {
      top: ["Ginger", "Grapefruit", "Bergamot"],
      mid: ["Rosemary", "Water Notes", "Sage", "Geranium"],
      base: ["Ambroxan", "Amber", "Labdanum"]
    },
    prices: { "1ml": 2, "2ml": 3, "3ml": 4, "5ml": 5, "10ml": 6 }
  },
  {
    id: "issey-leau",
    brand: "Issey Miyake",
    name: "L'Eau D'Issey Pour Homme",
    category: "designer",
    gradient: "linear-gradient(135deg, #2a3540 0%, #0f1518 100%)",
    initial: "IM",
    img: "https://www.isseymiyakeparfums.com/dw/image/v2/BCMQ_PRD/on/demandware.static/-/Sites-itemmaster_isseymiyake/default/dwc92679e8/Main image/Issey-Miyake-eau-issey-perfume-men-main.png?sw=500&sh=500&sm=cut&sfrm=jpg&q=90",
    notes: {
      top: ["Yuzu", "Lemon", "Bergamot", "Cypress", "Coriander"],
      mid: ["Blue Lotus", "Nutmeg", "Geranium", "Saffron"],
      base: ["Vetiver", "Musk", "Cedar", "Sandalwood", "Amber"]
    },
    prices: { "1ml": 5, "2ml": 8, "3ml": 11, "5ml": 16, "10ml": 27 }
  },
  {
    id: "xerjoff-erba",
    brand: "Xerjoff",
    name: "Erba Pura",
    category: "designer",
    gradient: "linear-gradient(135deg, #3d2a4a 0%, #1a0f20 100%)",
    initial: "XJ",
    img: "https://www.scentsangel.com/cdn/shop/files/ERBA_PURA_XERJOFF_42_1.webp?v=1744837522",
    notes: {
      top: ["Sicilian Orange", "Calabrian Bergamot", "Sicilian Lemon"],
      mid: ["Mediterranean Fruits", "Summer Berries"],
      base: ["White Musk", "Madagascar Vanilla", "Amber"]
    },
    prices: { "1ml": 8, "2ml": 14, "3ml": 18, "5ml": 26, "10ml": 45 }
  },
  {
    id: "mmm-jazz",
    brand: "Maison Margiela",
    name: "Replica Jazz Club",
    category: "designer",
    gradient: "linear-gradient(135deg, #3a2a20 0%, #1a1008 100%)",
    initial: "MM",
    img: "https://cdn.shopify.com/s/files/1/0765/6138/3745/files/902001_59206ec9-4442-40b8-9c77-82d4b4f6064b.jpg?v=1754967734",
    notes: {
      top: ["Pink Pepper", "Neroli", "Lemon"],
      mid: ["Rum", "Java Vetiver Oil", "Clary Sage"],
      base: ["Tobacco Leaf", "Vanilla Bean", "Styrax"]
    },
    prices: { "1ml": 5, "2ml": 8, "3ml": 11, "5ml": 16, "10ml": 27 }
  },
  {
    id: "val-bir-intense",
    brand: "Valentino",
    name: "Born in Roma Intense",
    category: "designer",
    gradient: "linear-gradient(135deg, #4a1a1a 0%, #1a0808 100%)",
    initial: "V",
    img: "https://valentino-cdn.thron.com/delivery/public/image/valentino/a23c022b-e522-4ba5-b4e9-dd6d5d51e3be/ihqstx/std/500x0/Born-In-Roma-Intense-Eau-De-Parfum-Spray-100Ml?quality=80&size=35&format=auto",
    notes: {
      top: ["Vanilla"],
      mid: ["Lavender"],
      base: ["Vetiver"]
    },
    prices: { "1ml": 5, "2ml": 8, "3ml": 10, "5ml": 15, "10ml": 25 }
  },
  {
    id: "jpg-le-beau",
    brand: "Jean Paul Gaultier",
    name: "Le Beau EDT",
    category: "designer",
    gradient: "linear-gradient(135deg, #1a2a3a 0%, #0a1018 100%)",
    initial: "JPG",
    img: "https://sensabeauty.com/cdn/shop/files/904696_Jean_Paul_Gaultier_Le_Beau_EDT_4.2_oz_grande.jpg?v=1715097778",
    notes: {
      top: ["Bergamot"],
      mid: ["Coconut"],
      base: ["Tonka Bean"]
    },
    prices: { "1ml": 3, "2ml": 5, "3ml": 7, "5ml": 10, "10ml": 18 }
  },
  {
    id: "jpg-le-male-lp",
    brand: "Jean Paul Gaultier",
    name: "Le Male Le Parfum",
    category: "designer",
    gradient: "linear-gradient(135deg, #1a1a3a 0%, #0a0a18 100%)",
    initial: "JPG",
    img: "http://shop.simon.com/cdn/shop/files/a4121bf39c304e5ab92b6492dd5433de_1000x1000.jpg?v=1737670076",
    notes: {
      top: ["Cardamom"],
      mid: ["Lavender", "Iris"],
      base: ["Vanilla", "Oriental Notes", "Woodsy Notes"]
    },
    prices: { "1ml": 4, "2ml": 6, "3ml": 8, "5ml": 11, "10ml": 19 }
  },
  {
    id: "jpg-le-male-elixir",
    brand: "Jean Paul Gaultier",
    name: "Le Male Elixir",
    category: "designer",
    gradient: "linear-gradient(135deg, #2a1a30 0%, #100a15 100%)",
    initial: "JPG",
    img: "https://scentsgift.com/cdn/shop/files/JeanPaulGaultierLeMaleElixir.jpg?v=1762199124",
    notes: {
      top: ["Lavender", "Mint"],
      mid: ["Vanilla", "Benzoin"],
      base: ["Honey", "Tonka Bean", "Tobacco"]
    },
    prices: { "1ml": 5, "2ml": 9, "3ml": 12, "5ml": 17, "10ml": 29 }
  },
  {
    id: "jpg-le-male",
    brand: "Jean Paul Gaultier",
    name: "Le Male",
    category: "designer",
    gradient: "linear-gradient(135deg, #1a2535 0%, #0a0f15 100%)",
    initial: "JPG",
    img: "https://beautyhouse.com/cdn/shop/files/01uovwoyan.png?v=1750805408",
    notes: {
      top: ["Lavender", "Mint", "Cardamom", "Bergamot"],
      mid: ["Cinnamon", "Orange Blossom", "Caraway"],
      base: ["Vanilla", "Tonka Bean", "Amber", "Sandalwood"]
    },
    prices: { "1ml": 4, "2ml": 7, "3ml": 9, "5ml": 13, "10ml": 22 }
  },
  {
    id: "lattafa-qahwa",
    brand: "Lattafa",
    name: "Khamrah Qahwa",
    category: "budget",
    gradient: "linear-gradient(135deg, #2a2015 0%, #120e08 100%)",
    initial: "L",
    img: "https://lattafa.com/wp-content/uploads/2024/05/2-79.jpg",
    notes: {
      top: ["Cinnamon", "Cardamom", "Ginger"],
      mid: ["Praline", "Candied Fruits", "White Flowers"],
      base: ["Coffee", "Vanilla", "Tonka Bean", "Benzoin", "Musk"]
    },
    prices: { "1ml": 2, "2ml": 3, "3ml": 4, "5ml": 5, "10ml": 9 }
  },
  {
    id: "lattafa-dukhan",
    brand: "Lattafa",
    name: "Khamrah Dukhan",
    category: "budget",
    gradient: "linear-gradient(135deg, #2a2520 0%, #121010 100%)",
    initial: "L",
    img: "https://labelleperfumes.com/cdn/shop/files/LATTAFA-DUKHAN_grande.webp?v=1762277441",
    notes: {
      top: ["Mandarin", "Pimento", "Smoked Spices"],
      mid: ["Cistus", "Orange Flower", "Incense", "Patchouli"],
      base: ["Tobacco", "Amber", "Tonka Bean", "Benzoin", "Praline"]
    },
    prices: { "1ml": 2, "2ml": 3, "3ml": 4, "5ml": 5, "10ml": 9 }
  },
  {
    id: "rl-polo-blue",
    brand: "Ralph Lauren",
    name: "Polo Blue EDP",
    category: "designer",
    gradient: "linear-gradient(135deg, #152545 0%, #080f1a 100%)",
    initial: "RL",
    img: "https://beautyhouse.com/cdn/shop/files/04q82idjkq.png?v=1723947126&width=600",
    notes: {
      top: ["Sea Notes", "Bergamot", "Cardamom"],
      mid: ["Basil", "Verbena", "Clary Sage", "Orris"],
      base: ["Suede", "Vetiver", "Woodsy Notes", "Patchouli"]
    },
    prices: { "1ml": 6, "2ml": 10, "3ml": 13, "5ml": 18, "10ml": 31 }
  },
  {
    id: "nautica-voyage",
    brand: "Nautica",
    name: "Voyage",
    category: "budget",
    gradient: "linear-gradient(135deg, #1a3040 0%, #0a1018 100%)",
    initial: "N",
    img: "https://perfumania.com/cdn/shop/products/Nautica-Voyage-Mens-Eau-de-Toilette-Spray-EDT-Spray-3.4-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Main.jpg?v=1752165366",
    notes: {
      top: ["Green Leaves", "Apple"],
      mid: ["Lotus", "Mimosa"],
      base: ["Musk", "Cedar", "Oakmoss", "Amber"]
    },
    prices: { "1ml": 2, "2ml": 3, "3ml": 4, "5ml": 5, "10ml": 6 }
  },
  {
    id: "nautica-blue",
    brand: "Nautica",
    name: "Blue",
    category: "budget",
    gradient: "linear-gradient(135deg, #15253a 0%, #080f18 100%)",
    initial: "N",
    img: "https://perfumania.com/cdn/shop/products/Nautica-Blue-Mens-Eau-de-Toilette-Spray-3.4-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details.jpg?v=1579880487",
    notes: {
      top: ["Pineapple", "Bergamot", "Peach"],
      mid: ["Water Lily", "Jasmine"],
      base: ["Sandalwood", "Musk", "Cedar"]
    },
    prices: { "1ml": 2, "2ml": 3, "3ml": 4, "5ml": 5, "10ml": 6 }
  },
  {
    id: "montagne-imaginary",
    brand: "Montagne",
    name: "Imaginary",
    category: "designer",
    gradient: "linear-gradient(135deg, #30301a 0%, #15150a 100%)",
    initial: "MP",
    img: "https://images.squarespace-cdn.com/content/v1/5b947453e749403412d5025a/5c81fb1be2c483d338e577a9/64cd5703825b0778a4f12888/IMAGINARY.jpg?format=500w",
    notes: {
      top: ["Citron", "Calabrian Bergamot", "Sicilian Orange"],
      mid: ["Nigerian Ginger", "Tunisian Neroli", "Ceylon Cinnamon"],
      base: ["Chinese Black Tea", "Ambroxan", "Olibanum", "Guaiac Wood"]
    },
    prices: { "1ml": 5, "2ml": 6, "3ml": 7, "5ml": 10, "10ml": 17 }
  },
  {
    id: "cremo-sbv",
    brand: "Cremo",
    name: "Spice & Black Vanilla",
    category: "budget",
    gradient: "linear-gradient(135deg, #2a201a 0%, #120e0a 100%)",
    initial: "C",
    img: "https://cremocompany.com/cdn/shop/files/2-ScentCues_8a4bc55f-6478-4a68-a891-5b91de06ad36_1024x.jpg?v=1749233152",
    notes: {
      top: ["Cardamom"],
      mid: ["Cashmere Wood"],
      base: ["Bourbon Vanilla", "Vetiver"]
    },
    prices: { "1ml": 2, "2ml": 3, "3ml": 4, "5ml": 5, "10ml": 6 }
  },
  {
    id: "val-purple",
    brand: "Valentino",
    name: "Born in Roma Purple Melancholia",
    category: "designer",
    gradient: "linear-gradient(135deg, #301a3a 0%, #150a1a 100%)",
    initial: "V",
    img: "https://valentino-cdn.thron.com/delivery/public/image/valentino/c4f6285c-9f96-48d3-aae3-9313d761abfb/ihqstx/std/500x0/Born-In-Roma-Purple-Melancholia-Eau-De-Toilette-100ml?quality=80&size=35&format=auto",
    notes: {
      top: ["Cardamom"],
      mid: ["Lavandin", "Coconut Accord"],
      base: ["Amberwood"]
    },
    prices: { "1ml": 4, "2ml": 7, "3ml": 9, "5ml": 13, "10ml": 21 }
  }
];


// ── Bundle Data ──────────────────────────────

const bundles = [
  {
    id: "bundle-summer",
    name: "Summer Scents",
    description: "Fresh & breezy picks for warm weather",
    gradient: "linear-gradient(135deg, #1a4a2a 0%, #0a2a15 50%, #2a5a3a 100%)",
    icon: "\u2600\uFE0F",
    price: 20,
    items: [
      { cologneId: "nautica-voyage", size: "5ml", individualPrice: 5 },
      { cologneId: "issey-leau", size: "3ml", individualPrice: 11 },
      { cologneId: "xerjoff-erba", size: "2ml", individualPrice: 14 },
      { cologneId: "lv-pacific-chill", size: "1ml", individualPrice: 9 }
    ]
  },
  {
    id: "bundle-winter",
    name: "Winter Scents",
    description: "Warm & cozy picks for cold nights",
    gradient: "linear-gradient(135deg, #1a2040 0%, #0a0f2a 50%, #2a3060 100%)",
    icon: "\u2744\uFE0F",
    price: 20,
    items: [
      { cologneId: "lattafa-qahwa", size: "5ml", individualPrice: 5 },
      { cologneId: "mmm-jazz", size: "3ml", individualPrice: 11 },
      { cologneId: "armani-swya", size: "2ml", individualPrice: 7 },
      { cologneId: "jpg-le-male-elixir", size: "1ml", individualPrice: 5 }
    ]
  },
  {
    id: "bundle-jpg",
    name: "JPG Collection",
    description: "The best of Jean Paul Gaultier",
    gradient: "linear-gradient(135deg, #2a1a35 0%, #15081a 50%, #351a40 100%)",
    icon: "\u2693",
    price: 15,
    items: [
      { cologneId: "jpg-le-male", size: "3ml", individualPrice: 9 },
      { cologneId: "jpg-le-male-lp", size: "3ml", individualPrice: 8 },
      { cologneId: "jpg-le-male-elixir", size: "2ml", individualPrice: 9 },
      { cologneId: "jpg-le-beau", size: "2ml", individualPrice: 5 }
    ]
  },
  {
    id: "bundle-premium",
    name: "Premium Collection",
    description: "7 full-size decants \u2014 the ultimate sampler",
    gradient: "linear-gradient(135deg, #4a3520 0%, #2a1a08 50%, #5a4528 100%)",
    icon: "\uD83D\uDC51",
    price: 100,
    items: [
      { cologneId: "lv-pacific-chill", size: "5ml", individualPrice: 31 },
      { cologneId: "xerjoff-erba", size: "5ml", individualPrice: 26 },
      { cologneId: "ch-bad-boy", size: "5ml", individualPrice: 22 },
      { cologneId: "jpg-le-male-elixir", size: "5ml", individualPrice: 17 },
      { cologneId: "val-bir-intense", size: "5ml", individualPrice: 15 },
      { cologneId: "szn-540", size: "10ml", individualPrice: 9 },
      { cologneId: "szn-01", size: "10ml", individualPrice: 9 }
    ]
  }
];


// ── Render Cards ──────────────────────────────

function renderCards() {
  const sznGrid = document.getElementById('szn-grid');
  const designerGrid = document.getElementById('designer-grid');

  const sznColognes = colognes.filter(c => c.category === 'szn');
  const otherColognes = colognes.filter(c => c.category !== 'szn');

  sznGrid.innerHTML = sznColognes.map((c, i) => createCard(c, i)).join('');
  designerGrid.innerHTML = otherColognes.map((c, i) => createCard(c, i + sznColognes.length)).join('');
}

function createCard(cologne, index) {
  const priceKeys = Object.keys(cologne.prices);
  const minPrice = cologne.prices[priceKeys[0]];
  const isSzn = cologne.category === 'szn';
  const hasImg = !!cologne.img;

  // First 2-3 top notes as tags
  const tags = cologne.notes.top.slice(0, 3);

  const visualContent = hasImg
    ? `<img class="card-img" src="${cologne.img}" alt="${cologne.brand} ${cologne.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
       <div class="card-initial" style="display:none">${cologne.initial}</div>`
    : `<div class="card-initial">${cologne.initial}</div>`;

  return `
    <div class="card"
         data-id="${cologne.id}"
         data-category="${cologne.category}"
         data-brand="${cologne.brand.toLowerCase()}"
         data-name="${cologne.name.toLowerCase()}"
         style="animation-delay: ${index * 0.05}s"
         onclick="openModal('${cologne.id}')">
      <div class="card-visual" style="background: ${cologne.gradient}">
        ${isSzn ? '<div class="card-szn-badge">ORIGINAL</div>' : ''}
        ${visualContent}
      </div>
      <div class="card-body">
        <div class="card-brand">${cologne.brand}</div>
        <div class="card-name">${cologne.name}</div>
        <div class="card-price">from <span>$${minPrice}</span></div>
        <div class="card-tags">
          ${tags.map(t => `<span class="card-tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `;
}


// ── Render Bundles ───────────────────────────

function renderBundles() {
  const bundleGrid = document.getElementById('bundle-grid');
  if (!bundleGrid) return;
  bundleGrid.innerHTML = bundles.map((b, i) => createBundleCard(b, i)).join('');
}

function createBundleCard(bundle, index) {
  const totalIndividual = bundle.items.reduce((sum, item) => sum + item.individualPrice, 0);
  const savings = totalIndividual - bundle.price;
  const savingsPercent = Math.round((savings / totalIndividual) * 100);

  return `
    <div class="card bundle-card"
         data-id="${bundle.id}"
         data-category="bundle"
         style="animation-delay: ${index * 0.05}s"
         onclick="openBundleModal('${bundle.id}')">
      <div class="card-visual" style="background: ${bundle.gradient}">
        <div class="card-szn-badge bundle-badge">BUNDLE</div>
        <div class="card-initial bundle-icon">${bundle.icon}</div>
      </div>
      <div class="card-body">
        <div class="card-brand">SZN Bundle</div>
        <div class="card-name">${bundle.name}</div>
        <div class="card-price"><span>$${bundle.price}</span></div>
        <div class="card-tags">
          <span class="card-tag bundle-save-tag">Save $${savings} (${savingsPercent}%)</span>
          <span class="card-tag">${bundle.items.length} fragrances</span>
        </div>
      </div>
    </div>
  `;
}


// ── Modal ─────────────────────────────────────

const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');

function openModal(id) {
  const cologne = colognes.find(c => c.id === id);
  if (!cologne) return;

  // Show cologne sections, hide bundle sections
  document.getElementById('modalNotes').style.display = '';
  document.getElementById('modalPricingSection').style.display = '';
  document.getElementById('modalBundleItems').style.display = 'none';

  const badge = document.getElementById('modalBadge');
  if (cologne.img) {
    badge.innerHTML = `<img src="${cologne.img}" alt="${cologne.brand} ${cologne.name}" style="width:100%;height:100%;object-fit:contain;border-radius:6px;" onerror="this.parentElement.textContent='${cologne.initial}'">`;
  } else {
    badge.textContent = cologne.initial;
  }
  badge.style.background = cologne.gradient;
  document.getElementById('modalBrand').textContent = cologne.brand;
  document.getElementById('modalName').textContent = cologne.name;

  // Notes
  document.getElementById('notesTop').innerHTML =
    cologne.notes.top.map(n => `<li>${n}</li>`).join('');
  document.getElementById('notesMid').innerHTML =
    cologne.notes.mid.map(n => `<li>${n}</li>`).join('');
  document.getElementById('notesBase').innerHTML =
    cologne.notes.base.map(n => `<li>${n}</li>`).join('');

  // Prices
  document.getElementById('priceGrid').innerHTML =
    Object.entries(cologne.prices).map(([size, price]) => `
      <div class="price-item">
        <div class="price-size">${size}</div>
        <div class="price-cost">$${price}</div>
      </div>
    `).join('');

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function openBundleModal(bundleId) {
  const bundle = bundles.find(b => b.id === bundleId);
  if (!bundle) return;

  const badge = document.getElementById('modalBadge');
  badge.innerHTML = `<span style="font-size:2rem;line-height:1">${bundle.icon}</span>`;
  badge.style.background = bundle.gradient;
  document.getElementById('modalBrand').textContent = 'SZN Bundle';
  document.getElementById('modalName').textContent = bundle.name;

  // Hide scent notes, show bundle items
  document.getElementById('modalNotes').style.display = 'none';
  document.getElementById('modalPricingSection').style.display = 'none';
  const bundleSection = document.getElementById('modalBundleItems');
  bundleSection.style.display = 'block';

  // Build items list
  const totalIndividual = bundle.items.reduce((sum, item) => sum + item.individualPrice, 0);
  const savings = totalIndividual - bundle.price;
  const savingsPercent = Math.round((savings / totalIndividual) * 100);

  let itemsHtml = `<p style="text-align:center;color:#a0a0a0;font-size:0.9rem;margin-bottom:16px;font-weight:300">${bundle.description}</p>`;

  itemsHtml += bundle.items.map((item, idx) => {
    const cologne = colognes.find(c => c.id === item.cologneId);
    const displayName = cologne ? `${cologne.brand} ${cologne.name}` : item.cologneId;
    return `
      <div class="bundle-item-row" style="animation:fadeInUp 0.3s ease ${idx * 0.05}s both">
        <div class="bundle-item-info">
          <span class="bundle-item-name">${displayName}</span>
          <span class="bundle-item-size">${item.size}</span>
        </div>
        <span class="bundle-item-price">$${item.individualPrice}</span>
      </div>
    `;
  }).join('');

  document.getElementById('bundleItemsList').innerHTML = itemsHtml;
  document.getElementById('bundleSavings').innerHTML = `
    <div class="bundle-total-row">
      <span>Individual Total</span>
      <span class="bundle-total-strikethrough">$${totalIndividual}</span>
    </div>
    <div class="bundle-total-row bundle-price-row">
      <span>Bundle Price</span>
      <span class="bundle-total-price">$${bundle.price}</span>
    </div>
    <div class="bundle-total-row bundle-savings-row">
      <span>You Save</span>
      <span class="bundle-total-savings">$${savings} (${savingsPercent}% off)</span>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});


// ── Filtering ─────────────────────────────────

const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');

let activeFilter = 'all';

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    applyFilters();
  });
});

searchInput.addEventListener('input', () => {
  applyFilters();
});

function applyFilters() {
  const query = searchInput.value.toLowerCase().trim();
  const cards = document.querySelectorAll('.card:not(.bundle-card)');
  const bundleCards = document.querySelectorAll('.bundle-card');
  const sznSection = document.getElementById('szn-section');
  const designerSection = document.getElementById('designer-section');
  const bundleSection = document.getElementById('bundle-section');
  const designerTitle = designerSection.querySelector('.section-title');
  const designerSubtitle = designerSection.querySelector('.section-subtitle');

  let sznVisible = 0;
  let designerVisible = 0;
  let bundleVisible = 0;

  cards.forEach(card => {
    const category = card.dataset.category;
    const brand = card.dataset.brand;
    const name = card.dataset.name;

    // Category filter
    let showByCategory = false;
    if (activeFilter === 'all') showByCategory = true;
    else if (activeFilter === 'szn') showByCategory = category === 'szn';
    else if (activeFilter === 'designer') showByCategory = category === 'designer';
    else if (activeFilter === 'budget') showByCategory = category === 'budget';
    else if (activeFilter === 'bundle') showByCategory = false;

    // Search filter
    let showBySearch = true;
    if (query) {
      showBySearch = brand.includes(query) || name.includes(query);
    }

    const show = showByCategory && showBySearch;
    card.classList.toggle('hidden', !show);

    if (show) {
      if (category === 'szn') sznVisible++;
      else designerVisible++;
    }
  });

  // Handle bundle cards
  bundleCards.forEach(card => {
    const showByCategory = activeFilter === 'all' || activeFilter === 'bundle';
    let showBySearch = true;
    if (query) {
      const bundleId = card.dataset.id;
      const bundle = bundles.find(b => b.id === bundleId);
      if (bundle) {
        const nameMatch = bundle.name.toLowerCase().includes(query);
        const itemMatch = bundle.items.some(item => {
          const cologne = colognes.find(c => c.id === item.cologneId);
          return cologne && (cologne.brand.toLowerCase().includes(query) || cologne.name.toLowerCase().includes(query));
        });
        showBySearch = nameMatch || itemMatch;
      }
    }
    const show = showByCategory && showBySearch;
    card.classList.toggle('hidden', !show);
    if (show) bundleVisible++;
  });

  // Update section title based on active filter
  if (activeFilter === 'budget') {
    designerTitle.textContent = 'Budget Friendly';
    designerSubtitle.textContent = 'Great scents at unbeatable prices';
  } else if (activeFilter === 'designer') {
    designerTitle.textContent = 'Designer Collection';
    designerSubtitle.textContent = 'Premium decants from top fragrance houses';
  } else {
    designerTitle.textContent = 'Designer Collection';
    designerSubtitle.textContent = 'Premium decants from top fragrance houses';
  }

  // Hide section headers if no cards visible
  sznSection.style.display = sznVisible > 0 ? '' : 'none';
  designerSection.style.display = designerVisible > 0 ? '' : 'none';
  if (bundleSection) bundleSection.style.display = bundleVisible > 0 ? '' : 'none';
}


// ── Init ──────────────────────────────────────

renderCards();
renderBundles();
