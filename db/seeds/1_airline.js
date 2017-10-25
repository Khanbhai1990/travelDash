
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('airline').del()
    .then(function () {
      // Inserts seed entries
      return knex('airline').insert([
        {name: 'SouthWest', description: "Fly West Coast", password:'test'},
        {name: 'American', description:"domestic", password:'amer'},
        {name: 'Virgin International', description:"Its Internationl!!!", password:'virgin'}
      ]);
    });
};
