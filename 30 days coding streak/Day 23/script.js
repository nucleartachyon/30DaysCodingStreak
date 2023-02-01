var twoSum = function (nums, target) {
    for (let i = 0; i <= nums.length; i++) {
        for (let j = 0; j <= nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
};
let a = [1, 3, 10, 11, 14];
let res = twoSum(a, 13)
console.log(res);