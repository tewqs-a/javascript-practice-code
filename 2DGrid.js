/* Say that you are a traveler on a 2D grid. You begin in the top-left
corner and your goal is to travel to the bottom-right corner. You may
only move down or right. In how many ways can you travel to the goal
on a grid with dimensions m * n? Write a function gridTraveler(m, n)
that calculates this. */

// gridTraveler(1,1) -> 1 . start is the same as the end. ("do nothing")
// gridTraveler(0,1) -> 0 . grid is empty. invalid
// gridTraveler(1,0) -> 0 . no grid. invalid.

// These are base cases.
// When we make a move right or downward, we are shrinking the size of
// the playable area. gridTraveler(3,3) -> gridTaveler(3,2) -> ... 
// -> gridTraveler(1,1);

// The function below works, but like the first test of fib, is too slow for large n.
// const gridTraveler = (m, n) => {
//     if (m == 1 && n == 1) return 1;
//     if (m == 0 || n == 0) return 0;
//     return gridTraveler(m-1, n) + gridTraveler(m, n-1);
// };

const gridTraveler = (m, n, memo = {}) => {
        const key = m + ',' + n;

        // Are arguments in the memo?
        if (key in memo) return memo[key];
        if (m == 1 && n == 1) return 1;
        if (m == 0 || n == 0) return 0;

        memo[key] = gridTraveler(m-1, n, memo) + gridTraveler(m, n-1, memo);
        return memo[key];
    };
    

console.log(gridTraveler(1, 1)); // 1
console.log(gridTraveler(2, 3)); // 3
console.log(gridTraveler(3, 2)); // 3
console.log(gridTraveler(3, 3)); // 6
console.log(gridTraveler(18, 18)); // 2333606220