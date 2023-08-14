const main = () => {
  // event.preventDefault();
  const growMe = document.getElementById("grow-me"); // retrieves HTML element with the `id` tag "grow-me" & the reference is stored in this variable now. getElementById method used to select an element based on its unique `id`
  growMe.classList.add("big"); // classList property used to access the classes of an HTML element, .add method adds the `big` class to the element's class list

  const shrinkMe = document.getElementById("shrink-me");
  shrinkMe.classList.remove("big");

  const listItems = document.querySelectorAll("li");
  listItems.forEach((item) => {
    console.log(item.textContent);
  });

  const link = document.querySelector(".link"); // querrying by class it needs to be dot link, querySelector method used to select element based on the provided selector()
  link.href = "https://www.example.com"; // targets and changes href link from HTML to this
  link.text = "somewhere"; // targets the text of href and changes it

  const hideMe = document.getElementById("hide-me");
  hideMe.style.display = "none";

  const showMe = document.getElementById("show-me");
  showMe.style.display = "block"; // changes the display to a block level element

  const nameInput = document.getElementById("name");
  const userName = nameInput.value;
  nameInput.value = "";
  // window.location.reload();

  const welcomeHeading = document.querySelector("h1"); // use querySelector because it is targeting the `input id` element
  welcomeHeading.textContent = `Welcome ${userName}!`;
};
