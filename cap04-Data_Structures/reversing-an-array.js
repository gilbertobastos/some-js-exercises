function reverseArray(array)
{
    var reversedArray = [];
    for (var i = array.length - 1; i >= 0; i--)
    {
	reversedArray.push(array[i]);
    }

    return reversedArray;
}

function reverseArrayInPlace(array)
{
    /* Iterating to the middle of the array and
       swaping the items of the array. */
    for (var i = 0;
	 i <= Math.floor((array.length -1) / 2);
	 i++)
    {
	/* Swaping the "i-th" item of the array
	   by the "array lenght" minus "i" item. */
	var swapPos = array.length - 1 - i;
	var swapItem = array[swapPos];
	array[swapPos] = array[i];
	array[i] = swapItem;
    }
}

console.log(reverseArray(["A", "B", "C"]));
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
