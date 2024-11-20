export interface ISeedProduct {
  ProductName: string;
  Price: number;
}

export const seedProduct:()=>ISeedProduct[] = () => {
  const products = [
    { ProductName: "Procesador Intel Core i7-12700K", Price: 329.99 },
    { ProductName: "Tarjeta Gráfica NVIDIA GeForce RTX 3060", Price: 399.99 },
    { ProductName: "Memoria RAM Corsair Vengeance 16GB DDR4", Price: 79.99 },
    { ProductName: "Placa Base ASUS ROG Strix B550-F", Price: 199.99 },
    { ProductName: "Disco Duro SSD Samsung 970 EVO 1TB", Price: 119.99 },
    { ProductName: "Fuente de Alimentación EVGA 650W 80+ Gold", Price: 89.99 },
    { ProductName: "Refrigeración Líquida NZXT Kraken X63", Price: 149.99 },
    { ProductName: "Caja de PC NZXT H510", Price: 89.99 },
    { ProductName: "Teclado Mecánico Razer BlackWidow", Price: 129.99 },
    { ProductName: "Ratón Logitech G502 HERO", Price: 49.99 },
    { ProductName: "Monitor Gaming ASUS TUF 27” 144Hz", Price: 299.99 },
    { ProductName: "Auriculares Corsair HS60 Pro", Price: 69.99 },
    { ProductName: "Micrófono Blue Yeti USB", Price: 129.99 },
    { ProductName: "Almacenamiento HDD Seagate Barracuda 2TB", Price: 59.99 },
    { ProductName: "Ventilador Cooler Master MasterFan 120mm", Price: 12.99 },
    { ProductName: "Cable HDMI 2.1 4K 2 metros", Price: 14.99 },
    {
      ProductName: "Tarjeta de Red Wi-Fi TP-Link Archer TX3000E",
      Price: 49.99,
    },
    { ProductName: "Unidad Óptica Externa LG GP65NB60", Price: 29.99 },
    { ProductName: "Lector de Tarjetas USB 3.0 Kingston", Price: 15.99 },
    { ProductName: "Soporte para Monitores Dual VIVO", Price: 39.99 },
    { ProductName: "Procesador AMD Ryzen 5 5600X", Price: 229.99 },
    { ProductName: "Tarjeta Gráfica AMD Radeon RX 6600", Price: 329.99 },
    { ProductName: "Memoria RAM G.Skill Ripjaws 32GB DDR4", Price: 149.99 },
    { ProductName: "Placa Base MSI MPG X570 Gaming Plus", Price: 179.99 },
    { ProductName: "SSD Crucial MX500 500GB", Price: 54.99 },
    {
      ProductName: "Fuente de Alimentación Corsair RM750x 750W",
      Price: 124.99,
    },
    { ProductName: "Refrigerador de CPU Noctua NH-U12S", Price: 69.99 },
    { ProductName: "Ratón Razer DeathAdder V2", Price: 59.99 },
    { ProductName: "Teclado Corsair K70 RGB MK.2", Price: 159.99 },
    { ProductName: "Monitor LG UltraGear 24” 144Hz", Price: 249.99 },
  ];

  return products;
};
