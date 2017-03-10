function countBs(string)
{
    return countChar(string, "B");
}

function countChar(string, ch)
{
    var charCount = 0;
    for (var i = 0; i < string.length; i++)
    {
	if (string[i] == ch)
	    charCount++;
    }
    
    return charCount;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
