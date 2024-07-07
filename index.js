// Smallest Number
// var arr = [];
// var min = 100;
// for (let i = 0; i < 5; i++) {
//     var user = +prompt("Enter the number");
//     arr.push(user);
//     if (arr[i] < min){
//       min = arr[i];
//     }
// }
// console.log({arr});
// console.log({min});

// Celcius To Fahrenheit
// var user_input = +prompt("Enter your temprature in C");
// var fahrenheit = (user_input * 9/5)+32;
// console.log(fahrenheit);

// Reverse An Array
// var arr = [];
// for (let i = 0; i < 5; i++) {
//     var user = prompt("Enter the string in arr");
//     arr.push(user);
// }
// console.log({arr});
// var reversed = [];
// for(let j = arr.length-1; j >= 0; j--){
//     reversed.push(arr[j]); 
// }
// console.log({reversed});

// Average of Array
var arr = [];
for (let i = 0; i < 5; i++) {
    var user = +prompt("Enter the number in array");
    arr.push(user);
}
console.log({arr});
var sum = 0;
for (var i = 0; i < arr.length; i++ ){
  sum += arr[i];
}
average = sum / 5;
console.log(`the average of an 5 element array: ${average}`);
