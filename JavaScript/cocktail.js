/* Functions declarations */
function getCurrentDate() {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${day}-${month}-${year}`;
  document.getElementById("current-date").innerHTML = currentDate;
}

function onLoadCocktailbyId(cocktail) {
  document.getElementById("nameCocktail").innerHTML = cocktail.strDrink;
  document.getElementById("subtitle-cocktail").innerHTML = cocktail.strCategory;
  document.getElementById("cocktail-img").src = cocktail.strDrinkThumb;
  document.getElementById("cocktail-text").innerHTML = cocktail.strInstructions;
}

/*Client code*/

window.onload = getCurrentDate;

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
getCocktailById(id).then((data) => onLoadCocktailbyId(data.drinks[0]));
