function bestTime(arr) {
    let low = 0;
    let high = arr.length - 1;
    let buy = arr[low];
    let sell = arr[high];

    while(low < high) {
        if (arr[low + 1] < buy) {
            buy = arr[low + 1];  
        }
        if(arr[high - 1] > sell) {
            sell = arr[high - 1];  
        }
        low++;
        high--;
        console.log("buy ", buy, " low ", low);
        console.log("sell ", sell, " high ", high);
    }

    return sell - buy;
}


console.log(bestTime([7,1,5,3,6,4]));