// function greet(){
//     console.log("hello there")
// }
// greet();
// greet();
// greet();


// speak();
// speak();
// speak();
// const speak= function(){
//     console.log("ram")
// }

//hoisting is possible for function declaration and not possible for function expression

// const param= function(name='kyle',time="noon"){
//     console.log(`good ${time} ${name}`)
// };
// param('mario','night');
// param();
// param('kane');

//returning values from the functions

// const calArea=function(radius){
//     let area= 3.14*radius**2
//     console.log(area);
// };
// calArea(5);


// const calArea= function(radius){
//     return 3.14*radius**2
// };
// let a=calArea(5);
// console.log(a);
// const calVol= function(a){
//     console.log(`${a} value`)
// };
// calVol(79);

// const greet=()=>console.log(`hello world`);
// greet();

// const bill= function(products,tax){
//     let total=0;
//     for(let i=0;i<products.length;i++){
//         total+=(products[i]+products[i])*tax;
//     }
//     return total;
// };
// console.log(bill([1,2,4],2))

//functions

// const greet=()=>'hello';
// let result= greet();
// console.log(result);

//methods
// A method is invoked using dot notation
// A function defined in an associated object or data type is nothing but a method.
// let name="ram";
// console.log(name.toUpperCase());


//callback functions
// const myFunc=(callbackFunc)=>{
//     let value=50;
//     callbackFunc(value);
// }
// myFunc(function(v){
//     console.log(v);
// })


//forEach method
// let people=['ram','krishna','shiva','ganesh','subramanya'];
// people.forEach(function(person){
//     console.log(person);
// })

//arrow functions
// let people=['ram','krishna','shiva','ganesh','subramanya'];
// people.forEach((person,index)=>{
//     console.log(index,person);
// })

//using for loop
// let people=['ram','krishna','shiva'];
// for(let i=0;i<people.length;i++){
//     console.log(people[i]);
// }

// let people=['ram','krishna','shiva','ganesh','subramanya'];
// const logPerson=(person,index)=>{
//     console.log(`${index} - hello ${person}`)
// }
// people.forEach(logPerson);

const ul= document.querySelector('.people');
const people=['ram','krishna','shiva','ganesh','subramanya'];
let html=``;
people.forEach(function(person){
    html+=`<li style="color:purple">${person}</li>`
})
console.log(html);
ul.innerHTML=html;