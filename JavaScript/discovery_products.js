/* Functions declarations */
function onLoadProducts(products) {
  const product1 = chooseProductRandomly(products);
  const product2 = chooseProductRandomly(products);
  const product3 = chooseProductRandomly(products);

  document.getElementById("img-product-1").src = product1.api_featured_image;
  document.getElementById("img-product-2").src = product2.api_featured_image;
  document.getElementById("img-product-3").src = product3.api_featured_image;

  document.getElementById("brand-1").innerHTML = product1.brand.toUpperCase();
  document.getElementById("brand-2").innerHTML = product2.brand.toUpperCase();
  document.getElementById("brand-3").innerHTML = product3.brand.toUpperCase();

  document.getElementById("name-1").innerHTML =
    product1.name.charAt(0).toUpperCase() + string.slice(1);
  document.getElementById("name-2").innerHTML = product2.name;
  document.getElementById("name-3").innerHTML = product3.name.toUpperCase();
}

function chooseProductRandomly(products) {
  const random = Math.floor(Math.random() * products.length);
  const product = products[random];
  return product;
}

/*Client code*/
/* Product-1*/

/*document.getElementById("").innerHTML = currentDate;
  document.getElementById("").innerHTML = currentDate;*/

/* Product-2*/

/*document.getElementById("").innerHTML = currentDate;
  document.getElementById("").innerHTML = currentDate;*/

/* Product-3*/

/*document.getElementById("current-date").innerHTML = currentDate;
  document.getElementById("current-date").innerHTML = currentDate;*/

getProducts().then((data) => onLoadProducts(data));
