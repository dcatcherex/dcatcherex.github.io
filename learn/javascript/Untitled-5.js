 
//  exercise1
// 1.1
let waitingArr = ['Sofia','David','Juan'];

// 1.2
//  waitingArr.splice(0,1,'Sara','Augustin');
 console.log(waitingArr)

waitingArr.splice(0,1);
console.log(waitingArr);

waitingArr.push('Sara','Augustin');
console.log(waitingArr);

//1.3 Renata หลัง david, elena หลังสุด

waitingArr.splice(0,1,'David','Renata');
console.log(waitingArr);

waitingArr.push('Elena');
console.log(waitingArr);

//exercise2
for(let i = 5; i > 0 ; i--){
    let star = '';
    for(let j = 5-i ; j >= 0 ; j--){
        star += '*'
    }
    console.log(star);
}

//exercise3
// 3.1 Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,
// as long as xValue remains positive.
const repeatPrintFor = xValue => {
    for(let i = xValue; i > 0; i-=0.5){
        console.log('xValue',i);
    }
}

// repeatPrintFor(5);

const repeatPrintWhile = xValue => {
    while(xValue>0){
        console.log('xValue in While Loop',xValue);
        xValue-=0.5;
    }
}

// repeatPrintWhile(5);

//3.2 Print all the odd numbers between 1 - 100.
const printOdd = () => {
    for(let i=1;i<=100;i++){
        if(i%2>0){
            console.log('Odd number',i);
        }
    }
}

// printOdd();

//3.3Write a function with a while loop to print 1 through n in square brackets. 
// For example, if n = 6 print [1] [2] [3] [4] [5] [6]
const printSquareBrack = number => {
    let counter = 1;
    while(counter<=number){
        console.log(`[${counter}]`);
        counter++;
    }
}
// printSquareBrack(6);

//3.4- Write a function with a while loop that computes the sum of first n positive integers: 
const sumPositive = n =>{
    let counter = 1;
    let sum = 0;
    while(counter<=n){
        sum+= counter;
        counter++;
    }
    console.log(sum);
}

sumPositive(19)




