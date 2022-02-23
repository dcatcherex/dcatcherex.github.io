for(let i = 0; i < 5; i++){
    console.log('print'+i);
}



let i = 10;
while(i>0){
    console.log('current i'+i);
    i--;
}

for(let number = 10; number > 0; number--){
    console.log('current number',number)
    console.log('------------------')
  }

const queue = ['man1','man2','man3']
for(let index = (queue.length-1); index >= 0 ; index--){
    console.log(queue[index]);
}

queue.splice(1, 0, 'last man');//แทรก
console.log(queue)

queue.splice(0, 1, 'chompoo');
console.log(queue)

queue.splice(1,3,'x')
console.log(queue)

//เอาชื่อตัวเองกับเพื่อนมาแทน
const exQueue = ['ชมพู','นัน','นนท์']
exQueue.splice(0,exQueue.length,'jone','kun')
console.log(exQueue)

const students = [
    ['tae','jone','ping'],
    ['pak','parn','beb']
]

for (let i = 0; i < students.length; i++){
    let studentAll = '';
    for (let j = 0; j < students[i].length ; j++)

    studentAll += (students[i][j]);
}


