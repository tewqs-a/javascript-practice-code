// Write a function 'countConstruct(target, workBank)' that accepts a target string and an array
// of strings.
//
// The function should return the number of ways that the 'target' can be
// constructed by concatenating the elements of the 'wordBank' array.
//
// You may reuse elements of 'wordBank' as many times as needed.


// Brute force:
// const countConstruct = (target, wordBank) => {
//     if (target === '') return 1;

//     let totalCount = 0;

//     for (let word of wordBank){
//         if (target.indexOf(word) === 0){
//             const numWays = countConsturct(target.slice(word.length), wordBank);
//             return totalCount += numWays;
//             }
//     }
//     return totalCount;
// };
// m = target length;
// n = wordBank.length;

// Time : O(n^m * m)
// Space : O(m^2)

// Memoized:
const countConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === '') return 1;

    let totalCount = 0

    for (let word of wordBank){
        if (target.indexOf(word) === 0){
            const numWays = countConstruct(target.slice(word.length), wordBank, memo);
            totalCount += numWays;
        }
    }
    memo[target] = totalCount;
    return totalCount;
};

// m = target.length
// n = wordBank.length
//
// Time : O(n * m^2)
// Space: O(m^2)

console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"])) // 2
console.log(countConstruct("racecar", ["r", "c", "a", "e"])) // 1
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])) // 0
console.log(countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])) // 4
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee", 
    "eeee", 
    "eeeeeee"
])) // 0