// ======= DYNAMIC PROGRAMMING ======= //


/* 
    A way to solve problems by breaking them down
    into smaller subproblems. And the storing the
    solutions in case we may need to re use them.

    CACHING/ MEMOIZATION:
    A way to store values so we can use them later on.

*/


function calculateOrCache() {

  let cache = {};

  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log('i cached');

      cache[n] = n + 80;
      return cache[n];
    }
  }
}

const memo = calculateOrCache();

console.log(memo(5))
console.log(memo(5))


function fibonacciMaster() { // => O(n)
  let cache = {};

  return function fib(n) {
    if (n in cache) {
      return cache[n];

    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  }
}

const fasterFib = fibonacciMaster();
console.log('DP =>', fasterFib(20));

function fibWithStack(n) { // => bottom up solution
  let answer = [0, 1];

  for (let i = 2; i <= n; i++) {
    answer.push(answer[i - 2] + answer[i - 1]);
  }

  return answer.pop();
}

console.log('fib w stack ds and cache =>>', fibWithStack(7))