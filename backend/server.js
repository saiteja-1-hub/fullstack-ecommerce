const express = require('express');
const cors = require('cors');

const productsRoutes = require('./routes/productsRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/products', productsRoutes);

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})