function ArraySeq(array)
{
    /* The array (a convencional array)... */
    this.array = array;

    /* Points to the current element of the array
     (initially 0). */
    this.currentElementPointer = 0;
}

/* Will return the current element of the array and
 update de current element pointer to point to the
 next element. */
ArraySeq.prototype.nextElement =
    function() {
	/* Checking if the position of the current element
	 transposes the limits of the array. */
	if (this.currentElementPointer >= this.array.length)
	{
	    /* If transposes, null is returned. */
	    return null;
	}
	
	return this.array[this.currentElementPointer++];
    };


/* Function that will indicate if there is some element of
 the array to be accessed in a process of iteration
 through the same. */
ArraySeq.prototype.hasNextElement =
    function() {
	/* Checking if the position of the current elment
	 transposes the limits of the array. */
	if (this.currentElementPointer >= this.array.length)
	    return false;
	
	return true;
    };

/* Will reset the current element pointer. */
ArraySeq.prototype.reset =
    function() {
	this.currentElementPointer = 0;
    };

/* Will return the last element of the array. */
ArraySeq.prototype.lastElement =
    function() {
	return this.array[this.length - 1];
    };

/* Will return the amount of elements in the array. */ 
ArraySeq.prototype.length =
    function() {
	return this.array.length;
    };

/* Will return the current element of the array. */
ArraySeq.prototype.currentElement =
    function() {
	return this.array[this.currentElementPointer];
    };

function RangeSeq(from, to)
{   
    /* Creating the array from the
       range. */
    var array = [];
    for (var i = from; i <= to; i++)
   	array.push(i);

    ArraySeq.call(this, array);
}

/* The prototype of this class will be
   the same of the class "ArraySeq"
   (same interface). */
RangeSeq.prototype = ArraySeq.prototype;
