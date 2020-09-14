const connection = require('../knexfile')[process.env.NODE_ENV || 'development']
const database = require('knex')(connection)

 module.exports = {
   getAll(table){
    return database(table)
   },
   insertData(table, data) {
     return database(table).returning('id').insert(data)
   }
 }