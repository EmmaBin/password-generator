const characters = ["A","B","C","D","E","F","G","H","I","J","K","L",
"M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c",
"d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
"u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", 
"9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
"{","[","}","]",",","|",":",";","<",">",".","?","/"];


let passwordLength = 15
let generateBtn = document.getElementById('generateBtn')
let firstPassword = document.getElementById('password1')
let secondPassword = document.getElementById('password2')
// let password=""
let input = document.getElementById('password-range')
input.addEventListener('change',(e)=>{
    passwordLength = Number(e.target.value)} ) 

//how to account for the e.target.value outside of the function








function randomIndex(){
    return Math.floor(Math.random()*characters.length)
}

function generatePassword(){
    let password=""
    for (let i =0; i<passwordLength ; i++){
        let word = characters[randomIndex()]
        password += word
    }
    return password
}

generateBtn.addEventListener('click', ()=>{
 
//why it needs to keep track of the previous return value, shouldn't it start fresh every time
//when the function is called?
//bug fixed by moving line 13 to line 23, if password is a global variable, it will be added new 15 letters every time when the function is called
    let password1 = generatePassword()
    let password2 = generatePassword()
   

    firstPassword.textContent = password1
    secondPassword.textContent = password2
    console.log(password1.length)
    console.log(password2.length)

})

