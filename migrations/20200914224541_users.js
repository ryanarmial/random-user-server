
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments() // this represents the primary key.
    table.string('name') // this is a column.
    table.string('email')
    table.string('phone_number')
    table.string('gender')
    table.string('location')
    table.string('picture')
}) 

  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
