function findNearestSumOfThree(arr, target) {
    arr.sort((a,b) => a - b);
    // console.log(arr);
    let closest = null;

    for (let i = 0; i < arr.length; i++) {
        let low = i+1;
        let high = arr.length - 1;

        while(low < high) {
            let sum = arr[i] + arr[low] + arr[high];
            let mydiff = Math.abs(target - sum);
            let currdiff = Math.abs(target - closest);
            if(mydiff < currdiff || closest === null) {
                closest = sum;
            }

            if(sum === target) {
                return sum;
            } else if ( sum < target ) {
                low++;
            } else {
                high--;
            }
        }

        while(arr[i] === arr[i+1]) i++;
    }
    // console.log(closest);
    return closest;
}

console.log(findNearestSumOfThree([-1, 2, 1, -4], 1));