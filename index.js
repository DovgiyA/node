import { add } from './add.js';
import { division } from './division.js';
import { multiply } from './multiply.js';
import { substraction } from './substraction.js';

const inputs = process.argv
const result = inputs[2].split(' ')

    if (result[2] === 'add') {
        console.log(add(Number(result[0]), Number(result[1])))
    }

     if (result[2] === 'division') {
        console.log(division(Number(result[0]), Number(result[1])))
    }

     if (result[2] === 'multiply') {
        console.log(multiply(Number(result[0]), Number(result[1])))
    }

     if (result[2] === 'substraction') {
        console.log(substraction(Number(result[0]), Number(result[1])))
    }
    