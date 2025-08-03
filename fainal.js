/** Problem -01 ( Divide the Asset ) */
var area = 400;
//write your code here
console.log(area/2);


/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here
if (money >=25000){
  console.log('Laptop');
} if (money >=10000){
  console.log('Cycle');
} if (money <=9999){
console.log('Chocolate');
}


/** Problem -03 ( Medicine Planner ) */
var lastDay = 11 ;
//write your code here
var Day = 1;
while(Day<=lastDay){
  if (Day % 3 === 0){
    console.log(`${Day} - medicine`);
  } else{
console.log(`${Day} - rest`);
  }
  Day++;
}


/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here
if(
  fileName.startsWith('#')|fileName.endsWith('.pdf')|fileName.endsWith('.docx')){
  console.log("Store");
}
else{
  console.log("Delete");
}


/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhankar" , roll: 1014 ,department: "cse" };
//write your code here
var email = student.name+student.roll+"."+student.department+"@ph.ac.bd"
console.log(email);


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
