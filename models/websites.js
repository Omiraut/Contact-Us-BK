"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Websites extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Websites.hasMany(models.ContactUsForm, {
        foreignKey: "websiteId",
      });
    }
  }
  Websites.init(
    {
      webAddress: DataTypes.STRING,
      owner: DataTypes.STRING,
      email: DataTypes.STRING,
      contactNo: DataTypes.STRING,
      frequency: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Websites",
    }
  );
  return Websites;
};
