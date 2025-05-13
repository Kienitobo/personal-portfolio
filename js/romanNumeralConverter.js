const romanNumeralTable = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  const convert = document.getElementById("convert-btn");
  const output = document.getElementById("output");
  const number = document.getElementById("number");
  
  const checkNumber=()=>{
    
    if(number.value===""){
      output.classList.remove('hidden');
      output.classList.add('invalidInput');
      output.innerHTML = `<p>Please enter a valid number</p>`;
    }else if(number.value<=0){
      output.classList.remove('hidden');
      output.classList.add('invalidInput');
      output.innerHTML = `<p>Please enter a number greater than or equal to 1</p>`;
    }else if(number.value>=4000){
      output.classList.remove('hidden');
      output.classList.add('invalidInput');
      output.innerHTML = `<p>Please enter a number less than or equal to 3999</p>`;
    }else{
      output.classList.remove('hidden');
      output.classList.remove('invalidInput');
      convertToRomanNumeral(number.value);
    }
  }
  convert.addEventListener('click',()=>{checkNumber();});
  
  const convertToRomanNumeral=(num)=>{
    let romanNumber='';
    for(const key in romanNumeralTable){
      const value = romanNumeralTable[key];
  
      while(num>=value){
        romanNumber+=key;
        num-=value;
        
      }
    }
    output.innerHTML=`<p>${romanNumber}</p>`;
  
  }
  