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

// POST

async function post() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await res.json();
}

// Card projects

// Burguer Menu

// DATE FORMAT

// Contact form
