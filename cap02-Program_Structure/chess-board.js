/*** Chess Board ***/
var chessBoard = '';
var size = 80;

for (var line = 1; line <= size; line++)
{
    /* If the line is even, then he begin with a '#',
       else, he begin with a space ' '. */
    var chessLine;
    line % 2 == 0 ? chessLine = '#' : chessLine = ' '; 

    /* Bulding the chess line... */
    for (var col = 1; col < size; col++)
    {
	/* The actual char of the line will be the
	   inverse of the previous char of the line. */
	chessLine[col - 1] == ' ' ? chessLine += '#' : chessLine += ' ';
    }

    /* Finally, adding the builded line on the chessBoard variable. */
    chessBoard += chessLine + '\n';
}

// Printing the chess :-)
console.log(chessBoard);




