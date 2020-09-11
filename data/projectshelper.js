const db = require("../knexconfig");

//get projects
function find() {
  return db("projects");
}

//get project by id
function findById(id) {
  return db("projects").where({ id }).first();
}

//get tasks by project id
function findTasks(pId) {
  return db("tasks")
    .where({ project_id: pId })
    .join("projects", "projects.id", "tasks.project_id")
    .select(
      "projects.project_name",
      "projects.project_desc",
      "tasks.task_name",
      "tasks.task_desc",
      "tasks.notes"
    );
}

//get resources (resource helper)

//post project
function add(data) {
  return db("projects").insert(data);
}
//post task to project by id
function addTask(data, pId) {
  
  return db("tasks").insert(data);
}
//post resource (resource helper)

module.exports = { find, findById, add, findTasks, addTask };
