/*popFront(arr)
Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().

For example, popFront([5, 93, 22, 4]) should return 5 and the original array should result as [93, 22, 4].*/

function popFront(arr){
    var first = arr[0];
    var myLength = arr.length-1;
    var myArr = [];
    //console.log("first",first);
    //console.log("newArr",myArr);
    for (var i = 1; i <= arr.length-1; i++){
        myArr[i-1] = arr[i];
        //console.log("short_array",myArr)
    }
    myArr[myLength] = first;
    myPop = myArr.pop()
    console.log(myArr)
    //console.log("finalArray",myArr);
    return myPop
}
 

//call the function with suggested array parameter
var myArray = popFront([5, 93, 22, 4]);
console.log(myArray)
