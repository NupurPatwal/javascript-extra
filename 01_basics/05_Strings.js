const name ="Nupur patwal";
let value =1;
// console.log(name + value + "inthe world");  is a very outdated method to write codes.
console.log(`hello my name is ${name} patwal and my position is no.  ${value} in every coding platform in the world.`);
// this is the modern way of syntaxing in the js and very easy as well as efficient to use. it is also known as string interpollation
// another way of declaring the string is:
 const discord = new String('rupun');

//  console.log(discord.charAt(3));
//  console.log(discord.indexOf ('n'));

 //few more methods for string declaration:-
const newString = name.substring(0,3); // the last character is excluded 
// console.log(newString);

const new2 = name.slice(-12,9);
// console.log(new2);

const n= "                   nupur      ";
// console.log(n);
// console.log(n.trim());

let url ="www-google.com";
console.log(url.replace("-", '.'));
console.log(url.includes('google'));
console.log(url.split("."));