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
//UC2- DailyWage of Part time or Full time &  UC3- Get woking hours & UC4- Wage for a month
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;
const NUMBER_OF_WORKING_DAYS = 20;
{
    function getWorkingHrs(empCheck) {
    switch(empCheck)
    {
        case IS_PART_TIME:
            return PART_TIME_HRS;
        case IS_FULL_TIME:
            return FULL_TIME_HRS;
        default:
            return 0;
    }
    }
    let totalEmpHrs = 0;
    for(let day = 0; day < NUMBER_OF_WORKING_DAYS ; day++)
    {
        let empCheck = Math.floor(Math.random() * 10) % 3;
        let totalEmpHrs = getWorkingHrs(empCheck);
    }
    let empWage = totalEmpHrs*WAGE_PER_HR;
    console.log("Total Hours: "+totalEmpHrs+ "Employee Wage is: "+empWage);
}