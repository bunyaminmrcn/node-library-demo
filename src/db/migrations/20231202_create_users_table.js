const up = function(knex) {
    return knex.schema.createTable('users', function(table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.timestamps(true, true);
    });
  };
  
 const down = function(knex) {
    return knex.schema.dropTable('users');
  };


  export { up , down }