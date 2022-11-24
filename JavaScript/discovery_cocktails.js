/* Functions declarations */
function onLoadRandomCocktail(cocktail, position) {
  document.getElementById("img-cocktail-" + position).src =
    cocktail.strDrinkThumb;
  document.getElementById("name-" + position).innerHTML = cocktail.strDrink;
  document.getElementById("category-" + position).innerHTML =
    cocktail.strCategory;
  document.getElementById("description-" + position).href =
    "/project.html?id=" + cocktail.idDrink;
}

/*Client code*/

for (let i = 0; i < 3; i++) {
  getRandomCocktail().then((data) =>
    onLoadRandomCocktail(data.drinks[0], i + 1)
  );
}
