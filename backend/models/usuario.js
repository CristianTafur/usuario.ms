const knex =require('../database/database');
knex.schema.createTable('usuario', (table) =>{
  table.increments('id');
  table.string('nombre');
  table.string('docuemnto');
  table.string('correo');
  table.string('clave');
  table.boolean('estado');
})
module.exports=knex;