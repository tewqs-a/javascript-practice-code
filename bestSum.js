// Write a function 'howSum(targetSum, numbers)' that takes in a targetSum and an array
// of numbers as arguments.

// The function should return an array containing the shortest combination of elements that
// add up to exactly the targetSum. If there is no combination that adds up to the targetSum, 
// then return NULL. If there is a tie for the shortest combination, you may return any.

// You may use an element of the array as many times as needed. We can assume all input
// numbers are non-negative.

const bestSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortResult = null;

 
    for (let num of numbers){
        const remainder = targetSum - num;
        const resultR = bestSum(remainder, numbers, memo);

        if (resultR !== null){
            const combo = [...resultR, num];
            if (shortResult === null || combo.length < shortResult.length){
                shortResult = combo;
            }
        }
    }
    memo[targetSum] = shortResult;
    return shortResult;
};

// m = targetSum
// n = numbers.length
//
// Brute force:
// time:  O(n^m * m)
// space: O(m^2)
//
// Memoized:
// time:  O(n * m^2)
// space: O(m^2) => m keys that have a value of an array at most the size of targetSum. 
    

console.log(bestSum(7, [5,3,4,7])); // [7]
console.log(bestSum(8, [1, 4, 5])); // [4,4]
console.log(bestSum(8, [2, 3, 5])); // [5,3]
console.log(bestSum(100, [1, 2, 5, 25])); // [25, 25, 25, 25]