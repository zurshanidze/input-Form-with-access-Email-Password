// console.log(document.forms)
// console.log(document.forms[0][0].name)
// console.log(document.forms[0][1])

let formContainer = document.querySelector(".form-container")
let form = document.querySelector(".form")
let welcomePage = document.querySelector(".welcome-page")

let emailContainer = document.querySelector(".email-container")
let passwordContainer = document.querySelector(".password-container")
let email = document.forms[0][0]
let password = document.forms[0][1]
let submit = document.getElementById("submit")
let backToSignInPage = document.querySelector(".backToSignInPage")


function checkValue_ToValidate(e, input1, input2){
  e.preventDefault()
  
  if(input1.value == "email@com" && input2.value == "enter"){
    console.log("Both inputs Successfully Completed", input1, input2)
    emailContainer.classList.remove("email-container-warning")
    passwordContainer.classList.remove("password-container-warning")
    welcomePage.style.display = "flex";
    input1.value = ""
    input2.value = ""
  }
  else if(input1.value == "email@com" && input2.value !== "enter"){
    console.log("email is correct", input1, input2)
    input2.style.border = "1px solid red"
    passwordContainer.classList.add("password-container-warning")
    let timeoutId = setTimeout(()=>{
      input2.style.border = "none"
      passwordContainer.classList.remove("password-container-warning")
    }, 2000)
  }
  else if(input1.value !== "email@com" && input2.value == "enter"){
    console.log("password is correct", input1, input2)
    input1.style.border = "1px solid red"
    emailContainer.classList.add("email-container-warning")
    let timeoutId = setTimeout(()=>{
      input1.style.border = "none"
      emailContainer.classList.remove("email-container-warning")
    }, 2000)
  }
  else if(input1.value !== "email@com" && input2.value !== "enter"){
    console.log("Please Provide Correct Value")
    input1.style.border = "1px solid red"
    emailContainer.classList.add("email-container-warning")
    console.log("Please Provide Strong Password")
    input2.style.border = "1px solid red"
    passwordContainer.classList.add("email-container-warning")
    
    let timeoutId = setTimeout(()=>{
      input1.style.border = "none"
      input2.style.border = "none"
      emailContainer.classList.remove("email-container-warning")
      passwordContainer.classList.remove("email-container-warning")
    }, 2000)
  }
}

submit.addEventListener("click", (e) => {checkValue_ToValidate(e, email, password)})

backToSignInPage.addEventListener("click", () => {welcomePage.style.display = "none";})