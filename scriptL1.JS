
/*
We can declare variables in 3 ways var, let and const (constant)
variables declare with var is global scope and global level declaration
variable declare with const and let are block scope
once we declare variables with const, we would not able to reassingn the values
//hositing for var its global scope! const and let are block scope
//variable hoisting will work variables declare with var, for let and const output
will be uncaught ref error and undefined
*/
 /*varibles
 let name="krishna";
console.log(name);
 
var place ="somePlace";
console.log(place);

const country ="someCountry";
console.log(country);*/

//Hoisting will work for var (global) not for const and let (block)
 console.log(name1);
 var name1="sample";

 console.log(place1);
 let place1= "someWhere";

 console.log(country1);
 const country1="random";