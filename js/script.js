
// task1

// let number=0;
// let arr=[1,4,6,8,9,3];

// let bool;
// for(let i=0; i<arr.length; i++){

//     if(number=arr){
//         bool=true
//     }

//     else{
//         bool=false
//     }
// }
// console.log(bool)





const students=[

{ name:"Ali",scores:[90,85,92] },    
{ name:"Mammad",scores:[75,80,85] },    
{ name:"Camil",scores:[90,95,95] },    
{ name:"Davud",scores:[100,100,100] },    

]
let average=[]
let averages=[]
let maxAverage=[];
// let highScore=[];


for(let i=0; i<students.length; i++){


    let total=0;
    let scores=students[i].scores;
   for(let j=0; j<scores.length; j++){
  
    total +=scores[j] 
   }


    average = total / scores.length
   averages.push({name:students[i].name, average: average });}


   let highAverage
   highAverage=averages[0]

   for(z=1; z<averages.length; z++){
       if(averages[z].average>highAverage.average){
   
        highAverage = averages[z];

       
   
       }

     if(averages[z].average>90){

        maxAverage.push(averages[z].average)
       }

       



       
   
}


   
console.log(highAverage,"maxAverage",  maxAverage);



let words=["gunay", "namaz", "sus","'enene"];
let deyer=[]

for(let i=0; i<words.length; i++){
let word=words[i]



    for(let j=0; j<word.length/2; j++){
        if(word[j]==word[word.length-1 -j]
        ){
        deyer=true
        console.log(deyer)

        }
        else{
            deyer= false
            console.log(deyer)
        }
       
        
    }

}


