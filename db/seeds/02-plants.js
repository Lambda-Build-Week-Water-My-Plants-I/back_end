
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('plants').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('plants').insert([
        {
          nickname: 'Rose',
          species: 'Rosidopidus',
          h2o_frequency: 'Once Daily',
          user_id: 1
        },
        {
          nickname: 'Daff',
          species: 'Daffidillius',
          h2o_frequency: 'Once Daily',
          user_id: 1
        },
        {
          nickname: 'Bush',
          species: 'Busheus',
          h2o_frequency: 'Twice Monthly',
          user_id: 2
        },
        {
          nickname: 'Tree',
          species: 'Treebarkious',
          h2o_frequency: 'Once Yearly',
          user_id: 2
        }
      ]);
    });
};
