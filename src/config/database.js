require('dotenv').config();

module.exports = {
  dialect: 'postgres',
  // host: 'localhost',
  host: process.env.DB_HOST,
  port: '5433',
  // username: 'postgres',
  username: process.env.DB_USER,
  // password: 'docker',
  password: process.env.DB_PASS,
  // database: 'goBarber',
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
