// //Use this configuration for an SQLite database on your machine.
// const path = require('path');

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'sqlite',
//     connection: {
//       filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
//     },
//     useNullAsDefault: true,
//   },
// });

// Use this configuration for an postgres database on your machine.

    module.exports = ({ env }) => ({
      connection: {
        client: 'postgres',
        connection: {
          host: env('DATABASE_HOST', ''),
          port: env.int('DATABASE_PORT', 5432),
          database: env('DATABASE_NAME', ''),
          user: env('DATABASE_USERNAME', ''),
          password: env('DATABASE_PASSWORD', ''),
          schema: env('DATABASE_SCHEMA', ''), // Not required
        },
        debug: false,
      },
    });