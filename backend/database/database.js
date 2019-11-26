module.exports= require('knex')({
    client: 'pg',
    version: '12.0',
    connection: {
      host : 'localhost',
      user : 'postgres',
      password : 'password',
      database : 'inversiones'
    },  
    pool: { min: 0, max: 7 }
  });