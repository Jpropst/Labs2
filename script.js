// test Run A/C
let desiredTemp = 74;
// let actualTemp = 78;
//test run heat 
// let actualTemp = 70;
//test standby
let actualTemp = 70;

if (actualTemp > desiredTemp) {
    console.log('Run A/C');
}   else if (actualTemp < desiredTemp) {
    console.log('Run heat');
}   else (actualTemp === desiredTemp); {
    console.log('Standby');
}