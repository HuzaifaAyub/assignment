

  
  let temperatureInFarenheit = (celsius) => {
    let temperature = (celsius*9/5)+32
    return temperature;
   }
   prompt
   console.log(temperatureInFarenheit(89));
  

   let findEvenOdd = (number) => {
    if (number % 2== 0) {
      return "even";
       }
       else { return "odd";
       }
      }
      console.log(findEvenOdd(20)); 


      let areaOfCircle =(radius) =>{
        let area=3.142*radius*radius;
        return area;}

     console.log(areaOfCircle(67));
     
     let palindromeCheck=(string)=>{
      return  string === string.split('').reverse().join('');
     }
        let inputstring ="mom";
       console.log(palindromeCheck(inputstring));

       const numbers = [10, 5, 20, 8, 15];
       const maxNumber = numbers.reduce((max, current) => (current > max ? current : max), numbers[0]);
       console.log(`The maximum number is: ${maxNumber}`);
       


     let factorial=(n)=>{
      let result=1;
      for(let i =1; i<=n; i++){
        result *= i;
      }
      return result;

     }
     const number=6;
     const result=factorial(number);
     console.log(`factorial of ${number} is ${result}`);


     let reverseString=(str)=>{
      return  str.split('').reverse().join('');
     }
     const orignalstr ='hello world';
     const reversedStr = reverseString(orignalstr);
     console.log(reversedStr);

     let calculateBmi=(weightkg,heightm)=>{
     let Bmi= weightkg/heightm*heightm;
      return Bmi;
    }
    let weightkg=44;
    let heightm=32;
     console.log (calculateBmi(weightkg,heightm));
   