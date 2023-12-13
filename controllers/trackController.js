const Track = require('../sequelize/models').track;

async function createTrack(req, res) {
  try {
    const { name, album, artist, duration, artwork, audio } = req.body;
    const track = await Track.create({ name, album, artist, duration, artwork, audio });
    res.status(201).json(track);
  } catch (error) {
    console.error('Error creating track:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getAllTracks(req, res) {
  try {
    const tracks = await Track.findAll();
    res.status(200).json(tracks);
  } catch (error) {
    console.error('Error getting tracks:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getTrackById(req, res) {
  try {
    const trackId = req.params.id;
    const track = await Track.findByPk(trackId);
    if (track) {
      res.status(200).json(track);
    } else {
      res.status(404).json({ error: 'Track not found' });
    }
  } catch (error) {
    console.error('Error getting track by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function updateTrackById(req, res) {
  try {
    const trackId = req.params.id;
    const updatedData = req.body;
    const track = await Track.findByPk(trackId);
    if (track) {
      await track.update(updatedData);
      res.status(200).json(track);
    } else {
      res.status(404).json({ error: 'Track not found' });
    }
  } catch (error) {
    console.error('Error updating track by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = { createTrack, getAllTracks, getTrackById, updateTrackById };
