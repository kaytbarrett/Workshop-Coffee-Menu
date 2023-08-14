const coffeeMenu = require("./coffee_data.js");


//Prompt 2
//Print an array of all the drinks on the menu.

const drinks = coffeeMenu.map(item => item.name);
console.log(drinks);


//Prompt 3
//Print an array of drinks that cost 5 and under.


const underFive = (item) => {
   if (item.price <=5) {
    return item;
   } 
}
const itemsUnderFive = coffeeMenu.filter(underFive);
console.log(itemsUnderFive);

//Prompt 4
//Print an array of drinks that are priced at an even number.

const onlyEven = coffeeMenu.filter(item => item.price % 2 === 0 );

console.log(onlyEven);

//Prompt 5
//Print the total if you were to order one of every drink.


const totalValue = coffeeMenu.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
)

console.log(totalValue);

//Prompt 6
//Print an array with all the drinks that are seasonal.

const seasonal = coffeeMenu.filter(item => item.seasonal === true);
console.log(seasonal);

//Prompt 7
//Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".

const seasonalWithMessage = seasonal.map(item => item.name + " with imported beans");
console.log(seasonalWithMessage);