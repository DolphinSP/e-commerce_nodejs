import { Category } from "../../models/product/product-category.model";

export const seedProductCategory: () => Category[] = () => {
  const seedCategory = [
    {
      name: "Electrónica",
      description: "Teléfonos móviles, laptops, tabletas y gadgets",
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      name: "Electrodomésticos",
      description: "Refrigeradoras, lavadoras, hornos y otros electrodomésticos",
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      name: "Moda",
      description: "Ropa para hombres, mujeres y niños, incluyendo accesorios",
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      name: "Deporte",
      description: "Equipo de gimnasia, accesorios deportivos y ropa deportiva",
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      name: "Hogar y Muebles",
      description: "Muebles, decoración y artículos para el hogar",
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      name: "Juguetes y Juegos",
      description: "Juguetes para niños, juegos de mesa y videojuegos",
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      name: "Belleza y Cuidado Personal",
      description: "Maquillaje, productos de cuidado de la piel y cabello",
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      name: "Salud y Bienestar",
      description: "Productos de salud, suplementos y artículos médicos",
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      name: "Automotriz",
      description: "Accesorios para autos, repuestos y herramientas",
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      name: "Libros y Papelería",
      description: "Libros, cuadernos, materiales educativos y de oficina",
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      name: "Mascotas",
      description: "Productos para mascotas, alimentos y accesorios",
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      name: "Alimentos y Bebidas",
      description: "Alimentos perecibles, bebidas y snacks",
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      name: "Jardín y Exteriores",
      description: "Herramientas de jardinería, muebles para exteriores y decoraciones",
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      name: "Herramientas y Ferretería",
      description: "Herramientas manuales, eléctricas y materiales de construcción",
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      name: "Viajes y Maletas",
      description: "Maletas, mochilas y accesorios de viaje",
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      name: "Arte y Música",
      description: "Instrumentos musicales, materiales artísticos y decoraciones",
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      name: "Bebés y Niños",
      description: "Productos para bebés, ropa, accesorios y juguetes",
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      name: "Industria y Negocios",
      description: "Maquinaria, equipo industrial y artículos de oficina",
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      name: "Accesorios de Moda",
      description: "Bolsos, relojes, gafas y otros complementos",
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      name: "Tecnología y Software",
      description: "Software, suscripciones y gadgets tecnológicos",
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
  ];

  return seedCategory;
};
