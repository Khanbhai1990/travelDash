
exports.up = function(knex, Promise) {
  return knex.schema.createTable('airline', (table)=>{
    table.increments();
    table.string("name");
    table.string("description");
    table.string("password");
    table.timestamps(true,true);
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("airline")
};
