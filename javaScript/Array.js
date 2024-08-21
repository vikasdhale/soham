const array = [1,3,4, 5,"vikas"]//array declad


const myhero = ["vikas","sai"] // array declard

const myArry = new Array(1,3,4,5,6) //array declard

//console.log(array[2])//0p 4 array acces as kartat


//Array Method

// myArry.push(6)//
// myArry.push(7)
// myArry.pop();//last value remove karne



// console.log(myArry);

// myarr.unshift(9)
// myarr.shift();
// console.log(myarr);
myArry.unshift(28); //28 add honar 
//myArry.shift(); //28 remove
//console.log(myArry);

//console.log(myArry.includes(9));//ans false boolean data type
//console.log(myArry.indexOf(9));//-1 ans yenar jar exict value takli tar tyach index number yenar

//const newArr = new Array.join()//join pan karnar type pan change honar
//console.log(newArr);
//console.log(typeof newArr);
//console.log(myArry);
//console.log(myArry);



//slice, splice

console.log("A  ",myArry);
const myn1 = myArry.slice(1,3)

console.log(myn1);
console.log("B  ",myArry);


const myn2 = myArry.splice(1,3)
console.log("c  ",myArry); //interview all 3 question
console.log(myn2);