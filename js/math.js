// declare program variables

// announce the program
alert("Let's do some math!");

var num1 = prompt("Please type a number");
num1 = parseFloat(num1);
var num2 = prompt("Please type another number");
num2 = parseFloat(num2);
if (isNaN(num1) && isNaN(num2)) {
  alert(
    "At least one of the values you typed is not a number. Reload and try again."
  );
} else if (num2 == 0) {
  alert("Second Number can be zero as we can't divde by zero");
} else {
  // build an HTML message
  var message = "<h1>Math with the numbers " + num1 + " and " + num2 + "</h1>";
  message += num1 + " + " + num2 + " = " + (num1 + num2);
  message += "<br>";
  message += num1 + " * " + num2 + " = " + num1 * num2;
  message += "<br>";
  message += num1 + " / " + num2 + " = " + num1 / num2;
  message += "<br>";
  message += num1 + " - " + num2 + " = " + (num1 - num2);

  // write message to web page
  document.write(message);
}