import { add } from './add.js';
import { division } from './division.js';
import { multiply } from './multiply.js';
import { substraction } from './substraction.js';

import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

const inputs = process.argv

const result = inputs[2].split(' ')

myEmitter.on('add', () => console.log(add(Number(result[0]), Number(result[1]))));

myEmitter.on('division', () =>  console.log(division(Number(result[0]), Number(result[1]))));

myEmitter.on('multiply', () =>  console.log(multiply(Number(result[0]), Number(result[1]))));  

myEmitter.on('substraction', () =>  console.log(substraction(Number(result[0]), Number(result[1]))));
     

myEmitter.emit(result[2]);
