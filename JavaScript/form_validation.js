// Contact form

function nameIsValid() {
  const nameEl = document.getElementById("name").value;
  if (nameEl == null || nameEl == "") {
    alert("Name can't be blank");
    return false;
  } else if (nameEl.length < 3) {
    alert("Name must be at least 3 characters long.");
    return false;
  } else if (nameEl.trim().indexOf(" ") == -1) {
    alert("Please type your full name and surname");
    return false;
  } else {
    return true;
  }
}

function emailIsValid() {
  const emailEl = document.getElementById("email").value;
  if (emailEl == null || emailEl == "") {
    alert("Email can't be blank");
    return false;
  } else if (validateEmailFormat(emailEl) == false) {
    alert("Please type your email correctly");
    return false;
  } else {
    return true;
  }
}

function phoneIsValid() {
  const phoneEl = document.getElementById("number").value;
  if (phoneEl == null || phoneEl == "") {
    alert("Phone number can't be blank");
    return false;
  } else if (phoneEl.length < 9) {
    alert("Phone number must be at least 9 numbers long.");
    return false;
  } else {
    return true;
  }
}

function messageIsValid() {
  const messageEl = document.getElementById("message").value;
  if (messageEl == null || messageEl == "") {
    alert("Message is required");
    return false;
  } else {
    return true;
  }
}

// Utility functions

function validateEmailFormat(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

//Client code

function validateForm() {
  if (nameIsValid() == false) {
    console.log("Name is not valid");
    return false;
  } else if (emailIsValid() == false) {
    console.log("Email is not valid");
    return false;
  } else if (phoneIsValid() == false) {
    console.log("Phone is not valid");
    return false;
  } else if (messageIsValid() == false) {
    console.log("Your message is not valid");
    return false;
  } else {
    alert("Form is valid");
    return true;
  }
}

document.getElementById("contact-form").onsubmit = function () {
  validateForm();
  return false;
};
