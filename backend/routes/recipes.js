// routes/recipes.js
const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/match', async (req, res) => {
  const ingredients = req.body.ingredients;

  const result = await db('recipes')
    .join('recipe_ingredients', 'recipes.id', 'recipe_ingredients.recipe_id')
    .join('ingredients', 'recipe_ingredients.ingredient_id', 'ingredients.id')
    .whereIn('ingredients.name', ingredients)
    .select('recipes.id', 'recipes.title')
    .groupBy('recipes.id');

  res.json(result);
});

module.exports = router;