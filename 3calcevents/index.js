import { add } from './add.js';
import { division } from './division.js';
import { multiply } from './multiply.js';
import { substraction } from './substraction.js';
import { EventEmitter } from "events";
const myEmitter = new EventEmitter();

const inputs = process.argv
const result = inputs[2].split(' ')

myEmitter.on('add', () => add(Number(result[0]), Number(result[1])));
myEmitter.on('division', () => division(Number(result[0]), Number(result[1])));
myEmitter.on('multiply', () => multiply(Number(result[0]), Number(result[1])));   
myEmitter.on('substraction', () => substraction(Number(result[0]), Number(result[1])));
     
myEmitter.emit(result[2]);


