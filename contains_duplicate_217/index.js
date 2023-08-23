const nums = [1,2,2];

var containDuplicate = function (nums) {
  n = nums.length;
  let otvet;
  if (nums.length !== 1) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        console.log(nums[i], nums[j]);
        if (nums[i] === nums[j]) {
          return true;
        } else {
          otvet = false;
        }
      }
    }
    return otvet;
  } else {
    return false;
  }
};
const answer = containDuplicate(nums);
console.log(answer);
