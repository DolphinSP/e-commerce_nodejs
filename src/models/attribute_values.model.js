import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db/sequelize.config";

class AttributeValue extends Model {}

AttributeValue.init(
  {
    attribute_value_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "AttributeValue",
  }
);

export default AttributeValue;
