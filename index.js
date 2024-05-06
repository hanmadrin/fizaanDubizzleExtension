// variable
// number 12.25
// string ""
// boolean true/false

// naming convention of variable
// var, let, const

// let a = [1, 2, {age:25}, 4, "5", 6, 7, [8], 9, false];
// let b = {
//     "name": "Rahim",
//     age: 26,
//     "1.+7" : ["seventeen",{age:17}],
// }
// console.log(b["age"])
// console.log(b["1.+7"])

// condition
// const limit = 1

// let sum = 0;
// for(i=1; i<=limit; i+=2){
    
//     sum += i;
// }

// console.log(sum);

// let i = 2;
// while(i<5){
//     console.log(i);
//     i++;
// }
// let i =5;
// do{
//     // console.log(i);
//     i++;
// }while(i<7)
// console.log(i)

// let a = 10;
// let b = 20;
// // let c = "My age is : "+a + " My brother's age is : "+b + ".";
// c = `My age is : ${a+1} My brother's age is : ${b*2}.`
// console.log(c)

// for(let i=0;i<5;){
//     console.log(++i);
// }
//  i++
const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function hello(age){
    if(age>10){
        // return "Buira";
    }else{
        // return "Kochi"
    }
}
const a = hello(7);

console.log(a)
// ()=>{
//     console.log("Hello");
// }
const b = async (a,b)=>{return `Hello ${a} and ${b}!`};


// const data = {
//     name : "Rimon",
//     age : 25,
//     number : "018178659778"
// }

const c = b("Asif","Rimon");
console.log(c)

// array
// object
// for loop
// while loop
// function
// class
// import
// export
// module
// promise
// async await
// callback
// event
// DOM