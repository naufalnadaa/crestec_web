Cara nyalakan server frontend Next JS :
1. ketik npm run dev di terminal
2. buka di browser localhost:3000

Struktur Komponen Next JS :
- Halaman (views) disimpan di folder pages
  - setiap kali buat folder baru maka akan otomatis bikin routing
  - cth : buat folder login -> maka localhost:3000/login otomatis dibuat
- Navbar, Carousel, dll ada di folder /src/components/{disini letak filenya}
  - Component itu dibuat terpisah agar bisa dipakai dimanapun dan hemat ngoding
  - Cara panggil komponen : panggil Navbar.js -> <Navbar/>
  - Biasanya components harus di import dulu di paling atas otomatis juga bisa
- CSS disimpan di /styles/globals.css
- Semua gambar disimpan di /src/assets/images/{disini file gambar}
  - cara panggil gambar harus di export dulu di file /src/assets/index.js

Notes :
1. Nanti fitur login melalui backend
2. Backend menggunakan express JS