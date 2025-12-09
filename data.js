const VILLA_COUNT = 6;
const packages = {
  Ekonomi: {
    power: "5 kWp",
    price: 45000,
    materials: [
      { name: "Kalyon Pv 550W M10 144 HC Bifacial G2G panel", qty: 18, unit: "adet", price: 24000 },
      { name: "APX11 PRO Akıllı İnverter MPPT", qty: 1, unit: "adet", price: 10000 },
      { name: "LiFePO4 lityum akü (10 kW, 51,2V sistem)", qty: 1, unit: "adet", price: 8000 },
      { name: "Kablo, sigorta, AC/DC pano", qty: 1, unit: "takım", price: 3000 },
      { name: "Kurulum ve test", qty: 1, unit: "hizmet", price: 2000 }
    ]
  },
  Performans: {
    power: "6 kWp",
    price: 58000,
    materials: [
      { name: "Kalyon Pv 550W M10 144 HC Bifacial G2G panel", qty: 18, unit: "adet", price: 30000 },
      { name: "APX11 PRO Akıllı İnverter MPPT", qty: 1, unit: "adet", price: 14000 },
      { name: "LiFePO4 lityum akü (15 kW, 51,2V sistem)", qty: 1, unit: "adet", price: 9000 },
      { name: "Kablo, sigorta, AC/DC pano", qty: 1, unit: "takım", price: 4000 },
      { name: "Kurulum, test, devreye alma", qty: 1, unit: "hizmet", price: 2000 }
    ]
  },
  Premium: {
    power: "8 kWp",
    price: 74000,
    materials: [
      { name: "Kalyon Pv 550W M10 144 HC Bifacial G2G panel", qty: 18, unit: "adet", price: 40000 },
      { name: "APX11 PRO Akıllı İnverter MPPT", qty: 1, unit: "adet", price: 16000 },
      { name: "LiFePO4 lityum akü (20 kW, 51,2V sistem)", qty: 1, unit: "adet", price: 12000 },
      { name: "Kablo, sigorta, AC/DC pano", qty: 1, unit: "takım", price: 5000 },
      { name: "Kurulum, test, devreye alma", qty: 1, unit: "hizmet", price: 3000 }
    ]
  }
};

function formatPrice(value) {
  return value.toLocaleString('tr-TR') + " TL";
}
