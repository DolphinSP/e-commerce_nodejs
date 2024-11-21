import { Category } from "../../models/product/product-category.model";


export const seedProductCategory:()=>Category[] = () => {
  const seedCategory = [
    {
      name: "Electronica",
      description: "telefonos moviles y laptops",
      createdAt:new Date(Date.now()),
      updatedAt:new Date(Date.now()),
    },
    {
      name: "Electrodomesticos",
      description: "refrigeradoras y lavadoras",
      createdAt:new Date(Date.now()),
      updatedAt:new Date(Date.now()),
    },
    {
      name: "Moda",
      description: "ropa para hombres y mujeres",
      createdAt:new Date(Date.now()),
      updatedAt:new Date(Date.now()),
    },
    {
      name: "Deporte",
      description: "equipo de gimnacia y accesorios deportivos",
      createdAt:new Date(Date.now()),
      updatedAt:new Date(Date.now()),
    },
  ];

  return seedCategory;
};
