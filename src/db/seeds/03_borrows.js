import momentLib from 'moment';

const today = momentLib();
const twoDaysLater = momentLib().add(2, 'days');
const threeDaysLater = momentLib().add(3, 'days');
const fourDaysLater = momentLib().add(4, 'days');

const seed = function(knex) {
    // Deletes ALL existing entries
    return knex('borrows').del()
      .then(function () {
        // Inserts seed entries
        return knex('borrows').insert([
          {user_id: 1, book_id: 2, borrowAt: today.toDate()},
          {user_id: 1, book_id: 3, borrowAt: today.toDate()},
          {user_id: 2, book_id: 4, borrowAt: today.toDate(), returnAt: threeDaysLater.toDate(), score: 8},
          {user_id: 2, book_id: 5, borrowAt: today.toDate(), returnAt: twoDaysLater.toDate(), score: 7},
          {user_id: 3, book_id: 4, borrowAt: threeDaysLater.toDate(), returnAt: fourDaysLater.toDate(), score: 6}
        ]);
      });
  };


  export { seed }