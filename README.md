# Hi! 👋🏽 Welcome to my coding challenge solutions for HackerRank's *30 Days of Code* Challenge!

## Introduction

Below you will find the instructions for all the coding challenges that I have successfully completed for [HackerRank](https://www.hackerrank.com)'s [30 Days of Code](https://www.hackerrank.com/domains/tutorials/30-days-of-code) challenge.

#### Coding challenges included in this repository:

[Day 0](#day-0-hello-world): Hello, World <br>
[Day 1](#day-1-data-types): Data Types <br>
[Day 2](#day-2-operators): Operators <br>
[Day 3](#day-3-intro-to-conditional-statements): Intro to Conditional Statements <br>
[Day 4](#day-4-class-vs-instance): Class Vs. Instance (Coming Soon!)<br>
[Day 5](#day-5-loops): Loops (Comming Soon!) <br>
[Day 6](#day-6-lets-review): Let's Review (Coming Soon!)

#### Each days coding challenge instruction contains:

1. Objective
1. Task
1. Examples (if applicable)
1. Function Description (if applicable)
1. Function Returns (if applicable)
1. Input Format
1. Output Format (if applicable)
1. Sample Input
1. Sample Output
1. Explanation

All my code solutions are written in **JavaScript** and can be found in their respective `.js` files in this repository.

Each `.js` file contains comments indicating which snippets of code were written by me - with the remainder provided by [HackerRank](https://www.hackerrank.com).

Feel free to reuse any part of the code snippets that I've written or, better yet, sign up to do the [30 Days of Code](https://www.hackerrank.com/domains/tutorials/30-days-of-code) challenge at [HackerRank](https://www.hackerrank.com) today!

Happy coding! 🚀

## Day 0: Hello World
[(Back to top)](#hi--welcome-to-my-coding-challenge-solutions-for-hackerranks-30-days-of-code-challenge)

### Objective:

In this challenge, we review some basic concepts that will get you started with this series. You will need to use the same (or similar) syntax to read input and write output in challenges throughout [HackerRank](https://www.hackerrank.com). Check out the [Tutorial](https://www.hackerrank.com/challenges/30-hello-world/tutorial) tab for learning materials and an instructional video!

### Task:

To complete this challenge, you must save a line of input from `stdin` to a variable, print `Hello, World.` on a single line, and finally print the value of your variable on a second line.

You've got this! 👍🏼

### Input Format:

A single line of text denoting `inputString` (the variable whose contents must be printed).

### Output Format:

Print `Hello, World.` on the first line, and the contents of `inputString` on the second line.

###  Sample Input:
```
Welcome to 30 Days of Code!
```
### Sample Output:

```
Hello, World.
Welcome to 30 Days of Code!
```

### Explanation:

On the first line, we print the string literal `Hello, World.`. On the second line, we print the contents of the `inputString` variable which, for this sample case, happens to be `Welcome to 30 Days of Code!`. If you do not print the variable's contents to `stdout`, you will not pass the hidden test case.

Good luck and happy coding! 🚀

## Day 1: Data Types
[(Back to top)](#hi--welcome-to-my-coding-challenge-solutions-for-hackerranks-30-days-of-code-challenge)

### Objective:

Today, we're discussing data types. Check out the [Tutorial](https://www.hackerrank.com/challenges/30-data-types/tutorial) tab for learning materials and an instructional video!

### Task:

Complete the code in the editor below. The variables `i`, `d`, and `s` are already declared and initialized for you. You must:

1. Declare 3 variables: one of type `int`, one of type `double`, and one of type `String`.
2. Read 3 lines of input from `stdin` (according to the sequence given in the `Input Format` section below) and initialize your 3 variables.
3. Use the `+` operator to perform the following operations:
   - a. Print the sum of `i` plus your `int` variable on a new line.
   - b. Print the sum of `d` plus your `double` variable, to a scale of one decimal place, on a new line.
   - c. Concatenate `s` with the `string` you read as input and print the result on a new line.

**Note**: If you are using a language that doesn't support using `+` for string concatenation (e.g. C), you can just print one variable immediately following the other on the same line. The string provided in your editor must be printed first, immediately followed by the string you read as input.

### Input Format:

The first line contains an `integer` that you must sum with `i`. <br>
The second line contains a `double` that you must sum with `d`. <br>
The third line contains a `string` that you must concatenate with `s`. <br>

### Output Format:

Print the sum of both `integers` on the first line, the sum of both `doubles` (scaled to 1 decimal place) on the second line, and then the two concatenated `strings` on the third line. 

### Sample Input:

```
12 
4.0
is the best place to learn and practice coding!
```

### Sample Output:

```
16
8.0
HackerRank is the best place to learn and practice coding!
```

### Explanation:

When we sum the integers `4` and `12`, we get the integer `16`.
When we sum the floating-point numbers `4.0` and `4.0`, we get `8.0`.
When we concatenate `HackerRank` with `is the best place to learn and practice coding!`, we get `HackerRank is the best place to learn and practice coding!`.

You will not pass this challenge if you attempt to assign the Sample Case values to your variables instead of following the instructions above and reading input from stdin.

Good luck and happy coding! 🚀

## Day 2: Operators
[(Back to top)](#hi--welcome-to-my-coding-challenge-solutions-for-hackerranks-30-days-of-code-challenge)

### Objective:

In this challenge, you will work with arithmetic operators. Check out the [Tutorial](https://www.hackerrank.com/challenges/30-operators/tutorial) tab for learning materials and an instructional video!

### Task:

Given the meal price (base cost of a meal), tip percent (the percentage of the meal price being added as tip), and tax percent (the percentage of the meal price being added as tax) for a meal, find and print the meal's total cost. Round the result to the nearest integer.

### Example:

```
meal_cost = 100
tip_percent = 15
tax_percent = 8
```

A tip of 15% * 100 = `15`, and the taxes are 8% * 100 = `8`. Print the value `123` and return from the function.

### Function Description:

Complete the `solve()` function in the [Day2-Operators.js](Day2-Operators.js) file.

`solve()` has the following parameters:

- int `meal_cost`: the cost of food before tip and tax
- int `tip_percent`: the tip percentage
- int `tax_percent`: the tax percentage

### Returns:

The function returns nothing. Print the calculated value, rounded to the nearest integer.

**Note**: Be sure to use precise values for your calculations, or you may end up with an incorrectly rounded result.

### Input Format:

There are 3 lines of numeric input:

1. The first line has a `double`, `meal_cost` (the cost of the meal before tax and tip).
2. The second line has an `integer`, `tip_percent` (the percentage of `meal_cost` being added as tip)
3. The third line has an `integer`, `tax_percent` (the percentage of `meal_cost` being added as tax).

### Sample Input:

```
12.00
20
8
```

### Sample Output:

```
15
```

### Explanation:

**Given**:
`meal_cost` = 12, `tip_percent` = 20, `tax_percent` = 8

**Calculations**:

`tip` = 12 and 12/100 * 20 = `2.4` <br>
`tax` = 8 and 8/100 * 20 = `0.96` <br>
`total_cost` = `meal_cost` + `tip` `+` `tax` = `12` + `2.4` + `0.96` = `15.36` <br>
round(`total_cost`) = `15`

We round `total_cost` to the nearest integer and print the result, `15`.

Good luck and happy coding! 🚀

## Day 3: Intro to Conditional Statements
[(Back to top)](#hi--welcome-to-my-coding-challenge-solutions-for-hackerranks-30-days-of-code-challenge)

### Objective:

In this challenge, we learn about conditional statements. Check out the [Tutorial](https://www.hackerrank.com/challenges/30-conditional-statements/tutorial) tab for learning materials and an instructional video!

### Task:

Given an integer, `n`, perform the following conditional actions:

1. If `n` is odd, print `Weird`.
2. If `n` is even and in the inclusive range of `2` to `5`, print `Not Weird`.
3. If `n` is even and in the inclusive range of `6` to `20`, print `Weird`.
4. If `n` is even and greater than `20`, print `Not Weird`.

Complete the stub code provided in the [Day3-IntroToConditionalStatements.js](Day3-IntroToConditionalStatements.js) file to print whether or not `n` is weird.

### Input Format:

A single line containing a positive integer, `n`.

**Constraints**: `1 <= n <= 100`

### Output Format:

Print `Weird` if the number is weird; otherwise, print `Not Weird`.

### Sample Input 0:

```
3
```

### Sample Output 0:

```
Weird
```

### Sample Input 1:

```
24
```

### Sample Output 1:

```
Not Weird
```

### Explanation:

Sample Case 0: `n = 3`

`n` is odd and odd numbers are `weird`, so we print `Weird`.

Sample Case 1: `n = 24`

`n` > 20 and `n` is even, so it is `not weird`. Thus, we print `Not Weird`.

Good luck and happy coding! 🚀

## Coming Soon!
[(Back to top)](#hi--welcome-to-my-coding-challenge-solutions-for-hackerranks-30-days-of-code-challenge)

### Day 4: Class Vs. Instance
### Day 5: Loops
### Day 6: Let's Review
