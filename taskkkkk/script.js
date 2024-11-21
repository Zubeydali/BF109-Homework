

const form=document.querySelector("form");
const btn=document.querySelector(".btn1");
const btn2=document.querySelector(".btn2");
const text=document.querySelector(".text");
const number=document.querySelector(".number");
const row=document.querySelector(".row"); 

let student=[];

form.addEventListener("submit", (element)=>{
    element.preventDefault()


    new1={
        id:Date.now(),
        name:text.value,
        score:number.value
    }

    student.push(new1)
    localStorage.setItem("student", JSON.stringify(student))

    // console.log(student)
})
 
let sum=0;
btn2.addEventListener("click", function(){
 
    student.forEach(element => {
    
       sum += +element.score;

        
    });
console.log(sum)



})







