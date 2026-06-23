const whatsappMessage = encodeURIComponent(
  'Halo Saung Berkah Waras, saya mau pesan.'
);

export const siteData = {
  name: 'Saung Berkah Waras',
  badge: 'Buka setiap hari di Gombong, Kebumen',
  headline: 'Makan Nikmat, Harga Ramah',
  description:
    'Kuliner lengkap dengan suasana saung yang hangat dan nyaman. Dari soto, bakso, aneka nasi, hingga minuman segar, semua ada di sini.',
  whatsappNumber: '6283142927758',
  whatsappHref: `https://wa.me/6283142927758?text=${whatsappMessage}`,
  gofoodHref: 'https://gofood.link/a/TK3VDnS',
  grabfoodHref: null,
  mapsHref: 'https://www.google.com/maps?q=-7.621070,109.510895',
  embedMapsHref:
    'https://www.google.com/maps?q=-7.621070,109.510895&z=17&output=embed',
  address: [
    'Jl. Lkr. Selatan Gombong',
    'Karangjati, Kalitengah, Kec. Gombong',
    'Kabupaten Kebumen, Jawa Tengah 54416',
  ],
  hours: 'Setiap hari, 09.00 - 21.00 WIB',
  logo: '/images/brand/logo.jpeg',
  navigation: [
    { href: '#tentang', label: 'Tentang' },
    { href: '#unggulan', label: 'Unggulan' },
    { href: '#menu', label: 'Menu' },
    { href: '#pesan', label: 'Pesan' },
    { href: '#lokasi', label: 'Lokasi' },
    { href: '#kontak', label: 'Kontak' },
  ],
  metrics: [
    { value: '09.00 - 21.00', label: 'Jam buka harian' },
    { value: 'GoFood aktif', label: 'Order online siap' },
    { value: 'WhatsApp', label: 'Chat langsung admin' },
  ],
  reasons: [
    {
      title: 'Menu favorit harian',
      body: 'Mulai dari paket ayam, nila, lele, bakso beranak, bakso urat, sampai soto ayam.',
    },
    {
      title: 'Suasana makan yang santai',
      body: 'Cocok untuk makan bersama keluarga, teman kerja, atau mampir cepat saat jam makan.',
    },
    {
      title: 'Harga ramah dan mudah dipesan',
      body: 'Bisa datang langsung, chat WhatsApp, atau pesan lewat GoFood tanpa ribet.',
    },
    {
      title: 'Lokasi mudah ditemukan',
      body: 'Berada di area Gombong dengan akses Google Maps yang siap dipakai untuk arah langsung.',
    },
  ],
  featuredItems: [
    {
      title: 'Paket Ayam (Goreng/Bakar)',
      note: 'Lauk gurih, nasi hangat, sambal, dan lalapan.',
      image: '/images/menu/paket-ayam.jpeg',
      accent: 'Best seller',
      priceNormal: 13000,
      priceGoFood: 16500,
    },
    {
      title: 'Paket Nila (Goreng/Bakar)',
      note: 'Pilihan ikan favorit untuk makan siang yang mantap.',
      image: '/images/menu/paket-nila.jpeg',
      accent: 'Menu favorit',
      priceNormal: 30500,
      priceGoFood: 38000,
    },
    {
      title: 'Paket Lele (Goreng/Bakar)',
      note: 'Lele goreng dengan sambal pedas dan pelengkap lengkap.',
      image: '/images/menu/paket-lele.jpeg',
      accent: 'Siap dipesan',
      priceNormal: 13000,
      priceGoFood: 16500,
    },
    {
      title: 'Bakso Beranak',
      note: 'Porsi unik untuk yang suka sensasi bakso lebih puas.',
      image: '/images/menu/bakso-beranak.jpeg',
      accent: 'Andalan bakso',
      priceNormal: 14000,
      priceGoFood: 17500,
    },
    {
      title: 'Bakso Urat',
      note: 'Kuah hangat dengan tekstur bakso yang lebih berisi.',
      image: '/images/menu/bakso-urat.jpeg',
      accent: 'Kuah gurih',
      priceNormal: 13000,
      priceGoFood: 16500,
    },
    {
      title: 'Soto Ayam',
      note: 'Pilihan hangat yang ringan, gurih, dan cocok kapan saja.',
      image: '/images/menu/soto-ayam.jpeg',
      accent: 'Comfort food',
      priceNormal: 12000,
      priceGoFood: 15000,
    },
  ],
  galleryItems: [
    {
      title: 'Paket ayam siap santap',
      image: '/images/menu/paket-ayam.jpeg',
    },
    {
      title: 'Bakso urat kuah hangat',
      image: '/images/menu/bakso-urat.jpeg',
    },
    {
      title: 'Paket lele favorit',
      image: '/images/menu/paket-lele.jpeg',
    },
    {
      title: 'Soto ayam gurih',
      image: '/images/menu/soto-ayam.jpeg',
    },
    {
      title: 'Jus alpukat segar',
      image: '/images/menu/jus-alpukat.jpeg',
    },
    {
      title: 'Es jeruk dingin',
      image: '/images/menu/es-jeruk.jpeg',
    },
  ],
  orderChannels: [
    {
      name: 'WhatsApp',
      badge: 'Paling cepat',
      description:
        'Chat langsung untuk tanya menu, pesan, atau minta arahan lokasi.',
      href: `https://wa.me/6283142927758?text=${whatsappMessage}`,
      tone: 'whatsapp',
      logo: '/images/brands/whatsapp.png',
    },
    {
      name: 'GoFood',
      badge: 'Online order',
      description: 'Pesan dari aplikasi GoFood untuk pengiriman yang praktis.',
      href: 'https://gofood.link/a/TK3VDnS',
      tone: 'gofood',
      logo: '/images/brands/gofood.png',
    },
    {
      name: 'GrabFood',
      badge: 'Segera hadir',
      description:
        'Link GrabFood belum tersedia. Untuk sementara, pesan lewat WhatsApp atau GoFood.',
      href: null,
      tone: 'disabled',
      logo: '/images/brands/grabfood.svg',
    },
  ],
};
