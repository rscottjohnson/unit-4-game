// Create a variable for the target number to be guessed
var targetNumber = 50;

// FROM THE CRYSTAL EXAMPLE, EDIT THIS LATER...
// Here we set the "number-to-guess" header to match the "targetNumber".
// Eventually this will allow us to change the HTML to match the value in the JavaScript.
$("#number-to-guess").text(targetNumber);

// Create a variable for the counter that tracks the user's total.  We'll increment this each click.
var counter = 0;

// var numberOptions = [10, 5, 3, 1];
var numberOptions = [];
var arraySize = 4;

// Create an array of randomly generated unique values to serve as the number options
// to be assigned to each crystal

while (numberOptions.length < arraySize) {
  var random = Math.floor(Math.random() * 15) + 1;
  if (numberOptions.indexOf(random) == -1) {
    numberOptions.push(random);
  }
}


// for (var i = 0; i < arraySize; i++) {
//   var random = Math.floor(Math.random() * 15) + 1;
//   if (numberOptions[i] != random) {
//     numberOptions.push(random);
//   }
//   else {
//     numberOptions.push(random - 1);
//   }
// }

console.log(numberOptions);

// Give each crystal a different data value
var imageCrystal1 = $("#crystal1");
imageCrystal1.attr("dataCrystalValue", numberOptions[0]);

console.log(imageCrystal1.dataCrystalValue);




// Set an on-click event that responds to button clicks of crystal1.
$("#crystals").on("click", ".crystal-image", function () {
  counter += 10;
  alert("Your new score is: " + counter);

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  // We then add the crystalValue to the user's "counter" which is a global variable.
  // Every click, from every crystal adds to the global counter.
  counter += crystalValue;

  // Check if the click counter matches the targetNumber.
  // This click event will be triggered with each click.
  // If the numbers match user wins, else if the counter exceeds the target number the user loses.
  if (counter === targetNumber) {
    alert("You win!");
  } else if (counter >= targetNumber) {
    alert("You lose!!");
  }
});



// Each imageCrystal will be given a data attribute called data-crystalValue.
// This data attribute will be set equal to the array value.
// imageCrystal.attr("data-crystalvalue", numberOptions[i]);