const db = require('../data/db-config.js');

module.exports = {
    getProjects,
    getProjById,
    insertProject,
    getProjTasks
}

function getProjects() {
    return db('projects');
}

function getProjById(id) {
    return db.from('projects').where('projects.id', id)
}

function insertProject(project) {
    return db('projects').insert(project);
}

function getProjTasks(id) {
    /*
        select t.task_description, t.notes, t.task_completed, p.project, p.proj_description
        from tasks as t
        join projects as p on t.project_id = p.id
        where p.id = 1;
    */
    return db.from('tasks as t')
        .join('projects as p', 't.project_id', 'p.id')
        .where('p.id', id)
        .select('t.task_description', 't.notes', 't.task_completed')
        .select('p.project', 'p.proj_description');
        
}

