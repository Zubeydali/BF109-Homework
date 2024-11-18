const guess= document.querySelector(".guess");
const btn= document.querySelector(".btn");
const row=document.querySelector(".row");



let random=Math.floor(Math.random()*10)

btn.addEventListener("click", (element)=>{

  
    if(guess.value >random){
      
        row.innerHTML="boyuk"
    }
    else if(guess.value<random){
        row.innerHTML="kkicik"   
    }

    else{
        row.innerHTML="dogru"
    }
})

setTimeout(()=>{
row.innerHTML= `<h3>guess</h3>
<h3>random</h3>`
},1000)