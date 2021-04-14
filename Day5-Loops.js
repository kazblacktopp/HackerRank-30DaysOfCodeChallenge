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
