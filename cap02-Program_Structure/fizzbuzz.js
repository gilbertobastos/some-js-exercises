/* Looping from 1 to 100. */
for (var num = 1; num <= 100; num++)
{
  /* Checking if the number is divisible
     by 3 or 5. */
  if (num % 3 == 0)
  {
    console.log('Fizz');
    continue;
  }
  else if (num % 5 == 0)
  {
    console.log('Buzz');
    continue;
  }

  /* If not, print the number normally. */
  console.log(num);
}


