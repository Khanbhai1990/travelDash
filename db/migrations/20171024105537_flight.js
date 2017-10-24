exports.up = function(knex, Promise) {
  return knex.schema.createTable('flight', (table)=> {
    table.increments();
    table.string("start");
    table.string("destination");
    table.integer("airline_id")
      .notNullable()
      .references("id")
      .inTable("airline")
      .onDelete("CASCADE")
      .index();
    table.timestamps(true,true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('flight');
};
