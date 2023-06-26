// Get references to the button and paragraph elements
var button1 = document.getElementById('clickButton1');
var button2 = document.getElementById('clickButton2');
var button3 = document.getElementById('clickButton3');

var clickCount1 = document.getElementById('clickCount1');
var clickCount2 = document.getElementById('clickCount2');
var clickCount3 = document.getElementById('clickCount3');

// Create a variable to store the number of clicks
var count1 = 0;
var count2 = 0;
var count3 = 0;

// Add a click event listener to button1
button1.addEventListener('click', function() {
  // Increment the click count
  count1++;
  // Update the paragraph text with the new count
  clickCount1.textContent = count1;
});

// Add a click event listener to button2
button2.addEventListener('click', function() {
  // Increment the click count
  count2++;
  // Update the paragraph text with the new count
  clickCount2.textContent = count2;
});

// Add a click event listener to button3
button3.addEventListener('click', function() {
  // Increment the click count
  count3++;
  // Update the paragraph text with the new count
  clickCount3.textContent = count3;
});
