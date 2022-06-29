
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

/*Hoisting will work for var (global) not for const and let (block)
 console.log(name1);
 var name1="sample";
 //output undefined

 console.log(place1);
 let place1= "someWhere";
 //op:uncaught reference error name is not defined

 console.log(country1);
 const country1="random";
  //op:uncaught reference error name is not defined
*/

/*hositing will work only with function declaration not using fucntion expression
//function declaration hositing on the top
name3();
function name3 (){
    console.log("random name");
}
VM3703:3 random name
undefined

//function expression
let name = function() {
    console.log("somename");
}
name();
VM3968:2 somename
undefined

//hoisting function expression will not work
name1();
let name1 = function() {
    console.log("somename");
}
*/

/*x++ excutes the statement and then increments the value, ++x
increments the values and execute the SVGPatternElement.

let x =10;
x++;
console.log(x);
VM4143:3 11
undefined
let y =20;
++y;
console.log(y);
VM4237:3 21
undefined
let z=22;
z--;
console.log(z);
VM4318:3 21
undefined
let p=34;
--p;
console.log(p);
VM4419:3 33
*/

/*
Better way of writing concatnation is template literals
let name= "something";
console.log("welcome to the club" +" " + name);
VM5078:2 welcome to the club something
undefined
let firstName = "krishna";
let lastName = "Koli";

console.log (`my firstName is not ${firstName} and my lastName is not ${lastName}`);
VM5621:4 my firstName is not krishna and my lastName is not Koli

//declaring multiple varibles in a singlemline
var name="thomas", age=33, birth="can";
console.log(name);
VM6398:2 thomas
undefined
console.log(name, age, birth);
VM6552:1 thomas 33 can
undefined
var [na, ag, pl] = ['hi', 22, 45];
console.log(na)
VM6703:2 hi
undefi

let name = 'a,b,c,d';
console.log(name);
VM7298:2 a,b,c,d

let places= 'hnk,wgl,hyd';
console.log(places);
VM7573:2 hnk,wgl,hyd
undefined
console.log(places.substring(1));
VM7713:1 nk,wgl,hyd
undefined
console.log(places.substr(1,3));
VM7869:1 nk,

//we can declare array in 2 ways
let family = ['poo','dev','pal'];
console.log(family);
VM8879:2 (3) ['poo', 'dev', 'pal']
undefined
let other=new Array('wel','come','gym');
console.log(other);
VM9160:2 (3) ['wel', 'come', 'gym']
 
to access array
let family = ['poo','dev','pal'];
console.log(family);
VM9169:2 (3) ['poo', 'dev', 'pal']
undefined
console.log(family[1]);
VM9271:1 dev
undefined
console.log(family[5]);
VM9388:1 undefined

*/
let name ="sample";
console.log(name);

















