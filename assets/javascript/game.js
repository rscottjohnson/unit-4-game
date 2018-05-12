// The random number shown at the start of the game should be between 19 - 120.
// Create variables for this min / max range
var targetMax = 120;
var targetMin = 19;

// Create a variable for the random target number
var targetNumber = Math.floor(Math.random() * targetMax) + targetMin;

// Set the number to guess id to display the target number
$("#numberToGuess").text(targetNumber);

// Create a variable for the counter that tracks the user's total
var counter = 0;

// Set the user's score id to display the counter
$("#userScore").text(counter);

// Each crystal should have a random hidden value between 1 - 12.
// Create variables for this min / max range
var numOptionMax = 12;
var numOptionMin = 1;
var numberOptions = [];
var arraySize = 4;

// Create variables for the user's wins and losses
var wins = 0;
$("#wins").text(wins);
var losses = 0;
$("#losses").text(losses);

// Set the statement
var statement = "Select a crystal to update your score";
$("#statement").text(statement);


// Create an array of randomly generated unique values between
// the max and min number to serve as the number options to be
// assigned to each crystal image
while (numberOptions.length < arraySize) {
  var random = Math.floor(Math.random() * numOptionMax) + numOptionMin;
  if (numberOptions.indexOf(random) == -1) {
    numberOptions.push(random);
  }
}

console.log(numberOptions);

// Create an image array where each index is equal to the folder
// path of the images in the image folder
var imgArray = ["assets/images/crystal1.jpg", "assets/images/crystal2.jpg", "assets/images/crystal3.jpg", "assets/images/crystal4.jpg"]

// Set the src equal to the image array index for each of the four images
// and append these images into the image row.  Also, during the loop, 
// create the numValue attribute and set it to the numberOptions[i] index.

var imgRow = $(".imgRow");

for (var i = 0; i < arraySize; i++) {
  var imgCrystal = $("<img>");
  // give the image a crystalImage class
  imgCrystal.addClass("crystalImage");
  // give the image an id
  imgCrystal.attr("id", i + 1);
  // link the image to a source in the imgArray
  imgCrystal.attr("src", imgArray[i]);
  // give the image an alt value
  imgCrystal.attr("alt", "Crystal " + (i + 1));
  // give the image a dataValue
  imgCrystal.attr("dataValue", numberOptions[i]);
  // add the image crystal to the page in the image row
  imgRow.append(imgCrystal);
}

// Set an on-click event that responds to clicks on the crystals.
imgRow.on("click", ".crystalImage", function () {

  // The $(this) keyword extracts the dataValue of the clicked crystal, while the .attr("dataValue")
  // allows us to grab the value out of the "dataValue" attribute.  The string element then needs
  // to be converted to an integer and added to the counter.
  var crystalValue = ($(this).attr("dataValue"));
  crystalValue = parseInt(crystalValue);
  counter += crystalValue;
  // Update 'your score'
  $("#userScore").text(counter);

  // Win-loss logic
  if (counter === targetNumber) {
    statement = "YOU WIN!!!";
    $("#statement").text(statement);
    $("#statement").css('color','#000000');
    wins++;
    $("#wins").text(wins);
    setTimeout(newGame, 1000 * 3);
  } else if (counter >= targetNumber) {
    statement = "Sorry, you lose...";
    $("#statement").text(statement);
    $("#statement").css('color','#EF5350');
    $("#statement").css('font-weight','bold');
    losses++;
    $("#losses").text(losses);
    setTimeout(newGame, 1000 * 3);
  }
});

// 2.  Need to create something that generates a new number to guess
// after each win  or loss.  
//4.  Need to link this to my portfolio.

function newGame() {
  // Reset the target number
  targetNumber = Math.floor(Math.random() * targetMax) + targetMin;

  // Reset the number to guess id to display the new target number
  $("#numberToGuess").text(targetNumber);

  // Reset the counter that tracks the user's total
  counter = 0;

  // Reset the user's score id to display the new counter
  $("#userScore").text(counter);

  // Reset the number options
  numberOptions = [];

  while (numberOptions.length < arraySize) {
    random = Math.floor(Math.random() * numOptionMax) + numOptionMin;
    if (numberOptions.indexOf(random) == -1) {
      numberOptions.push(random);
    }
  }

  console.log(numberOptions);

  // Give the images new values
  $("#1").attr("dataValue", numberOptions[0]);
  $("#2").attr("dataValue", numberOptions[1]);
  $("#3").attr("dataValue", numberOptions[2]);
  $("#4").attr("dataValue", numberOptions[3]);

  // Reset the statement
  var statement = "Select a crystal to update your score";
  $("#statement").text(statement);
  $("#statement").css('color','#fff');
}
