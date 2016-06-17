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
//(2) Write a function or use HOF that creates an array to filter through the data and collect the titles of objects containing prices between $14 and $18.
//(3) Reduce the array to a string. (4) Inject string into the appropriate DOM node in index.html using document.querySelector().

//note: .filter() failed me, because it only returns the same data type that it receives. As a result, I kept getting objects back instead of
//titles. So, I'm switching .filter to .map. Note2: .map returned a lot of "undefined" inputs in the array. Switching to .forEach().

var filterPrices = function(items) {
	var filteredPrices = [];
	items.forEach(function(object) {
		if (14 <= object.price && object.price <= 18) {
		filteredPrices.push(object.title);
		};
	});
	var answer2 = filteredPrices.reduce(function(a,b) {
		return a + ", " + b;
	});
	return answer2;
};

var answer2 = filterPrices(items);

document.querySelector("#answer2").innerHTML = answer2;


// Question 3: Which item has a "GBP" currency code? Display it's name and price.
// 1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18

var filterCurrency = function(items) {
	var filteredCurrencies = [];
	items.forEach(function(object) {
		if (object.currency_code == "GBP") {
		filteredCurrencies.push(object.title);
		filteredCurrencies.push(object.price);
		};
	});
	var answer3 = filteredCurrencies.reduce(function(a,b) {
		return a + " costs &pound" + b;
	});
	return answer3;
};

var answer3 = filterCurrency(items);

document.querySelector("#answer3").innerHTML = answer3;

// Question 4: Display a list of all items who are made of wood.
//Note: materials used to make items are inside of an array stored in the property "materials".

var filterWoodItems = function(items) {
	var filteredItems = [];
	items.forEach(function(object) {
		if (object.materials.includes("wood")) {
		filteredItems.push("<li>"+object.title+"</li>");
		};
	});
	var answer4 = filteredItems.reduce(function(a,b) {
		return a + b;
	});
	return answer4;
};

var answer4 = filterWoodItems(items);
var answer4withtags = "<ul class=\"listheading\">Items made of wood:"+answer4+"</ul>";

document.querySelector("#answer4").innerHTML = answer4withtags;

// Which items are made of eight or more materials? Display the name, number of items and the items it is made of.

