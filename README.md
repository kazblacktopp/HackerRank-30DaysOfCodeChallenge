# HackerRank - 30 Days of Code Challenge:

## Day 0: Hello World

### Objective:

In this challenge, we review some basic concepts that will get you started with this series. You will need to use the same (or similar) syntax to read input and write output in challenges throughout HackerRank. Check out the Tutorial tab for learning materials and an instructional video!

### Task:

To complete this challenge, you must save a line of input from stdin to a variable, print `Hello, World.` on a single line, and finally print the value of your variable on a second line.

You've got this!

### Input Format:

A single line of text denoting `inputString` (the variable whose contents must be printed).

### Output Format:

Print `Hello, World.` on the first line, and the contents of `inputString` on the second line.

###  Sample Input:

Welcome to 30 Days of Code!

### Sample Output:

Hello, World.
Welcome to 30 Days of Code!

### Explanation:

On the first line, we print the string literal `Hello, World.`. On the second line, we print the contents of the `inputString` variable which, for this sample case, happens to be Welcome to 30 Days of Code!. If you do not print the variable's contents to stdout, you will not pass the hidden test case.

## Day 1: Data Types

### Objective:

Today, we're discussing data types. Check out the Tutorial tab for learning materials and an instructional video!

### Task:

Complete the code in the editor below. The variables `i`, `d`, and `s` are already declared and initialized for you. You must:

1. Declare 3 variables: one of type `int`, one of type `double`, and one of type `String`.
2. Read 3 lines of input from `stdin` (according to the sequence given in the `Input Format` section below) and initialize your 3 variables.
3. Use the `+` operator to perform the following operations:
 a. Print the sum of `i` plus your `int` variable on a new line.
 b. Print the sum of `d` plus your `double` variable, to a scale of one decimal place, on a new line.
 c. Concatenate `s` with the `string` you read as input and print the result on a new line.

**Note**: If you are using a language that doesn't support using `+` for string concatenation (e.g. C), you can just print one variable immediately following the other on the same line. The string provided in your editor must be printed first, immediately followed by the string you read as input.

### Input Format:

The first line contains an `integer` that you must sum with `i`.
The second line contains a `double` that you must sum with `d`.
The third line contains a `string` that you must concatenate with `s`.

### Output Format:

Print the sum of both integers on the first line, the sum of both doubles (scaled to 1 decimal place) on the second line, and then the two concatenated strings on the third line. 

### Sample Input:

`12`.
`4.0`.
`is the best place to learn and practice coding!`.

### Sample Output:

`16`.
`8.0`.
`HackerRank is the best place to learn and practice coding!`.

### Explanation:

When we sum the integers `4` and `12`, we get the integer `16`.
When we sum the floating-point numbers `4.0` and `4.0`, we get `8.0`.
When we concatenate `HackerRank` with `is the best place to learn and practice coding!`, we get `HackerRank is the best place to learn and practice coding!`.

You will not pass this challenge if you attempt to assign the Sample Case values to your variables instead of following the instructions above and reading input from stdin.

## Day 2: Operators

### Objective:

In this challenge, you will work with arithmetic operators. Check out the Tutorial tab for learning materials and an instructional video.

### Task:

Given the meal price (base cost of a meal), tip percent (the percentage of the meal price being added as tip), and tax percent (the percentage of the meal price being added as tax) for a meal, find and print the meal's total cost. Round the result to the nearest integer.

### Example:

`meal_cost` = `100`
`tip_percent` = `15`
`tax_percent` = `8`

A tip of 15% * 100 = `15`, and the taxes are 8% * 100 = `8`. Print the value `123` and return from the function.

### Function Description:

Complete the `solve` function in the editor below.

`solve` has the following parameters:

int `meal_cost`: the cost of food before tip and tax
int `tip_percent`: the tip percentage
int `tax_percent`: the tax percentage

### Returns:

The function returns nothing. Print the calculated value, rounded to the nearest integer.

**Note**: Be sure to use precise values for your calculations, or you may end up with an incorrectly rounded result.

### Input Format:

There are 3 lines of numeric input:

1. The first line has a `double`, `meal_cost` (the cost of the meal before tax and tip).
2. The second line has an `integer`, `tip_percent` (the percentage of `meal_cost` being added as tip) 3. The third line has an `integer`, `tax_percent` (the percentage of `meal_cost` being added as tax).

### Sample Input:

12.00
20
8

### Sample Output:

15

### Explanation:

**Given**:
`meal_cost` = 12, `tip_percent` = 20, `tax_percent` = 8

**Calculations**:

tip = 12 and 12/100 * 20 = 2.4
tax = 8 and 8/100 * 20 = 0.96
`total_cost` = `meal_cost` + tip `+` tax = 12 `+` 2.4 + 0.96 = 15.36
round(`total_cost`) = 15

We round `total_cost` to the nearest integer and print the result, 15.

## Day 3: Intro To Conditional Statements


## Day 4: Class Vs. Instance


## Day 5: Loops


## Day 6: Let's Review
