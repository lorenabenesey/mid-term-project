//GET
async function getRandomCocktail() {
  const res = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/random.php"
  );
  const data = await res.json();
  return data;
}

async function getCocktailById(id) {
  const res = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id
  );
  const data = await res.json();
  return data;
}

// Burguer Menu

// Contact form
