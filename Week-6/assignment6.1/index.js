// Problem 6.1: Max Sum Contiguous Subarray

function maxSumArray(arr) {
    let maxSum = Number.NEGATIVE_INFINITY;
    let currSum = Number.NEGATIVE_INFINITY;

    for(num of arr) {
        // console.log(num);
        currSum = currSum + num < num ? num : currSum + num; 
        // console.log("currSUM ", currSum);
        maxSum = currSum > maxSum ? currSum : maxSum; 
        // console.log(maxSum);
    }

    return maxSum;
}

console.log(maxSumArray([-2, -1]));

