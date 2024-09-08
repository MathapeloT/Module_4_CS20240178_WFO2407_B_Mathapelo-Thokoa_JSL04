// # [JSL04] Submission: Monster Ternary Operator

// #### Challenge 1: Flavor Selection
// Given a variable that holds a user's preferred type of Monster Energy drink, 
// print whether the user prefers a "Regular" or "Sugar-free" variety. If the preference is not set, default to "Regular".

let userPreference = 'Sugar-free'; // Possible values: 'Regular', 'Sugar-free', or undefined

const preference = userPreference || "Regular";

console.log("User prefers: ${preference}");

// #### Challenge 2: Stock Check
// You have a variable that tracks the number of Monster Energy cans left in the fridge. 
// Use a ternary operator to print "Time to restock!" if the number is less than 5, or "We're stocked!" if the number is 5 or more.

const numArray = [1, 2, 3,3, 4, 5]
function stockCheck(arr) {
    for (let cansLeft = 3; cansLeft < arr.length; i++) {
        if (arr[cansLeft] < 5) {
            console.log("Time to restock!")
        } else if (arr[cansLeft] >= 5) {
            console.log("We're stocked!")
        }
    }
};

// #### Challenge 3: Workout Intensity
// Based on the current heart rate, determine if the user should drink a Monster Energy drink to boost their workout. 
// If the heart rate is below 100 bpm, print "Boost needed!", otherwise, print "Energy levels are high!".
function checkHeartRate {
    for (let heartRate = 95;) {
        if (heartRate < 100;) {
            console.log("Boost needed!")
        } else if (heartRate > 120) {
            console.log("Energy levels are high!")
        }
    }
};


// #### Challenge 4: Temperature Suitability
// Monster Energy drinks are best served cold. Given the current temperature, use a ternary to print "Chilled to perfection!" 
// if the temperature is below or equal to 5°C, or "Needs a cooler!" if above 5°C.

function checkTemperature {
    for (let currentTemp = 5;) {
        if(currentTemp <= 5;) {
            console.log("Chilled to perfection!") {
        } else if (currentTemp > 5) {
            console.log("Needs a cooler!")
        }
    }    
}
};

// #### Challenge 5: Late Night Coding Session
// Determine if it's a good idea to have a Monster Energy drink based on the current hour.
// If it's between 7am and midnight (24-hour format), print "Unleash the beast!",
// otherwise, print "Better stick to water."

// Define the current hour in 24-hour format
const now = newDate();
const currentHour = now.getHours();

// Write your code below this line to determine if it's a good idea to have a Monster Energy drink based on the current hour
// If it's between 7am and midnight (24-hour format), print "Unleash the beast!"
// Otherwise, print "Better stick to water."

const startHour = 7;
const endHour = 24;
function checkTime {
    for (currentHour = 5) {
        if (currentHour >= startHour && currentHour < endHour) {
            console.log("Unleash the beast!")
        } else if (currentHour > endHour && currentHour < startHour) {
            console.log("Better stick to water!")
        }
    }
};


// In each of these challenges, the ternary operator is used to decide between two options based on a condition, 
// demonstrating its utility for concise conditional logic. Remember that while ternaries can make the code more succinct, 
// they should be used judiciously to maintain readability, especially for more complex conditions.