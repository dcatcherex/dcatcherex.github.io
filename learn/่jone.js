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