console.log("Server is starting...");
let express, cors, mongoose, bodyParser, bcrypt, jwt, dotenv;

try {
  express = require('express');
  console.log("Express module loaded.");
  cors = require('cors');
  mongoose = require('mongoose');
  bodyParser = require('body-parser');
  bcrypt = require('bcrypt');
  jwt = require('jsonwebtoken');
  dotenv = require('dotenv');
  dotenv.config();
  console.log("Environment variables loaded.");
} catch (err) {
  console.error("Error loading modules:", err);
  process.exit(1);
}

const app = express();

const db = require('./database/db');
const DBdata = require('./server/DBdata');
const ProductData = require('./server/ProductData');
const BoutiqueRouter = require('./server/routes/BoutiqueRoutes');
const authRoutes = require('./server/routes/auth');

console.log("Middleware setup started.");
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb+srv://firstcry:FIRSTCRY@cluster0.y1zmikx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(`Error connecting to MongoDB:`, err);
    process.exit(1);
  }
}

connectToDatabase();

DBdata();
console.log("Routes setup started.");
app.use('/api/auth', authRoutes);
app.use('/api/boutiques', BoutiqueRouter);

app.post('/', async (req, res) => {
  try {
     ///const products = await ProductData.find();
    // if (!products) {
       return res.status(404).json({ error: 'No products found' });
    // }
    console.log('Data fetched.');
    res.status(200).json(products);
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});

