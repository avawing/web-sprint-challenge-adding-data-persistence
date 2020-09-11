const express = require("express");
const db = require('../data/projectshelper')

const projectRoute = express.Router();

projectRoute.get('/', (req, res)=>{
    db.find()
    .then(projects =>{
        if(projects.length){
            res.status(200).json(projects).end()
        }else{
            res.status(404).json({message: "There are no projects on the server"}).end()
        }
    })
    .catch(err => {
        res.status(500).json({message: "The server exploded"})
    })
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
