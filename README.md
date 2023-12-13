# Node.js Express Sequelize PostgreSQL CRUD API

This is a Node.js application with Express, Sequelize, and PostgreSQL for implementing a CRUD API for managing tracks and playlists.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js and npm: [Node.js Downloads](https://nodejs.org/en/download/)
- PostgreSQL: [PostgreSQL Downloads](https://www.postgresql.org/download/)

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/sibudar/Ayoba.git
   cd your-project

2. Install packages

```bash
npm install
```

3. Run migrations
```bash
cd sequelize
npx sequelize-cli db:migrate
```

4. Start application on the root file of the project

```bash

 npm start
```

## API ENDPOINTS

Tracks:

POST /api/tracks: Create a new track.

GET /api/tracks: Get all tracks.

GET /api/tracks/:id: Get a specific track by ID.

PUT /api/tracks/:id: Update a track by ID.

Playlists:

POST /api/playlists: Create a new playlist.

GET /api/playlists: Get all playlists.

GET /api/playlists/:id: Get a specific playlist by ID.

PUT /api/playlists/:id: Update a playlist by ID.


