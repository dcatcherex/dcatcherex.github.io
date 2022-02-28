const wash = (weight, time)=>{
    
    let level = 0;
    //ถ้าน้ำหนัก > 6kg ใช้น้ำเต็มถัง
    //ถ้าน้ำหนัก < 6kg ใช้น้ำครึ่งถัง
    isHalfWater = true;
    
    const isHalfWater = weight <= 6;

    if (isHalfWater) {

        level = 0.5;
    }else{
        level = 1;
    }
    console.log('water level', level);
    console.log('water time', time);
}

// console.log('dfsdf');


const printGroupName = (groupNo) => {
    let groupName;

    if (groupNo === 1) {
        groupName = 'pokkii';
    } else if (groupNo === 2) {
        groupName = 'ปาท่องโก๋';
    }else if (groupNo === 3) {
        groupName = 'ติวกระตุกจิต';
    }else if (groupNo === 4) {
        groupName = 'สี่ไม่ซี้';
    }else if (groupNo === 5) {
        groupName = 'Laugh Tale';
    }else if (groupNo === 6) {
        groupName = 'ซานตา';
    }else if (groupNo === 7) {
        groupName = 'ปาท่องโก๋';
    }else if (groupNo === 8) {
        groupName = 'Infinity';
    }else if (groupNo === 10) {
        groupName = 'Ben Ten';
    }else if (groupNo === 11) {
        groupName = 'เต้าหู้';
    }else if (groupNo === 12) {
        groupName = 'แป้งเย็น';
    }else{
        groupName = 'คุณนัน'
    }

    console.log('Your Group Name =', groupName);
}

printGroupName(1);
printGroupName(8);




// 1 pokkii
// 2 ปาท่องโก๋
// 3ติวกระตุกจิต
// 4สี่ไม่ซี้
// 5Laugh Tale
// 6ซานตา
// 7สายลับ เจมส์บอนด์
// 8Infinity
// 9Ben Ten
// 10เต้าหู้
// 11แป้งเย็น
