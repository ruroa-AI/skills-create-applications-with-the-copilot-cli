#!/usr/bin/env node
// Node.js CLI calculator
// Supported operations (from provided image):
//   addition (+)
//   subtraction (-)
//   multiplication (× or *)
//   division (÷ or /)

const { add, subtract, multiply, divide } = require('./calculator');

function printUsage() {
  console.log('Usage: node src/cli.js <number> <operator> <number>');
  console.log('Operators: +  -  *  /');
  console.log('Examples:');
  console.log('  node src/cli.js 2 + 3');
  console.log('  node src/cli.js 10 / 4');
}

function parseNumber(str) {
  const n = Number(str);
  if (Number.isNaN(n)) {
    throw new Error(`Invalid number: ${str}`);
  }
  return n;
}

async function main() {
  const argv = process.argv.slice(2);
  if (argv.length !== 3) {
    printUsage();
    process.exit(1);
  }

  let [aRaw, op, bRaw] = argv;
  try {
    const a = parseNumber(aRaw);
    const b = parseNumber(bRaw);
    let result;

    switch (op) {
      case '+':
        result = add(a, b);
        break;
      case '-':
        result = subtract(a, b);
        break;
      case '*':
      case '×':
        result = multiply(a, b);
        break;
      case '/':
      case '÷':
        result = divide(a, b);
        break;
      default:
        console.error(`Unsupported operator: ${op}`);
        printUsage();
        process.exit(2);
    }

    console.log(result);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(2);
  }
}

main();
