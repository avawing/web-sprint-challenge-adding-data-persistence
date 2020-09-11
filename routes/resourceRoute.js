const express = require("express");
const db = require('../data/resourcehelper')
const resourceRoute = express.Router();

resourceRoute.get('/', (req, res)=>{
    db.find()
    .then(resource=>{
        if(resource.length){
            res.status(200).json(resource).end()
        }else{
            res.status(404).json({message: "There are no resources"}).end()
        }
    })
    .catch(err => res.status(500).json({message: "Nope nope nope"}).end())
})

resourceRoute.get('/:id', (req, res)=>{
    res.send('One resource')
})

resourceRoute.post('/', (req, res)=>{
    res.send('posted')
})

module.exports = resourceRoute;
