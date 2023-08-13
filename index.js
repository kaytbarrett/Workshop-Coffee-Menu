const coffeeMenu = require("./coffee_data.js");


//Prompt 2
//Print an array of all the drinks on the menu.

const drinks = coffeeMenu.map(item => item.name)
console.log(drinks)

//Prompt 3
//Print an array of drinks that cost 5 and under.


const underFive = (item) => {
   if (item.price <=5) {
    return item;
   } 
}
const itemsUnderFive = coffeeMenu.filter(underFive);
console.log(itemsUnderFive);


