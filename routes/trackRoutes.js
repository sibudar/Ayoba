const express = require('express');
const trackController = require('../controllers/trackController');
const { validateCreateTrack } = require('../helpers/validateCreation');
const router = express.Router();

router.post('/tracks', validateCreateTrack ,trackController.createTrack);
router.get('/tracks', trackController.getAllTracks);
router.get('/tracks/:id', trackController.getTrackById);
router.put('/tracks/:id', trackController.updateTrackById);

module.exports = router;
