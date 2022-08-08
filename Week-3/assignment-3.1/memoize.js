const cacheMap = new Map();

// Reducer function
function add(numbersArr) {
    let sum = 0;
    for (n in numbersArr) {
        sum += parseInt(numbersArr[n]);
    }
    return sum;
}

const memoized = function(func) {
    return function(...args) {
        const obj = args;
        if (cacheMap[obj]) {
            console.log("returned from cacheMap");
            return cacheMap[obj];
        } else {
            cacheMap[obj] = func(obj);
            return cacheMap[obj];
        }
    }
}

const memoizedOutput = memoized(add);

console.time();
console.log(memoizedOutput(100, 200));
console.timeEnd();

console.time();
console.log(memoizedOutput(100, 200, 300));
console.timeEnd();

console.time();
console.log(memoizedOutput(100, 200));
console.timeEnd();

console.time();
console.log(memoizedOutput(100));
console.timeEnd();