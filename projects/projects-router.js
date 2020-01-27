const express = require('express');

const Projects = require('./projects-model.js');

const Resources = require('./resources-model.js');

const Tasks = require('./tasks-model.js');

const router = express.Router();

//---------------projects

//gets list of projects
router.get('/projects', (req, res) => {
    Projects.getProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            console.log('error getting projects', err)
            res.status(500).json({ errorMessage: 'Could not find projects' })
        })
})

router.get('/projects/:id', (req, res) => {
    const id = req.params.id;

    Projects.getProjById(id)
        .then(project => {
            res.status(200).json(project);
        })
        .catch(err => {
            console.log('error getting project by id', err)
            res.status(500).json({ errorMessage: 'Could not find this project' })
        })
})

//adds project
router.post('/projects', (req, res) => {
    const newProj = req.body;

    Projects.insertProject(newProj)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(err => {
            console.log('error creating project', err)
            res.status(500).json({ errorMessage: 'Could not create a project' })
        })
})


//--------------resources

//gets list of resources
router.get('/resources', (req, res) => {
    Resources.getResources()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(err => {
            console.log('error getting resources', err)
            res.status(500).json({ errorMessage: 'Could not find resources' })
        })
})


//adds resources
router.post('/resources', (req, res) => {
    const newRes = req.body;

    Resources.insertResource(newRes)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(err => {
            console.log('error creating resource', err)
            res.status(500).json({ errorMessage: 'Could not create a resource' })
        })
})


//----------------tasks

//gets list of tasks with project name and project description
router.get('/projects/:id/tasks', (req, res) => {
    const id = req.params.id;

    Projects.getProjTasks(id)
        .then(tasksInfo => {
            res.status(200).json(tasksInfo)
        })
        .catch(err => {
            console.log('error getting tasks', err)
            res.status(500).json({ errorMessage: 'Could not find tasks' })
        })
})

//adds tasks
router.post('/tasks', (req, res) => {
    const newTask = req.body;
    const id = req.params.id;

    Tasks.createProjTasks(id, newTask)
        .then(task => {
            res.status(201).json(task);
        })
        .catch(err => {
            console.log('error creating task', err)
            res.status(500).json({ errorMessage: 'Could not create a new task' })
        })
})

module.exports = router;