// Arrays
// (Note that each bullet point here is independent of the others.)

// Declare a variable greeting and assign to it a phrase.
let greeting = "Hi"

// Split a string into an array of characters (see the .split() method)

let name = "elizabeth"
name.split('');

// Take an array of letters and merge them into a string (see the .join() method)
let elements = ['Fire', 'Air', 'Water']
elements.join();

// Select a random item from an array (Read up on Math.random() to figure out how to choose a random item from your array. JavaScript doesn’t have Python’s random.choice() function at the ready, so we get to do it ourselves!)
function getRandomInt(max) {Maps
// Create an empty map and assign it to the variable candy
const candy = new Map();
// Set five colors as keys in the map and flavors as the values, for instance “purple” could be “grape”.
candy.set('purple, 'grape');
candy.set('red', 'apple');
candy.set('orange', 'orange');


// Iterate over the candy flavors to print “The x flavor is colored y.” for each
// Get the value of a color from the map, and see what happens when you try getting a value of a color that doesn’t exist.

  return Math.floor(Math.random() * Math.floor(max));
}
num = [1,2,3,4]
//get length to use random
console.log(getRandomInt(4));
//update list with indicies to switch values
// Select two random items from an array and swap them

// Maps
// Create an empty map and assign it to the variable candy
const candy = new Map();
// Set five colors as keys in the map and flavors as the values, for instance “purple” could be “grape”.
candy.set('purple, 'grape');
candy.set('red', 'apple');
candy.set('orange', 'orange');

// Iterate over the candy flavors to print “The x flavor is colored y.” for each
for (const flavor of candy){
... console.log(`The ${flavor[0]} flavor is colored ${flavor[1]}.`); }

// Get the value of a color from the map, and see what happens when you try getting a value of a color that doesn’t exist.
> candy.get('purple')
'grape'
> candy.get('blue')
undefined
> 

// Functions
// Write a function that takes a color and the candy map.
// It should return the flavor or if it’s not in the map,
 // console log “Sorry, that color doesn’t have a flavor” and return nothing.

function candyType(color, map){
	let value = map.includes(color);
	if (value === True){
		return map.get(color);
	}else {
		console.log("Sorry, that color doesn't have a flavor");
	}
}


// Write a function that takes an array of colors and returns an array of the corresponding flavors.
 // If the map doesn’t have the color, add null to the array.
