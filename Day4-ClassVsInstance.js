//******************************* INSTRUCTIONS *******************************//

// Objective:

// In this challenge, we're going to learn about the difference between a class
// and an instance; because this is an Object Oriented concept, it's only
// enabled in certain languages. Check out the Tutorial tab for learning
// materials and an instructional video!

// Task:

// Write a Person class with an instance variable, age, and a constructor that
// takes an integer, initialAge, as a parameter. The constructor must assign
// initialAge to age after confirming the argument passed as initialAge is not
// negative; if a negative argument is passed as initialAge, the constructor
// should set age to 0 and print 'Age is not valid, setting age to 0.'. In
// addition, you must write the following instance methods:

// 1. yearPasses() should increase the age instance variable by 1.
// 2. amIOld() should perform the following conditional actions:
//  a. If age < 13, print 'You are young.'.
//  b. If age >= 13 and and < 18, print 'You are a teenager.'.
//  c. Otherwise, print 'You are old.'.

// To help you learn by example and complete this challenge, much of the code is
// provided for you, but you'll be writing everything in the future. The code
// that creates each instance of your Person class is in the main method. Don't
// worry if you don't understand it all quite yet!

// Note: Do not remove or alter the stub code in the editor.

// Input Format:

// Input is handled for you by the stub code in the editor.

// The first line contains an integer, T (the number of test cases), and the T
// subsequent lines each contain an integer denoting the age of a Person instance.

// Constraints:
//  1 <= T <= 4
//  -5 <= age <= 30

// Output Format:

// Complete the method definitions provided in the editor so they meet the
// specifications outlined above; the code to test your work is already in the
// editor. If your methods are implemented correctly, each test case will print
// 2 or 3 lines (depending on whether or not a valid initialAge was passed to
// the constructor).

// Sample Input:

// 4
// -1
// 10
// 16
// 18

// Sample Output:

// Age is not valid, setting age to 0.
// You are young.
// You are young.

// You are young.
// You are a teenager.

// You are a teenager.
// You are old.

// You are old.
// You are old.

// Explanation:

// Test Case 0: initialAge = -1
// Because initialAge < 0, our code must set age to 0 and print the "Age is not
// valid..." message followed by the young message. Three years pass and age =
// 3, so we print the young message again.

// Test Case 1: initialAge = 10
// Because initialAge < 13, our code should print that the person is young.
// Three years pass and age = 13, so we print that the person is now a teenager.

// Test Case 2: initialAge = 16
// Because 13 <= initialAge < 18, our code should print that the person is a
// teenager. Three years pass and age = 19, so we print that the person is old.
//
// Test Case 3: initialAge = 18
// Because initialAge >= 18, our code should print that the person is old. Three
// years pass and the person is still old at age = 21, so we print the old
// message again.

// The extra line at the end of the output is supposed to be there and is
// trimmed before being compared against the test case's expected output. If
// you're failing this challenge, check your logic and review your print
// statements for spelling errors.

//********************************* SOLUTION *********************************//

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function(data) {
  input_stdin += data;
});

process.stdin.on('end', function() {
  input_stdin_array = input_stdin.split("\n");
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

function Person(initialAge) {
  // Add some more code to run some checks on initialAge
  if (initialAge < 0) {
    this.age = 0;
    console.log("Age is not valid, setting age to 0.");
  } else {
    this.age = initialAge;
  }

  this.amIOld = function() {
    // < ---------------------- My Solution Starts Here ---------------------- >
    // Do some computations in here and print out the correct statement to the
    // console
    if (this.age < 13) {
      console.log("You are young.");
    } else if (this.age > 12 && this.age < 18) {
      console.log("You are a teenager.");
    } else {
      console.log("You are old.");
    }
  };

  this.yearPasses = function() {
    // Increment the age of the person in here
    this.age++;
  };
}
// < ------------------------- My Solution Ends Here ------------------------- >

function main() {

  var T = parseInt(readLine());
  for (i = 0; i < T; i++) {
    var age = parseInt(readLine());
    var p = new Person(age);
    p.amIOld();
    for (j = 0; j < 3; j++) {
      p.yearPasses();

    }
    p.amIOld();
    console.log("");
  }
}

// Could also use the ternary operator:
//
//   this.amIOld = function() {
//     if (this.age < 13) {
//       console.log("You are young.");
//     } else {
//       (this.age >= 13 && this.age < 18) ? console.log("You are a teenager."):
//       console.log("You are old.");
//     }
//   };

// Could also use ES6 Template:
//
//   this.amIOld = () => {
//     let adjective = 'old';
//     if (this.age < 13) {
//       adjective = 'young';
//     } else if (this.age >= 13 && this.age < 18) {
//       adjective = 'a teenager';
//     }
//     console.log(`You are ${adjective}.`);
//   };

// Could also use switch statement:
//
// this.amIOld = function() {
//   switch (true) {
//     case (age < 13):
//       console.log("You are young.");
//       break;
//     case (age < 18):
//       console.log("You are a teenager.");
//       break;
//     default:
//       console.log("You are old.");
//   }
// };
