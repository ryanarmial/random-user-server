const connection = require('../knexfile')[process.env.NODE_ENV || 'development']
const database = require('knex')(connection)

 module.exports = {
   getAll(table){
    return database(table)
   },
   getById(table, id) {
    return database(table).where({id}).first()
   },
   insertData(table, data) {
     return database(table).returning('id').insert(data)
   }
 }