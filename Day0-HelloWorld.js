function processData(inputString) {
  // This line of code prints the first line of output
  console.log("Hello, World.");

  // < ----------------------- My Solution Starts Here ----------------------- >
  // Write the second line of output that prints the contents of 'inputString'
  // here.
  console.log(inputString);
  // < ------------------------ My Solution Ends Here ------------------------ >
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
