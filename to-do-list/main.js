const submitBtn = document.querySelector(".button");
const formInput = document.querySelector("#formInput");
const resultDiv = document.querySelector("#result");

submitBtn.addEventListener("click", () => {
  const userValue = formInput.value;
  console.log(`The user's value is: ${userValue}`);

  const displayElement = document.createElement("p");
  displayElement.textContent = `⚫${userValue}`;

  resultDiv.appendChild(displayElement);

  displayElement.addEventListener("click", () => {
    displayElement.classList.toggle("no-strike");
  });

  // Clear the input field
  formInput.value = "";
});

formInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    submitBtn.click();
  }
});
