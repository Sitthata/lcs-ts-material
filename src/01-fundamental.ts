// ==========================================
// 1. BASICS - FUNDAMENTAL CONCEPTS
// ==========================================

// Type annotations for variables
let userName: string = "Alex";
let age: number = 20;
let isStudent: boolean = true;

// "Can user enter the pub?" example to demonstrate if-else
function canEnterPub(name: string, age: number): string {
  // Legal drinking age
  const MINIMUM_AGE: number = 21;
  
  if (age >= MINIMUM_AGE) {
    return `Welcome to the pub, ${name}!`;
  } else {
    const yearsToWait: number = MINIMUM_AGE - age;
    return `Sorry ${name}, you need to wait ${yearsToWait} more year${yearsToWait === 1 ? '' : 's'}.`;
  }
}

// Using the function with different scenarios
console.log(canEnterPub("Alex", 20)); // Sorry Alex, you need to wait 1 more year.
console.log(canEnterPub("Sam", 25));  // Welcome to the pub, Sam!
console.log(canEnterPub("Jo", 17));   // Sorry Jo, you need to wait 4 more years.

// Operations with typed variables
const calculateTotalBill = (price: number, taxRate: number, tipPercentage: number): number => {
  const taxAmount: number = price * (taxRate / 100);
  const tipAmount: number = price * (tipPercentage / 100);
  return price + taxAmount + tipAmount;
};

const mealPrice: number = 45.50;
const taxRate: number = 8.875; // NYC tax rate
const tipPercentage: number = 18;

console.log(`Total bill: $${calculateTotalBill(mealPrice, taxRate, tipPercentage).toFixed(2)}`);
// Total bill: $57.64 