const vowelCount = function (str){
    const lowerStr = str.toLowerCase();
    const strArr = [...lowerStr];
    const vowelMap = new Map();
    let totalVowel = [];
    let vowelFrequency = 0;
    let uniqueVowel = 0;
    
    strArr.map((vowel) => {
        // console.log(vowel);
        if(vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u'){
            totalVowel.push(vowel);
        }
        uniqueVowel = (new Set(totalVowel)).size;
        vowelFrequency = totalVowel.length;
    }, vowelMap);

    return vowelMap.set(uniqueVowel, vowelFrequency);
}

console.log(vowelCount("IndiabullsIsRising"));