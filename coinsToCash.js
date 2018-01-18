const piggyBank = { quarters:25, dimes: 15, pennies: 2 };

let dollarAmount = 0;

if (quarters){
    dollarAmount += .25*piggyBank.quarters;
}
if (dimes){
    dollarAmount += .10*piggyBank.dimes;
}
if (pennies){
    dollarAmount += .02*piggyBank.pennies;
}

var element = document.createElement("div");
var content = document.createTextNode(dollarAmount);

element.appendChild(content);


