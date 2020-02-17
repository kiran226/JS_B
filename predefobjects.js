// console.log(Math);
// console.log(Math.PI);

// const area= 8.1;
// console.log(Math.round(area));

//round,floor,ceil,trunc methods

// const a= 9.9;
// console.log(Math.round(a));
// console.log(Math.floor(a));
// console.log(Math.ceil(a));
// console.log(Math.trunc(a));

//random number
// const random= Math.random();
// console.log(random);
// console.log(Math.round(random*100));

//primitive values - when we make changes to the primitive values,it wont affect the other

// let scoreOne=50;
// let scoreTwo=scoreOne;
// console.log(`ScoreOne : ${scoreOne}`,`ScoreTwo : ${scoreTwo}`);

// scoreOne=100;
// console.log(`ScoreOne : ${scoreOne}`,`ScoreTwo : ${scoreTwo}`);

//Reference types- when you make a changes to the reference type values, it will change the other values too.

const userOne={name:"kiran", age:25};
const userTwo=userOne;
console.log(userOne,userTwo);
userOne.age=26;
console.log(userOne,userTwo);