const db = require('../../db/dbConfig.js');


module.exports = {
  find,
  findById,
  add,
  update,
  removePlant
};

function find() {
  return db('plants').select('*');
}

function findById(id) {
  return db('plants')
    .where({ id })
    .first()
    .select('*');
}

async function add(plant, id) {
  plant.user_id = id;

  return db('plants')
    .insert(plant)
    .select('id', 'nickname', 'species', 'h2o_frequency');
}

function update(id, changes) {
  return db('plants')
    .where({ id })
    .update(changes)
    .then(count => {
      return count > 0 ? this.findById(id) : null;
    });
}

function removePlant(id) {
  return db('plants')
  .where({ id })
  .delete();
}
