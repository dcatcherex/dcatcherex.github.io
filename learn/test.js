const factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1) }

console.log(factorial(3))

// const friend = function greetingFriends(name1,name2,name3){return (`Welcome ${name1},${name2},${name3}`)}

// exercise1
// function getFriendName(){
//     let name1 = prompt('กรุณาใส่ชื่อเพื่อนคนที่1');
//     let name2 = prompt('กรุณาใส่ชื่อเพื่อนคนที่2');
//     let name3 = prompt('กรุณาใส่ชื่อเพื่อนคนที่3');

//     console.log((name1,name2,name3) => {return (`Welcome ${name1},${name2},${name3}`)});

// }

function getFriendName(){
    let name1 = prompt('กรุณาใส่ชื่อเพื่อนคนที่1');
    let name2 = prompt('กรุณาใส่ชื่อเพื่อนคนที่2');
    let name3 = prompt('กรุณาใส่ชื่อเพื่อนคนที่3');

    return (`Welcome ${name1},${name2},${name3}`);
    
}

getFriendName();

const friend = (name1,name2,name3) => {return (`Welcome ${name1},${name2},${name3}`)}
console.log(friend('a','b','c'));

//exercise2
const age = yearOfBirth => 2022 - yearOfBirth;
console.log(age(1981));

//exercise3

name1 = 'sdf'
name2 = 'sdf'
name3 = 'sdf'
age1 =12;
age2 =39;
age3 = 34;

function printWelcomeFriend(){
    console.log(`Welcome ${name1}, you are ${age1}. 
    Welcome ${name2}, you are ${age2}. 
    Welcome ${name3}, you are ${age3}.`);
}

printWelcomeFriend();

const wash = (weight, time)=>{
    
    let level = 0;
    //ถ้าน้ำหนัก > 6kg ใช้น้ำเต็มถัง
    //ถ้าน้ำหนัก < 6kg ใช้น้ำครึ่งถัง
    isHalfWater = true;
    
    if (isHalfWater) {
        level = 1;
    }else{
        level = 0.5;
    }
    console.log('water level', level);
    console.log('water time', time);
}

console.log('dfsdf');
