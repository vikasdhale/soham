const marvel_heros = ["thor" , "Iroman","spiderman" ]

const dc_heros = ["superman" , "flash" ,"batman"] 

// marvel_heros.push(dc_heros)

//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);//flash


// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);//concat
// console.log(marvel_heros);

const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros)

   
const another_array = [1,2,3 , [4,5,6], 7, [6,7,[4,5]]]

const real_anoter_array = another_array.flat(Infinity)
console.log(real_anoter_array);


 console.log (Array.isArray("vikas"));//false not arry
 console.log (Array.from("vikas"));//array banun denar

 console.log(Array.from({name: "vikas"}));//empty[]

 let score1  = 100
 let score2  = 100
 let score3  = 100

 console.log(Array.of(score1,score2,score3))




