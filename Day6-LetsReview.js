function processData(input) {
    let evenString = [];
    let oddString = [];
    if (typeof input === 'string') {
        for (let i = 0; i < input.length; i++) {
            let strItem = input.charAt(i);
            if (i === 0 || i % 2 === 0) {
                evenString.push(strItem);
            } else {
                oddString.push(strItem);
            }
        };
    }
    console.log(evenString.join("") + " " + oddString.join(""));
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
