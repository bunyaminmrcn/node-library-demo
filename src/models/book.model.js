import knex from '../db/knex.js'; // Assuming you have a knex.js file set up for database connection

class Book {
  static tableName = 'books';
  static async findAll() {
    return knex(this.tableName).select('*');
  }

  static async create(userData) {
    const [user] = await knex(this.tableName).insert(userData).returning('*');
    return user;
  }

  static async findById(id) {
    return knex('books')
    .select(
      'books.id as book_id',
      'books.name as book_name',
      knex.raw('COALESCE(AVG(NULLIF(borrows.score, 0)), 0) as average_score') // Calculate average score
    )
    .leftJoin('borrows', 'books.id', 'borrows.book_id')
    .where('books.id', id)
    .groupBy('books.id');;
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

export default Book;