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
