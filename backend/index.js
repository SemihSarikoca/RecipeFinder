const express = require('express');
const cors = require('cors');
const app = express();
const recipesRouter = require('./routes/recipes');

app.use(cors());
app.use(express.json());

app.use('/recipes', recipesRouter);

app.listen(3001, () => {
  console.log('Backend server running on http://localhost:3001');
});