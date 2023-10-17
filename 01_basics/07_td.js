// Dates in js
let date= new Date();
// console.log(date.toString()); o/p is below:
//Tue Oct 17 2023 09:10:31 GMT+0000 (Coordinated Universal Time)  

// console.log(date.toDateString()); 
// Tue Oct 17 2023 op

// console.log(date.toISOString()); 
//2023-10-17T09:15:03.498Z

// console.log(date.toJSON()); 2023-10-17T09:15:29.300Z


// console.log(date.toLocaleDateString()); 10/17/2023

// console.log(date.toLocaleTimeString());  9:16:22 AM

// console.log(date.toUTCString()); Tue, 17 Oct 2023 09:17:16 GMT
// console.log(date.toTimeString()); 
//  09:17:31 GMT+0000 (Coordinated Universal Time)

// console.log(typeof date);
let todaydate = new Date(2023,9,17);
console.log(todaydate.toDateString());

let mytimestamp= Date.now();
//they are in mili seconds
// console.log(mytimestamp); 
// console.log(todaydate.getTime());

// when we have to put these values in seconds
// console.log(Math.floor(Date.now()/1000));

// console.log(newDate.getMonth());
// console.log(Date.now());

let dateNew = new Date();
console.log(dateNew);
console.log(dateNew.getMonth());
console.log(dateNew.getDay());
console.log(dateNew.getFullYear());





