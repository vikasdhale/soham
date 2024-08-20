//two memory in js
//1.stack primitive data  memory use 

//1.heap non- primitive data  memory use 

//ex of heap 
let myYouTubename = "vikas dhale"

let anothername =  myYouTubename


anothername ="chai aur code"
console.log(anothername);
console.log(myYouTubename);

let userOne = {
    email : "vikasdhale@123",
    upi: 123
}

let userTwo = userOne
userTwo.email = "vikasdghale@567"
console.log(userOne.email)
console.log(userTwo.email) //both same value 






