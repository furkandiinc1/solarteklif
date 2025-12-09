const VILLA_COUNT = 6;
const packages = {
  Ekonomi: {
    displayName: "Ekonomik & yeterli",
    power: "11 kWp",
    price: 243354,
    materials: [
      { name: "Kalyon Pv 550W M10 144 HC Bifacial G2G panel", qty: 18, unit: "adet", price: 24000 },
      { name: "APX11 PRO Akıllı İnverter MPPT", qty: 1, unit: "adet", price: 10000 },
      { name: "LiFePO4 lityum akü (10 kW, 51,2V sistem)", qty: 1, unit: "adet", price: 8000 },
      { name: "Konstrüksiyon (montaj profilleri ve bağlantı seti)", qty: 1, unit: "takım", price: 0 },
      { name: "Solar kablolama seti (DC/AC)", qty: 1, unit: "set", price: 0 },
      { name: "GES tavası", qty: 1, unit: "adet", price: 0 },
      { name: "GES panosu", qty: 1, unit: "adet", price: 0 },
      { name: "Topraklama şeridi", qty: 1, unit: "adet", price: 0 },
      { name: "Kurulum ve test", qty: 1, unit: "hizmet", price: 2000 }
    ]
  },
  Performans: {
    displayName: "Gece rahat kullanım",
    power: "11 kWp",
    price: 291794,
    materials: [
      { name: "Kalyon Pv 550W M10 144 HC Bifacial G2G panel", qty: 18, unit: "adet", price: 30000 },
      { name: "APX11 PRO Akıllı İnverter MPPT", qty: 1, unit: "adet", price: 14000 },
      { name: "LiFePO4 lityum akü (15 kW, 51,2V sistem)", qty: 1, unit: "adet", price: 9000 },
      { name: "Konstrüksiyon (montaj profilleri ve bağlantı seti)", qty: 1, unit: "takım", price: 0 },
      { name: "Solar kablolama seti (DC/AC)", qty: 1, unit: "set", price: 0 },
      { name: "GES tavası", qty: 1, unit: "adet", price: 0 },
      { name: "GES panosu", qty: 1, unit: "adet", price: 0 },
      { name: "Topraklama şeridi", qty: 1, unit: "adet", price: 0 },
      { name: "Kurulum, test, devreye alma", qty: 1, unit: "hizmet", price: 2000 }
    ]
  },
  Premium: {
    displayName: "Yoğun/uzun kullanım",
    power: "11 kWp",
    price: 340129,
    materials: [
      { name: "Kalyon Pv 550W M10 144 HC Bifacial G2G panel", qty: 18, unit: "adet", price: 40000 },
      { name: "APX11 PRO Akıllı İnverter MPPT", qty: 1, unit: "adet", price: 16000 },
      { name: "LiFePO4 lityum akü (20 kW, 51,2V sistem)", qty: 1, unit: "adet", price: 12000 },
      { name: "Konstrüksiyon (montaj profilleri ve bağlantı seti)", qty: 1, unit: "takım", price: 0 },
      { name: "Solar kablolama seti (DC/AC)", qty: 1, unit: "set", price: 0 },
      { name: "GES tavası", qty: 1, unit: "adet", price: 0 },
      { name: "GES panosu", qty: 1, unit: "adet", price: 0 },
      { name: "Topraklama şeridi", qty: 1, unit: "adet", price: 0 },
      { name: "Kurulum, test, devreye alma", qty: 1, unit: "hizmet", price: 3000 }
    ]
  }
};

function formatPrice(value) {
  return value.toLocaleString('tr-TR') + " TL";
}
