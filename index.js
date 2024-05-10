function permuteUnique(nums) {
  const result = [];
  nums.sort((a, b) => a - b);
  backtrack([], new Array(nums.length).fill(false));
  return result;
  function backtrack(current, used) {
    if (current.length === nums.length) {
      result.push([...current]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]))
        continue;
      current.push(nums[i]);
      used[i] = true;
      backtrack(current, used);
      current.pop();
      used[i] = false;
    }
  }
}
