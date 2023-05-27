//STEP 1
/*For example, if your array is [1, 2, 3, 4, 5] and your value for n is 2, the array should look l
ike [4, 5, 1, 2, 3] - the 1 at the beginning of the array has moved two indexes to the right. 
It was originally at index 0, and now it can be found at index 2. The 5 at the end of the array was 
originally at index 4, but now it can be found at index 1.

This function should operate in-place - the array you are given should be the array you return. 
The final line of your function should probably be return arr;, and you probably don't need to declare a 
new array in your function (although it may be helpful, and is part of a valid answer).*/

function rotateArray(arr, n) {
    var len = arr.length-1
    for (var i = 0; i < n; i++) {
        var last_val = arr[len]
        //shift all values over to the right
        for (var j = 0; j < len; j++) {
            arr[len-j] = arr[len-(j+1)];
        }
        arr[0] = last_val;
    }
    return arr
}
 
console.log(rotateArray([1,2,3,4,5],2));

//STEP 2
/*Now that your function passes the above test cases, we'll be adding in some new ones - if 
your function doesn't already do so, it now needs to handle a new scenario: the value of n being 
longer than the length of the array.

For example, if your input array is [1, 2, 3, 4, 5] and the value of n is 5, the state of the array 
after the function runs will be [1, 2, 3, 4, 5] - all the items have moved five places to the right. 
This means, effectively, that they haven't moved at all.
In a similar vein, if your input array is [1, 2, 3, 4, 5] and your value for n is 6, the state of the
array after the function runs will be [5, 1, 2, 3, 4] - each item has moved six places to the right.*/

function rotateArray(arr, n) {
    var len = arr.length-1
    for (var i = 0; i < n; i++) {
        var last_val = arr[len]
        //shift all values over to the right
        for (var j = 0; j < len; j++) {
            arr[len-j] = arr[len-(j+1)];
        }
        arr[0] = last_val;
    }
    return arr
}
 
console.log(rotateArray([1,2,3,4,5],6));


/*STEP 3
The final thing to add to your function is the ability for it to handle values of n that are 
negative - meaning that the items will move n positions to the left rather than to the right. - 
For example, if your input array is [1, 2, 3, 4, 5] and the value of n is -2, the state of the array 
after the function runs will be [3, 4, 5, 1, 2] - all the items have moved two places to the left. - 
The code should still be able to handle values of n that are negative, as well as both positive and 
negative values that are greater than the length of the array. If your input array is ["Addis Ababa", 
"Buraydah", "Chicago"] and the value for n is -6, your result should be ["Addis Ababa", "Buraydah", 
"Chicago"] (the same array you input).

Hint
Think about the difference between rotating the values in the array to the left vs. to the right 
- how many different ways can you rotate the array [1, 2, 3] to the left or the right and get the 
result [3, 1, 2]?*/

function rotateArray(arr, n) {
    var len = arr.length-1
    if (n >= 0) {
        for (var i = 0; i < n; i++) {
            var last_val = arr[len]
            //shift all values over to the right
            for (var j = 0; j < len; j++) {
                arr[len-j] = arr[len-(j+1)];
            }
            arr[0] = last_val;
        }
    } else {
        var position = (-1*n);
        for (var i = 0; i < position; i++) {
            var first_val = arr[0];
            //shift all values over to the left
            for (var j = 0; j < len; j++) {
                arr[j] = arr[j+1];
            }
            arr[len] = first_val;
        }
    }
    return arr
}
 
console.log(rotateArray([1,2,3,4,5],-2));
