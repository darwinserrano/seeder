'use strict';

function genRand(min, max, decimalPlaces) {
  var rand = Math.random() * (max - min) + min;
  var power = Math.pow(10, decimalPlaces);
  return Math.floor(rand * power) / power;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    const inserts = [];
    for (let index = 0; index < 100000; index++) {
      const lon = genRand(-72.684671, -69.637547, 6);
      const lat = genRand(-35.470795, -29.405295, 6);
      const point = Sequelize.fn('ST_SetSRID', Sequelize.fn('ST_MakePoint', lon, lat), 4326)
      // const point = {
      //   type: 'Point',
      //   coordinates: [lon, lat],
      //   crs: { type: 'name', properties: { name: 'EPSG:4326' } }
      // }
      inserts.push({
        x: lon,
        y: lat,
        geom: point,
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }
    return queryInterface.bulkInsert('Histories', inserts, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
