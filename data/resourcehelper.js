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

module.exports = {find, findById, add}