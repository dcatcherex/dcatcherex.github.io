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
    {
    studentAll += (students[i][j]);
    }
    console.log(studentAll)
}



const numArray = [1,2,3,4,5];
numArray.forEach(
    (handsomeGuy) =>{
        console.log(handsomeGuy * 10);
    }
)

const learners = ['chompoo','tae','ice','jart'];

learners.forEach(
    (learner) => {
        console.log(learner + " is genius");
    }
)

const exMaps = ['wa','jee','cake'];
const newMaps = exMaps.map(
    (exMap) => {
        console.log(exMap+' jsd#1');
        return exMap + ' jsd#1'
    }
)
console.log(newMaps);


//filter
const missJSD = ['chompoo','jee','cake','wa'];
const semiFinal = missJSD.filter(
    (candidate) => {
        if(candidate === 'wa'){ 
            return false
        }
        return true;
    }
    
)

//for in

console.log(semiFinal);

const printLoop = (round, message)=>{
    for(let i=0; i<round; i++){
        console.log(message);
    }
}

const generateFullSentence = (name) =>{
    const sentence  = 'will marry soon';
    const fullSentence = `Congrat, ${name} ${sentence}`;
    return fullSentence;
}

const generateGreeting = (name, isGenerationThailand) =>{
    if(isGenerationThailand){
        return 'Hi generation Thailand, myname is ' + name1
    }
    return 'Hi my name is ' + name;
}

const marryFunction = (name1, name2) => {
    console.log("Hi my name is " + name1);
    printLoop(5, generateFullSentence(name1));

    console.log("Hi my name is " + name2);
    printLoop(2, generateFullSentence(name2));
  }
  
 marryFunction('Hiang','Tim');
 marryFunction('ณี','คะนิ้ง');

