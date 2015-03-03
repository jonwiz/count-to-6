/*jshint esnext: true*/
var args = process.argv.slice(2);

var firstLetters = args.map(val => val[0])
.reduce((prev,cur) => prev + cur);

console.log(`[${args}] becomes "${firstLetters}"`);
