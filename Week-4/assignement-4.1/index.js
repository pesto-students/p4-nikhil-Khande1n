function getNumber() {
    const number = parseInt((Math.random())*50);
    // console.log(number);
    return number;
}

const num = getNumber();

const promiseNum = new Promise(function(resolve, reject) {
    // console.log(num);
    if (num%5 === 0) {
        // promise reject
        reject("Number divisible by 5");
    } else {
        // promise resolve
        resolve(parseInt(num/5));
    }
}, num);

promiseNum
    .then((val) => console.log(`Remainder is ${val}`))
    .catch((err) => console.log(err));

