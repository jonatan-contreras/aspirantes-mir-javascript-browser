document.addEventListener("DOMContentLoaded", function () {
  const nameForm = document.getElementById("name-form");
  const nameInput = document.getElementById("name-input");
  const emailInput = document.getElementById("email-input");
  const nameSection = document.getElementById("name-section");
  const nameText = document.getElementById("name-text");
  const emailText = document.getElementById("email-text");
  const deleteButton = document.getElementById("delete-button");

  if (localStorage.getItem("userData")) {
    const userData = JSON.parse(localStorage.getItem("userData"));
    nameText.textContent = userData.name;
    emailText.textContent = userData.email;
  } else {
    nameText.textContent = "No hay datos";
    emailText.textContent = "";
  }

  nameForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value;
    const email = emailInput.value;

    if (name && email) {
      const userData = {
        name: name,
        email: email,
      };

      localStorage.setItem("userData", JSON.stringify(userData));

      nameText.textContent = userData.name;
      emailText.textContent = userData.email;

      nameInput.value = "";
      emailInput.value = "";
    }
  });

  deleteButton.addEventListener("click", function () {
    localStorage.removeItem("userData");

    nameText.textContent = "No hay datos";
    emailText.textContent = "";
  });
});
