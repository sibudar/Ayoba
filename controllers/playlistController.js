const Playlist = require('../sequelize/models').playlist;

async function createPlaylist(req, res) {
  try {
    const { name, creator, playtime, trackList } = req.body;
    const playlist = await Playlist.create({ name, creator, playtime, trackList });
    res.status(201).json(playlist);
  } catch (error) {
    console.error('Error creating playlist:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getAllPlaylists(req, res) {
  try {
    const playlists = await Playlist.findAll();
    res.status(200).json(playlists);
  } catch (error) {
    console.error('Error getting playlists:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getPlaylistById(req, res) {
  try {
    const playlistId = req.params.id;
    const playlist = await Playlist.findByPk(playlistId);
    if (playlist) {
      res.status(200).json(playlist);
    } else {
      res.status(404).json({ error: 'Playlist not found' });
    }
  } catch (error) {
    console.error('Error getting playlist by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function updatePlaylistById(req, res) {
  try {
    const playlistId = req.params.id;
    const updatedData = req.body;
    const playlist = await Playlist.findByPk(playlistId);
    if (playlist) {
      await playlist.update(updatedData);
      res.status(200).json(playlist);
    } else {
      res.status(404).json({ error: 'Playlist not found' });
    }
  } catch (error) {
    console.error('Error updating playlist by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = { createPlaylist, getAllPlaylists, getPlaylistById, updatePlaylistById };
