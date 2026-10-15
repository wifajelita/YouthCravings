# YouthCravings Landing Page

Landing page modern minimalis untuk brand snack Gen Z **YouthCravings**.

## Fitur Lengkap

1. **Dark Mode** — toggle di navbar (tersimpan di localStorage)
2. **Filter Produk** — Semua / Sehat / Pedas / Best Seller / Baru
3. **Wishlist** — tombol ❤️ di tiap produk + sidebar
4. **Promo Banner** — flash sale dengan countdown, bisa di-close
5. **Testimoni Slider** — carousel review customer
6. **Quiz "Snack Mana yang Cocok?"** — 4 pertanyaan → rekomendasi produk
7. **Countdown Flash Sale** — timer real-time di banner
8. **Share** — Instagram / TikTok / WhatsApp / Copy caption
9. **Stok Terbatas** — badge merah "Sisa X" jika stok ≤ 5
10. **Smooth Animations** — fade-in on scroll, card transitions
11. **PWA** — bisa di-install ke homescreen (manifest + service worker)
12. **Order Tracking** — coba nomor: YC-1001, YC-1002, YC-1003

Plus fitur sebelumnya:
- Multi-bahasa ID/EN
- Keranjang + checkout WhatsApp
- Floating WhatsApp (pesan kendala)
- Auto-scroll on/off
- Background music toggle
- Responsive penuh

## Font

- Body: **Verdana**
- Logo "Youth": **Yunyun** (taruh `Yunyun.otf`/`Yunyun.ttf` di `fonts/`) — fallback Fredoka
- Logo "Cravings": **Euphoria Script** (Google Fonts)

## Struktur

```
├── index.html
├── style.css
├── script.js
├── manifest.json      ← PWA
├── sw.js              ← Service Worker
├── audio/
│   └── bg-music.mp3   ← taruh MP3 di sini
├── fonts/
│   └── Yunyun.otf     ← optional
├── icons/
│   ├── icon-192.png   ← buat icon 192x192
│   └── icon-512.png   ← buat icon 512x512
└── README.md
```

## Deploy GitHub Pages

1. Upload semua file ke root repo
2. Settings → Pages → branch `main` / root
3. Website hidup di `https://username.github.io/repo-name`

## Nomor WhatsApp

**0813-1093-7825**

- Floating button → pesan kendala
- Checkout keranjang → daftar order + total otomatis

## Demo Order Tracking

- `YC-1001` → Dalam pengiriman
- `YC-1002` → Sedang dikemas
- `YC-1003` → Dalam pengiriman (step 2)
