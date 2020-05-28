
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'devin44g', password: 'password', phone_number: "2222222222"},
        {username: 'scoobydoo', password: 'scoobs', phone_number: "3333333333"}
      ]);
    });
};
