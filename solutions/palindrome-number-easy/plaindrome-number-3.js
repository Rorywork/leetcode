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

// credit to https://rishabh1403.com/posts/coding/leetcode/2019/12/leetcode-solution-of-palindrome-number-in-javascript

var isPalindrome = function(x) {
    if(x < 0) {
        return false;
    }
    if (x < 10) {
        return true;
    }
    if ( x % 10 === 0 && x!== 0 ) {
        return false;
    }
    const str = String(x);
    let i=0; j= str.length-1;
    while(i<j) {
        if(str[i] !== str[j]) {
            return false;
        }

        i++;
        j--;
    }
    return true;
};
// @lc code=end

