console.log("helo java")

//String in jsit accept single cote or double cote

const name = "vikas"
const repoCount = 50

// console.log(name + repoCount + " value") //aaj psun +ne concat karych nahi

console.log(`hello my name is ${name} and my repo coiunt ${repoCount} `); // use `` backlash ithe  string interpolution yet


//string declared
const gameName = new String(`vikas-dh`)

console.log(gameName[0])//op v betnar

console.log(gameName.__proto__); // object 
{}

console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));//k
console.log(gameName.indexOf('s'));

const  newString = gameName.substring(0,4)//not use negative 

console.log(newString);

const anotherString = gameName.slice(-8 ,4)

console.log(anotherString); 

const newString1 = "   hites  "
console.log(newString1.trim());//space remove by trim


const  url = "https://hitesh.com/hites%20choudhary" //brower gap det nahi tar automatic fill kar

console.log(url.replace(`%20` , '-'))//it remove %20


console.log(url.includes('hitesh')) // hitesh aahe ka nahi true ans

console.log(gameName.split('-')); // to form array array abannar
