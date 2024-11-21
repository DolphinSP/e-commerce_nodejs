import { Product } from "../../models/product/product.model";


export const seedProduct: () => Product[] = () => {
  const seedProduct = [
    {
      ProductName: "iPhone 14 Pro",
      description: "Teléfono inteligente con pantalla OLED y cámara avanzada",
      Price: 999.99,
      stock: 50,
      subcategory: "Smartphones",
      images: [
        "https://example.com/images/iphone14pro1.jpg",
        "https://example.com/images/iphone14pro2.jpg",
      ],
      createdAt: new Date(Date.now()),
      UpdatedAt: new Date(Date.now()),
    },
    {
      ProductName: "MacBook Air M2",
      description: "Portátil ultra delgado con chip M2 y batería de larga duración",
      Price: 1299.99,
      stock: 30,
      subcategory: "Laptops",
      images: [
        "https://example.com/images/macbookairm2-1.jpg",
        "https://example.com/images/macbookairm2-2.jpg",
      ],
      createdAt: new Date(Date.now()),
      UpdatedAt: new Date(Date.now()),
    },
    {
      ProductName: "Samsung Galaxy Z Fold4",
      description: "Teléfono plegable con pantalla AMOLED y tecnología 5G",
      Price: 1799.99,
      stock: 20,
      subcategory: "Smartphones",
      images: [
        "https://example.com/images/galaxyfold4-1.jpg",
        "https://example.com/images/galaxyfold4-2.jpg",
      ],
      createdAt: new Date(Date.now()),
      UpdatedAt: new Date(Date.now()),
    },
    {
      ProductName: "Lavadora LG TurboWash",
      description: "Lavadora de carga frontal con tecnología TurboWash",
      Price: 699.99,
      stock: 25,
      subcategory: "Lavadoras",
      images: [
        "https://example.com/images/lglavadora1.jpg",
        "https://example.com/images/lglavadora2.jpg",
      ],
      createdAt: new Date(Date.now()),
      UpdatedAt: new Date(Date.now()),
    },
    {
      ProductName: "Nike Air Max 270",
      description: "Zapatos deportivos con diseño moderno y amortiguación Air Max",
      Price: 149.99,
      stock: 100,
      subcategory: "Ropa de Hombre",
      images: [
        "https://example.com/images/airmax270-1.jpg",
        "https://example.com/images/airmax270-2.jpg",
      ],
      createdAt: new Date(Date.now()),
      UpdatedAt: new Date(Date.now()),
    },
    {
      ProductName: "Pesas Hexagonales 20kg",
      description: "Pesas de alta calidad para entrenamiento de fuerza",
      Price: 79.99,
      stock: 40,
      subcategory: "Equipo de Gimnasio",
      images: [
        "https://example.com/images/pesas20kg-1.jpg",
        "https://example.com/images/pesas20kg-2.jpg",
      ],
      createdAt: new Date(Date.now()),
      UpdatedAt: new Date(Date.now()),
    },
    {
      ProductName: "Sofá Modular 5 Piezas",
      description: "Sofá moderno y cómodo, configurable según tus necesidades",
      Price: 999.99,
      stock: 10,
      subcategory: "Sofás",
      images: [
        "https://example.com/images/sofa1.jpg",
        "https://example.com/images/sofa2.jpg",
      ],
      createdAt: new Date(Date.now()),
      UpdatedAt: new Date(Date.now()),
    },
    {
      ProductName: "Controlador Xbox Series X",
      description: "Control inalámbrico de alta precisión para Xbox y PC",
      Price: 59.99,
      stock: 200,
      subcategory: "Videojuegos",
      images: [
        "https://example.com/images/xboxcontroller1.jpg",
        "https://example.com/images/xboxcontroller2.jpg",
      ],
      createdAt: new Date(Date.now()),
      UpdatedAt: new Date(Date.now()),
    },
    {
      ProductName: "Set de Pinceles Artísticos",
      description: "Pinceles profesionales para pintura al óleo y acrílico",
      Price: 29.99,
      stock: 150,
      subcategory: "Material de Oficina",
      images: [
        "https://example.com/images/pinceles1.jpg",
        "https://example.com/images/pinceles2.jpg",
      ],
      createdAt: new Date(Date.now()),
      UpdatedAt: new Date(Date.now()),
    },
    {
      ProductName: "Cama para Mascotas",
      description: "Cama acolchada y lavable para mascotas medianas",
      Price: 49.99,
      stock: 60,
      subcategory: "Productos para Mascotas",
      images: [
        "https://example.com/images/camamascotas1.jpg",
        "https://example.com/images/camamascotas2.jpg",
      ],
      createdAt: new Date(Date.now()),
      UpdatedAt: new Date(Date.now()),
    },
  ];

  return seedProduct;
};
