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
		filteredPrices.push("<li>"+object.title+"</li>");
		};
	});
	return filteredPrices.join("");
};

var answer2 = filterPrices(items);

document.querySelector("#answer2").innerHTML = "<ul class=\"ans2header\">These items cost between $14 and $18:"+answer2+"</ul>";


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

// Question 5: Which items are made of eight or more materials? Display the name, number of items and the items it is made of.

// Qty of 2 Groomsmen Gift - Stainless Steel Personalized Bottle Opener - NO Capcatcher has 9 materials:
//   wall mount bottle opener
//   wedding
//   man cave
//   christmas gift
//   guy gift
//   fathers day
//   home bar
//   beer
//   bar

var filterMaterials = function (items) {
	var objectFilter = function (items) {
		return items.filter(function(object) {
			if(object.materials.length >= 8) {
				return object;
			}
		});
	};	
	var filteredObjs = objectFilter(items);
	var objPartsMapper = function (filteredObjs) {
		return filteredObjs.map(function(object) {
			return object.title + " has " + object.materials.length + " materials:";
		})
	}
	var objParts = objPartsMapper(filteredObjs);                 //At this point, I have an array of 2 separate ul elements with the titles and number of materials inside.
	var objMaterialsMapper = function(filteredObjs) {
		return filteredObjs.map(function(object){
			return object.materials;
		})
	}
	var filteredMaterialsArrays = objMaterialsMapper(filteredObjs); //At this point, I have another array containing the materials array of each filtered object.
	var	arrayOfFilteredMaterialsTagger = function(filteredMaterialsArrays) {
		return filteredMaterialsArrays.map(function(array){
			return array.map(function(item){
				return "<li>" + item + "</li>";
			});
		});
	};
	var taggedMaterialsArrays = arrayOfFilteredMaterialsTagger(filteredMaterialsArrays);
	//At this point, I have one array containing the materials arrays of each 
	//filtered object with all array items contained within <li> tags.
	var answer5div = document.querySelector("#answer5");
	for (var x=0; x <objParts.length; x++) {
		var ulNode = document.createElement("ul");
		ulNode.innerHTML = objParts[x] + taggedMaterialsArrays[x].join('');
		answer5div.appendChild(ulNode);
	};															//This for loop creates two ul elements containing titles and number of materials
	//AND their corresponding taggedMaterialsArrays array-turned-string to each ul element.
	//It then injects it into the answer 5 div.
};
filterMaterials(items); //calls the function.

// Question 6: How many items were made by their sellers?
// 18 were made by their sellers
var selfMadeFilter = function(items){
	var objectFilter = function (items){
		return items.filter(function(object){
			if (object.who_made == "i_did"){
				return object;
			};
		});
	}
	var selfMade = objectFilter(items);
	var answer6 = selfMade.length;
	var answer6div = document.querySelector("#answer6");
	answer6div.innerHTML = answer6 +" were made by their sellers.";
};
selfMadeFilter(items);
