const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  hexColor = getHexNumber();
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});

function getHexNumber() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    randomNum = Math.floor(Math.random() * hex.length);
    hexColor += hex[randomNum];
  }
  return hexColor;
}
