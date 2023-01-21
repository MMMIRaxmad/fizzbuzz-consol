let numbers = [9,5,6,8,7,2,5,15];

let FIZZBUZZ = []
let BUZZ = []
let FIZZ = []


for(let i = 0; i < numbers.length; i++ ){
  
  if (numbers[i] % 5 === 0){
        FIZZ.push(numbers[i]);
      }
   else if( numbers[i] % 3 === 0){
        BUZZ.push(numbers[i]);
      }
      else{
        FIZZBUZZ.push(numbers[i]);
      }
   

}
 console.log(FIZZBUZZ , "Aralash sonlar" );
console.log(FIZZ , "5 ga bolinadigan");
console.log(BUZZ, "3 ga bolinadigan") ;
