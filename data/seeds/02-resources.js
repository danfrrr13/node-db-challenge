
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, resource: 'Dump Truck', res_description: 'We are here for all of your cleanup needs'},
        {id: 2, resource: 'Jack Hammer', res_description: 'Can tear up almost anything. Try it!'},
        {id: 3, resource: 'High Fashion Shoes', res_description: 'Whether for a fancy wedding or a coctail party, we have the right shoes for you!'},
      ])
    });
};
