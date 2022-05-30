// ===== RECURSION ===== //

/* 
    A function which calls itself inside of the function itself.

    - good for tasks that have repeated sub-tasks to do.
    - used in searching and sorting algorithms
    - anything you do recursively can be done in a loop

    - A recursive function needs to have:
      - Base case (a condition which stops the execution of the function)

    - consider using when using trees or converting to a tree
*/

// ======= FIND FACTORIAL OF NUMBER WITH LOOP AND RECURSIVE FUNCTIONS =====//

function findFactorialRecursive(value) {
  if (value === 2) {
    return value
  }

  return value * findFactorialRecursive(value - 1)
}
/* 
  factorial(5) return => 5 * 4 (20)
    factorial(4) return => 20 * 3 (60)
      factorial(3) return => 60 * 2 (120)
        factorial(2) **BASE CASE** return => 120
*/

function findFactorialIterative(value) {
  let sum = value;

  for (let i = value - 1; i > 0; i--) {
    sum = sum * i;
  }

  return sum;
}

console.log(
  'factorial iterative =>', findFactorialIterative(5)
);

console.log(
  'factorial recursive =>', findFactorialRecursive(5)
);


// ======= FIBONACCI SEQ WITH LOOP AND RECURSIVE FUNCTIONS =====//

function fibonacciRecursive(n) { // O(2^n) => horrible

  if (n < 2) {
    return n;
  }

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)

}


/*   fibonacci with n of 5 returns => 5

  1. fibonacci(5)
    2. fibonacci(4)
      3. fibonacci(3)
        4. fibonacci(2)
          5. fibonacci(1) => returns 1 					                              
          5. fibonacci(0) => returns 0 
        4. fibonacci(1) => returns 1
      3. fibonacci(2)
        4. fibonacci(1) => returns 1 				                               
        4. fibonacci(0) => returns 0 
    2. fibonacci(3)
      3. fibonacci(2)
        4. fibonacci(1) => returns 1    
        4. fibonacci(0) => returns 0 
      3. fibonacci(1) => returns 1 

*/

// fibonacci seq => 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

function fibonacciIterative(n) { // O(n) => fair
  let startPoint = 0;
  let secondPoint = 1;
  let indexVal = 0;

  if (n === 1) {
    return secondPoint;
  }

  for (let i = 1; i < n; i++) {

    indexVal = startPoint + secondPoint;

    startPoint = secondPoint;
    secondPoint = indexVal;

  }

  return indexVal;
}

console.log(
  'fibonacci w loop =>', fibonacciIterative(11)
);

console.log(
  'fibonacci w recursive =>', fibonacciRecursive(3)
);

function reverseString(string) {
  console.log('str =.', string)
  if (string === '') {
    return '';
  }
  return reverseString(string.substring(1)) + string.charAt(0);

}

console.log(
  'reverse string =>', reverseString('ben')
)

function sum(val) {
  if (val === 0) {
    return 0
  }
  return val + sum(val - 1)
}

console.log(
  'sum =>', sum(5)
)

/* 

  sum(5) => 5 + 4
    sum(4) => 4 + 3 
      sum(3) => 3 + 2 
        sum(2) => 2 + 1 
          sum(1) => 1 + 0 
            returns => 0 ** BASE CASE
*/