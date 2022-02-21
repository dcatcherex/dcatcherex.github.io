function wordEnd(){
    const word = prompt("please enter word");
    if(word!=null){
    let end = word[word.length -1]
    alert(end);
    }else
    {
      alert('nothing type');  
    }
}

const car = {
  brand: "Tesla",
  wheels: 4,
  engine: "ev",
  turn: function(turnside){
    console.log('turn' + turnSide);
  }
}


let a = 1;
let b = 0;

function add(a,b){
  return a+b;
}
function subtract(a,b){
  return a-b;
}
function multiply(a,b){
  return a*b;
}
function divide(a,b){
  if(a||b!=0){
    return a/b;
  }else{
    alert('divide by zero');
  }
}


