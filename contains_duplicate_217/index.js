const nums = [1,2,2];

var containDuplicate = function (nums) {
  n = nums.length;
  // for (let i = 0; i < n; i++) {
  //   for (let j = 0; j < n; j++) {
  //     j = j+1
  //     if (nums[i] == nums[j]) {
  //       console.log('t_nums[i]',nums[i])
  //       console.log('t_nums[j]',nums[j])
  //       return true;
  //     } else {
  //       console.log('f_nums[i]',nums[i])
  //       console.log('f_nums[j]',nums[j])
  //       return false;
  //     }
  //   }
  //}
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
