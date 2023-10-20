const express = require('express');
const cors = require('cors');
const port = 5000;

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Vehica Server is running...');
});

app.listen(port, () => {
  console.log(`Vehica Server is running on PORT: ${port}`);
});
