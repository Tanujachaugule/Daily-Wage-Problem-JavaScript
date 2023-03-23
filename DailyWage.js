
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