/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
var currentSalary = startingSalary;
for (var year = 1; year <= experience; year++) {
  currentSalary += currentSalary * 0.05;
}
currentSalary = currentSalary.toFixed(2);
console.log(currentSalary);
