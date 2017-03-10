var arrays = [[1, 2, 3], [4, 5], [6]];

var newArray = arrays.reduce(
    function(current, element)
    { return current.concat(element);}
    , []);

console.log(newArray);
