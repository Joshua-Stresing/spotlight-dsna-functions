function fib(num) {
  if (num <= 1) return num;

  return fib(num - 1) + fib(num - 2);
}

console.log(fib(3));

// current index + previous index = fib
// n=current
// previous index = n-1
function fib(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return (memo[num] = fib(num - 1, memo) + fib(num - 2, memo));
}
