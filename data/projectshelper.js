const db = require('../knexconfig')

//get projects
function find(){
    return db('projects')
}

//get project by id
function findById(id){
    return db('projects').where({id}).first()
}

//get tasks by project id

//get resources (resource helper)

//post project
function add(data) {
    return db('projects').insert(data)
  }
//post task to project by id
//post resource (resource helper)

module.exports = {find, findById, add}