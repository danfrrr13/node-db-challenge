const express = require('express');

const ProjectsRouter = require('../projects/projects-router.js')

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('<h2>API Running</h2>')
})

server.use('/api', ProjectsRouter)

module.exports = server;