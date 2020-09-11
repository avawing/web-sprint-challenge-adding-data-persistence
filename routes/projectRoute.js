const express = require("express");
const db = require("../data/projectshelper");

const projectRoute = express.Router();

projectRoute.get("/", (req, res) => {
  db.find()
    .then((projects) => {
      if (projects.length) {
        res.status(200).json(projects).end();
      } else {
        res
          .status(404)
          .json({ message: "There are no projects on the server" })
          .end();
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "The server exploded" }).end();
    });
});

projectRoute.get("/:id", (req, res) => {
  db.findById(req.params.id)
    .then((project) => {
      if (project) {
        res.status(200).json(project).end();
      } else {
        res.status(404).json({ message: "Project not found" }).end();
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "The server exploded" }).end();
    });
});

projectRoute.get("/:id/tasks", (req, res) => {
  res.send("Project Tasks");
});

projectRoute.post("/", (req, res) => {
  db.add(req.body)
    .then((project) => {
      if (project) {
        db.findById(project[0])
          .then((project) => res.status(201).json(project).end())
          .catch((err) => res.status(500).json({ message: "bigger error" }));
      } else {
        res
          .status(400)
          .json({ message: "Bad Request - please fill all required fields" })
          .end();
      }
    })
    .catch((err) => {
      res.status(500).json(err).end();
    });
});

module.exports = projectRoute;
