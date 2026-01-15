// https://www.themealdb.com/api/json/v1/1/filter.php?i={ingredient}
// https://www.themealdb.com/api/json/v1/1/lookup.php?i={mealId}


const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('serachBtn');
const recipeResult = document.getElementById('recipe-result');
const viewRecipeBtn = document.getElementsByClassName('view-recipe-btn');
const modalBody = document.getElementById('modal-body')
const  recipeModal= document.getElementById('recipe-modal');
const closeBtn = document.querySelector('close-btn');



// ----API URLS-----

const SERCH_API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const LOOKUP_API_URL = ' https://www.themealdb.com/api/json/v1/1/lookup.php?i=';


//  ̇ADD EVENT LISTNERS
searchBtn.addEventListener('click',serachRecipesClick);
recipeResult.addEventListener('click',handleviewRecipeClick);
closeBtn.addEventListener('click',closeModel)
recipeModal.addEventListener('click',(e) => {
    if(e.target === recipeModal)
    closeModel()
});


async function serachRecipesClick() {
const ingredient = searchInput.value.trim()

// check the vale is null or not
    if (ingredient === '') {
        alert('Please Enter an Ingredient')
        return;
    }
    try {
        const respons = await fetch(`${SERCH_API_URL}${ingredient}`);
        const data = await respons.json();
       
        if (data.meals === null) {
            recipeResult.innerHTML = `<p> No recipe found.Try another ingredint!</P>`
        } else {
            displayRecipe(data.meals)
        }

    } catch (error) {
      console.error('faild tom fetch recipes:',error);
      recipeResult.innerHTML = `<p> There was an error fetching recipes.Please try agin!`  
    }
}


// Display Recipes Function

function displayRecipe(meals){
recipeResult.innerHTML = '';
meals.map(meal => {
    
    const recipeCard = document.createElement('div')
    console.log(meal)
    recipeCard.className = 'recipe-card';
    recipeCard.innerHTML = `<img src = "${meal.strMealThumb}" alt = "${meal.strMeal}">
    <h3>${meal.strMeal}</h3>
    <button class = "view-recipe-btn" data-meal-id="${meal.idMeal}">View Recipe</button>`;
    recipeResult.appendChild(recipeCard);
})
}



 function handleviewRecipeClick(event){
  try {
    
      if (event.target.classList.contains('view-recipe-btn')) {
           const mealId = event.target.getAttribute('data-meal-id');
          getRecipeDetails(mealId);
       }
  } catch (error) {
    console.error
  }
}

 

async function getRecipeDetails(mealId){
    try{
        const response = await fetch(`${LOOKUP_API_URL}${mealId}`);
        const data = await response.json();
     const meal = data.meals[0];
     displayRecipeDeatails(meal)
    }
    catch(error){
console.log(error)
    }
}

function displayRecipeDeatails(meals){
    let ingredientHTML = '<ul>'
    for (let i=1; i<= 20; i++) {
        const ingredient = meals[`strIngredient${i}`];
        const measure = meals[`strMeasure${i}`];
        if (ingredient && ingredient.trim() !=='') {
            ingredientHTML +=`<li> ${measure}${ingredient}</li>`
        }
        else{
            break;
        }

    }
ingredientHTML += `</ul>`;


modalBody.innerHTML = `
<h2> ${meals.strMeal} </h2>
<img src= "${meals.strMealThumb} alt ="${meals.strMeal}">
<h3> Ingredients:</h3>
<p>${meals.strInstructions} </p>`;

recipeModal.style.display ='block';

function closeModel() {
    recipeModal.style.display = 'none';
}
}





 