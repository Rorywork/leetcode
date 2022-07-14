/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */

//1. Convert x into a string and save as y
//2. reverse y and save as z
//3. if y = z then return true
var isPalindrome = function(x) {
    let y = x.toString();
    let z = [...y].reverse().join("");
    if (y === z) {
        return true;
    } else {
        return false;
    }
};
// @lc code=end

// If X is the same backwards as forwards return true

