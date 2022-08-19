// Generator function
function* getData(){
    let i = 1;
    while(true){
        yield i;
        i++;
    }
}

const generatorFunc = getData();

// async/await function

function doTask1(generatorFunc){
    return generatorFunc.next().value*2;
}; 

function doTask2(data1){
    return data1.toString();
}

function doTask3(data2){
    return parseFloat(data2).toFixed(3);
}

const result = async function taskDoer() {
    const data1 = await doTask1(generatorFunc);
    const data2 = await doTask2(data1);
    const data3 = await doTask3(data2);
    // console.log(data1, typeof data1);
    // console.log(data2, typeof data2);
    // console.log(data3, typeof data3);
}

result();