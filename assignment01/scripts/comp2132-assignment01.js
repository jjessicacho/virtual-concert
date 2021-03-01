/*
these data points represent different 
aspects of the show...
(do not change these values)
*/
const ticketCostDollarsCDN      = 30;
const minimumAgeToPurchase      = 24;
const taxRate                   = 0.10;

/*
these data points represent information
about the current user
NOTE: since this data would in theory be
supplied by the user, all values 
(even numeric) here are strings... 
- change these values as you test your script!
*/
const userName            = "Jungmin (Jessica) Cho";
const age                   = "25";
const cashOnHandDollarsCDN  = "216";
const quantityOfTickets     = "3";

/*
begin processing...
*/

// Grab all the output elements
const heading = document.getElementById('name');
const userAge = document.getElementById('user-age');
const qtyTickets = document.getElementById('qty-tickets');
const userCash = document.getElementById('user-cash');
const output = document.getElementById('output');
const errorMsg =document.getElementById('error-messages');

// User Data
heading.innerHTML = `${userName} says: “Let's buy some tickets to the big virtual concert!"`;
userAge.innerHTML = `User age: ${age}`;
qtyTickets.innerHTML = `Ticket Qty: ${quantityOfTickets}`;
userCash.innerHTML = `Cash: $${cashOnHandDollarsCDN}`;

// Set Age Variables
let oneYearAge = age*1 + 1;
let waitAge = 24 - age*1;

// Set Ticket Variables 
let ticketPrice = quantityOfTickets * ticketCostDollarsCDN
let tax = parseFloat(taxRate * ticketCostDollarsCDN) * parseInt(quantityOfTickets);
let totalCost = ticketPrice + tax;

// If else statement: Age
if ( age >= 24 ) {
    output.innerHTML = 
    `
    <p>User is old enough to buy a ticket by 1 year(s). Processing with ticket sales...</p>
    <p>Purchasing ${quantityOfTickets} tickets at $${ticketCostDollarsCDN}: $${ticketPrice}</p>
    <p>After tax total cost: $${totalCost}</p>
    <p>You have $${cashOnHandDollarsCDN}</p>
    <p>Proceeding with purchase...</p>
    <p>In one year's time, you will be ${oneYearAge} years old.</p>
    `;

    if ( cashOnHandDollarsCDN < totalCost ) {
        errorMsg.innerHTML = `Sorry, ${userName}. You cannot afford this!`;
    }

} else {
    output.innerHTML = `<p>It's one year's time, you will be ${oneYearAge}.</p>`
    errorMsg.innerHTML = `<p>Sorry. You are ${age}, and that's not old enough to buy a ticket. You must be at least ${minimumAgeToPurchase} years old. You need to wait for ${waitAge} years.</p>`
}