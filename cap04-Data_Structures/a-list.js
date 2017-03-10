function arrayToList(array)
{
    /* The first node of the list. */
    var list = {
	value: array[0],
	rest: null
    };

    /* Actual node of the list. */
    var actualNode = list;

    /* Iterating through the array and
       making the list. */
    for (var i = 1; i < array.length; i++)
    {
	/* Making the node for the "i-th"
	   item of the array, on the list. */
	actualNode.rest = {
	    value: array[i],
	    rest: null
	};

	/* Updating the reference to make the
	   variable "actualNode" points to the
	   last item of the list (until now). */
	actualNode = actualNode.rest;
    }

    /* Finally, returning the list. */
    return list; // First node of the list... 
}

function listToArray(list)
{
    var array = [];

    /* Actual node of the list. */
    var actualNode = list;
    
    /* Iterating through the list and
c0       making the array. */
    while (actualNode != null)
    {
	array.push(actualNode.value);
	actualNode = actualNode.rest;
    }

    return array;
}

function prepend(element, list)
{
    var newList = element;

    /* Actual nodes of the lists. */
    var actualNodeNewList = newList;
    var actualNodeOriginalList = list;

    /* Iterating through the original
       list and making the new list. */
    while (actualNodeOriginalList != null)
    {
	actualNodeNewList.rest = {
	    value: actualNodeOriginalList.value,
	    rest: {}
	};

	actualNodeOriginalList = actualNodeOriginalList.rest;
	actualNodeNewList = actualNodeNewList.rest;
    }

    return newList;
}

function nth(list, num)
{
    /* Actual node of the list. */
    var actualNode = list;

    /* Iterating through the list
       until the position "num". */
    var pos = 0;
    
    while (actualNode != null)
    {
	/* Checking if the actual item 
	   is the wanted item. */
	if (pos == num)
	{
	    /* Returning the item of the
	       list. */
	    return actualNode;
	}

	actualNode = actualNode.rest;
	pos++;
    }

    /* If the list dont have the
       wanted item, then undefined
       is returned. */
    return undefined;
}

function nthRecursive(list, num, pos)
{
    /* Verifying if the node at this position
       is valid. */
    if (list == null)
    {
	/* If it is invalid, then undefined is
	   returned. */
	return undefined;
    }
    
    /* If the "pos" paramameter is
       undefined, this mean that is
       the first call to the function. */
    if (pos == undefined)
    {
	pos = 0;
    }

    /* If the node is valid, verifying if the
       node is the wanted node. */
    if (num == pos)
    {
	/* Returning the wanted node. */
	return list;
    }    

    /* Veryfing the next node... */
    return nthRecursive(list.rest, num, ++pos);
}

var list = {
    value: "OI",
    rest: {
	value: "TUDO",
	rest: {
	    value: "BEM",
	    rest: null
	}
    }
};

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
console.log(nthRecursivefuckfuc(arrayToList([10, 20, 30]), 1));
