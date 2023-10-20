import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db/sequelize.config";

class Image extends Model {}

Image.init(
  {
    image_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Image",
  }
);

export default Image;
