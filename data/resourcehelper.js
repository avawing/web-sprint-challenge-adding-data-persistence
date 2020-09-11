const db = require("../knexconfig");


function find(){
    return db('resources')
}

function findById(){

}

function add(data){

}

module.exports = {find, findById, add}