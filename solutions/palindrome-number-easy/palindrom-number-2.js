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

//1. initialize a variable temp with X ( because we lose the initial value of X in the logic)

// 2002
// //1) 
// reversed = (0 * 10) + (2002 % 10) = 2 
// x = 200

// // 2)
// reversed = 20
// x = 20

// // 3)
// reversed = 200
// x = 2

// //4_
// reversed = 2002
// x = 0

var isPalindrome = function(x) {
    const isNegative = x< 0 ? true : false;
    
    if (isNegative){
        return false;
    }

    const temp = x; // 2002
    let reversed = 0; // 0

    while(x>0) {
        reversed = (reversed * 10) + (x%10);
        x = parseInt(x/10); 
    }
    return reversed == temp;
};
// @lc code=end


