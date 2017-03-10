function range(start, end, step)
{
    if (step == undefined)
	step = 1;
    
    var rangeArray = [];    
    for (var num = start;
	 start > end ? num >= end : num <= end;
	 num+= step)
    {
	rangeArray.push(num);
    }

    return rangeArray;
}

function sum(array)
{
    var arraySum = 0;
    for (var i = 0; i < array.length; i++)
    {
	arraySum += array[i];
    }

    return arraySum;
}

console.log(range(1, 10)); // [1, 2, ..., 10]
console.log(range(5, 2, -1));
console.log(sum(range(1, 10))); // 55

