module.exports = {
  development: {
    username: process.env.dbusername,
    password: process.env.password,
    database: process.env.database,
    host: process.env.host,
    dialect: 'postgres',
    logging: false
  },
  test: {
    username: process.env.dbusername,
    password: process.env.password,
    database: process.env.database,
    host: process.env.host,
    dialect: 'postgres',
    logging: false
  },
  production: {
    username: process.env.dbusername,
    password: process.env.password,
    database: process.env.database,
    host: process.env.host,
    dialect: 'postgres',
    logging: false
  }
}
