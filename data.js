const VILLA_COUNT = 6;
const packages = {
  Ekonomi: {
    power: "5 kWp",
    price: 45000,
    materials: [
      { name: "Monokristal panel seti (5 kWp)", price: 24000 },
      { name: "String inverter", price: 10000 },
      { name: "Galvaniz montaj ekipmanı", price: 6000 },
      { name: "Kablo, sigorta, AC/DC pano", price: 3000 },
      { name: "Kurulum ve test", price: 2000 }
    ]
  },
  Performans: {
    power: "6 kWp",
    price: 58000,
    materials: [
      { name: "High-eff monokristal panel seti (6 kWp)", price: 30000 },
      { name: "Hibrit hazır akıllı inverter", price: 14000 },
      { name: "Alüminyum montaj ekipmanı", price: 8000 },
      { name: "Kablo, sigorta, AC/DC pano", price: 4000 },
      { name: "Kurulum, test, devreye alma", price: 2000 }
    ]
  },
  Premium: {
    power: "8 kWp",
    price: 74000,
    materials: [
      { name: "Tier-1 monokristal panel seti (8 kWp)", price: 40000 },
      { name: "Akıllı inverter + izleme", price: 16000 },
      { name: "Paslanmaz montaj ekipmanı", price: 10000 },
      { name: "Kablo, sigorta, AC/DC pano", price: 5000 },
      { name: "Kurulum, test, devreye alma", price: 3000 }
    ]
  }
};

function formatPrice(value) {
  return value.toLocaleString('tr-TR') + " TL";
}
