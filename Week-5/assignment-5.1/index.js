// Generator function
const promise1 = new Promise((resolve, reject) => {
    resolve(
        setTimeout(() => {
            console.log("timeout run");
        }, 2000)
    );
});

const promise2 = new Promise((resolve, reject) => {
    resolve("task 2 is done");
});

const promise3 = new Promise((resolve, reject) => {
    resolve("task 3 is done");
});

function* getData(){
    yield promise1;
    yield promise2;
    yield promise3;
}

const generatorFunc = getData();

// async/await function
const result = async function taskDoer() {
    await generatorFunc.next().value.then((data) => {
        // console.log(data);
    });
    await generatorFunc.next().value.then((data) => {
        console.log(data);
    });
    await generatorFunc.next().value.then((data) => {
        console.log(data);
    });
}

result();