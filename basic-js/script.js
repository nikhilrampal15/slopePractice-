module.exports = {
  sum: function sum(num1,num2){
        return num1+num2;
  },
  isEqual: function isEqual (num1,num2){
            if(num1===num2){
              return true;
            }
            else{
              return false;
            }
  },
  isEven: function isEven (num){
            if(num%2===0){
              return true;
            }
            else{
              return false;
            }
  },
  isDivisible: function isDivisible (num1,num2){
                if(num1 ===0 || num2 ===0 ){
                  throw "invalid arguments"
                }
                else if(num1 % num2 === 0){
                  return true;
                }
                else{
                  return false
                }
  },
  discountPercentage: function discountPercentage($,discountAmount){
                      if(discountAmount > 100 || discountAmount < 0){
                        return("please enter a number between 0 and 100")
                      }
                      else{
                        return $ * (discountAmount)/100
                      }
  },
  isVowel: function isVowel(string){
            string.toLowerCase();
            for(var i=0;i<string.length;i++) {
              if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
                return true;
              }
              else {
                return false;
              }
            }
  },
  celsiusToFahrenheit: function celciusToFarenheit(celcius){
                    return celcius * 9/5 +32
  },
  biggestOfThree: function biggestOfThree (num1,num2,num3) {
                  if(num1 > num2 && num1 >num3){
                    return num1;
                  }
                  else if(num2>num1 && num2 > num3){
                    return num2;
                  }
                  else if(num3>num2 && num3>num1) {
                    return num3;
                  }
                  else{
                    throw "Numbers are equal"
                  }
  },
  // Bonus
  federalIncomeTaxCalculator: function federalIncomeTaxCalculator(){
                              if (salary >= 1 && salary <= 9075) {
                                  return salary * 0.1;
                                  }
                              else if (salary >= 9076 && salary <= 36900) {
                                  return salary * 0.15;
                                  }
                              else if (salary >= 36901 && salary <= 89350) {
                                  return salary * 0.25;
                                  }
                              else if (salary >= 89351 && salary <= 186350) {
                                  return salary * 0.28;
                                  }
                              else if (salary >= 186351 && salary <= 405100) {
                                  return salary * 0.33;
                                  }
                              else if (salary >= 405101 && salary <= 406750) {
                                  return salary * 0.35;
                                  }
                              else if (salary > 406750) {
                                  return salary * 0.396;
                                  }
  }
  };

