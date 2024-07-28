const { c, cpp, node, python, java } = require('compile-run');
/*//python
const resultPromise = python.runFile('./python.py', { stdin: '10\n5\n ' });
resultPromise
  .then(result => {
    console.log(result); // Result object with stdout, stderr, exitCode, etc.
  })
  .catch(err => {
    console.error(err);
  });*/



// java 


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the first number: ', (firstNumber) => {
    rl.question('Enter the second number: ', (secondNumber) => {
        const input = `${firstNumber}\n${secondNumber}\n`;

        java.runFile('./Sum.java', { stdin: input })
            .then(result => {
                console.log(result.stdout); // Output from the Java program
                console.log(result.stderr); // Error output, if any
                console.log(result.exitCode); // Exit code of the Java program

            })
            .catch(err => {
                console.error(err);
            })
            .finally(() => {
                rl.close();
            });
            console.log("hellloooooo");
    });
});
