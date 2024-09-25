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
    let map = new Map<number, number>()
    for (let [index, num] of nums.entries()) {
        const complementIndex = map.get(target - num)
        if (complementIndex !== undefined)
            return [complementIndex, index]
        else
            map.set(num, index)
    };
    return []
}

const nums = [2, 7, 11, 1]
console.log(twoSum(nums, 9));  // Output: [2, 7] twoSum(nums, 9)
