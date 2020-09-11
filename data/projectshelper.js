const db = require('../knexconfig')

//get projects
function find(){
    return db('projects')
}

//get project by id

//get tasks by project id

//get resources (resource helper)

//post project
//post task to project by id
//post resource (resource helper)

module.exports = {find}