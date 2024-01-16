const dotenv = require("dotenv");

dotenv.config({path: ".env"});

// import pkg from 'knex';
// const { Knex } = pkg;

const config = {
  client: 'pg',
  connection: process.env.DATABASE_URL,
  migrations: {
    extension: 'ts',
  },
};

module.exports = config;