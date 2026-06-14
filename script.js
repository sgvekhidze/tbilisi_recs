// ========================================================
//  DATA
// ========================================================

const foodData = [
  {
    name: "Brunch Gastronome",
    description: "Tbilisi's favourite brunch destination — a cozy neighbourhood spot in Dighomi serving creative weekend brunch plates, excellent coffee, and a relaxed, homey atmosphere.",
    meals: ["breakfast", "lunch"],
    cuisine: "Brunch & Café",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Gastronom+Dighomi+Tbilisi",
    woltLink: "https://wolt.com/en/geo/tbilisi/venue/gastronome-dighomi",
    tags: ["brunch", "coffee", "cozy"],
    emoji: "🍳"
  },
  {
    name: "Honoré",
    description: "A charming French-inspired café with exceptional pastries, croissants, and specialty coffee. The perfect spot to start your morning in Tbilisi — elegant, relaxed, and delicious.",
    meals: ["breakfast"],
    cuisine: "French Café",
    mapLink: "https://share.google/PyWOHu70oPqzEYgZb",
    woltLink: "https://wolt.com/en/geo/tbilisi/restaurant/honor",
    tags: ["coffee", "pastries", "french"],
    emoji: "☕"
  },
  {
    name: "Food Good",
    description: "A cozy and welcoming café popular with locals for its wholesome breakfast plates. Great coffee, fresh ingredients, and a relaxed atmosphere to ease into your day.",
    meals: ["breakfast"],
    cuisine: "Café & Breakfast",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Food+Good+Tbilisi",
    woltLink: "https://wolt.com/en/geo/tbilisi/brand/food-good",
    tags: ["coffee", "fresh", "local favourite"],
    emoji: "🥗"
  },
  {
    name: "Ska",
    description: "A lively and popular lunch spot known for its fresh, creative dishes and vibrant atmosphere. Perfect for a mid-day break in the city.",
    meals: ["lunch"],
    cuisine: "Modern Café",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Ska+restaurant+Tbilisi",
    woltLink: "https://wolt.com/en/geo/tbilisi/brand/ska",
    tags: ["casual", "fresh", "popular"],
    emoji: "🌮"
  },
  {
    name: "Rigi",
    description: "An elegant modern restaurant with beautifully crafted European cuisine in a stylish space. A great choice for a polished business lunch or a refined evening dinner.",
    meals: ["lunch", "dinner"],
    cuisine: "Modern European",
    mapLink: "https://maps.app.goo.gl/EaB3Tb5qQQ1YQX2w9",
    woltLink: "https://wolt.com/en/geo/tbilisi/restaurant/rigi-gastrodouqan",
    tags: ["modern", "elegant", "european"],
    emoji: "🍽️"
  },
  {
    name: "Palmebi",
    description: "Authentic Georgian cuisine in a warm, welcoming setting. Don't miss the legendary khinkali (soup dumplings) and khachapuri — the soul food of Georgia.",
    meals: ["lunch", "dinner"],
    cuisine: "Georgian Traditional",
    mapLink: "https://share.google/aHqPZ2sXfqqDmouFx",
    woltLink: "https://wolt.com/en/geo/tbilisi/restaurant/palmebi-by-honor",
    tags: ["georgian", "traditional", "khinkali"],
    emoji: "🥟"
  },
  {
    name: "Ninia's Garden",
    description: "A hidden gem with a beautiful terrace garden setting. Enjoy thoughtfully prepared Georgian dishes in a romantic outdoor atmosphere — perfect for a long, leisurely meal.",
    meals: ["lunch", "dinner"],
    cuisine: "Georgian",
    mapLink: "https://maps.app.goo.gl/5SKqPEusJ5dsTpSD7",
    woltLink: null, // Not available on Wolt
    tags: ["garden", "terrace", "romantic"],
    emoji: "🌿"
  },
  {
    name: "8000 Vintages",
    description: "Tbilisi's premier destination for Georgian natural wines. An extraordinary selection of local qvevri wines paired with excellent food — an absolute must for wine lovers.",
    meals: ["dinner"],
    cuisine: "Wine Bar & Georgian",
    mapLink: "https://www.google.com/maps/place/8000+Vintages/@41.7082206,44.7587072,17z",
    woltLink: "https://wolt.com/en/geo/tbilisi/brand/8000-vintages",
    tags: ["wine", "natural wine", "upscale"],
    emoji: "🍷"
  },
  {
    name: "ORO Marjanishvili",
    description: "Modern Georgian kitchen with a creative twist on classic flavors, situated in the vibrant Marjanishvili neighborhood. Fresh, seasonal, and full of character.",
    meals: ["lunch", "dinner"],
    cuisine: "Modern Georgian",
    mapLink: "https://maps.app.goo.gl/JEoFywUEVVnbzFAb6",
    woltLink: null, // Not available on Wolt
    tags: ["modern", "creative", "seasonal"],
    emoji: "✨"
  }
];

const sightseeingData = [
  {
    name: "Narikala Fortress",
    description: "Ancient fortress dating back to the 4th century, perched above Old Tbilisi with sweeping panoramic views of the city. Best visited at sunset.",
    category: "Historic",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Narikala+Fortress+Tbilisi",
    tags: ["historic", "views", "walking"],
    emoji: "🏰",
    duration: "1–2 hours"
  },
  {
    name: "Abanotubani (Sulfur Baths)",
    description: "Tbilisi's iconic sulfur bath district — the city was founded around these natural hot springs. Book a private domed bathhouse for a uniquely relaxing experience.",
    category: "Experience",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Abanotubani+Tbilisi",
    tags: ["spa", "cultural", "unique"],
    emoji: "♨️",
    duration: "1–3 hours"
  },
  {
    name: "Chronicles of Georgia",
    description: "A monumental 35-metre stone column carved with reliefs of Georgian kings, saints, and warriors. Perched on a hill above the Tbilisi Sea reservoir — dramatic and unforgettable.",
    category: "Monument",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Chronicles+of+Georgia+Tbilisi",
    tags: ["monument", "views", "iconic"],
    emoji: "🗿",
    duration: "1 hour"
  },
  {
    name: "Tbilisi Synagogue",
    description: "One of the most beautiful synagogues in the Caucasus, in the heart of Old Town. A testament to Tbilisi's centuries-long Jewish community and the city's multicultural heritage.",
    category: "Religious",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Great+Synagogue+Tbilisi",
    tags: ["historic", "culture", "architecture"],
    emoji: "✡️",
    duration: "30–45 min"
  },
  {
    name: "Bridge of Peace",
    description: "A striking contemporary glass-and-steel pedestrian bridge over the Mtkvari River. Gorgeous at any hour, but truly magical when illuminated at night.",
    category: "Architecture",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Bridge+of+Peace+Tbilisi",
    tags: ["architecture", "modern", "night"],
    emoji: "🌉",
    duration: "20–30 min"
  },
  {
    name: "Old Town (Kala)",
    description: "Wander cobblestone streets lined with colorful carved wooden balconies, artisan shops, wine cellars, and centuries of layered history. The soul of Tbilisi.",
    category: "Neighborhood",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Old+Town+Tbilisi",
    tags: ["walking", "culture", "history"],
    emoji: "🏘️",
    duration: "2–4 hours"
  },
  {
    name: "Fabrika",
    description: "A former Soviet sewing factory transformed into Tbilisi's coolest creative hub — artisan bars, international restaurants, vintage boutiques, and a lively courtyard.",
    category: "Culture",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Fabrika+Tbilisi",
    tags: ["creative", "bars", "hipster"],
    emoji: "🏭",
    duration: "2–3 hours"
  },
  {
    name: "Mtatsminda Park",
    description: "Ride the historic funicular to Tbilisi's hilltop park for spectacular 360° city views, a Ferris wheel, and the best photography spots in the entire city.",
    category: "Scenic",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Mtatsminda+Park+Tbilisi",
    tags: ["views", "funicular", "scenic"],
    emoji: "🎡",
    duration: "2–3 hours"
  },
  {
    name: "National Museum of Georgia",
    description: "Explore 3 million years of history — from prehistoric humans to the legendary Golden Fleece collection and a sobering Soviet occupation gallery.",
    category: "Museum",
    mapLink: "https://www.google.com/maps/search/?api=1&query=National+Museum+Georgia+Rustaveli+Tbilisi",
    tags: ["museum", "history", "culture"],
    emoji: "🏛️",
    duration: "2–3 hours"
  },
  {
    name: "Dry Bridge Market",
    description: "Tbilisi's beloved outdoor flea market — Soviet memorabilia, vintage jewelry, oil paintings, handcrafted silverware, and unusual antiques. A treasure hunter's paradise.",
    category: "Market",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Dry+Bridge+Market+Tbilisi",
    tags: ["market", "souvenirs", "antiques"],
    emoji: "🛒",
    duration: "1–2 hours"
  }
];

const tipsData = [
  {
    emoji: "🚕",
    title: "Getting Around",
    content: "Use <a href='https://bolt.eu' target='_blank'>Bolt</a> or <a href='https://yango.com' target='_blank'>Yango</a> for cheap, reliable rides. The metro covers key areas (₾0.50/ride). Central Tbilisi is very walkable — Old Town to the Bridge of Peace is 10 min on foot."
  },
  {
    emoji: "💰",
    title: "Currency",
    content: "The currency is the Georgian Lari (GEL). Cards are accepted at most restaurants and shops. ATMs are widely available. Avoid exchanging money at the airport — rates in the city center are much better."
  },
  {
    emoji: "🌐",
    title: "Language",
    content: "Georgian (ქართული) is the official language. English is widely spoken in restaurants and hotels in central Tbilisi. Google Translate with camera mode works great for menus and signs."
  },
  {
    emoji: "🍷",
    title: "Georgian Wine",
    content: "Georgia invented wine 8,000 years ago. Try amber (orange) wines made in traditional clay vessels called <strong>qvevri</strong>. Must-try varieties: <strong>Rkatsiteli</strong> (white), <strong>Saperavi</strong> (red), <strong>Mtsvane</strong> (crisp white)."
  },
  {
    emoji: "🥐",
    title: "Must-Try Foods",
    content: "<strong>Khinkali</strong> — juicy soup dumplings (twist off the top, eat from the bottom). <strong>Khachapuri Adjarian</strong> — boat-shaped cheese bread with egg. <strong>Churchkhela</strong> — walnut candy. <strong>Mtsvadi</strong> — Georgian BBQ skewers."
  },
  {
    emoji: "📱",
    title: "Connectivity",
    content: "WiFi is fast and free in almost every café and restaurant. Local SIM cards are cheap at the airport (Magti or Geocell). Excellent LTE coverage across the entire city."
  },
  {
    emoji: "🌡️",
    title: "Weather",
    content: "Tbilisi has hot summers (28–36°C) and cool winters. Best seasons: <strong>spring (April–June)</strong> and <strong>autumn (September–November)</strong> — warm, clear days."
  },
  {
    emoji: "🏨",
    title: "Best Neighborhoods",
    content: "<strong>Old Town</strong> — maximum atmosphere. <strong>Vera</strong> — quiet, bohemian. <strong>Vake</strong> — leafy and upscale. All are within 15–20 min of the main attractions."
  }
];

// ========================================================
//  RENDER FUNCTIONS
// ========================================================

const mealLabels = {
  breakfast: "🌅 Breakfast",
  lunch: "☀️ Lunch",
  dinner: "🌙 Dinner"
};

function renderFoodCards(filter = "all") {
  const container = document.getElementById("food-cards");
  container.innerHTML = "";

  foodData.forEach(place => {
    const visible = filter === "all" || place.meals.includes(filter);
    if (!visible) return;

    const mealTagsHTML = place.meals
      .map(m => `<span class="meal-tag">${mealLabels[m]}</span>`)
      .join("");

    const tagsHTML = place.tags
      .map(t => `<span class="tag">${t}</span>`)
      .join("");

    const woltBtnHTML = place.woltLink
      ? `<a href="${place.woltLink}" target="_blank" rel="noopener noreferrer" class="wolt-btn">
           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <circle cx="12" cy="12" r="12" fill="white" fill-opacity="0.25"/>
             <text x="12" y="16.5" text-anchor="middle" font-size="13" font-weight="800" fill="white" font-family="Inter,sans-serif">W</text>
           </svg>
           Order on Wolt
         </a>`
      : "";

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card-emoji-header">
        <div class="card-emoji">${place.emoji}</div>
        <div class="card-meta">
          <div class="card-name">${place.name}</div>
          <div class="card-cuisine">${place.cuisine}</div>
        </div>
      </div>
      <div class="card-body">
        <p class="card-description">${place.description}</p>
        <div class="meal-tags">${mealTagsHTML}</div>
        <div class="card-tags">${tagsHTML}</div>
      </div>
      <div class="card-footer">
        <div class="card-actions">
          ${woltBtnHTML}
          <a href="${place.mapLink}" target="_blank" rel="noopener noreferrer" class="map-btn ${place.woltLink ? 'map-btn--secondary' : ''}">
            📍 Map
          </a>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderSightseeingCards() {
  const container = document.getElementById("sight-cards");
  container.innerHTML = "";

  sightseeingData.forEach(place => {
    const tagsHTML = place.tags
      .map(t => `<span class="tag">${t}</span>`)
      .join("");

    const card = document.createElement("div");
    card.className = "card sight-card";
    card.innerHTML = `
      <div class="card-emoji-header">
        <div class="card-emoji">${place.emoji}</div>
        <div class="card-meta">
          <div class="card-name">${place.name}</div>
          <div class="card-cuisine">${place.category}</div>
        </div>
      </div>
      <div class="card-body">
        <p class="card-description">${place.description}</p>
        <div class="meal-tags">
          <span class="meal-tag">⏱ ${place.duration}</span>
        </div>
        <div class="card-tags">${tagsHTML}</div>
      </div>
      <div class="card-footer">
        <div class="card-actions">
          <a href="${place.mapLink}" target="_blank" rel="noopener noreferrer" class="map-btn map-btn--full">
            📍 View on Map
          </a>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderTips() {
  const container = document.getElementById("tips-content");
  container.innerHTML = "";

  tipsData.forEach(tip => {
    const card = document.createElement("div");
    card.className = "tip-card";
    card.innerHTML = `
      <span class="tip-icon">${tip.emoji}</span>
      <div class="tip-title">${tip.title}</div>
      <div class="tip-content">${tip.content}</div>
    `;
    container.appendChild(card);
  });
}

// ========================================================
//  EVENT HANDLERS
// ========================================================

document.querySelectorAll(".nav-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
    document.getElementById(btn.dataset.section).classList.add("active");
  });
});

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderFoodCards(btn.dataset.filter);
  });
});

// ========================================================
//  INIT
// ========================================================
renderFoodCards("all");
renderSightseeingCards();
renderTips();
