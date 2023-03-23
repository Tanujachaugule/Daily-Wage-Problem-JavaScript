const IS_Part_Time = 1;
const IS_Full_Time = 2;
const Part_Time_hours = 4;
const Full_Time_Hours = 8;
const Wage_Per_Hour =20;
const Num_Of_Working_Days = 20;
const Max_Hours_in_Month = 160;

function getWorkingHours(empCheck){
    switch (empCheck){
        case IS_Part_Time:
            return Part_Time_hours;
        case IS_Full_Time:
            return Full_Time_Hours;
            default:
                return 0;
    }
}
    function calculateDailyWage(empHours){
        return empHours * Wage_Per_Hour;
}
let totalEmpHours = 0;
let totalWorkingDays = 0;
let empDAilyWageArr = new Array();

while (totalEmpHours <= Max_Hours_in_Month && totalWorkingDays < Num_Of_Working_Days){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHours =getWorkingHours(empCheck);
    totalEmpHours += empHours;
    empDAilyWageArr.push(calculateDailyWage(empHours));
}

let empWage = calculateDailyWage(totalEmpHours);
console.log("UC6 -Total Days: "+totalWorkingDays + "Total Hours: "+totalEmpHours +"Emp Wage: "+empWage);

//Array Helper Functions
// UC 7A - Calculate total Wage using Array forEach traversal or reduce method

let totolEmpWage =0;
function sum(dailyWage){
    totolEmpWage += dailyWage;
}
empDAilyWageArr.forEach(sum);
console.log("UC7A - Total Days: "+totalWorkingDays +"Total Hours: "+totalEmpHours+"Emp Wage: "+ totolEmpWage);
function totalWage(totalWage,dailyWage){
    return totalWage + dailyWage;
}
console.log("UC7A - Emp Wage with reduce:"+ empDAilyWageArr.reduce(totalWage,0));

//UC 7B - show the Day along with Daily Wage using Array map helper function
let dailyCntr = 0;
function mapDayWithWage(dailyWage){
    dailyCntr++;
    return dailyCntr +" = " + dailyWage;
}
let mapDayWithWageArr = empDAilyWageArr.map(mapDayWithWage);
console.log("UC7B - Daily Wage Map");
console.log(mapDayWithWageArr);

//UC 7C - Show Days when Full time wage of 160 were earned
function fulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC7C - Daily Wage Filter When Fulltime Wage Earned");
console.log(fullDayWageArr);

// UC 7D - Find the first occurrence when Full Time Wage was earned using find function
function findFulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC 7D - First time Fulltime wage was earnwd on Day: "+mapDayWithWageArr.find(findFulltimeWage));


//UC 7E - Check if Every Element of Full Time Wage is truely holding Full time wage
function isAllFulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC 6E - Check All Element have Full Time Wage: "+ fullDayWageArr.every(isAllFulltimeWage));

//UC 7F - Check if there is any Part Time Wage
function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
}
console.log("UC 7F - Check If Any Part Time Wage: "+ mapDayWithWageArr.some(isAnyPartTimeWage));

//UC 7G - Find the number of days the Employee Worked
function totalDaysWorked(numOfDays,dailyWage){
    if(dailyWage > 0) return numOfDays+1;
    return numOfDays;
}
console.log("UC 7G - Number of Days Emp Worked: "+ empDAilyWageArr.reduce(totalDaysWorked,0));