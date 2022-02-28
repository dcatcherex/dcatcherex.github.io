//exercise1
// part1
//Intersection Function

array1 = ['nun', 'ink', 'oat']
array2 = ['nun', 'tim']

const intersection = (array1,array2)=>{

    let intersecArray = [];
    for(let i = 0; i<array1.length;i++ ){
        // console.log(array1[i]);
        for(let j = 0; j<array2.length;j++){
        // console.log(array2[j]);
            if(array1[i]===array2[j]){
                // console.log(array1[i]);
                // console.log(true);
                // console.log('----');
                intersecArray.push(array1[i]);
            }

        }
    }
    // console.log(intersecArray);
    return intersecArray
    
}
console.log(intersection(array1,array2))


// part2
// Get Word Length Function

sampleArr = ['nun','inkna','oatkrub']


const getWordLength = (wordArray)=>{
    const arrayNumWord = wordArray.map(word => {

        return word.length
    })
    console.log(arrayNumWord);
    return arrayNumWord

} 

console.log(getWordLength(sampleArr));




//exercise2
// 
const numberRange = (num)=>{
    switch (true){
        case (num < 0 ):
            console.log(`${num} is less than 0`);
            break;
        case (num >= 0 && num <= 25):
            console.log(`${num} is between 0 and 25`);
            break;
        case (num >= 26 && num <= 100):
            console.log(`${num} is between 26 and 100`);
            break;
        default:
            console.log(`${num} is greater than 100`);    
    }
}

numberRange(10);
numberRange(-10);
numberRange(25);
numberRange(75);
numberRange(125);
// console.log((numberRange(-10)));
// console.log((numberRange(25)));
// console.log((numberRange(75)));
// console.log((numberRange(125)));
// console.log((numberRange(-25)));

//challenge