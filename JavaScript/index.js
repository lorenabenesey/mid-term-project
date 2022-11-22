//GET
async function get() {
  const res = await fetch(
    "http://makeup-api.herokuapp.com/api/v1/products.json"
  );
  const data = await res.json();
  console.log(data);
}

get();

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
  console.log(data);
}

// Promise based function
// Card projects
function obtainMakeUp() {
  const makeUpArray = [];
  data.forEach(element => {
    
  });
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Get the instruction string
      let instruction;

      // Resolve or reject the promise
      if (!instruction) {
        reject("Instruction step does not exist!");
      } else {
        resolve(instruction);
      }
    }, Math.floor(Math.random() * 1000));
  });
}

// Burguer Menu

// DATE FORMAT

window.onload = function getCurrentDate() {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${day}-${month}-${year}`;
  console.log(currentDate);
  document.getElementById("current-date").innerHTML = currentDate;
};
