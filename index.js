require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


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
  res.send('Server is running!');
});



app.post('/api/register', async (req, res) => {
  try {
    const { name, email, role } = req.body;


    if (!name || !email || !role) {
      return res.status(400).json({ message: "Incomplete form. Please provide name, email, and role." });
    }


    const newUser = new User({
      name, 
      email,
      role
    });

    const savedUser = await newUser.save();
    res.status(201).json({ message: "User registered successfully!", user: savedUser });

  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "This email is already registered. Please use a different email." });
    }

    res.status(500).json({ message: "An error occurred on the server.", error: error.message });
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