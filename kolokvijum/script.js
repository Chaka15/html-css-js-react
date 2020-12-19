const baseStrings = {
  firstName: document.querySelector("#fname"),
  lastName: document.querySelector("#lname"),
  dropdowns: document.querySelectorAll(".dropdown"),
  day: document.querySelector(".select-day"),
  month: document.querySelector(".select-month"),
  birthAge: document.querySelector(".select-birth-age"),
  age: document.querySelector("#age"),
  mail: document.querySelector("#mail"),
  passwordField: document.querySelector("#pass"),
  checkboxes: document.querySelectorAll(".checkbox"),
  submitButton: document.querySelector("#submit"),
};

//First name functionallity
let validFirstName;
baseStrings.firstName.addEventListener("input", (e) => {
  if (
    baseStrings.firstName.value.search(/[0-9]/) == -1 &&
    (baseStrings.firstName.value.search(/[a-z]/) > -1 ||
      baseStrings.firstName.value.search(/[A-Z]/) > -1)
  ) {
    validFirstName = e.target.value;
  }
});

//Last name functionallity
let validLastName;
baseStrings.lastName.addEventListener("input", (e) => {
  if (
    baseStrings.lastName.value.search(/[0-9]/) == -1 &&
    (baseStrings.lastName.value.search(/[a-z]/) > -1 ||
      baseStrings.lastName.value.search(/[A-Z]/) > -1)
  ) {
    validLastName = e.target.value;
  }
});

//Age functionallity
let validAge;
baseStrings.dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("change", (e) => {
    const age = new Date().getFullYear() - baseStrings.dropdowns[2].value;
    if (
      baseStrings.dropdowns[0].value &&
      baseStrings.dropdowns[1].value &&
      baseStrings.dropdowns[2].value
    ) {
      baseStrings.age.value = age;
      validAge = true;
    } else {
      baseStrings.age.value = "Greska u datumu!";
      validAge = false;
    }
  });
});

//Mail functionallity
let validMail;
baseStrings.mail.addEventListener("input", (e) => {
  validMail = e.target.value;
});

//Password functionallity
let validPassword;
baseStrings.passwordField.addEventListener("input", (e) => {
  if (
    baseStrings.passwordField.value.length -
      baseStrings.passwordField.value.replace(/[A-Z]/g, "").length >
      2 &&
    baseStrings.passwordField.value.length -
      baseStrings.passwordField.value.replace(/[0-9]/g, "").length >
      2 &&
    baseStrings.passwordField.value.search(/[A-Z]/) > -1 &&
    baseStrings.passwordField.value.search(
      /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
    ) > -1
  ) {
    validPassword = true;
    console.log("good pass");
  } else {
    validPassword = false;
    console.log("invalid pass");
  }
});

//Checkboxes functionallity
baseStrings.checkboxes.forEach((box) => {
  box.addEventListener("change", () => {
    if (baseStrings.checkboxes[0].checked) {
      baseStrings.checkboxes[1].disabled = true;
    } else if (!baseStrings.checkboxes[0].checked) {
      baseStrings.checkboxes[1].disabled = false;
    }
    if (baseStrings.checkboxes[1].checked) {
      baseStrings.checkboxes[0].disabled = true;
    } else if (!baseStrings.checkboxes[1].checked) {
      baseStrings.checkboxes[0].disabled = false;
    }
  });
});

//Submit button functionallity
baseStrings.submitButton.addEventListener("click", () => {
  if (
    validFirstName &&
    validLastName &&
    validAge &&
    validMail &&
    validPassword &&
    (baseStrings.checkboxes[0].checked || baseStrings.checkboxes[1].checked)
  ) {
    let newWindow = window.open("", "", "width=500px,height=500px");
    newWindow.document.write("<p>Uspesno ste uneli podatke.</p>");
  }
});
