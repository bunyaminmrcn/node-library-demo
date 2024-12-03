const up = function(knex) {
    return knex.schema.createTable('borrows', function(table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().notNullable();
      table.integer('book_id').unsigned().notNullable();
      table.timestamp('borrowAt').defaultTo(knex.fn.now());
      table.timestamp('returnAt');
      table.decimal('score').defaultTo(0);
      //table.timestamp('createdAt').defaultTo(knex.fn.now());
      //table.timestamps(true, true);
      table.foreign('user_id').references('users.id');
      table.foreign('book_id').references('books.id');
    });
  };
  
 const down = function(knex) {
    return knex.schema.dropTable('books');
  };


  export { up , down }