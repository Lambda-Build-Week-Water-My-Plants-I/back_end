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

module.exports = router;
