/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */


// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */



// For X we need to check each other number (i) then do target - (i) and check if it equals x if it does we return
// If it does not we then move on to the next number.

// We need to exclude using the same number.

// [3,3]

var twoSum = function(nums, target) {

    for( var i = 0; i < nums.length; i++ ) {
        let x = nums[i];
        for ( var j=0; j< nums.length; j++ ) {
            let z = nums[j];
            if ( !(i === j) && (target - x === z)  ) {
                return [i,j];
            }            
        }
    }
};
// @lc code=end

