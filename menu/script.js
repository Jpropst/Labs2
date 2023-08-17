const menuButton = document.querySelector("#menu-button");
const menuContent = document.querySelector("#menu-content"); // takes two arguments every time, first one is event type as a string
menuButton.addEventListener("click", () => {
  event.preventDefault();
  menuContent.classList.toggle("hidden");
});
// menuButton.addEventListner("click", myFunction); named arrow function

const showLettersLink = document.querySelector("#show-letters");
const showNumsLink = document.querySelector("#show-nums");
const lettersContent = document.querySelector("#letters-content");
const numsContent = document.querySelector("#nums-content");

showLettersLink.addEventListener("click", () => {
  event.preventDefault();
  lettersContent.classList.remove("hidden");
  numsContent.classList.add("hidden");
});
showNumsLink.addEventListener("click", () => {
  event.preventDefault();
  numsContent.classList.remove("hidden");
  lettersContent.classList.add("hidden");
});

// const lettersLink = document.querySelector("#show-letters");
// lettersLink.addEventListner("click", () => {
//   lettersContent.classList.remove("hidden");
//   numsContent.classList.add("hidden");
// });

// const numsLink = document.querySelector("#show-nums");
// numsLink.addEventListener("click", () => {
//   numsContent.classList.remove("hidden");
//   lettersContent.classList.add("hidden");
// });
