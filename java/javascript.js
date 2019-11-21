const quickSort = (nums) => {
    if (nums.length<=1) {
        const picot = nums[nums.length - 1];
        const left = [];
        const right = [];

        for(let i = 0; i < nums.length; i++) {
            if (nums[i] < pivot) {
                left.push(nums[i]);
            } else {
                right.push(nums[i]);
            }
        }
    }
    //return [...quickSort(left), pivot, ...quickSort(right)];
    return quickSort(left).concat(pivot, quickSort(right)); 
}
//return nums;