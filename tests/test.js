/*jslint
    node
*/
const assert = require("assert").strictEqual;
const makeGreeting = require("../index");

assert(makeGreeting(), "Hello world!");
assert(makeGreeting("Zach"), "Hello Zach!");
assert(makeGreeting("", "Spanish"), "¡Hola mundo!");
console.log("Success");
