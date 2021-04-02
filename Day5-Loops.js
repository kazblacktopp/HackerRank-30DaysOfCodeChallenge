//******************************* INSTRUCTIONS *******************************//

// Objective:

// In this challenge, we will use loops to do some math. Check out the Tutorial
// tab to learn more.

// Task:

// Given an integer, n, print its first 10 multiples. Each multiple n x i
// (where 1 <= i <= 10) should be printed on a new line in the form:
// n x i = result.

// Example:

// n = 3

// The printout should look like this:

// 3 x 1 = 3
// 3 x 2 = 6
// 3 x 3 = 9
// 3 x 4 = 12
// 3 x 5 = 15
// 3 x 6 = 18
// 3 x 7 = 21
// 3 x 8 = 24
// 3 x 9 = 27
// 3 x 10 = 30

// Input Format:

// A single integer, n.

// Constraints:

// 2 <= n <= 20

// Output Format:

// Print 10 lines of output; each line i (where 1 <= i <= 10) contains the
// result of n x 1 in the form:

// n x i = result.

// Sample Input:

// 2

// Sample Output:

// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6
// 2 x 4 = 8
// 2 x 5 = 10
// 2 x 6 = 12
// 2 x 7 = 14
// 2 x 8 = 16
// 2 x 9 = 18
// 2 x 10 = 20

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
    const n = parseInt(readLine(), 10);
    // < ---------------------- My Solution Starts Here ---------------------- >
    let i;
    for (i = 1; i <= 10; i++) {
        console.log(n + " x " + i + " = " + (n * i))
    }
    // < ----------------------- My Solution Ends Here ----------------------- >
}

// Using ES6 Template strings:
// for (i = 1; i <= 10; i++) {
//    console.log(`${n} x ${i} = ${n * i}`)
// }
