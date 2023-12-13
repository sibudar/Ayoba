const express = require('express');
require('dotenv').config()
const bodyParser = require('body-parser');
const trackRoutes = require('./routes/trackRoutes');
const playlistRoutes = require('./routes/playlistRoutes');
const app = express();
const PORT = process.env.port || 3000;

app.use(bodyParser.json());


// Routes
app.use('/api', trackRoutes);
app.use('/api', playlistRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
