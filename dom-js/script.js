
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


function calculate(operation) {
  // İstifadəçi tərəfindən daxil edilən dəyərlər
  const value1 = parseFloat(prompt("Enter first value:"));
  const value2 = parseFloat(prompt("Enter second value:"));
  
  // Əgər daxil edilən dəyərlər keçərli deyilsə
  if (isNaN(value1) || isNaN(value2)) {
      alert('Please enter valid numbers!');
      return;
  }


  let result;
  switch (operation) {
      case 'add':
          result = value1 + value2;
          break;
      case 'subtract':
          result = value1 - value2;
          break;
      case 'multiply':
          result = value1 * value2;
          break;
      case 'divide':
          if (value2 === 0) {
              alert('Division by zero is not allowed!');
              return;
          }
          result = value1 / value2;
          break;
      default:
          alert('Invalid operation');
          return;
  }
  

  alert(`The result is: ${result}`);
}


console.log("Addition");
calculate('add');

console.log("Subtraction");
calculate('subtract'); 

console.log("Multiplication");
calculate('multiply');

console.log("Division");
calculate('divide'); 