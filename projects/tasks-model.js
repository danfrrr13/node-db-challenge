const db = require('../data/db-config.js');

module.exports = {
    createProjTasks
}

function createProjTasks(id, newTask) {
    return db('tasks').insert(newTask).where('id', id)
       
}