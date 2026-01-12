// https://www.themealdb.com/api/json/v1/1/filter.php?i={ingredient}
// https://www.themealdb.com/api/json/v1/1/lookup.php?i={mealId}

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('serachBtn');
const recipeResult = document.getElementById('recipe-result');
const viewRecipeBtn = document.getElementsByClassName('view-recipe-btn');
const  recipeModal= document.getElementById('recipe-modal');
const closeBtn = document.getElementsByClassName('close-btn');