const VILLA_COUNT = 6;
const packages = {
  Ekonomi: {
    power: "5 kWp",
    price: 45000,
    materials: [
      { name: "18x Kalyon Pv 550W M10 144 HC Bifacial G2G panel", price: 24000 },
      { name: "APX11 PRO Akıllı İnverter MPPT", price: 10000 },
      { name: "2x 51,2V 100Ah LiFePO4 lityum akü", price: 8000 },
      { name: "Kablo, sigorta, AC/DC pano", price: 3000 },
      { name: "Kurulum ve test", price: 2000 }
    ]
  },
  Performans: {
    power: "6 kWp",
    price: 58000,
    materials: [
      { name: "18x Kalyon Pv 550W M10 144 HC Bifacial G2G panel", price: 30000 },
      { name: "APX11 PRO Akıllı İnverter MPPT", price: 14000 },
      { name: "3x 51,2V 100Ah LiFePO4 lityum akü", price: 9000 },
      { name: "Kablo, sigorta, AC/DC pano", price: 4000 },
      { name: "Kurulum, test, devreye alma", price: 2000 }
    ]
  },
  Premium: {
    power: "8 kWp",
    price: 74000,
    materials: [
      { name: "18x Kalyon Pv 550W M10 144 HC Bifacial G2G panel", price: 40000 },
      { name: "APX11 PRO Akıllı İnverter MPPT", price: 16000 },
      { name: "4x 51,2V 100Ah LiFePO4 lityum akü", price: 12000 },
      { name: "Kablo, sigorta, AC/DC pano", price: 5000 },
      { name: "Kurulum, test, devreye alma", price: 3000 }
    ]
  }
};

function formatPrice(value) {
  return value.toLocaleString('tr-TR') + " TL";
}
