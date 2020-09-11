const db = require("../knexconfig");


function find(){
    return db('resources')
}

function findById(id){
    return db('resources').where({id}).first()

}

function add(data){
    return db('resources').insert(data)
}

function getProjects(id){
    return db('template').where({"resource_id":id})
}

module.exports = {find, findById, add, getProjects}