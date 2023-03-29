function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num !== 1;
  }
  
  var number = parseInt(prompt("Enter a number: "));
  var result = isPrime(number);
  
  if (result === true) {
      document.write(number + " is a prime number.");
  } else {
      document.write(number + " is not a prime number.");
  }