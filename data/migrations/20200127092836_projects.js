
exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments();
  
        tbl.string('project', 130).notNullable().index();
  
        tbl.string('proj_description', 1000)
  
        tbl.boolean('proj_completed').defaultTo(false);
    })
    .createTable('resources', tbl => {
        tbl.increments();
  
        tbl.string('resource', 130).notNullable().unique().index();
  
        tbl.string('res_description', 1000)
    })
  
    .createTable('projects_resources', tbl => {
        tbl.increments();
  
        tbl.integer('project_id').unsigned().notNullable().references('id').inTable('projects').onDelete('RESTRICT').onUpdate('CASCADE');
  
        tbl.integer('resource_id').unsigned().notNullable().references('id').inTable('resources').onDelete('RESTRICT').onUpdate('CASCADE');
    })
  
    .createTable('tasks', tbl => {
        tbl.increments();
  
        tbl.integer('project_id').unsigned().notNullable().references('id').inTable('projects').onDelete('CASCADE').onUpdate('CASCADE');
  
        tbl.string('task_description', 200).notNullable();
  
        tbl.string('notes', 1000);
  
        tbl.boolean('task_completed').notNullable().defaultTo(false);
  
    })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('tasks')
      .dropTableIfExists('projects_resources')
      .dropTableIfExists('resources')
      .dropTableIfExists('projects');
  };
  