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
    let hashMap = {};
    for( let i=0; i<=nums.length; i++ ) {
        hashMap[nums[i]] = i;
        for( let i=0; i<=nums.length; i++ ) {
            complement = target - nums[i]
            if( complement in hashMap && hashMap[complement] != i ) {
                return [i, hashMap[complement]]
            } 
        }
    }
};
// @lc code=end

