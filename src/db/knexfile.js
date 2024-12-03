export default {
    development: {
      client: 'pg',
      connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'MySecurePassword',
        database: 'postgres'
      },
      migrations: {
        directory: './migrations'
      },
      seeds: {
        directory: './seeds'
      }
    }
  };