const coffeeMenu = require("./coffee_data.js");


//Prompt 2
//Print an array of all the drinks on the menu.

const drinks = coffeeMenu.map(element => element.name)
console.log(drinks)

