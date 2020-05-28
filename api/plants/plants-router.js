const router = require('express').Router();
const Plants = require('./plants-model.js');

router.get('/', (req, res) => {
  console.log(req.decodedToken);
  Plants.find()
    .then(plants => {
      res.status(200).json(plants);
    })
    .catch(err => {
      res.status(500).json({ err: "Error retrieving plants" });
    });
});
router.get('/mine', (req, res) => {
  const id = req.decodedToken.id;

  Plants.findByUser(id)
    .then(plant => {
      console.log(plant);
      res.status(200).json(plant);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Could not retrieve your plants" });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Plants.findById(id)
    .then(plant => {
      console.log('plant', plant.id);
      if(plant.id) {
        res.status(200).json(plant);
      } else {
        res.status(404).json({ notFound: "Plant with that I.D. could not be found" });
      }
    })
    .catch(err => {
      res.status(500).json({ err: "Could not get plant by I.D." });
    });
});

router.post('/', (req, res) => {
  console.log(req.decodedToken);
  const added = req.body;
  const id = req.decodedToken.id;
  Plants.add(added, id)
    .then(plant => {
      if(plant) {
        res.status(201).json(plant);
      } else {
        res.status(400).json({ message: "Plant could not be added" });
      }
    })
    .catch(err => {
      console.log('Plant add err', err);
      res.status(500).json({ err: "Error adding plant" });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  Plants.update(id, changes)
    .then(plant => {
      if(plant) {
        res.status(201).json(plant);
      } else {
        res.status(500).json({ err: "Could not update plant" });
      }
    })
    .catch(err => {
      console.log('error', err);
      res.status(500).json({ err: "There was an error updating plant" });
    });
});

router.delete('/:id', (req, res) => {
  Plants.removePlant(req.params.id)
    .then(count => {
      if(count > 0) {
        res.status(200).json({ message: "Plant has been successfully removed" });
      } else {
        res.status(404).json({ err: "This plant was not found" });
      }
    })
    .catch(err => {
      res.status(500).json({ err: "There was an error deleting this plant", err });
    });
});

// BACKUP GET USERS PLANT BY USER ID:



module.exports = router;
