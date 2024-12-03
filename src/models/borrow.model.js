import knex from '../db/knex.js'; // Assuming you have a knex.js file set up for database connection

class Borrow {
  static tableName = 'borrows';
  static async get() {
    return knex(this.tableName).select('*');
  }

  static async findByIds(user_id, book_id) {
    return knex(this.tableName).where({ user_id, book_id }).first();
  }

  static async create(borrowData) {
    const [borrow] = await knex(this.tableName).insert({...borrowData,borrowAt: knex.fn.now()}).returning('*');
    return borrow;
  }

  static async update(id, updateData) { // you must provide a score
    const [updatedBorrow] = await knex(this.tableName)
      .where({ id })
      .update({ ...updateData,
         returnAt: knex.fn.now()
       })
      .returning('*');
    return updatedBorrow;
  }
}

export default Borrow;