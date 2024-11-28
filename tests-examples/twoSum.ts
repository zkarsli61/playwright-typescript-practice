// 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>()

    //https://stackoverflow.com/questions/43555904/foreach-for-in-not-returning-values
    for (let [index, num] of nums.entries()) {
        const complement = target - num
        if (map.has(complement)) return [map.get(complement)!, index]
        map.set(num, index)
    };
    return []
}

const nums = [2, 6, 11, 1]
console.log(twoSum(nums, 13));  // Output: [2, 7] twoSum(nums, 9)
