/**
 * ternary--> three parts
 *
 *
 *
 * ?   :
 *
 * condition ? do something when true : do something when false
 */

//const age = 20;
// if(age>18){
//     console.log('you can vote');
// }
// else{
//     console.log('gumai thako');
// }

// above items short cut

//age >= 18 ? console.log('vote diyo') : console.log('gumai thako')

let price = 500;
const isLeader = false;

if (isLeader === true) {
  price = 0;
} else {
  price = price + 100;
}
console.log(price); 

 isLeader === true ? 0 : price + 100;



