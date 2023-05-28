/* Make a function that takes as input a nested array with customer location coordinates and returns the 
coordinate that produces the least distance from all nested coordinates.*/

/*Here's what we know: City blocks are perfect squares, and every street is two-way, at perfect right angles. 
He only parks by street corners (coordinates like [37,-16]). Customers only travel on streets: coordinate [2,-2] 
is distance 4 from [0,0]. Joe checks the array before deciding where to park. Given a customer coordinate array, 
return an optimal taco truck location.*/

/*Example nested array coordinates of customers: [[-3,7],[0,-2],[5,10],[-7,-8]] would return [-1,2]*/

function idealParkCoordinate(nestedArr){
    var x_sum = 0;
    var y_sum = 0;
    for (var i = 0; i < nestedArr.length; i++) {
        var subArr = nestedArr[i];
        var x_sum = x_sum + subArr[0];
        var y_sum = y_sum + subArr[1];
    }
    var x_coord = Math.round(x_sum/nestedArr.length);
    var y_coord = Math.round(y_sum/nestedArr.length);
    var truck_coord = [x_coord,y_coord];
    return truck_coord
}
console.log(idealParkCoordinate([[-3,7],[0,-2],[5,10],[-7,-8]]));
