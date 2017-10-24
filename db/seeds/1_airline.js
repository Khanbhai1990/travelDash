
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('airline').del()
    .then(function () {
      // Inserts seed entries
      return knex('airline').insert([
        {name: 'SouthWest', description: "Fly West Coast"},
        {name: 'American', description:"domestic"},
        {name: 'Virgin International', description:"Its Internationl!!!"}
      ]);
    });
};
