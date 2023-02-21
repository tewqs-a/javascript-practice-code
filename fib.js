// Works, but takes WAY too long to run large values of n. Time complexity of 2^(n);
/* int fib(int n){
        if (n <= 2)
            return 1;
        return fib(n-1) + fib(n-2);
    }
*/

// We can do better by looking for patterns in the recursion: Try to reuse previous computations --
// fib(5) = fib(5), it will awlays be the same. What can we do with that.

// Memoization
    // JS object, keys will be arg to function, value will be the return value

const fib = (n, memo = {})  => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}

console.log(fib(6)); // 8
console.log(fib(50)); // 12586269025