function hasDuplicate(arr){
    // solution 1
    // return arr.length !== new Set(arr).size;

    // solution 2
    // const mapObj = new Map();
    // for ( const num in arr){
    //     console.log(mapObj);
    //     if(mapObj.has(arr[num])){
    //         return true;
    //     }else {
    //         mapObj.set(arr[num], arr[num]);
    //     }
    // }
    // console.log(mapObj);
    // return false;

    // solution 3
    let newMap = new Map();
    let answer = false;
    arr.map((value) => {
        // console.log(value, newMap);
        if(newMap.has(value)){
            answer = true;
            return;
        } else {
            newMap.set(value, value);
        }
    }, newMap);

    return answer;
}

const result = hasDuplicate([1, 3, 4, 5, 6, 7]);

console.log(result);