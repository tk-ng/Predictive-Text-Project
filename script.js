const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruit = [
	"Apple",
	"Apricot",
	"Avocado 🥑",
	"Banana",
	"Bilberry",
	"Blackberry",
	"Blackcurrant",
	"Blueberry",
	"Boysenberry",
	"Currant",
	"Cherry",
	"Coconut",
	"Cranberry",
	"Cucumber",
	"Custard apple",
	"Damson",
	"Date",
	"Dragonfruit",
	"Durian",
	"Elderberry",
	"Feijoa",
	"Fig",
	"Gooseberry",
	"Grape",
	"Raisin",
	"Grapefruit",
	"Guava",
	"Honeyberry",
	"Huckleberry",
	"Jabuticaba",
	"Jackfruit",
	"Jambul",
	"Juniper berry",
	"Kiwifruit",
	"Kumquat",
	"Lemon",
	"Lime",
	"Loquat",
	"Longan",
	"Lychee",
	"Mango",
	"Mangosteen",
	"Marionberry",
	"Melon",
	"Cantaloupe",
	"Honeydew",
	"Watermelon",
	"Miracle fruit",
	"Mulberry",
	"Nectarine",
	"Nance",
	"Olive",
	"Orange",
	"Clementine",
	"Mandarine",
	"Tangerine",
	"Papaya",
	"Passionfruit",
	"Peach",
	"Pear",
	"Persimmon",
	"Plantain",
	"Plum",
	"Pineapple",
	"Pomegranate",
	"Pomelo",
	"Quince",
	"Raspberry",
	"Salmonberry",
	"Rambutan",
	"Redcurrant",
	"Salak",
	"Satsuma",
	"Soursop",
	"Star fruit",
	"Strawberry",
	"Tamarillo",
	"Tamarind",
	"Yuzu",
];

function search(str) {
	// Return an array that only has fruits that contains the input value
	return fruit.filter(function (fr) {
		return fr.toLowerCase().includes(str.toLowerCase());
	});
}

function searchHandler(e) {
	// Get the inputted value
	const inputVal = e.target.value;
	const results = search(inputVal);
	// Clear the ul element so it does not retain the previous results, including when clearing the input field
	suggestions.innerHTML = "";
	if (results.length > 0 && inputVal.length > 0) {
		// adding the class help CSS add a transparent background the the result list ('ul')
		suggestions.classList.add("has-suggestions");
		showSuggestions(results, inputVal);
	}
}

function showSuggestions(results, inputVal) {
	// create an li for each returned result
	for (let i = 0; i < results.length; i++) {
		let option = document.createElement("li");
		// Use regex to locate the option's texts that matches the input value, g = global, i = case-insensitive
		let regex = new RegExp(inputVal, "gi");
		// Make the matching text bold in the list of suggested results
		option.innerHTML = results[i].replace(
			regex,
			(str) => `<strong>${str}</strong>`
		);
		suggestions.appendChild(option);
	}
}

function useSuggestion(e) {
	if (e.target.tagName === "LI") {
		// Updates the input field value to the selected suggested result
		input.value = e.target.innerText;
		// Once selected, close the list of suggested results
		suggestions.innerHTML = "";
	}
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
