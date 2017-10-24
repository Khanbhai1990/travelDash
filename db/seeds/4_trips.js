exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('trips').del()
    .then(function () {
      // Inserts seed entries
      return knex('trips').insert([
        {user_id: 1, title: 'Wedding', description: "Shotgun wedding in Phoenix", flight_id:1},
        {user_id: 2, title: 'Business', description: "No biz like showbiz", flight_id:2},
        {user_id: 3, title: 'Vacation', description: "Enjoy the smell of Portland Coffee", flight_id:3}
      ]);
    });
};
