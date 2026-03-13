let ticketPrice = 500;
let balance = 700;

if (balance >= ticketPrice) {
    console.log("User can pay for the ticket.");
} else {
    console.log("User cannot pay for the ticket.");
}
let age = 15;
console.log(age) 

if (balance >= ticketPrice && age > 12) {
    console.log("You can board the bus.");
} else {
    console.log("You cannot board the bus.");
}

let itemPrice = 25;
let itemsBought = 6;
let isMember = true;

// Calculate total price
let totalPrice = itemPrice * itemsBought;

// Check if discount applies
let finalPrice;

if (totalPrice > 100 && isMember) {
    let discount = totalPrice * 0.10;
    finalPrice = totalPrice - discount;
    console.log("Discount applied!");
} else {
    finalPrice = totalPrice;
    console.log("No discount applied.");
}

// Display results
console.log("Total Price:", totalPrice);
console.log("Final Price:", finalPrice);


let score = 88;
let attendance = 80;

if (score >= 50 && attendance >= 75) {
    console.log("Student passes");

    if (score >= 85) {
        console.log("Student gets distinction");
    }
} else {
    console.log("Student fails");
}

let battery = 80;        // current battery percentage
let usage = 35;          // battery used
let chargerConnected = true;

// Calculate new battery percentage
let newBattery = battery - usage;

// Check if warning should appear
if (newBattery < 20 || !chargerConnected) {
    console.log("Warning: Battery low or charger not connected!");
} else {
    console.log("Battery level is okay.");
}

// Display battery percentage
console.log("Remaining Battery:", newBattery + "%");