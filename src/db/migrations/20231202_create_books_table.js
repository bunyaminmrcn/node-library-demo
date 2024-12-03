const up = function(knex) {
    return knex.schema.createTable('books', function(table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.timestamps(true, true);
    });
  };
  
 const down = function(knex) {
    return knex.schema.dropTable('books');
  };


  export { up , down }