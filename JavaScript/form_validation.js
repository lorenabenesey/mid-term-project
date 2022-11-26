// Contact form

/* Functions declarations */

const nameEl = document.getElementById("name");
const emailEl = document.getElementById("email");
const phoneEl = document.getElementById("number");
const messageEl = document.getElementById("message");
const form = document.getElementById("contact-form");

// Utility functions

const isEmailValid = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const isRequired = (value) => (value === "" ? false : true);
const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

function validateform(name, email, number, message) {
  const nameEl = document.getElementById("name");
  const emailEl = document.getElementById("email");
  const phoneEl = document.getElementById("number");
  const messageEl = document.getElementById("message");
  const form = document.getElementById("contact-form");
  if (name == null || name == "") {
    alert("Name can't be blank");
    return false;
  } else if (nameEl.length < 3) {
    alert("Name must be at least 3 characters long.");
    return false;
  }
}

//Client code
