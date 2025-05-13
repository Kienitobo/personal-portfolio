const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

checkBtn.addEventListener("click",()=>{
  palindrome(textInput)
});
const palindrome =(input)=>{
  const original = input.value.toLowerCase().replace(/[\W_]/g, '');
  const reverse = original.split("").reverse().join("");
  if(input.value===""){
    alert("Please input a value")

  }else if(reverse===original){
   
    result.classList.add = 'card-body';


    result.innerHTML = `${input.value} is a palindrome`;
  }else{
    result.classList.add = 'card-body';

    result.innerHTML =`${input.value} is not a palindrome`;
  }
}