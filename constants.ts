import { PricingTier, Testimonial, FaqItem, ScienceJournal, CompanyInfo, ShippingInfo, PaymentOptions } from './types';

export const CONTACT_INFO = {
  whatsapp: "+6287871323231",
  whatsappDisplay: "+62 878-7132-3231",
  email: "hanseinplaza@gmail.com",
  whatsappLink: "https://wa.me/6287871323231?text=Halo%20saya%20tertarik%20dengan%20Habbatussauda%20SR12"
};

export const CERTIFICATIONS = {
  bpom: "TR223037121",
  halal: "ID00410015572271123"
};

export const PRICING_TIERS: PricingTier[] = [
  {
    id: '1',
    name: 'Paket Hemat (1 Botol)',
    price: 92500,
    features: ['60 Kapsul Softgel', 'Cukup untuk 1 bulan', 'Konsultasi Gratis'],
    isPopular: false,
  },
  {
    id: '2',
    name: 'Paket Sehat (2 Botol)',
    price: 177000,
    originalPrice: 180000,
    savings: 3000,
    features: ['120 Kapsul Softgel', 'Stok 2 bulan', 'Hemat Rp 3.000', 'E-book Resep Sehat'],
    isPopular: false,
  },
  {
    id: '3',
    name: 'Paket Keluarga (3 Botol)',
    price: 272000,
    originalPrice: 277500,
    savings: 5500,
    features: ['180 Kapsul Softgel', 'Stok 3 bulan/Keluarga', 'GRATIS ONGKIR', 'Prioritas Konsultasi', 'E-book Resep Sehat'],
    isPopular: true,
    shipping: "Gratis Ongkir"
  }
];

export const COMPANY_INFO: CompanyInfo = {
  name: 'PT SR12 Herbal Kosmetik',
  address: 'Jl. Mulya 2, RT.005/RW.006, Karyamulya, Kec. Kesambi, Kota Cirebon, Jawa Barat 45131',
};

export const SHIPPING_INFO: ShippingInfo = {
  codCities: undefined, // contoh: ['Jakarta','Depok','Tangerang','Bekasi','Bogor','Bandung']
  couriers: undefined, // contoh: ['JNE','J&T','SiCepat','Anteraja']
};

export const PAYMENT_OPTIONS: PaymentOptions = {
  bankAccounts: [
    { bank: 'BCA', number: '0091 7750 5714', holder: 'Hasan Husein' },
    { bank: 'Mandiri', number: '1310024431894', holder: 'Hasan Husein' },
  ],
  ewallets: [
    { name: 'OVO/GoPay/Dana', number: '087871323231' },
  ],
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Bpk. Rudi',
    age: 54,
    location: 'Semarang',
    quote: "Energi lebih stabil, jarang flu. Thanks SR12!",
    result: "Gula puasa turun dari 135 jadi 112 mg/dL dalam 4 minggu"
  },
  {
    id: 't2',
    name: 'Bpk. Andi',
    age: 38,
    location: 'Bandung',
    quote: "Dokter aja kaget melihat hasilnya!",
    result: "Kolesterol turun drastis dari 245 jadi 198 dalam 3 bulan"
  },
  {
    id: 't3',
    name: 'Ibu Siti',
    age: 42,
    location: 'Jakarta',
    quote: "Plus bisa konsultasi gratis dengan tim nutrisi.",
    result: "Pencernaan membaik, energi seharian bertahan"
  }
];

export const SCIENCE_DATA: ScienceJournal[] = [
  {
    journal: "Journal of Ethnopharmacology",
    year: "2021",
    finding: "Meningkatkan aktivitas sel imun (Sel T & NK) hingga 47%"
  },
  {
    journal: "Saudi Pharmaceutical Journal",
    year: "2019",
    finding: "Menurunkan LDL & trigliserida secara signifikan"
  },
  {
    journal: "Journal of Endocrinological Investigation",
    year: "2020",
    finding: "Meningkatkan sensitivitas insulin & kontrol gula darah"
  },
  {
    journal: "Food Chemistry",
    year: "2018",
    finding: "Aktivitas antioksidan 15x lebih kuat dibanding Vitamin C"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Berapa lama efek SR12 terasa?",
    answer: "Sebagian pengguna merasakan peningkatan energi dalam 1-2 minggu. Untuk hasil optimal pada kolesterol dan gula darah, konsumsi minimal 4-8 minggu."
  },
  {
    question: "Apakah aman dikonsumsi bersamaan dengan obat dokter?",
    answer: "SR12 umumnya aman, namun beri jeda 1-2 jam. Konsultasikan dengan dokter Anda jika sedang mengonsumsi obat pengencer darah atau obat diabetes."
  },
  {
    question: "Apakah ada efek samping?",
    answer: "SR12 terbuat dari bahan alami dan umumnya tidak menimbulkan efek samping. Beberapa orang mungkin mengalami detoks ringan atau gangguan pencernaan di awal konsumsi."
  },
  {
    question: "Bagaimana cara menyimpan produk?",
    answer: "Simpan di tempat kering, sejuk (di bawah 30°C), dan terhindar dari sinar matahari langsung."
  }
];