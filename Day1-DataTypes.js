process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
  input_stdin += data;
});

process.stdin.on('end', function () {
  input_stdin_array = input_stdin.split("\n");
  main();
});

// Reads complete line from STDIN
function readLine() {
  return input_stdin_array[input_currentline++];
}

function main() {
  var i = 4
  var d = 4.0
  var s = "HackerRank "
  // < ----------------------- My Solution Starts Here ----------------------- >

  let int;
  let doub;
  let str;

  int = parseInt(readLine());
  doub = parseFloat(readLine());
  str = String(readLine());

  console.log(i + int);

  console.log((d + doub).toFixed(1));

  console.log(s + str);
  // < ------------------------ My Solution Ends Here ------------------------ >
}
