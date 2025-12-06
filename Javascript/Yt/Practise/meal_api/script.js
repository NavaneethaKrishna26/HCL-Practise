function search() {
  const query = document.getElementById("search-input").value.trim();
  if (!query) {
    document.getElementById("message").textContent =
      "Please enter a valid value";
    return;
  }
  fetchmeals(query);
}
async function fetchmeals(query) {
  try {
    document.getElementById("message").textContent = "Loading...";
    document.getElementById("meals-container").innerHTML = "";
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(
        query
      )}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch meals");
    }
    const data = await response.json();
    console.log(data);
    if (!data.meals) {
      document.getElementById("message").textContent = "No meals found!";
      return;
    }
    document.getElementById("message").textContent = "";
    renderMeals(data.meals);
  } catch (error) {
    console.log(error);
    document.getElementById("message").textContent = "Something went wrong";
  }
}
const mealscontainer = document.getElementById("meals-container");

let leastIngrediantMeal;
let max = 10000;
function renderMeals(meals) {
  meals.forEach((meal) => {
    let currentmealIngrediantcount = countIngrediant(meal);
    if (currentmealIngrediantcount < max) {
      leastIngrediantMeal = meal;
      max=currentmealIngrediantcount;
    }
  });
  createfinalmeal(leastIngrediantMeal);
}
function createfinalmeal(meal) {
  mealscontainer.innerHTML = "";
  const mealdiv = document.createElement("div");
  mealdiv.classList.add("meal-card");
  mealdiv.innerHTML = `
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
      <h3>${meal.strMeal}</h3>
      <p>${meal.strCategory || ""} • ${meal.strArea || ""}</p>
      ${
        meal.strSource || meal.strYoutube
          ? `<a href="${
              meal.strSource || meal.strYoutube
            }" target="_blank">View Recipe</a>`
          : ""
      }
      <p>${meal.idMeal}</p>
    `;
  mealscontainer.appendChild(mealdiv);
}





function countIngrediant(meal) {
  let count = 0;
  for (let i = 0; i <= 20; i++) {
    let key = `strIngredient${i}`;
    let value = meal[key];
    if (value && value.trim() != "") {
      count++;
    }
  }
  return count;
}
