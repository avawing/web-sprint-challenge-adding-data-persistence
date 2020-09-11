const express = require("express");
const resourceRoute = express.Router();

resourceRoute.get('/', (req, res)=>{
    res.send('Project Resources')
})

resourceRoute.get('/:id', (req, res)=>{
    res.send('One resource')
})

resourceRoute.post('/', (req, res)=>{
    res.send('posted')
})

module.exports = resourceRoute;
