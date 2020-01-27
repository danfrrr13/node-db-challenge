const db = require('../data/db-config.js');

module.exports = {
    getResources,
    insertResource
}

function getResources() {
    return db('resources');
}

function insertResource(resource) {
    return db('resources').insert(resource)
}