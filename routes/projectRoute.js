const express = require("express");

const projectRoute = express.Router();

projectRoute.get('/', (req, res)=>{
    res.send('These are projects')
})

projectRoute.get('/:id', (req, res)=>{
    res.send('This is a project')
})

projectRoute.get('/:id/tasks', (req, res)=>{
    res.send('Project Tasks')
})

projectRoute.post('/', (req, res)=>{
    res.send('Posted')
})

module.exports = projectRoute;
