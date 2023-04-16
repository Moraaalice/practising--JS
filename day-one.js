//Day one practising js
//Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'
let challenge = "30 days of javaScript";
console.log(challenge.length);
//changing the string to uppercase
let challenge2 = challenge.toUpperCase();
console.log(challenge2);
//changing the string to lowercase
let challenge3 = challenge.toLowerCase();
console.log(challenge);
//slicing out a part of a string using substr and substring
let challenge4 = challenge.substring(0,1);
console.log(challenge4);
let challenge5 = challenge.substr(0,1);
console.log(challenge5);
let challenge6 = challenge.substr(3,18);
console.log(challenge6);
let challenge7 = challenge.substring(3);
console.log(challenge7);
//using includes to check if the substring is in the string
let challenge8 = challenge.includes("Script");
console.log(challenge);
//spltting the strings to make it an array
let challenge9 = challenge.split(" ");
console.log(challenge9);
//
let challenge10 = challenge.split();
console.log(challenge10);
//
let companies = "Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon";
let companies2 = companies.split(",");
console.log(companies2);
//using the replace method to change a substring in a word
let challeng = challenge.replace("javaScript","Python");
console.log(challeng);
//
let challeng2 =  challenge.charAt(15);
console.log(challeng2);
//
let challeng3 = challenge.charCodeAt("j");
console.log(challeng3);
//
let challeng4 = challenge.indexOf("a");
console.log(challeng4);
//
let challeng5 = "You cannot end the sentence with a conjuction because because because is a conjucction"
let challeng6 = challeng5.lastIndexOf("because");
console.log(challeng6);
let challeng7 = challeng5.indexOf("because");
console.log(challeng7);
//the .match method
let challeng8 = challeng5.match(/because/g);
console.log(challeng8);
//trimming any white spaces found
let challeng9 = challenge.trim();
console.log(challeng9);
//the starts with and endswith method
let challeng10 = challenge.startsWith("30");
console.log(challeng10);
let challen = challenge.endsWith("Script");
console.log(challen);
//
let challen2 = challenge.match(/a/g);
console.log(challen2);
//
let challen3 = challenge.repeat(2);
console.log(challen3);
//
let talk = "The quote \"there is no exercise better for the heart than reaching down and lifting people\"by John Holmes teaches us to help one another";
console.log(talk);
let speak = "Love is not patronizing,and charirty is not about pitty,it\'s about love .charity and love are the same  -- with charity you give love ,so don\'t just give out money but reach out your hand instead";
console.log(speak);
//
let word = "python and jargon";
let word2 = word.includes("on");
console.log(word2);
//
let sentence = "I hope this course is not full of jargon";
let sentence2 = sentence.includes("jargon");
console.log(sentence2);
//generating random numbers
const x = Math.floor(Math.random()*(100-0)+0);
console.log(x);
//Generate a random number between 50 and 100 inclusively.
const a = Math.floor(Math.random()*(100-50)+50);
console.log(a);
//Generate a random number between 0 and 255 inclusively.
const i = Math.floor(Math.random()*(255-0)+0);
console.log(i);
//Access the 'JavaScript' string characters using a random number
const languages = "JavaScript";
let language = Math.random(languages);
console.log(language);
//
let phrase = "You cannot end a sentence with  because because because is a conjuction";
let phrase2 = phrase.substr(31,24);
console.log(phrase2);
//
