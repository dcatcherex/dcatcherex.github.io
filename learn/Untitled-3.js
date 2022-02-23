// const showWeekday = () =>{
//     const dateInput = document.getElementById('birthDateId').ariaValueMax;
//     const dayNo = new Date(dateInput).getDay();
//     const weekDay = getWeekDay(dayNo);
//     const weekDayElement = document.getElementById('weekDay');
//     weekDayElement.innerHTML = weekDay
// }

// const getWeekDay = (dayNo) => {
//     let weekDay;
//     switch(dayNo){
//         case 1: weekDay = 'Monday'; 
//             break;
//         case 2: weekDay = 'Tuesday'; 
//             break;
//         case 3: weekDay = 'Wednesday'; 
//             break;
//         case 4: weekDay = 'Thursday'; 
//             break;
//         case 5: weekDay = 'Friday'; 
//             break;
//         case 6: weekDay = 'Saturday'; 
//             break;
//         case 7: weekDay = 'Sunday';
//             break;
//         default: weekDay = 'Invalid Day';
//             break;
//     }
//     return weekDay;

// }

// console.log(getWeekDay(1));
// console.log(getWeekDay(2));
// console.log(getWeekDay(3));
// console.log(getWeekDay(4));
// console.log(getWeekDay(5));
// console.log(getWeekDay(6));
// console.log(getWeekDay(7));
// console.log(getWeekDay(9));
// console.log(getWeekDay(0));


// let isSleepy = true;

// const message2 = isSleepy ? 'Go to Bed':'I am ready to learn';
// console.log(message2);

function displayDay(day){
    let weekDay;
    switch(day){
        case 0: weekDay = 'Monday'; 
            break;
        case 1: weekDay = 'Tuesday'; 
            break;
        case 2: weekDay = 'Wednesday'; 
            break;
        case 3: weekDay = 'Thursday'; 
            break;
        case 4: weekDay = 'Friday'; 
            break;
        case 5: weekDay = 'Saturday'; 
            break;
        case 6: weekDay = 'Sunday';
            break;
        default: weekDay = 'Invalid Day';
            break;
    }
    return weekDay;

}

console.log(displayDay(0))
console.log(displayDay(1))
console.log(displayDay(2))
console.log(displayDay(3))
console.log(displayDay(4))
console.log(displayDay(5))

//execercise1
// const 
// function isBusinessHours(dayNumber, hourNumber){
//      let beginWeekend = 5;

    
//     console.log(displayDay(dayNumber%6));

//     //เป็นช่วงพักเที่ยงมั้ย 12-13
//     if((hourNumber>=12) && (hourNumber<=13)){
//         return false;
//     }

//     //ถ้าไม่ตรงกับวันหยุด คือ < 5 คือ workday
//     if(((dayNumber%7)<beginWeekend) && ((hourNumber>=9)&&(hourNumber<=18))){
//         console.log('it\'s a business hour');
//         return true;
//     }else{
//         return false;
//     }
// }

//exercise1
const isBusinessHours = (dayNumber,hourNumber) => {
    let beginWeekend = 5;

    
    console.log(displayDay(dayNumber%6));

    //เป็นช่วงพักเที่ยงมั้ย 12-13
    if((hourNumber>=12) && (hourNumber<=13)){
        return false;
    }

    //ถ้าไม่ตรงกับวันหยุด คือ < 5 คือ workday
    if(((dayNumber%7)<beginWeekend) && ((hourNumber>=9)&&(hourNumber<=18))){
        console.log('it\'s a business hour');
        return true;
    }else{
        return false;
    }
}


console.log(isBusinessHours(7, 10));
console.log(isBusinessHours(20, 9));
console.log(isBusinessHours(6, 15));
console.log(isBusinessHours(4, 14));
console.log(isBusinessHours(18, 11));


//execercise2
const getDayNumber = (janFirstDayNumber, yearDayNumber) => {
    //รับค่าว่าวันแรกของปีคือวันอะไร เช่น วันที่ 1 มกราเป็น วันเสาร์ = 5
 
    //รับค่าว่าวันที่ต้องการถามคือวันอะไร
    
    return (((yearDayNumber+janFirstDayNumber)-1)%7);


    //คำตอบคือวันของสัปดาห์ในปีนั้น ๆ เช่น เป็นวันพุธ = 2
    

}

console.log(getDayNumber(5,18));
console.log(getDayNumber(5,15));
console.log(getDayNumber(5,22));
console.log(getDayNumber(5,29));


//execercise3

const isBusinessHoursOfYear = (firstDayOfYear,dayNumber,hourNumber)=>{
    
    const dayOfWeek = getDayNumber(firstDayOfYear,dayNumber)
    return(isBusinessHours(dayOfWeek,hourNumber));
    
}

console.log(isBusinessHoursOfYear(5,32,10)) //2 กุมภา 
console.log(isBusinessHoursOfYear(5,27,12))
console.log(isBusinessHoursOfYear(5,32,10))

