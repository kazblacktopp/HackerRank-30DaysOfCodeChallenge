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

  this.amIOld = function () {
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

  this.yearPasses = function () {
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
