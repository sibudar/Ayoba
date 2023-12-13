const express = require('express');
const playlistController = require('../controllers/playlistController');
const { validateCreatePlaylist } = require('../helpers/validateCreation');
const router = express.Router();

router.post('/playlists', validateCreatePlaylist, playlistController.createPlaylist);
router.get('/playlists', playlistController.getAllPlaylists);
router.get('/playlists/:id', playlistController.getPlaylistById);
router.put('/playlists/:id', playlistController.updatePlaylistById);

module.exports = router;