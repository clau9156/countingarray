"use strict";

window.addEventListener("load", countingArray);

// counts in the console
// new line every count

// every second "counter" increments(++) by 1

// "counter" then added to the start of an array

// array is "truncated" never becomes longer than 9
    // array = "truncated"
    const array = [0];
    // (0,9)
    //  if else so when if less then 9 stay line else loop

// array logged to the console
    // console.log(array)
    // (9) [8, 7, 6, 5, 4, 3, 2, 1, 0]
    // (9) [11, 10, 9]

// DESIGN
// two variables: the counter & the array
// only one should be "let" variable
    //  n = 1 adds one everytime
    let count = 0;

// one function
function countingArray() {
    console.log("countingArray");
    // make a program that counts (with time delay)
    count++;
    // delay
    setTimeout(countingArray, 1000);
    
    // counting in array
    console.log(array);
    // console.log(count);
    
    // <--- modify the program to insert the counter-value in the beginning of the array
        // .unshift (add item to the beginning of array)
        array.unshift(count);
    // <--- modify the program again, to make sure the array doesnt get longer than nine items.
        // array.splice(9,1);
        //  .pop()    
       if (array.length > 9) {
        array.pop();
       }
}