import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [input, setInput] = useState('');
  const [recipes, setRecipes] = useState([]);

  
  const addIngredient = () => {
    setIngredients([...ingredients, input]);
    setInput('');
  };

  const fetchRecipes = async () => {
    const res = await axios.post('http://localhost:3001/recipes/match', { ingredients });
    setRecipes(res.data);
  };

  return (
    <div>
      <h1>Recipe Matcher</h1>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={addIngredient}>Add</button>
      <button onClick={fetchRecipes}>Find Recipes</button>
      <ul>
        {recipes.map((r, i) => (
          <li key={i}>{r.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;