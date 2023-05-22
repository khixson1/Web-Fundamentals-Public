/*minToFront(arr)
Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order.

Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

For example, minToFront([5, 93, 22, 4]) should return [4, 5, 93, 22].*/

function minToFront(arr) {
    var newMin = arr[0]
    for (var i = 0; i < arr.length; i++) {
        if (newMin < arr[i]) {
            var newMin = newMin;
        } else {
            var newMin = arr[i];
        }
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == newMin) {
            var newMinIndex = i
        }
    }
    var newArray = [newMin];
    for (var i = 1; i <= newMinIndex; i++){
        newArray[i] = arr[i-1];
    }    
    for (var i = newMinIndex + 1; i < arr.length; i++) {
        newArray[i] = arr[i];
    }
    arr = newArray
    return arr
}

//call the function with array parameter
var newOrder = minToFront([4,2,1,3,5]);
console.log(newOrder);
