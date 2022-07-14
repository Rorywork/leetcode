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

    // create a hashMap
    let hashMap = {};

    for( let i=0; i<=nums.length; i++ ) {

        // create an entry for each value in the hashmap that has a key of the nusm value and a value of the indices
        hashMap[nums[i]] = i; 

        for( let i=0; i<=nums.length; i++ ) {
            complement = target - nums[i]

            // complement is the difference between the target nad the nums value

            if( complement in hashMap && hashMap[complement] != i ) {

                // check if complement is in the hashMaps values and that its value is not the same as i (same indices)
                return [i, hashMap[complement]]
            } 
        }
    }
};
// @lc code=end

