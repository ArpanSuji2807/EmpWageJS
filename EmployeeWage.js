//UC1 --Check employe is present or absent
{
    const IS_ABSENT = 0;
    let empCheck = Math.floor(Math.random() * 10) % 2;
    if(empCheck == IS_ABSENT)
    {
        console.log("Employee is Absent");
    }
    else{
        console.log("Employee is Present");
    }
}
//UC2- DailyWage of Part time or Full time
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;
{
    let empHrs = 0;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    switch(empCheck)
    {
        case IS_PART_TIME:
            empHrs = PART_TIME_HRS;
            break;
        case IS_FULL_TIME:
            empHrs = FULL_TIME_HRS;
        default:
            empHrs = 0;
    }
    let empWage = empHrs*WAGE_PER_HR;
    console.log("Employee Wage is: "+empWage);
}