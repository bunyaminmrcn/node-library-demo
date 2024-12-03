import knex from '../db/knex.js'; // Assuming you have a knex.js file set up for database connection

class User {
  static tableName = 'users';
  static async findAll() {
    return knex(this.tableName).select('*');
  }

  static async create(userData) {
    const [user] = await knex(this.tableName).insert(userData).returning('*');
    return user;
  }

  static async findById(id) {
    return knex('users')
    .select(
      'users.id as user_id',
      'users.name as user_name',
      'books.* as books',
      'borrows.* as borrows',
    )
    .leftJoin('borrows', 'users.id', 'borrows.user_id')
    .leftJoin('books', 'borrows.book_id', 'books.id')
    .where('users.id', id);
  }

  static async findByEmail(email) {
    return knex(this.tableName).where({ email }).first();
  }

  static async update(id, updateData) {
    const [updatedUser] = await knex(this.tableName)
      .where({ id })
      .update({ ...updateData, updated_at: knex.fn.now() })
      .returning('*');
    return updatedUser;
  }

  static async delete(id) {
    return knex(this.tableName).where({ id }).del();
  }
}

export default User;