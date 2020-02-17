// querySelector and querySelectorAll

// const para= document.querySelector('body > div:nth-child(1) > p:nth-child(2)');
// console.log(para);

// const paras= document.querySelectorAll('p')
// console.log(paras[2]);

// const paras= document.querySelectorAll('p');
// paras.forEach(para=>{
//     console.log(para);
// })

// const errors= document.querySelectorAll(".error");
// console.log(errors);

//getElementById

// var paras= document.getElementById('dom');
// console.log(paras);

//getElementsByClassName

// var paras= document.getElementsByClassName('error');
// console.log(paras);

//note: querySelector and querySelectorAll have the node list and can execute the forEach method, whereas in
//HTMLCollection //document.getElementsByClassName,document.getElemnetById,document.getElementByTagName we can't
//use the forEach method.

//getElementsByTagName

// var paras= document.getElementsByTagName('p');
// console.log(paras);

//getting the innerHTML data

// const para=document.querySelector("p");
// console.log(para.innerText);

//changing the innerText data
// const para= document.querySelector('p');
// para.innerText="Ninjas are awesome";
// console.log(para);

//If we want to append the data, we write like below

// const para= document.querySelector('p');
// para.innerText+=" Hey ninjas!!"
// console.log(para);

//If we want to change the data to respective elements and also append the data

// const paras=document.querySelectorAll('p');
// paras.forEach(para=>{
//     para.innerText+=" hey Ninjas";
//     console.log(para);
// })

//If we want to change the inner connect, check below:

//const content=document.querySelector('.content');
// console.log(content.innerHTML);
// content.innerHTML+=" <h1>THIS IS THE NEW CONTENT</h1>";
// console.log(content);

// const paras= document.querySelectorAll('p');
// paras.forEach(para=>{
//     console.log(para.innerText);
//     para.innerText+="new Text";
// })

// const content=document.querySelector('.content');
// const people=['ram','krishna','shiva'];
// people.forEach(person=>{
//     content.innerHTML +=` <p>${person}</p>`;
// })


// const link=document.querySelector('a');
// console.log(link.getAttribute('href'));
// link.setAttribute('href',"https://www.facebook.com");
// link.innerHTML="Facebook";

// const msg= document.querySelector('p');
// console.log(msg.getAttribute('class'));

// msg.setAttribute('class',"fine");
// msg.setAttribute('style',"color:green")

//on adding style attribute in HTML,its getting overriding on adding a new attribute
//To overcome above, use the style attribute and define the respective properties

// const title=document.querySelector('h1');
// title.setAttribute('style','margin:50px');
// console.log(title.style);
// console.log(title.style.color);

// title.style.margin="50px";
// title.style.color="green";
// title.style.fontSize="120px";
// title.style.margin='';

//how to change the classes from JavaScript
// const content= document.querySelector('p');
// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');
// content.classList.remove('success');

const paras= document.querySelectorAll('p');
paras.forEach(p=>{
    // console.log(p.innerText);  //It will get hide, if we add diplay none.It will hide in ui and console.
    // console.log(p.textContent);  //It won't get hide regardless ,even though if we hide.It will diplay in console and hide in Ui
    if(p.textContent.includes('success')){
        p.classList.add('success');   
    }
    if(p.textContent.includes('error')){
        p.classList.add('error')
    }
})

const title= document.querySelector('.title');
title.classList.toggle("test");
title.classList.toggle("test");
