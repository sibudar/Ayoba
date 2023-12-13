'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class playlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.track, { through: 'playlistTracks' });
    }
  }
  playlist.init({
    name: DataTypes.STRING,
    creator: DataTypes.STRING,
    playtime: DataTypes.STRING,
    trackList: {
      type: DataTypes.ARRAY(DataTypes.INTEGER), // Assuming track IDs are used
    },
  }, {
    sequelize,
    modelName: 'playlist',
  });
  return playlist;
};

