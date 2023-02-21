// Write a function 'howSum(targetSum, numbers)' that takes in a targetSum and an array
// of numbers as arguments.

// The function should return an array containing any combination of elements that add up to
// exactly the targetSum. If there is no combination that adds up to the targetSum, then
// return NULL. If there are many combinations possible, you may return any single one.

// You may use an element of the array as many times as needed. We can assume all input
// numbers are non-negative.

const howSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;
 
    for (let num of numbers){
        const remainder = targetSum - num;
        const resultR = howSum(remainder, numbers, memo);

        if (resultR !== null){
            memo[targetSum] = [...resultR, num];
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return null;
};

// m = targetSum
// n = numbers.length
//
// Brute force:
// time:  O(n^m * m)
// space: O(m)
//
// Memoized:
// time:  O(n * m^2)
// space: O(m^2) => m keys that have a value of an array at most the size of targetSum. 
    

console.log(howSum(7, [2,3])); // true
console.log(howSum(7, [5,3,4,7])); // true
console.log(howSum(7, [2, 4])); // false
console.log(howSum(8, [2, 3, 5])); // true
console.log(howSum(300, [7, 14])); // false