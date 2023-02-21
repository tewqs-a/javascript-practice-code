// Write a function 'canConstruct(target, workBank)' that accepts a target string and an array
// of strings.
//
// The function should return a boolean indicating whether or not the 'target' can be
// constructed by concatenating the elements of the 'wordBank' array.
//
// You may reuse elements of 'wordBank' as many times as needed.


// // Brute force:
// const canConstruct = (target, wordBank) => {
//     if (target === '') return true;

//     for (let word of wordBank){
//         if (target.indexOf(word) === 0){
//             const suffix = target.slice(word.length);
//             if (canConstruct(suffix, wordBank) === true){
//                 return true;
//             }
//         }

//     }
//     return false;
// };
// m = target length;
// n = wordBank.length;

// Time : O(n^m * m)
// Space : O(m^2)

// Memoized:
const canConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === '') return true;

    for (let word of wordBank){
        if (target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            if (canConstruct(suffix, wordBank, memo) === true){
                memo[target] = true;
                return true;
            }
        }

    }
    memo[target] = false;
    return false;
};

// m = target.length
// n = wordBank.length
//
// Time : O(n * m^2)
// Space: O(m^2)

console.log(canConstruct("racecar", ["r", "c", "a", "e"])) // true
console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])) // false
console.log(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])) // true
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee", 
    "eeee", 
    "eeeeeee"
])) // false