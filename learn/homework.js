
// exercise1
function calculatePayment(transaction){
    let interest = 0.01;
    let fee = 3;
    let cost = transaction + (transaction * interest) + 3;
    return cost;
}

console.log(calculatePayment(1000));
//end execercise1

// execercise2

let name1 = prompt('บอกชื่อเพื่อนคนแรก');
let name2 = prompt('บอกชื่อเพื่อนคนที่สอง');
let name3 = prompt('บอกชื่อเพื่อนคนที่สาม');

console.log(function (name1, name2, name3){
    return (`Welcome ${name1},${name2},${name3}.`);
});




