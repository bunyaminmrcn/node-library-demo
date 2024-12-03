const seed = function(knex) {
    // Deletes ALL existing entries
    return knex('users').del()
      .then(function () {
        // Inserts seed entries
        return knex('users').insert([
          {name: 'John Doe'},
          {name: 'Jane Smith'},
          {name: 'Bob Johnson'}
        ]);
      });
  };

  export { seed }