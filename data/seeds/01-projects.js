
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, project: 'Cleanup the Roads', proj_description: 'We want to clean up all of the roads in our city. Hopefully this will work out well!', proj_completed: false},
        {id: 2, project: 'Build A House', proj_description: 'We have found a great location for a new house. We want this house to be unique and marvelous', proj_completed: true},
        {id: 3, project: 'Runway', proj_description: 'I have never seen this show, but just thought that it would be fun to have a Project Runway', proj_completed: false}
      ]);
    });
};
