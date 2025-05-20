exports.up = function(knex) {
    return knex.schema
      .createTable('recipes', table => {
        table.increments('id');
        table.string('title');
        table.text('instructions');
      })
      .createTable('ingredients', table => {
        table.increments('id');
        table.string('name').unique();
      })
      .createTable('recipe_ingredients', table => {
        table.integer('recipe_id').references('id').inTable('recipes');
        table.integer('ingredient_id').references('id').inTable('ingredients');
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTable('recipe_ingredients')
      .dropTable('ingredients')
      .dropTable('recipes');
  };