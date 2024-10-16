// CHP.12 ANONYMOUS FUNCTION



// QS.1 --> Print "Hello" (No Parameters):
// Create an anonymous function that prints "Hello" to the console. Immediately invoke the function.
(function() {
    console.log("Hello");
}) ();



// QS.2 --> Sum of Two Numbers (With Parameters):
// Write an anonymous function that takes two numbers as arguments and returns their sum. Assign it to a variable and call the function.
const sum = function(a, b) {
    return a + b;
};

console.log(sum(5, 3));  // RESULT: 8


// QS.3 -->  Array Sorting (With Parameters):
// Use an anonymous function as a callback in Array.sort() to sort an array of numbers in ascending order 
let numbers1 = [34, 7, 23, 32, 5, 62];

numbers1.sort(function(a, b) {
    return a - b; // a - b, ye ascending order mei arranga krega
});

console.log(numbers1);  // result: [5, 7, 23, 32, 34, 62]



// QS.4 --> Greeting Message (With Parameter):
// Create an anonymous function that takes a name as a parameter and logs a greeting message like "Hello, [name]!". Immediately invoke the function.
(function(name) {
    console.log("Hello, " + name + "!");
})("Aiman");




// QS.5 --> Check if Number is Even or Odd (With Parameter):
// Write an anonymous function that takes a number as a parameter and logs whether the number is even or odd. Store it in a variable and then invoke it.
const checkEvenOdd = function(number2) {
    if (number2%2 === 0) {
        console.log(number2 + " is even");
    } else {
        console.log(number2 + " is odd");
    }
};

checkEvenOdd(7);  // RESULT: 7 is odd
checkEvenOdd(10); // RESULT: 10 is even


// QS.6 --> Filter Odd Numbers from an Array (With Parameters):
// Use an anonymous function as a callback in Array.filter() to return only the odd numbers from an array of integers
let numbers3 = [10, 15, 22, 33, 42, 55];

let oddNumbers = numbers3.filter(function(number3) { // .filter() ka method takes an anonymous function jo har element pe apply hota hai. If condition is true then the element will return.
    return number3%2 !== 0; //condition to check that the nujmber is odd or not.
});

console.log(oddNumbers);  // result: [15, 33, 55]



// QS.7 --> Factorial Calculation (With Parameter):
// Create an anonymous function that takes a number as input and returns its factorial. Assign the function to a variable and call it with different inputs.
// Assigning anonymous function to a variable
const factorial = function(num) {
    if (num === 0 || num === 1) {
        return 1;  // if number is 0 ya 1 hoga tu, then return = 1
    } else {
        return num * factorial(num - 1); // jb tk number 1 ya 0 na jojaye
    }
};

// Calling function 
console.log(factorial(5)); // result: 120
console.log(factorial(0)); // result: 1


// QS.8 --> Anonymous Function in Timeout (No Parameters):
// Use an anonymous function inside setTimeout() to print a message like "Time's up!" after 10 seconds.
setTimeout(function() { //setTimeout funtion sets the time whcih will be given
    console.log("Time's up!");
}, 10000); // 10000 milliseconds = 10 seconds



// QS.9 --> Sum of All Elements in an Array (With Parameter):
// Write an anonymous function as a callback in Array.reduce() to sum all the elements in an array.
// Array of numbers
const numbers4 = [1, 2, 3, 4, 5];

// Using reduce with an anonymous function to sum all elements
const sum0 = numbers4.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0); // Initial value of accumulator is 0

console.log("Sum of all elements:", sum0); // Output: Sum of all elements: 15




// QS.10 --> Check Voting Eligibility (With Parameter):
// Create an anonymous function that takes an age as input and logs whether the person is eligible to vote (age >= 18). 
// Immediately invoke the function with different ages.
(function(age) {
    if (age >= 18) {
        console.log(`Age ${age}: Eligible to vote.`);
    } else {
        console.log(`Age ${age}: Not eligible to vote.`);
    }
})(20); // Immediately invoked with age 20


(function(age) {
    if (age >= 18) {
        console.log(`Age ${age}: Eligible to vote.`);
    } else {
        console.log(`Age ${age}: Not eligible to vote.`);
    }
})(16); // Immediately invoked with age 16


(function(age) {
    if (age >= 18) {
        console.log(`Age ${age}: Eligible to vote.`);
    } else {
        console.log(`Age ${age}: Not eligible to vote.`);
    }
})(17); // Immediately invoked with age 17

