const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
// Create Express app
const app = express();

// Middleware for parsing JSON and urlencoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to my Express app!');
});

// Error handling
app.use((err, req, res, next) => {
  res.status(500).send('Something broke!');
});
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', err => {
  console.error(err);
  process.exit(1);
});
db.once('open', async () => {
  console.log('Mongo connection started on ' + db.host + ':' + db.port);
});
// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
module.exports = app;
