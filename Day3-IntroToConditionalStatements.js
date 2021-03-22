//******************************* INSTRUCTIONS *******************************//

// Objective:

// In this challenge, we learn about conditional statements. Check out the
// Tutorial tab for learning materials and an instructional video.

// Task:

// Given an integer, n, perform the following conditional actions:
//
// If n is odd, print Weird
// If n is even and in the inclusive range of 2 to 5, print Not Weird
// If n is even and in the inclusive range of 6 to 20, print Weird
// If n is even and greater than 20, print Not Weird

// Complete the stub code provided in your editor to print whether or not  is
// weird.

// Input Format:

// A single line containing a positive integer, n.

// Constraints:
// 1 <= n <= 100

// Output Format:

// Print 'Weird' if the number is weird; otherwise, print 'Not Weird'.

// Sample Input 0:

// 3

// Sample Output 0:
//
// Weird

// Sample Input 1:

// 24

// Sample Output 1:

// Not Weird

// Explanation:

// Sample Case 0: n = 3

// n is odd and odd numbers are weird, so we print 'Weird'.

// Sample Case 1: n = 24

// n > 20 and n is even, so it is not weird. Thus, we print 'Not Weird'.

//********************************* SOLUTION *********************************//

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  const N = parseInt(readLine(), 10);
  // < ----------------------- My Solution Starts Here ----------------------- >
  if ((N % 2) == 0) {
    if (N > 5 & N < 21) {
      console.log("Weird");
    } else {
      console.log("Not Weird");
    }
  } else {
    console.log("Weird");
  }
  // < ------------------------ My Solution Ends Here ------------------------ >
}

// Most siccinct version I could find:
// console.log( N % 2 === 1 || N > 5 && N < 21 ? 'Weird' : "Not Weird" );
