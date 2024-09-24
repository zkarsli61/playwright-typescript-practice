function twoSum(nums: number[], target: number): number[] | undefined {
    const length = nums.length
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (nums[i] + nums[j] == target) {
                return [nums[i], nums[j]]
            }
        }
    };
}

const nums = [2, 7, 11, 1]
console.log(twoSum(nums, 9));  // Output: [2, 7] twoSum(nums, 9)
