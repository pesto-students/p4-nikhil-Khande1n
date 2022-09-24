function sortInAscendingOrder(arr) {
    let c0 = 0;
    let c1 = 0;
    let c2 = 0;

    for (let index = 0; index < arr.length; index++) {
        if(arr[index] === 0) c0++;
        if(arr[index] === 1) c1++;
        if(arr[index] === 2) c2++;
    }
    console.log(c0, c1, c2);
    
    let i = 0;
    while(c0) {
        arr[i] = 0;
        c0--;
        i++;
    }
    
    while(c1) {
        arr[i] = 1;
        c1--;
        i++;
    }
    
    while(c2) {
        arr[i] = 2;
        c2--;
        i++;
    }
    return arr;
}

console.log(sortInAscendingOrder([0, 1, 2, 2, 1, 0, 0]));