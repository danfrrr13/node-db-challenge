
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, project_id: 1, task_description: 'find worst roads', notes: 'we found it, it was just a pit, we might not need a jackhammer',task_completed: true},
        {id: 2, project_id: 1, task_description: 'use jackhammer', notes: 'hopefully we can rent one', task_completed: false},
        {id: 3, project_id: 1, task_description: 'haul removed road', notes: 'maybe a dump truck?', task_completed: false},
        {id: 4, project_id: 2, task_description: 'Hire Ground Crew', notes: 'my cousin might be up to the task', task_completed: false},
        {id: 5, project_id: 3, task_description: 'use jackhammer', notes: 'we found some hard earth below, maybe there was once an underground city here', task_completed: false},
        {id: 6, project_id: 3, task_description: 'Find Venue', notes: 'Must be in the most remote place, this should be a luxury', task_completed: true},
        {id: 7, project_id: 3, task_description: 'Hire Musicians', notes: 'a heavy metal band sounds great for a luxury getaway', task_completed: false},
        {id: 8, project_id: 3, task_description: 'Hire Shoe Designer', notes: 'the shoes should be beautiful, but should also work well in rough terrain. No! I do not think I am asking too much', task_completed: false}
      ]);
    });
};
