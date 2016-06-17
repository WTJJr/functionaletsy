//Show me how to calculate the average price of all items.
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

var answer1 = "The average price is: $"+ avgPrice(items);

document.querySelector("#answer1").innerHTML = answer1;