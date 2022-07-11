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
var twoSum = function(nums, target) {

    let i;
    let j;

    for( i=0; i<nums.length; i++ ) {

        for( j=0; j<nums.length; j++ ) {

            if (nums[i] === nums[j] ) {
                // do nothing
            } else if( target - nums[i] === nums[j] ) {
                const x = nums.indexOf(nums[i], 0)
                const y = nums.indexOf(nums[j], 0)
                const result = [x,y];
                return result;
            }
        }
    }
    
};
// @lc code=end

