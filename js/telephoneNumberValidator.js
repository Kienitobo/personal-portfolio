const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");
const uniRegex = /^(1)?\s?(\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
const altRegex = /^(1)?\s?(\(\d{3}\))[\s-]?\d{3}[\s-]?\d{4}$/;
const numberList =[uniRegex, altRegex];

const isValid = (msg) => numberList.some((regex)=>regex.test(msg));

checkBtn.addEventListener("click", () => {
  if (userInput.value === "") {
    alert("Please provide a phone number");
  } 

  result.textContent = isValid(userInput.value)? `Valid US number: ${userInput.value}`:`Invalid US number: ${userInput.value}`;
    userInput.value = "";
  
});

clearBtn.addEventListener("click", () => {
  result.textContent = "";;
});

/**Test cases
 * 
 * 11 555-555-5555
 * 55 55-55-555-5
 * (555-555-5555
 * 2(757)622-7382
 * -1 (757) 622-7382
 * 123**&!!asdf#
 * 1 555-555-5555
 * 1 (555) 555-5555
 * 1(555)555-5555
 * 1 555 555 5555
 * 5555555555
 * 555-555-5555
 * (555)555-5555
 */