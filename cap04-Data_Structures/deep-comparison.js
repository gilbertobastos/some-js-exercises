function deepEqual(value1, value2)
{
    /* Checking if the two values are of
       different types. */
    if (typeof value1 != typeof value2)
    {
	/* They are different values. */
	return false;
    }
    
    /* Checking if the two values are
       a object. */
    if (typeof value1 == 'object')
    {
	/* Checking if the two objects have
	   the same quantity of parameters. */
	if (Object.keys(value1).length !=
	    Object.keys(value2).length)
	    return false; // They are different objects...
	
	/* Iterating through the parameters of
	   one of the values and checking if this
	   parameters are presents on the other
	   value. */
	for (var objectName in value1)
	{   
	    /* Checking if the parameter "objectName" of the
	       "value1" are present on the "value2". */
	    if (value2[objectName] != undefined)
	    {
		/* First, checking if the parameter "objectName" 
		   are a object on the first value. */
		if (typeof value1[objectName] == 'object')
		{
		    /* Checking if the parameter "objectName" are a
		       object on the second value. */
		    if (typeof value2[objectName] == 'object')
		    {
			/* Performing a deep comparison... */
			if (deepEqual(value1[objectName], value2[objectName]))
			    continue; // If the two objects of the two values are equal
			else
			    return false; // They are different objects	    
		    }
		    else
			return false; // They are different objects
		}
		
		/* If the parameter is presente, checking if the
		   value is the same on the two objects. */
		if (value1[objectName] == value2[objectName])
		    continue; // Jumping to the next iteration
		else
		    return false; // Values are different :-(
	    }
	    else
		return false; // The parameter is not present
	}

	/* If all parameter have the same value on the
	   two objects, return true. */
	return true;
    }
    
    /* Since the  two values are not objects,
       performing a simple comparison. */
    if (value1 == value2)
	return true;
    else
	return false;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
