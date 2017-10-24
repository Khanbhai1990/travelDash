
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('flight').del()
    .then(function () {
      // Inserts seed entries
      return knex('flight').insert([
        {start: 'DFW', destination: "PHX", airline_id:1},
        {start: 'JFK', destination: "LAX", airline_id:2},
        {start: 'DEN', destination: "PDX", airline_id:3}
      ]);
    });
};
