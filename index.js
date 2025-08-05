require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(express.json());

// =======================================================
//          DATABASE CONNECTION
// =======================================================


const mongoURI = process.env.MONGO_URI;


mongoose.connect(mongoURI)
  .then(() => {
    console.log('connection jud gaya!');
  })
  .catch((err) => {
    console.log('Connection mein ERROR hai:', err);
  });

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);


app.get('/', (req, res) => {
  res.send('Server chal raha hai!');
});

app.post('/api/register', async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      role: req.body.role
    });
    const savedUser = await newUser.save();
    res.status(201).json({ message: "User add ho gaya hai!", user: savedUser });
  } catch (error) {
    res.status(400).json({ message: "User add nhi hua", error: error.message });
  }
});

app.get('/api/admin/users', async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.json(allUsers);
  } catch (error) {
    res.status(500).json({ message: "Users ko laane mein ERROR" });
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});