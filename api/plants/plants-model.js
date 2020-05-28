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

// async function add(plant, id) {
//   plant.user_id = id;
//
//   return db('plants')
//     .insert(plant)
//     .select('plant_id', 'nickname', 'species', 'h2o_frequency');
// }

async function add(plant, id) {
  plant.user_id = id;
  const [plantid] = await db('plants').insert(plant, 'id');

  return findById(plantid);
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
