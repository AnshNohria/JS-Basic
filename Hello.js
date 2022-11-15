console.log("Hello");
const a= 10;
const b= 20;
console.log(a+b)
if (a<b )
 console.log("r");
else
 console.log("t")
 for( let I= 0; I< 10; I++)
 console.log(I)
//  try
//  throw new error(*cant divide by 0*)
//  catch(error) console.log("error"
var oneLinerJoke = require('one-liner-joke');

/*
The variable getRandomJoke will contain a random joke with a format:
{"body":"Artificial intelligence is no match for natural stupidity.","tags":["intelligence","stupid"]}
*/
var getRandomJoke = oneLinerJoke.getRandomJoke();
console.log(getRandomJoke)
 const cowsay = require("cowsay");

console.log(cowsay.say({
    text : getRandomJoke.body,
    e : "Oo",
    T : " U "
}));
var aa = { name: "Ansh" , class:"college }
console.log{aa.class}
