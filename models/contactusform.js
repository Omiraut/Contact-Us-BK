"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ContactUsForm extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ContactUsForm.belongsTo(models.Websites, {
        foreignKey: "websiteId",
      });
    }
  }
  ContactUsForm.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      message: DataTypes.STRING,
      contactNo: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ContactUsForm",
    }
  );
  return ContactUsForm;
};
