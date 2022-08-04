// Reducer function

function add(numbersArr) {
    let sum = 0;
    for (n in numbersArr) {
        sum += parseInt(numbersArr[n]);
    }
    return sum;
}

const memoized = function(func) {
    let cache = {};
    return function(...args) {
        // console.log(args, "args");
        let obj = args;
        if (obj in cache) {
            console.log("returned from cache");
            return cache[obj];
        } else {
            cache[obj] = func(obj);
            return cache[obj];
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