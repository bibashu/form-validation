let nameError = document.getElementById("name-error");
let EmailError = document.getElementById("email-error");
let phoneError = document.getElementById("phone-error");
let submitError = document.getElementById("submit-error");
let messageError = document.getElementById("message-error");
let button = document.getElementById("btn1");

// console.log(submitError)

function validateName() {
  // retourne la valeurde l'input
  let name = document.getElementById("contact-name").value;
  if (name.length == 0) {
    nameError.innerHTML = "obligatoire";

    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Nom incomplete";

    return false;
  }

  nameError.innerHTML = '<i class="fa fa-check-circle"></i>';

  return True;
}
function validatePhone() {
  let phone = document.getElementById("contact-phone").value;
  if (phone.length == 0) {
    phoneError.innerHTML = "Numero requise";
    return false;
  }
  if (phone.length !== 9) {
    phoneError.innerHTML = "Le numero doit avoir 10 chiffres";
    return false;
  }
  if (!phone.match(/^[0-9]{9}$/)) {
    phoneError.innerHTML = "Le numero erroné";
    return false;
  }
  phoneError.innerHTML = '<i class="fa fa-check-circle"></i>';
  return True;
}
function validateEmail() {
  let email = document.getElementById("contact-email").value;
  if (email.length == 0) {
    phoneError.innerHTML = "Email requise";
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    EmailError.innerHTML = "Email invalide";
    return false;
  }
  EmailError.innerHTML = '<i class="fa fa-check-circle"></i>';
  return True;
}
function validateMessage() {
  let message = document.getElementById("contact-message").value;
  let requise = 10;
  let reste = requise - message.length;

  if (reste > 0) {
    messageError.innerHTML = reste + " caractére restants";
    return false;
  }
  messageError.innerHTML = '<i class="fa fa-check-circle"></i>';
  return True;
}
function validateForm() {
  if (!validateName() || !validateEmail() || !validateMessage) {
    submitError.style.display = "block";

    submitError.innerHTML = "Champ(s) incomplet(s)";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);

    return false;
  }
}
