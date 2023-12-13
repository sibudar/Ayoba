const Track = require('../sequelize/models').track;

// validates that data exists before inserting
function validateCreateTrack(req, res, next) {
    const { name, album, artist, duration, artwork, audio } = req.body;
  
    if (!name || !album || !artist || !duration || !artwork || !audio) {
      return res.status(400).json({ error: 'All fields are required for creating a track' });
    }
  
    next();
  }
  
  async function validateCreatePlaylist(req, res, next) {
    const { name, creator, playtime, trackList } = req.body;
  
    if (!name || !creator || !playtime || !trackList) {
      return res.status(400).json({ error: 'All fields are required for creating a playlist' });
    }
  
    // Validate each track ID in the trackList
    try {
      const validTracks = await Promise.all(trackList.map(async (trackId) => {
        const track = await Track.findByPk(trackId);
        return track !== null;
      }));
  
      if (validTracks.every((isValid) => isValid)) {
        next();
      } else {
        res.status(400).json({ error: 'One or more track_id is invalid' });
      }
    } catch (error) {
      console.error('Error validating track IDs:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  
  module.exports = { validateCreateTrack, validateCreatePlaylist };
  