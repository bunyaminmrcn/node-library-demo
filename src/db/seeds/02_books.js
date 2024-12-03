const seed = function(knex) {
    // Deletes ALL existing entries
    return knex('books').del()
      .then(function () {
        // Inserts seed entries
        return knex('books').insert([
          {name: 'Lord of the rings'},
          {name: 'Introduction the Java Programming'},
          {name: 'Deitel C/C++'},
          {name: 'Apache Kafka'},
          {name: 'Node.js'}
        ]);
      });
  };

  export { seed }