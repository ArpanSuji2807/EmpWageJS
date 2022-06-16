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
//UC2- DailyWage of Part time or Full time &  UC3- Get woking hours & UC4- Wage for a month & UC5-Calculation of Wage with(Working hrs and Days) & UC6-Store Daily wage in Array
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;
const NUMBER_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
let empHrs = 0;
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
    function calcDailyWage(empHrs){
        return empHrs * WAGE_PER_HR
    }
    {
    let empDailyWageArray = new Array();
    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    let empDailyWageMap = new Map();
    let empDailyHrsMap = new Map();
    while(totalEmpHrs<MAX_HRS_IN_MONTH && totalWorkingDays < NUMBER_OF_WORKING_DAYS)
    {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        empHrs=getWorkingHrs(empCheck);
        totalEmpHrs += empHrs;
        empDailyWageArray.push(calcDailyWage(empHrs));
        empDailyWageMap.set(totalWorkingDays,calcDailyWage(empHrs))
        empDailyHrsMap.set(totalWorkingDays,empHrs);
    }
    let empWage =calcDailyWage(totalEmpHrs);
    console.log("Total Days: "+totalWorkingDays+ "Total Hours: "+totalEmpHrs+ "Employee Wage is: "+empWage);

    //Array Helper Functions
    //UC7A- Calculate total wage using Array forEach traversal or reduced method
    let totalEmpWage = 0;
    function sum (dailyWage){
        totalEmpWage += dailyWage;
    }
    empDailyWageArray.forEach(sum);
    console.log("UC7A - Total days: "+totalWorkingDays +"Total hrs: "+totalEmpHrs+"EmpWage: "+totalEmpWage)

    function totalWages(totalWage,dailyWage){
        return totalWage + dailyWage;
    }
    console.log("Emp wage with reduce: "+empDailyWageArray.reduce(totalWages,0));

    //UC7B - Show the day along with Daily Wage using Array map helper function
    let DailyCntr = 0;
    function mapDayWithWage(dailyWage) {
        DailyCntr++;
        return DailyCntr +" "+dailyWage;
    }
    let mapDayWithWageArr = empDailyWageArray.map(mapDayWithWage);
    console.log("UC7B- Daily Wage Map");
    console.log(mapDayWithWageArr);

    //UC7C- Show days when full time wage of 160 were earned
    function fulltimeWage(dailyWage) {
        return dailyWage.includes("160");
    }
    let fullDayWageArray = mapDayWithWageArr.filter(fulltimeWage);
    console.log("UC7C - Daily Wage Filter when Full time wage earned");
    console.log(fullDayWageArray);

    //UC7D - Find the first occurrence when full Time wage was earned using find function
    function findFullTimeWage(dailyWage) {
        return dailyWage.includes("160");
    }
    console.log("UC7D - First time fulltime wage was earned on Day"+mapDayWithWageArr.find(findFullTimeWage));

    //UC7E - Check if every element of full time wage is truely holding full time wage
    function isAllFullTimeWage(dailyWage){
        return dailyWage.includes("160");
    }
    console.log("UC7E - Check all element have full time wage:"+fullDayWageArray.every(isAllFullTimeWage));

    //UC7F - Check if there is any part Time wage 
    function isAnyPartTimeWage(dailyWage) {
        return dailyWage.includes("80");
    }
    console.log("UC7F - Check if any part Time Wage: "+mapDayWithWageArr.some(isAnyPartTimeWage));

    //UC7G - Find no. of days the employee worked
    function totalDaysWorked(numOfDays,dailyWage){
        if(dailyWage>0) return numOfDays+1;
        return numOfDays;
    }
    console.log("UC7G - Number of days employee worked: "+empDailyWageArray.reduce(totalDaysWorked,0));

    //UC8 - Map Functions
    console.log("UC8 - Emp wage map total hrs: "+Array.from(empDailyWageMap.values()).reduce(totalWages,0));

    //UC9 - Array Functions

    const findTotal = (totalVal,dailyVal) => {
        return totalVal + dailyVal;
    }
    let totalHours = Array.from(empDailyHrsMap.values()).filter(dailyHrs => dailyHrs >0).reduce(findTotal,0);
    let totalSalary = empDailyWageArray.filter(dailyWage => dailyWage,0).reduce(findTotal,0);
    console.log("UC9 - Emp wage with Arrow: "+"Total Hours: "+totalHours+"Total wages: "+totalSalary);

    let nonWorkingDays = new Array();
    let partWorkingDays = new Array();
    let fullWorkingDays = new Array();
    empDailyHrsMap.forEach((value,Key,map)=>{
        if(value == 8) fullWorkingDays.push(Key);
        else if(value == 4) partWorkingDays.push(Key);
        else nonWorkingDays.push(Key);
    });
    console.log("Full Working days: "+fullWorkingDays);
    console.log("Part Working days: "+partWorkingDays);
    console.log("Non Working days: "+nonWorkingDays);//UC10 -Store Day, Hours worked and Daily wage in a single object
   }
    let totalEmpHrs=0;
    let totalWorkingDays=0;
    let empDailyHrsAndWageArr=new Array();
    while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUMBER_OF_WORKING_DAYS)
    {
        totalWorkingDays++;
        let empCheck=Math.floor(Math.random() * 10) % 3;
        let empHrs=getWorkingHrs(empCheck);
        totalEmpHrs += empHrs;
        empDailyHrsAndWageArr.push(
        {
            dayNum: totalWorkingDays,
            dailyHours: empHrs,
            dailyWage: calcDailyWage(empHrs),
            toString()
            {
                return '\nDay' +this.dayNum+ '=> Working Hours is'+this.dailyHours+'And Wage Earned = '+this.dailyWage
            },
       });
    }
    console.log("Showing daily hours worked and wage earned: "+empDailyHrsAndWageArr);
}
