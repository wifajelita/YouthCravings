/* ===== YouthCravings - Full Features Script ===== */

const products = [
  {
    id: 1,
    name: { id: "Seaweed Crunch", en: "Seaweed Crunch" },
    desc: { id: "Keripik rumput laut renyah, rendah kalori & kaya mineral.", en: "Crispy seaweed chips, low calorie & mineral rich." },
    price: 18000,
    emoji: "🌿",
    badge: { id: "Best Seller", en: "Best Seller" },
    tags: ["sehat", "best"],
    stock: 8
  },
  {
    id: 2,
    name: { id: "Berry Bites", en: "Berry Bites" },
    desc: { id: "Camilan buah berry kering alami, manis natural.", en: "Natural dried berry snacks, naturally sweet." },
    price: 22000,
    emoji: "🍓",
    badge: { id: "Sehat", en: "Healthy" },
    tags: ["sehat"],
    stock: 15
  },
  {
    id: 3,
    name: { id: "Cheese Puff Light", en: "Cheese Puff Light" },
    desc: { id: "Puff keju ringan, renyah & bikin nagih.", en: "Light cheese puffs, crispy & addictive." },
    price: 15000,
    emoji: "🧀",
    badge: null,
    tags: [],
    stock: 20
  },
  {
    id: 4,
    name: { id: "Matcha Crunch", en: "Matcha Crunch" },
    desc: { id: "Snack matcha premium, pahit manis seimbang.", en: "Premium matcha snack, balanced bitter-sweet." },
    price: 25000,
    emoji: "🍵",
    badge: { id: "Baru", en: "New" },
    tags: ["baru", "sehat"],
    stock: 5
  },
  {
    id: 5,
    name: { id: "Cornflake Yogurt", en: "Cornflake Yogurt" },
    desc: { id: "Cornflake renyah dengan coating yogurt asam manis.", en: "Crispy cornflakes with sweet-sour yogurt coating." },
    price: 20000,
    emoji: "🥣",
    badge: null,
    tags: ["sehat"],
    stock: 12
  },
  {
    id: 6,
    name: { id: "Spicy Edamame", en: "Spicy Edamame" },
    desc: { id: "Edamame panggang pedas, protein tinggi.", en: "Roasted spicy edamame, high protein." },
    price: 19000,
    emoji: "🌶️",
    badge: { id: "Pedas", en: "Spicy" },
    tags: ["pedas", "sehat"],
    stock: 3
  }
];

const reviews = [
  { stars: 5, text: { id: "Seaweed Crunch-nya beneran bikin nagih tapi nggak berat di perut! Packaging-nya juga aesthetic banget 😍", en: "Seaweed Crunch is so addictive but light on the stomach! Packaging is super aesthetic 😍" }, author: "Alya R.", role: "College Student" },
  { stars: 5, text: { id: "Matcha Crunch favorit banget! Rasanya pas, nggak terlalu pahit. Recommended buat yang suka matcha 🍵", en: "Matcha Crunch is my favorite! Perfect balance, not too bitter. Recommended for matcha lovers 🍵" }, author: "Dimas K.", role: "Content Creator" },
  { stars: 4, text: { id: "Berry Bites enak & seger. Cocok buat teman nonton Netflix. Shipping juga cepet!", en: "Berry Bites are tasty & refreshing. Perfect for Netflix nights. Fast shipping too!" }, author: "Sinta M.", role: "Gen Z" },
  { stars: 5, text: { id: "Spicy Edamame pedasnya pas banget! Protein tinggi, cocok buat yang lagi diet tapi tetap mau ngemil 🔥", en: "Spicy Edamame has the perfect heat! High protein, great for dieting while still snacking 🔥" }, author: "Rafi A.", role: "Fitness Enthusiast" }
];

const quizQuestions = [
  {
    q: { id: "Mood kamu hari ini kayak apa?", en: "What's your mood today?" },
    opts: [
      { text: { id: "😊 Happy & energetic", en: "😊 Happy & energetic" }, scores: { 1: 2, 3: 1, 5: 1 } },
      { text: { id: "😌 Chill & santai", en: "😌 Chill & relaxed" }, scores: { 2: 2, 4: 1, 5: 1 } },
      { text: { id: "🔥 Butuh tantangan", en: "🔥 Need a challenge" }, scores: { 6: 3, 4: 1 } },
      { text: { id: "😴 Lagi lelah", en: "😴 Feeling tired" }, scores: { 2: 2, 5: 2, 1: 1 } }
    ]
  },
  {
    q: { id: "Pilih rasa favoritmu!", en: "Pick your favorite flavor!" },
    opts: [
      { text: { id: "🌊 Laut / gurih", en: "🌊 Savory / umami" }, scores: { 1: 3, 3: 2 } },
      { text: { id: "🍓 Manis buah", en: "🍓 Fruity sweet" }, scores: { 2: 3, 5: 1 } },
      { text: { id: "🍵 Matcha / pahit manis", en: "🍵 Matcha / bittersweet" }, scores: { 4: 3 } },
      { text: { id: "🌶️ Pedas!", en: "🌶️ Spicy!" }, scores: { 6: 3 } }
    ]
  },
  {
    q: { id: "Kamu lagi ngapain biasanya pas ngemil?", en: "What do you usually do while snacking?" },
    opts: [
      { text: { id: "📚 Study / kerja", en: "📚 Studying / working" }, scores: { 1: 2, 4: 2, 5: 1 } },
      { text: { id: "🎬 Nonton series", en: "🎬 Watching series" }, scores: { 2: 2, 3: 2, 5: 1 } },
      { text: { id: "💪 Habis olahraga", en: "💪 After workout" }, scores: { 6: 2, 1: 2 } },
      { text: { id: "🎉 Hangout bareng temen", en: "🎉 Hanging out with friends" }, scores: { 3: 2, 6: 1, 5: 1 } }
    ]
  },
  {
    q: { id: "Seberapa peduli sama kalori?", en: "How much do you care about calories?" },
    opts: [
      { text: { id: "Sangat peduli 🥗", en: "Very much 🥗" }, scores: { 1: 2, 2: 2, 6: 2 } },
      { text: { id: "Sedikit peduli", en: "A little" }, scores: { 4: 2, 5: 2, 1: 1 } },
      { text: { id: "Nggak terlalu 🤷‍♀️", en: "Not really 🤷‍♀️" }, scores: { 3: 3, 5: 1 } }
    ]
  }
];

const trackOrders = {
  "YC-1001": { status: 3, steps: ["Pesanan diterima", "Sedang dikemas", "Dalam pengiriman", "Terkirim"] },
  "YC-1002": { status: 1, steps: ["Pesanan diterima", "Sedang dikemas", "Dalam pengiriman", "Terkirim"] },
  "YC-1003": { status: 2, steps: ["Pesanan diterima", "Sedang dikemas", "Dalam pengiriman", "Terkirim"] }
};

const translations = {
  id: {
    nav_home: "Beranda", nav_about: "Tentang", nav_products: "Produk", nav_quiz: "Quiz",
    nav_reviews: "Review", nav_track: "Lacak", nav_order: "Pesan",
    hero_badge: "✨ Snack Sehat Gen Z",
    hero_title: "Cemilan Ringan yang <span>Bikin Happy</span> & Sehat",
    hero_desc: "YouthCravings hadir dengan snack kreatif, rendah kalori, dan penuh rasa. Cocok buat yang suka ngemil tapi tetap peduli kesehatan.",
    hero_cta: "Lihat Produk", hero_quiz: "Coba Quiz",
    about_tag: "Tentang Kami",
    about_title: "Snack yang Bikin Kamu <span>Craving</span> Tanpa Rasa Bersalah",
    about_desc: "Kami percaya ngemil itu hak setiap Gen Z. Makanya YouthCravings bikin cemilan ringan yang enak, kreatif, dan tetap sehat.",
    about_1_title: "Bahan Natural", about_1_desc: "Tanpa pengawet berlebih. Dipilih dari bahan berkualitas.",
    about_2_title: "Rasa Kekinian", about_2_desc: "Flavor yang sedang hits di kalangan Gen Z.",
    about_3_title: "Low Guilt", about_3_desc: "Ringan di perut, tapi tetap memuaskan craving.",
    products_tag: "Produk Kami", products_title: "Pilih Snack Favoritmu",
    products_desc: "Semua produk fresh, ready to ship, dan siap bikin harimu lebih ceria.",
    filter_all: "Semua", filter_healthy: "Sehat", filter_spicy: "Pedas", filter_best: "Best Seller", filter_new: "Baru",
    quiz_tag: "Fun Quiz", quiz_title: "Snack Mana yang Cocok Buatmu?",
    quiz_desc: "Jawab 4 pertanyaan singkat, kami rekomendasikan snack perfect buat mood-mu!",
    why_tag: "Kenapa YouthCravings?", why_title: "Lebih dari Sekadar Snack",
    why_1_title: "Pengiriman Cepat", why_1_desc: "Order hari ini, bisa sampai besok (area tertentu).",
    why_2_title: "Higienis & Aman", why_2_desc: "Dikemas rapi dan aman untuk dikonsumsi.",
    why_3_title: "Review Positif", why_3_desc: "Sudah dicoba ratusan Gen Z dan mereka suka!",
    why_4_title: "Kemasan Aesthetic", why_4_desc: "Cocok buat foto & share di social media.",
    reviews_tag: "Testimoni", reviews_title: "Apa Kata Mereka?",
    track_tag: "Lacak Pesanan", track_title: "Cek Status Orderanmu",
    track_desc: "Masukkan nomor order (contoh: YC-1001, YC-1002, YC-1003)",
    track_btn: "Lacak", track_not_found: "Nomor order tidak ditemukan 😅",
    order_title: "Siap Order Sekarang?",
    order_desc: "Pilih snack favoritmu, masukkan ke keranjang, lalu chat kami via WhatsApp. Proses cepat & mudah!",
    order_browse: "Pilih Produk", order_wa: "Chat WhatsApp",
    footer_tagline: "Snack sehat & kreatif buat Gen Z yang suka ngemil tanpa rasa bersalah.",
    footer_nav: "Navigasi", footer_contact: "Hubungi Kami",
    footer_hours: "Senin - Minggu: 09.00 - 21.00", footer_rights: "All rights reserved.",
    cart_title: "Keranjang", cart_total: "Total", cart_checkout: "Checkout via WhatsApp",
    cart_clear: "Kosongkan", cart_empty: "Keranjang masih kosong nih 🥺",
    wish_title: "Wishlist", wish_empty: "Wishlist masih kosong 💔",
    share_title: "Share Snack Ini", share_copy: "Copy Caption",
    promo_text: "Diskon 20% semua snack! Berakhir dalam",
    tooltip_scroll: "Auto Scroll", tooltip_music: "Musik",
    added: "Ditambahkan ke keranjang!", cleared: "Keranjang dikosongkan",
    checkout_empty: "Keranjang masih kosong!", wish_added: "Ditambah ke wishlist ❤️",
    wish_removed: "Dihapus dari wishlist", copied: "Caption disalin!",
    stock_left: "Sisa", restart_quiz: "Ulangi Quiz", add_rec: "Tambah ke Keranjang"
  },
  en: {
    nav_home: "Home", nav_about: "About", nav_products: "Products", nav_quiz: "Quiz",
    nav_reviews: "Reviews", nav_track: "Track", nav_order: "Order",
    hero_badge: "✨ Gen Z Healthy Snacks",
    hero_title: "Light Snacks that Make You <span>Happy</span> & Healthy",
    hero_desc: "YouthCravings offers creative, low-calorie snacks packed with flavor. Perfect for those who love snacking but care about health.",
    hero_cta: "View Products", hero_quiz: "Try Quiz",
    about_tag: "About Us",
    about_title: "Snacks that Satisfy Your <span>Cravings</span> Guilt-Free",
    about_desc: "We believe snacking is every Gen Z's right. That's why YouthCravings makes light snacks that are tasty, creative, and still healthy.",
    about_1_title: "Natural Ingredients", about_1_desc: "No excessive preservatives. Selected from quality ingredients.",
    about_2_title: "Trendy Flavors", about_2_desc: "Flavors that are currently trending among Gen Z.",
    about_3_title: "Low Guilt", about_3_desc: "Light on the stomach, but still satisfies your cravings.",
    products_tag: "Our Products", products_title: "Pick Your Favorite Snack",
    products_desc: "All products are fresh, ready to ship, and ready to brighten your day.",
    filter_all: "All", filter_healthy: "Healthy", filter_spicy: "Spicy", filter_best: "Best Seller", filter_new: "New",
    quiz_tag: "Fun Quiz", quiz_title: "Which Snack Suits You?",
    quiz_desc: "Answer 4 short questions and we'll recommend the perfect snack for your mood!",
    why_tag: "Why YouthCravings?", why_title: "More Than Just Snacks",
    why_1_title: "Fast Delivery", why_1_desc: "Order today, arrive tomorrow (selected areas).",
    why_2_title: "Hygienic & Safe", why_2_desc: "Neatly packed and safe for consumption.",
    why_3_title: "Positive Reviews", why_3_desc: "Tried by hundreds of Gen Z and they love it!",
    why_4_title: "Aesthetic Packaging", why_4_desc: "Perfect for photos & sharing on social media.",
    reviews_tag: "Testimonials", reviews_title: "What They Say?",
    track_tag: "Track Order", track_title: "Check Your Order Status",
    track_desc: "Enter order number (e.g. YC-1001, YC-1002, YC-1003)",
    track_btn: "Track", track_not_found: "Order number not found 😅",
    order_title: "Ready to Order Now?",
    order_desc: "Pick your favorite snacks, add to cart, then chat us via WhatsApp. Fast & easy!",
    order_browse: "Browse Products", order_wa: "Chat WhatsApp",
    footer_tagline: "Healthy & creative snacks for Gen Z who love snacking guilt-free.",
    footer_nav: "Navigation", footer_contact: "Contact Us",
    footer_hours: "Mon - Sun: 09.00 - 21.00", footer_rights: "All rights reserved.",
    cart_title: "Cart", cart_total: "Total", cart_checkout: "Checkout via WhatsApp",
    cart_clear: "Clear Cart", cart_empty: "Your cart is empty 🥺",
    wish_title: "Wishlist", wish_empty: "Wishlist is empty 💔",
    share_title: "Share This Snack", share_copy: "Copy Caption",
    promo_text: "20% off all snacks! Ends in",
    tooltip_scroll: "Auto Scroll", tooltip_music: "Music",
    added: "Added to cart!", cleared: "Cart cleared",
    checkout_empty: "Cart is still empty!", wish_added: "Added to wishlist ❤️",
    wish_removed: "Removed from wishlist", copied: "Caption copied!",
    stock_left: "Left", restart_quiz: "Restart Quiz", add_rec: "Add to Cart"
  }
};

/* ===== State ===== */
let currentLang = localStorage.getItem("yc_lang") || "id";
let cart = JSON.parse(localStorage.getItem("yc_cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("yc_wish")) || [];
let autoScrollActive = false;
let autoScrollInterval = null;
let musicPlaying = false;
let currentFilter = "all";
let reviewIndex = 0;
let quizStep = 0;
let quizScores = {};
let shareProductId = null;

/* ===== Init ===== */
document.addEventListener("DOMContentLoaded", () => {
  // Dark mode
  if (localStorage.getItem("yc_dark") === "1") {
    document.documentElement.setAttribute("data-theme", "dark");
    document.getElementById("darkModeToggle").innerHTML = '<i class="fas fa-sun"></i>';
  }

  // Promo banner
  if (!sessionStorage.getItem("yc_promo_closed")) {
    document.body.classList.add("has-promo");
  } else {
    document.getElementById("promoBanner").classList.add("hidden");
  }

  applyLang();
  renderProducts();
  updateCartUI();
  updateWishUI();
  renderReviews();
  startCountdown();
  setupEventListeners();
  setupNavbarScroll();
  setupFadeIn();
  attemptAutoPlay();
  showQuizQuestion();
});

/* ===== Products ===== */
function renderProducts() {
  const grid = document.getElementById("productsGrid");
  const filtered = currentFilter === "all"
    ? products
    : products.filter(p => p.tags.includes(currentFilter));

  grid.innerHTML = filtered.map(p => {
    const liked = wishlist.includes(p.id);
    const lowStock = p.stock <= 5;
    return `
    <div class="product-card" data-id="${p.id}">
      <div class="product-img">
        ${p.badge ? `<span class="product-badge">${p.badge[currentLang]}</span>` : ""}
        ${lowStock ? `<span class="product-stock">${translations[currentLang].stock_left} ${p.stock}</span>` : ""}
        <span>${p.emoji}</span>
        <div class="product-actions-top">
          <button class="prod-icon-btn ${liked ? "liked" : ""}" onclick="toggleWish(${p.id})" title="Wishlist">
            <i class="fas fa-heart"></i>
          </button>
          <button class="prod-icon-btn" onclick="openShare(${p.id})" title="Share">
            <i class="fas fa-share-nodes"></i>
          </button>
        </div>
      </div>
      <div class="product-body">
        <h3>${p.name[currentLang]}</h3>
        <p class="desc">${p.desc[currentLang]}</p>
        <div class="product-footer">
          <span class="product-price">Rp ${formatPrice(p.price)}</span>
          <button class="add-cart-btn" onclick="addToCart(${p.id})" title="Add to cart">
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </div>`;
  }).join("");
}

function setFilter(filter) {
  currentFilter = filter;
  document.querySelectorAll(".filter-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.filter === filter);
  });
  renderProducts();
}

/* ===== Cart ===== */
function addToCart(id) {
  const existing = cart.find(i => i.id === id);
  if (existing) existing.qty += 1;
  else cart.push({ id, qty: 1 });
  saveCart();
  updateCartUI();
  showToast(translations[currentLang].added);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartUI();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else { saveCart(); updateCartUI(); }
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
  showToast(translations[currentLang].cleared);
}

function saveCart() { localStorage.setItem("yc_cart", JSON.stringify(cart)); }

function updateCartUI() {
  const totalQty = cart.reduce((s, i) => s + i.qty, 0);
  const el = document.getElementById("cartCount");
  el.textContent = totalQty;
  el.style.display = totalQty > 0 ? "flex" : "none";

  const container = document.getElementById("cartItems");
  if (cart.length === 0) {
    container.innerHTML = `<div class="cart-empty"><i class="fas fa-shopping-bag"></i><p>${translations[currentLang].cart_empty}</p></div>`;
    document.getElementById("cartTotal").textContent = "Rp 0";
    return;
  }
  let total = 0;
  container.innerHTML = cart.map(item => {
    const p = products.find(pr => pr.id === item.id);
    if (!p) return "";
    const sub = p.price * item.qty;
    total += sub;
    return `<div class="cart-item">
      <div class="cart-item-emoji">${p.emoji}</div>
      <div class="cart-item-info">
        <h4>${p.name[currentLang]}</h4>
        <div class="price">Rp ${formatPrice(p.price)}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty(${item.id},-1)">−</button>
          <span>${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id},1)">+</button>
          <button class="cart-item-remove" onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i></button>
        </div>
      </div>
    </div>`;
  }).join("");
  document.getElementById("cartTotal").textContent = "Rp " + formatPrice(total);
}

function checkout() {
  if (cart.length === 0) { showToast(translations[currentLang].checkout_empty); return; }
  let msg = currentLang === "id"
    ? "Hai YouthCravings! 👋🏻💙\nAku mau order ya:\n\n"
    : "Hi YouthCravings! 👋🏻💙\nI'd like to order:\n\n";
  let total = 0;
  cart.forEach(item => {
    const p = products.find(pr => pr.id === item.id);
    if (p) {
      const sub = p.price * item.qty;
      total += sub;
      msg += `• ${p.name[currentLang]} x${item.qty} = Rp ${formatPrice(sub)}\n`;
    }
  });
  msg += `\n*Total: Rp ${formatPrice(total)}*\n\n`;
  msg += currentLang === "id" ? "Mohon konfirmasi ketersediaan & ongkir ya ✨" : "Please confirm availability & shipping ✨";
  window.open(`https://wa.me/6281310937825?text=${encodeURIComponent(msg)}`, "_blank");
}

/* ===== Wishlist ===== */
function toggleWish(id) {
  const idx = wishlist.indexOf(id);
  if (idx >= 0) {
    wishlist.splice(idx, 1);
    showToast(translations[currentLang].wish_removed);
  } else {
    wishlist.push(id);
    showToast(translations[currentLang].wish_added);
  }
  localStorage.setItem("yc_wish", JSON.stringify(wishlist));
  updateWishUI();
  renderProducts();
}

function updateWishUI() {
  const el = document.getElementById("wishCount");
  el.textContent = wishlist.length;
  el.style.display = wishlist.length > 0 ? "flex" : "none";

  const container = document.getElementById("wishItems");
  if (wishlist.length === 0) {
    container.innerHTML = `<div class="cart-empty"><i class="fas fa-heart"></i><p>${translations[currentLang].wish_empty}</p></div>`;
    return;
  }
  container.innerHTML = wishlist.map(id => {
    const p = products.find(pr => pr.id === id);
    if (!p) return "";
    return `<div class="cart-item">
      <div class="cart-item-emoji">${p.emoji}</div>
      <div class="cart-item-info">
        <h4>${p.name[currentLang]}</h4>
        <div class="price">Rp ${formatPrice(p.price)}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="addToCart(${p.id});showToast(translations[currentLang].added)" title="Add to cart"><i class="fas fa-plus"></i></button>
          <button class="cart-item-remove" onclick="toggleWish(${p.id})"><i class="fas fa-trash"></i></button>
        </div>
      </div>
    </div>`;
  }).join("");
}

/* ===== Share ===== */
function openShare(id) {
  shareProductId = id;
  const p = products.find(pr => pr.id === id);
  document.getElementById("shareProductName").textContent = p.emoji + " " + p.name[currentLang];
  const caption = currentLang === "id"
    ? `Cobain ${p.name.id} dari YouthCravings! ${p.emoji}\n${p.desc.id}\nHarga cuma Rp ${formatPrice(p.price)} 💙\n#YouthCravings #SnackSehat`
    : `Try ${p.name.en} from YouthCravings! ${p.emoji}\n${p.desc.en}\nOnly Rp ${formatPrice(p.price)} 💙\n#YouthCravings #HealthySnacks`;
  const encoded = encodeURIComponent(caption);
  document.getElementById("shareWA").href = `https://wa.me/?text=${encoded}`;
  document.getElementById("shareIG").href = `https://www.instagram.com/`;
  document.getElementById("shareTT").href = `https://www.tiktok.com/`;
  document.getElementById("shareModal").classList.add("active");
  document.getElementById("shareCopy").onclick = () => {
    navigator.clipboard.writeText(caption).then(() => showToast(translations[currentLang].copied));
  };
}

/* ===== Quiz ===== */
function showQuizQuestion() {
  const content = document.getElementById("quizContent");
  const progress = document.getElementById("quizProgress");
  progress.style.width = ((quizStep / quizQuestions.length) * 100) + "%";

  if (quizStep >= quizQuestions.length) {
    showQuizResult();
    return;
  }
  const q = quizQuestions[quizStep];
  content.innerHTML = `
    <div class="quiz-question">${q.q[currentLang]}</div>
    <div class="quiz-options">
      ${q.opts.map((o, i) => `<button class="quiz-opt" onclick="answerQuiz(${i})">${o.text[currentLang]}</button>`).join("")}
    </div>`;
}

function answerQuiz(optIdx) {
  const scores = quizQuestions[quizStep].opts[optIdx].scores;
  for (const [pid, s] of Object.entries(scores)) {
    quizScores[pid] = (quizScores[pid] || 0) + s;
  }
  quizStep++;
  showQuizQuestion();
}

function showQuizResult() {
  document.getElementById("quizProgress").style.width = "100%";
  let bestId = 1, bestScore = 0;
  for (const [pid, s] of Object.entries(quizScores)) {
    if (s > bestScore) { bestScore = s; bestId = parseInt(pid); }
  }
  const p = products.find(pr => pr.id === bestId);
  document.getElementById("quizContent").innerHTML = `
    <div class="quiz-result">
      <div class="result-emoji">${p.emoji}</div>
      <h3>${p.name[currentLang]}</h3>
      <p>${p.desc[currentLang]}</p>
      <p style="font-weight:700;color:var(--blue-dark)">Rp ${formatPrice(p.price)}</p>
      <button class="btn btn-primary" onclick="addToCart(${p.id})">${translations[currentLang].add_rec}</button>
      <button class="btn btn-outline" onclick="restartQuiz()">${translations[currentLang].restart_quiz}</button>
    </div>`;
}

function restartQuiz() {
  quizStep = 0;
  quizScores = {};
  showQuizQuestion();
}

/* ===== Reviews ===== */
function renderReviews() {
  const track = document.getElementById("reviewsTrack");
  const dots = document.getElementById("reviewDots");
  track.innerHTML = reviews.map(r => `
    <div class="review-card">
      <div class="review-stars">${"★".repeat(r.stars)}${"☆".repeat(5 - r.stars)}</div>
      <p class="review-text">"${r.text[currentLang]}"</p>
      <div class="review-author">${r.author} <span>· ${r.role}</span></div>
    </div>`).join("");
  dots.innerHTML = reviews.map((_, i) =>
    `<button class="review-dot ${i === 0 ? "active" : ""}" onclick="goReview(${i})"></button>`
  ).join("");
}

function goReview(idx) {
  reviewIndex = idx;
  document.getElementById("reviewsTrack").style.transform = `translateX(-${idx * 100}%)`;
  document.querySelectorAll(".review-dot").forEach((d, i) => d.classList.toggle("active", i === idx));
}

/* ===== Tracking ===== */
function trackOrder() {
  const input = document.getElementById("trackInput").value.trim().toUpperCase();
  const result = document.getElementById("trackResult");
  const order = trackOrders[input];
  if (!order) {
    result.hidden = false;
    result.innerHTML = `<p style="text-align:center;color:var(--text-light)">${translations[currentLang].track_not_found}</p>`;
    return;
  }
  const stepLabels = currentLang === "id"
    ? ["Pesanan diterima", "Sedang dikemas", "Dalam pengiriman", "Terkirim"]
    : ["Order received", "Packing", "Shipping", "Delivered"];
  result.hidden = false;
  result.innerHTML = `<div class="track-status">` +
    stepLabels.map((label, i) => {
      let cls = "";
      if (i < order.status) cls = "done";
      else if (i === order.status) cls = "active";
      const icon = i < order.status ? "✓" : (i === order.status ? "●" : (i + 1));
      return `<div class="track-step ${cls}">
        <div class="track-dot">${icon}</div>
        <div class="track-step-info"><h4>${label}</h4></div>
      </div>`;
    }).join("") + `</div>`;
}

/* ===== Countdown ===== */
function startCountdown() {
  // Flash sale ends in 6 hours from page load (demo)
  const end = Date.now() + 6 * 60 * 60 * 1000;
  setInterval(() => {
    const diff = Math.max(0, end - Date.now());
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    document.getElementById("cdHours").textContent = String(h).padStart(2, "0");
    document.getElementById("cdMins").textContent = String(m).padStart(2, "0");
    document.getElementById("cdSecs").textContent = String(s).padStart(2, "0");
  }, 1000);
}

/* ===== Language ===== */
function toggleLang() {
  currentLang = currentLang === "id" ? "en" : "id";
  localStorage.setItem("yc_lang", currentLang);
  applyLang();
}

function applyLang() {
  document.documentElement.lang = currentLang;
  document.getElementById("langLabel").textContent = currentLang === "id" ? "EN" : "ID";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[currentLang][key]) el.innerHTML = translations[currentLang][key];
  });
  renderProducts();
  updateCartUI();
  updateWishUI();
  renderReviews();
  if (quizStep < quizQuestions.length) showQuizQuestion();
  else showQuizResult();
}

/* ===== Dark Mode ===== */
function toggleDark() {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  if (isDark) {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("yc_dark", "0");
    document.getElementById("darkModeToggle").innerHTML = '<i class="fas fa-moon"></i>';
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("yc_dark", "1");
    document.getElementById("darkModeToggle").innerHTML = '<i class="fas fa-sun"></i>';
  }
}

/* ===== Auto Scroll ===== */
function toggleAutoScroll() {
  autoScrollActive = !autoScrollActive;
  document.getElementById("autoScrollBtn").classList.toggle("active", autoScrollActive);
  if (autoScrollActive) {
    const sections = ["home", "about", "products", "quiz", "why", "reviews", "track", "order"];
    let idx = 0;
    const scrollY = window.scrollY;
    sections.forEach((id, i) => {
      const el = document.getElementById(id);
      if (el && el.offsetTop - 120 <= scrollY) idx = i;
    });
    autoScrollInterval = setInterval(() => {
      idx = (idx + 1) % sections.length;
      const el = document.getElementById(sections[idx]);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 5000);
  } else {
    clearInterval(autoScrollInterval);
  }
}

/* ===== Music ===== */
function attemptAutoPlay() {
  bgMusic.volume = 0.35;
  bgMusic.play().then(() => {
    musicPlaying = true;
    document.getElementById("musicBtn").classList.add("active");
  }).catch(() => { musicPlaying = false; });
}

function toggleMusic() {
  const btn = document.getElementById("musicBtn");
  if (musicPlaying) {
    bgMusic.pause();
    musicPlaying = false;
    btn.classList.remove("active");
  } else {
    bgMusic.play().then(() => {
      musicPlaying = true;
      btn.classList.add("active");
    }).catch(() => {
      showToast(currentLang === "id" ? "Tambahkan audio/bg-music.mp3 dulu ya!" : "Please add audio/bg-music.mp3 first!");
    });
  }
}

/* ===== Helpers ===== */
function formatPrice(n) { return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); }

function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2200);
}

function setupNavbarScroll() {
  window.addEventListener("scroll", () => {
    document.querySelector(".navbar").classList.toggle("scrolled", window.scrollY > 40);
  });
}

function setupFadeIn() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
  }, { threshold: 0.12 });
  document.querySelectorAll(".fade-in").forEach(el => obs.observe(el));
}

function setupEventListeners() {
  // Cart
  document.getElementById("cartToggle").addEventListener("click", () => {
    document.getElementById("cartSidebar").classList.add("active");
    document.getElementById("cartOverlay").classList.add("active");
    document.getElementById("wishSidebar").classList.remove("active");
  });
  document.getElementById("closeCart").addEventListener("click", closeSidebars);
  document.getElementById("cartOverlay").addEventListener("click", closeSidebars);
  document.getElementById("checkoutBtn").addEventListener("click", checkout);
  document.getElementById("clearCart").addEventListener("click", clearCart);

  // Wishlist
  document.getElementById("wishlistToggle").addEventListener("click", () => {
    document.getElementById("wishSidebar").classList.add("active");
    document.getElementById("cartOverlay").classList.add("active");
    document.getElementById("cartSidebar").classList.remove("active");
  });
  document.getElementById("closeWish").addEventListener("click", closeSidebars);

  // Dark, Lang, Menu
  document.getElementById("darkModeToggle").addEventListener("click", toggleDark);
  document.getElementById("langToggle").addEventListener("click", toggleLang);
  document.getElementById("menuToggle").addEventListener("click", () => {
    document.getElementById("navLinks").classList.toggle("active");
  });
  document.querySelectorAll(".nav-links a").forEach(a => {
    a.addEventListener("click", () => document.getElementById("navLinks").classList.remove("active"));
  });

  // Filters
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => setFilter(btn.dataset.filter));
  });

  // Reviews nav
  document.getElementById("reviewPrev").addEventListener("click", () => {
    goReview((reviewIndex - 1 + reviews.length) % reviews.length);
  });
  document.getElementById("reviewNext").addEventListener("click", () => {
    goReview((reviewIndex + 1) % reviews.length);
  });

  // Track
  document.getElementById("trackBtn").addEventListener("click", trackOrder);
  document.getElementById("trackInput").addEventListener("keydown", e => {
    if (e.key === "Enter") trackOrder();
  });

  // Promo close
  document.getElementById("promoClose").addEventListener("click", () => {
    document.getElementById("promoBanner").classList.add("hidden");
    document.body.classList.remove("has-promo");
    sessionStorage.setItem("yc_promo_closed", "1");
  });

  // Share modal
  document.getElementById("shareClose").addEventListener("click", () => {
    document.getElementById("shareModal").classList.remove("active");
  });
  document.getElementById("shareModal").addEventListener("click", e => {
    if (e.target === e.currentTarget) e.currentTarget.classList.remove("active");
  });

  // Float
  document.getElementById("autoScrollBtn").addEventListener("click", toggleAutoScroll);
  document.getElementById("musicBtn").addEventListener("click", toggleMusic);
}

function closeSidebars() {
  document.getElementById("cartSidebar").classList.remove("active");
  document.getElementById("wishSidebar").classList.remove("active");
  document.getElementById("cartOverlay").classList.remove("active");
}

// Expose
window.addToCart = addToCart;
window.changeQty = changeQty;
window.removeFromCart = removeFromCart;
window.toggleWish = toggleWish;
window.openShare = openShare;
window.answerQuiz = answerQuiz;
window.restartQuiz = restartQuiz;
window.goReview = goReview;
