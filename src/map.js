// const arr = [2,4,5,7,9];

// const output = arr.map(ele => {
//     return 4*ele;
// });

// //console.log(output);
// //Filter is used to filter values
// const arr2 =  [2,3,4,4,5,6,6,7,8,8];
// //arr.filter()

// let a = [10, 20, 20, 30, 40, 50, 50];

// // Using filter with indexOf to find the repeated elements
// a1 = a.filter((item, index) => {
//     //console.log(item, a.indexOf(item),index)
//     return a.indexOf(item) === index
// });
// a2 = a.filter(ele => ele >=40);
// //console.log(a2);

// //Reduce- comes with single value using array

// a3 = function (a){
//     let sum =0;
//     for(let i = 0; i<a.length; i++){
//         console.log(a[i]);
//         sum += a[i];
//     }
//     return sum;
// }
// console.log(a3(a));

// let max = a.reduce(function (acc, curr){
//     if(acc < curr) acc = curr;
//     return acc;
// },0);
// console.log(max);

function f(){
    console.log("Hi");
}
//f();
var f = 30;
let r = parseInt("101",3); // 5

console.log(r);

const b = new Boolean(false);
if (b) {
    console.log("yes",b);
  // this condition evaluates to true
}
if (b == true) {

    console.log("No");

  // this condition evaluates to false
}
