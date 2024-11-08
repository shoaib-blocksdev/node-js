require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to my Node.js app!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

