const characters = ["A","B","C","D","E","F","G","H","I","J","K","L",
"M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c",
"d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
"u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", 
"9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
"{","[","}","]",",","|",":",";","<",">",".","?","/"];

function randomIndex(){
    return Math.floor(Math.random()*characters.length)
}

let password=""
function generatePassword(){
   
    for (let i =0; i<15 ; i++){
        let word = characters[randomIndex()]
        password += word
    }
    return password
}


console.log(generatePassword())
//how to generate random 15 characters from characters
//现在可以只产生一个随机字母，如何一次性产生15个，放在一个string里，return那个string
