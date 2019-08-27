'use strict';
module.exports = (sequelize, DataTypes) => {
  const History = sequelize.define('History', {
    x: DataTypes.DOUBLE,
    y: DataTypes.DOUBLE,
    geom: DataTypes.GEOMETRY('POINT', 4326)
  }, {});
  History.associate = function (models) {
    // associations can be defined here
  };
  return History;
};