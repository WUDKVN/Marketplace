const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('./routes/product.routes')(app);


const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/Marketplace', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to DressStore application.' });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
