// Question 1: Show me how to calculate the average price of all items.
//The average price is $23.63
var avgPrice = function (items) {
	var priceArray = []
	items.forEach(function(object) {
			priceArray.push(object.price);
		});
	var sums = priceArray.reduce(function(a,b) {
		return a + b;
	});
	return sums/items.length
};

var answer1 = avgPrice(items).toFixed(2);  // Rounds result to nearest hundredth.

document.querySelector("#answer1").innerHTML = "The average price is $"+answer1;

// Question 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
//   1970s Coors Banquet Glass Beer Pitcher

//   The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, harry potter gift, three broomsticks mug

//   Hand Painted Colorful Feather Glass

//Process: (1) Write an if conditional to rule prices as btw $14 and $18 or not.
//(2) Write a function or use HOF that creates an array to filter through the data and collect the objects containing prices between $14 and $18.
//(3) Add function that returns names of those objects into an array.
//(4) Reduce the array to a string. (5) Inject string into the appropriate DOM node in index.html using document.querySelector().

var priceFilter = function(items) {
	return items.filter(function(object) {
		if (14 <= object.price && object.price <= 18) {
		return(object);
		}
	});
};
	