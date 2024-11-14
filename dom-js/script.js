
let fontSize = 16;
document.getElementById("increase").addEventListener("click", function() {
  fontSize += 2;
  document.getElementById("text").style.fontSize = fontSize + "px";
});

document.getElementById("decrease").addEventListener("click", function() {
  fontSize -= 2;
  document.getElementById("text").style.fontSize = fontSize + "px";
});


document.getElementById("applyColor").addEventListener("click", function() {
  const color = document.getElementById("colorInput").value;
  document.getElementById("text").style.color = color;
});