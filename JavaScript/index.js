//GET
async function getProducts() {
  const res = await fetch(
    "https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=vegan"
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

// Promise based function
// Card projects
/*function obtainMakeUp() {
  const makeUpArray = [];
  data.forEach((element) => {});
}
Math.floor(Math.random() * 1000);*/

// Burguer Menu

// DATE FORMAT

// Contact form
