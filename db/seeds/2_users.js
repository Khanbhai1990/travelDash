exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Hassan_Khan', email: "hassan@galvanize.com", password:"khan" },
        {username: 'Ali_Finney',email: "ali@galvanize.com", password:"finney" },
        {username: 'Charlotte_Spencer',email: "charlotte@galvanize.com", password: "spencer" }
      ]);
    });
};
