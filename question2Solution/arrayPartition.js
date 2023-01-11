const minimizeAbsoluteDifference = (nums) => {
  // Sort the array in ascending order
  nums.sort((a, b) => a - b);

  // Two arrays
  let array1 = [];
  let array2 = [];

  // Alternate adding values to the two arrays
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      array1.push(nums[i]);
    } else {
      array2.push(nums[i]);
    }
  }

  // Calculate the absolute difference of the sums of the two arrays
  let absoluteDifference = Math.abs(array1.reduce((a, b) => a + b) - array2.reduce((a, b) => a + b));

  // Return the minimum absolute difference
  return absoluteDifference;
}



console.log(minimizeAbsoluteDifference([3, 9, 7, 3]));
console.log(minimizeAbsoluteDifference([-36, 36]));
console.log(minimizeAbsoluteDifference([2, -1, 0, 4, -2, -9]));
