function countRabbits() {
  for (let i = 1; i <= 3; i++) {
    alert("Кролик номер " + i);
  }
}
elem.onclick = function () {
  alert("клик!");
};

function changeBack(color) {
  document.body.style.background = color;
}