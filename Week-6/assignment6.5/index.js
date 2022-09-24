function findPair(arr, k) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if(map.has(arr[i] - k)) {
            return 1;
        }else {
            map.set(arr[i], arr[i]);
        }
    }
    return 0;
}

console.log(findPair([1, 3, 4, 56, 13], 8));