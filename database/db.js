const mongoose = require('mongoose');
require('dotenv').config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const cluster = process.env.DB_CLUSTER;
const dbname = process.env.DB_NAME;

const mongoURL = `mongodb+srv://firstcry:FIRSTCRY@cluster0.y1zmikx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('connected', () => {
  console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
  console.log('MongoDB connection error', err);
});

db.on('disconnected', () => {
  console.log('Disconnected from MongoDB server');
});

module.exports = db;
