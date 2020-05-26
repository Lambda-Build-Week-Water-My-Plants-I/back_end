const db = require('../../db/dbConfig.js');
require('dotenv').config();

module.exports = {
  find,
  findBy,
  findById,
  add,
  update,
  removeUser,
  getUsersPlants
};

function find() {
  return db('users').select('id', 'username', 'phone_number');
}

function findBy(filter) {
  return db('users').where(filter);
}

function findById(id) {
  return db('users')
    .where({ id })
    .first()
    .select('id', 'username', 'phone_number');
}

async function add(user) {
  const [id] = await db('users').insert(user, 'id');

  return findById(id);
}

function update(id, changes) {
  return db('users')
    .where({ id })
    .update(changes)
    .then(count => {
      return count > 0 ? this.findById(id) : null;
    });
}

function removeUser (id) {
    return db('users')
    .where({ id })
    .delete();
}

function getUsersPlants(id) {
    return db('plants')
    .join('users', 'plants.user_id', 'users.id')
    .select('plants.id', 'plants.nickname', 'plants.species', 'plants.h2o_frequency', 'plants.user_id')
    .where({'user_id' : id})
    .then(plants => {
        if(plants) {
          return plants;
        } else {
            return null;
        }
    });
}
