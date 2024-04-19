"use strict";

const validateForm = (event) => {
  event.preventDefault();

  let emailValue = document.getElementById("emailInput").value;
  let reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  let result = reg.test(emailValue);

  if (result == false) {
    console.log("failure");
    document.getElementById("feedback").style.display = "block";

    document.getElementById("emailInput").style.borderColor =
      "hsl(4, 100%, 67%)";
    document.getElementById("emailInput").style.backgroundColor =
      "hsla(4, 100%, 67%, .2)";
    document.getElementById("emailInput").style.color = "hsl(4, 100%, 67%)";
  } else {
    let myModal = new bootstrap.Modal(document.getElementById("modal"), {});
    myModal.show();
    document.getElementById("emailInput").value = "";
  }
};
